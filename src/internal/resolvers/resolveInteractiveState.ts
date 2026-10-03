import type { InteractionState } from '../../types/pressable';

export function resolveInteractiveState(input: Partial<InteractionState>): InteractionState {
  return {
    pressed: Boolean(input.pressed),
    hovered: Boolean(input.hovered),
    focused: Boolean(input.focused),
    disabled: Boolean(input.disabled),
  };
}
