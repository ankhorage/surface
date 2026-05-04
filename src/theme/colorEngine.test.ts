import { describe, expect, it } from 'bun:test';
import { oklch } from 'culori';

import { generatePalette } from './colorEngine';
import type { ThemeConfig } from './types';

const mockConfig: ThemeConfig = {
  id: 'test',
  name: 'Test Theme',
  light: {
    primaryColor: '#3B82F6',
    harmony: 'triadic',
    colorTone: 'neutral',
  },
  dark: {
    primaryColor: '#3B82F6',
    harmony: 'triadic',
    colorTone: 'neutral',
  },
};

describe('colorEngine', () => {
  it('should generate a stable palette with deterministic chroma hierarchy', () => {
    const { colors, semantics, scales } = generatePalette(mockConfig, 'light');

    // Primary should be defined
    expect(colors.primary).toBeDefined();

    // Verify neutral surface chroma is strictly limited
    const neutralBg = oklch(semantics.neutral.bg);
    expect(neutralBg?.c).toBeLessThanOrEqual(0.021); // Small epsilon for float

    // Verify presence of new tokens
    expect(semantics.neutral.bgSubtle).toBeDefined();
    expect(semantics.brand.onSolidText).toBeDefined();
    expect(semantics.brand.softBg).toBeDefined();
    expect(semantics.surface.default).toBe(semantics.neutral.surface);
    expect(semantics.content.muted).toBe(semantics.neutral.textMuted);
    expect(semantics.border.focus).toBe(semantics.brand.outline);
    expect(semantics.action.primary.base).toBe(semantics.brand.base);
    expect(semantics.action.danger.base).toBe(semantics.danger.base);

    // Verify scale coverage
    const primaryScale = scales.primary;
    const neutralScale = scales.neutral;
    expect(primaryScale).toBeDefined();
    expect(neutralScale).toBeDefined();
    if (!primaryScale || !neutralScale) throw new Error('Expected generated scales');
    expect(Object.keys(primaryScale)).toHaveLength(11);
    expect(neutralScale[50]).toBeDefined();
    expect(neutralScale[950]).toBeDefined();
  });

  it('should respect triadic hue offsets (120 degrees)', () => {
    const { colors } = generatePalette(mockConfig, 'light');

    const p = oklch(colors.primary);
    const s = oklch(colors.secondary);
    const a = oklch(colors.accent);

    if (p && s && a) {
      const h1 = p.h ?? 0;
      const h2 = s.h ?? 0;
      const h3 = a.h ?? 0;

      // Check distance (allowing for small float rounding and perceptual shift)
      const diff1 = Math.abs((h2 - h1 + 360) % 360);
      const diff2 = Math.abs((h3 - h1 + 360) % 360);

      expect(diff1).toBeGreaterThan(115);
      expect(diff1).toBeLessThan(125);
      expect(diff2).toBeGreaterThan(235);
      expect(diff2).toBeLessThan(245);
    }
  });

  it('should handle monochromatic harmony (one hue)', () => {
    const config = {
      ...mockConfig,
      light: { ...mockConfig.light, harmony: 'monochromatic' as const },
    };
    const { colors } = generatePalette(config, 'light');

    const p = oklch(colors.primary);
    const s = oklch(colors.secondary);

    expect(p?.h).toBeCloseTo(s?.h ?? 0, 0);
  });

  it('should generate dark mode colors correctly', () => {
    const { colors, semantics } = generatePalette(mockConfig, 'dark');

    const bg = oklch(colors.background);
    expect(bg?.l).toBeLessThan(0.2); // Should be dark
    expect(colors.background).toBe(semantics.neutral.bg);
    expect(semantics.content.inverse).toBe(semantics.brand.onSolidText);
  });

  it('should fall back to a default color if primaryColor is invalid', () => {
    const config = {
      ...mockConfig,
      light: { ...mockConfig.light, primaryColor: 'invalid-color' },
    };

    // Should not throw
    const { colors } = generatePalette(config, 'light');
    expect(colors.primary).toBeDefined();
    // Default fallback blue #3B82F6 in OKLCH
    const p = oklch(colors.primary);
    const fallbackBlue = oklch('#3B82F6');
    expect(fallbackBlue).toBeDefined();
    expect(p?.h).toBeCloseTo(fallbackBlue?.h ?? 0, 0);
  });
});
