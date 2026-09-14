import type { SurfaceTheme } from '../theme/types';
import type { SpaceValue } from '../types/layout';

/*** Resolves a numeric spacing value or a Surface spacing token. */
export function resolveSpacing(
  theme: SurfaceTheme,
  value: SpaceValue | undefined,
): number | undefined {
  if (value === undefined) return undefined;
  if (typeof value === 'number') return value;
  return theme.spacing[value];
}
