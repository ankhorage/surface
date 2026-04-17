import type React from 'react';

import type { ControlSize } from '../../internal/resolvers/resolveControlSize';
import type { ButtonVariant } from '../../internal/resolvers/resolveInteractiveColors';
import type { ComponentTone } from '../../internal/resolvers/resolveTone';

export interface BadgeProps {
  content?: React.ReactNode;
  variant?: Extract<ButtonVariant, 'solid' | 'soft' | 'outline'>;
  tone?: Extract<ComponentTone, 'primary' | 'neutral' | 'danger' | 'success' | 'warning'>;
  size?: ControlSize;
  testID?: string;
}
