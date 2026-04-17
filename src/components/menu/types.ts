import type React from 'react';

export interface MenuItem {
  id: string;
  label: React.ReactNode;
  disabled?: boolean;
  onPress?: (() => void) | undefined;
}

export interface MenuProps {
  trigger?: React.ReactNode;
  items: MenuItem[];
  onDismiss?: (() => void) | undefined;
  closeOnSelect?: boolean;
  testID?: string;
}
