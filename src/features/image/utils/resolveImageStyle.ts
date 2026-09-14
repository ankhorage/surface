import type { ImageStyle } from 'react-native';

import { resolveToken } from '../../../theme/resolveToken';
import type { SurfaceTheme } from '../../../theme/types';
import type { ImageProps } from '../../../types/image';

/*** Resolves token-aware dimensions and radius for a Surface image. */
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
