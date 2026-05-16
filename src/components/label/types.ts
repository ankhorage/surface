import type React from 'react';

import type { SurfaceColor, SurfaceEmphasis } from '../../surfaceColor';

export interface LabelProps {
  children?: React.ReactNode;
  required?: boolean;
  emphasis?: Extract<SurfaceEmphasis, 'default' | 'muted'>;
  color?: Extract<SurfaceColor, 'error'>;
  testID?: string;
}
