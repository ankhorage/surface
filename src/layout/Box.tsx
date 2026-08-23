import React from 'react';
import { View, type ViewProps as ReactNativeViewProps } from 'react-native';

import { useResponsiveRuntime } from '../core/responsive';
import { resolvePointerEvents } from '../internal/resolvePointerEvents';
import { useTheme } from '../theme/ThemeContext';
import { type BoxStyleProps, resolveBoxStyles } from './helpers';

export interface BoxProps extends BoxStyleProps {
  accessibilityLabel?: ReactNativeViewProps['accessibilityLabel'];
  accessibilityRole?: ReactNativeViewProps['accessibilityRole'];
  accessibilityState?: ReactNativeViewProps['accessibilityState'];
  accessible?: ReactNativeViewProps['accessible'];
  children?: React.ReactNode;
  pointerEvents?: ReactNativeViewProps['pointerEvents'];
  testID?: string;
}

export function Box({
  accessible,
  accessibilityLabel,
  accessibilityRole,
  accessibilityState,
  children,
  pointerEvents,
  style,
  testID,
  ...props
}: BoxProps) {
  const { theme } = useTheme();
  const { breakpoint } = useResponsiveRuntime();
  const resolved = resolveBoxStyles(theme, breakpoint, props);
  const resolvedPointerEvents = pointerEvents ? resolvePointerEvents(pointerEvents) : null;

  return (
    <View
      {...resolvedPointerEvents?.props}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState}
      testID={testID}
      style={[resolved, resolvedPointerEvents?.style, style]}
    >
      {children}
    </View>
  );
}
