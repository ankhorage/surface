import React from 'react';
import type { ViewStyle } from 'react-native';

import { resolveButtonColors, resolveControlSize } from '../../../../internal/resolvers';
import { useTheme } from '../../../../theme/ThemeContext';
import type { BadgeProps } from '../../../../types/badge';
import { Box } from '../../../layout/public';
import { Text } from '../../../typography/public';

/*** Renders compact semantic status or metadata content. */
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
    state: { disabled: false, focused: false, hovered: false, pressed: false },
  });

  return (
    <Box
      px={Math.max(theme.spacing.xs, controlSize.paddingHorizontal - 4)}
      py={Math.max(4, controlSize.paddingVertical - 2)}
      radius={controlSize.borderRadius}
      style={resolveBadgeStyle(colors.backgroundColor, colors.borderColor, variant)}
      testID={testID}
    >
      <Text
        color={color}
        emphasis={variant === 'solid' ? 'inverse' : 'default'}
        variant="bodySmall"
        weight="medium"
      >
        {content}
      </Text>
    </Box>
  );
}

/*** Resolves the visual container style for one badge variant. */
function resolveBadgeStyle(
  backgroundColor: string,
  borderColor: string,
  variant: NonNullable<BadgeProps['variant']>,
): ViewStyle {
  return {
    alignSelf: 'flex-start',
    backgroundColor,
    borderColor,
    borderWidth: variant === 'solid' ? 0 : 1,
  };
}
