import { describe, expect, test } from 'bun:test';

import type { SurfaceTheme } from '../theme/types';
import { resolveBoxStyles } from './helpers';

const mockTheme = {
  spacing: {
    s: 4,
    m: 8,
    l: 16,
  },
  radii: {
    m: 8,
  },
  colors: {
    primary: '#007AFF',
    surface: '#FFFFFF',
  },
} as unknown as SurfaceTheme;

describe('resolveBoxStyles', () => {
  test('resolves padding and margins correctly', () => {
    const styles = resolveBoxStyles(mockTheme, 'base', {
      p: 's',
      m: 8,
    });
    expect(styles.padding).toBe(4);
    expect(styles.margin).toBe(8);
  });

  test('resolves responsive properties', () => {
    const props = {
      p: { base: 's', lg: 'l' },
    };
    const baseStyles = resolveBoxStyles(mockTheme, 'base', props);
    const lgStyles = resolveBoxStyles(mockTheme, 'lg', props);
    expect(baseStyles.padding).toBe(4);
    expect(lgStyles.padding).toBe(16);
  });

  test('resolves colors and border styles', () => {
    const styles = resolveBoxStyles(mockTheme, 'base', {
      bg: 'primary',
      radius: 'm',
      borderWidth: 1,
      borderColor: 'surface',
    });
    expect(styles.backgroundColor).toBe('#007AFF');
    expect(styles.borderRadius).toBe(8);
    expect(styles.borderWidth).toBe(1);
    expect(styles.borderColor).toBe('#FFFFFF');
  });

  test('resolves spacing tokens for dimension props and preserves raw strings', () => {
    const styles = resolveBoxStyles(mockTheme, 'base', {
      width: 'm',
      minHeight: 'l',
      maxWidth: '50%',
    });

    expect(styles.width).toBe(8);
    expect(styles.minHeight).toBe(16);
    expect(styles.maxWidth).toBe('50%');
  });

  test('handles undefined props gracefully', () => {
    const styles = resolveBoxStyles(mockTheme, 'base', {});
    expect(styles.padding).toBeUndefined();
    expect(styles.margin).toBeUndefined();
  });
});
