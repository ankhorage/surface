import React from 'react';
import { Pressable, View } from 'react-native';

import { FocusScope } from '../../internal/focus/FocusScope';
import { Portal } from '../../internal/overlay/Portal';
import { resolveOverlayAnimation } from '../../internal/resolvers';
import { Box, Surface, Stack } from '../../layout';
import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import { ActionSheetItem } from './ActionSheetItem';
import type { ActionSheetProps } from './types';

export function ActionSheet({
  visible,
  onDismiss,
  title,
  description,
  children,
  cancelLabel = 'Cancel',
  closeOnBackdrop = true,
  testID,
}: ActionSheetProps) {
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
        <FocusScope
          active={visible}
          onEscape={onDismiss}
          testID={testID ? `${testID}-focus` : undefined}
        >
          <Box
            pointerEvents="box-none"
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            <View
              accessible
              accessibilityViewIsModal
              style={{
                alignSelf: 'center',
                maxWidth: 560,
                padding: 16,
                width: '100%',
              }}
            >
              <Surface
                p="m"
                style={{
                  borderRadius: 24,
                  shadowOpacity: 0.16,
                  shadowRadius: 18,
                  shadowOffset: { width: 0, height: -8 },
                }}
                testID={testID}
                variant="raised"
              >
                <Stack gap="s">
                  {title || description ? (
                    <Box px="m" py="s">
                      <Stack gap="xxs">
                        {title ? (
                          <Text align="center" variant="label" weight="semiBold">
                            {title}
                          </Text>
                        ) : null}
                        {description ? (
                          <Text align="center" emphasis="muted" variant="bodySmall">
                            {description}
                          </Text>
                        ) : null}
                      </Stack>
                    </Box>
                  ) : null}
                  <Stack gap="xxs">{children}</Stack>
                  {onDismiss ? (
                    <ActionSheetItem
                      label={cancelLabel}
                      onPress={onDismiss}
                      testID={testID ? `${testID}-cancel` : undefined}
                    />
                  ) : null}
                </Stack>
              </Surface>
            </View>
          </Box>
        </FocusScope>
      </View>
    </Portal>
  );
}
