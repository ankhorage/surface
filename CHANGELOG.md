# @ankhorage/surface

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
