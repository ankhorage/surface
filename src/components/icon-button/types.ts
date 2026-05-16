import type { ControlSize } from '../../internal/resolvers/resolveControlSize';
import type { ButtonVariant } from '../../internal/resolvers/resolveInteractiveColors';
import type { ButtonBaseProps } from '../../primitives/button-base';
import type { IconProps } from '../../primitives/icon';
import type { SurfaceColor } from '../../surfaceColor';

export interface IconButtonProps extends Omit<
  ButtonBaseProps,
  'children' | 'style' | 'accessibilityLabel'
> {
  icon: {
    name: IconProps['name'];
    provider?: IconProps['provider'];
  };
  accessibilityLabel: string;
  variant?: ButtonVariant;
  color?: SurfaceColor;
  size?: ControlSize;
}
