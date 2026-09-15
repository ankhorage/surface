import type React from 'react';
import type { AccessibilityRole, AccessibilityState, GestureResponderEvent } from 'react-native';

import type { InteractionPolicyProps } from '../../interactionPolicy';
import type { InteractionState } from '../../internal/resolvers/resolveInteractiveState';
import type { ViewProps } from '../../types/layout';

export interface ButtonBaseProps
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
