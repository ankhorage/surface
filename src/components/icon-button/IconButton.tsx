import React from 'react';

import { resolveButtonColors, resolveControlSize, resolveIconSize } from '../../internal/resolvers';
import { Box } from '../../layout';
import { ButtonBase } from '../../primitives/button-base';
import { Icon } from '../../primitives/icon';
import { useTheme } from '../../theme/ThemeContext';
import type { IconButtonProps } from './types';

export function IconButton({
  icon,
  accessibilityLabel,
  variant = 'ghost',
  tone = 'primary',
  size = 'm',
  disabled = false,
  onPress,
  testID,
  ...props
}: IconButtonProps) {
  const { theme } = useTheme();
  const controlSize = resolveControlSize(theme, size);

  return (
    <ButtonBase
      {...props}
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}
      onPress={onPress}
      testID={testID}
    >
      {(state) => {
        const colors = resolveButtonColors(theme, { state, tone, variant });

        return (
          <Box
            radius={controlSize.borderRadius}
            style={{
              minHeight: controlSize.minHeight,
              minWidth: controlSize.minHeight,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.backgroundColor,
              borderColor: colors.borderColor,
              borderWidth: variant === 'solid' ? 0 : 1,
              opacity: colors.opacity,
            }}
          >
            <Icon
              color={colors.contentColor}
              name={icon.name}
              provider={icon.provider}
              size={resolveIconSize(theme, size)}
            />
          </Box>
        );
      }}
    </ButtonBase>
  );
}
