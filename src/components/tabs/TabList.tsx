import React from 'react';

import { useFocusManager } from '../../internal/focus/useFocusManager';
import { Box } from '../../layout';
import { useTabsContext } from './context';
import { resolveNextTabValue } from './navigation';
import type { TabListProps } from './types';

export function TabList({ children, testID }: TabListProps) {
  const { bindKeydown } = useFocusManager();
  const { focusedValue, setActiveValue, tabs } = useTabsContext();

  React.useEffect(() => {
    if (!focusedValue) {
      return undefined;
    }

    return bindKeydown((event) => {
      const nextValue =
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight' ||
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'Home' ||
        event.key === 'End'
          ? resolveNextTabValue(tabs, focusedValue, event.key)
          : undefined;

      if (!nextValue) {
        return;
      }

      event.preventDefault();
      const nextTab = tabs.find((tab) => tab.value === nextValue);
      nextTab?.focus();
      setActiveValue(nextValue);
    });
  }, [bindKeydown, focusedValue, setActiveValue, tabs]);

  return (
    <Box
      style={{
        flexDirection: 'row',
      }}
      testID={testID}
    >
      {children}
    </Box>
  );
}
