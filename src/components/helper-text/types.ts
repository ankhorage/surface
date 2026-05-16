import type React from 'react';

import type { SurfaceColor, SurfaceEmphasis } from '../../surfaceColor';

export interface HelperTextProps {
  children?: React.ReactNode;
  emphasis?: Extract<SurfaceEmphasis, 'default' | 'muted'>;
  color?: Extract<SurfaceColor, 'danger'>;
  testID?: string;
}
