import React from 'react';

import type { ListProps } from '../../../../types/list.js';
import { View } from '../../../layout/public.js';

/*** Groups list items under one neutral Surface list boundary. */
export function List({ children, testID }: ListProps) {
  return <View testID={testID}>{children}</View>;
}
