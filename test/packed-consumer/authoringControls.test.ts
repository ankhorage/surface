import { expect, test } from 'bun:test';
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const packageRoot = new URL('../..', import.meta.url).pathname;

test('packed authoring-controls consumer typechecks and bundles only the browser Surface graph', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'surface-authoring-controls-consumer-'));
  const tarballDirectory = join(directory, 'tarball');
  const consumerDirectory = join(directory, 'consumer');

  try {
    await packSurface(tarballDirectory);
    const tarballPath = await resolveTarballPath(tarballDirectory);
    await writeConsumer(consumerDirectory, tarballPath);
    await runBun(consumerDirectory, ['install']);
    await runBun(consumerDirectory, ['run', 'typecheck']);
    await runBun(consumerDirectory, ['run', 'bundle']);

    const graph = JSON.parse(
      await readFile(join(consumerDirectory, 'dist', 'metafile.json'), 'utf8'),
    ) as { inputs: Record<string, unknown> };
    const graphSource = Object.keys(graph.inputs).join('\n');
    expect(graphSource).not.toContain('features/app-bar');
    expect(graphSource).not.toContain('react-native-gesture-handler');
    expect(graphSource).not.toContain('react-native-safe-area-context');
    expect(graphSource).not.toContain('codegenNativeComponent');
  } finally {
    await rm(directory, { force: true, recursive: true });
  }
}, 120_000);

/*** Packs the current checkout so the consumer cannot reach source files directly. */
async function packSurface(destination: string): Promise<void> {
  await runBun(packageRoot, ['pm', 'pack', '--destination', destination], destination);
}

/*** Resolves the single package tarball created by Bun pack. */
async function resolveTarballPath(directory: string): Promise<string> {
  const tarballs = (await readdir(directory)).filter((entry) => entry.endsWith('.tgz'));
  if (tarballs.length !== 1) {
    throw new Error(`Expected one Surface tarball, received ${tarballs.length}.`);
  }
  return join(directory, tarballs[0]);
}

/*** Writes an isolated consumer with released browser and React Native Web dependencies. */
async function writeConsumer(directory: string, tarballPath: string): Promise<void> {
  await mkdir(directory, { recursive: true });
  await Bun.write(
    join(directory, 'package.json'),
    JSON.stringify(
      {
        name: 'surface-authoring-controls-consumer',
        private: true,
        scripts: {
          bundle: 'bun build.ts',
          typecheck: 'tsc --noEmit',
        },
        dependencies: {
          '@ankhorage/surface': tarballPath,
          '@react-native-vector-icons/fontawesome': '13.1.5',
          '@react-native-vector-icons/fontawesome5': '13.1.5',
          '@react-native-vector-icons/fontawesome6': '13.1.5',
          '@react-native-vector-icons/ionicons': '13.1.5',
          '@react-native-vector-icons/material-design-icons': '13.1.5',
          react: '19.3.0',
          'react-dom': '19.3.0',
          'react-native': '0.87.1',
          'react-native-web': '0.21.4',
          typescript: '6.0.3',
        },
      },
      null,
      2,
    ),
  );
  await writeFile(
    join(directory, 'src.tsx'),
    `import type {
  ButtonProps,
  CardProps,
  FieldProps,
  PressableProps,
  TextInputProps,
  TextProps,
  ThemeProviderProps,
  ViewProps,
} from '@ankhorage/surface/authoring-controls';
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

const props: [
  ButtonProps,
  CardProps,
  FieldProps,
  PressableProps,
  TextInputProps,
  TextProps,
  ThemeProviderProps,
  ViewProps,
] = [
  { children: 'Save' },
  { children: 'Panel' },
  { label: 'Title', disabled: true },
  { children: 'Select', disabled: true },
  {},
  { children: 'Authoring' },
  { children: null },
  {},
];

void props;
void [Button, Card, Field, Pressable, Text, TextInput, ThemeProvider, View];
`,
  );
  await writeFile(
    join(directory, 'build.ts'),
    `import { join } from 'node:path';

const result = await Bun.build({
  entrypoints: ['src.tsx'],
  metafile: true,
  outdir: 'dist',
  plugins: [{
    name: 'react-native-web',
    setup(builder) {
      builder.onResolve({ filter: /^react-native$/u }, () => ({
        path: join(process.cwd(), 'node_modules/react-native-web/dist/cjs/index.js'),
      }));
    },
  }],
  target: 'browser',
});

if (!result.success) throw new Error(result.logs.map((log) => log.message).join('\\n'));
await Bun.write('dist/metafile.json', JSON.stringify(result.metafile));
`,
  );
  await writeFile(
    join(directory, 'tsconfig.json'),
    JSON.stringify(
      {
        compilerOptions: {
          jsx: 'react-jsx',
          module: 'ESNext',
          moduleResolution: 'Bundler',
          noEmit: true,
          skipLibCheck: true,
          strict: true,
          target: 'ES2022',
        },
        include: ['src.tsx'],
      },
      null,
      2,
    ),
  );
}

/*** Runs Bun in the requested independent package directory. */
async function runBun(
  directory: string,
  arguments_: string[],
  temporaryDirectory = join(directory, '.tmp'),
): Promise<void> {
  await mkdir(temporaryDirectory, { recursive: true });
  const childProcess = Bun.spawn(['bun', ...arguments_], {
    cwd: directory,
    env: {
      ...process.env,
      BUN_INSTALL_CACHE_DIR: join(directory, '.cache'),
      TMPDIR: temporaryDirectory,
    },
    stderr: 'pipe',
    stdout: 'pipe',
  });
  const exitCode = await childProcess.exited;
  if (exitCode === 0) return;

  const [stdout, stderr] = await Promise.all([
    new Response(childProcess.stdout).text(),
    new Response(childProcess.stderr).text(),
  ]);
  throw new Error(`bun ${arguments_.join(' ')} failed:\n${stdout}${stderr}`);
}
