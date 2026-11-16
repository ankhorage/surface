import React from 'react';

import type { TabPanelProps } from '../../../../types/tabs.js';
import { View } from '../../../layout/public.js';
import { useTheme } from '../../../theme/runtime.js';
import { useTabsContext } from '../../composition/useTabsContext.js';

const TAB_PANEL_ROLE = 'tabpanel' as React.ComponentProps<typeof View>['accessibilityRole'];

/*** Renders the active content panel with the supplied View layout and tab accessibility linkage. */
export function TabPanel({ value, children, testID, style, ...layoutProps }: TabPanelProps) {
  const { theme } = useTheme();
  const { activeValue, getPanelId, getTabId, variant } = useTabsContext();

  if (activeValue !== value) return null;

  return (
    <View
      {...layoutProps}
      accessibilityLabelledBy={getTabId(value)}
      accessibilityRole={TAB_PANEL_ROLE}
      nativeID={getPanelId(value)}
      style={[
        style,
        variant === 'attached' ? { backgroundColor: theme.semantics.surface.subtle } : undefined,
      ]}
      testID={testID}
    >
      {children}
    </View>
  );
}
