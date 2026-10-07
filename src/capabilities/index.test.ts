import { readFileSync } from 'node:fs';

import { isCapability } from '@ankhorage/contracts/capabilities';
import { expect, test } from 'bun:test';

import { CAPABILITIES } from './index';

const packageMetadata = (
  JSON.parse(readFileSync(new URL('../../package.json', import.meta.url), 'utf8')) as {
    readonly ankh?: {
      readonly capabilities?: unknown;
      readonly category?: unknown;
      readonly provider?: unknown;
    };
  }
).ankh;

test('publishes a valid and uniquely identified canonical Surface theme capability', () => {
  expect(CAPABILITIES).toHaveLength(1);
  expect(CAPABILITIES.every(isCapability)).toBe(true);
  expect(new Set(CAPABILITIES.map((capability) => capability.id)).size).toBe(CAPABILITIES.length);
  expect(CAPABILITIES).toEqual([
    {
      id: 'theme.setMode',
      owner: '@ankhorage/surface',
      access: ['invoke'],
      binding: { kind: 'action', bindableAs: ['target'] },
      input: {
        schema: {
          type: 'object',
          required: ['mode'],
          properties: { mode: { type: 'string', enum: ['light', 'dark'] } },
          additionalProperties: false,
        },
      },
    },
  ]);
});

test('keeps Ankh package metadata identical to the canonical Surface catalog', () => {
  expect(packageMetadata?.category).toBe('surface');
  expect(packageMetadata?.provider).toBeNull();
  expect(packageMetadata?.capabilities).toEqual(CAPABILITIES);
});

test('exports the catalog from the public capabilities subpath', async () => {
  const capabilities = await import('@ankhorage/surface/capabilities');

  expect(capabilities.CAPABILITIES).toEqual(CAPABILITIES);
});
