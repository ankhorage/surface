import React from 'react';
import { Platform, Pressable, type PressableStateCallbackType } from 'react-native';

import { useResponsiveRuntime } from '../../core/responsive';
import {
  type InteractionState,
  resolveFocusRingStyles,
  resolveInteractiveState,
} from '../../internal/resolvers';
import { useTheme } from '../../theme/ThemeContext';
import { resolveViewStyles } from '../../utils/resolveViewStyles';
import type { ButtonBaseProps } from './types';

/*** Resolves one Pressable state into the canonical Surface interaction state. */
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

/*** Renders the low-level token-aware Pressable boundary shared by Surface controls. */
export function ButtonBase({
  children,
  disabled = false,
  interactionPolicy = 'enabled',
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
  const resolvedViewStyles = resolveViewStyles(theme, breakpoint, props);
  const passive = interactionPolicy === 'passive';

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityState={{ ...accessibilityState, disabled }}
      disabled={disabled}
      onBlur={() => setFocused(false)}
      onFocus={() => {
        if (isWeb) setFocused(true);
      }}
      onHoverIn={isWeb ? () => setHovered(true) : undefined}
      onHoverOut={isWeb ? () => setHovered(false) : undefined}
      onLongPress={passive ? undefined : onLongPress}
      onPress={passive ? undefined : onPress}
      style={(pressableState) => {
        const state = getInteractionState(pressableState, hovered, focused, disabled);
        return [
          resolvedViewStyles,
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
