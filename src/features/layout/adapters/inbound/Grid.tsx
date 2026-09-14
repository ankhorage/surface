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
  const activeRowGap = resolveResponsive(rowGap, breakpoint) ?? defaultGap;
  const activeColGap = resolveResponsive(colGap, breakpoint) ?? defaultGap;
  const rowSpacing = Number(resolveSpacing(theme, activeRowGap) ?? 0);
  const colSpacing = Number(resolveSpacing(theme, activeColGap) ?? 0);
  const activeMinItemWidth = resolveResponsive(minItemWidth, breakpoint);
  const basisPercent: `${number}%` = `${100 / activeCols}%`;
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
        {nodes.map((node, index) => (
          <View
            key={String(index)}
            style={{
              paddingTop: rowSpacing / 2,
              paddingBottom: rowSpacing / 2,
              paddingLeft: colSpacing / 2,
              paddingRight: colSpacing / 2,
              ...resolveGridItemStyle(activeMinItemWidth, basisPercent),
            }}
          >
            {node}
          </View>
        ))}
      </View>
    </Box>
  );
}

/*** Resolves a fixed-column or minimum-width grid item style. */
function resolveGridItemStyle(
  minItemWidth: number | undefined,
  basisPercent: `${number}%`,
): ViewStyle {
  return minItemWidth === undefined
    ? { width: basisPercent, flexBasis: basisPercent }
    : { minWidth: minItemWidth, flexBasis: minItemWidth, flexGrow: 1 };
}
