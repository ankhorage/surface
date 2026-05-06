import type { SurfaceTheme } from '../../theme/types';
import { type ControlSize, resolveControlSize } from './resolveControlSize';

export function resolveIconSize(theme: SurfaceTheme, size: ControlSize = 'm'): number {
  return resolveControlSize(theme, size).iconSize;
}
