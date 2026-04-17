import type React from 'react';
import type { AccessibilityRole, GestureResponderEvent } from 'react-native';

import type { BoxProps } from '../../layout';
import type { InteractionState } from '../../internal/resolvers/resolveInteractiveState';

export interface ButtonBaseProps extends Omit<BoxProps, 'children' | 'pointerEvents'> {
  children?: React.ReactNode | ((state: InteractionState) => React.ReactNode);
  disabled?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  testID?: string;
}
