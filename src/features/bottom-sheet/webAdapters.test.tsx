import { expect, mock, test } from 'bun:test';
import * as ReactNativeWeb from 'react-native-web';

await mock.module('react-native', () => ReactNativeWeb);

const [
  { BottomSheetFlatList },
  { BottomSheetProvider },
  { BottomSheetScrollView },
  { BottomSheetSectionList },
  { BottomSheetView },
  { BottomSheetVirtualizedList },
] = await Promise.all([
  import('./BottomSheetFlatList.web'),
  import('./BottomSheetProvider.web'),
  import('./BottomSheetScrollView.web'),
  import('./BottomSheetSectionList.web'),
  import('./BottomSheetView.web'),
  import('./BottomSheetVirtualizedList.web'),
]);

test('web bottom-sheet exports resolve without Gorhom runtime components', () => {
  expect(BottomSheetFlatList).toBe(ReactNativeWeb.FlatList);
  expect(typeof BottomSheetProvider).toBe('function');
  expect(BottomSheetScrollView).toBe(ReactNativeWeb.ScrollView);
  expect(BottomSheetSectionList).toBe(ReactNativeWeb.SectionList);
  expect(BottomSheetView).toBe(ReactNativeWeb.View);
  expect(BottomSheetVirtualizedList).toBe(ReactNativeWeb.VirtualizedList);
});
