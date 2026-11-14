import React from 'react';

import type { ButtonProps } from '../../../../types/button';
import { Icon } from '../../../icon/adapters/inbound/Icon.web';
import { ButtonPresentation } from './ButtonPresentation';

/*** Renders Button through the browser-safe Icon platform adapter. */
export function Button(props: ButtonProps) {
  return <ButtonPresentation {...props} Icon={Icon} />;
}
