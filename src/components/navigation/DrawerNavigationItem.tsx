import React from 'react';

import { NavigationItem } from './NavigationItem';
import type { DrawerNavigationItemProps } from './types';

export function DrawerNavigationItem({ item, compact = false, testID }: DrawerNavigationItemProps) {
  return (
    <NavigationItem
      compact={compact}
      item={{
        ...item,
        accessibilityRole: item.accessibilityRole ?? 'button',
      }}
      testID={testID}
    />
  );
}
