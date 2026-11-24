import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';

const require = createRequire(import.meta.url);
const reactNativeWebEntrypoint = require.resolve('react-native-web');

const sharedOptions = {
  external: [
    'react',
    'react-dom',
    'react-dom/client',
    'react/jsx-dev-runtime',
    'react/jsx-runtime',
  ],
  format: 'esm',
  plugins: [
    {
      name: 'surface-web-platform',
      setup(build) {
        build.onResolve({ filter: /^react-native$/u }, () => ({ path: reactNativeWebEntrypoint }));
        build.onResolve({ filter: /^react-native-safe-area-context$/u }, (arguments_) =>
          arguments_.importer.endsWith('/features/app-bar/adapters/inbound/AppBar.tsx')
            ? {
                path: resolve(dirname(arguments_.importer), './SafeAreaInsetsContext.web.ts'),
              }
            : undefined,
        );
        build.onResolve({ filter: /^\.\/adapters\/inbound\/Icon\.js$/u }, (arguments_) =>
          arguments_.importer.endsWith('/features/icon/public.ts')
            ? { path: resolve(dirname(arguments_.importer), './adapters/inbound/Icon.web.tsx') }
            : undefined,
        );
      },
    },
  ],
  sourcemap: 'external' as const,
  target: 'browser' as const,
};

const results = [
  await Bun.build({ ...sharedOptions, entrypoints: ['src/web.ts'], outdir: 'web-dist' }),
  await Bun.build({
    ...sharedOptions,
    entrypoints: ['src/features/bottom-sheet/browser.ts'],
    naming: 'bottom-sheet.js',
    outdir: 'web-dist',
  }),
];

if (results.some((result) => !result.success)) process.exit(1);
