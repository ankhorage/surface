import React from 'react';

import { ButtonBase } from '../../../../primitives/button-base';
import { useTheme } from '../../../../theme/ThemeContext';
import type { CardProps } from '../../../../types/card';
import type { SurfaceVariant } from '../../../../types/surface';
import { Surface } from '../../../surface/public';

/*** Renders a themed content card with optional interactive press states. */
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
    <ButtonBase accessibilityRole="button" disabled={disabled} onPress={onPress} testID={testID}>
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

/*** Resolves the interactive background for one Card variant and state. */
function resolveCardStateBackground(
  variant: SurfaceVariant,
  pressed: boolean,
  hovered: boolean,
  backgrounds: { base: string; subtle: string; hover: string; active: string },
) {
  if (variant === 'outline') {
    return pressed ? backgrounds.active : hovered ? backgrounds.hover : 'transparent';
  }
  if (variant === 'subtle') {
    return pressed ? backgrounds.active : hovered ? backgrounds.hover : backgrounds.subtle;
  }
  return pressed ? backgrounds.active : hovered ? backgrounds.hover : backgrounds.base;
}
