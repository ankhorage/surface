import type React from 'react';
import type { TextStyle } from 'react-native';

import type { SurfaceColor, SurfaceEmphasis } from './surfaceColor';
import type { FontWeight, SurfaceTheme } from './theme';

export type TextVariant = 'body' | 'bodySmall' | 'caption' | 'label' | 'mono';
export type TextWeight = keyof SurfaceTheme['typography']['weights'] | FontWeight;

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
  style?: TextStyle;
}
