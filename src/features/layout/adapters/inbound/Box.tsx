import React from 'react';
import { View } from 'react-native';

import { useResponsiveRuntime } from '../../../../core/responsive';
import { resolvePointerEvents } from '../../../../internal/resolvePointerEvents';
import { useTheme } from '../../../../theme/ThemeContext';
import type { BoxProps } from '../../../../types/layout';
import { resolveBoxStyles } from '../../../../utils/resolveBoxStyles';

/*** Renders the responsive foundational layout box. */
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
