# @ankhorage/surface

`@ankhorage/surface` is the render-foundation package extracted from Ankhorage.
It owns layout primitives, responsive helpers, theming, typography, generic font and
translation bridges, and built-in Expo-backed icon rendering.

It does not own manifest rendering, action execution, Studio authoring, plugin orchestration,
or CLI generation. Those concerns stay in the Ankhorage monorepo.

## Installation

Install Surface with its required shared contract package and React Native peers:

```bash
bun add @ankhorage/surface @ankhorage/contracts
bun add react react-native
```

If you use the built-in `Icon` primitive, install the Expo icon peers in the host app too:

```bash
bun add @expo/vector-icons expo-font
```

## Basic Usage

```tsx
import { Box, Heading, Icon, Stack, ThemeProvider } from '@ankhorage/surface';

const theme = {
  id: 'app',
  name: 'App',
  mode: 'light',
  colors: {
    primary: '#2563eb',
  },
};

export function Example() {
  return (
    <ThemeProvider initialConfig={theme}>
      <Stack gap="m">
        <Heading level={1}>Hello</Heading>
        <Box p="m">
          <Icon name="home" provider="Ionicons" />
        </Box>
      </Stack>
    </ThemeProvider>
  );
}
```

## Theming

Serialized theme configuration types are imported from `@ankhorage/contracts`.
Surface owns theme creation, resolved runtime theme objects, token lookup, and component
consumption of those tokens.

## Scope

`@ankhorage/surface` includes:

- layout primitives
- heading and icon primitives
- theme creation and theme context
- responsive utilities
- generic font and translation bridges
- render-only utilities

`@ankhorage/surface` does not include:

- manifest rendering
- runtime action execution
- Studio panels or authoring metadata
- CLI or project scaffolding logic
- low-code configuration workflows
