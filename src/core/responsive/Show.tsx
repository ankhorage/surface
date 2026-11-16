import React from 'react';

import { resolveResponsive } from './resolve.js';
import { useResponsiveRuntime } from './ResponsiveProvider.js';
import type { Responsive } from './types.js';

export interface ShowProps {
  when: Responsive<boolean>;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/*** Conditionally renders one responsive subtree or its fallback. */
export function Show({ when, children, fallback = null }: ShowProps) {
  const { breakpoint } = useResponsiveRuntime();
  const visible = resolveResponsive(when, breakpoint) ?? false;
  return <>{visible ? children : fallback}</>;
}
