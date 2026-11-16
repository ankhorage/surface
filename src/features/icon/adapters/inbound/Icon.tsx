import { SURFACE_COLORS } from '../../../../constants/surfaceColor.js';
import { resolveTextColor } from '../../../../internal/resolvers/resolveTextColor.js';
import type { IconProps } from '../../../../types/icon.js';
import type { SurfaceColor } from '../../../../types/surfaceColor.js';
import { useTheme } from '../../../theme/runtime.js';
import { resolveToken } from '../../../theme/utils/resolveToken.js';
import { PortableIcon } from './PortableIcon.js';

/*** Renders a theme-aware font or SVG icon through the portable icon adapter. */
export function Icon(props: IconProps) {
  const { theme } = useTheme();
  const size = props.size ?? 'm';
  const color = props.color ?? 'text';
  const resolvedSize = typeof size === 'number' ? size : resolveToken(theme.spacing, size);
  const resolvedColor =
    typeof color === 'string' && isSurfaceColor(color)
      ? resolveTextColor(theme, 'default', color)
      : resolveToken(theme.colors, color);
  return <PortableIcon {...props} color={resolvedColor} size={resolvedSize} />;
}

/*** Distinguish semantic color roles from raw icon colors and other tokens. */
function isSurfaceColor(value: string): value is SurfaceColor {
  return SURFACE_COLORS.some((role) => role === value);
}
