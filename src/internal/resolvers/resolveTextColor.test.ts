import { describe, expect, it } from 'bun:test';

import { createTheme } from '../../theme/createTheme';
import { resolveTextColor } from './resolveTextColor';

describe('resolveTextColor', () => {
  it('maps semantic text tones through content aliases', () => {
    const theme = createTheme();

    expect(resolveTextColor(theme, 'default')).toBe(theme.semantics.content.default);
    expect(resolveTextColor(theme, 'muted')).toBe(theme.semantics.content.muted);
    expect(resolveTextColor(theme, 'subtle')).toBe(theme.semantics.content.subtle);
    expect(resolveTextColor(theme, 'inverse')).toBe(theme.semantics.content.inverse);
  });

  it('supports semantic status tones for shared field and messaging copy', () => {
    const theme = createTheme();

    expect(resolveTextColor(theme, 'danger')).toBe(theme.semantics.danger.base);
    expect(resolveTextColor(theme, 'success')).toBe(theme.semantics.success.base);
    expect(resolveTextColor(theme, 'warning')).toBe(theme.semantics.warning.base);
  });
});
