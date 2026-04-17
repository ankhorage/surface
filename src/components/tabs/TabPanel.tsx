import React from 'react';
import { View } from 'react-native';

import { useTabsContext } from './context';
import type { TabPanelProps } from './types';

const TAB_PANEL_ROLE = 'tabpanel' as React.ComponentProps<typeof View>['accessibilityRole'];

export function TabPanel({ value, children, testID }: TabPanelProps) {
  const { activeValue, getPanelId, getTabId } = useTabsContext();

  if (activeValue !== value) {
    return null;
  }

  const tabId = getTabId(value);
  const panelId = getPanelId(value);

  return (
    <View
      accessibilityLabelledBy={tabId}
      accessibilityRole={TAB_PANEL_ROLE}
      nativeID={panelId}
      testID={testID}
    >
      {children}
    </View>
  );
}
