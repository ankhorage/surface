import React from 'react';
import { View, type ViewStyle } from 'react-native';

import { resolveResponsive, useResponsiveRuntime } from '../../../../core/responsive';
import { useTheme } from '../../../../theme/ThemeContext';
import type { GridProps } from '../../../../types/layout';
import { resolveSpacing } from '../../../../utils/resolveSpacing';
import { Box } from './Box';

/*** Lays out children in a responsive wrapping grid. */
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
  const rowSpacing = Number(
    resolveSpacing(theme, resolveResponsive(rowGap, breakpoint) ?? defaultGap) ?? 0,
  );
  const colSpacing = Number(
    resolveSpacing(theme, resolveResponsive(colGap, breakpoint) ?? defaultGap) ?? 0,
  );
  const activeMinItemWidth = resolveResponsive(minItemWidth, breakpoint);
  const basisPercent: `${number}%` = `${100 / activeCols}%`;

  return (
    <Box {...props}>
      <View style={resolveGridStyle(rowSpacing, colSpacing)}>
        {React.Children.toArray(children).map((node, index) => (
          <View
            key={String(index)}
            style={resolveGridItemStyle(activeMinItemWidth, basisPercent, rowSpacing, colSpacing)}
          >
            {node}
          </View>
        ))}
      </View>
    </Box>
  );
}

/*** Resolves the wrapping Grid container style. */
function resolveGridStyle(rowSpacing: number, colSpacing: number): ViewStyle {
  return {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: -colSpacing / 2,
    marginRight: -colSpacing / 2,
    marginTop: -rowSpacing / 2,
  };
}

/*** Resolves a fixed-column or minimum-width grid item style. */
function resolveGridItemStyle(
  minItemWidth: number | undefined,
  basisPercent: `${number}%`,
  rowSpacing: number,
  colSpacing: number,
): ViewStyle {
  const sizing =
    minItemWidth === undefined
      ? { width: basisPercent, flexBasis: basisPercent }
      : { minWidth: minItemWidth, flexBasis: minItemWidth, flexGrow: 1 };
  return {
    ...sizing,
    paddingBottom: rowSpacing / 2,
    paddingLeft: colSpacing / 2,
    paddingRight: colSpacing / 2,
    paddingTop: rowSpacing / 2,
  };
}
