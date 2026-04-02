import React from 'react';
import {
  Platform,
  type StyleProp,
  View,
  type ViewProps as ReactNativeViewProps,
  type ViewStyle,
} from 'react-native';

import { useResponsiveRuntime } from '../core/responsive';
import { useTheme } from '../theme/ThemeContext';
import { type BoxStyleProps, resolveBoxStyles } from './helpers';

export interface BoxProps extends BoxStyleProps {
  children?: React.ReactNode;
  pointerEvents?: ReactNativeViewProps['pointerEvents'];
  testID?: string;
}

function resolvePointerEventsStyle(
  pointerEvents: ReactNativeViewProps['pointerEvents'] | undefined,
): StyleProp<ViewStyle> | null {
  if (Platform.OS !== 'web' || pointerEvents === undefined) return null;

  if (pointerEvents === 'auto' || pointerEvents === 'none') {
    return { pointerEvents };
  }

  return null;
}

function resolveViewPointerEvents(
  pointerEvents: ReactNativeViewProps['pointerEvents'] | undefined,
): ReactNativeViewProps['pointerEvents'] | undefined {
  if (pointerEvents === undefined) return undefined;
  if (Platform.OS !== 'web') return pointerEvents;

  if (pointerEvents === 'box-none' || pointerEvents === 'box-only') {
    return pointerEvents;
  }

  return undefined;
}

export function Box({ children, pointerEvents, style, testID, ...props }: BoxProps) {
  const { theme } = useTheme();
  const { breakpoint } = useResponsiveRuntime();
  const resolved = resolveBoxStyles(theme, breakpoint, props);
  const pointerEventsStyle = resolvePointerEventsStyle(pointerEvents);
  const viewPointerEvents = resolveViewPointerEvents(pointerEvents);

  return (
    <View
      pointerEvents={viewPointerEvents}
      testID={testID}
      style={[resolved, pointerEventsStyle, style as StyleProp<ViewStyle>]}
    >
      {children}
    </View>
  );
}
