# Surface Release Checklist

Surface is ready to freeze for downstream consumption when these conditions hold:

## Public API

- Root exports match the intended package surface.
- No internal focus, overlay, or resolver infrastructure is exported publicly.
- Shared props such as `variant`, `tone`, `size`, `disabled`, `readOnly`, `invalid`, and `testID` are intentional and consistent across comparable components.

## Theming

- Components prefer semantic aliases over ad hoc colors.
- Light and dark mode behavior stays coherent across actions, fields, badges, and overlays.
- Disabled, invalid, subtle, inverse, and danger states stay consistent across component families.

## Accessibility

- Modal-like overlays trap focus on web and restore focus on dismiss.
- Menu and tabs support keyboard navigation.
- Selection controls keep correct screen-reader roles and do not conflate `readOnly` with `disabled`.
- Icon-only actions provide accessible labels.

## Cross-platform parity

- Hover behavior is web-only and non-breaking elsewhere.
- Focus-visible behavior is appropriate on web.
- Overlay layering and anchoring degrade predictably across targets.

## Tests and release discipline

- Root exports are covered by regression tests.
- Semantic tone and state rules are covered by pure tests.
- Docs examples remain importable/type-safe.
- Release notes are added through Changesets before publishing.

## Boundary

If new work starts looking like a product pattern instead of a reusable foundation primitive, it should move to ZORA instead of extending Surface.
