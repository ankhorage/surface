import React from 'react';
import { View, type ViewStyle } from 'react-native';

import { resolveResponsive, type Responsive, useResponsiveRuntime } from '../core/responsive';
import { useTheme } from '../theme/ThemeContext';
import { Box, type BoxProps } from './Box';
import { resolveSpacing, type SpaceValue } from './helpers';

export interface GridProps extends Omit<BoxProps, 'children'> {
  children?: React.ReactNode;
  cols: Responsive<number>;
  gap?: Responsive<SpaceValue>;
  rowGap?: Responsive<SpaceValue>;
  colGap?: Responsive<SpaceValue>;
  minItemWidth?: Responsive<number>;
}

export function Grid({
  children,
  cols,
  gap = 0,
  rowGap,
  colGap,
  minItemWidth,
  ...props
}: GridProps) {
  const { theme } = useTheme();
  const { breakpoint } = useResponsiveRuntime();

  const activeCols = Math.max(1, Math.floor(resolveResponsive(cols, breakpoint) ?? 1));
  const defaultGap = resolveResponsive(gap, breakpoint) ?? 0;
  const activeRowGap = resolveResponsive(rowGap, breakpoint) ?? defaultGap;
  const activeColGap = resolveResponsive(colGap, breakpoint) ?? defaultGap;
  const rowSpacing = Number(resolveSpacing(theme, activeRowGap) ?? 0);
  const colSpacing = Number(resolveSpacing(theme, activeColGap) ?? 0);
  const activeMinItemWidth = resolveResponsive(minItemWidth, breakpoint);

  const basisPercent = `${100 / activeCols}%`;
  const nodes = React.Children.toArray(children);

  return (
    <Box {...props}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: -rowSpacing / 2,
          marginLeft: -colSpacing / 2,
          marginRight: -colSpacing / 2,
        }}
      >
        {nodes.map((node, index) => {
          const itemStyle: ViewStyle =
            activeMinItemWidth !== undefined
              ? {
                  minWidth: activeMinItemWidth,
                  flexBasis: activeMinItemWidth,
                  flexGrow: 1,
                }
              : {
                  width: basisPercent as ViewStyle['width'],
                  flexBasis: basisPercent as ViewStyle['flexBasis'],
                };

          return (
            <View
              key={String(index)}
              style={{
                paddingTop: rowSpacing / 2,
                paddingBottom: rowSpacing / 2,
                paddingLeft: colSpacing / 2,
                paddingRight: colSpacing / 2,
                ...itemStyle,
              }}
            >
              {node}
            </View>
          );
        })}
      </View>
    </Box>
  );
}
