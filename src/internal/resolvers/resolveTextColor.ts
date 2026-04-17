import { resolveToken } from '../../theme/resolveToken';
import type { AnkhTheme } from '../../theme/types';

export type TextTone =
  | 'default'
  | 'muted'
  | 'subtle'
  | 'inverse'
  | 'danger'
  | 'success'
  | 'warning';
export type TextColorValue = keyof AnkhTheme['colors'] | string;

export function resolveTextColor(
  theme: AnkhTheme,
  tone: TextTone = 'default',
  color?: TextColorValue,
): string {
  if (color) {
    return resolveToken(theme.colors, color);
  }

  switch (tone) {
    case 'muted':
      return theme.semantics.content.muted;
    case 'subtle':
      return theme.semantics.content.subtle;
    case 'inverse':
      return theme.semantics.content.inverse;
    case 'danger':
      return theme.semantics.danger.base;
    case 'success':
      return theme.semantics.success.base;
    case 'warning':
      return theme.semantics.warning.base;
    case 'default':
    default:
      return theme.semantics.content.default;
  }
}
