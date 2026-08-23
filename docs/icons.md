# Portable icon contract

Surface renders icons with package-per-family React Native Vector Icons packages. It uses each package's `/static` entry point, so Surface never imports Expo or performs Expo font loading at runtime.

The supported provider IDs are intentionally limited to families used by Surface and its current ZORA consumer contract:

| Provider       | Scoped package                            | Intended use                               |
| -------------- | ----------------------------------------- | ------------------------------------------ |
| `Ionicons`     | `@react-native-vector-icons/ionicons`     | Surface default and general UI icons       |
| `FontAwesome`  | `@react-native-vector-icons/fontawesome`  | ZORA OAuth brand icons from Font Awesome 4 |
| `FontAwesome5` | `@react-native-vector-icons/fontawesome5` | ZORA OAuth brand icons from Font Awesome 5 |
| `FontAwesome6` | `@react-native-vector-icons/fontawesome6` | ZORA OAuth brand icons from Font Awesome 6 |

`MaterialIcons`, `MaterialCommunityIcons`, and the historical `material-community` alias are not part of the supported contract. They appeared only in tests for the removed Expo namespace resolver.

## Consumer font setup

Surface owns provider selection and rendering, while the consuming application owns font availability:

- Bare React Native Android applications receive the fonts through autolinking. Bare iOS applications must register the selected package fonts in `UIAppFonts` using the upstream RNVI setup flow, then rebuild.
- Expo development builds must list the four scoped packages as config plugins and rebuild the native client. Surface does not add that Expo configuration itself.
- React Native Web applications must expose the corresponding `.ttf` files with `@font-face` declarations. The component markup is server-renderable and hydration-stable; font asset serving remains application-owned.

Static imports intentionally do not support Expo Go's runtime font-loading path. The Expo 57 roadmap uses development builds for native dependency acceptance.
