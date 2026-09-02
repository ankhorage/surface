import { generatePalette } from './colorEngine';
import { resolveGlobalTokens } from './resolveGlobalTokens';
import type { FontWeight, SurfaceTheme, ThemeConfig } from './types';

export { DEFAULT_TOKENS } from './defaultTokens';

export const DEFAULT_CONFIG: ThemeConfig = {
  id: 'default',
  name: 'Default',
  light: { primaryColor: '#3B82F6', harmony: 'monochromatic' },
  dark: { primaryColor: '#3B82F6', harmony: 'monochromatic' },
};

const ACTIVE_FONT_WEIGHTS: readonly FontWeight[] = [
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
];

export function createTheme(
  config: ThemeConfig = DEFAULT_CONFIG,
  mode: 'light' | 'dark' = 'light',
  activeFontId?: string | null,
): SurfaceTheme {
  const { colors, swatches, semantics, colorDiagnostics } = generatePalette(config, mode);
  const theme: SurfaceTheme = {
    ...resolveGlobalTokens(config.tokens),
    colors,
    swatches,
    semantics,
    colorDiagnostics,
    config,
  };

  applyActiveFont(theme, activeFontId);
  return theme;
}

function applyActiveFont(theme: SurfaceTheme, activeFontId: string | null | undefined): void {
  if (!activeFontId) return;

  const familyName = toPascalCase(activeFontId);
  for (const weight of ACTIVE_FONT_WEIGHTS) {
    theme.typography.fonts.normal[weight] = `${familyName}_${weight}Regular`;
    theme.typography.fonts.italic[weight] = `${familyName}_${weight}Italic`;
  }
}

function toPascalCase(value: string): string {
  return value
    .split(/[- ]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}
