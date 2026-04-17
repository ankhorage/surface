import type { FieldState } from './resolveFieldState';
import type { TextTone } from './resolveTextColor';

type FieldPresentationTone = Extract<TextTone, 'default' | 'muted' | 'danger'>;

export interface ResolvedFieldPresentation {
  helperTone: FieldPresentationTone;
  labelTone: FieldPresentationTone;
}

export function resolveFieldPresentation(fieldState: FieldState): ResolvedFieldPresentation {
  if (fieldState.invalid) {
    return {
      helperTone: 'danger',
      labelTone: 'danger',
    };
  }

  if (fieldState.disabled || fieldState.readOnly) {
    return {
      helperTone: 'muted',
      labelTone: 'muted',
    };
  }

  return {
    helperTone: 'default',
    labelTone: 'default',
  };
}
