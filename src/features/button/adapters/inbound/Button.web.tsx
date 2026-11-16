import React from 'react';

import type { ButtonProps } from '../../../../types/button.js';
import { Icon } from '../../../icon/adapters/inbound/Icon.web.js';
import { ButtonPresentation } from './ButtonPresentation.js';

/*** Renders Button through the browser-safe Icon platform adapter. */
export function Button(props: ButtonProps) {
  return <ButtonPresentation {...props} Icon={Icon} />;
}
