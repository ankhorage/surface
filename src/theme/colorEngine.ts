import type {
  GeneratedThemeModeColors,
  GeneratedThemeSwatches,
  HexColor,
  SemanticColorReferenceMap,
  SemanticColorToken,
  ThemeColorMode,
} from '@ankhorage/color-theory';
import {
  DARK_SEMANTIC_COLOR_REFERENCES,
  generateThemeModeColors,
  LIGHT_SEMANTIC_COLOR_REFERENCES,
  parseHexColorOrThrow,
} from '@ankhorage/color-theory';
import type { ThemeConfig } from '@ankhorage/contracts';

import { resolveSurfaceSemanticModel } from './resolveSurfaceSemanticModel';
import type { SurfaceColorDiagnostics, ThemeSemantics, ThemeTokens } from './types';

/**
 * Surface semantic resolver: maps color-theory SemanticColorToken references
 * to hex values from the generated swatches.
 */
export type SurfaceSemanticColors = Record<SemanticColorToken, HexColor>;

export function resolveSemanticColors(
  generated: GeneratedThemeModeColors,
  references: SemanticColorReferenceMap,
): SurfaceSemanticColors {
  return Object.fromEntries(
    Object.entries(references).map(([token, ref]) => {
      const swatch = generated.swatches[ref.role];
      if (!swatch) {
        throw new Error(`Missing swatch for role '${ref.role}' (token: '${token}')`);
      }
      return [token, swatch[ref.step]];
    }),
  ) as SurfaceSemanticColors;
}

export function generatePalette(
  config: ThemeConfig,
  mode: ThemeColorMode = 'light',
): {
  colors: ThemeTokens['colors'];
  swatches: GeneratedThemeSwatches;
  semantics: ThemeSemantics;
  colorDiagnostics: SurfaceColorDiagnostics;
} {
  const modeConfig = mode === 'dark' ? config.dark : config.light;
  const isDark = mode === 'dark';

  parseHexColorOrThrow(modeConfig.primaryColor);

  const generated = generateThemeModeColors(modeConfig);
  const { swatches } = generated;
  const references = isDark ? DARK_SEMANTIC_COLOR_REFERENCES : LIGHT_SEMANTIC_COLOR_REFERENCES;
  const resolved = resolveSemanticColors(generated, references);
  const { semantics, colorDiagnostics } = resolveSurfaceSemanticModel({
    generated,
    mode,
    references,
    resolved,
  });
  const { border, content, error, info, neutral, success, surface, warning } = semantics;

  const colors: ThemeTokens['colors'] = {
    primary: swatches.primary[500],
    secondary: (swatches.secondary ?? swatches.primary)[500],
    accent: (swatches.tertiary ?? swatches.primary)[500],
    highlight: (swatches.quaternary ?? swatches.primary)[500],
    tertiary: (swatches.tertiary ?? swatches.primary)[500],
    quaternary: (swatches.quaternary ?? swatches.primary)[500],
    background: neutral.bg,
    surface: surface.default,
    text: content.default,
    textSecondary: content.muted,
    border: border.default,
    error: error.base,
    success: success.base,
    warning: warning.base,
    info: info.base,
  };

  return {
    colors,
    swatches,
    semantics,
    colorDiagnostics,
  };
}
