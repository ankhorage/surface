import { describe, expect, it } from 'bun:test';

import { createTheme } from '../../features/theme/application/use-cases/createTheme';
import { resolveSelectionControlInteractionState } from './resolveSelectionControlInteractionState';

describe('resolveSelectionControlInteractionState', () => {
  it('combines checked interaction colors with the matching indicator dimensions', () => {
    const theme = createTheme();

    const result = resolveSelectionControlInteractionState({
      checked: true,
      color: 'primary',
      disabled: false,
      interactionState: { disabled: false, focused: true, hovered: true, pressed: false },
      invalid: false,
      readOnly: false,
      size: 'l',
      theme,
    });

    expect(result.fieldState.name).toBe('focused');
    expect(result.colors.backgroundColor).toBe(theme.semantics.action.primary.hover);
    expect(result.indicatorSize.checkbox).toBe(22);
    expect(result.labelEmphasis).toBe('default');
  });

  it('preserves read-only label emphasis and invalid field state', () => {
    const theme = createTheme();

    const result = resolveSelectionControlInteractionState({
      checked: false,
      color: 'primary',
      disabled: false,
      interactionState: { disabled: false, focused: false, hovered: false, pressed: false },
      invalid: true,
      readOnly: true,
      size: 'm',
      theme,
    });

    expect(result.fieldState.name).toBe('invalid');
    expect(result.colors.borderColor).toBe(theme.semantics.error.outline);
    expect(result.labelEmphasis).toBe('muted');
  });
});
