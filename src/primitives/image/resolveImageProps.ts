import type { ImageResizeMode, ImageSourcePropType } from 'react-native';
import type { ImageStyle } from 'react-native';

import { resolveToken } from '../../theme/resolveToken';
import type { SurfaceTheme } from '../../theme/types';
import type { ImageProps, SurfaceImageSource } from './types';

export function normalizeSource(
  source: SurfaceImageSource | null | undefined,
): ImageSourcePropType | undefined {
  if (source === null || source === undefined) return undefined;
  if (typeof source === 'string') return { uri: source };
  return source;
}

export function resolveRenderedSource(
  normalizedPrimary: ImageSourcePropType | undefined,
  normalizedFallback: ImageSourcePropType | undefined,
  showFallback: boolean,
): ImageSourcePropType | undefined {
  if (showFallback || !normalizedPrimary) return normalizedFallback;
  return normalizedPrimary;
}

function getUriFromSource(source: ImageSourcePropType): string | undefined {
  if (Array.isArray(source)) {
    const [first] = source;
    return first?.uri;
  }

  if (typeof source === 'number') return undefined;
  return source.uri;
}

export function getSourceKey(source: SurfaceImageSource | null | undefined): string | null {
  if (source === null || source === undefined) return null;
  if (typeof source === 'string') return `uri:${source}`;
  if (typeof source === 'number') return `asset:${source}`;
  if (Array.isArray(source)) {
    const parts = source
      .map((item) => item.uri)
      .filter((value): value is string => typeof value === 'string');
    return `uri-set:${parts.join('|')}`;
  }

  const uri = getUriFromSource(source);
  if (uri) return `uri:${uri}`;

  try {
    return `src:${JSON.stringify(source)}`;
  } catch {
    return 'src:unknown';
  }
}

export function resolveResizeMode(
  fit: ImageProps['fit'],
  resizeMode: ImageProps['resizeMode'],
): ImageResizeMode {
  return fit ?? resizeMode ?? 'cover';
}

export function resolveAccessibilityLabel(
  alt: ImageProps['alt'],
  accessibilityLabel: ImageProps['accessibilityLabel'],
): string | undefined {
  return accessibilityLabel ?? alt;
}

export function resolveAlt(
  alt: ImageProps['alt'],
  accessibilityLabel: ImageProps['accessibilityLabel'],
): string | undefined {
  return alt ?? accessibilityLabel;
}

export function resolveImageStyle(
  theme: SurfaceTheme,
  props: Pick<ImageProps, 'width' | 'height' | 'aspectRatio' | 'radius'>,
): ImageStyle {
  const width = resolveToken(theme.spacing, props.width);
  const height = resolveToken(theme.spacing, props.height);
  const borderRadius = resolveToken(theme.radii, props.radius);

  return {
    width,
    height,
    aspectRatio: props.aspectRatio,
    borderRadius,
    overflow: borderRadius !== undefined ? 'hidden' : undefined,
  };
}
