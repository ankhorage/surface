import { SURFACE_COLORS } from '../../../../constants/surfaceColor';
import { resolveTextColor } from '../../../../internal/resolvers/resolveTextColor';
import type { IconProps } from '../../../../types/icon';
import type { SurfaceColor } from '../../../../types/surfaceColor';
import { useTheme } from '../../../theme/runtime';
import { resolveToken } from '../../../theme/utils/resolveToken';
import { PortableIcon } from './PortableIcon.web';

/*** Renders browser icons through the existing browser-safe portable adapter. */
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
