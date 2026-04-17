import { describe, expect, it } from 'bun:test';

import { resolveFieldPresentation } from './resolveFieldPresentation';
import { resolveFieldState } from './resolveFieldState';

describe('resolveFieldPresentation', () => {
  it('keeps label and helper tones aligned for default fields', () => {
    expect(resolveFieldPresentation(resolveFieldState({}))).toEqual({
      helperTone: 'default',
      labelTone: 'default',
    });
  });

  it('mutes both label and helper text for disabled and read-only fields', () => {
    expect(resolveFieldPresentation(resolveFieldState({ disabled: true }))).toEqual({
      helperTone: 'muted',
      labelTone: 'muted',
    });
    expect(resolveFieldPresentation(resolveFieldState({ readOnly: true }))).toEqual({
      helperTone: 'muted',
      labelTone: 'muted',
    });
  });

  it('elevates invalid fields to the danger tone', () => {
    expect(resolveFieldPresentation(resolveFieldState({ invalid: true, readOnly: true }))).toEqual({
      helperTone: 'danger',
      labelTone: 'danger',
    });
  });
});
