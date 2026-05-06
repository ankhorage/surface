import { generatePalette } from './colorEngine';
import type { FontWeight, SurfaceTheme, ThemeConfig, ThemeTokens } from './types';

export const DEFAULT_TOKENS: Omit<ThemeTokens, 'colors' | 'swatches' | 'semantics'> = {
  spacing: {
    none: 0,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },
  radii: {
    none: 0,
    s: 4,
    m: 8,
    l: 16,
    full: 9999,
  },
  typography: {
    headings: {
      1: { size: 32, lineHeight: 40, weight: 'bold' },
      2: { size: 24, lineHeight: 32, weight: 'bold' },
      3: { size: 20, lineHeight: 28, weight: 'bold' },
      4: { size: 18, lineHeight: 24, weight: 'semiBold' },
      5: { size: 16, lineHeight: 22, weight: 'semiBold' },
      6: { size: 14, lineHeight: 20, weight: 'semiBold' },
    },
    sizes: {
      xs: 12,
      s: 14,
      m: 16,
      l: 18,
      xl: 20,
      xxl: 24,
      '3xl': 30,
      h1: 32,
      h2: 24,
      h3: 20,
      h4: 18,
      h5: 16,
      h6: 14,
    },
    weights: {
      thin: '100',
      extraLight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
      black: '900',
    },
    fonts: {
      normal: {} as Record<FontWeight, string | undefined>,
      italic: {} as Record<FontWeight, string | undefined>,
    },
  },
  shadows: {
    soft: 2,
    medium: 4,
    hard: 8,
  },
};

export const DEFAULT_CONFIG: ThemeConfig = {
  id: 'default',
  name: 'Default',
  light: {
    primaryColor: '#3B82F6',
    harmony: 'monochromatic',
  },
  dark: {
    primaryColor: '#3B82F6',
    harmony: 'monochromatic',
  },
};

/**
 * Normalizes font family name to PascalCase for consistent key generation
 * matches GoogleFontsPlugin logic.
 */
function toPascalCase(str: string) {
  return str
    .split(/[- ]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

export function createTheme(
  config: ThemeConfig = DEFAULT_CONFIG,
  mode: 'light' | 'dark' = 'light',
  activeFontId?: string | null,
): SurfaceTheme {
  const { colors, swatches, semantics } = generatePalette(config, mode);

  const theme = {
    ...DEFAULT_TOKENS,
    colors: colors as SurfaceTheme['colors'],
    swatches,
    semantics,
    config,
  };

  if (activeFontId) {
    const familyName = toPascalCase(activeFontId);
    const weights: FontWeight[] = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

    weights.forEach((w) => {
      // Convention from GoogleFonts plugin: Family_WeightRegular
      theme.typography.fonts.normal[w] = `${familyName}_${w}Regular`;
      theme.typography.fonts.italic[w] = `${familyName}_${w}Italic`;
    });
  }

  return theme;
}
