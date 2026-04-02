import React from 'react';
import { type StyleProp, type TextStyle } from 'react-native';

import { resolveToken } from '../../theme/resolveToken';
import { useTheme } from '../../theme/ThemeContext';
import type { AnkhTheme } from '../../theme/types';
import { resolveExpoIconComponent } from './resolveExpoIconComponent';

export type IconProvider = string;

export interface IconProps {
  name: string;
  provider?: IconProvider;
  size?: keyof AnkhTheme['spacing'] | number;
  color?: keyof AnkhTheme['colors'] | string;
  style?: StyleProp<TextStyle>;
  testID?: string;
}

export function Icon({
  name,
  provider = 'Ionicons',
  size = 'm',
  color = 'text',
  style,
  testID,
}: IconProps) {
  const { theme } = useTheme();
  const IconComponent = resolveExpoIconComponent(provider);
  const resolvedSize = typeof size === 'number' ? size : resolveToken(theme.spacing, size);
  const resolvedColor = resolveToken(theme.colors, color);

  return React.createElement(IconComponent, {
    color: resolvedColor,
    name,
    size: resolvedSize,
    style,
    testID,
  });
}
