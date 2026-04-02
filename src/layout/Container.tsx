import React from 'react';
import { View } from 'react-native';

import { resolveResponsive, type Responsive, useResponsiveRuntime } from '../core/responsive';
import { useTheme } from '../theme/ThemeContext';
import type { AnkhTheme } from '../theme/types';
import { Box, type BoxProps } from './Box';
import { resolveSpacing } from './helpers';

export interface ContainerProps extends Omit<BoxProps, 'children'> {
  children?: React.ReactNode;
  maxWidth?: Responsive<number>;
  px?: Responsive<number | keyof AnkhTheme['spacing']>;
}

export function Container({
  children,
  maxWidth = { base: Number.MAX_SAFE_INTEGER, lg: 1120 },
  px = { base: 16, md: 24, lg: 32 },
  ...props
}: ContainerProps) {
  const { theme } = useTheme();
  const { breakpoint } = useResponsiveRuntime();

  const activeMaxWidth = resolveResponsive(maxWidth, breakpoint);
  const activePx = resolveSpacing(theme, resolveResponsive(px, breakpoint));

  return (
    <Box {...props} width="100%" style={[{ width: '100%' }, props.style]}>
      <View
        style={{
          width: '100%',
          maxWidth: activeMaxWidth,
          alignSelf: 'center',
          paddingLeft: activePx,
          paddingRight: activePx,
        }}
      >
        {children}
      </View>
    </Box>
  );
}
