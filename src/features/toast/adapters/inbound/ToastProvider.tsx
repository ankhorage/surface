import React from 'react';
import { StyleSheet, type ViewStyle } from 'react-native';

import { Portal } from '../../../../internal/overlay/Portal';
import { resolveOverlayAnimation } from '../../../../internal/resolvers';
import type { ToastController, ToastOptions, ToastProviderProps } from '../../../../types/toast';
import { Stack } from '../../../layout/public';
import { ToastContext } from '../../composition/ToastContext';
import { Toast } from './Toast';

let toastCounter = 0;

/*** Provides toast state, timers, and the shared toast portal host. */
export function ToastProvider({ children, defaultDuration = 4000 }: ToastProviderProps) {
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
      if (timersRef.current.has(toast.id)) return;

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
    const timers = timersRef.current;
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      timers.clear();
    };
  }, []);

  const controller = React.useMemo<ToastController>(
    () => ({ dismissToast, showToast }),
    [dismissToast, showToast],
  );
  const animationStyle = React.useMemo<ViewStyle>(
    () => ({ paddingTop: 16 + animation.offset }),
    [animation.offset],
  );

  return (
    <ToastContext value={controller}>
      {children}
      <Portal layer="toast" visible={toasts.length > 0}>
        <Stack gap="s" pointerEvents="box-none" style={[styles.container, animationStyle]}>
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
    </ToastContext>
  );
}

interface ToastEntry extends ToastOptions {
  id: string;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    padding: 16,
  },
});
