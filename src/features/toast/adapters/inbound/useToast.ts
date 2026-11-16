import { use } from 'react';

import type { ToastController } from '../../../../types/toast.js';
import { ToastContext } from '../../composition/ToastContext.js';

/*** Returns the toast controller installed by ToastProvider. */
export function useToast(): ToastController {
  const controller = use(ToastContext);

  if (!controller) {
    throw new Error('useToast must be used within <ToastProvider>.');
  }

  return controller;
}
