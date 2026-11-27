import { readFileSync } from 'node:fs';

import { expect, test } from 'bun:test';
import React from 'react';
import { renderToString } from 'react-dom/server';

import type * as WebApi from './web.js';
import type { BottomSheetContentMode, BottomSheetPresentOptions } from './web.js';

test('routes the dedicated web facade through the public Surface API', () => {
  const webFacade = readFileSync(new URL('./web.ts', import.meta.url), 'utf8');

  expect(webFacade).toContain("export * from './index.js';");
});

test('exports the canonical SSR-safe bottom-sheet boundary through the web facade', async () => {
  const webApi = (await import('../web-dist/web.js')) as typeof WebApi;
  const { BottomSheetProvider, BottomSheetView, useBottomSheet } = webApi;
  const contentMode: BottomSheetContentMode = 'direct';
  const options: BottomSheetPresentOptions = { content: 'Sheet', snapPoints: ['50%'] };
  const markup = renderToString(
    React.createElement(
      BottomSheetProvider,
      undefined,
      React.createElement(BottomSheetView, { testID: 'sheet-content' }),
    ),
  );

  expect(contentMode).toBe('direct');
  expect(options.snapPoints).toEqual(['50%']);
  expect(markup).toContain('data-testid="sheet-content"');
  expect(useBottomSheet).toBeDefined();
});
