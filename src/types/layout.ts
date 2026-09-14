import type React from 'react';
import type { StyleProp, ViewProps as ReactNativeViewProps, ViewStyle } from 'react-native';

import type { Responsive } from '../core/responsive';
import type { SurfaceTheme } from '../theme/types';

type SpaceToken = keyof SurfaceTheme['spacing'];
type RadiusToken = keyof SurfaceTheme['radii'];
type ColorToken = keyof SurfaceTheme['colors'];
type RadiusValue = number | RadiusToken;

export type SpaceValue = number | SpaceToken;
export type ColorValue = string | ColorToken;

export interface BoxStyleProps {
  p?: Responsive<SpaceValue>;
  px?: Responsive<SpaceValue>;
  py?: Responsive<SpaceValue>;
  pt?: Responsive<SpaceValue>;
  pb?: Responsive<SpaceValue>;
  pl?: Responsive<SpaceValue>;
  pr?: Responsive<SpaceValue>;
  m?: Responsive<SpaceValue>;
  mx?: Responsive<SpaceValue>;
  my?: Responsive<SpaceValue>;
  mt?: Responsive<SpaceValue>;
  mb?: Responsive<SpaceValue>;
  ml?: Responsive<SpaceValue>;
  mr?: Responsive<SpaceValue>;
  bg?: Responsive<ColorValue>;
  radius?: Responsive<RadiusValue>;
  borderWidth?: Responsive<number>;
  borderColor?: Responsive<ColorValue>;
  width?: Responsive<number | string>;
  height?: Responsive<number | string>;
  minWidth?: Responsive<number | string>;
  maxWidth?: Responsive<number | string>;
  minHeight?: Responsive<number | string>;
  maxHeight?: Responsive<number | string>;
  flex?: Responsive<number>;
  flexGrow?: Responsive<number>;
  flexShrink?: Responsive<number>;
  flexBasis?: Responsive<number | string>;
  alignSelf?: Responsive<ViewStyle['alignSelf']>;
  position?: Responsive<ViewStyle['position']>;
  top?: Responsive<number>;
  bottom?: Responsive<number>;
  left?: Responsive<number>;
  right?: Responsive<number>;
  overflow?: Responsive<ViewStyle['overflow']>;
  zIndex?: Responsive<number>;
  opacity?: Responsive<number>;
  style?: StyleProp<ViewStyle>;
}

export interface BoxProps extends BoxStyleProps {
  accessibilityLabel?: ReactNativeViewProps['accessibilityLabel'];
  accessibilityRole?: ReactNativeViewProps['accessibilityRole'];
  accessibilityState?: ReactNativeViewProps['accessibilityState'];
  accessible?: ReactNativeViewProps['accessible'];
  children?: React.ReactNode;
  pointerEvents?: ReactNativeViewProps['pointerEvents'];
  testID?: string;
}

export interface ContainerProps extends Omit<BoxProps, 'children'> {
  children?: React.ReactNode;
  maxWidth?: Responsive<number>;
  px?: Responsive<number | keyof SurfaceTheme['spacing']>;
}

export interface DividerProps extends Omit<BoxProps, 'bg' | 'height' | 'width'> {
  orientation?: 'horizontal' | 'vertical';
  color?: ColorValue;
  thickness?: number;
}

export interface GridProps extends Omit<BoxProps, 'children'> {
  children?: React.ReactNode;
  cols: Responsive<number>;
  gap?: Responsive<SpaceValue>;
  rowGap?: Responsive<SpaceValue>;
  colGap?: Responsive<SpaceValue>;
  minItemWidth?: Responsive<number>;
}

export interface StackProps extends Omit<BoxProps, 'children'> {
  children?: React.ReactNode;
  direction?: Responsive<'row' | 'column'>;
  gap?: Responsive<SpaceValue>;
  align?: Responsive<'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'>;
  justify?: Responsive<
    'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  >;
  wrap?: Responsive<'nowrap' | 'wrap'>;
}
