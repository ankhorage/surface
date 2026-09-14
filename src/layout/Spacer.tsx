import React from 'react';

import { Box } from '../features/layout/public';
import type { SpaceValue } from '../types/layout';

export interface SpacerProps {
  size?: SpaceValue;
  axis?: 'horizontal' | 'vertical' | 'both';
  testID?: string;
}

export function Spacer({ size = 'm', axis = 'vertical', testID }: SpacerProps) {
  if (axis === 'horizontal') return <Box testID={testID} width={size} />;
  if (axis === 'both') return <Box testID={testID} height={size} width={size} />;
  return <Box testID={testID} height={size} />;
}
