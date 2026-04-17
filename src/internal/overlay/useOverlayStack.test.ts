import { describe, expect, it } from 'bun:test';

import { sortOverlayEntries, type OverlayEntry } from './useOverlayStack';

describe('sortOverlayEntries', () => {
  it('sorts overlays by z-index then registration order', () => {
    const overlays: OverlayEntry[] = [
      { id: 'menu-1', layer: 'menu', node: null, order: 2, zIndex: 1201 },
      { id: 'modal-1', layer: 'modal', node: null, order: 0, zIndex: 1000 },
      { id: 'menu-0', layer: 'menu', node: null, order: 1, zIndex: 1200 },
    ];

    expect(sortOverlayEntries(overlays).map((entry) => entry.id)).toEqual([
      'modal-1',
      'menu-0',
      'menu-1',
    ]);
  });
});
