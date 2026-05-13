# @ankhorage/surface

## 1.4.0

### Minor Changes

- 247dd05: Add a `ScrollArea` layout primitive for themed, responsive scroll containers.

  `ScrollArea` wraps React Native `ScrollView` behind Surface so higher-level packages such as ZORA can build screen-level scrolling without importing raw React Native scroll primitives directly.

## 1.3.1

### Patch Changes

- 35a27e9: Update packages

## 1.3.0

### Minor Changes

- 4e168c9: Add a low-level `AppBar` layout primitive with leading, center, and trailing slots.

  The new primitive is navigator-agnostic, supports optional safe-area top padding via `react-native-safe-area-context`, and keeps visual styling minimal with an optional divider. It is intended as the Surface foundation for future product-facing AppBar components in ZORA.

## 1.2.0

### Minor Changes

- 73fd969: Add a render-only Image primitive.

  This introduces a Surface `Image` component with string and React Native image source support, token-aware sizing and radius props, `fit`/`resizeMode` behavior, accessibility label mapping, and provider-neutral `fallbackSource` handling for load errors.

## 1.1.0

### Minor Changes

- e7ee603: add router-agnostic chrome primitives

## 1.0.3

### Patch Changes

- c8c99de: Support canonical icon provider aliases for Expo vector icons.

  Surface now resolves provider strings such as `material-community` and `material-community-icons` to Expo's `MaterialCommunityIcons` export, so serialized route icons can use stable provider identifiers without falling back to Ionicons.

## 1.0.2

### Patch Changes

- de83ae5: Consume `@ankhorage/color-theory` semantic status helpers for danger/success/warning roles.

## 1.0.1

### Patch Changes

- c0c242d: update package

## 1.0.0

### Major Changes

- 67248af: **Breaking: Surface now consumes `@ankhorage/color-theory` as the sole runtime color engine**

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

## 0.2.4

### Patch Changes

- 598daa1: Add the standard package tooling baseline script and workflow files.

## 0.2.3

### Patch Changes

- 55908af: Align Surface color-tone role palette mappings with the background/foreground lane direction used by app-facing theme tooling.

## 0.2.2

### Patch Changes

- 1711172: Update @ankhorage/contracts

## 0.2.1

### Patch Changes

- 03e62a3: Release Trigger @ankhorage/contracts update

## 0.2.0

### Minor Changes

- d9c21be: Updates theme configuration to use `colorTone` / `ColorTone` from `@ankhorage/contracts` and aligns internal color-engine naming.

## 0.1.12

### Patch Changes

- 173d938: Export @types/culori as a regular dependency

## 0.1.11

### Patch Changes

- c3ed0d8: Update @ankhorage/contracts

## 0.1.10

### Patch Changes

- 01ace8c: update @ankhorage/contracts

## 0.1.9

### Patch Changes

- f454c88: Fix infinite render loop in overlay portal

  Splits overlay context into state and actions to prevent Portal from
  re-registering overlays on every render. Fixes "Maximum update depth exceeded"
  when opening Modal and Drawer.

## 0.1.8

### Patch Changes

- 2869a08: Update test file for package.json 'files' & 'exports'

## 0.1.7

### Patch Changes

- 24eb548: Fix eslint

## 0.1.6

### Patch Changes

- d4d6107: Export src/ for better Metro debugging. Enable inlineSources for builds

## 0.1.5

### Patch Changes

- Refresh the README copy so the published package overview, installation, usage, and positioning match the current messaging.

## 0.1.4

### Patch Changes

- Fix Expo Web icon rendering by importing `@expo/vector-icons` through a bundler-safe static module path instead of runtime `require` resolution.

## 0.1.3

### Patch Changes

- Fix Expo Web icon loading by resolving the runtime module loader from the local Metro `require` function before falling back to `globalThis.require`.

## 0.1.2

### Patch Changes

- Fix Expo Web icon loading by removing the `import.meta`-based runtime require path so Metro can bundle the package correctly.

## 0.1.1

### Patch Changes

- 5aea65c: Stabilize the public package surface for Phase 4 by rewriting the adoption docs, broadening shared tone and variant coverage, tightening read-only control semantics, hardening menu and tab accessibility behavior, and adding regression tests for exports and state contracts.

## 0.1.0

### Minor Changes

- Add Phase-1 design-system primitives and components, including shared semantic theme aliases,
  internal UI resolvers, the `Text` and `ButtonBase` primitives, new layout helpers, and the
  first reusable component wave: `Button`, `IconButton`, `Card`, `Badge`, `ListItem`, and
  `TextInput`.
- Add the Phase-2 form and control layer, including unified field-state and selection-control
  resolvers, form composition primitives (`Field`, `Label`, `HelperText`), `Textarea`, and the
  selection controls `Checkbox`, `Radio`, and `Switch`.
- Add the Phase-3 overlay and navigation layer, including portal and overlay-stack
  infrastructure, centralized focus management, and the new components `Modal`, `Drawer`,
  `Tabs`, `Toast`, `Tooltip`, and `Menu`.
- Refine the Phase-3 overlay and navigation layer by fixing disabled-item keyboard navigation
  in `Menu`, stabilizing tab registration in `Tabs`, recomputing overlay stack ordering after
  removals, and correcting toast timer and dismiss behavior.
- Adopt Changesets-based release tracking for the package, align release access with the
  public npm publish config, add GitHub Actions CI for lint, test, build, and changeset
  validation, and add release automation for npm publishing.

## 0.0.2

### Patch Changes

- b556c63: Replace ESLint and Prettier with @ankhorage/devtools
