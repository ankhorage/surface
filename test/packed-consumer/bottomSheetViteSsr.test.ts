import { expect, test } from 'bun:test';
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { chromium } from 'playwright-core';

const packageRoot = new URL('../..', import.meta.url).pathname;

test('packed bottom-sheet resolves RNW adapters through Vite SSR', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'surface-bottom-sheet-vite-ssr-'));
  const tarballDirectory = join(directory, 'tarball');
  const consumerDirectory = join(directory, 'consumer');

  try {
    await packSurface(tarballDirectory);
    await writeConsumer(consumerDirectory, await resolveTarballPath(tarballDirectory));
    await run(consumerDirectory, ['bun', 'install', '--ignore-scripts']);
    await run(consumerDirectory, [
      'bunx',
      '--bun',
      'vite@8.3.8',
      'build',
      '--ssr',
      'src/ssr.tsx',
      '--outDir',
      'dist/ssr',
    ]);

    const bundle = await readFile(join(consumerDirectory, 'dist', 'ssr', 'ssr.js'), 'utf8');
    expect(bundle).not.toContain('@gorhom/bottom-sheet');
    expect(bundle).not.toContain('codegenNativeComponent');
    const markup = await run(consumerDirectory, ['node', 'dist/ssr/ssr.js']);
    expect(markup).toContain('Surface SSR');

    await run(consumerDirectory, [
      'bunx',
      '--bun',
      'vite@8.3.8',
      'build',
      '--outDir',
      'dist/client',
    ]);
    await assertHydration(consumerDirectory, markup);
  } finally {
    await rm(directory, { force: true, recursive: true });
  }
}, 120_000);

/*** Packs the checkout so the consumer can only resolve the published package artifact. */
async function packSurface(destination: string): Promise<void> {
  await run(packageRoot, [
    'bun',
    'pm',
    'pack',
    '--ignore-scripts',
    '--quiet',
    '--destination',
    destination,
  ]);
}

/*** Resolves the one package archive emitted for the independent consumer. */
async function resolveTarballPath(directory: string): Promise<string> {
  const tarballs = (await readdir(directory)).filter((entry) => entry.endsWith('.tgz'));
  if (tarballs.length !== 1) {
    throw new Error(`Expected one Surface tarball, received ${tarballs.length}.`);
  }
  return join(directory, tarballs[0]);
}

/*** Writes a Vite SSR consumer that aliases React Native to its RNW implementation. */
async function writeConsumer(directory: string, tarballPath: string): Promise<void> {
  await mkdir(join(directory, 'src'), { recursive: true });
  await writeFile(
    join(directory, 'index.html'),
    '<div id="root"></div><script type="module" src="/src/client.tsx"></script>\n',
  );
  await writeFile(
    join(directory, 'package.json'),
    `${JSON.stringify(
      {
        dependencies: {
          '@ankhorage/surface': `file:${tarballPath}`,
          react: '19.3.0',
          'react-dom': '19.3.0',
          'react-native-web': '~0.21.4',
        },
        devDependencies: { vite: '8.3.8' },
        name: 'surface-bottom-sheet-vite-ssr-consumer',
        private: true,
        type: 'module',
        version: '0.0.0',
      },
      null,
      2,
    )}\n`,
  );
  await writeFile(
    join(directory, 'vite.config.ts'),
    `import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  build: { manifest: true },
  resolve: {
    alias: { 'react-native': fileURLToPath(new URL('./node_modules/react-native-web', import.meta.url)) },
  },
  ssr: { noExternal: true },
});
`,
  );
  await writeFile(
    join(directory, 'src', 'ssr.tsx'),
    `import React from 'react';
import { renderToString } from 'react-dom/server';
import { BottomSheetProvider, BottomSheetView } from '@ankhorage/surface/bottom-sheet';

process.stdout.write(renderToString(<BottomSheetProvider><BottomSheetView>Surface SSR</BottomSheetView></BottomSheetProvider>));
`,
  );
  await writeFile(
    join(directory, 'src', 'client.tsx'),
    `import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BottomSheetProvider, BottomSheetView } from '@ankhorage/surface/bottom-sheet';

hydrateRoot(document.querySelector('#root')!, <BottomSheetProvider><BottomSheetView>Surface SSR</BottomSheetView></BottomSheetProvider>);
document.body.dataset.hydrated = 'true';
`,
  );
}

/*** Loads the packed Vite client in Chromium so RNW hydrates the server-rendered sheet boundary. */
async function assertHydration(directory: string, markup: string): Promise<void> {
  const manifest = JSON.parse(
    await readFile(join(directory, 'dist', 'client', '.vite', 'manifest.json'), 'utf8'),
  ) as Record<string, { file: string; isEntry?: boolean }>;
  const entry = Object.values(manifest).find((asset) => asset.isEntry);
  if (entry === undefined) throw new Error('Expected a Vite client entry.');

  const server = Bun.serve({
    fetch: (request) => {
      const pathname = new URL(request.url).pathname;
      if (pathname === '/') {
        return new Response(
          `<!doctype html><html><body><div id="root">${markup}</div><script type="module" src="/${entry.file}"></script></body></html>`,
          { headers: { 'content-type': 'text/html; charset=utf-8' } },
        );
      }
      if (pathname === '/favicon.ico') return new Response(null, { status: 204 });
      return new Response(Bun.file(join(directory, 'dist', 'client', pathname)));
    },
    port: 0,
  });
  const browser = await chromium.launch();

  try {
    const page = await browser.newPage();
    await page.goto(server.url.toString());
    await expectHydration(page);
  } finally {
    await browser.close();
    server.stop();
  }
}

/*** Retries the browser-visible hydration marker until React Native Web commits it. */
async function expectHydration(
  page: {
    locator: (selector: string) => { getAttribute: (name: string) => Promise<string | null> };
  },
  attempts = 250,
): Promise<void> {
  const hydrated = await page.locator('body').getAttribute('data-hydrated');
  if (hydrated === 'true' || attempts === 0) {
    expect(hydrated).toBe('true');
    return;
  }
  await Bun.sleep(20);
  return expectHydration(page, attempts - 1);
}

/*** Runs a consumer command with task-local package and temporary caches. */
async function run(directory: string, args: string[]): Promise<string> {
  const cacheDirectory = join(directory, '.cache');
  const temporaryDirectory = join(directory, '.tmp');
  await mkdir(temporaryDirectory, { recursive: true });
  const subprocess = Bun.spawn(args, {
    cwd: directory,
    env: { ...process.env, BUN_INSTALL_CACHE_DIR: cacheDirectory, TMPDIR: temporaryDirectory },
    stderr: 'pipe',
    stdout: 'pipe',
  });
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(subprocess.stdout).text(),
    new Response(subprocess.stderr).text(),
    subprocess.exited,
  ]);
  if (exitCode !== 0) throw new Error(`${args.join(' ')} failed:\n${stdout}${stderr}`);
  return stdout;
}
