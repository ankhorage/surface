import { expect, test } from 'bun:test';

test('bottom-sheet boundary exposes Gorhom integrated scrollables and direct content mode', async () => {
  const [publicSource, providerSource, typeSource] = await Promise.all([
    Bun.file('src/features/bottom-sheet/public.ts').text(),
    Bun.file('src/features/bottom-sheet/BottomSheetProvider.tsx').text(),
    Bun.file('src/types/bottomSheet.ts').text(),
  ]);

  for (const name of [
    'BottomSheetFlatList',
    'BottomSheetScrollView',
    'BottomSheetSectionList',
    'BottomSheetView',
    'BottomSheetVirtualizedList',
  ]) {
    expect(publicSource).toContain(name);
  }

  expect(typeSource).toContain("export type BottomSheetContentMode = 'view' | 'direct';");
  expect(providerSource).toContain("activeRequest.contentMode === 'direct'");
  expect(providerSource).toContain('maxDynamicContentSize={activeRequest.maxDynamicContentSize}');
});
