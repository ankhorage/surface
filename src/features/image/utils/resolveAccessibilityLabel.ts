import type { ImageProps } from '../../../types/image.js';

/*** Resolves the accessible image label from explicit label or alt text. */
export function resolveAccessibilityLabel(
  alt: ImageProps['alt'],
  accessibilityLabel: ImageProps['accessibilityLabel'],
): string | undefined {
  return accessibilityLabel ?? alt;
}
