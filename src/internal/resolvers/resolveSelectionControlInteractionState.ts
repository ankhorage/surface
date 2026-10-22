import type { ControlSize } from '../../types/control';
import type { InteractionState } from '../../types/pressable';
import type { SurfaceColor } from '../../types/surfaceColor';
import type { SurfaceTheme } from '../../types/theme';
import { resolveFieldState } from './resolveFieldState';
import { resolveIndicatorSize } from './resolveIndicatorSize';
import { resolveSelectionControlColors } from './resolveSelectionControlColors';

interface ResolveSelectionControlInteractionStateInput {
  checked: boolean;
  color: SurfaceColor;
  disabled: boolean;
  interactionState: InteractionState;
  invalid: boolean;
  readOnly: boolean;
  size: ControlSize;
  theme: SurfaceTheme;
}

/*** Resolves the visual interaction state shared by checkbox and radio controls. */
export function resolveSelectionControlInteractionState({
  checked,
  color,
  disabled,
  interactionState,
  invalid,
  readOnly,
  size,
  theme,
}: ResolveSelectionControlInteractionStateInput) {
  const fieldState = resolveFieldState({
    disabled,
    focused: interactionState.focused,
    invalid,
    readOnly,
  });
  const colors = resolveSelectionControlColors(theme, {
    checked,
    color,
    fieldState,
    hovered: interactionState.hovered,
    pressed: interactionState.pressed,
  });

  return {
    colors,
    fieldState,
    indicatorSize: resolveIndicatorSize(size),
    labelEmphasis:
      colors.labelColor === theme.semantics.content.muted
        ? ('muted' as const)
        : ('default' as const),
  };
}
