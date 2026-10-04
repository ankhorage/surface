import { getContrastRatio, parseHexColorOrThrow } from '@ankhorage/color-theory';
import { expect, it } from 'bun:test';

import { createTheme } from './features/theme/application/use-cases/createTheme';
import { SURFACE_COLOR_POLICY } from './features/theme/constants';
import {
  resolveButtonColors,
  resolveInputColors,
} from './internal/resolvers/resolveInteractiveColors';

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
    expect(getContrastRatio(parseHexColorOrThrow(foreground), surface)).toBeGreaterThanOrEqual(
      SURFACE_COLOR_POLICY.textContrast,
    );
  }
  expect(getContrastRatio(parseHexColorOrThrow(border.divider), surface)).toBeGreaterThanOrEqual(
    SURFACE_COLOR_POLICY.uiContrast,
  );
  expect(
    inverted.colorDiagnostics.contrasts
      .filter((entry) => entry.id.startsWith('inverse.'))
      .every((entry) => entry.passes),
  ).toBe(true);
});

it.each(modes)(
  '%s inversion diagnostics describe projected surfaces and disabled content',
  (mode) => {
    const theme = createTheme(undefined, mode, undefined, true);
    const disabled = theme.colorDiagnostics.contrasts.filter((entry) =>
      entry.id.startsWith('inverse.content.disabled/'),
    );
    expect(disabled).toHaveLength(2);
    expect(
      disabled.every((entry) => entry.minimumContrast === SURFACE_COLOR_POLICY.disabledContrast),
    ).toBe(true);
    expect(disabled.every((entry) => entry.passes)).toBe(true);
    expect(
      theme.colorDiagnostics.surfaceSeparation.map((entry) => String(entry.foreground)),
    ).toEqual([
      theme.semantics.surface.default,
      theme.semantics.surface.raised,
      theme.semantics.surface.disabled,
    ]);
    expect(
      theme.colorDiagnostics.surfaceSeparation.every(
        (entry) => entry.background === theme.semantics.surface.sunken,
      ),
    ).toBe(true);
    expect(theme.colorDiagnostics.surfaceSeparation[0]?.contrast).toBe(1);
  },
);

it.each(modes)('%s disabled controls use the disabled contrast policy', (mode) => {
  const theme = createTheme(undefined, mode, undefined, true);
  const button = resolveButtonColors(theme, {
    color: 'primary',
    variant: 'ghost',
    state: { ...idle, disabled: true },
  });
  const input = resolveInputColors(theme, {
    name: 'disabled',
    disabled: true,
    focused: false,
    invalid: false,
    readOnly: false,
  });
  for (const control of [button, input]) {
    expect(
      getContrastRatio(
        parseHexColorOrThrow(control.contentColor),
        parseHexColorOrThrow(control.backgroundColor),
      ),
    ).toBeGreaterThanOrEqual(SURFACE_COLOR_POLICY.disabledContrast);
  }
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
      ).toBeGreaterThanOrEqual(SURFACE_COLOR_POLICY.textContrast);
      if (variant === 'outline') {
        expect(
          getContrastRatio(parseHexColorOrThrow(colors.borderColor), surface),
        ).toBeGreaterThanOrEqual(SURFACE_COLOR_POLICY.uiContrast);
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
  ).toBeGreaterThanOrEqual(SURFACE_COLOR_POLICY.textContrast);
});

it.each([false, true])(
  'transparent actions pair hover and press fills (inverted=%p)',
  (inverted) => {
    for (const mode of modes) {
      const theme = createTheme(undefined, mode, undefined, inverted);
      for (const color of ['primary', 'neutral'] as const) {
        for (const variant of ['ghost', 'outline'] as const) {
          for (const interaction of ['hovered', 'pressed'] as const) {
            const colors = resolveButtonColors(theme, {
              color,
              variant,
              state: { ...idle, [interaction]: true },
            });
            const role =
              color === 'primary' ? theme.semantics.action.primary : theme.semantics.action.neutral;
            expect(colors.contentColor).toBe(
              interaction === 'hovered' ? role.onSoftHoverText : role.onSoftActiveText,
            );
            expect(
              getContrastRatio(
                parseHexColorOrThrow(colors.contentColor),
                parseHexColorOrThrow(colors.backgroundColor),
              ),
            ).toBeGreaterThanOrEqual(SURFACE_COLOR_POLICY.textContrast);
          }
        }
      }
    }
  },
);

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
