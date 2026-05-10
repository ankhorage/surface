import React from 'react';

import { Box } from '../../layout';
import { useTheme } from '../../theme/ThemeContext';
import { TabBarItem } from './TabBarItem';
import type { TabBarProps } from './types';

export function TabBar({ items, compact = false, testID }: TabBarProps) {
  const { theme } = useTheme();

  return (
    <Box
      style={{
        flexDirection: 'row',
        borderTopColor: theme.semantics.border.default,
        borderTopWidth: 1,
      }}
      testID={testID}
    >
      {items.map((item) => (
        <TabBarItem compact={compact} item={item} key={item.id} testID={testID} />
      ))}
    </Box>
  );
}
