import type React from 'react';

import type { InteractionPolicy } from '../interactionPolicy';

export type PopoverMenuActionIntent = 'default' | 'danger';

export interface PopoverMenuAction {
  id: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  intent?: PopoverMenuActionIntent;
  disabled?: boolean;
  selected?: boolean;
  activate?: () => void;
}

export interface PopoverMenuProps {
  trigger?: React.ReactNode;
  actions: readonly PopoverMenuAction[];
  dismiss?: () => void;
  closeOnSelect?: boolean;
  interactionPolicy?: InteractionPolicy;
  testID?: string;
}
