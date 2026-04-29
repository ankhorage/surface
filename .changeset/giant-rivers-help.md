---
'@ankhorage/surface': patch
---

Fix infinite render loop in overlay portal

Splits overlay context into state and actions to prevent Portal from
re-registering overlays on every render. Fixes "Maximum update depth exceeded"
when opening Modal and Drawer.
