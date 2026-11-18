import { expect, test } from 'bun:test';

test('bottom-sheet boundary owns native and browser package facades with portable platform adapters', async () => {
  const [browserSource, publicSource, providerSource, webProviderSource, typeSource] =
    await Promise.all([
      Bun.file('src/features/bottom-sheet/browser.ts').text(),
      Bun.file('src/features/bottom-sheet/public.ts').text(),
      Bun.file('src/features/bottom-sheet/BottomSheetProvider.tsx').text(),
      Bun.file('src/features/bottom-sheet/BottomSheetProvider.web.tsx').text(),
      Bun.file('src/types/bottomSheet.ts').text(),
    ]);

  for (const name of [
    'BottomSheetFlatList',
    'BottomSheetScrollView',
    'BottomSheetSectionList',
    'BottomSheetView',
    'BottomSheetVirtualizedList',
  ]) {
    expect(publicSource).toContain(`from './${name}.js'`);
  }

  expect(publicSource).not.toContain('@gorhom/bottom-sheet');
  for (const name of [
    'BottomSheetFlatList',
    'BottomSheetProvider',
    'BottomSheetScrollView',
    'BottomSheetSectionList',
    'BottomSheetView',
    'BottomSheetVirtualizedList',
  ]) {
    expect(browserSource).toContain(`from './${name}.web.js'`);
  }
  expect(browserSource).not.toContain('@gorhom/bottom-sheet');
  expect(providerSource).toContain("from '@gorhom/bottom-sheet'");
  expect(webProviderSource).not.toContain('@gorhom/bottom-sheet');
  expect(webProviderSource).toContain("activeRequest.contentMode === 'direct'");
  expect(typeSource).toContain("export type BottomSheetContentMode = 'view' | 'direct';");
});
