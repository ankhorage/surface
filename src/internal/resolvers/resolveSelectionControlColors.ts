import type { SurfaceColor } from '../../surfaceColor';
import type { SurfaceTheme } from '../../theme/types';
import type { FieldState } from './resolveFieldState';
import { resolveSurfaceColor } from './resolveSurfaceColor';

export interface ResolvedSelectionControlColors {
  backgroundColor: string;
  borderColor: string;
  indicatorColor: string;
  labelColor: string;
  trackColor: string;
  thumbColor: string;
  opacity?: number;
}

export function resolveSelectionControlColors(
  theme: SurfaceTheme,
  {
    color = 'primary',
    fieldState,
    checked,
    hovered = false,
    pressed = false,
  }: {
    color?: SurfaceColor;
    fieldState: FieldState;
    checked: boolean;
    hovered?: boolean;
    pressed?: boolean;
  },
): ResolvedSelectionControlColors {
  const semanticTone = resolveSurfaceColor(theme, fieldState.invalid ? 'error' : color);
  const isMuted = fieldState.disabled;
  const isInteractiveReadOnly = fieldState.readOnly && !fieldState.disabled;

  if (isMuted) {
    return {
      backgroundColor: checked
        ? theme.semantics.neutral.surfaceActive
        : theme.semantics.surface.subtle,
      borderColor: theme.semantics.border.default,
      indicatorColor: checked ? theme.semantics.content.muted : 'transparent',
      labelColor: theme.semantics.content.muted,
      trackColor: checked ? theme.semantics.neutral.surfaceActive : theme.semantics.neutral.border,
      thumbColor: theme.semantics.surface.default,
      opacity: 0.72,
    };
  }

  const uncheckedBorderColor = fieldState.invalid
    ? theme.semantics.error.outline
    : fieldState.focused
      ? theme.semantics.border.focus
      : theme.semantics.border.strong;
  const uncheckedBackgroundColor = pressed
    ? theme.semantics.neutral.surfaceActive
    : hovered
      ? theme.semantics.neutral.surfaceHover
      : theme.semantics.surface.default;
  const checkedBackgroundColor = pressed
    ? semanticTone.strong
    : hovered
      ? semanticTone.hover
      : semanticTone.base;
  const checkedTrackColor = pressed
    ? semanticTone.strong
    : hovered
      ? semanticTone.hover
      : semanticTone.base;

  return {
    backgroundColor: checked ? checkedBackgroundColor : uncheckedBackgroundColor,
    borderColor: checked ? semanticTone.base : uncheckedBorderColor,
    indicatorColor: checked ? semanticTone.onSolidText : 'transparent',
    labelColor: isInteractiveReadOnly
      ? theme.semantics.content.muted
      : theme.semantics.content.default,
    trackColor: checked ? checkedTrackColor : uncheckedBorderColor,
    thumbColor: checked ? semanticTone.onSolidText : theme.semantics.surface.default,
    opacity: isInteractiveReadOnly ? 0.88 : 1,
  };
}
