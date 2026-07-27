import type React from 'react';
import type { AccessibilityRole, AccessibilityState, GestureResponderEvent } from 'react-native';

import type { InteractionState } from '../../internal/resolvers/resolveInteractiveState';
import type { BoxProps } from '../../layout';

export type InteractionPolicy = 'enabled' | 'passive';

export interface InteractionPolicyProps {
  interactionPolicy?: InteractionPolicy;
}

export interface ButtonBaseProps extends Omit<BoxProps, 'children' | 'pointerEvents'> {
  children?: React.ReactNode | ((state: InteractionState) => React.ReactNode);
  disabled?: boolean;
  interactionPolicy?: InteractionPolicy;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  accessibilityState?: AccessibilityState;
  testID?: string;
}
