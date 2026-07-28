import type React from 'react';

import type { InteractionPolicy } from '../../interactionPolicy';

export interface TabsProps {
  children?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: ((value: string) => void) | undefined;
  testID?: string;
}

export interface TabListProps {
  children?: React.ReactNode;
  testID?: string;
}

export interface TabProps {
  value: string;
  children?: React.ReactNode;
  disabled?: boolean;
  interactionPolicy?: InteractionPolicy;
  testID?: string;
}

export interface TabPanelProps {
  value: string;
  children?: React.ReactNode;
  testID?: string;
}
