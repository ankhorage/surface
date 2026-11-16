import React from 'react';
import {
  Platform,
  Pressable as ReactNativePressable,
  type PressableStateCallbackType,
} from 'react-native';

import { useResponsiveRuntime } from '../../../../core/responsive/index.js';
import {
  resolveFocusRingStyles,
  resolveInteractiveState,
} from '../../../../internal/resolvers/index.js';
import type { InteractionState, PressableProps } from '../../../../types/pressable.js';
import { resolveViewStyles } from '../../../../utils/resolveViewStyles.js';
import { useTheme } from '../../../theme/runtime.js';

/*** Renders the token-aware Surface adapter for React Native Pressable. */
export function Pressable({
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
}: PressableProps) {
  const { theme } = useTheme();
  const { breakpoint } = useResponsiveRuntime();
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const isWeb = Platform.OS === 'web';
  const resolvedViewStyles = resolveViewStyles(theme, breakpoint, props);
  const pressHandlers = resolvePressHandlers(interactionPolicy, onPress, onLongPress);
  const pressableStyle = resolvePressableStyle({
    disabled,
    focusColor: theme.semantics.border.focus,
    focused,
    hovered,
    isWeb,
    resolvedViewStyles,
    style,
  });
  return (
    <ReactNativePressable
      {...pressHandlers}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityState={{ ...accessibilityState, disabled }}
      aria-checked={accessibilityState?.checked}
      disabled={disabled}
      onBlur={() => setFocused(false)}
      onFocus={resolveFocusHandler(isWeb, setFocused)}
      onHoverIn={isWeb ? () => setHovered(true) : undefined}
      onHoverOut={isWeb ? () => setHovered(false) : undefined}
      onKeyDown={resolveCheckboxSpaceKeyHandler(accessibilityRole, isWeb, pressHandlers.onPress)}
      style={pressableStyle}
      testID={testID}
    >
      {resolvePressableChildren(children, hovered, focused, disabled)}
    </ReactNativePressable>
  );
}

/*** Resolves press handlers according to the shared interaction policy. */
function resolvePressHandlers(
  interactionPolicy: PressableProps['interactionPolicy'],
  onPress: PressableProps['onPress'],
  onLongPress: PressableProps['onLongPress'],
) {
  return interactionPolicy === 'passive'
    ? { onLongPress: undefined, onPress: undefined }
    : { onLongPress, onPress };
}

/*** Provides the ARIA checkbox Space-key behavior absent from React Native Web Pressable. */
function resolveCheckboxSpaceKeyHandler(
  accessibilityRole: PressableProps['accessibilityRole'],
  isWeb: boolean,
  onPress: PressableProps['onPress'],
) {
  if (!isWeb || accessibilityRole !== 'checkbox' || onPress === undefined) return undefined;

  const onKeyDown: PressableKeyDownHandler = (event) => {
    if (event.nativeEvent.key !== ' ' && event.nativeEvent.key !== 'Spacebar') return;
    event.preventDefault();
    document.activeElement?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  };
  return onKeyDown;
}

/*** Resolves static or stateful content from the native Pressable interaction state. */
function resolvePressableChildren(
  children: PressableProps['children'],
  hovered: boolean,
  focused: boolean,
  disabled: boolean,
) {
  return (pressableState: PressableStateCallbackType) => {
    const state = resolveInteractionState(pressableState, hovered, focused, disabled);
    return typeof children === 'function' ? children(state) : children;
  };
}

/*** Resolves a web-only focus handler while preserving native focus behavior. */
function resolveFocusHandler(
  isWeb: boolean,
  setFocused: React.Dispatch<React.SetStateAction<boolean>>,
) {
  return () => {
    if (isWeb) setFocused(true);
  };
}

/*** Resolves token-aware styles from the native Pressable interaction state. */
function resolvePressableStyle({
  disabled,
  focusColor,
  focused,
  hovered,
  isWeb,
  resolvedViewStyles,
  style,
}: PressableStyleInput) {
  return (pressableState: PressableStateCallbackType) => {
    const state = resolveInteractionState(pressableState, hovered, focused, disabled);
    return [resolvedViewStyles, resolveFocusRingStyles(focusColor, state.focused, isWeb), style];
  };
}

/*** Resolves one native Pressable state into the canonical Surface interaction state. */
function resolveInteractionState(
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

interface PressableStyleInput {
  disabled: boolean;
  focusColor: string;
  focused: boolean;
  hovered: boolean;
  isWeb: boolean;
  resolvedViewStyles: ReturnType<typeof resolveViewStyles>;
  style: PressableProps['style'];
}

type PressableKeyDownHandler = NonNullable<
  React.ComponentProps<typeof ReactNativePressable>['onKeyDown']
>;
