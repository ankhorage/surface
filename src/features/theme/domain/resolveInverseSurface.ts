import { parseHexColorOrThrow } from '@ankhorage/color-theory';

import type {
  SurfaceContrastDiagnostic,
  SurfaceSemantics,
  SurfaceTheme,
} from '../../../types/theme';
import { SURFACE_COLOR_POLICY } from '../constants';
import type { createSurfaceColorDiagnosticCollector } from './createSurfaceColorDiagnosticCollector';

type Collector = ReturnType<typeof createSurfaceColorDiagnosticCollector>;

/*** Resolve inverted surface levels and measure their effective separation. */
export function resolveInverseSurface(
  theme: SurfaceTheme,
  lightSurface: boolean,
  collector: Collector,
): { surface: SurfaceSemantics; surfaceSeparation: SurfaceContrastDiagnostic[] } {
  const { neutral } = theme.swatches;
  const base = theme.semantics.surface.inverse;
  const adjacent = lightSurface ? neutral[100] : neutral[800];
  const sunken = lightSurface ? neutral[200] : neutral[950];
  const surface: SurfaceSemantics = {
    ...theme.semantics.surface,
    default: base,
    subtle: adjacent,
    raised: adjacent,
    sunken,
    overlay: adjacent,
    disabled: adjacent,
    inverse: theme.semantics.surface.default,
  };
  return { surface, surfaceSeparation: measureInverseSurfaceSeparation(surface, collector) };
}

/*** Measure the returned surface levels against their shared sunken background. */
function measureInverseSurfaceSeparation(
  surface: SurfaceSemantics,
  collector: Collector,
): SurfaceContrastDiagnostic[] {
  const background = parseHexColorOrThrow(surface.sunken);
  const surfaces = [
    ['surface.default', surface.default],
    ['surface.raised', surface.raised],
    ['surface.disabled', surface.disabled],
  ] as const;
  return surfaces.map(([id, foreground]) =>
    collector.measureSurface(
      id,
      parseHexColorOrThrow(foreground),
      background,
      SURFACE_COLOR_POLICY.surfaceSeparation,
    ),
  );
}
