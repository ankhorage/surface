import type { ControlSize } from '../../internal/resolvers/resolveControlSize';
import type { ButtonVariant } from '../../internal/resolvers/resolveInteractiveColors';
import type { ComponentTone } from '../../internal/resolvers/resolveTone';
import type { ButtonBaseProps } from '../../primitives/button-base';
import type { IconProps } from '../../primitives/icon';

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
  tone?: ComponentTone;
  size?: ControlSize;
}
