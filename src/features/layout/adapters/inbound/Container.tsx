import React from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';

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
    <Box {...props} width="100%" style={[styles.fullWidth, props.style]}>
      <View style={resolveContainerStyle(activeMaxWidth, activePx)}>{children}</View>
    </Box>
  );
}

/*** Resolves centered responsive Container dimensions and padding. */
function resolveContainerStyle(
  maxWidth: number | undefined,
  horizontalPadding: number | undefined,
): ViewStyle {
  return {
    alignSelf: 'center',
    maxWidth,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    width: '100%',
  };
}

const styles = StyleSheet.create({ fullWidth: { width: '100%' } });
