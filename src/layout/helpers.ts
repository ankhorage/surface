import type { StyleProp, ViewStyle } from 'react-native';

import { resolveResponsive } from '../core/responsive/resolve';
import type { Breakpoint, Responsive } from '../core/responsive/types';
import { resolveToken } from '../theme/resolveToken';
import type { AnkhTheme } from '../theme/types';

type SpaceToken = keyof AnkhTheme['spacing'];
type RadiusToken = keyof AnkhTheme['radii'];
type ColorToken = keyof AnkhTheme['colors'];

export type SpaceValue = number | SpaceToken;
export type RadiusValue = number | RadiusToken;
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

export function resolveSpacing(
  theme: AnkhTheme,
  value: SpaceValue | undefined,
): number | undefined {
  if (value === undefined) return undefined;
  if (typeof value === 'number') return value;
  return theme.spacing[value as SpaceToken];
}

export function resolveRadius(
  theme: AnkhTheme,
  value: RadiusValue | undefined,
): number | undefined {
  if (value === undefined) return undefined;
  if (typeof value === 'number') return value;
  return theme.radii[value];
}

export function resolveColor(theme: AnkhTheme, value: ColorValue | undefined): string | undefined {
  if (value === undefined) return undefined;
  if (Object.prototype.hasOwnProperty.call(theme.colors, value)) {
    return theme.colors[value as ColorToken];
  }
  return value as string;
}

export function resolveDimension(
  theme: AnkhTheme,
  value: number | string | undefined,
): number | string | undefined {
  if (value === undefined || typeof value === 'number') return value;
  return resolveToken(theme.spacing, value);
}

function assignIfDefined<T, K extends keyof T>(target: T, key: K, value: T[K] | undefined) {
  if (value !== undefined) target[key] = value;
}

export function resolveBoxStyles(
  theme: AnkhTheme,
  breakpoint: Breakpoint,
  props: BoxStyleProps,
): ViewStyle {
  const styles: ViewStyle = {
    elevation: 0,
  };

  const p = resolveSpacing(theme, resolveResponsive(props.p, breakpoint));
  const px = resolveSpacing(theme, resolveResponsive(props.px, breakpoint));
  const py = resolveSpacing(theme, resolveResponsive(props.py, breakpoint));
  const pt = resolveSpacing(theme, resolveResponsive(props.pt, breakpoint));
  const pb = resolveSpacing(theme, resolveResponsive(props.pb, breakpoint));
  const pl = resolveSpacing(theme, resolveResponsive(props.pl, breakpoint));
  const pr = resolveSpacing(theme, resolveResponsive(props.pr, breakpoint));
  const m = resolveSpacing(theme, resolveResponsive(props.m, breakpoint));
  const mx = resolveSpacing(theme, resolveResponsive(props.mx, breakpoint));
  const my = resolveSpacing(theme, resolveResponsive(props.my, breakpoint));
  const mt = resolveSpacing(theme, resolveResponsive(props.mt, breakpoint));
  const mb = resolveSpacing(theme, resolveResponsive(props.mb, breakpoint));
  const ml = resolveSpacing(theme, resolveResponsive(props.ml, breakpoint));
  const mr = resolveSpacing(theme, resolveResponsive(props.mr, breakpoint));

  assignIfDefined(styles, 'padding', p as ViewStyle['padding']);
  assignIfDefined(styles, 'paddingHorizontal', px as ViewStyle['paddingHorizontal']);
  assignIfDefined(styles, 'paddingVertical', py as ViewStyle['paddingVertical']);
  assignIfDefined(styles, 'paddingTop', pt as ViewStyle['paddingTop']);
  assignIfDefined(styles, 'paddingBottom', pb as ViewStyle['paddingBottom']);
  assignIfDefined(styles, 'paddingLeft', pl as ViewStyle['paddingLeft']);
  assignIfDefined(styles, 'paddingRight', pr as ViewStyle['paddingRight']);
  assignIfDefined(styles, 'margin', m as ViewStyle['margin']);
  assignIfDefined(styles, 'marginHorizontal', mx as ViewStyle['marginHorizontal']);
  assignIfDefined(styles, 'marginVertical', my as ViewStyle['marginVertical']);
  assignIfDefined(styles, 'marginTop', mt as ViewStyle['marginTop']);
  assignIfDefined(styles, 'marginBottom', mb as ViewStyle['marginBottom']);
  assignIfDefined(styles, 'marginLeft', ml as ViewStyle['marginLeft']);
  assignIfDefined(styles, 'marginRight', mr as ViewStyle['marginRight']);

  assignIfDefined(
    styles,
    'backgroundColor',
    resolveColor(theme, resolveResponsive(props.bg, breakpoint)),
  );
  assignIfDefined(
    styles,
    'borderRadius',
    resolveRadius(theme, resolveResponsive(props.radius, breakpoint)) as ViewStyle['borderRadius'],
  );
  assignIfDefined(styles, 'borderWidth', resolveResponsive(props.borderWidth, breakpoint));
  assignIfDefined(
    styles,
    'borderColor',
    resolveColor(theme, resolveResponsive(props.borderColor, breakpoint)),
  );

  assignIfDefined(
    styles,
    'width',
    resolveDimension(theme, resolveResponsive(props.width, breakpoint)) as ViewStyle['width'],
  );
  assignIfDefined(
    styles,
    'height',
    resolveDimension(theme, resolveResponsive(props.height, breakpoint)) as ViewStyle['height'],
  );
  assignIfDefined(
    styles,
    'minWidth',
    resolveDimension(theme, resolveResponsive(props.minWidth, breakpoint)) as ViewStyle['minWidth'],
  );
  assignIfDefined(
    styles,
    'maxWidth',
    resolveDimension(theme, resolveResponsive(props.maxWidth, breakpoint)) as ViewStyle['maxWidth'],
  );
  assignIfDefined(
    styles,
    'minHeight',
    resolveDimension(
      theme,
      resolveResponsive(props.minHeight, breakpoint),
    ) as ViewStyle['minHeight'],
  );
  assignIfDefined(
    styles,
    'maxHeight',
    resolveDimension(
      theme,
      resolveResponsive(props.maxHeight, breakpoint),
    ) as ViewStyle['maxHeight'],
  );

  assignIfDefined(styles, 'flex', resolveResponsive(props.flex, breakpoint));
  assignIfDefined(styles, 'flexGrow', resolveResponsive(props.flexGrow, breakpoint));
  assignIfDefined(styles, 'flexShrink', resolveResponsive(props.flexShrink, breakpoint));
  assignIfDefined(
    styles,
    'flexBasis',
    resolveResponsive(props.flexBasis, breakpoint) as ViewStyle['flexBasis'],
  );
  assignIfDefined(styles, 'alignSelf', resolveResponsive(props.alignSelf, breakpoint));

  assignIfDefined(styles, 'position', resolveResponsive(props.position, breakpoint));
  assignIfDefined(styles, 'top', resolveResponsive(props.top, breakpoint));
  assignIfDefined(styles, 'bottom', resolveResponsive(props.bottom, breakpoint));
  assignIfDefined(styles, 'left', resolveResponsive(props.left, breakpoint));
  assignIfDefined(styles, 'right', resolveResponsive(props.right, breakpoint));
  assignIfDefined(styles, 'overflow', resolveResponsive(props.overflow, breakpoint));
  assignIfDefined(styles, 'zIndex', resolveResponsive(props.zIndex, breakpoint));
  assignIfDefined(styles, 'opacity', resolveResponsive(props.opacity, breakpoint));

  return styles;
}
