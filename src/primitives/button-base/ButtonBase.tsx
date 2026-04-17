import React from 'react';
import { Platform, Pressable, type PressableStateCallbackType } from 'react-native';

import { useResponsiveRuntime } from '../../core/responsive';
import {
  type InteractionState,
  resolveFocusRingStyles,
  resolveInteractiveState,
} from '../../internal/resolvers';
import { resolveBoxStyles } from '../../layout/helpers';
import { useTheme } from '../../theme/ThemeContext';
import type { ButtonBaseProps } from './types';

function getInteractionState(
  pressableState: PressableStateCallbackType,
  hovered: boolean,
  focused: boolean,
  disabled: boolean,
): InteractionState {
  return resolveInteractiveState({
    pressed: pressableState.pressed,
    hovered,
    focused,
    disabled,
  });
}

export function ButtonBase({
  children,
  disabled = false,
  onPress,
  onLongPress,
  accessibilityLabel,
  accessibilityRole = 'button',
  accessibilityState,
  style,
  testID,
  ...props
}: ButtonBaseProps) {
  const { theme } = useTheme();
  const { breakpoint } = useResponsiveRuntime();
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const isWeb = Platform.OS === 'web';
  const resolvedBoxStyles = resolveBoxStyles(theme, breakpoint, props);

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityState={{ ...accessibilityState, disabled }}
      disabled={disabled}
      onBlur={() => setFocused(false)}
      onFocus={() => {
        if (isWeb) {
          setFocused(true);
        }
      }}
      onHoverIn={isWeb ? () => setHovered(true) : undefined}
      onHoverOut={isWeb ? () => setHovered(false) : undefined}
      onLongPress={onLongPress}
      onPress={onPress}
      style={(pressableState) => {
        const state = getInteractionState(pressableState, hovered, focused, disabled);

        return [
          resolvedBoxStyles,
          resolveFocusRingStyles(theme.semantics.border.focus, state.focused, isWeb),
          style,
        ];
      }}
      testID={testID}
    >
      {(pressableState) => {
        const state = getInteractionState(pressableState, hovered, focused, disabled);

        return typeof children === 'function' ? children(state) : children;
      }}
    </Pressable>
  );
}
