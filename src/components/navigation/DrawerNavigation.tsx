import React from 'react';

import { Stack } from '../../layout';
import { DrawerNavigationItem } from './DrawerNavigationItem';
import type { DrawerNavigationProps } from './types';

export function DrawerNavigation({
  items,
  header,
  footer,
  compact = false,
  testID,
  interactionPolicy,
}: DrawerNavigationProps) {
  return (
    <Stack gap={compact ? 's' : 'm'} testID={testID}>
      {header}
      <Stack gap={compact ? 'xs' : 's'}>
        {items.map((item) => (
          <DrawerNavigationItem
            compact={compact}
            interactionPolicy={interactionPolicy}
            item={item}
            key={item.id}
            testID={testID}
          />
        ))}
      </Stack>
      {footer}
    </Stack>
  );
}
