import type React from 'react';

import { resolveResponsive, type Responsive, useResponsiveRuntime } from '../core/responsive';
import { useTheme } from '../theme/ThemeContext';
import { Box, type BoxProps } from './Box';
import { resolveSpacing, type SpaceValue } from './helpers';

export interface StackProps extends Omit<BoxProps, 'children'> {
  children?: React.ReactNode;
  direction?: Responsive<'row' | 'column'>;
  gap?: Responsive<SpaceValue>;
  align?: Responsive<'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'>;
  justify?: Responsive<
    'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  >;
  wrap?: Responsive<'nowrap' | 'wrap'>;
}

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
