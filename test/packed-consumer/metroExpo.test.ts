import { expect, test } from 'bun:test';
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const packageRoot = new URL('../..', import.meta.url).pathname;
const vectorIconPackageNames = [
  '@react-native-vector-icons/fontawesome',
  '@react-native-vector-icons/fontawesome5',
  '@react-native-vector-icons/fontawesome6',
  '@react-native-vector-icons/ionicons',
  '@react-native-vector-icons/material-design-icons',
] as const;

const supportedVectorIconVersions = ['13.1.5', '14.0.0'] as const;

const expo57Dependencies = (vectorIconVersion: (typeof supportedVectorIconVersions)[number]) => ({
  '@expo/metro-runtime': '~57.0.18',
  ...Object.fromEntries(
    vectorIconPackageNames.map((packageName) => [packageName, vectorIconVersion]),
  ),
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
});

const expo58Dependencies = (vectorIconVersion: (typeof supportedVectorIconVersions)[number]) => ({
  '@expo/metro-runtime': '~58.0.17',
  ...Object.fromEntries(
    vectorIconPackageNames.map((packageName) => [packageName, vectorIconVersion]),
  ),
  expo: '58.0.26',
  react: '19.3.0',
  'react-dom': '19.3.0',
  'react-native': '0.88.1',
  'react-native-gesture-handler': '~3.3.0',
  'react-native-reanimated': '4.7.1',
  'react-native-safe-area-context': '~5.11.1',
  'react-native-svg': '15.16.0',
  'react-native-web': '~0.21.4',
  'react-native-worklets': '0.13.0',
});

for (const vectorIconVersion of supportedVectorIconVersions) {
  test(`packed Surface exports through Expo 57 Metro with Vector Icons ${vectorIconVersion}`, async () => {
    const directory = await mkdtemp(join(tmpdir(), 'surface-metro-expo-57-'));
    const tarballDirectory = join(directory, 'tarball');
    const consumerDirectory = join(directory, 'consumer');

    try {
      await packSurface(tarballDirectory);
      await writeConsumer(
        consumerDirectory,
        await resolveTarballPath(tarballDirectory),
        expo57Dependencies(vectorIconVersion),
      );
      await runBun(consumerDirectory, ['install']);
      await runBun(consumerDirectory, ['install', '--frozen-lockfile']);

      await assertPackedExportMap(consumerDirectory);
      await assertInstalledVectorIconVersions(consumerDirectory, vectorIconVersion);
      await runBun(consumerDirectory, ['x', 'expo', 'install', '--check']);
      await runBun(consumerDirectory, ['x', 'expo-doctor@1.17.14']);
      await run(consumerDirectory, ['npm', 'install', '--package-lock-only', '--ignore-scripts']);
      await run(consumerDirectory, ['npm', 'ci', '--ignore-scripts']);
      await run(consumerDirectory, ['npm', 'ls', '--all']);
      await runBun(consumerDirectory, ['x', 'expo', 'export', '--platform', 'web']);
      await runBun(consumerDirectory, [
        'x',
        'expo',
        'prebuild',
        '--platform',
        'all',
        '--no-install',
        '--non-interactive',
      ]);
    } finally {
      await rm(directory, { force: true, recursive: true });
    }
  }, 300_000);
}

for (const vectorIconVersion of supportedVectorIconVersions) {
  test(`packed Surface exports through Expo 58 Metro with Vector Icons ${vectorIconVersion}`, async () => {
    const directory = await mkdtemp(join(tmpdir(), 'surface-metro-expo-58-'));
    const tarballDirectory = join(directory, 'tarball');
    const consumerDirectory = join(directory, 'consumer');

    try {
      await packSurface(tarballDirectory);
      await writeConsumer(
        consumerDirectory,
        await resolveTarballPath(tarballDirectory),
        expo58Dependencies(vectorIconVersion),
        'surface-metro-expo-58-consumer',
      );
      await runBun(consumerDirectory, ['install']);
      await runBun(consumerDirectory, ['install', '--frozen-lockfile']);

      await assertPackedExportMap(consumerDirectory);
      await assertInstalledVectorIconVersions(consumerDirectory, vectorIconVersion);
      await runBun(consumerDirectory, ['x', 'expo', 'install', '--check']);
      await runBun(consumerDirectory, ['x', 'expo-doctor@1.17.14']);
      await run(consumerDirectory, ['npm', 'install', '--package-lock-only', '--ignore-scripts']);
      await run(consumerDirectory, ['npm', 'ci', '--ignore-scripts']);
      await run(consumerDirectory, ['npm', 'ls', '--all']);
      await runBun(consumerDirectory, ['x', 'expo', 'export', '--platform', 'web']);
      await runBun(consumerDirectory, [
        'x',
        'expo',
        'prebuild',
        '--platform',
        'all',
        '--no-install',
        '--non-interactive',
      ]);
    } finally {
      await rm(directory, { force: true, recursive: true });
    }
  }, 300_000);
}

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

/*** Write a minimal Expo consumer that imports the browser and React Native public surfaces. */
async function writeConsumer(
  directory: string,
  tarballPath: string,
  dependencies: Record<string, string>,
  name = 'surface-metro-expo-57-consumer',
): Promise<void> {
  await mkdir(directory, { recursive: true });
  await writeFile(
    join(directory, 'package.json'),
    `${JSON.stringify(
      {
        dependencies: {
          ...dependencies,
          '@ankhorage/surface': `file:${tarballPath}`,
        },
        main: 'expo/AppEntry',
        name,
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
  await writeFile(join(directory, '.gitignore'), '.expo/\n');
  await writeFile(
    join(directory, 'App.tsx'),
    `import {
  AppBar,
  Icon,
  Modal,
  Pressable,
  ScrollView,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Text,
  ThemeProvider,
  View,
} from '@ankhorage/surface';
import { Button } from '@ankhorage/surface/authoring-controls';
import { BottomSheetView } from '@ankhorage/surface/bottom-sheet';
import { SURFACE_COLORS } from '@ankhorage/surface/color';
import { createTheme } from '@ankhorage/surface/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const theme = createTheme();
void BottomSheetView;

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppBar>Surface native acceptance</AppBar>
        <ScrollView accessibilityLabel={theme.config.id} testID={SURFACE_COLORS.join('-')}>
          <Pressable onPress={() => undefined}><Text>Pressable</Text></Pressable>
          <Tabs defaultValue="first">
            <TabList><Tab value="first">First</Tab><Tab value="second">Second</Tab></TabList>
            <TabPanel value="first"><Text>First panel</Text></TabPanel>
            <TabPanel value="second"><Text>Second panel</Text></TabPanel>
          </Tabs>
          <Icon source={{ uri: 'https://example.com/surface.svg' }} testID="svg-icon" />
          <Modal visible={false}><View /></Modal>
          <View><Button>Surface Metro acceptance</Button></View>
        </ScrollView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
`,
  );
}

/*** Assert that the packed consumer resolves only the exact Vector Icons release under test. */
async function assertInstalledVectorIconVersions(
  directory: string,
  expectedVersion: (typeof supportedVectorIconVersions)[number],
): Promise<void> {
  for (const packageName of vectorIconPackageNames) {
    const packageJson = JSON.parse(
      await readFile(
        join(directory, 'node_modules', ...packageName.split('/'), 'package.json'),
        'utf8',
      ),
    ) as { version: string };
    expect(packageJson.version).toBe(expectedVersion);
  }
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
    browser: './dist/features/bottom-sheet/browser.js',
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
  const cacheDirectory = join(directory, '.cache');
  const homeDirectory = join(directory, '.home');
  const expoDirectory = join(homeDirectory, '.expo');
  await prepareProcessPaths(temporaryDirectory, cacheDirectory, expoDirectory);
  const childProcess = Bun.spawn(['bun', ...arguments_], {
    cwd: directory,
    env: {
      ...process.env,
      BUN_INSTALL_CACHE_DIR: cacheDirectory,
      EXPO_HOME: expoDirectory,
      HOME: homeDirectory,
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

/*** Run a non-Bun package graph diagnostic in the isolated consumer. */
async function run(directory: string, arguments_: string[]): Promise<void> {
  const cacheDirectory = join(directory, '.npm-cache');
  const temporaryDirectory = join(directory, '.tmp');
  await prepareProcessPaths(temporaryDirectory, cacheDirectory, join(directory, '.expo'));
  const childProcess = Bun.spawn(arguments_, {
    cwd: directory,
    env: {
      ...process.env,
      npm_config_cache: cacheDirectory,
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
  if (exitCode !== 0) throw new Error(`${arguments_.join(' ')} failed:\n${stdout}${stderr}`);
}

/*** Create per-consumer temporary and cache paths before any package process starts. */
async function prepareProcessPaths(
  temporaryDirectory: string,
  cacheDirectory: string,
  expoDirectory: string,
): Promise<void> {
  await Promise.all([
    mkdir(temporaryDirectory, { recursive: true }),
    mkdir(cacheDirectory, { recursive: true }),
    mkdir(expoDirectory, { recursive: true }),
  ]);
}
