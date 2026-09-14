import React from 'react';
import { View } from 'react-native';

import {
  type Breakpoint,
  resolveResponsive,
  type Responsive,
  useResponsiveRuntime,
} from '../core/responsive';
import { Box, type BoxProps } from '../features/layout/public';
import { useTheme } from '../theme/ThemeContext';
import type { SpaceValue } from '../types/layout';
import { resolveSpacing } from '../utils/resolveSpacing';

type SlotMap = Record<string, React.ReactNode>;
type TemplateMap = Partial<Record<Breakpoint, string[][]>>;
type ColumnsMap = Partial<Record<Breakpoint, number[]>>;

export interface TemplateProps extends Omit<BoxProps, 'children'> {
  slots: SlotMap;
  templates: TemplateMap;
  columns?: ColumnsMap;
  gap?: Responsive<SpaceValue>;
  rowGap?: Responsive<SpaceValue>;
  colGap?: Responsive<SpaceValue>;
}

function resolveByBreakpointMap<T>(
  map: Partial<Record<Breakpoint, T>> | undefined,
  breakpoint: Breakpoint,
): T | undefined {
  return resolveResponsive(map, breakpoint);
}

export function Template({
  slots,
  templates,
  columns,
  gap = 0,
  rowGap,
  colGap,
  ...props
}: TemplateProps) {
  const { theme } = useTheme();
  const { breakpoint } = useResponsiveRuntime();
  const resolvedTemplate = resolveByBreakpointMap(templates, breakpoint) ?? [];
  const resolvedColumns = resolveByBreakpointMap(columns, breakpoint);
  const defaultGap = resolveResponsive(gap, breakpoint) ?? 0;
  const rowSpacing = Number(
    resolveSpacing(theme, resolveResponsive(rowGap, breakpoint) ?? defaultGap) ?? 0,
  );
  const colSpacing = Number(
    resolveSpacing(theme, resolveResponsive(colGap, breakpoint) ?? defaultGap) ?? 0,
  );

  return (
    <Box {...props}>
      {resolvedTemplate.map((row, rowIndex) => (
        <View
          key={`row-${String(rowIndex)}`}
          style={{ flexDirection: 'row', marginTop: rowIndex === 0 ? 0 : rowSpacing }}
        >
          {row.map((slotId, cellIndex) => (
            <View
              key={`${slotId}-${String(rowIndex)}-${String(cellIndex)}`}
              style={{
                flex: resolvedColumns?.[cellIndex] ?? 1,
                marginLeft: cellIndex === 0 ? 0 : colSpacing,
              }}
            >
              {slots[slotId]}
            </View>
          ))}
        </View>
      ))}
    </Box>
  );
}
