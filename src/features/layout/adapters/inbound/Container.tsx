import React from 'react';
import { View } from 'react-native';

import { resolveResponsive, useResponsiveRuntime } from '../../../../core/responsive';
import { useTheme } from '../../../../theme/ThemeContext';
import type { ContainerProps } from '../../../../types/layout';
import { resolveSpacing } from '../../../../utils/resolveSpacing';
import { Box } from './Box';

/*** Centers responsive content inside a configurable maximum width. */
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
