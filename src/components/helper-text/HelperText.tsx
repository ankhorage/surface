import React from 'react';

import { Text } from '../../primitives/text';
import type { HelperTextProps } from './types';

export function HelperText({ children, tone = 'muted', testID }: HelperTextProps) {
  return (
    <Text testID={testID} tone={tone} variant="caption">
      {children}
    </Text>
  );
}
