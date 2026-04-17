import React from 'react';
import { View } from 'react-native';

import { useTabsContext } from './context';
import type { TabPanelProps } from './types';

export function TabPanel({ value, children, testID }: TabPanelProps) {
  const { activeValue } = useTabsContext();

  if (activeValue !== value) {
    return null;
  }

  return <View testID={testID}>{children}</View>;
}
