---
'@ankhorage/surface': major
---

Replace the public `tone` model with explicit `color` and `emphasis` APIs and export canonical
Surface color/emphasis constants and types from the root package entrypoint.

### Breaking changes

- Renamed semantic styling props from `tone` to `color` across public components.
- Renamed content contrast props from `tone` to `emphasis` for text-like APIs.
- Replaced `ComponentTone`/`TextTone`/`ToastTone` public typings with:
  - `SurfaceColor`
  - `SurfaceEmphasis`
  - `SurfacePaletteColor`
  - `SurfaceStatusColor`
- Added root exports for:
  - `SURFACE_PALETTE_COLORS`
  - `SURFACE_STATUS_COLORS`
  - `SURFACE_COLORS`
  - `SURFACE_EMPHASES`

### Why

The previous `tone` vocabulary mixed semantic color roles and text emphasis in one concept.
This change separates those concerns and establishes a single canonical color/emphasis source of
truth for downstream packages.

### Migration

- Replace `tone` props used for semantic role selection with `color`.
- Replace `tone` props used for text contrast with `emphasis`.
- Update imports to use `SurfaceColor`/`SurfaceEmphasis` and the new `SURFACE_*` runtime lists
  from `@ankhorage/surface`.
