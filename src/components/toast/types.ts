import type React from 'react';

import type { SurfaceStatusColor } from '../../surfaceColor';

export type ToastStatus = 'default' | SurfaceStatusColor;

export interface ToastProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  status?: ToastStatus;
  onDismiss?: (() => void) | undefined;
  testID?: string;
}

export interface ToastOptions extends Omit<ToastProps, 'onDismiss'> {
  duration?: number;
  id?: string;
}
