import type React from 'react';

import type { ButtonBaseProps } from '../../primitives/button-base';
import type { IconProps } from '../../primitives/icon';
import type { ControlSize } from '../../internal/resolvers/resolveControlSize';
import type { ButtonVariant } from '../../internal/resolvers/resolveInteractiveColors';
import type { ComponentTone } from '../../internal/resolvers/resolveTone';

export interface ButtonIconSpec {
  name: IconProps['name'];
  provider?: IconProps['provider'];
}

export interface ButtonProps
  extends Omit<ButtonBaseProps, 'accessibilityLabel' | 'children' | 'style'> {
  children?: React.ReactNode;
  variant?: Exclude<ButtonVariant, 'soft'>;
  tone?: Extract<ComponentTone, 'primary' | 'neutral' | 'danger'>;
  size?: ControlSize;
  loading?: boolean;
  leadingIcon?: ButtonIconSpec;
  trailingIcon?: ButtonIconSpec;
  fullWidth?: boolean;
}
