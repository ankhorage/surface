import React from 'react';
import { Pressable } from 'react-native';

import { Box, Inline, Surface } from '../../layout';
import { Text } from '../../primitives/text';
import type { SurfaceColor } from '../../surfaceColor';
import { useTheme } from '../../theme/ThemeContext';
import type { SurfaceTheme } from '../../theme/types';
import type { ToastProps } from './types';

function resolveToastStatusColor(theme: SurfaceTheme, status: ToastProps['status']) {
  switch (status) {
    case 'success':
      return theme.semantics.success.base;
    case 'warning':
      return theme.semantics.warning.base;
    case 'error':
      return theme.semantics.error.base;
    case 'info':
      return theme.semantics.info.base;
    default:
      return theme.semantics.action.primary.base;
  }
}

function resolveToastStatusTextColor(status: ToastProps['status']): SurfaceColor {
  switch (status) {
    case 'success':
      return 'success';
    case 'warning':
      return 'warning';
    case 'error':
      return 'error';
    case 'info':
      return 'info';
    default:
      return 'primary';
  }
}

export function Toast({ title, description, status = 'default', onDismiss, testID }: ToastProps) {
  const { theme } = useTheme();
  const statusColor = resolveToastStatusColor(theme, status);
  const statusTextColor = resolveToastStatusTextColor(status);

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
