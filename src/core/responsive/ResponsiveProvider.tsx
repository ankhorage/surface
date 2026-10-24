import React, { createContext, use, useMemo } from 'react';

import { getBreakpointFromWidth } from './getBreakpointFromWidth';
import type { ResponsiveRuntime } from './types';
import { useResponsiveWidth } from './useResponsiveWidth';

const ResponsiveContext = createContext<ResponsiveRuntime | null>(null);

export function ResponsiveProvider({ children }: { children: React.ReactNode }) {
  const width = useResponsiveWidth();

  const value = useMemo<ResponsiveRuntime>(
    () => ({
      breakpoint: getBreakpointFromWidth(width),
      width,
    }),
    [width],
  );

  return <ResponsiveContext value={value}>{children}</ResponsiveContext>;
}

export function useResponsiveRuntime(): ResponsiveRuntime {
  const runtime = use(ResponsiveContext);

  if (!runtime) {
    throw new Error('useResponsiveRuntime must be used within a ResponsiveProvider');
  }

  return runtime;
}
