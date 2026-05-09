---
'@ankhorage/surface': patch
---

Support canonical icon provider aliases for Expo vector icons.

Surface now resolves provider strings such as `material-community` and `material-community-icons` to Expo's `MaterialCommunityIcons` export, so serialized route icons can use stable provider identifiers without falling back to Ionicons.
