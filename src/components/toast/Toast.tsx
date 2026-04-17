import React from 'react';
import { Pressable } from 'react-native';

import { Box, Inline, Surface } from '../../layout';
import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import type { ToastProps } from './types';

export function Toast({ title, description, tone = 'default', onDismiss, testID }: ToastProps) {
  const { theme } = useTheme();
  const toneColor =
    tone === 'success'
      ? theme.semantics.success.base
      : tone === 'danger'
        ? theme.semantics.danger.base
        : theme.semantics.action.primary.base;

  return (
    <Surface
      p="m"
      style={{
        borderLeftColor: toneColor,
        borderLeftWidth: 3,
        minWidth: 280,
        shadowOpacity: 0.14,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
      }}
      testID={testID}
      variant="raised"
    >
      <Inline align="center" justify="space-between">
        <Box flex={1}>
          {title ? (
            <Text variant="label" weight="medium">
              {title}
            </Text>
          ) : null}
          {description ? <Text tone="muted">{description}</Text> : null}
        </Box>
        {onDismiss ? (
          <Pressable
            accessibilityLabel="Dismiss notification"
            accessibilityRole="button"
            onPress={onDismiss}
            testID={testID ? `${testID}-dismiss` : undefined}
          >
            <Text color={toneColor}>×</Text>
          </Pressable>
        ) : null}
      </Inline>
    </Surface>
  );
}
