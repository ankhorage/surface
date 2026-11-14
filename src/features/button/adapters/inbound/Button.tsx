import type { ButtonProps } from '../../../../types/button';
import { Icon } from '../../../icon/public';
import { ButtonPresentation } from './ButtonPresentation';

/*** Renders the primary Surface action control with semantic visual states. */
export function Button(props: ButtonProps) {
  return <ButtonPresentation {...props} Icon={Icon} />;
}
