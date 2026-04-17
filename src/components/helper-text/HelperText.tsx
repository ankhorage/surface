import React from 'react';

import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import type { HelperTextProps } from './types';

export function HelperText({ children, tone = 'muted', testID }: HelperTextProps) {
  const { theme } = useTheme();

  return (
    <Text
      color={tone === 'danger' ? theme.semantics.danger.base : undefined}
      testID={testID}
      tone={tone === 'danger' ? 'default' : tone}
      variant="caption"
    >
      {children}
    </Text>
  );
}
