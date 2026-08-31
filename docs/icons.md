# Portable icon contract

Surface renders icons with package-per-family React Native Vector Icons packages. It uses each package's `/static` entry point, so Surface never imports Expo or performs Expo font loading at runtime.

The supported provider IDs are intentionally limited to families used by Surface and its current ZORA consumer contract:

| Provider              | Scoped package                                     | Supported variants              |
| --------------------- | -------------------------------------------------- | ------------------------------- |
| `Ionicons`            | `@react-native-vector-icons/ionicons`              | Single style; omit `variant`    |
| `FontAwesome`         | `@react-native-vector-icons/fontawesome`           | Single style; omit `variant`    |
| `FontAwesome5`        | `@react-native-vector-icons/fontawesome5`          | `regular`, `solid`, and `brand` |
| `FontAwesome6`        | `@react-native-vector-icons/fontawesome6`          | `regular`, `solid`, and `brand` |
| `MaterialDesignIcons` | `@react-native-vector-icons/material-design-icons` | Single style; omit `variant`    |

## Public API

`Icon` uses a discriminated provider/style contract. Ionicons is the default provider, and the two single-style providers reject `variant`. FontAwesome5 and FontAwesome6 require an explicit variant so Surface never guesses which glyph map or font a name belongs to:

```tsx
<Icon name="home-outline" />
<Icon name="github" provider="FontAwesome" />

<Icon name="microsoft" provider="FontAwesome5" variant="brand" />
<Icon name="video" provider="FontAwesome5" variant="solid" />
<Icon name="x-twitter" provider="FontAwesome6" variant="brand" />
<Icon name="bookshelf" provider="MaterialDesignIcons" />
```

Each provider/variant branch carries the corresponding RNVI icon-name type. Unsupported provider/variant combinations and names outside the selected glyph map fail during TypeScript checking. In particular, ZORA's Zoom icon is represented as `FontAwesome5` + `video` + `solid`; it is not routed through the brand font.

`MaterialIcons`, `MaterialCommunityIcons`, and the historical `material-community` alias are not provider IDs in the current contract. Material Community glyphs use the scoped React Native Vector Icons package through the canonical `MaterialDesignIcons` provider.

## Consumer font setup

Surface owns provider selection and rendering, while the consuming application owns font availability:

- Bare React Native Android applications receive the fonts through autolinking. Bare iOS applications must register the selected package fonts in `UIAppFonts` using the upstream RNVI setup flow, then rebuild.
- Expo development builds must list the five scoped packages as config plugins and rebuild the native client. Surface does not add that Expo configuration itself.
- React Native Web applications must expose the corresponding `.ttf` files with `@font-face` declarations. FontAwesome5 and FontAwesome6 consumers must expose every selected style font (`Regular`, `Solid`, and/or `Brands`), using the font-family emitted by RNVI. The component markup is server-renderable and hydration-stable; font asset serving remains application-owned.

Static imports intentionally do not support Expo Go's runtime font-loading path. The Expo 57 roadmap uses development builds for native dependency acceptance.
