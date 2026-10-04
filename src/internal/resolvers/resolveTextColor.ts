import type { SurfaceColor, SurfaceEmphasis } from '../../types/surfaceColor';
import type { SurfaceTheme } from '../../types/theme';
import { resolveSurfaceColor } from './resolveSurfaceColor';

export function resolveTextColor(
  theme: SurfaceTheme,
  emphasis: SurfaceEmphasis = 'default',
  color?: SurfaceColor,
): string {
  if (color) {
    if (emphasis === 'inverse') {
      return resolveSurfaceColor(theme, color).onSolidText;
    }

    const role = resolveSurfaceColor(theme, color);
    return theme.inverted ? role.onSurfaceText : role.base;
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
