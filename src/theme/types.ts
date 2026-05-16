import type { GeneratedThemeSwatches } from '@ankhorage/color-theory';
import type { ThemeConfig as ContractsThemeConfig } from '@ankhorage/contracts';

export type {
  ColorHarmony,
  ColorSwatch,
  ColorSwatchStep,
  GeneratedColorRole,
  GeneratedThemeModeColors,
  GeneratedThemeSwatches,
  HexColor,
  SemanticColorReferenceMap,
  SemanticColorToken,
} from '@ankhorage/color-theory';
export type { ThemeConfig, ThemeModeConfig } from '@ankhorage/contracts';

export interface NeutralSemantics {
  bg: string;
  bgSubtle: string;
  surface: string;
  surfaceHover: string;
  surfaceActive: string;
  border: string;
  borderStrong: string;
  divider: string;
  text: string;
  textMuted: string;
  textSubtle: string;
}

export interface RoleSemantics {
  base: string;
  hover: string;
  strong: string;
  softBg: string;
  softHover: string;
  softActive: string;
  outline: string;
  onSolidText: string;
}

export interface SurfaceSemantics {
  default: string;
  subtle: string;
  raised: string;
}

export interface ContentSemantics {
  default: string;
  muted: string;
  subtle: string;
  inverse: string;
}

export interface BorderSemantics {
  default: string;
  strong: string;
  focus: string;
}

export interface ActionSemantics {
  primary: RoleSemantics;
  neutral: RoleSemantics;
  danger: RoleSemantics;
}

export interface ThemeSemantics {
  neutral: NeutralSemantics;
  brand: RoleSemantics;
  secondary: RoleSemantics;
  accent: RoleSemantics;
  highlight: RoleSemantics;
  danger: RoleSemantics;
  success: RoleSemantics;
  warning: RoleSemantics;
  error: RoleSemantics;
  info: RoleSemantics;
  surface: SurfaceSemantics;
  content: ContentSemantics;
  border: BorderSemantics;
  action: ActionSemantics;
}

export type FontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'bold'
  | 'normal';

export interface ThemeTokens {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    highlight: string;
    tertiary: string;
    quaternary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    success: string;
    warning: string;
    info: string;
    [key: string]: string;
  };
  swatches: GeneratedThemeSwatches;
  semantics: ThemeSemantics;
  spacing: {
    none: 0;
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
    [key: string]: number;
  };
  radii: {
    none: 0;
    s: number;
    m: number;
    l: number;
    full: number;
  };
  typography: {
    headings: Record<
      1 | 2 | 3 | 4 | 5 | 6,
      {
        size: number;
        lineHeight: number;
        weight: 'regular' | 'medium' | 'semiBold' | 'bold';
      }
    >;
    sizes: {
      xs: number;
      s: number;
      m: number;
      l: number;
      xl: number;
      xxl: number;
      '3xl': number;
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      h5: number;
      h6: number;
      [key: string]: number;
    };
    weights: {
      thin: FontWeight;
      extraLight: FontWeight;
      light: FontWeight;
      regular: FontWeight;
      medium: FontWeight;
      semiBold: FontWeight;
      bold: FontWeight;
      extraBold: FontWeight;
      black: FontWeight;
    };
    fonts: {
      /** Map of weight -> fontFamily name for normal style */
      normal: Record<FontWeight, string | undefined>;
      /** Map of weight -> fontFamily name for italic style */
      italic: Record<FontWeight, string | undefined>;
    };
  };
  shadows: {
    soft: number;
    medium: number;
    hard: number;
    [key: string]: number;
  };
}

export interface SurfaceTheme extends ThemeTokens {
  config: ContractsThemeConfig;
}
