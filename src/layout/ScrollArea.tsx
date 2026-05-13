import React from 'react';
import {
  ScrollView,
  type ScrollViewProps as ReactNativeScrollViewProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { useResponsiveRuntime } from '../core/responsive';
import { useTheme } from '../theme/ThemeContext';
import { type BoxStyleProps, resolveBoxStyles } from './helpers';

export interface ScrollAreaProps
  extends BoxStyleProps,
    Omit<ReactNativeScrollViewProps, 'children' | 'contentContainerStyle' | 'style'> {
  children?: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export function ScrollArea({
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
}: ScrollAreaProps) {
  const { theme } = useTheme();
  const { breakpoint } = useResponsiveRuntime();
  const resolved = resolveBoxStyles(theme, breakpoint, {
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
    <ScrollView {...scrollProps} contentContainerStyle={contentContainerStyle} style={[resolved, style]}>
      {children}
    </ScrollView>
  );
}
