import React from 'react';

import { Stack, type StackProps } from './Stack';

export interface InlineProps extends Omit<StackProps, 'direction'> {}

export function Inline({ wrap = 'wrap', align = 'center', ...props }: InlineProps) {
  return <Stack {...props} align={align} direction="row" wrap={wrap} />;
}
