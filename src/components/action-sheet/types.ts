import type React from 'react';

import type { InteractionPolicy } from '../../interactionPolicy';
import type { SurfaceColor } from '../../surfaceColor';

export interface ActionSheetProps {
  visible: boolean;
  onDismiss?: (() => void) | undefined;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  closeOnBackdrop?: boolean;
  interactionPolicy?: InteractionPolicy;
  testID?: string;
}

export interface ActionSheetItemProps {
  label: React.ReactNode;
  description?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  color?: SurfaceColor;
  disabled?: boolean;
  selected?: boolean;
  interactionPolicy?: InteractionPolicy;
  onPress?: (() => void) | undefined;
  testID?: string;
}
