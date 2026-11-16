import React from 'react';
import { View as ReactNativeView } from 'react-native';

import { useResponsiveRuntime } from '../../../../core/responsive/index.js';
import { resolvePointerEvents } from '../../../../internal/resolvePointerEvents.js';
import type { ViewProps } from '../../../../types/layout.js';
import { resolveViewStyles } from '../../../../utils/resolveViewStyles.js';
import { useTheme } from '../../../theme/runtime.js';

/*** Renders the token-aware responsive Surface adapter for React Native View. */
export function View({
  accessible,
  accessibilityLabel,
  accessibilityLabelledBy,
  accessibilityRole,
  accessibilityState,
  children,
  nativeID,
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
      accessibilityLabelledBy={accessibilityLabelledBy}
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState}
      nativeID={nativeID}
      testID={testID}
      style={[resolved, resolvedPointerEvents?.style, style]}
    >
      {children}
    </ReactNativeView>
  );
}
