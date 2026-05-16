import React from 'react';
import { Pressable } from 'react-native';

import { Box, Inline, Surface } from '../../layout';
import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import type { ToastProps } from './types';

export function Toast({ title, description, status = 'default', onDismiss, testID }: ToastProps) {
  const { theme } = useTheme();
  const statusColor =
    status === 'success'
      ? theme.semantics.success.base
      : status === 'warning'
        ? theme.semantics.warning.base
        : status === 'error'
          ? theme.semantics.error.base
          : status === 'info'
            ? theme.semantics.info.base
            : theme.semantics.action.primary.base;

  const statusTextColor =
    status === 'success'
      ? 'success'
      : status === 'warning'
        ? 'warning'
        : status === 'error'
          ? 'error'
          : status === 'info'
            ? 'info'
            : 'primary';

  return (
    <Surface
      p="m"
      style={{
        borderLeftColor: statusColor,
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
          {description ? <Text emphasis="muted">{description}</Text> : null}
        </Box>
        {onDismiss ? (
          <Pressable
            accessibilityLabel="Dismiss notification"
            accessibilityRole="button"
            onPress={onDismiss}
            testID={testID ? `${testID}-dismiss` : undefined}
          >
            <Text color={statusTextColor}>×</Text>
          </Pressable>
        ) : null}
      </Inline>
    </Surface>
  );
}
