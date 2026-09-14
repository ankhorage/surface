import type { ViewStyle } from 'react-native';

import { resolveResponsive } from '../core/responsive/resolve';
import type { Breakpoint } from '../core/responsive/types';
import { resolveToken } from '../theme/resolveToken';
import type { SurfaceTheme } from '../theme/types';
import type { BoxStyleProps, ColorValue } from '../types/layout';
import { resolveSpacing } from './resolveSpacing';

/*** Resolves responsive Box style props into one React Native view style. */
export function resolveBoxStyles(
  theme: SurfaceTheme,
  breakpoint: Breakpoint,
  props: BoxStyleProps,
): ViewStyle {
  return {
    elevation: 0,
    padding: resolveSpacing(theme, resolveResponsive(props.p, breakpoint)),
    paddingHorizontal: resolveSpacing(theme, resolveResponsive(props.px, breakpoint)),
    paddingVertical: resolveSpacing(theme, resolveResponsive(props.py, breakpoint)),
    paddingTop: resolveSpacing(theme, resolveResponsive(props.pt, breakpoint)),
    paddingBottom: resolveSpacing(theme, resolveResponsive(props.pb, breakpoint)),
    paddingLeft: resolveSpacing(theme, resolveResponsive(props.pl, breakpoint)),
    paddingRight: resolveSpacing(theme, resolveResponsive(props.pr, breakpoint)),
    margin: resolveSpacing(theme, resolveResponsive(props.m, breakpoint)),
    marginHorizontal: resolveSpacing(theme, resolveResponsive(props.mx, breakpoint)),
    marginVertical: resolveSpacing(theme, resolveResponsive(props.my, breakpoint)),
    marginTop: resolveSpacing(theme, resolveResponsive(props.mt, breakpoint)),
    marginBottom: resolveSpacing(theme, resolveResponsive(props.mb, breakpoint)),
    marginLeft: resolveSpacing(theme, resolveResponsive(props.ml, breakpoint)),
    marginRight: resolveSpacing(theme, resolveResponsive(props.mr, breakpoint)),
    backgroundColor: resolveColor(theme, resolveResponsive(props.bg, breakpoint)),
    borderRadius: resolveRadius(theme, resolveResponsive(props.radius, breakpoint)),
    borderWidth: resolveResponsive(props.borderWidth, breakpoint),
    borderColor: resolveColor(theme, resolveResponsive(props.borderColor, breakpoint)),
    width: resolveDimension(theme, resolveResponsive(props.width, breakpoint)) as ViewStyle['width'],
    height: resolveDimension(theme, resolveResponsive(props.height, breakpoint)) as ViewStyle['height'],
    minWidth: resolveDimension(theme, resolveResponsive(props.minWidth, breakpoint)) as ViewStyle['minWidth'],
    maxWidth: resolveDimension(theme, resolveResponsive(props.maxWidth, breakpoint)) as ViewStyle['maxWidth'],
    minHeight: resolveDimension(theme, resolveResponsive(props.minHeight, breakpoint)) as ViewStyle['minHeight'],
    maxHeight: resolveDimension(theme, resolveResponsive(props.maxHeight, breakpoint)) as ViewStyle['maxHeight'],
    flex: resolveResponsive(props.flex, breakpoint),
    flexGrow: resolveResponsive(props.flexGrow, breakpoint),
    flexShrink: resolveResponsive(props.flexShrink, breakpoint),
    flexBasis: resolveResponsive(props.flexBasis, breakpoint) as ViewStyle['flexBasis'],
    alignSelf: resolveResponsive(props.alignSelf, breakpoint),
    position: resolveResponsive(props.position, breakpoint),
    top: resolveResponsive(props.top, breakpoint),
    bottom: resolveResponsive(props.bottom, breakpoint),
    left: resolveResponsive(props.left, breakpoint),
    right: resolveResponsive(props.right, breakpoint),
    overflow: resolveResponsive(props.overflow, breakpoint),
    zIndex: resolveResponsive(props.zIndex, breakpoint),
    opacity: resolveResponsive(props.opacity, breakpoint),
  };
}

type RadiusValue = number | keyof SurfaceTheme['radii'];

/*** Resolves a Surface radius token or raw number. */
function resolveRadius(theme: SurfaceTheme, value: RadiusValue | undefined): number | undefined {
  if (value === undefined) return undefined;
  if (typeof value === 'number') return value;
  return theme.radii[value];
}

/*** Resolves a Surface color token while preserving arbitrary color strings. */
function resolveColor(theme: SurfaceTheme, value: ColorValue | undefined): string | undefined {
  if (value === undefined) return undefined;
  if (Object.prototype.hasOwnProperty.call(theme.colors, value)) {
    return theme.colors[value];
  }
  return value as string;
}

/*** Resolves spacing-token dimensions while preserving raw dimension strings. */
function resolveDimension(
  theme: SurfaceTheme,
  value: number | string | undefined,
): number | string | undefined {
  if (value === undefined || typeof value === 'number') return value;
  return resolveToken(theme.spacing, value);
}
