import React from 'react';

import { NavigationItem } from './NavigationItem';
import type { DrawerNavigationItemProps } from './types';

export function DrawerNavigationItem({
  item,
  compact = false,
  testID,
  interactionPolicy,
}: DrawerNavigationItemProps) {
  return (
    <NavigationItem
      compact={compact}
      interactionPolicy={interactionPolicy}
      item={{
        ...item,
        accessibilityRole: item.accessibilityRole ?? 'button',
      }}
      testID={testID}
    />
  );
}
