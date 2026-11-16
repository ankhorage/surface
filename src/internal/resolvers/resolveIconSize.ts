import type { ControlSize } from '../../types/control.js';
import type { SurfaceTheme } from '../../types/theme.js';
import { resolveControlSize } from './resolveControlSize.js';

export function resolveIconSize(theme: SurfaceTheme, size: ControlSize = 'm'): number {
  return resolveControlSize(theme, size).iconSize;
}
