import React from 'react';
import { Pressable, View } from 'react-native';

import { FocusScope } from '../../internal/focus/FocusScope';
import { Portal } from '../../internal/overlay/Portal';
import { resolveOverlayAnimation } from '../../internal/resolvers';
import { Box, Surface } from '../../layout';
import { useTheme } from '../../theme/ThemeContext';
import type { DrawerProps } from './types';

export function Drawer({
  visible,
  onDismiss,
  position = 'right',
  children,
  closeOnBackdrop = true,
  testID,
}: DrawerProps) {
  const { theme } = useTheme();
  const animation = resolveOverlayAnimation('drawer');

  if (!visible) {
    return null;
  }

  return (
    <Portal layer="drawer" visible={visible}>
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
          <Box
            pointerEvents="box-none"
            style={{
              flex: 1,
              justifyContent: 'flex-start',
            }}
          >
            <View
              accessible
              accessibilityViewIsModal
              style={{
                alignSelf: position === 'left' ? 'flex-start' : 'flex-end',
                height: '100%',
                maxWidth: 420,
                width: '88%',
              }}
            >
              <Surface
                p="l"
                style={{
                  height: '100%',
                  shadowOpacity: 0.14,
                  shadowRadius: 14,
                  shadowOffset: { width: position === 'left' ? 4 : -4, height: 0 },
                }}
                testID={testID}
                variant="raised"
              >
                {children}
              </Surface>
            </View>
          </Box>
        </FocusScope>
      </View>
    </Portal>
  );
}
