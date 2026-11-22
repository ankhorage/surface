import type React from 'react';

import type { ControlSize } from './control.js';
import type { IconSource } from './icon.js';
import type { PressableProps } from './pressable.js';
import type { SurfaceColor } from './surfaceColor.js';
import type { TextWeight } from './typography.js';

export type ButtonIconSpec = IconSource;
export type ButtonLabelWeight = Extract<TextWeight, 'semiBold' | 'bold'>;
export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'soft';

export interface ButtonProps extends Omit<
  PressableProps,
  'accessibilityLabel' | 'children' | 'style'
> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  color?: SurfaceColor;
  size?: ControlSize;
  labelWeight?: ButtonLabelWeight;
  loading?: boolean;
  leadingIcon?: ButtonIconSpec;
  trailingIcon?: ButtonIconSpec;
  fullWidth?: boolean;
}

export interface IconButtonProps extends Omit<
  PressableProps,
  'children' | 'style' | 'accessibilityLabel'
> {
  icon: IconSource;
  accessibilityLabel: string;
  variant?: ButtonVariant;
  color?: SurfaceColor;
  size?: ControlSize;
}
