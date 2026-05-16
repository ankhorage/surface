import type { SurfaceColor, SurfaceEmphasis } from '../../surfaceColor';
import type { FieldState } from './resolveFieldState';

export interface ResolvedFieldPresentation {
  helperColor?: Extract<SurfaceColor, 'danger'>;
  helperEmphasis: Extract<SurfaceEmphasis, 'default' | 'muted'>;
  labelColor?: Extract<SurfaceColor, 'danger'>;
  labelEmphasis: Extract<SurfaceEmphasis, 'default' | 'muted'>;
}

export function resolveFieldPresentation(fieldState: FieldState): ResolvedFieldPresentation {
  if (fieldState.invalid) {
    return {
      helperColor: 'danger',
      helperEmphasis: 'default',
      labelColor: 'danger',
      labelEmphasis: 'default',
    };
  }

  if (fieldState.disabled || fieldState.readOnly) {
    return {
      helperEmphasis: 'muted',
      labelEmphasis: 'muted',
    };
  }

  return {
    helperEmphasis: 'default',
    labelEmphasis: 'default',
  };
}
