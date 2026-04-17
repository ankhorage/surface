import React from 'react';

export interface TabRegistration {
  disabled: boolean;
  focus: () => void;
  value: string;
}

export interface TabsContextValue {
  activeValue: string | undefined;
  focusedValue: string | undefined;
  registerTab: (tab: TabRegistration) => void;
  setActiveValue: (value: string) => void;
  setFocusedValue: (value: string | undefined) => void;
  tabs: TabRegistration[];
  unregisterTab: (value: string) => void;
}

export const TabsContext = React.createContext<TabsContextValue | null>(null);

export function useTabsContext(): TabsContextValue {
  const value = React.useContext(TabsContext);

  if (!value) {
    throw new Error('Tabs components must be used within <Tabs>.');
  }

  return value;
}
