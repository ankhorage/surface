import type * as ReactNative from 'react-native';
import { VirtualizedList } from 'react-native';

/*** Exposes the portable React Native Web VirtualizedList under the bottom-sheet contract. */
export const BottomSheetVirtualizedList: typeof ReactNative.VirtualizedList = VirtualizedList;
