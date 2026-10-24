import { getBreakpointFromWidth } from './getBreakpointFromWidth';
import type { Breakpoint } from './types';
import { useResponsiveWidth } from './useResponsiveWidth';

/*** Returns the hydration-stable responsive breakpoint without requiring a provider. */
export function useBreakpoint(): Breakpoint {
  const width = useResponsiveWidth();
  return getBreakpointFromWidth(width);
}
