import { expect, test } from 'bun:test';
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const packageRoot = new URL('../..', import.meta.url).pathname;
const expo57Dependencies = {
  '@expo/metro-runtime': '~57.0.18',
  '@react-native-vector-icons/fontawesome': '^13.1.4',
  '@react-native-vector-icons/fontawesome5': '^13.1.4',
  '@react-native-vector-icons/fontawesome6': '^13.1.4',
  '@react-native-vector-icons/ionicons': '^13.1.4',
  '@react-native-vector-icons/material-design-icons': '^13.1.4',
  expo: '57.0.33',
  react: '19.2.3',
  'react-dom': '19.2.3',
  'react-native': '0.86.3',
  'react-native-gesture-handler': '~2.32.0',
  'react-native-reanimated': '4.5.1',
  'react-native-safe-area-context': '~5.7.0',
  'react-native-svg': '15.15.4',
  'react-native-web': '~0.21.3',
  'react-native-worklets': '0.10.1',
} as const;

test('packed Surface exports through Expo 57 Metro for web, Android, and iOS', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'surface-metro-expo-57-'));
  const tarballDirectory = join(directory, 'tarball');
  const consumerDirectory = join(directory, 'consumer');

  try {
    await packSurface(tarballDirectory);
    await writeConsumer(consumerDirectory, await resolveTarballPath(tarballDirectory));
    await runBun(consumerDirectory, ['install']);

    await assertPackedExportMap(consumerDirectory);
    for (const platform of ['web', 'android', 'ios'] as const) {
      await runBun(consumerDirectory, ['x', 'expo', 'export', '--platform', platform]);
    }
  } finally {
    await rm(directory, { force: true, recursive: true });
  }
}, 300_000);

/*** Pack the checkout so Expo resolves the published artifact rather than this repository's source tree. */
async function packSurface(destination: string): Promise<void> {
  await runBun(
    packageRoot,
    ['pm', 'pack', '--ignore-scripts', '--quiet', '--destination', destination],
    destination,
  );
}

/*** Resolve the sole Surface package archive created for the independent Expo consumer. */
async function resolveTarballPath(directory: string): Promise<string> {
  const tarballs = (await readdir(directory)).filter((entry) => entry.endsWith('.tgz'));
  if (tarballs.length !== 1) {
    throw new Error(`Expected one Surface tarball, received ${tarballs.length}.`);
  }
  return join(directory, tarballs[0]);
}

/*** Write a minimal Expo 57 consumer that imports the browser and React Native public surfaces. */
async function writeConsumer(directory: string, tarballPath: string): Promise<void> {
  await mkdir(directory, { recursive: true });
  await writeFile(
    join(directory, 'package.json'),
    `${JSON.stringify(
      {
        dependencies: { ...expo57Dependencies, '@ankhorage/surface': tarballPath },
        main: 'expo/AppEntry',
        name: 'surface-metro-expo-57-consumer',
        private: true,
        version: '0.0.0',
      },
      null,
      2,
    )}\n`,
  );
  await writeFile(
    join(directory, 'app.json'),
    `${JSON.stringify({ expo: { name: 'Surface Metro acceptance', slug: 'surface-metro-acceptance' } })}\n`,
  );
  await writeFile(
    join(directory, 'App.tsx'),
    `import { ThemeProvider, View } from '@ankhorage/surface';
import { Button } from '@ankhorage/surface/authoring-controls';
import { BottomSheetView } from '@ankhorage/surface/bottom-sheet';
import { SURFACE_COLORS } from '@ankhorage/surface/color';
import { createTheme } from '@ankhorage/surface/theme';

const theme = createTheme();
void BottomSheetView;

export default function App() {
  return (
    <ThemeProvider>
      <View accessibilityLabel={theme.config.id} testID={SURFACE_COLORS.join('-')}>
        <Button>Surface Metro acceptance</Button>
      </View>
    </ThemeProvider>
  );
}
`,
  );
}

/*** Assert the installed tarball exposes compiled browser and React Native Metro entrypoints. */
async function assertPackedExportMap(directory: string): Promise<void> {
  const packageJson = JSON.parse(
    await readFile(
      join(directory, 'node_modules', '@ankhorage', 'surface', 'package.json'),
      'utf8',
    ),
  ) as {
    exports: Record<string, { browser?: string; 'react-native'?: string }>;
  };

  expect(packageJson.exports['.']).toMatchObject({
    browser: './dist/index.js',
    'react-native': './dist/index.js',
  });
  expect(packageJson.exports['./authoring-controls']).toMatchObject({
    browser: './dist/features/authoring/browser.js',
    'react-native': './dist/features/authoring/public.js',
  });
  expect(packageJson.exports['./bottom-sheet']).toMatchObject({
    browser: './dist/features/bottom-sheet/public.js',
    'react-native': './dist/features/bottom-sheet/public.js',
  });
  expect(packageJson.exports['./color']).toMatchObject({
    browser: './dist/constants/surfaceColor.js',
    'react-native': './dist/constants/surfaceColor.js',
  });
  expect(packageJson.exports['./theme']).toMatchObject({
    browser: './dist/features/theme/public.js',
    'react-native': './dist/features/theme/public.js',
  });
}

/*** Run Bun in an isolated directory and retain command diagnostics if Expo rejects the package. */
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
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(childProcess.stdout).text(),
    new Response(childProcess.stderr).text(),
    childProcess.exited,
  ]);
  if (exitCode !== 0) throw new Error(`bun ${arguments_.join(' ')} failed:\n${stdout}${stderr}`);
}
