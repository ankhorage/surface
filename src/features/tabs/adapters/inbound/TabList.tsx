import React from 'react';
import { StyleSheet } from 'react-native';

import { Box } from '../../../layout/public';
import { useFocusManager } from '../../../../internal/focus/useFocusManager';
import type { TabListProps, TabNavigationKey } from '../../../../types/tabs';
import { useTabsContext } from '../../composition/useTabsContext';
import { resolveNextTabValue } from '../../utils/resolveNextTabValue';

const navigationKeys: readonly string[] = [
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
  'Home',
  'End',
];

/*** Renders the accessible tab list and owns keyboard focus navigation. */
export function TabList({ children, testID }: TabListProps) {
  const { bindKeydown } = useFocusManager();
  const { focusedValue, setActiveValue, tabs } = useTabsContext();

  React.useEffect(() => {
    if (!focusedValue) return undefined;

    return bindKeydown((event) => {
      if (!isTabNavigationKey(event.key)) return;
      const nextValue = resolveNextTabValue(tabs, focusedValue, event.key);
      if (!nextValue) return;

      event.preventDefault();
      tabs.find((tab) => tab.value === nextValue)?.focus();
      setActiveValue(nextValue);
    });
  }, [bindKeydown, focusedValue, setActiveValue, tabs]);

  return (
    <Box accessibilityRole="tablist" style={styles.list} testID={testID}>
      {children}
    </Box>
  );
}

/*** Narrows keyboard event keys to the tab navigation key contract. */
function isTabNavigationKey(key: string | undefined): key is TabNavigationKey {
  return key !== undefined && navigationKeys.includes(key);
}

const styles = StyleSheet.create({ list: { flexDirection: 'row' } });
