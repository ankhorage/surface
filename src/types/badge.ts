import type React from 'react';

import type { ButtonVariant } from './button.js';
import type { ControlSize } from './control.js';
import type { SurfaceColor } from './surfaceColor.js';

export interface BadgeProps {
  content?: React.ReactNode;
  variant?: Extract<ButtonVariant, 'solid' | 'soft' | 'outline'>;
  color?: SurfaceColor;
  size?: ControlSize;
  testID?: string;
}
