import type React from 'react';
import type { AccessibilityRole, AccessibilityState } from 'react-native';

import type { IconProps } from '../../primitives/icon';

export type NavigationItemIcon = Pick<IconProps, 'name' | 'provider'>;

export interface NavigationItemSpec {
  id: string;
  label: React.ReactNode;
  icon?: NavigationItemIcon;
  badge?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onPress?: (() => void) | undefined;
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  accessibilityState?: AccessibilityState;
  testID?: string;
}

export interface NavigationItemProps {
  item: NavigationItemSpec;
  compact?: boolean;
  testID?: string;
}

export interface NavigationListProps {
  items: readonly NavigationItemSpec[];
  orientation?: 'vertical' | 'horizontal';
  compact?: boolean;
  testID?: string;
}

export interface TabBarProps {
  items: readonly NavigationItemSpec[];
  compact?: boolean;
  testID?: string;
}

export interface TabBarItemProps {
  item: NavigationItemSpec;
  compact?: boolean;
  testID?: string;
}

export interface DrawerNavigationProps {
  items: readonly NavigationItemSpec[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
  compact?: boolean;
  testID?: string;
}

export interface DrawerNavigationItemProps {
  item: NavigationItemSpec;
  compact?: boolean;
  testID?: string;
}
