import type React from 'react';

import type { ControlSize } from '../../internal/resolvers/resolveControlSize';
import type { ComponentTone } from '../../internal/resolvers/resolveTone';
import type { ButtonBaseProps } from '../../primitives/button-base';

export interface SwitchProps extends Omit<
  ButtonBaseProps,
  'accessibilityRole' | 'accessibilityState' | 'children' | 'onPress' | 'style'
> {
  children?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: ((checked: boolean) => void) | undefined;
  tone?: ComponentTone;
  size?: ControlSize;
  invalid?: boolean;
  readOnly?: boolean;
}
