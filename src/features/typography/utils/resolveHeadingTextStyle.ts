import type { TextStyle } from 'react-native';

import { resolveTextColor } from '../../../internal/resolvers/resolveTextColor.js';
import { resolveTextStyles } from '../../../internal/resolvers/resolveTextStyles.js';
import type { SurfaceColor, SurfaceEmphasis } from '../../../types/surfaceColor.js';
import type { SurfaceTheme } from '../../../types/theme.js';
import type { HeadingLevel, HeadingProps } from '../../../types/typography.js';

/*** Resolves theme-driven typography styles for one heading level. */
export function resolveHeadingTextStyle(
  theme: SurfaceTheme,
  level: HeadingLevel,
  align?: HeadingProps['align'],
  emphasis: SurfaceEmphasis = 'default',
  color?: SurfaceColor,
): TextStyle {
  return {
    ...resolveTextStyles(theme, { align, level }),
    color: resolveTextColor(theme, emphasis, color),
  };
}
