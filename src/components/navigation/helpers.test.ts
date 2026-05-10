import { describe, expect, it } from 'bun:test';

import { createTheme } from '../../theme/createTheme';
import { resolveNavigationAccessibilityState, resolveNavigationItemPresentation } from './helpers';

describe('navigation helpers', () => {
  it('forces selected and disabled when active/disabled are true', () => {
    expect(
      resolveNavigationAccessibilityState(true, true, {
        selected: false,
        disabled: false,
      }),
    ).toEqual({
      selected: true,
      disabled: true,
    });
  });

  it('preserves user-provided state when not active/disabled', () => {
    expect(
      resolveNavigationAccessibilityState(false, false, {
        disabled: false,
        selected: false,
        expanded: true,
      }),
    ).toEqual({
      disabled: false,
      selected: false,
      expanded: true,
    });
  });

  it('resolves active presentation via primary soft semantics', () => {
    const theme = createTheme();
    const state = { pressed: false, hovered: true, focused: false, disabled: false };
    const resolved = resolveNavigationItemPresentation(theme, {
      active: true,
      disabled: false,
      state,
    });

    expect(resolved.backgroundColor).toBe(theme.semantics.action.primary.softHover);
    expect(resolved.contentColor).toBe(theme.semantics.action.primary.base);
    expect(resolved.opacity).toBe(1);
  });

  it('resolves inactive presentation via neutral hover/active semantics', () => {
    const theme = createTheme();
    const state = { pressed: true, hovered: true, focused: false, disabled: false };
    const resolved = resolveNavigationItemPresentation(theme, {
      active: false,
      disabled: false,
      state,
    });

    expect(resolved.backgroundColor).toBe(theme.semantics.neutral.surfaceActive);
    expect(resolved.contentColor).toBe(theme.semantics.content.default);
    expect(resolved.opacity).toBe(1);
  });

  it('ignores hover/pressed presentation when disabled', () => {
    const theme = createTheme();
    const state = { pressed: true, hovered: true, focused: false, disabled: true };
    const resolved = resolveNavigationItemPresentation(theme, {
      active: true,
      disabled: true,
      state,
    });

    expect(resolved.backgroundColor).toBe(theme.semantics.action.primary.softBg);
    expect(resolved.contentColor).toBe(theme.semantics.content.muted);
    expect(resolved.opacity).toBe(0.72);
  });
});
