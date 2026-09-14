import React from 'react';

import type { DividerProps } from '../../../../types/layout';
import { Box } from './Box';

/*** Renders a horizontal or vertical separator using layout tokens. */
export function Divider({
  orientation = 'horizontal',
  color = 'border',
  thickness = 1,
  ...props
}: DividerProps) {
  return (
    <Box
      {...props}
      bg={color}
      height={orientation === 'horizontal' ? thickness : '100%'}
      width={orientation === 'vertical' ? thickness : '100%'}
    />
  );
}
