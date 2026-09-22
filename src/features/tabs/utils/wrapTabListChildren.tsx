import React from 'react';

import { View } from '../../layout/public';

/*** Wrap direct tab-list children with equal flex only when fill distribution is enabled. */
export function wrapTabListChildren(children: React.ReactNode, fill: boolean): React.ReactNode {
  if (!fill) return children;
  return React.Children.map(children, (child) => <View flex={1}>{child}</View>);
}
