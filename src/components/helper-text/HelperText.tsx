import React from 'react';

import { Text } from '../../primitives/text';
import type { HelperTextProps } from './types';

export function HelperText({ children, emphasis = 'muted', color, testID }: HelperTextProps) {
  return (
    <Text color={color} emphasis={emphasis} testID={testID} variant="caption">
      {children}
    </Text>
  );
}
