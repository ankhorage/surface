import { expect, test } from 'bun:test';

import repository from './repository.json';

/** Verifies that Surface retains independently declared native and browser build targets. */
test('declares explicit native and web build targets', () => {
  expect(repository.build).toEqual({
    targets: {
      native: {
        language: 'typescript',
        framework: 'react-native',
        platforms: ['ios', 'android', 'web'],
        entry: '.',
        outDir: 'dist',
        sources: { entries: ['src/index.ts'] },
        builder: { script: 'build' },
      },
      web: {
        language: 'typescript',
        framework: 'react',
        platforms: ['web'],
        entry: './web',
        outDir: 'web-dist',
        sources: { entries: ['src/web.ts'] },
        builder: { script: 'build' },
      },
    },
  });
});
