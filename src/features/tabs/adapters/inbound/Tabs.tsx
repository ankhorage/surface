import React from 'react';

import type { TabsProps } from '../../../../types/tabs';
import { View } from '../../../layout/public';
import { TabsContext } from '../../composition/TabsContext';
import { useTabsController } from '../../composition/useTabsController';

/*** Provides accessible tab selection state to TabList, Tab, and TabPanel children. */
export function Tabs({ children, ...props }: TabsProps) {
  const contextValue = useTabsController(props);

  return (
    <TabsContext value={contextValue}>
      <View testID={props.testID}>{children}</View>
    </TabsContext>
  );
}
