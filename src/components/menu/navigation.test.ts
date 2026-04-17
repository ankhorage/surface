import { describe, expect, it } from 'bun:test';

import { resolveNextMenuIndex } from './navigation';

describe('resolveNextMenuIndex', () => {
  it('cycles down and up through the menu items', () => {
    expect(resolveNextMenuIndex(3, 0, 'ArrowDown')).toBe(1);
    expect(resolveNextMenuIndex(3, 0, 'ArrowUp')).toBe(2);
  });

  it('supports home and end navigation', () => {
    expect(resolveNextMenuIndex(4, 2, 'Home')).toBe(0);
    expect(resolveNextMenuIndex(4, 1, 'End')).toBe(3);
  });
});
