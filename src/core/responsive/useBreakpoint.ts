import { getBreakpointFromWidth } from './getBreakpointFromWidth.js';
import type { Breakpoint } from './types.js';
import { useResponsiveWidth } from './useResponsiveWidth.js';

/*** Returns the hydration-stable responsive breakpoint without requiring a provider. */
export function useBreakpoint(): Breakpoint {
  const width = useResponsiveWidth();
  return getBreakpointFromWidth(width);
}
