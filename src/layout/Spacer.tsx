import React from 'react';

import { Box } from './Box';
import type { SpaceValue } from './helpers';

export interface SpacerProps {
  size?: SpaceValue;
  axis?: 'horizontal' | 'vertical' | 'both';
  testID?: string;
}

export function Spacer({ size = 'm', axis = 'vertical', testID }: SpacerProps) {
  if (axis === 'horizontal') {
    return <Box testID={testID} width={size} />;
  }

  if (axis === 'both') {
    return <Box testID={testID} height={size} width={size} />;
  }

  return <Box testID={testID} height={size} />;
}
