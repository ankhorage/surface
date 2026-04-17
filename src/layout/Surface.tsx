import React from 'react';
import type { ViewStyle } from 'react-native';

import { useTheme } from '../theme/ThemeContext';
import { Box, type BoxProps } from './Box';

export type SurfaceVariant = 'default' | 'subtle' | 'raised' | 'outline';

export interface SurfaceProps extends BoxProps {
  variant?: SurfaceVariant;
}

function resolveSurfaceVariantStyles(
  variant: SurfaceVariant,
  borderColor: string,
  backgroundColor: string,
): ViewStyle {
  switch (variant) {
    case 'subtle':
      return {
        backgroundColor,
        borderColor: 'transparent',
        borderWidth: 0,
      };
    case 'raised':
      return {
        backgroundColor,
        borderColor: 'transparent',
        borderWidth: 0,
        elevation: 2,
        shadowColor: '#000000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
      };
    case 'outline':
      return {
        backgroundColor: 'transparent',
        borderColor,
        borderWidth: 1,
      };
    case 'default':
    default:
      return {
        backgroundColor,
        borderColor,
        borderWidth: 1,
      };
  }
}

export function Surface({ variant = 'default', radius = 'm', style, ...props }: SurfaceProps) {
  const { theme } = useTheme();

  const backgroundColor =
    variant === 'subtle' ? theme.semantics.surface.subtle : theme.semantics.surface.default;
  const borderColor = theme.semantics.border.default;

  return (
    <Box
      {...props}
      radius={radius}
      style={[resolveSurfaceVariantStyles(variant, borderColor, backgroundColor), style]}
    />
  );
}
