import type { TextStyle } from 'react-native';

import { resolveTextColor } from '../../internal/resolvers/resolveTextColor';
import { resolveTextStyles } from '../../internal/resolvers/resolveTextStyles';
import type { SurfaceColor, SurfaceEmphasis } from '../../surfaceColor';
import type { SurfaceTheme } from '../../theme/types';
import type { HeadingLevel, HeadingProps } from './types';

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
