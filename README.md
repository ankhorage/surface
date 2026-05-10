# surface

A minimal design foundation for React Native and React Native Web.

## 🎯 What you get

- Predictable layout system
- Theme-driven styling
- Cross-platform consistency

## ✨ Features

- Token-based theming
- Layout primitives
- Responsive utilities

## 🚀 Installation

```bash
bun add @ankhorage/surface
```

## 📦 Usage

```tsx
import { Box, Image, Text } from '@ankhorage/surface';

<Box padding="lg" gap="md">
  <Image
    alt="Hero image"
    fallbackSource="https://example.com/hero-fallback.jpg"
    fit="cover"
    height={240}
    radius="l"
    source="https://example.com/hero.jpg"
    width="100%"
  />
  <Text variant="title">Title</Text>
  <Text>Content</Text>
</Box>;
```

## 🧪 Use Cases

- Design system foundations
- Cross-platform layout abstraction

## 🧠 Why this exists

Bridges the gap between raw primitives and full UI frameworks.

## 🧭 Navigation chrome primitives

Surface includes **router-agnostic navigation chrome** building blocks (tab bars, drawer lists, route items).

- These components **do not** implement routing, route state, deep linking, or screen switching.
- Use **Expo Router / React Navigation** for navigation mechanics, and render UI with Surface by passing `active`, `disabled`, and `onPress`.
