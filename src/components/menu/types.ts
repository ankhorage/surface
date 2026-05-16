import type React from 'react';

export interface MenuAction {
  id: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  activate?: VoidFunction;
}

export interface MenuProps {
  trigger?: React.ReactNode;
  actions: readonly MenuAction[];
  dismiss?: VoidFunction;
  closeOnSelect?: boolean;
  testID?: string;
}
