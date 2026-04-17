import React from 'react';

import { useControllableState } from '../../internal/useControllableState';
import { Box } from '../../layout';
import { TabsContext, type TabRegistration } from './context';
import type { TabsProps } from './types';

export function Tabs({
  children,
  value,
  defaultValue,
  onValueChange,
  testID,
}: TabsProps) {
  const [activeValue, setActiveValue] = useControllableState<string | undefined>({
    value,
    defaultValue,
    onChange: (nextValue) => {
      if (nextValue !== undefined) {
        onValueChange?.(nextValue);
      }
    },
  });
  const [focusedValue, setFocusedValue] = React.useState<string | undefined>(undefined);
  const [tabs, setTabs] = React.useState<TabRegistration[]>([]);

  const registerTab = React.useCallback((tab: TabRegistration) => {
    setTabs((current) => {
      const nextTabs = current.some((entry) => entry.value === tab.value)
        ? current.map((entry) => (entry.value === tab.value ? tab : entry))
        : [...current, tab];

      if (!activeValue) {
        const firstEnabledTab = nextTabs.find((entry) => !entry.disabled);
        if (firstEnabledTab) {
          setActiveValue(firstEnabledTab.value);
        }
      }

      return nextTabs;
    });
  }, [activeValue, setActiveValue]);

  const unregisterTab = React.useCallback((valueToRemove: string) => {
    setTabs((current) => current.filter((entry) => entry.value !== valueToRemove));
  }, []);

  const contextValue = React.useMemo(
    () => ({
      activeValue,
      focusedValue,
      registerTab,
      setActiveValue: (nextValue: string) => {
        setActiveValue(nextValue);
      },
      setFocusedValue,
      tabs,
      unregisterTab,
    }),
    [activeValue, focusedValue, registerTab, setActiveValue, tabs, unregisterTab],
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <Box testID={testID}>{children}</Box>
    </TabsContext.Provider>
  );
}
