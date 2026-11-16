import type React from 'react';

import type { InteractionPolicy } from './interactionPolicy.js';

export interface ModalProps {
  visible: boolean;
  onDismiss?: (() => void) | undefined;
  children?: React.ReactNode;
  closeOnBackdrop?: boolean;
  interactionPolicy?: InteractionPolicy;
  testID?: string;
}
