import type React from 'react';

import type { ButtonVariant } from './button';
import type { ControlSize } from './control';
import type { SurfaceColor } from './surfaceColor';

export interface BadgeProps {
  content?: React.ReactNode;
  variant?: Extract<ButtonVariant, 'solid' | 'soft' | 'outline'>;
  color?: SurfaceColor;
  size?: ControlSize;
  testID?: string;
}
