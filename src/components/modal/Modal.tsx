import React from 'react';
import { Pressable, View } from 'react-native';

import { FocusScope } from '../../internal/focus/FocusScope';
import { Portal } from '../../internal/overlay/Portal';
import { resolveOverlayAnimation } from '../../internal/resolvers';
import { Center, Surface } from '../../layout';
import { useTheme } from '../../theme/ThemeContext';
import type { ModalProps } from './types';

export function Modal({
  visible,
  onDismiss,
  children,
  closeOnBackdrop = true,
  testID,
}: ModalProps) {
  const { theme } = useTheme();
  const animation = resolveOverlayAnimation('modal');

  if (!visible) {
    return null;
  }

  return (
    <Portal layer="modal" visible={visible}>
      <View
        pointerEvents="box-none"
        style={{
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      >
        <Pressable
          onPress={closeOnBackdrop ? onDismiss : undefined}
          style={{
            backgroundColor: theme.semantics.neutral.text,
            bottom: 0,
            left: 0,
            opacity: animation.backdropOpacity,
            position: 'absolute',
            right: 0,
            top: 0,
          }}
          testID={testID ? `${testID}-backdrop` : undefined}
        />
        <FocusScope active={visible} onEscape={onDismiss} testID={testID ? `${testID}-focus` : undefined}>
          <Center
            p="l"
            style={{
              flex: 1,
            }}
          >
            <View
              accessible
              accessibilityViewIsModal
              style={{
                maxWidth: 560,
                width: '100%',
              }}
            >
              <Surface
                p="l"
                style={{
                  shadowOpacity: 0.14,
                  shadowRadius: 18,
                  shadowOffset: { width: 0, height: 8 },
                }}
                testID={testID}
                variant="raised"
              >
                {children}
              </Surface>
            </View>
          </Center>
        </FocusScope>
      </View>
    </Portal>
  );
}
