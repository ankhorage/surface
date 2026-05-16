import React from 'react';

import { Portal } from '../../internal/overlay/Portal';
import { resolveOverlayAnimation } from '../../internal/resolvers';
import { Stack } from '../../layout';
import { Toast } from './Toast';
import type { ToastOptions } from './types';

interface ToastEntry extends ToastOptions {
  id: string;
}

interface ToastContextValue {
  dismissToast: (id: string) => void;
  showToast: (options: ToastOptions) => string;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

let toastCounter = 0;

export function ToastProvider({
  children,
  defaultDuration = 4000,
}: {
  children: React.ReactNode;
  defaultDuration?: number;
}) {
  const [toasts, setToasts] = React.useState<ToastEntry[]>([]);
  const animation = resolveOverlayAnimation('toast');
  const timersRef = React.useRef(new Map<string, ReturnType<typeof setTimeout>>());

  const dismissToast = React.useCallback((id: string) => {
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = React.useCallback((options: ToastOptions) => {
    const id = options.id ?? `toast-${toastCounter++}`;
    setToasts((current) => [...current, { ...options, id }]);
    return id;
  }, []);

  React.useEffect(() => {
    toasts.forEach((toast) => {
      if (timersRef.current.has(toast.id)) {
        return;
      }

      const timer = setTimeout(() => {
        dismissToast(toast.id);
      }, toast.duration ?? defaultDuration);

      timersRef.current.set(toast.id, timer);
    });

    const activeToastIds = new Set(toasts.map((toast) => toast.id));
    timersRef.current.forEach((timer, id) => {
      if (!activeToastIds.has(id)) {
        clearTimeout(timer);
        timersRef.current.delete(id);
      }
    });
  }, [defaultDuration, dismissToast, toasts]);

  React.useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current.clear();
    };
  }, []);

  return (
    <ToastContext.Provider value={{ dismissToast, showToast }}>
      {children}
      <Portal layer="toast" visible={toasts.length > 0}>
        <Stack
          gap="s"
          pointerEvents="box-none"
          style={{
            alignItems: 'flex-end',
            padding: 16,
            paddingTop: 16 + animation.offset,
          }}
        >
          {toasts.map((toast) => (
            <Toast
              description={toast.description}
              key={toast.id}
              onDismiss={() => dismissToast(toast.id)}
              status={toast.status}
              testID={toast.testID}
              title={toast.title}
            />
          ))}
        </Stack>
      </Portal>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within <ToastProvider>.');
  }

  return context;
}
