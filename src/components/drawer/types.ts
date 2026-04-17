import type React from 'react';

export interface DrawerProps {
  visible: boolean;
  onDismiss?: (() => void) | undefined;
  position?: 'left' | 'right';
  children?: React.ReactNode;
  closeOnBackdrop?: boolean;
  testID?: string;
}
