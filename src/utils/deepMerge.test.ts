import { describe, expect, it } from 'bun:test';

import { deepMerge } from './deepMerge';

type UnknownObject = Record<string, unknown>;

describe('deepMerge', () => {
  it('should merge top-level properties', () => {
    const target: UnknownObject = { a: 1, b: 2 };
    const source: UnknownObject = { b: 3, c: 4 };
    const result = deepMerge(target, source);
    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  it('should deeply merge nested objects', () => {
    const target: UnknownObject = {
      theme: {
        colors: { primary: 'blue', background: 'white' },
        spacing: { m: 10 },
      },
    };
    const source: UnknownObject = {
      theme: {
        colors: { primary: 'red' },
        spacing: { l: 20 },
      },
    };
    const result = deepMerge(target, source);
    expect(result).toEqual({
      theme: {
        colors: { primary: 'red', background: 'white' },
        spacing: { m: 10, l: 20 },
      },
    });
  });

  it('should handle undefined in source by keeping target value', () => {
    const target = { a: 1 };
    const source = { a: undefined };
    const result = deepMerge(target, source);
    expect(result).toEqual({ a: 1 });
  });

  it('should handle null in source by overwriting target value', () => {
    const target: UnknownObject = { a: { b: 1 } };
    const source: UnknownObject = { a: null };
    const result = deepMerge(target, source);
    expect(result).toEqual({ a: null });
  });

  it('should not merge arrays, but overwrite them', () => {
    const target = { list: [1, 2] };
    const source = { list: [3] };
    const result = deepMerge(target, source);
    expect(result).toEqual({ list: [3] });
  });

  it('should handle merging an object into a non-object target value', () => {
    const target: UnknownObject = { a: 1 };
    const source: UnknownObject = { a: { b: 2 } };
    const result = deepMerge(target, source);
    expect(result).toEqual({ a: { b: 2 } });
  });

  it('should handle merging a non-object into an object target value', () => {
    const target: UnknownObject = { a: { b: 1 } };
    const source: UnknownObject = { a: 2 };
    const result = deepMerge(target, source);
    expect(result).toEqual({ a: 2 });
  });

  it('should return a new object and not mutate target', () => {
    const target = { a: { b: 1 } };
    const source = { a: { b: 2 } };
    const result = deepMerge(target, source);
    expect(result).not.toBe(target);
    expect(result.a).not.toBe(target.a);
    expect(target.a.b).toBe(1);
  });

  it('should handle complex ThemeConfig structures', () => {
    const target: UnknownObject = {
      id: 'theme-1',
      name: 'Default',
      light: {
        primaryColor: 'blue',
        harmony: 'monochromatic',
      },
      dark: {
        primaryColor: 'blue',
        harmony: 'monochromatic',
      },
    };
    const source: UnknownObject = {
      light: {
        primaryColor: 'red',
      },
    };
    const result = deepMerge(target, source);
    expect(result).toEqual({
      id: 'theme-1',
      name: 'Default',
      light: {
        primaryColor: 'red',
        harmony: 'monochromatic',
      },
      dark: {
        primaryColor: 'blue',
        harmony: 'monochromatic',
      },
    });
  });
});
