import React from 'react';

import { ButtonBase } from '../../primitives/button-base';
import { Surface } from '../../layout';
import { useTheme } from '../../theme/ThemeContext';
import type { CardProps } from './types';

function resolveCardStateBackground(
  variant: NonNullable<CardProps['variant']>,
  pressed: boolean,
  hovered: boolean,
  themeBackgrounds: {
    base: string;
    subtle: string;
    hover: string;
    active: string;
  },
) {
  if (variant === 'outline') {
    return pressed
      ? themeBackgrounds.active
      : hovered
        ? themeBackgrounds.hover
        : 'transparent';
  }

  if (variant === 'subtle') {
    return pressed
      ? themeBackgrounds.active
      : hovered
        ? themeBackgrounds.hover
        : themeBackgrounds.subtle;
  }

  return pressed ? themeBackgrounds.active : hovered ? themeBackgrounds.hover : themeBackgrounds.base;
}

export function Card({
  children,
  variant = 'default',
  onPress,
  disabled = false,
  testID,
  style,
  ...props
}: CardProps) {
  const { theme } = useTheme();

  if (!onPress) {
    return (
      <Surface {...props} style={style} testID={testID} variant={variant}>
        {children}
      </Surface>
    );
  }

  return (
    <ButtonBase
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      testID={testID}
    >
      {(state) => (
        <Surface
          {...props}
          style={[
            {
              backgroundColor: resolveCardStateBackground(variant, state.pressed, state.hovered, {
                active: theme.semantics.neutral.surfaceActive,
                base: theme.semantics.surface.default,
                hover: theme.semantics.neutral.surfaceHover,
                subtle: theme.semantics.surface.subtle,
              }),
              opacity: state.disabled ? 0.72 : 1,
            },
            style,
          ]}
          variant={variant}
        >
          {children}
        </Surface>
      )}
    </ButtonBase>
  );
}
