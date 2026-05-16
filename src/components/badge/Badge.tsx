import React from 'react';

import { resolveButtonColors, resolveControlSize } from '../../internal/resolvers';
import { Box } from '../../layout';
import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import type { BadgeProps } from './types';

export function Badge({
  content,
  variant = 'soft',
  color = 'primary',
  size = 's',
  testID,
}: BadgeProps) {
  const { theme } = useTheme();
  const controlSize = resolveControlSize(theme, size);
  const colors = resolveButtonColors(theme, {
    variant,
    color,
    state: {
      disabled: false,
      focused: false,
      hovered: false,
      pressed: false,
    },
  });

  return (
    <Box
      px={Math.max(theme.spacing.xs, controlSize.paddingHorizontal - 4)}
      py={Math.max(4, controlSize.paddingVertical - 2)}
      radius={controlSize.borderRadius}
      style={{
        alignSelf: 'flex-start',
        backgroundColor: colors.backgroundColor,
        borderColor: colors.borderColor,
        borderWidth: variant === 'solid' ? 0 : 1,
      }}
      testID={testID}
    >
      <Text
        color={variant === 'solid' ? undefined : color}
        emphasis={variant === 'solid' ? 'inverse' : 'default'}
        variant="bodySmall"
        weight="medium"
      >
        {content}
      </Text>
    </Box>
  );
}
