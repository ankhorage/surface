import React from 'react';
import { View as ReactNativeView } from 'react-native';

import { useResponsiveRuntime } from '../../../../core/responsive';
import { resolvePointerEvents } from '../../../../internal/resolvePointerEvents';
import type { ViewProps } from '../../../../types/layout';
import { resolveViewStyles } from '../../../../utils/resolveViewStyles';
import { useTheme } from '../../../theme/runtime';

/*** Renders the token-aware responsive Surface adapter for React Native View. */
export function View({
  accessible,
  accessibilityLabel,
  accessibilityRole,
  accessibilityState,
  children,
  pointerEvents,
  style,
  testID,
  ...props
}: ViewProps) {
  const { theme } = useTheme();
  const { breakpoint } = useResponsiveRuntime();
  const resolved = resolveViewStyles(theme, breakpoint, props);
  const resolvedPointerEvents = pointerEvents ? resolvePointerEvents(pointerEvents) : null;

  return (
    <ReactNativeView
      {...resolvedPointerEvents?.props}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState}
      testID={testID}
      style={[resolved, resolvedPointerEvents?.style, style]}
    >
      {children}
    </ReactNativeView>
  );
}
