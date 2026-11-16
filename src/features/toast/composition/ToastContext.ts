import { createContext } from 'react';

import type { ToastController } from '../../../types/toast.js';

/*** Stores the toast controller shared by ToastProvider and useToast. */
export const ToastContext = createContext<ToastController | null>(null);
