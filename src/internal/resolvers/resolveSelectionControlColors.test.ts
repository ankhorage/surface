import { describe, expect, it } from 'bun:test';

import { createTheme } from '../../theme/createTheme';
import { resolveFieldState } from './resolveFieldState';
import { resolveSelectionControlColors } from './resolveSelectionControlColors';

describe('resolveSelectionControlColors', () => {
  it('maps checked controls through the selected tone semantics', () => {
    const theme = createTheme();
    const colors = resolveSelectionControlColors(theme, {
      checked: true,
      fieldState: resolveFieldState({ focused: true }),
      tone: 'primary',
    });

    expect(colors.borderColor).toBe(theme.semantics.action.primary.base);
    expect(colors.indicatorColor).toBe(theme.semantics.action.primary.onSolidText);
    expect(colors.labelColor).toBe(theme.semantics.content.default);
  });

  it('maps invalid unchecked controls through danger/border semantics', () => {
    const theme = createTheme();
    const colors = resolveSelectionControlColors(theme, {
      checked: false,
      fieldState: resolveFieldState({ invalid: true }),
      tone: 'primary',
    });

    expect(colors.borderColor).toBe(theme.semantics.danger.outline);
    expect(colors.trackColor).toBe(theme.semantics.danger.outline);
  });

  it('mutes disabled controls regardless of tone', () => {
    const theme = createTheme();
    const colors = resolveSelectionControlColors(theme, {
      checked: true,
      fieldState: resolveFieldState({ disabled: true }),
      tone: 'danger',
    });

    expect(colors.labelColor).toBe(theme.semantics.content.muted);
    expect(colors.opacity).toBe(0.72);
  });
});
