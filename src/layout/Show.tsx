import React from 'react';

import { resolveResponsive, type Responsive, useResponsiveRuntime } from '../core/responsive';

export interface ShowProps {
  when: Responsive<boolean>;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function Show({ when, children, fallback = null }: ShowProps) {
  const { breakpoint } = useResponsiveRuntime();
  const visible = resolveResponsive(when, breakpoint) ?? false;
  return <>{visible ? children : fallback}</>;
}
