import React from 'react';

import type { TabsProps } from '../../../../types/tabs';
import { Box } from '../../../layout/public';
import { TabsContext } from '../../composition/TabsContext';
import { useTabsController } from '../../composition/useTabsController';

/*** Provides accessible tab selection state to TabList, Tab, and TabPanel children. */
export function Tabs({ children, ...props }: TabsProps) {
  const contextValue = useTabsController(props);

  return (
    <TabsContext value={contextValue}>
      <Box testID={props.testID}>{children}</Box>
    </TabsContext>
  );
}
