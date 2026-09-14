import React from 'react';
import { View } from 'react-native';

import type { TabPanelProps } from '../../../../types/tabs';
import { useTabsContext } from '../../composition/useTabsContext';

const TAB_PANEL_ROLE = 'tabpanel' as React.ComponentProps<typeof View>['accessibilityRole'];

/*** Renders the content panel associated with the active tab value. */
export function TabPanel({ value, children, testID }: TabPanelProps) {
  const { activeValue, getPanelId, getTabId } = useTabsContext();

  if (activeValue !== value) return null;

  return (
    <View
      accessibilityLabelledBy={getTabId(value)}
      accessibilityRole={TAB_PANEL_ROLE}
      nativeID={getPanelId(value)}
      testID={testID}
    >
      {children}
    </View>
  );
}
