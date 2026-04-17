import type { ButtonBaseProps } from '../../primitives/button-base';
import type { IconProps } from '../../primitives/icon';
import type { ControlSize } from '../../internal/resolvers/resolveControlSize';
import type { ButtonVariant } from '../../internal/resolvers/resolveInteractiveColors';
import type { ComponentTone } from '../../internal/resolvers/resolveTone';

export interface IconButtonProps
  extends Omit<ButtonBaseProps, 'children' | 'style' | 'accessibilityLabel'> {
  icon: {
    name: IconProps['name'];
    provider?: IconProps['provider'];
  };
  accessibilityLabel: string;
  variant?: Exclude<ButtonVariant, 'soft'>;
  tone?: Extract<ComponentTone, 'primary' | 'neutral' | 'danger'>;
  size?: ControlSize;
}
