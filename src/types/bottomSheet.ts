import type React from 'react';

export interface BottomSheetPresentOptions {
  content: React.ReactNode;
  snapPoints?: readonly (number | string)[];
  initialIndex?: number;
  enableDynamicSizing?: boolean;
  enablePanDownToClose?: boolean;
  dismissOnBackdropPress?: boolean;
  keyboardBehavior?: 'extend' | 'fillParent' | 'interactive';
  keyboardBlurBehavior?: 'none' | 'restore';
  onIndexChange?: (index: number) => void;
  onDismiss?: () => void;
}

export interface BottomSheetController {
  present: (options: BottomSheetPresentOptions) => void;
  dismiss: () => void;
}
