import { expect, test } from 'bun:test';

import type { TextProps, ViewProps } from './web.js';

const { Text, View } = await import('./web.js');

test('exposes the browser-safe foundation through the dedicated web facade', () => {
  const props: [TextProps, ViewProps] = [{ children: 'Surface web' }, { children: null }];

  expect(props).toHaveLength(2);
  expect(View).toBeDefined();
  expect(Text).toBeDefined();
});
