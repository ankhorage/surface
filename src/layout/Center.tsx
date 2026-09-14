import React from 'react';

import { Box, type BoxProps } from '../features/layout/public';

export interface CenterProps extends BoxProps {
  axis?: 'horizontal' | 'vertical' | 'both';
}

export function Center({ axis = 'both', style, ...props }: CenterProps) {
  return (
    <Box
      {...props}
      style={[
        {
          alignItems: axis === 'both' || axis === 'horizontal' ? 'center' : undefined,
          justifyContent: axis === 'both' || axis === 'vertical' ? 'center' : undefined,
        },
        style,
      ]}
    />
  );
}
