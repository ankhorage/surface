import { expect, test } from 'bun:test';
import { mkdir, mkdtemp, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const packageRoot = new URL('../..', import.meta.url).pathname;

test('packed theme imports through Node ESM, NodeNext, and Bun', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'surface-theme-consumer-'));
  const tarballDirectory = join(directory, 'tarball');
  const consumerDirectory = join(directory, 'consumer');

  try {
    await packSurface(tarballDirectory);
    await writeConsumer(consumerDirectory, await resolveTarballPath(tarballDirectory));
    await run(consumerDirectory, ['bun', 'install']);

    expect(await run(consumerDirectory, ['node', 'node.mjs'])).toBe('default:light');
    expect(await run(consumerDirectory, ['bun', 'bun.ts'])).toBe('default:light');
    await run(consumerDirectory, ['bun', 'x', 'tsc', '--noEmit']);
  } finally {
    await rm(directory, { force: true, recursive: true });
  }
}, 120_000);

/*** Pack the checkout so every consumer proof resolves the published package shape. */
async function packSurface(destination: string): Promise<void> {
  await run(packageRoot, ['bun', 'pm', 'pack', '--destination', destination]);
}

/*** Resolve the one packed package artifact produced for the isolated consumer. */
async function resolveTarballPath(directory: string): Promise<string> {
  const tarballs = (await readdir(directory)).filter((entry) => entry.endsWith('.tgz'));
  if (tarballs.length !== 1) {
    throw new Error(`Expected one Surface tarball, received ${tarballs.length}.`);
  }
  return join(directory, tarballs[0]);
}

/*** Write a NodeNext consumer that exercises the public theme subpath. */
async function writeConsumer(directory: string, tarballPath: string): Promise<void> {
  await mkdir(directory, { recursive: true });
  await writeFile(
    join(directory, 'package.json'),
    `${JSON.stringify(
      {
        dependencies: { '@ankhorage/surface': tarballPath, typescript: '6.0.3' },
        name: 'surface-theme-consumer',
        private: true,
        type: 'module',
        version: '0.0.0',
      },
      null,
      2,
    )}\n`,
  );
  await writeFile(
    join(directory, 'node.mjs'),
    "import { createTheme } from '@ankhorage/surface/theme';\nprocess.stdout.write(`${createTheme().config.id}:${createTheme().colorDiagnostics.mode}`);\n",
  );
  await writeFile(
    join(directory, 'bun.ts'),
    "import { createTheme } from '@ankhorage/surface/theme';\nprocess.stdout.write(`${createTheme().config.id}:${createTheme().colorDiagnostics.mode}`);\n",
  );
  await writeFile(
    join(directory, 'theme.ts'),
    "import { createTheme, type SurfaceTheme } from '@ankhorage/surface/theme';\nconst theme: SurfaceTheme = createTheme();\nvoid theme;\n",
  );
  await writeFile(
    join(directory, 'tsconfig.json'),
    `${JSON.stringify(
      {
        compilerOptions: {
          module: 'NodeNext',
          moduleResolution: 'NodeNext',
          noEmit: true,
          skipLibCheck: true,
          strict: true,
          target: 'ES2022',
        },
        include: ['theme.ts'],
      },
      null,
      2,
    )}\n`,
  );
}

/*** Run one isolated consumer command and expose its diagnostics on failure. */
async function run(directory: string, arguments_: string[]): Promise<string> {
  const childProcess = Bun.spawn(arguments_, {
    cwd: directory,
    env: { ...process.env, BUN_INSTALL_CACHE_DIR: join(directory, '.cache'), TMPDIR: directory },
    stderr: 'pipe',
    stdout: 'pipe',
  });
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(childProcess.stdout).text(),
    new Response(childProcess.stderr).text(),
    childProcess.exited,
  ]);
  if (exitCode !== 0) throw new Error(`${arguments_.join(' ')} failed:\n${stdout}${stderr}`);
  return stdout;
}
