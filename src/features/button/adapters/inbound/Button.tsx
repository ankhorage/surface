import type { ButtonProps } from '../../../../types/button.js';
import { Icon } from '../../../icon/public.js';
import { ButtonPresentation } from './ButtonPresentation.js';

/*** Renders the primary Surface action control with semantic visual states. */
export function Button(props: ButtonProps) {
  return <ButtonPresentation {...props} Icon={Icon} />;
}
