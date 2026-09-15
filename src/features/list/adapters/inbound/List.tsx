import React from 'react';

import { View } from '../../../layout/public';
import type { ListProps } from '../../../../types/list';

/*** Groups list items under one neutral Surface list boundary. */
export function List({ children, testID }: ListProps) {
  return <View testID={testID}>{children}</View>;
}
