import type React from 'react';

import type { SurfaceProps, SurfaceVariant } from '../../layout';

export interface CardProps extends Omit<SurfaceProps, 'children' | 'variant'> {
  children?: React.ReactNode;
  variant?: SurfaceVariant;
  onPress?: (() => void) | undefined;
  disabled?: boolean;
  testID?: string;
}
