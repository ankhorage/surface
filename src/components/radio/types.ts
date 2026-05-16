import type React from 'react';

import type { ControlSize } from '../../internal/resolvers/resolveControlSize';
import type { ButtonBaseProps } from '../../primitives/button-base';
import type { SurfaceColor } from '../../surfaceColor';

export interface RadioProps extends Omit<
  ButtonBaseProps,
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
