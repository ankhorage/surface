import { readFileSync } from 'node:fs';

import { describe, expect, it } from 'bun:test';

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
    expect(SURFACE_PALETTE_COLORS.length).toBeGreaterThan(0);
    expect(SURFACE_STATUS_COLORS.length).toBeGreaterThan(0);
    expect(SURFACE_EMPHASES.length).toBeGreaterThan(0);
    expect(new Set(SURFACE_COLORS).size).toBe(SURFACE_COLORS.length);
    expect(new Set(SURFACE_EMPHASES).size).toBe(SURFACE_EMPHASES.length);
    for (const color of [...SURFACE_PALETTE_COLORS, ...SURFACE_STATUS_COLORS]) {
      expect(SURFACE_COLORS).toContain(color);
    }
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
