import type React from 'react';

export type ToastTone = 'default' | 'success' | 'danger';

export interface ToastProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  tone?: ToastTone;
  onDismiss?: (() => void) | undefined;
  testID?: string;
}

export interface ToastOptions extends Omit<ToastProps, 'onDismiss'> {
  duration?: number;
  id?: string;
}
