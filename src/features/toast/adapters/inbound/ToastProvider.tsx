import React from 'react';
import { StyleSheet, type ViewStyle } from 'react-native';

import { Portal } from '../../../../internal/overlay/Portal.js';
import { resolveOverlayAnimation } from '../../../../internal/resolvers/index.js';
import type { ToastProviderProps } from '../../../../types/toast.js';
import { View } from '../../../layout/public.js';
import { ToastContext } from '../../composition/ToastContext.js';
import { useToastRuntime } from '../../composition/useToastRuntime.js';
import { Toast } from './Toast.js';

/*** Provides the toast runtime context and renders its shared portal host. */
export function ToastProvider({ children, defaultDuration = 4000 }: ToastProviderProps) {
  const animation = resolveOverlayAnimation('toast');
  const { controller, toasts } = useToastRuntime(defaultDuration);
  const animationStyle = React.useMemo<ViewStyle>(
    () => ({ paddingTop: 16 + animation.offset }),
    [animation.offset],
  );

  return (
    <ToastContext value={controller}>
      {children}
      <Portal layer="toast" visible={toasts.length > 0}>
        <View gap="s" pointerEvents="box-none" style={[styles.container, animationStyle]}>
          {toasts.map((toast) => (
            <Toast
              description={toast.description}
              key={toast.id}
              onDismiss={() => controller.dismissToast(toast.id)}
              status={toast.status}
              testID={toast.testID}
              title={toast.title}
            />
          ))}
        </View>
      </Portal>
    </ToastContext>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    padding: 16,
  },
});
