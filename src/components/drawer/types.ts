import type React from 'react';

import type { InteractionPolicy } from '../../primitives/button-base';

export interface DrawerProps {
  visible: boolean;
  onDismiss?: (() => void) | undefined;
  position?: 'left' | 'right';
  children?: React.ReactNode;
  closeOnBackdrop?: boolean;
  interactionPolicy?: InteractionPolicy;
  testID?: string;
}
