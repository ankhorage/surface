---
'@ankhorage/surface': major
---

**Breaking: Surface now consumes `@ankhorage/color-theory` as the sole runtime color engine**

### Removed APIs

- `AnkhTheme` type removed — replaced by `SurfaceTheme` (no deprecated alias)
- `ColorTone` re-export removed from Surface
- `colorTone` field removed from `ThemeConfig`/`ThemeModeConfig` — no longer accepted or read
- Tone-driven palette generation removed (`getColorToneRolePalette`, `RolePaletteKind`, etc.)
- Local `ColorScale` model removed — replaced by `ColorSwatch` / `GeneratedThemeSwatches` from `@ankhorage/color-theory`
- `ThemeTokens.scales` renamed to `ThemeTokens.swatches` (type is now `GeneratedThemeSwatches`)
- Direct `culori` dependency removed from Surface
- All local OKLCH helpers, `SCALE_STEPS`, `getHarmonyHues`, `generateColorScale`, `LIGHTNESS_CURVES`, `CHROMA_BY_STEP`, `SEMANTIC_STEPS`, and similar internals removed

### New APIs

- `SurfaceTheme` is now the public resolved runtime theme type
- `@ankhorage/color-theory` added as a direct runtime dependency
- `@ankhorage/contracts` updated to `^1.1.0` (no `colorTone` in `ThemeModeConfig`)
- `resolveSemanticColors()` exported from `colorEngine` — maps color-theory `SemanticColorToken` references to hex values from generated swatches
- Generated chromatic roles are ordinal only: `primary`, `secondary`, `tertiary`, `quaternary` — no `accent`, `highlight`, `surfaceTint`, or `base` role names in swatches
- Invalid primary colors now fail deterministically (throw) instead of silently falling back to blue
- `neutral` swatch is required and powers all foundation semantics (backgrounds, borders, text, disabled states)
- Primary color is preserved at swatch step `500`: `swatches.primary[500] === modeConfig.primaryColor`
- Readable foreground tokens derived centrally via `getReadableForeground()` from `@ankhorage/color-theory`

### Migration

Replace `AnkhTheme` with `SurfaceTheme` throughout your codebase.

Remove `colorTone` from any `ThemeConfig` or `ThemeModeConfig` objects — it is no longer a valid field.

Replace any reference to `theme.scales` with `theme.swatches`.
