import { defineParadoxConfig } from '@ankhorage/paradox';

export default defineParadoxConfig({
  mode: 'write',

  docs: {
    title: '@ankhorage/surface',
    description:
      'Cross-platform UI foundation for React Native and React Native Web. Provides theming, layout primitives, and core building blocks for modern apps.',
  },

  package: {
    root: '.',
    entrypoints: ['src/index.ts'],
  },

  output: {
    dir: './paradox',
  },
});
