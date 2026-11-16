import type React from 'react';

import type { ControlSize } from './control.js';
import type { PressableProps } from './pressable.js';
import type { SurfaceColor } from './surfaceColor.js';

export interface RadioProps extends Omit<
  PressableProps,
  'accessibilityRole' | 'accessibilityState' | 'children' | 'onPress' | 'style'
> {
  children?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: ((checked: boolean) => void) | undefined;
  color?: SurfaceColor;
  size?: ControlSize;
  invalid?: boolean;
  readOnly?: boolean;
}
