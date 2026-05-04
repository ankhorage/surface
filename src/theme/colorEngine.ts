import { formatHex, modeOklch, oklch, useMode } from 'culori';

import type {
  ActionSemantics,
  BorderSemantics,
  ColorHarmony,
  ColorScale,
  ColorTone,
  ContentSemantics,
  NeutralSemantics,
  RoleSemantics,
  SurfaceSemantics,
  ThemeConfig,
  ThemeSemantics,
} from './types';

useMode(modeOklch);

interface OklchColor {
  mode: 'oklch';
  l: number;
  c: number;
  h?: number;
}

export const SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

type RolePaletteKind =
  | 'grayscale'
  | 'neutral'
  | 'pastel'
  | 'earth'
  | 'mineral'
  | 'muted'
  | 'jewel'
  | 'fluorescent'
  | 'obsidian'
  | 'vaporwave'
  | 'monochromeAccent';

/**
 * Deterministic Lightness Curves (OKLCH L)
 */
const LIGHTNESS_CURVES = {
  light: [0.98, 0.95, 0.9, 0.82, 0.72, 0.62, 0.52, 0.42, 0.32, 0.22, 0.15],
  dark: [0.12, 0.16, 0.2, 0.26, 0.34, 0.62, 0.7, 0.78, 0.86, 0.92, 0.96],
} as const;

/**
 * Lightness anchors per internal palette kind
 */
const ROLE_PALETTE_LIGHTNESS_ANCHORS: Record<RolePaletteKind, number> = {
  grayscale: 0.62,
  neutral: 0.62,
  pastel: 0.7,
  earth: 0.55,
  mineral: 0.58,
  muted: 0.6,
  jewel: 0.62,
  fluorescent: 0.65,
  obsidian: 0.12,
  vaporwave: 0.7,
  monochromeAccent: 0.62,
};

/**
 * Chroma curve per step to prevent "tinted whites" and "glow"
 * Peak energy at 500, falloff at extremes.
 */
const CHROMA_BY_STEP = [0.1, 0.18, 0.3, 0.45, 0.7, 1.0, 0.92, 0.8, 0.6, 0.4, 0.25] as const;

/**
 * Deterministic Chroma Anchors (OKLCH C)
 */
const ROLE_PALETTE_CHROMA_ANCHORS: Record<RolePaletteKind, number> = {
  grayscale: 0,
  neutral: 0.02,
  pastel: 0.08,
  earth: 0.05,
  mineral: 0.07,
  muted: 0.04,
  jewel: 0.16,
  fluorescent: 0.26,
  obsidian: 0.01,
  vaporwave: 0.2,
  monochromeAccent: 0.02,
};

/**
 * Chroma Hierarchy Rule
 */
const CHROMA_HIERARCHY = {
  primary: 1.0,
  secondary: 0.7,
  accent: 0.4,
  surface: 0.1,
} as const;

/**
 * Semantic Step Mapping
 */
const SEMANTIC_STEPS = {
  light: {
    bg: 0, // 50
    bgSubtle: 1, // 100
    surface: 1, // 100
    surfaceHover: 2, // 200
    surfaceActive: 3, // 300
    border: 3, // 300
    borderStrong: 4, // 400
    divider: 2, // 200
    text: 9, // 900
    textMuted: 7, // 700
    textSubtle: 6, // 600
    solid: 5, // 500
    softBg: 1, // 100
    softHover: 2, // 200
    softActive: 3, // 300
    outline: 4, // 400
  },
  dark: {
    bg: 0, // 50
    bgSubtle: 1, // 100
    surface: 1, // 100
    surfaceHover: 2, // 200
    surfaceActive: 3, // 300
    border: 3, // 300
    borderStrong: 4, // 400
    divider: 2, // 200
    text: 10, // 950
    textMuted: 8, // 800
    textSubtle: 7, // 700
    solid: 5, // 500
    softBg: 1, // 100
    softHover: 2, // 200
    softActive: 3, // 300
    outline: 4, // 400
  },
} as const;

export function generateColorScale(baseColor: OklchColor, isDark: boolean): ColorScale {
  const scale: Partial<ColorScale> = {};
  const curve = isDark ? LIGHTNESS_CURVES.dark : LIGHTNESS_CURVES.light;

  // Dark-mode chroma rule: reduce chroma by 25%
  const chromaMultiplier = isDark ? 0.75 : 1.0;
  const targetChroma = baseColor.c * chromaMultiplier;

  SCALE_STEPS.forEach((step, index) => {
    const lightness = curve[index];
    const chromaByStep = CHROMA_BY_STEP[index];
    if (lightness === undefined || chromaByStep === undefined) {
      return;
    }
    // Apply chroma falloff curve per step
    const stepChroma = targetChroma * chromaByStep;
    const stepColor = { ...baseColor, l: lightness, c: stepChroma };
    scale[step as keyof ColorScale] = formatHex(stepColor);
  });

  return scale as ColorScale;
}

/**
 * Deterministic Harmony Hues
 */
function getHarmonyHues(baseHue: number, mode: ColorHarmony): number[] {
  const h = (baseHue + 360) % 360;
  switch (mode) {
    case 'monochromatic':
      return [h];
    case 'analogous':
      return [h, (h - 30 + 360) % 360, (h + 30) % 360];
    case 'complementary':
      return [h, (h + 180) % 360];
    case 'splitComplementary':
      return [h, (h + 150) % 360, (h + 210) % 360];
    case 'triadic':
      return [h, (h + 120) % 360, (h + 240) % 360];
    case 'tetradic':
      return [h, (h + 90) % 360, (h + 180) % 360, (h + 270) % 360];
    default:
      return [h];
  }
}

function getColorToneRolePalette(colorTone: ColorTone): {
  bg: RolePaletteKind;
  surface: RolePaletteKind;
  primary: RolePaletteKind;
  secondary: RolePaletteKind;
  accent: RolePaletteKind;
  highlight: RolePaletteKind;
} {
  switch (colorTone) {
    case 'pastel':
      return {
        bg: 'pastel',
        surface: 'pastel',
        primary: 'jewel',
        secondary: 'jewel',
        accent: 'jewel',
        highlight: 'fluorescent',
      };

    case 'earth':
      return {
        bg: 'earth',
        surface: 'earth',
        primary: 'mineral',
        secondary: 'mineral',
        accent: 'jewel',
        highlight: 'jewel',
      };

    case 'mineral':
      return {
        bg: 'mineral',
        surface: 'mineral',
        primary: 'jewel',
        secondary: 'mineral',
        accent: 'jewel',
        highlight: 'fluorescent',
      };

    case 'muted':
      return {
        bg: 'muted',
        surface: 'muted',
        primary: 'jewel',
        secondary: 'muted',
        accent: 'jewel',
        highlight: 'fluorescent',
      };

    case 'jewel':
      return {
        bg: 'grayscale',
        surface: 'grayscale',
        primary: 'jewel',
        secondary: 'jewel',
        accent: 'jewel',
        highlight: 'fluorescent',
      };

    case 'fluorescent':
      return {
        bg: 'obsidian',
        surface: 'obsidian',
        primary: 'fluorescent',
        secondary: 'jewel',
        accent: 'fluorescent',
        highlight: 'fluorescent',
      };

    case 'obsidian':
      return {
        bg: 'obsidian',
        surface: 'obsidian',
        primary: 'fluorescent',
        secondary: 'jewel',
        accent: 'fluorescent',
        highlight: 'fluorescent',
      };

    case 'vaporwave':
      return {
        bg: 'pastel',
        surface: 'pastel',
        primary: 'fluorescent',
        secondary: 'jewel',
        accent: 'fluorescent',
        highlight: 'fluorescent',
      };

    case 'monochromeAccent':
      return {
        bg: 'grayscale',
        surface: 'grayscale',
        primary: 'jewel',
        secondary: 'grayscale',
        accent: 'jewel',
        highlight: 'fluorescent',
      };

    default: // neutral
      return {
        bg: 'grayscale',
        surface: 'grayscale',
        primary: 'jewel',
        secondary: 'pastel',
        accent: 'jewel',
        highlight: 'fluorescent',
      };
  }
}

/**
 * Simple OKLCH L-based contrast check
 */
function getBestContrast(solidHex: string, neutral50: string, neutral950: string): string {
  const solid = oklch(solidHex);
  const n50 = oklch(neutral50);
  const n950 = oklch(neutral950);

  if (!solid || !n50 || !n950) return neutral50;

  const diff50 = Math.abs(solid.l - n50.l);
  const diff950 = Math.abs(solid.l - n950.l);

  return diff50 >= diff950 ? neutral50 : neutral950;
}

export function generatePalette(
  config: ThemeConfig,
  mode: 'light' | 'dark' = 'light',
): {
  colors: Record<string, string>;
  scales: Record<string, ColorScale>;
  semantics: ThemeSemantics;
} {
  const modeConfig = mode === 'dark' ? config.dark : config.light;
  const { primaryColor, harmony, colorTone } = modeConfig;

  let base = oklch(primaryColor);
  if (!base) {
    console.warn(
      `[colorEngine] Invalid primary color: "${primaryColor}". Falling back to default blue.`,
    );
    base = oklch('#3B82F6');
  }

  const baseHue = base?.h ?? 0;
  const hues = getHarmonyHues(baseHue, harmony);
  const rolePalette = getColorToneRolePalette(colorTone);

  // 1. Resolve Chromas
  const getC = (t: RolePaletteKind) => ROLE_PALETTE_CHROMA_ANCHORS[t];
  const getHue = (index: number, fallback: number) => hues[index] ?? fallback;

  const primaryChroma = getC(rolePalette.primary);
  const secondaryChroma = getC(rolePalette.secondary) * CHROMA_HIERARCHY.secondary;
  const tertiaryChroma = getC(rolePalette.accent) * CHROMA_HIERARCHY.accent;
  const highlightChroma = getC(rolePalette.highlight);
  const surfaceChroma = Math.min(0.02, getC(rolePalette.bg) * CHROMA_HIERARCHY.surface);

  // 2. Stable Role Assignment
  let pHue = getHue(0, baseHue);
  let sHue = getHue(0, baseHue);
  let aHue = getHue(0, baseHue);
  let hHue =
    harmony === 'tetradic' ? getHue(3, getHue(0, baseHue)) : (getHue(0, baseHue) + 60) % 360; // Yellow-ish offset if no tetradic

  switch (harmony) {
    case 'complementary':
      pHue = getHue(0, pHue);
      aHue = getHue(1, pHue);
      sHue = (getHue(0, pHue) + 30) % 360;
      break;
    case 'splitComplementary':
    case 'triadic':
      pHue = getHue(0, pHue);
      sHue = getHue(1, pHue);
      aHue = getHue(2, sHue);
      break;
    case 'tetradic':
      pHue = getHue(0, pHue);
      sHue = getHue(1, pHue);
      aHue = getHue(2, sHue);
      hHue = getHue(3, aHue);
      break;
    case 'analogous':
      pHue = getHue(1, pHue);
      sHue = getHue(0, pHue);
      aHue = getHue(2, sHue);
      break;
  }

  // 3. Build Bases with tuned lightness
  const getL = (t: RolePaletteKind) => ROLE_PALETTE_LIGHTNESS_ANCHORS[t];

  const primaryBase: OklchColor = {
    mode: 'oklch',
    l: getL(rolePalette.primary),
    c: primaryChroma,
    h: pHue,
  };
  const secondaryBase: OklchColor = {
    mode: 'oklch',
    l: getL(rolePalette.secondary),
    c: secondaryChroma,
    h: sHue,
  };
  const accentBase: OklchColor = {
    mode: 'oklch',
    l: getL(rolePalette.accent),
    c: tertiaryChroma,
    h: aHue,
  };
  const highlightBase: OklchColor = {
    mode: 'oklch',
    l: getL(rolePalette.highlight),
    c: highlightChroma,
    h: hHue,
  };
  const dangerBase: OklchColor = {
    mode: 'oklch',
    l: 0.6,
    c: 0.2,
    h: 25,
  };
  const successBase: OklchColor = {
    mode: 'oklch',
    l: 0.6,
    c: 0.2,
    h: 145,
  };
  const warningBase: OklchColor = {
    mode: 'oklch',
    l: 0.75,
    c: 0.15,
    h: 85,
  };

  const neutralBase: OklchColor =
    surfaceChroma === 0
      ? { mode: 'oklch', l: 0.62, c: 0 }
      : { mode: 'oklch', l: 0.62, c: surfaceChroma, h: 260 };

  // 4. Generate Scales
  const isDark = mode === 'dark';
  const scales = {
    primary: generateColorScale(primaryBase, isDark),
    secondary: generateColorScale(secondaryBase, isDark),
    accent: generateColorScale(accentBase, isDark),
    highlight: generateColorScale(highlightBase, isDark),
    neutral: generateColorScale(neutralBase, isDark),
    danger: generateColorScale(dangerBase, isDark),
    success: generateColorScale(successBase, isDark),
    warning: generateColorScale(warningBase, isDark),
  };

  // 5. Mappings
  const steps = isDark ? SEMANTIC_STEPS.dark : SEMANTIC_STEPS.light;
  const getStep = (s: ColorScale, idx: number) => {
    const key = SCALE_STEPS[idx] ?? SCALE_STEPS[SCALE_STEPS.length - 1] ?? 950;
    return s[key];
  };

  const getNeutralMapping = (scale: ColorScale): NeutralSemantics => ({
    bg: getStep(scale, steps.bg),
    bgSubtle: getStep(scale, steps.bgSubtle),
    surface: getStep(scale, steps.surface),
    surfaceHover: getStep(scale, steps.surfaceHover),
    surfaceActive: getStep(scale, steps.surfaceActive),
    border: getStep(scale, steps.border),
    borderStrong: getStep(scale, steps.borderStrong),
    divider: getStep(scale, steps.divider),
    text: getStep(scale, steps.text),
    textMuted: getStep(scale, steps.textMuted),
    textSubtle: getStep(scale, steps.textSubtle),
  });

  const getColorMapping = (scale: ColorScale, neutralScale: ColorScale): RoleSemantics => {
    const solid = getStep(scale, steps.solid);
    const softChromaLimit = 0.08;

    // Chroma capping for soft tokens
    const getSoftStep = (idx: number) => {
      const hex = getStep(scale, idx);
      const color = oklch(hex);
      if (color && color.c > softChromaLimit) {
        return formatHex({ ...color, c: softChromaLimit });
      }
      return hex;
    };

    return {
      base: solid,
      hover: getStep(scale, 6), // 600
      strong: getStep(scale, 7), // 700
      softBg: getSoftStep(steps.softBg),
      softHover: getSoftStep(steps.softHover),
      softActive: getSoftStep(steps.softActive),
      outline: getStep(scale, steps.outline),
      onSolidText: getBestContrast(solid, getStep(neutralScale, 0), getStep(neutralScale, 10)),
    };
  };

  const neutral = getNeutralMapping(scales.neutral);
  const brand = getColorMapping(scales.primary, scales.neutral);
  const neutralAction = getColorMapping(scales.neutral, scales.neutral);
  const danger = getColorMapping(scales.danger, scales.neutral);
  const success = getColorMapping(scales.success, scales.neutral);
  const warning = getColorMapping(scales.warning, scales.neutral);

  const colors: Record<string, string> = {
    primary: getStep(scales.primary, steps.solid),
    secondary: getStep(scales.secondary, steps.solid),
    accent: getStep(scales.accent, steps.solid),
    highlight: getStep(scales.highlight, steps.solid),
    background: neutral.bg,
    surface: neutral.surface,
    text: neutral.text,
    textSecondary: neutral.textMuted,
    border: neutral.border,
    error: getStep(scales.danger, steps.solid),
    success: getStep(scales.success, steps.solid),
    warning: getStep(scales.warning, steps.solid),
  };

  const surface: SurfaceSemantics = {
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
    neutral: neutralAction,
    danger,
  };

  return {
    colors,
    scales,
    semantics: {
      neutral,
      brand,
      secondary: getColorMapping(scales.secondary, scales.neutral),
      accent: getColorMapping(scales.accent, scales.neutral),
      highlight: getColorMapping(scales.highlight, scales.neutral),
      danger,
      success,
      warning,
      surface,
      content,
      border,
      action,
    },
  };
}
