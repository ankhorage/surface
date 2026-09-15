import React from 'react';
import { ScrollView as ReactNativeScrollView } from 'react-native';

import { useResponsiveRuntime } from '../../../../core/responsive';
import { useTheme } from '../../../../theme/ThemeContext';
import type { ScrollViewProps } from '../../../../types/layout';
import { resolveViewStyles } from '../../../../utils/resolveViewStyles';

/*** Renders the token-aware responsive Surface adapter for React Native ScrollView. */
export function ScrollView({
  children,
  contentContainerStyle,
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  gap,
  rowGap,
  columnGap,
  bg,
  radius,
  borderWidth,
  borderColor,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  direction,
  align,
  justify,
  wrap,
  alignSelf,
  position,
  top,
  bottom,
  left,
  right,
  overflow,
  zIndex,
  opacity,
  style,
  ...scrollProps
}: ScrollViewProps) {
  const { theme } = useTheme();
  const { breakpoint } = useResponsiveRuntime();
  const resolved = resolveViewStyles(theme, breakpoint, {
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    gap,
    rowGap,
    columnGap,
    bg,
    radius,
    borderWidth,
    borderColor,
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    direction,
    align,
    justify,
    wrap,
    alignSelf,
    position,
    top,
    bottom,
    left,
    right,
    overflow,
    zIndex,
    opacity,
  });

  return (
    <ReactNativeScrollView
      {...scrollProps}
      contentContainerStyle={contentContainerStyle}
      style={[resolved, style]}
    >
      {children}
    </ReactNativeScrollView>
  );
}
