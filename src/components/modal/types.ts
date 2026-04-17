import type React from 'react';

export interface ModalProps {
  visible: boolean;
  onDismiss?: (() => void) | undefined;
  children?: React.ReactNode;
  closeOnBackdrop?: boolean;
  testID?: string;
}
