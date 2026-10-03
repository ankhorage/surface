import type React from 'react';
import type { AccessibilityRole, AccessibilityState, GestureResponderEvent } from 'react-native';

import type { InteractionPolicyProps } from './interactionPolicy';
import type { ViewProps } from './layout';

export interface InteractionState {
  pressed: boolean;
  hovered: boolean;
  focused: boolean;
  disabled: boolean;
}

export interface PressableProps
  extends Omit<ViewProps, 'children' | 'pointerEvents'>, InteractionPolicyProps {
  children?: React.ReactNode | ((state: InteractionState) => React.ReactNode);
  disabled?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  accessibilityState?: AccessibilityState;
  testID?: string;
}
