# @ankhorage/surface

Stable UI foundation for React Native and React Native Web.

Surface gives application packages a consistent layer for layout, typography, theming, forms, and overlays without turning the foundation into a full product UI kit. It is intended to be the reusable base beneath ZORA and other RN/RN-web packages.

## Why Surface?

- Cross-platform primitives and components with one API for React Native and React Native Web.
- Semantic theming instead of ad hoc component colors.
- Shared interaction, field-state, and overlay patterns.
- Small but complete foundation layer: enough to build on, not a product-pattern kit.

## Install

```bash
bun add @ankhorage/surface @ankhorage/contracts
```

Peer dependencies:

- `react`
- `react-native`
- `@expo/vector-icons` for icon rendering
- `expo-font` when using runtime font registration

## Quick Start

```tsx
import React from 'react';
import { Button, Stack, Text, ThemeProvider } from '@ankhorage/surface';

const themeConfig = {
  id: 'app',
  name: 'App',
  light: {
    primaryColor: '#2563eb',
    harmony: 'monochromatic',
    systemTone: 'neutral',
  },
  dark: {
    primaryColor: '#2563eb',
    harmony: 'monochromatic',
    systemTone: 'neutral',
  },
};

export function App() {
  return (
    <ThemeProvider initialConfig={themeConfig}>
      <Stack gap="m" p="l">
        <Text variant="body">Surface is ready.</Text>
        <Button>Continue</Button>
      </Stack>
    </ThemeProvider>
  );
}
```

## Real-World Example

```tsx
import React from 'react';
import {
  Button,
  Field,
  HelperText,
  Modal,
  Stack,
  Text,
  TextInput,
  ThemeProvider,
} from '@ankhorage/surface';

export function SignInCard() {
  return (
    <ThemeProvider initialConfig={themeConfig}>
      <Stack gap="m" p="l">
        <Field helperText="We only use this for sign-in." label="Email">
          <TextInput autoCapitalize="none" keyboardType="email-address" />
        </Field>

        <Field errorText="Password is required." invalid label="Password">
          <TextInput secureTextEntry />
        </Field>

        <Button fullWidth>Sign in</Button>

        <Modal visible={false}>
          <Text variant="body">Overlay content uses the same theme + spacing system.</Text>
        </Modal>

        <HelperText tone="muted">
          Forms, controls, and overlays are meant to compose without extra glue code.
        </HelperText>
      </Stack>
    </ThemeProvider>
  );
}
```

## Included APIs

### Providers and theme

- `ThemeProvider`, `useTheme`, `useThemeConfig`, `useThemeMode`
- `FontProvider`, `useFontContext`
- `TranslationProvider`, `useTranslationContext`
- `createTheme`, `resolveToken`

### Responsive helpers

- `ResponsiveProvider`, `useResponsiveRuntime`, `useBreakpoint`
- `BREAKPOINTS`, `BREAKPOINT_ORDER`, `getBreakpointFromWidth`, `resolveResponsive`

### Layout

- `Box`, `Surface`
- `Stack`, `Inline`, `Grid`, `Template`
- `Container`, `Center`, `Divider`, `Spacer`, `Show`

### Typography and primitives

- `Text`, `Heading`, `Icon`, `ButtonBase`

### Actions and display

- `Button`, `IconButton`
- `Card`, `Badge`, `ListItem`

### Forms and controls

- `Field`, `Label`, `HelperText`
- `TextInput`, `Textarea`
- `Checkbox`, `Radio`, `Switch`

### Overlays and navigation

- `Modal`, `Drawer`, `Tooltip`, `Menu`
- `Tabs`, `TabList`, `Tab`, `TabPanel`
- `ToastProvider`, `Toast`, `useToast`

### Utilities

- `deepMerge`, `isDeepEqual`

## Docs-Lite Examples

Small usage references live in
[docs/examples.md](https://github.com/ankhorage/surface/blob/main/docs/examples.md):

- provider shell
- form composition
- modal and drawer composition
- tabs and menu usage
- checkbox, radio, and switch usage
- theme override example

## Scope Boundary

Surface is for reusable foundation concerns:

- layout primitives
- text and icon primitives
- semantic tokens and theming
- responsive helpers
- interaction primitives
- form controls
- overlays and navigation primitives

Surface is not for ready-made product patterns:

- auth flows
- app shells and dashboards
- data tables and charts
- settings panels
- product-specific dialogs and layouts

Those belong in ZORA.

## Status

Surface is in the stabilization phase: the goal is to keep the public API deliberate, typed, and dependency-ready for downstream packages.

- Foundation work stays in Surface when it is broadly reusable across RN and RN Web.
- Product-like patterns should move to ZORA instead of expanding Surface into a UI kit.
- Release and freeze expectations are tracked in
  [docs/release-checklist.md](https://github.com/ankhorage/surface/blob/main/docs/release-checklist.md).

## Changelog

Version history is maintained in [CHANGELOG.md](./CHANGELOG.md). New release notes should flow through Changesets so the published changelog matches the package surface.

## License

MIT
