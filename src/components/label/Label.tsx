import React from 'react';

import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import type { LabelProps } from './types';

export function Label({ children, required = false, tone = 'default', testID }: LabelProps) {
  const { theme } = useTheme();

  return (
    <Text
      color={tone === 'danger' ? theme.semantics.danger.base : undefined}
      testID={testID}
      tone={tone === 'danger' ? 'default' : tone}
      variant="label"
      weight="medium"
    >
      {children}
      {required ? (
        <Text color={theme.semantics.danger.base} variant="label" weight="medium">
          {' *'}
        </Text>
      ) : null}
    </Text>
  );
}
