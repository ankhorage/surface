import { expect, test } from 'bun:test';
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const packageRoot = new URL('../..', import.meta.url).pathname;

test('packed authoring-controls consumer typechecks, bundles, and mounts the browser Surface graph', async () => {
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
    await runBun(consumerDirectory, ['run', 'runtime']);

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
          runtime: 'bun runtime.build.ts && bun dist/runtime/runtime.js',
          typecheck: 'tsc --noEmit',
        },
        dependencies: {
          '@ankhorage/surface': tarballPath,
          '@react-native-vector-icons/fontawesome': '13.1.5',
          '@react-native-vector-icons/fontawesome5': '13.1.5',
          '@react-native-vector-icons/fontawesome6': '13.1.5',
          '@react-native-vector-icons/ionicons': '13.1.5',
          '@react-native-vector-icons/material-design-icons': '13.1.5',
          '@types/react': '19.3.0',
          '@types/react-dom': '19.3.0',
          'happy-dom': '21.0.1',
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
    join(directory, 'runtime.build.ts'),
    `import { join } from 'node:path';

const result = await Bun.build({
  entrypoints: ['runtime.ts'],
  format: 'esm',
  outdir: 'dist/runtime',
  plugins: [{
    name: 'react-native-web',
    setup(builder) {
      builder.onResolve({ filter: /^react-native$/u }, () => ({
        path: join(process.cwd(), 'node_modules/react-native-web/dist/cjs/index.js'),
      }));
    },
  }],
  splitting: true,
  target: 'bun',
});

if (!result.success) throw new Error(result.logs.map((log) => log.message).join('\\n'));
`,
  );
  await writeFile(
    join(directory, 'runtime.ts'),
    `import { Window } from 'happy-dom';

const window = new Window({ url: 'http://localhost' });
const runtime = globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT?: boolean };

Object.assign(runtime, {
  Element: window.Element,
  Event: window.Event,
  HTMLElement: window.HTMLElement,
  MouseEvent: window.MouseEvent,
  MutationObserver: window.MutationObserver,
  Node: window.Node,
  ShadowRoot: window.ShadowRoot,
  document: window.document,
  getComputedStyle: window.getComputedStyle.bind(window),
  window,
});
runtime.IS_REACT_ACT_ENVIRONMENT = true;

await import('./runtimeComponent');
`,
  );
  await writeFile(
    join(directory, 'runtimeComponent.tsx'),
    `import { strict as assert } from 'node:assert';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { Field, Pressable, Text, ThemeProvider, View } from '@ankhorage/surface/authoring-controls';

const rootElement = document.createElement('div');
document.body.append(rootElement);
const root = createRoot(rootElement);
let disabledPresses = 0;
let enabledPresses = 0;

await act(async () => {
  root.render(
    <ThemeProvider>
      <View>
        <Field label="Enabled field" testID="enabled-field"><Text>Enabled content</Text></Field>
        <Field disabled label="Disabled field" testID="disabled-field"><Text>Disabled content</Text></Field>
        <Pressable disabled onPress={() => { disabledPresses += 1; }} testID="disabled-pressable">
          <Text>Disabled pressable</Text>
        </Pressable>
        <Pressable onPress={() => { enabledPresses += 1; }} testID="enabled-pressable">
          <Text>Enabled pressable</Text>
        </Pressable>
      </View>
    </ThemeProvider>,
  );
});

assert.match(rootElement.textContent ?? '', /Disabled field/);
assert.match(rootElement.textContent ?? '', /Disabled content/);

const disabledField = document.querySelector<HTMLElement>('[data-testid="disabled-field"]');
const enabledField = document.querySelector<HTMLElement>('[data-testid="enabled-field"]');
assert.ok(disabledField, 'disabled Field should render its public testID');
assert.ok(enabledField, 'enabled Field should render its public testID');

const findTextElement = (container: HTMLElement, text: string) =>
  Array.from(container.querySelectorAll<HTMLElement>('*')).find(
    (element) => element.children.length === 0 && element.textContent === text,
  );
const disabledLabel = findTextElement(disabledField, 'Disabled field');
const enabledLabel = findTextElement(enabledField, 'Enabled field');
assert.ok(disabledLabel, 'disabled Field should render its label');
assert.ok(enabledLabel, 'enabled Field should render its label');
assert.notEqual(
  disabledLabel.style.color,
  enabledLabel.style.color,
  'disabled Field labels should use the muted presentation',
);

const disabledPressable = document.querySelector<HTMLElement>('[data-testid="disabled-pressable"]');
const enabledPressable = document.querySelector<HTMLElement>('[data-testid="enabled-pressable"]');
assert.ok(disabledPressable, 'disabled Pressable should render');
assert.ok(enabledPressable, 'enabled Pressable should render');

await act(async () => {
  disabledPressable.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  enabledPressable.dispatchEvent(new MouseEvent('click', { bubbles: true }));
});

assert.equal(disabledPresses, 0, 'disabled Pressable must not invoke onPress');
assert.equal(enabledPresses, 1, 'enabled Pressable must invoke onPress');

await act(async () => root.unmount());
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
        include: ['src.tsx', 'runtime.ts', 'runtimeComponent.tsx'],
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
