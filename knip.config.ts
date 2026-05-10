import { createKnipConfig } from '@ankhorage/devtools/knip';

export default createKnipConfig({
  ignoreDependencies: ['expo-font'],
  ignoreFiles: ['.prettierrc.js', 'eslint.config.js', 'src/examples/DocsExamples.tsx'],
});
