import type React from 'react';

export interface LabelProps {
  children?: React.ReactNode;
  required?: boolean;
  tone?: 'default' | 'muted' | 'danger';
  testID?: string;
}
