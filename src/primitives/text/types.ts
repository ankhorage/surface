import type React from 'react';
import type { TextStyle } from 'react-native';

import type { TextVariant, TextWeight } from '../../internal/resolvers/resolveTextStyles';
import type { SurfaceColor, SurfaceEmphasis } from '../../surfaceColor';

export interface TextProps {
  children?: React.ReactNode;
  i18nKey?: string;
  variant?: TextVariant;
  emphasis?: SurfaceEmphasis;
  color?: SurfaceColor;
  align?: TextStyle['textAlign'];
  weight?: TextWeight;
  italic?: boolean;
  numberOfLines?: number;
  testID?: string;
}
