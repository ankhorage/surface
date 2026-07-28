import React from 'react';

import { Stack } from '../../layout';
import { NavigationItem } from './NavigationItem';
import type { NavigationListProps } from './types';

export function NavigationList({
  items,
  orientation = 'vertical',
  compact = false,
  testID,
  interactionPolicy,
}: NavigationListProps) {
  return (
    <Stack
      direction={orientation === 'horizontal' ? 'row' : 'column'}
      gap={compact ? 'xs' : 's'}
      testID={testID}
    >
      {items.map((item) => (
        <NavigationItem
          compact={compact}
          interactionPolicy={interactionPolicy}
          item={item}
          key={item.id}
          testID={testID}
        />
      ))}
    </Stack>
  );
}
