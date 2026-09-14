import { createKnipConfig } from '@ankhorage/devtools/knip';

export default createKnipConfig({
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
