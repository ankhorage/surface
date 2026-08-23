import { createKnipConfig } from '@ankhorage/devtools/knip';

export default createKnipConfig({
  ignoreFiles: [
    '.prettierrc.js',
    'eslint.config.mjs',
    'eslint.local.config.mjs',
    'src/examples/DocsExamples.tsx',
    'paradox.config.ts',
  ],
});
