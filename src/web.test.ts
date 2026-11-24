import { readFileSync } from 'node:fs';

import { expect, test } from 'bun:test';

test('routes the dedicated web facade through the public Surface API', () => {
  const webFacade = readFileSync(new URL('./web.ts', import.meta.url), 'utf8');

  expect(webFacade).toContain("export * from './index.js';");
});
