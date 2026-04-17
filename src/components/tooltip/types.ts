import type React from 'react';

export interface TooltipProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  delay?: number;
  placement?: 'top' | 'bottom';
  testID?: string;
}
