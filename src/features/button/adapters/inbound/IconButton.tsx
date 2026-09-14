import React from 'react';
import type { ViewStyle } from 'react-native';

import { resolveButtonColors, resolveControlSize, resolveIconSize } from '../../../../internal/resolvers';
import { ButtonBase } from '../../../../primitives/button-base';
import { useTheme } from '../../../../theme/ThemeContext';
import type { IconButtonProps } from '../../../../types/button';
import { Icon } from '../../../icon/public';
import { Box } from '../../../layout/public';

/*** Renders a compact accessible icon-only action control. */
export function IconButton({
  icon,
  accessibilityLabel,
  variant = 'ghost',
  color = 'primary',
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
        const colors = resolveButtonColors(theme, { color, state, variant });
        return (
          <Box
            radius={controlSize.borderRadius}
            style={resolveIconButtonStyle(controlSize, colors, variant)}
          >
            <Icon {...icon} color={colors.contentColor} size={resolveIconSize(theme, size)} />
          </Box>
        );
      }}
    </ButtonBase>
  );
}

/*** Resolves the visual container style for an IconButton interaction state. */
function resolveIconButtonStyle(
  controlSize: ReturnType<typeof resolveControlSize>,
  colors: ReturnType<typeof resolveButtonColors>,
  variant: NonNullable<IconButtonProps['variant']>,
): ViewStyle {
  return {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    borderColor: colors.borderColor,
    borderWidth: variant === 'solid' ? 0 : 1,
    justifyContent: 'center',
    minHeight: controlSize.minHeight,
    minWidth: controlSize.minHeight,
    opacity: colors.opacity,
  };
}
