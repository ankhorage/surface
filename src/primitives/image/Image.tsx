import React from 'react';
import { Image as RNImage } from 'react-native';

import { useTheme } from '../../theme/ThemeContext';
import {
  getSourceKey,
  normalizeSource,
  resolveAccessibilityLabel,
  resolveAlt,
  resolveImageStyle,
  resolveRenderedSource,
  resolveResizeMode,
} from './resolveImageProps';
import type { ImageProps } from './types';

export function Image({
  source,
  fallbackSource,
  alt,
  accessibilityLabel,
  width,
  height,
  aspectRatio,
  fit,
  resizeMode,
  radius,
  style,
  testID,
  onError,
}: ImageProps) {
  const { theme } = useTheme();
  const [showFallback, setShowFallback] = React.useState(false);
  const primaryKey = React.useMemo(() => getSourceKey(source), [source]);

  React.useEffect(() => {
    setShowFallback(false);
  }, [primaryKey]);

  const normalizedPrimary = normalizeSource(source);
  const normalizedFallback = normalizeSource(fallbackSource);
  const resolvedSource = resolveRenderedSource(normalizedPrimary, normalizedFallback, showFallback);

  if (!resolvedSource) return null;

  const resolvedResizeMode = resolveResizeMode(fit, resizeMode);
  const resolvedAccessibilityLabel = resolveAccessibilityLabel(alt, accessibilityLabel);
  const resolvedAlt = resolveAlt(alt, accessibilityLabel);
  const resolvedStyle = resolveImageStyle(theme, { width, height, aspectRatio, radius });

  return (
    <RNImage
      accessibilityLabel={resolvedAccessibilityLabel}
      accessibilityRole="image"
      alt={resolvedAlt}
      onError={(event) => {
        onError?.(event);

        if (!showFallback && normalizedFallback) {
          setShowFallback(true);
        }
      }}
      resizeMode={resolvedResizeMode}
      source={resolvedSource}
      style={[resolvedStyle, style]}
      testID={testID}
    />
  );
}
