# @ankhorage/surface

A cross-platform UI foundation for **React Native + Web**.

Build consistent, themeable apps with:
- layout primitives
- design tokens & theming
- responsive helpers
- accessible components
- overlay + interaction systems

---

## Why use this?

React Native gives you primitives.  
Surface gives you **a system**.

- consistent spacing, typography, and colors
- unified interaction states (hover, press, focus)
- works across native + web
- no design-system setup required
- no runtime / no-code abstractions

---

## Quick start

```bash
bun add @ankhorage/surface @ankhorage/contracts
```

Wrap your app:

```tsx
import { ThemeProvider } from '@ankhorage/surface'

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
}

export default function App() {
  return (
    <ThemeProvider initialConfig={themeConfig}>
      <Main />
    </ThemeProvider>
  )
}
```

Use components:

```tsx
import { Stack, Text, Button, Card, TextInput } from '@ankhorage/surface'

export function Example() {
  return (
    <Stack gap="m">
      <Text variant="body">Welcome</Text>

      <TextInput placeholder="Email" />

      <Button tone="primary">Sign in</Button>

      <Card>
        <Text variant="bodySmall">Content</Text>
      </Card>
    </Stack>
  )
}
```

---

## What you get

### Layout
- `Box`, `Stack`, `Inline`, `Grid`, `Container`
- `Spacer`, `Divider`, `Center`, `Surface`

### Typography
- `Text`, `Heading`

### Actions
- `Button`, `IconButton`

### Data / display
- `Card`, `Badge`, `ListItem`

### Forms
- `TextInput`, `Textarea`
- `Field`, `Label`, `HelperText`
- `Checkbox`, `Radio`, `Switch`

### Overlays
- `Modal`, `Drawer`
- `Tabs`, `Toast`
- `Tooltip`, `Menu`

---

## Core ideas

### 1. Theme-driven
Everything uses semantic tokens:

```tsx
<Button tone="primary" variant="solid" />
```

No hardcoded colors.

---

### 2. Consistent states

All interactive components share:

- hover (web)
- press
- focus-visible
- disabled

No reimplementation per component.

---

### 3. Composable

Everything builds on primitives:

```tsx
<Field label="Email">
  <TextInput />
</Field>
```

---

### 4. Cross-platform first

- React Native
- Expo
- React Native Web

Same API everywhere.

---

## What this is NOT

- ❌ Not a full design system / UI kit
- ❌ Not a form engine
- ❌ Not a router or app framework
- ❌ Not a low-code runtime

---

## When to use it

Use Surface if you want:

- a clean starting point for RN + Web apps
- consistent UI without reinventing components
- a scalable design foundation

---

## Status

- Phase 1: primitives + base components ✅
- Phase 2: form + control layer ✅
- Phase 3: overlays + navigation ✅

---

## License

MIT
