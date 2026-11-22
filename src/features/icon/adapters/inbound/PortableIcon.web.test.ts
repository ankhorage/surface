import { mkdtemp, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { expect, test } from 'bun:test';

import type { PortableIcon } from './PortableIcon.web';

type WebPortableIcon = typeof PortableIcon;

const webPortableIconBundle = await bundleWebPortableIcon();

test('web icon adapter remains a native-free platform boundary', async () => {
  const portableIconType: WebPortableIcon | undefined = undefined;
  expect(portableIconType).toBeUndefined();

  const source = await Bun.file('src/features/icon/adapters/inbound/PortableIcon.web.tsx').text();

  expect(source).not.toContain('react-native-svg');
  expect(source).not.toContain('/static');
  expect(source).toContain('/glyphmaps/');
  expect(source).toContain('/fonts/');
});

test('RN Web leaves an intrinsic-color SVG Image free of a tint style', async () => {
  const { intrinsic, tinted } = await renderWebPortableIcons(webPortableIconBundle);

  expect(intrinsic).not.toContain('filter');
  expect(tinted).toContain('filter');
});

/*** Bundles the web adapter against RN Web without loading it into Bun's shared module registry. */
async function bundleWebPortableIcon(): Promise<WebPortableIconBundle> {
  const directory = await mkdtemp(join(process.cwd(), '.surface-portable-icon-web-'));
  const reactNativeWeb = fileURLToPath(
    new URL('../../../../../node_modules/react-native-web/dist/cjs/index.js', import.meta.url),
  );
  const result = await Bun.build({
    entrypoints: [fileURLToPath(new URL('./PortableIcon.web.tsx', import.meta.url))],
    external: ['react'],
    format: 'esm',
    outdir: directory,
    plugins: [
      {
        name: 'react-native-web',
        setup(builder) {
          builder.onResolve({ filter: /^react-native$/u }, () => ({ path: reactNativeWeb }));
        },
      },
    ],
    target: 'bun',
  });

  const output = result.outputs.find(({ path }) => path.endsWith('.js'));
  if (!result.success || output === undefined) {
    throw new Error(result.logs.map((log) => log.message).join('\n'));
  }

  try {
    return { directory, moduleUrl: pathToFileURL(output.path).href };
  } catch (error) {
    await rm(directory, { force: true, recursive: true });
    throw error;
  }
}

interface WebPortableIconBundle {
  readonly directory: string;
  readonly moduleUrl: string;
}

/*** Renders the bundled RN Web adapter in a child process to keep DOM detection isolated. */
async function renderWebPortableIcons(bundle: WebPortableIconBundle) {
  const source = `
    import React from 'react';
    import { renderToStaticMarkup } from 'react-dom/server';
    const { PortableIcon } = await import(${JSON.stringify(bundle.moduleUrl)});
    const render = (props) => renderToStaticMarkup(React.createElement(PortableIcon, props));
    console.log(JSON.stringify({
      intrinsic: render({ color: '#123456', colorMode: 'intrinsic', size: 18, source: { uri: 'https://example.com/completed.svg' } }),
      tinted: render({ color: '#123456', size: 18, source: { uri: 'https://example.com/completed.svg' } }),
    }));
  `;
  const subprocess = Bun.spawn([process.execPath, '-e', source], {
    stderr: 'pipe',
    stdout: 'pipe',
  });
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(subprocess.stdout).text(),
    new Response(subprocess.stderr).text(),
    subprocess.exited,
  ]);

  await rm(bundle.directory, { force: true, recursive: true });
  expect(exitCode, stderr).toBe(0);
  return JSON.parse(stdout) as { intrinsic: string; tinted: string };
}
