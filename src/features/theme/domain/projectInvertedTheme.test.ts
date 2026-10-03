import { getContrastRatio, parseHexColorOrThrow } from '@ankhorage/color-theory';
import { expect, it } from 'bun:test';

import {
  resolveButtonColors,
  resolveInputColors,
} from '../../../internal/resolvers/resolveInteractiveColors';
import { createTheme } from '../application/use-cases/createTheme';

const idle = { disabled: false, focused: false, hovered: false, pressed: false };
const modes: ('light' | 'dark')[] = ['light', 'dark'];

it.each(modes)('%s inversion keeps mode and self-owned role pairs', (mode) => {
  const normal = createTheme(undefined, mode);
  const inverted = createTheme(undefined, mode, undefined, true);
  expect(inverted.colorDiagnostics.mode).toBe(mode);
  expect(inverted.semantics.surface.default).toBe(normal.semantics.surface.inverse);
  expect(inverted.semantics.content.default).not.toBe(normal.semantics.content.default);
  expect(inverted.semantics.brand.base).toBe(normal.semantics.brand.base);
  expect(inverted.semantics.brand.onSolidText).toBe(normal.semantics.brand.onSolidText);
  expect(inverted.semantics.brand.softBg).toBe(normal.semantics.brand.softBg);
  expect(inverted.semantics.brand.onSoftText).toBe(normal.semantics.brand.onSoftText);
});

it.each(modes)('%s inversion selects readable content and border semantics', (mode) => {
  const inverted = createTheme(undefined, mode, undefined, true);
  const surface = parseHexColorOrThrow(inverted.semantics.surface.default);
  const { content, border } = inverted.semantics;
  for (const foreground of [content.default, content.muted, content.subtle, content.icon]) {
    expect(getContrastRatio(parseHexColorOrThrow(foreground), surface)).toBeGreaterThanOrEqual(4.5);
  }
  expect(getContrastRatio(parseHexColorOrThrow(border.divider), surface)).toBeGreaterThanOrEqual(3);
  expect(
    inverted.colorDiagnostics.contrasts
      .filter((entry) => entry.id.startsWith('inverse.'))
      .every((entry) => entry.passes),
  ).toBe(true);
});

it.each(modes)('%s inversion keeps transparent controls and input readable', (mode) => {
  const normal = createTheme(undefined, mode);
  const inverted = createTheme(undefined, mode, undefined, true);
  const surface = parseHexColorOrThrow(inverted.semantics.surface.default);
  for (const color of ['primary', 'neutral'] as const) {
    for (const variant of ['ghost', 'outline'] as const) {
      const colors = resolveButtonColors(inverted, { color, variant, state: idle });
      expect(
        getContrastRatio(parseHexColorOrThrow(colors.contentColor), surface),
      ).toBeGreaterThanOrEqual(4.5);
      if (variant === 'outline') {
        expect(
          getContrastRatio(parseHexColorOrThrow(colors.borderColor), surface),
        ).toBeGreaterThanOrEqual(3);
      }
    }
  }
  const solid = resolveButtonColors(inverted, { color: 'primary', variant: 'solid', state: idle });
  const normalSolid = resolveButtonColors(normal, {
    color: 'primary',
    variant: 'solid',
    state: idle,
  });
  expect(solid).toEqual(normalSolid);
  const input = resolveInputColors(inverted, {
    name: 'default',
    disabled: false,
    focused: false,
    invalid: false,
    readOnly: false,
  });
  expect(
    getContrastRatio(
      parseHexColorOrThrow(input.contentColor),
      parseHexColorOrThrow(input.backgroundColor),
    ),
  ).toBeGreaterThanOrEqual(4.5);
});

it.each(modes)('%s inversion keeps hovered and pressed transparent actions readable', (mode) => {
  const theme = createTheme(undefined, mode, undefined, true);
  for (const color of ['primary', 'neutral'] as const) {
    for (const variant of ['ghost', 'outline'] as const) {
      for (const interaction of ['hovered', 'pressed'] as const) {
        const colors = resolveButtonColors(theme, {
          color,
          variant,
          state: { ...idle, [interaction]: true },
        });
        expect(
          getContrastRatio(
            parseHexColorOrThrow(colors.contentColor),
            parseHexColorOrThrow(colors.backgroundColor),
          ),
        ).toBeGreaterThanOrEqual(4.5);
      }
    }
  }
});

it.each([
  ['light', '#000000'],
  ['dark', '#FFFFFF'],
] as const)('%s inversion retains contrast for extreme brand seeds', (mode, primaryColor) => {
  const config = {
    id: 'extreme',
    name: 'Extreme',
    light: { primaryColor, harmony: 'monochromatic' as const },
    dark: { primaryColor, harmony: 'monochromatic' as const },
  };
  const theme = createTheme(config, mode, undefined, true);
  expect(
    theme.colorDiagnostics.contrasts
      .filter((entry) => entry.id.startsWith('inverse.'))
      .every((entry) => entry.passes),
  ).toBe(true);
  expect(
    theme.colorDiagnostics.selections.some((entry) => entry.id.endsWith('neutralFallback')),
  ).toBe(true);
});
