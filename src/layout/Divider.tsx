import React from 'react';

import { Box, type BoxProps } from './Box';
import type { ColorValue } from './helpers';

export interface DividerProps extends Omit<BoxProps, 'bg' | 'height' | 'width'> {
  orientation?: 'horizontal' | 'vertical';
  color?: ColorValue;
  thickness?: number;
}

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
