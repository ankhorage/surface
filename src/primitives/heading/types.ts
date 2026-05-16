import type React from 'react';

import type { SurfaceColor, SurfaceEmphasis } from '../../surfaceColor';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  text?: string;
  children?: React.ReactNode;
  level?: HeadingLevel;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?: SurfaceColor;
  emphasis?: SurfaceEmphasis;
  numberOfLines?: number;
  i18nKey?: string;
  testID?: string;
}
