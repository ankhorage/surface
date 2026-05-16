import type React from 'react';

export interface MenuAction {
  id: string;
  title: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
}

export interface MenuProps {
  trigger?: React.ReactNode;
  actions: readonly MenuAction[];
  closeOnSelect?: boolean;
  testID?: string;
}
