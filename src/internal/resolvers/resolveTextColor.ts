import type { SurfaceColor, SurfaceEmphasis } from '../../surfaceColor';
import type { SurfaceTheme } from '../../theme/types';
import { resolveSurfaceColor } from './resolveSurfaceColor';

export function resolveTextColor(
  theme: SurfaceTheme,
  emphasis: SurfaceEmphasis = 'default',
  color?: SurfaceColor,
): string {
  if (color) {
    return resolveSurfaceColor(theme, color).base;
  }

  switch (emphasis) {
    case 'muted':
      return theme.semantics.content.muted;
    case 'subtle':
      return theme.semantics.content.subtle;
    case 'inverse':
      return theme.semantics.content.inverse;
    default:
      return theme.semantics.content.default;
  }
}
