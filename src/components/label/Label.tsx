import React from 'react';

import { Text } from '../../primitives/text';
import type { LabelProps } from './types';

export function Label({
  children,
  required = false,
  emphasis = 'default',
  color,
  testID,
}: LabelProps) {
  return (
    <Text color={color} emphasis={emphasis} testID={testID} variant="label" weight="medium">
      {children}
      {required ? (
        <Text color="danger" variant="label" weight="medium">
          {' *'}
        </Text>
      ) : null}
    </Text>
  );
}
