import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { isRecord } from '@ankhorage/utility/object';
import { expect, test } from 'bun:test';

test('maps all canonical feature subpaths through one package export pattern', async () => {
  const packageJson = JSON.parse(
    await readFile(resolve(import.meta.dir, '..', 'package.json'), 'utf8'),
  ) as {
    readonly exports: Record<string, unknown>;
  };

  expect(packageJson.exports['./*']).toEqual({
    'react-native': './src/features/*/public.ts',
    browser: './src/features/*/public.ts',
    types: './dist/features/*/public.d.ts',
    import: './dist/features/*/public.js',
    default: './dist/features/*/public.js',
  });
  expect(packageJson.exports['.']).toBeDefined();
  expect(packageJson.exports['./color']).toBeDefined();
  expect(packageJson.exports['./responsive']).toBeDefined();
  expect(packageJson.exports['./theme/runtime']).toBeDefined();
  expect(resolveFeatureExport(packageJson.exports['./*'], 'accordion', 'browser')).toBe(
    './src/features/accordion/public.ts',
  );
  expect(resolveFeatureExport(packageJson.exports['./*'], 'form/checkbox', 'import')).toBe(
    './dist/features/form/checkbox/public.js',
  );
});

/*** Resolve one export-pattern condition the same way package wildcard substitution does. */
function resolveFeatureExport(
  pattern: unknown,
  featurePath: string,
  condition: 'browser' | 'import',
): string | null {
  if (!isRecord(pattern)) return null;
  const value: unknown = condition === 'browser' ? pattern.browser : pattern.import;
  return typeof value === 'string' ? value.replace('*', featurePath) : null;
}
