import type { SurfaceTheme } from '../../theme/types';
import type { FieldState } from './resolveFieldState';
import type { InteractionState } from './resolveInteractiveState';
import { type ComponentTone, resolveTone } from './resolveTone';

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'soft';

export interface ResolvedInteractiveColors {
  backgroundColor: string;
  borderColor: string;
  contentColor: string;
  opacity?: number;
}

export function resolveButtonColors(
  theme: SurfaceTheme,
  {
    variant,
    tone,
    state,
  }: {
    variant: ButtonVariant;
    tone: ComponentTone;
    state: InteractionState;
  },
): ResolvedInteractiveColors {
  if (state.disabled) {
    return {
      backgroundColor: theme.semantics.neutral.surface,
      borderColor: theme.semantics.neutral.divider,
      contentColor: theme.semantics.content.muted,
      opacity: 0.72,
    };
  }

  const semanticTone = resolveTone(theme, tone);

  switch (variant) {
    case 'outline':
      return {
        backgroundColor: state.pressed
          ? semanticTone.softActive
          : state.hovered
            ? semanticTone.softHover
            : 'transparent',
        borderColor: semanticTone.outline,
        contentColor: semanticTone.base,
      };
    case 'ghost':
      return {
        backgroundColor: state.pressed
          ? semanticTone.softActive
          : state.hovered
            ? semanticTone.softHover
            : 'transparent',
        borderColor: 'transparent',
        contentColor: semanticTone.base,
      };
    case 'soft':
      return {
        backgroundColor: state.pressed
          ? semanticTone.softActive
          : state.hovered
            ? semanticTone.softHover
            : semanticTone.softBg,
        borderColor: 'transparent',
        contentColor: semanticTone.base,
      };
    case 'solid':
    default:
      return {
        backgroundColor: state.pressed
          ? semanticTone.strong
          : state.hovered
            ? semanticTone.hover
            : semanticTone.base,
        borderColor: semanticTone.base,
        contentColor: semanticTone.onSolidText,
      };
  }
}

export function resolveInputColors(
  theme: SurfaceTheme,
  fieldState: FieldState,
): ResolvedInteractiveColors & { placeholderColor: string } {
  if (fieldState.disabled) {
    return {
      backgroundColor: theme.semantics.surface.subtle,
      borderColor: theme.semantics.border.default,
      contentColor: theme.semantics.content.muted,
      placeholderColor: theme.semantics.content.subtle,
      opacity: 0.72,
    };
  }

  if (fieldState.invalid) {
    return {
      backgroundColor: fieldState.readOnly
        ? theme.semantics.surface.subtle
        : theme.semantics.surface.default,
      borderColor: fieldState.focused
        ? theme.semantics.danger.base
        : theme.semantics.danger.outline,
      contentColor: theme.semantics.content.default,
      placeholderColor: theme.semantics.content.muted,
    };
  }

  if (fieldState.focused) {
    return {
      backgroundColor: theme.semantics.surface.default,
      borderColor: theme.semantics.border.focus,
      contentColor: theme.semantics.content.default,
      placeholderColor: theme.semantics.content.muted,
    };
  }

  if (fieldState.readOnly) {
    return {
      backgroundColor: theme.semantics.surface.subtle,
      borderColor: theme.semantics.border.default,
      contentColor: theme.semantics.content.default,
      placeholderColor: theme.semantics.content.muted,
    };
  }

  return {
    backgroundColor: theme.semantics.surface.default,
    borderColor: theme.semantics.border.default,
    contentColor: theme.semantics.content.default,
    placeholderColor: theme.semantics.content.muted,
  };
}
