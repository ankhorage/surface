import type React from 'react';

export interface HelperTextProps {
  children?: React.ReactNode;
  tone?: 'default' | 'muted' | 'danger';
  testID?: string;
}
