import { describe, expect, it } from 'bun:test';

import { resolveNextMenuIndex } from './navigation';

describe('resolveNextMenuIndex', () => {
  const items = [{}, { disabled: true }, {}, {}];

  it('cycles down and up through the menu items', () => {
    expect(resolveNextMenuIndex(items, 0, 'ArrowDown')).toBe(2);
    expect(resolveNextMenuIndex(items, 0, 'ArrowUp')).toBe(3);
  });

  it('supports home and end navigation', () => {
    expect(resolveNextMenuIndex(items, 2, 'Home')).toBe(0);
    expect(resolveNextMenuIndex(items, 0, 'End')).toBe(3);
  });

  it('returns -1 when all items are disabled', () => {
    expect(resolveNextMenuIndex([{ disabled: true }], 0, 'ArrowDown')).toBe(-1);
  });
});
