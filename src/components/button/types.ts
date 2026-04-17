import type React from 'react';

import type { ControlSize } from '../../internal/resolvers/resolveControlSize';
import type { ButtonVariant } from '../../internal/resolvers/resolveInteractiveColors';
import type { ComponentTone } from '../../internal/resolvers/resolveTone';
import type { ButtonBaseProps } from '../../primitives/button-base';
import type { IconProps } from '../../primitives/icon';

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
  tone?: ComponentTone;
  size?: ControlSize;
  loading?: boolean;
  leadingIcon?: ButtonIconSpec;
  trailingIcon?: ButtonIconSpec;
  fullWidth?: boolean;
}
