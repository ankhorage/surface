import React from 'react';
import {
  RefreshControl,
  ScrollView as ReactNativeScrollView,
  type ScrollViewProps as ReactNativeScrollViewProps,
} from 'react-native';

import { useResponsiveRuntime } from '../../../../core/responsive';
import type { ScrollViewProps } from '../../../../types/layout';
import { resolveViewStyles } from '../../../../utils/resolveViewStyles';
import { useTheme } from '../../../theme/runtime';

/*** Renders the token-aware responsive Surface adapter for React Native ScrollView. */
export function ScrollView(props: ScrollViewProps) {
  const { theme } = useTheme();
  const { breakpoint } = useResponsiveRuntime();
  const spacing = splitSpacingProps(props);
  const visual = splitVisualProps(spacing.rest);
  const dimensions = splitDimensionProps(visual.rest);
  const layout = splitLayoutProps(dimensions.rest);
  const {
    children,
    contentContainerStyle,
    style,
    refreshing,
    onRefresh,
    refreshControl: nativeRefreshControl,
    ...scrollProps
  } = layout.rest;
  const resolved = resolveViewStyles(theme, breakpoint, {
    ...spacing.styleProps,
    ...visual.styleProps,
    ...dimensions.styleProps,
    ...layout.styleProps,
  });

  return (
    <ReactNativeScrollView
      {...scrollProps}
      contentContainerStyle={contentContainerStyle}
      refreshControl={resolveRefreshControl({ nativeRefreshControl, onRefresh, refreshing })}
      style={[resolved, style]}
    >
      {children}
    </ReactNativeScrollView>
  );
}

/*** Creates the standard controlled React Native refresh control only when Surface refresh props are supplied. */
function resolveRefreshControl({
  nativeRefreshControl,
  onRefresh,
  refreshing,
}: Pick<ScrollViewProps, 'onRefresh' | 'refreshing'> & {
  nativeRefreshControl: ReactNativeScrollViewProps['refreshControl'];
}) {
  if (onRefresh === undefined && refreshing === undefined) return nativeRefreshControl;

  return <RefreshControl onRefresh={onRefresh} refreshing={refreshing ?? false} />;
}

/*** Splits spacing-aware Surface props from native ScrollView props. */
function splitSpacingProps(props: ScrollViewProps) {
  const { p, px, py, pt, pb, pl, pr, m, mx, my, mt, mb, ml, mr, gap, rowGap, columnGap, ...rest } =
    props;
  return {
    rest,
    styleProps: { p, px, py, pt, pb, pl, pr, m, mx, my, mt, mb, ml, mr, gap, rowGap, columnGap },
  };
}

/*** Splits token-aware visual Surface props from native ScrollView props. */
function splitVisualProps(props: ReturnType<typeof splitSpacingProps>['rest']) {
  const { bg, radius, borderWidth, borderColor, ...rest } = props;
  return { rest, styleProps: { bg, radius, borderWidth, borderColor } };
}

/*** Splits responsive dimension Surface props from native ScrollView props. */
function splitDimensionProps(props: ReturnType<typeof splitVisualProps>['rest']) {
  const { width, height, minWidth, maxWidth, minHeight, maxHeight, ...rest } = props;
  return { rest, styleProps: { width, height, minWidth, maxWidth, minHeight, maxHeight } };
}

/*** Splits responsive flex and positioning Surface props from native ScrollView props. */
function splitLayoutProps(props: ReturnType<typeof splitDimensionProps>['rest']) {
  const {
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
    ...rest
  } = props;
  return {
    rest,
    styleProps: {
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
    },
  };
}
