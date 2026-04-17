import type { AnkhTheme } from '../../theme/types';
import { resolveTone, type ComponentTone } from './resolveTone';
import type { InteractionState } from './resolveInteractiveState';

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'soft';

export interface ResolvedInteractiveColors {
  backgroundColor: string;
  borderColor: string;
  contentColor: string;
  opacity?: number;
}

export function resolveButtonColors(
  theme: AnkhTheme,
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
  theme: AnkhTheme,
  {
    disabled = false,
    focused = false,
    invalid = false,
    readOnly = false,
  }: {
    disabled?: boolean;
    focused?: boolean;
    invalid?: boolean;
    readOnly?: boolean;
  },
): ResolvedInteractiveColors & { placeholderColor: string } {
  if (disabled) {
    return {
      backgroundColor: theme.semantics.surface.subtle,
      borderColor: theme.semantics.border.default,
      contentColor: theme.semantics.content.muted,
      placeholderColor: theme.semantics.content.subtle,
      opacity: 0.72,
    };
  }

  if (invalid) {
    return {
      backgroundColor: readOnly ? theme.semantics.surface.subtle : theme.semantics.surface.default,
      borderColor: focused ? theme.semantics.danger.base : theme.semantics.danger.outline,
      contentColor: theme.semantics.content.default,
      placeholderColor: theme.semantics.content.muted,
    };
  }

  if (focused) {
    return {
      backgroundColor: theme.semantics.surface.default,
      borderColor: theme.semantics.border.focus,
      contentColor: theme.semantics.content.default,
      placeholderColor: theme.semantics.content.muted,
    };
  }

  if (readOnly) {
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
