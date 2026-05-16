import type React from 'react';

export type MenuActionIntent = 'default' | 'danger';

export interface MenuAction {
  id: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  intent?: MenuActionIntent;
  disabled?: boolean;
  selected?: boolean;
  activate?: () => void;
}

export interface MenuProps {
  trigger?: React.ReactNode;
  actions: readonly MenuAction[];
  dismiss?: () => void;
  closeOnSelect?: boolean;
  testID?: string;
}
