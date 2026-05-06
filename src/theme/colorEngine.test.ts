import type { SemanticColorToken } from '@ankhorage/color-theory';
import {
  DARK_SEMANTIC_COLOR_REFERENCES,
  LIGHT_SEMANTIC_COLOR_REFERENCES,
} from '@ankhorage/color-theory';
import type { ThemeConfig } from '@ankhorage/contracts';
import { describe, expect, it } from 'bun:test';

import { generatePalette, resolveSemanticColors } from './colorEngine';
import type { ThemeSemantics } from './types';

const mockConfig: ThemeConfig = {
  id: 'test',
  name: 'Test Theme',
  light: {
    primaryColor: '#3B82F6',
    harmony: 'triadic',
  },
  dark: {
    primaryColor: '#3B82F6',
    harmony: 'triadic',
  },
};

function expectRequiredSemanticRoles(semantics: ThemeSemantics) {
  expect(semantics.neutral.bg).toBeDefined();
  expect(semantics.neutral.surface).toBeDefined();
  expect(semantics.neutral.text).toBeDefined();
  expect(semantics.brand.base).toBeDefined();
  expect(semantics.secondary.base).toBeDefined();
  expect(semantics.danger.base).toBeDefined();
  expect(semantics.success.base).toBeDefined();
  expect(semantics.warning.base).toBeDefined();
  expect(semantics.surface.default).toBeDefined();
  expect(semantics.content.default).toBeDefined();
  expect(semantics.border.default).toBeDefined();
  expect(semantics.action.primary.base).toBeDefined();
  expect(semantics.action.neutral.base).toBeDefined();
  expect(semantics.action.danger.base).toBeDefined();
}

describe('colorEngine', () => {
  it('generates a valid palette for light mode', () => {
    const { colors, swatches, semantics } = generatePalette(mockConfig, 'light');

    expect(colors.primary).toBeDefined();
    expect(swatches.primary).toBeDefined();
    expect(swatches.neutral).toBeDefined();
    expect(Object.keys(swatches.primary)).toHaveLength(11);
    expect(Object.keys(swatches.neutral)).toHaveLength(11);

    // Surface semantic aliases
    expect(semantics.surface.default).toBe(semantics.neutral.surface);
    expect(semantics.content.muted).toBe(semantics.neutral.textMuted);
    expect(semantics.border.focus).toBe(semantics.brand.outline);
    expect(semantics.action.primary.base).toBe(semantics.brand.base);
    expect(semantics.action.danger.base).toBe(semantics.danger.base);

    // Surface runtime semantic aliases derived from ordinal swatches
    expect(semantics.accent.base).toBeDefined();
    expect(semantics.highlight.base).toBeDefined();
    // accent/highlight are Surface semantic aliases (tertiary/quaternary fallback to primary when absent)
    expect(semantics.accent.base).toBe(colors.accent);
    expect(semantics.highlight.base).toBe(colors.highlight);
  });

  it('generates a valid palette for dark mode', () => {
    const { colors, semantics } = generatePalette(mockConfig, 'dark');

    expect(colors.background).toBe(semantics.neutral.bg);
    expect(semantics.content.inverse).toBe(semantics.brand.onSolidText);
  });

  it('preserves the primary color at swatch step 500 in light mode', () => {
    const { swatches } = generatePalette(mockConfig, 'light');
    expect(swatches.primary[500]).toBe(mockConfig.light.primaryColor);
  });

  it('preserves the primary color at swatch step 500 in dark mode', () => {
    const { swatches } = generatePalette(mockConfig, 'dark');
    expect(swatches.primary[500]).toBe(mockConfig.dark.primaryColor);
  });

  it('provides a neutral swatch with neutralKeyColor at step 500', () => {
    const { swatches } = generatePalette(mockConfig, 'light');
    // neutral swatch must have a step 500 entry
    expect(swatches.neutral[500]).toBeDefined();
  });

  it('throws deterministically on invalid primary color', () => {
    const config = {
      ...mockConfig,
      light: { ...mockConfig.light, primaryColor: 'not-a-hex-color' },
    };
    expect(() => generatePalette(config, 'light')).toThrow();
  });

  it('throws deterministically on invalid primary color in dark mode', () => {
    const config = {
      ...mockConfig,
      dark: { ...mockConfig.dark, primaryColor: 'rgb(0,0,0)' },
    };
    expect(() => generatePalette(config, 'dark')).toThrow();
  });

  it('emits required semantic roles for all harmonies', () => {
    const harmonies = [
      'monochromatic',
      'analogous',
      'complementary',
      'triadic',
      'tetradic',
      'splitComplementary',
    ] as const;

    for (const harmony of harmonies) {
      const config = {
        ...mockConfig,
        light: { ...mockConfig.light, harmony },
        dark: { ...mockConfig.dark, harmony },
      };
      const light = generatePalette(config, 'light');
      const dark = generatePalette(config, 'dark');
      expectRequiredSemanticRoles(light.semantics);
      expectRequiredSemanticRoles(dark.semantics);
    }
  });

  it('generates ordinal chromatic role swatches (no accent/highlight as swatch keys)', () => {
    const { swatches } = generatePalette(mockConfig, 'light');
    const keys = Object.keys(swatches);
    expect(keys).not.toContain('accent');
    expect(keys).not.toContain('highlight');
    expect(keys).not.toContain('surfaceTint');
    expect(keys).not.toContain('base');
    // ordinal roles are present
    expect(keys).toContain('primary');
    expect(keys).toContain('neutral');
  });

  it('semantic resolver maps all SemanticColorToken entries for light mode', () => {
    const { swatches } = generatePalette(mockConfig, 'light');
    // Build a minimal GeneratedThemeModeColors for resolver testing
    const generated = {
      harmonyRoleColors: {} as never,
      swatches,
      neutral: { neutralKeyColor: swatches.neutral[500], diagnostics: {} as never },
    };
    const resolved = resolveSemanticColors(generated, LIGHT_SEMANTIC_COLOR_REFERENCES);
    const tokens: SemanticColorToken[] = [
      'background',
      'surface',
      'surfaceRaised',
      'border',
      'divider',
      'text',
      'textMuted',
      'disabledBg',
      'disabledText',
      'brand',
      'brandEmphasis',
      'action',
      'actionEmphasis',
    ];
    for (const token of tokens) {
      expect(resolved[token]).toBeDefined();
      expect(typeof resolved[token]).toBe('string');
    }
  });

  it('semantic resolver maps all SemanticColorToken entries for dark mode', () => {
    const { swatches } = generatePalette(mockConfig, 'dark');
    const generated = {
      harmonyRoleColors: {} as never,
      swatches,
      neutral: { neutralKeyColor: swatches.neutral[500], diagnostics: {} as never },
    };
    const resolved = resolveSemanticColors(generated, DARK_SEMANTIC_COLOR_REFERENCES);
    const tokens: SemanticColorToken[] = [
      'background',
      'surface',
      'surfaceRaised',
      'border',
      'divider',
      'text',
      'textMuted',
      'disabledBg',
      'disabledText',
      'brand',
      'brandEmphasis',
      'action',
      'actionEmphasis',
    ];
    for (const token of tokens) {
      expect(resolved[token]).toBeDefined();
    }
  });

  it('neutral semantics power backgrounds, borders, text in light mode', () => {
    const { semantics } = generatePalette(mockConfig, 'light');
    expect(semantics.neutral.bg).toBeDefined();
    expect(semantics.neutral.bgSubtle).toBeDefined();
    expect(semantics.neutral.surface).toBeDefined();
    expect(semantics.neutral.surfaceHover).toBeDefined();
    expect(semantics.neutral.border).toBeDefined();
    expect(semantics.neutral.borderStrong).toBeDefined();
    expect(semantics.neutral.divider).toBeDefined();
    expect(semantics.neutral.text).toBeDefined();
    expect(semantics.neutral.textMuted).toBeDefined();
    expect(semantics.neutral.textSubtle).toBeDefined();
  });

  it('readable foregrounds are generated for brand base in both modes', () => {
    const light = generatePalette(mockConfig, 'light');
    const dark = generatePalette(mockConfig, 'dark');
    expect(light.semantics.brand.onSolidText).toMatch(/^#/);
    expect(dark.semantics.brand.onSolidText).toMatch(/^#/);
  });

  it('does not export ColorTone', async () => {
    const types = await import('./types');
    expect('ColorTone' in types).toBe(false);
  });
});
