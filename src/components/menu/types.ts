import type React from 'react';

import type { InteractionPolicy } from '../../primitives/button-base';

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
  interactionPolicy?: InteractionPolicy;
  testID?: string;
}
