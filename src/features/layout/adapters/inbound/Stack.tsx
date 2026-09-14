import type React from 'react';

import { resolveResponsive, useResponsiveRuntime } from '../../../../core/responsive';
import { useTheme } from '../../../../theme/ThemeContext';
import type { StackProps } from '../../../../types/layout';
import { resolveSpacing } from '../../../../utils/resolveSpacing';
import { Box } from './Box';

/*** Stacks authored children directly along a responsive flex direction. */
export function Stack({
  children,
  direction = 'column',
  gap = 0,
  align,
  justify,
  wrap,
  ...props
}: StackProps) {
  const { theme } = useTheme();
  const { breakpoint } = useResponsiveRuntime();
  const activeDirection = resolveResponsive(direction, breakpoint) ?? 'column';
  const activeGap = resolveSpacing(theme, resolveResponsive(gap, breakpoint)) ?? 0;
  const activeAlign = resolveResponsive(align, breakpoint);
  const activeJustify = resolveResponsive(justify, breakpoint);
  const activeWrap = resolveResponsive(wrap, breakpoint);

  return (
    <Box
      {...props}
      style={[
        {
          flexDirection: activeDirection,
          gap: activeGap,
          alignItems: activeAlign,
          justifyContent: activeJustify,
          flexWrap: activeWrap,
        },
        props.style,
      ]}
    >
      {children}
    </Box>
  );
}
