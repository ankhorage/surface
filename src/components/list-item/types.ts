import type React from 'react';

export interface ListItemProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  onPress?: (() => void) | undefined;
  disabled?: boolean;
  testID?: string;
}
