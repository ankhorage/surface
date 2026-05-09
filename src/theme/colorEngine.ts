import type {
  ColorSwatch,
  GeneratedThemeModeColors,
  GeneratedThemeSwatches,
  HexColor,
  SemanticColorReferenceMap,
  SemanticColorToken,
} from '@ankhorage/color-theory';
import {
  createDefaultSemanticStatusSwatches,
  generateThemeModeColors,
  getReadableForeground,
  parseHexColorOrThrow,
} from '@ankhorage/color-theory';
import type { ThemeConfig } from '@ankhorage/contracts';

import type {
  ActionSemantics,
  BorderSemantics,
  ContentSemantics,
  NeutralSemantics,
  RoleSemantics,
  SurfaceSemantics,
  ThemeSemantics,
} from './types';

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

function buildNeutralSemantics(neutralSwatch: ColorSwatch, isDark: boolean): NeutralSemantics {
  if (isDark) {
    return {
      bg: neutralSwatch[950],
      bgSubtle: neutralSwatch[900],
      surface: neutralSwatch[900],
      surfaceHover: neutralSwatch[800],
      surfaceActive: neutralSwatch[700],
      border: neutralSwatch[800],
      borderStrong: neutralSwatch[600],
      divider: neutralSwatch[800],
      text: neutralSwatch[50],
      textMuted: neutralSwatch[200],
      textSubtle: neutralSwatch[300],
    };
  }
  return {
    bg: neutralSwatch[50],
    bgSubtle: neutralSwatch[100],
    surface: neutralSwatch[100],
    surfaceHover: neutralSwatch[200],
    surfaceActive: neutralSwatch[300],
    border: neutralSwatch[200],
    borderStrong: neutralSwatch[300],
    divider: neutralSwatch[200],
    text: neutralSwatch[900],
    textMuted: neutralSwatch[700],
    textSubtle: neutralSwatch[600],
  };
}

function buildRoleSemantics(swatch: ColorSwatch, isDark: boolean): RoleSemantics {
  const base = swatch[500];
  const { foreground: onSolidText } = getReadableForeground(base);

  if (isDark) {
    return {
      base,
      hover: swatch[400],
      strong: swatch[300],
      softBg: swatch[900],
      softHover: swatch[800],
      softActive: swatch[700],
      outline: swatch[500],
      onSolidText,
    };
  }

  return {
    base,
    hover: swatch[600],
    strong: swatch[700],
    softBg: swatch[100],
    softHover: swatch[200],
    softActive: swatch[300],
    outline: swatch[400],
    onSolidText,
  };
}

export function generatePalette(
  config: ThemeConfig,
  mode: 'light' | 'dark' = 'light',
): {
  colors: Record<string, string>;
  swatches: GeneratedThemeSwatches;
  semantics: ThemeSemantics;
} {
  const modeConfig = mode === 'dark' ? config.dark : config.light;
  const isDark = mode === 'dark';

  // Throws deterministically on invalid primary color
  parseHexColorOrThrow(modeConfig.primaryColor);

  const generated = generateThemeModeColors(modeConfig);

  const { swatches } = generated;
  const neutralSwatch = swatches.neutral;

  const neutral = buildNeutralSemantics(neutralSwatch, isDark);
  const brand = buildRoleSemantics(swatches.primary, isDark);

  // Fallback to primary swatch for missing ordinal roles
  const secondarySwatch = swatches.secondary ?? swatches.primary;
  const tertiarySwatch = swatches.tertiary ?? swatches.primary;
  const quaternarySwatch = swatches.quaternary ?? swatches.primary;

  const semanticStatusSwatches = createDefaultSemanticStatusSwatches().swatches;

  const danger = buildRoleSemantics(semanticStatusSwatches.danger, isDark);
  const success = buildRoleSemantics(semanticStatusSwatches.success, isDark);
  const warning = buildRoleSemantics(semanticStatusSwatches.warning, isDark);

  const surfaceSemantics: SurfaceSemantics = {
    default: neutral.surface,
    subtle: neutral.bgSubtle,
    raised: neutral.surface,
  };

  const content: ContentSemantics = {
    default: neutral.text,
    muted: neutral.textMuted,
    subtle: neutral.textSubtle,
    inverse: brand.onSolidText,
  };

  const border: BorderSemantics = {
    default: neutral.border,
    strong: neutral.borderStrong,
    focus: brand.outline,
  };

  const action: ActionSemantics = {
    primary: brand,
    neutral: buildRoleSemantics(neutralSwatch, isDark),
    danger,
  };

  const colors: Record<string, string> = {
    primary: brand.base,
    secondary: secondarySwatch[500],
    accent: tertiarySwatch[500],
    highlight: quaternarySwatch[500],
    background: neutral.bg,
    surface: neutral.surface,
    text: neutral.text,
    textSecondary: neutral.textMuted,
    border: neutral.border,
    error: danger.base,
    success: success.base,
    warning: warning.base,
  };

  return {
    colors,
    swatches,
    semantics: {
      neutral,
      brand,
      secondary: buildRoleSemantics(secondarySwatch, isDark),
      accent: buildRoleSemantics(tertiarySwatch, isDark),
      highlight: buildRoleSemantics(quaternarySwatch, isDark),
      danger,
      success,
      warning,
      surface: surfaceSemantics,
      content,
      border,
      action,
    },
  };
}
