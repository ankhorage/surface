import React from 'react';

import { Text } from '../../primitives/text';
import type { LabelProps } from './types';

export function Label({ children, required = false, tone = 'default', testID }: LabelProps) {
  return (
    <Text testID={testID} tone={tone} variant="label" weight="medium">
      {children}
      {required ? (
        <Text tone="danger" variant="label" weight="medium">
          {' *'}
        </Text>
      ) : null}
    </Text>
  );
}
