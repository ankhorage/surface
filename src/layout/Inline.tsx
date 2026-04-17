import React from 'react';

import { Stack, type StackProps } from './Stack';

export type InlineProps = Omit<StackProps, 'direction'>;

export function Inline({ wrap = 'wrap', align = 'center', ...props }: InlineProps) {
  return <Stack {...props} align={align} direction="row" wrap={wrap} />;
}
