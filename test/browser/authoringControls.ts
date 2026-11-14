import { expect, test } from 'bun:test';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

test('packed authoring controls bundle through Vite and React Native Web without native safe-area codegen', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'surface-authoring-controls-'));
  const packageDirectory = join(directory, 'package');
  const consumerDirectory = join(directory, 'consumer');
  try {
    const tarballPath = (
      await run([
        'bun',
        'pm',
        'pack',
        '--destination',
        packageDirectory,
        '--ignore-scripts',
        '--quiet',
      ])
    ).trim();
    await writeConsumerFiles(consumerDirectory, tarballPath);
    await run(['bun', 'install', '--ignore-scripts'], consumerDirectory, directory);
    await run(['bunx', '--bun', 'vite@8.3.8', 'build'], consumerDirectory, directory);

    const manifest = JSON.parse(
      await readFile(join(consumerDirectory, 'dist', '.vite', 'manifest.json'), 'utf8'),
    ) as Record<string, { file: string; isEntry?: boolean }>;
    const entry = Object.values(manifest).find((asset) => asset.isEntry);
    if (!entry) throw new Error('Vite did not emit a browser entry bundle.');
    const bundle = await readFile(join(consumerDirectory, 'dist', entry.file), 'utf8');
    expect(bundle).not.toContain('react-native-safe-area-context');
    expect(bundle).not.toContain('codegenNativeComponent');
  } finally {
    await rm(directory, { force: true, recursive: true });
  }
}, 60_000);

/*** Executes one isolated consumer command and reports its output on failure. */
async function run(args: string[], cwd = process.cwd(), cacheDirectory?: string): Promise<string> {
  const subprocess = Bun.spawn(args, {
    cwd,
    env: {
      ...process.env,
      BUN_INSTALL_CACHE_DIR: cacheDirectory ?? join(cwd, '.bun-cache'),
    },
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

/*** Writes a Vite consumer that exercises the complete public authoring-control boundary. */
async function writeConsumerFiles(directory: string, tarballPath: string): Promise<void> {
  await mkdir(join(directory, 'src'), { recursive: true });
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
        name: 'surface-authoring-controls-consumer',
        private: true,
        version: '0.0.0',
      },
      null,
      2,
    )}\n`,
  );
  await writeFile(
    join(directory, 'index.html'),
    '<div id="root"></div><script type="module" src="/src/main.tsx"></script>\n',
  );
  await writeFile(
    join(directory, 'vite.config.ts'),
    `import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  build: { manifest: true },
  resolve: {
    alias: { 'react-native': fileURLToPath(new URL('./node_modules/react-native-web', import.meta.url)) },
    conditions: ['browser'],
  },
});
`,
  );
  await writeFile(
    join(directory, 'src', 'main.tsx'),
    `import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Button,
  Card,
  Field,
  Pressable,
  Text,
  TextInput,
  ThemeProvider,
  View,
} from '@ankhorage/surface/authoring-controls';

createRoot(document.querySelector('#root')!).render(
  <ThemeProvider>
    <View>
      <Card><Text>Screen authoring</Text></Card>
      <Field disabled label="Name"><TextInput value="Home" onChangeText={() => undefined} /></Field>
      <TextInput value="Home" onChangeText={() => undefined} />
      <Pressable disabled onPress={() => undefined}><Text>Disabled selection</Text></Pressable>
      <Button onPress={() => undefined}>Create screen</Button>
    </View>
  </ThemeProvider>,
);
`,
  );
}
