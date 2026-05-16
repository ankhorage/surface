import { describe, expect, it } from 'bun:test';
import { readFileSync } from 'node:fs';

import type {
  SurfaceColor,
  SurfaceEmphasis,
  SurfacePaletteColor,
  SurfaceStatusColor,
} from './index';
import {
  SURFACE_COLORS,
  SURFACE_EMPHASES,
  SURFACE_PALETTE_COLORS,
  SURFACE_STATUS_COLORS,
} from './surfaceColor';

describe('surfaceColor public exports', () => {
  it('exports canonical runtime color and emphasis lists from the root entrypoint', () => {
    const indexSource = readFileSync(new URL('./index.ts', import.meta.url), 'utf8');

    expect(indexSource).toContain("from './surfaceColor';");
    expect(SURFACE_PALETTE_COLORS).toEqual([
      'primary',
      'secondary',
      'tertiary',
      'quaternary',
      'neutral',
    ]);
    expect(SURFACE_STATUS_COLORS).toEqual(['success', 'warning', 'error', 'info']);
    expect(SURFACE_COLORS).toEqual([...SURFACE_PALETTE_COLORS, ...SURFACE_STATUS_COLORS, 'danger']);
    expect(SURFACE_EMPHASES).toEqual(['default', 'muted', 'subtle', 'inverse']);
  });

  it('keeps root-imported type contracts aligned with runtime lists', () => {
    const paletteColor: SurfacePaletteColor = 'neutral';
    const statusColor: SurfaceStatusColor = 'info';
    const color: SurfaceColor = 'danger';
    const emphasis: SurfaceEmphasis = 'muted';

    expect(SURFACE_PALETTE_COLORS).toContain(paletteColor);
    expect(SURFACE_STATUS_COLORS).toContain(statusColor);
    expect(SURFACE_COLORS).toContain(color);
    expect(SURFACE_EMPHASES).toContain(emphasis);
  });
});
