import type { AccessibilityState } from 'react-native';

import type { InteractionState } from '../../internal/resolvers/resolveInteractiveState';
import type { SurfaceTheme } from '../../theme/types';

export function resolveNavigationAccessibilityState(
  active: boolean,
  disabled: boolean,
  accessibilityState?: AccessibilityState,
): AccessibilityState {
  const resolved: AccessibilityState = { ...(accessibilityState ?? {}) };

  if (active) {
    resolved.selected = true;
  }

  if (disabled) {
    resolved.disabled = true;
  }

  return resolved;
}

export interface ResolvedNavigationItemPresentation {
  backgroundColor: string;
  contentColor: string;
  opacity: number;
}

export function resolveNavigationItemPresentation(
  theme: SurfaceTheme,
  {
    active,
    disabled,
    state,
  }: {
    active: boolean;
    disabled: boolean;
    state: InteractionState;
  },
): ResolvedNavigationItemPresentation {
  const interactionState = disabled ? { ...state, hovered: false, pressed: false } : state;

  if (disabled) {
    return {
      backgroundColor: theme.semantics.surface.disabled,
      contentColor: theme.semantics.content.disabled,
      opacity: 1,
    };
  }

  const contentColor = active
    ? interactionState.pressed
      ? theme.semantics.action.primary.onSoftActiveText
      : interactionState.hovered
        ? theme.semantics.action.primary.onSoftHoverText
        : theme.semantics.action.primary.onSoftText
    : theme.semantics.content.default;

  if (active) {
    return {
      backgroundColor: interactionState.pressed
        ? theme.semantics.action.primary.softActive
        : interactionState.hovered
          ? theme.semantics.action.primary.softHover
          : theme.semantics.action.primary.softBg,
      contentColor,
      opacity: 1,
    };
  }

  return {
    backgroundColor: interactionState.pressed
      ? theme.semantics.neutral.surfaceActive
      : interactionState.hovered
        ? theme.semantics.neutral.surfaceHover
        : 'transparent',
    contentColor,
    opacity: 1,
  };
}
