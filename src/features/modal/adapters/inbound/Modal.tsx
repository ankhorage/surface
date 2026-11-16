import React from 'react';
import { Pressable, StyleSheet, View as ReactNativeView, type ViewStyle } from 'react-native';

import { FocusScope } from '../../../../internal/focus/FocusScope.js';
import { Portal } from '../../../../internal/overlay/Portal.js';
import { resolvePointerEvents } from '../../../../internal/resolvePointerEvents.js';
import { resolveOverlayAnimation } from '../../../../internal/resolvers/index.js';
import type { ModalProps } from '../../../../types/modal.js';
import { View } from '../../../layout/public.js';
import { Surface } from '../../../surface/public.js';
import { useTheme } from '../../../theme/runtime.js';

const boxNonePointerEvents = resolvePointerEvents('box-none');

/*** Renders the generic Surface modal overlay and focus boundary. */
export function Modal({
  visible,
  onDismiss,
  children,
  closeOnBackdrop = true,
  interactionPolicy = 'enabled',
  testID,
}: ModalProps) {
  const { theme } = useTheme();
  const animation = resolveOverlayAnimation('modal');
  const passive = interactionPolicy === 'passive';
  const backdropPress = passive || !closeOnBackdrop ? undefined : onDismiss;

  if (!visible) return null;

  return (
    <Portal layer="modal" visible={visible}>
      <ReactNativeView
        {...boxNonePointerEvents.props}
        style={[boxNonePointerEvents.style, styles.fill]}
      >
        <Pressable
          onPress={backdropPress}
          style={[
            styles.fill,
            resolveBackdropStyle(theme.semantics.neutral.text, animation.backdropOpacity),
          ]}
          testID={testID ? `${testID}-backdrop` : undefined}
        />
        <FocusScope
          active={visible}
          onEscape={passive ? undefined : onDismiss}
          testID={testID ? `${testID}-focus` : undefined}
        >
          <View align="center" justify="center" p="l" style={styles.center}>
            <ReactNativeView accessible accessibilityViewIsModal style={styles.content}>
              <Surface p="l" style={styles.surface} testID={testID} variant="raised">
                {children}
              </Surface>
            </ReactNativeView>
          </View>
        </FocusScope>
      </ReactNativeView>
    </Portal>
  );
}

/*** Resolves the runtime backdrop color and opacity without inline JSX styles. */
function resolveBackdropStyle(backgroundColor: string, opacity: number): ViewStyle {
  return { backgroundColor, opacity };
}

const styles = StyleSheet.create({
  center: { flex: 1 },
  content: { maxWidth: 560, width: '100%' },
  fill: { bottom: 0, left: 0, position: 'absolute', right: 0, top: 0 },
  surface: {
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 18,
  },
});
