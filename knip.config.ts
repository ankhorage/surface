import { createKnipConfig } from '@ankhorage/devtools/knip';

export default createKnipConfig({
  entry: [
    'src/index.ts',
    'src/features/bottom-sheet/public.ts',
    'src/features/popover/browser.ts',
    'src/features/authoring/public.ts',
    'src/features/authoring/browser.ts',
    'src/constants/surfaceColor.ts',
    'src/features/theme/public.ts',
  ],
  ignoreFiles: [
    '.prettierrc.js',
    'eslint.config.mjs',
    'eslint.examples.config.mjs',
    'eslint.local.config.mjs',
    'examples/docs/DocsExamples.tsx',
    'paradox.config.ts',
    'prettier.local.config.js',
  ],
});
