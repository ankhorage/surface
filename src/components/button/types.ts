import type React from 'react';

import type { ControlSize } from '../../internal/resolvers/resolveControlSize';
import type { ButtonVariant } from '../../internal/resolvers/resolveInteractiveColors';
import type { ButtonBaseProps } from '../../primitives/button-base';
import type { IconProps } from '../../primitives/icon';
import type { SurfaceColor } from '../../surfaceColor';

export interface ButtonIconSpec {
  name: IconProps['name'];
  provider?: IconProps['provider'];
}

export interface ButtonProps extends Omit<
  ButtonBaseProps,
  'accessibilityLabel' | 'children' | 'style'
> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  color?: SurfaceColor;
  size?: ControlSize;
  loading?: boolean;
  leadingIcon?: ButtonIconSpec;
  trailingIcon?: ButtonIconSpec;
  fullWidth?: boolean;
}
