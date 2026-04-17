import type { AnkhTheme } from '../../theme/types';
import { resolveControlSize, type ControlSize } from './resolveControlSize';

export function resolveIconSize(theme: AnkhTheme, size: ControlSize = 'm'): number {
  return resolveControlSize(theme, size).iconSize;
}
