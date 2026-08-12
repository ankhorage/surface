import type { ThemeGlobalTokenOverrides } from '@ankhorage/contracts';

import { DEFAULT_TOKENS } from './defaultTokens';
import { resolveHeadingTokenOverrides } from './resolveHeadingTokenOverrides';
import { resolveNumericTokenOverrides } from './resolveNumericTokenOverrides';
import { resolveWeightTokenOverrides } from './resolveWeightTokenOverrides';
import type { ThemeTokens } from './types';

type GlobalThemeTokens = Omit<ThemeTokens, 'colors' | 'swatches' | 'semantics'>;

export function resolveGlobalTokens(overrides?: ThemeGlobalTokenOverrides): GlobalThemeTokens {
  validateZeroTokens(overrides);
  const typography = overrides?.typography;
  return {
    spacing: {
      ...DEFAULT_TOKENS.spacing,
      ...resolveNumericTokenOverrides('spacing', overrides?.spacing),
    },
    radii: {
      ...DEFAULT_TOKENS.radii,
      ...resolveNumericTokenOverrides('radii', overrides?.radii),
    },
    typography: {
      headings: resolveHeadingTokenOverrides(DEFAULT_TOKENS.typography.headings, typography?.headings),
      sizes: {
        ...DEFAULT_TOKENS.typography.sizes,
        ...resolveNumericTokenOverrides('typography.sizes', typography?.sizes, true),
      },
      weights: {
        ...DEFAULT_TOKENS.typography.weights,
        ...resolveWeightTokenOverrides(typography?.weights),
      },
      fonts: {
        normal: { ...DEFAULT_TOKENS.typography.fonts.normal },
        italic: { ...DEFAULT_TOKENS.typography.fonts.italic },
      },
    },
    shadows: {
      ...DEFAULT_TOKENS.shadows,
      ...resolveNumericTokenOverrides('shadows', overrides?.shadows),
    },
  };
}

function validateZeroTokens(overrides: ThemeGlobalTokenOverrides | undefined): void {
  if (overrides?.spacing?.none !== undefined && overrides.spacing.none !== 0) {
    throw new RangeError('Theme token spacing.none must remain 0.');
  }
  if (overrides?.radii?.none !== undefined && overrides.radii.none !== 0) {
    throw new RangeError('Theme token radii.none must remain 0.');
  }
}
