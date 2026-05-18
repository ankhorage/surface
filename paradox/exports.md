# Public API

## ActionSemantics

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:61:1`

### Members

| Name    | Kind     | Type            | Required | Description |
| ------- | -------- | --------------- | -------- | ----------- |
| danger  | property | `RoleSemantics` | yes      |             |
| neutral | property | `RoleSemantics` | yes      |             |
| primary | property | `RoleSemantics` | yes      |             |

## ActionSheet

Kind: `function`
Module: `src/components/action-sheet/ActionSheet.tsx`
Source: `src/components/action-sheet/ActionSheet.tsx:13:1`

### Signatures

- `({
  visible,
  onDismiss,
  title,
  description,
  children,
  cancelLabel = 'Cancel',
  closeOnBackdrop = true,
  testID,
}: ActionSheetProps) => React.JSX.Element | null`
  - {
    visible,
    onDismiss,
    title,
    description,
    children,
    cancelLabel = 'Cancel',
    closeOnBackdrop = true,
    testID,
    }: `ActionSheetProps`
  - returns: `React.JSX.Element | null`

## ActionSheetItem

Kind: `function`
Module: `src/components/action-sheet/ActionSheetItem.tsx`
Source: `src/components/action-sheet/ActionSheetItem.tsx:8:1`

### Signatures

- `({
  label,
  description,
  leading,
  trailing,
  color,
  disabled = false,
  selected = false,
  onPress,
  testID,
}: ActionSheetItemProps) => React.JSX.Element`
  - {
    label,
    description,
    leading,
    trailing,
    color,
    disabled = false,
    selected = false,
    onPress,
    testID,
    }: `ActionSheetItemProps`
  - returns: `React.JSX.Element`

## ActionSheetItemProps

Kind: `type`
Module: `src/components/action-sheet/types.ts`
Source: `src/components/action-sheet/types.ts:16:1`

### Members

| Name        | Kind     | Type                                                                                                                                          | Required | Description |
| ----------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| color       | property | `"primary" \| "secondary" \| "tertiary" \| "quaternary" \| "neutral" \| "success" \| "warning" \| "error" \| "info" \| "danger" \| undefined` | no       |             |
| description | property | `React.ReactNode`                                                                                                                             | no       |             |
| disabled    | property | `boolean \| undefined`                                                                                                                        | no       |             |
| label       | property | `React.ReactNode`                                                                                                                             | yes      |             |
| leading     | property | `React.ReactNode`                                                                                                                             | no       |             |
| onPress     | property | `(() => void) \| undefined`                                                                                                                   | no       |             |
| selected    | property | `boolean \| undefined`                                                                                                                        | no       |             |
| testID      | property | `string \| undefined`                                                                                                                         | no       |             |
| trailing    | property | `React.ReactNode`                                                                                                                             | no       |             |

## ActionSheetProps

Kind: `type`
Module: `src/components/action-sheet/types.ts`
Source: `src/components/action-sheet/types.ts:5:1`

### Members

| Name            | Kind     | Type                        | Required | Description |
| --------------- | -------- | --------------------------- | -------- | ----------- |
| cancelLabel     | property | `React.ReactNode`           | no       |             |
| children        | property | `React.ReactNode`           | no       |             |
| closeOnBackdrop | property | `boolean \| undefined`      | no       |             |
| description     | property | `React.ReactNode`           | no       |             |
| onDismiss       | property | `(() => void) \| undefined` | no       |             |
| testID          | property | `string \| undefined`       | no       |             |
| title           | property | `React.ReactNode`           | no       |             |
| visible         | property | `boolean`                   | yes      |             |

## AppBar

Kind: `function`
Module: `src/layout/AppBar.tsx`
Source: `src/layout/AppBar.tsx:18:1`

### Signatures

- `({
  leading,
  trailing,
  children,
  safeAreaTop = true,
  divider = false,
  contentStyle,
  bg,
  style,
  ...props
}: AppBarProps) => React.JSX.Element`
  - {
    leading,
    trailing,
    children,
    safeAreaTop = true,
    divider = false,
    contentStyle,
    bg,
    style,
    ...props
    }: `AppBarProps`
  - returns: `React.JSX.Element`

## AppBarProps

Kind: `type`
Module: `src/layout/AppBar.tsx`
Source: `src/layout/AppBar.tsx:9:1`

### Members

| Name               | Kind     | Type                                                                                                                                | Required | Description |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                               | no       |             |
| accessibilityRole  | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                              | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>` | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| children           | property | `React.ReactNode`                                                                                                                   | no       |             |
| contentStyle       | property | `StyleProp<ViewStyle>`                                                                                                              | no       |             |
| divider            | property | `boolean \| undefined`                                                                                                              | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| leading            | property | `React.ReactNode`                                                                                                                   | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                        | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                                         | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                     | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                              | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| safeAreaTop        | property | `boolean \| undefined`                                                                                                              | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                                                                              | no       |             |
| testID             | property | `string \| undefined`                                                                                                               | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| trailing           | property | `React.ReactNode`                                                                                                                   | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |

## Badge

Kind: `function`
Module: `src/components/badge/Badge.tsx`
Source: `src/components/badge/Badge.tsx:9:1`

### Signatures

- `({
  content,
  variant = 'soft',
  color = 'primary',
  size = 's',
  testID,
}: BadgeProps) => React.JSX.Element`
  - {
    content,
    variant = 'soft',
    color = 'primary',
    size = 's',
    testID,
    }: `BadgeProps`
  - returns: `React.JSX.Element`

## BadgeProps

Kind: `type`
Module: `src/components/badge/types.ts`
Source: `src/components/badge/types.ts:7:1`

### Members

| Name    | Kind     | Type                                                                                                                                          | Required | Description |
| ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| color   | property | `"primary" \| "secondary" \| "tertiary" \| "quaternary" \| "neutral" \| "success" \| "warning" \| "error" \| "info" \| "danger" \| undefined` | no       |             |
| content | property | `React.ReactNode`                                                                                                                             | no       |             |
| size    | property | `ControlSize \| undefined`                                                                                                                    | no       |             |
| testID  | property | `string \| undefined`                                                                                                                         | no       |             |
| variant | property | `"solid" \| "outline" \| "soft" \| undefined`                                                                                                 | no       |             |

## BorderSemantics

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:55:1`

### Members

| Name    | Kind     | Type     | Required | Description |
| ------- | -------- | -------- | -------- | ----------- |
| default | property | `string` | yes      |             |
| focus   | property | `string` | yes      |             |
| strong  | property | `string` | yes      |             |

## Box

Kind: `function`
Module: `src/layout/Box.tsx`
Source: `src/layout/Box.tsx:49:1`

### Signatures

- `({
  accessible,
  accessibilityLabel,
  accessibilityRole,
  accessibilityState,
  children,
  pointerEvents,
  style,
  testID,
  ...props
}: BoxProps) => React.JSX.Element`
  - {
    accessible,
    accessibilityLabel,
    accessibilityRole,
    accessibilityState,
    children,
    pointerEvents,
    style,
    testID,
    ...props
    }: `BoxProps`
  - returns: `React.JSX.Element`

## BoxProps

Kind: `type`
Module: `src/layout/Box.tsx`
Source: `src/layout/Box.tsx:14:1`

### Members

| Name               | Kind     | Type                                                                                                                                | Required | Description |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                               | no       |             |
| accessibilityRole  | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                              | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>` | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| children           | property | `React.ReactNode`                                                                                                                   | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                        | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                                         | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                     | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                              | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                                                                              | no       |             |
| testID             | property | `string \| undefined`                                                                                                               | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |

## Breakpoint

Kind: `unknown`
Module: `src/core/responsive/types.ts`
Source: `src/core/responsive/types.ts:3:1`

## BREAKPOINT_ORDER

Kind: `value`
Module: `src/core/responsive/breakpoints.ts`
Source: `src/core/responsive/breakpoints.ts:9:14`

## BREAKPOINTS

Kind: `value`
Module: `src/core/responsive/breakpoints.ts`
Source: `src/core/responsive/breakpoints.ts:1:14`

## Button

Kind: `function`
Module: `src/components/button/Button.tsx`
Source: `src/components/button/Button.tsx:12:1`

### Signatures

- `({
  children,
  variant = 'solid',
  color = 'primary',
  size = 'm',
  disabled = false,
  loading = false,
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  onPress,
  testID,
  ...props
}: ButtonProps) => React.JSX.Element`
  - {
    children,
    variant = 'solid',
    color = 'primary',
    size = 'm',
    disabled = false,
    loading = false,
    leadingIcon,
    trailingIcon,
    fullWidth = false,
    onPress,
    testID,
    ...props
    }: `ButtonProps`
  - returns: `React.JSX.Element`

## ButtonBase

Kind: `function`
Module: `src/primitives/button-base/ButtonBase.tsx`
Source: `src/primitives/button-base/ButtonBase.tsx:28:1`

### Signatures

- `({
  children,
  disabled = false,
  onPress,
  onLongPress,
  accessibilityLabel,
  accessibilityRole = 'button',
  accessibilityState,
  style,
  testID,
  ...props
}: ButtonBaseProps) => React.JSX.Element`
  - {
    children,
    disabled = false,
    onPress,
    onLongPress,
    accessibilityLabel,
    accessibilityRole = 'button',
    accessibilityState,
    style,
    testID,
    ...props
    }: `ButtonBaseProps`
  - returns: `React.JSX.Element`

## ButtonBaseProps

Kind: `type`
Module: `src/primitives/button-base/types.ts`
Source: `src/primitives/button-base/types.ts:7:1`

### Members

| Name               | Kind     | Type                                                                                                                                | Required | Description |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                               | no       |             |
| accessibilityRole  | property | `AccessibilityRole \| undefined`                                                                                                    | no       |             |
| accessibilityState | property | `AccessibilityState \| undefined`                                                                                                   | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                              | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>` | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| children           | property | `React.ReactNode \| ((state: InteractionState) => React.ReactNode)`                                                                 | no       |             |
| disabled           | property | `boolean \| undefined`                                                                                                              | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| onLongPress        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                             | no       |             |
| onPress            | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                             | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                        | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                     | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                              | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                                                                              | no       |             |
| testID             | property | `string \| undefined`                                                                                                               | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |

## ButtonIconSpec

Kind: `type`
Module: `src/components/button/types.ts`
Source: `src/components/button/types.ts:9:1`

### Members

| Name     | Kind     | Type                  | Required | Description |
| -------- | -------- | --------------------- | -------- | ----------- |
| name     | property | `string`              | yes      |             |
| provider | property | `string \| undefined` | no       |             |

## ButtonProps

Kind: `type`
Module: `src/components/button/types.ts`
Source: `src/components/button/types.ts:14:1`

### Members

| Name               | Kind     | Type                                                                                                                                          | Required | Description |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityRole  | property | `AccessibilityRole \| undefined`                                                                                                              | no       |             |
| accessibilityState | property | `AccessibilityState \| undefined`                                                                                                             | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                                        | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>`           | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                                                                                         | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                                                                                         | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| children           | property | `React.ReactNode`                                                                                                                             | no       |             |
| color              | property | `"primary" \| "secondary" \| "tertiary" \| "quaternary" \| "neutral" \| "success" \| "warning" \| "error" \| "info" \| "danger" \| undefined` | no       |             |
| disabled           | property | `boolean \| undefined`                                                                                                                        | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| fullWidth          | property | `boolean \| undefined`                                                                                                                        | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| leadingIcon        | property | `ButtonIconSpec \| undefined`                                                                                                                 | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| loading            | property | `boolean \| undefined`                                                                                                                        | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| onLongPress        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                       | no       |             |
| onPress            | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                       | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                                  | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                               | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                                        | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| size               | property | `ControlSize \| undefined`                                                                                                                    | no       |             |
| testID             | property | `string \| undefined`                                                                                                                         | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| trailingIcon       | property | `ButtonIconSpec \| undefined`                                                                                                                 | no       |             |
| variant            | property | `ButtonVariant \| undefined`                                                                                                                  | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |

## Card

Kind: `function`
Module: `src/components/card/Card.tsx`
Source: `src/components/card/Card.tsx:38:1`

### Signatures

- `({
  children,
  variant = 'default',
  onPress,
  disabled = false,
  testID,
  style,
  ...props
}: CardProps) => React.JSX.Element`
  - {
    children,
    variant = 'default',
    onPress,
    disabled = false,
    testID,
    style,
    ...props
    }: `CardProps`
  - returns: `React.JSX.Element`

## CardProps

Kind: `type`
Module: `src/components/card/types.ts`
Source: `src/components/card/types.ts:5:1`

### Members

| Name               | Kind     | Type                                                                                                                                | Required | Description |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                               | no       |             |
| accessibilityRole  | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                              | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>` | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| children           | property | `React.ReactNode`                                                                                                                   | no       |             |
| disabled           | property | `boolean \| undefined`                                                                                                              | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| onPress            | property | `(() => void) \| undefined`                                                                                                         | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                        | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                                         | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                     | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                              | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                                                                              | no       |             |
| testID             | property | `string \| undefined`                                                                                                               | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| variant            | property | `SurfaceVariant \| undefined`                                                                                                       | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |

## Center

Kind: `function`
Module: `src/layout/Center.tsx`
Source: `src/layout/Center.tsx:9:1`

### Signatures

- `({ axis = 'both', style, ...props }: CenterProps) => React.JSX.Element`
  - { axis = 'both', style, ...props }: `CenterProps`
  - returns: `React.JSX.Element`

## CenterProps

Kind: `type`
Module: `src/layout/Center.tsx`
Source: `src/layout/Center.tsx:5:1`

### Members

| Name               | Kind     | Type                                                                                                                                | Required | Description |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                               | no       |             |
| accessibilityRole  | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                              | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>` | no       |             |
| axis               | property | `"vertical" \| "horizontal" \| "both" \| undefined`                                                                                 | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| children           | property | `React.ReactNode`                                                                                                                   | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                        | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                                         | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                     | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                              | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                                                                              | no       |             |
| testID             | property | `string \| undefined`                                                                                                               | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |

## Checkbox

Kind: `function`
Module: `src/components/checkbox/Checkbox.tsx`
Source: `src/components/checkbox/Checkbox.tsx:16:1`

### Signatures

- `({
  children,
  checked,
  defaultChecked = false,
  onCheckedChange,
  color = 'primary',
  size = 'm',
  disabled = false,
  invalid = false,
  readOnly = false,
  accessibilityLabel,
  testID,
  ...props
}: CheckboxProps) => React.JSX.Element`
  - {
    children,
    checked,
    defaultChecked = false,
    onCheckedChange,
    color = 'primary',
    size = 'm',
    disabled = false,
    invalid = false,
    readOnly = false,
    accessibilityLabel,
    testID,
    ...props
    }: `CheckboxProps`
  - returns: `React.JSX.Element`

## CheckboxProps

Kind: `type`
Module: `src/components/checkbox/types.ts`
Source: `src/components/checkbox/types.ts:7:1`

### Members

| Name               | Kind     | Type                                                                                                                                          | Required | Description |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                                         | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                                        | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>`           | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                                                                                         | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                                                                                         | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| checked            | property | `boolean \| undefined`                                                                                                                        | no       |             |
| children           | property | `React.ReactNode`                                                                                                                             | no       |             |
| color              | property | `"primary" \| "secondary" \| "tertiary" \| "quaternary" \| "neutral" \| "success" \| "warning" \| "error" \| "info" \| "danger" \| undefined` | no       |             |
| defaultChecked     | property | `boolean \| undefined`                                                                                                                        | no       |             |
| disabled           | property | `boolean \| undefined`                                                                                                                        | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| invalid            | property | `boolean \| undefined`                                                                                                                        | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| onCheckedChange    | property | `((checked: boolean) => void) \| undefined`                                                                                                   | no       |             |
| onLongPress        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                       | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                                  | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                               | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                                        | no       |             |
| readOnly           | property | `boolean \| undefined`                                                                                                                        | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| size               | property | `ControlSize \| undefined`                                                                                                                    | no       |             |
| testID             | property | `string \| undefined`                                                                                                                         | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |

## ColorHarmony

Kind: `unknown`
Module: `node_modules/@ankhorage/color-theory/dist/harmony.d.ts`
Source: `node_modules/@ankhorage/color-theory/dist/harmony.d.ts:3:1`

## ColorSwatch

Kind: `unknown`
Module: `node_modules/@ankhorage/color-theory/dist/swatches.d.ts`
Source: `node_modules/@ankhorage/color-theory/dist/swatches.d.ts:5:1`

## ColorSwatchStep

Kind: `unknown`
Module: `node_modules/@ankhorage/color-theory/dist/swatches.d.ts`
Source: `node_modules/@ankhorage/color-theory/dist/swatches.d.ts:3:1`

## Container

Kind: `function`
Module: `src/layout/Container.tsx`
Source: `src/layout/Container.tsx:16:1`

### Signatures

- `({
  children,
  maxWidth = { base: Number.MAX_SAFE_INTEGER, lg: 1120 },
  px = { base: 16, md: 24, lg: 32 },
  ...props
}: ContainerProps) => React.JSX.Element`
  - {
    children,
    maxWidth = { base: Number.MAX_SAFE_INTEGER, lg: 1120 },
    px = { base: 16, md: 24, lg: 32 },
    ...props
    }: `ContainerProps`
  - returns: `React.JSX.Element`

## ContainerProps

Kind: `type`
Module: `src/layout/Container.tsx`
Source: `src/layout/Container.tsx:10:1`

### Members

| Name               | Kind     | Type                                                                                                                                | Required | Description |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                               | no       |             |
| accessibilityRole  | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                              | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>` | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| children           | property | `React.ReactNode`                                                                                                                   | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| maxWidth           | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                        | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                                         | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                     | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| px                 | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                              | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                                                                              | no       |             |
| testID             | property | `string \| undefined`                                                                                                               | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |

## ContentSemantics

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:48:1`

### Members

| Name    | Kind     | Type     | Required | Description |
| ------- | -------- | -------- | -------- | ----------- |
| default | property | `string` | yes      |             |
| inverse | property | `string` | yes      |             |
| muted   | property | `string` | yes      |             |
| subtle  | property | `string` | yes      |             |

## createTheme

Kind: `function`
Module: `src/theme/createTheme.ts`
Source: `src/theme/createTheme.ts:92:1`

### Signatures

- `(config?: ThemeConfig, mode?: "light" | "dark", activeFontId?: string | null | undefined) => SurfaceTheme`
  - activeFontId: `string | null | undefined` (optional)
  - config: `ThemeConfig` (optional)
  - mode: `"light" | "dark"` (optional)
  - returns: `SurfaceTheme`

## deepMerge

Kind: `function`
Module: `src/utils/deepMerge.ts`
Source: `src/utils/deepMerge.ts:5:1`

### Signatures

- `(target: T, source: Partial<T>) => T`
  - source: `Partial<T>`
  - target: `T`
  - returns: `T`

## DEFAULT_CONFIG

Kind: `value`
Module: `src/theme/createTheme.ts`
Source: `src/theme/createTheme.ts:68:14`

## DEFAULT_TOKENS

Kind: `value`
Module: `src/theme/createTheme.ts`
Source: `src/theme/createTheme.ts:4:14`

## Divider

Kind: `function`
Module: `src/layout/Divider.tsx`
Source: `src/layout/Divider.tsx:12:1`

### Signatures

- `({
  orientation = 'horizontal',
  color = 'border',
  thickness = 1,
  ...props
}: DividerProps) => React.JSX.Element`
  - {
    orientation = 'horizontal',
    color = 'border',
    thickness = 1,
    ...props
    }: `DividerProps`
  - returns: `React.JSX.Element`

## DividerProps

Kind: `type`
Module: `src/layout/Divider.tsx`
Source: `src/layout/Divider.tsx:6:1`

### Members

| Name               | Kind     | Type                                                                                                                                | Required | Description |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                               | no       |             |
| accessibilityRole  | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                              | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>` | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| children           | property | `React.ReactNode`                                                                                                                   | no       |             |
| color              | property | `ColorValue \| undefined`                                                                                                           | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| orientation        | property | `"vertical" \| "horizontal" \| undefined`                                                                                           | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                        | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                                         | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                     | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                              | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                                                                              | no       |             |
| testID             | property | `string \| undefined`                                                                                                               | no       |             |
| thickness          | property | `number \| undefined`                                                                                                               | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |

## Drawer

Kind: `function`
Module: `src/components/drawer/Drawer.tsx`
Source: `src/components/drawer/Drawer.tsx:11:1`

### Signatures

- `({
  visible,
  onDismiss,
  position = 'right',
  children,
  closeOnBackdrop = true,
  testID,
}: DrawerProps) => React.JSX.Element | null`
  - {
    visible,
    onDismiss,
    position = 'right',
    children,
    closeOnBackdrop = true,
    testID,
    }: `DrawerProps`
  - returns: `React.JSX.Element | null`

## DrawerNavigation

Kind: `function`
Module: `src/components/navigation/DrawerNavigation.tsx`
Source: `src/components/navigation/DrawerNavigation.tsx:7:1`

### Signatures

- `({
  items,
  header,
  footer,
  compact = false,
  testID,
}: DrawerNavigationProps) => React.JSX.Element`
  - {
    items,
    header,
    footer,
    compact = false,
    testID,
    }: `DrawerNavigationProps`
  - returns: `React.JSX.Element`

## DrawerNavigationItem

Kind: `function`
Module: `src/components/navigation/DrawerNavigationItem.tsx`
Source: `src/components/navigation/DrawerNavigationItem.tsx:6:1`

### Signatures

- `({ item, compact = false, testID }: DrawerNavigationItemProps) => React.JSX.Element`
  - { item, compact = false, testID }: `DrawerNavigationItemProps`
  - returns: `React.JSX.Element`

## DrawerNavigationItemProps

Kind: `type`
Module: `src/components/navigation/types.ts`
Source: `src/components/navigation/types.ts:55:1`

### Members

| Name    | Kind     | Type                   | Required | Description |
| ------- | -------- | ---------------------- | -------- | ----------- |
| compact | property | `boolean \| undefined` | no       |             |
| item    | property | `NavigationItemSpec`   | yes      |             |
| testID  | property | `string \| undefined`  | no       |             |

## DrawerNavigationProps

Kind: `type`
Module: `src/components/navigation/types.ts`
Source: `src/components/navigation/types.ts:47:1`

### Members

| Name    | Kind     | Type                            | Required | Description |
| ------- | -------- | ------------------------------- | -------- | ----------- |
| compact | property | `boolean \| undefined`          | no       |             |
| footer  | property | `React.ReactNode`               | no       |             |
| header  | property | `React.ReactNode`               | no       |             |
| items   | property | `readonly NavigationItemSpec[]` | yes      |             |
| testID  | property | `string \| undefined`           | no       |             |

## DrawerProps

Kind: `type`
Module: `src/components/drawer/types.ts`
Source: `src/components/drawer/types.ts:3:1`

### Members

| Name            | Kind     | Type                             | Required | Description |
| --------------- | -------- | -------------------------------- | -------- | ----------- |
| children        | property | `React.ReactNode`                | no       |             |
| closeOnBackdrop | property | `boolean \| undefined`           | no       |             |
| onDismiss       | property | `(() => void) \| undefined`      | no       |             |
| position        | property | `"left" \| "right" \| undefined` | no       |             |
| testID          | property | `string \| undefined`            | no       |             |
| visible         | property | `boolean`                        | yes      |             |

## Field

Kind: `function`
Module: `src/components/field/Field.tsx`
Source: `src/components/field/Field.tsx:9:1`

### Signatures

- `({
  children,
  label,
  helperText,
  errorText,
  required = false,
  disabled = false,
  invalid = false,
  readOnly = false,
  testID,
}: FieldProps) => React.JSX.Element`
  - {
    children,
    label,
    helperText,
    errorText,
    required = false,
    disabled = false,
    invalid = false,
    readOnly = false,
    testID,
    }: `FieldProps`
  - returns: `React.JSX.Element`

## FieldProps

Kind: `type`
Module: `src/components/field/types.ts`
Source: `src/components/field/types.ts:3:1`

### Members

| Name       | Kind     | Type                   | Required | Description |
| ---------- | -------- | ---------------------- | -------- | ----------- |
| children   | property | `React.ReactNode`      | no       |             |
| disabled   | property | `boolean \| undefined` | no       |             |
| errorText  | property | `React.ReactNode`      | no       |             |
| helperText | property | `React.ReactNode`      | no       |             |
| invalid    | property | `boolean \| undefined` | no       |             |
| label      | property | `React.ReactNode`      | no       |             |
| readOnly   | property | `boolean \| undefined` | no       |             |
| required   | property | `boolean \| undefined` | no       |             |
| testID     | property | `string \| undefined`  | no       |             |

## FontProvider

Kind: `function`
Module: `src/context/FontContext.tsx`
Source: `src/context/FontContext.tsx:27:1`

### Signatures

- `(props: { fontsLoaded: boolean; activeFontId?: string | null; children: React.ReactNode; onActiveFontChange?: (id: string) => void; }) => React.JSX.Element`
  - props: `{ fontsLoaded: boolean; activeFontId?: string | null; children: React.ReactNode; onActiveFontChange?: (id: string) => void; }`
  - returns: `React.JSX.Element`

## FontRuntime

Kind: `type`
Module: `src/context/FontContext.tsx`
Source: `src/context/FontContext.tsx:6:1`

### Members

| Name            | Kind     | Type                   | Required | Description |
| --------------- | -------- | ---------------------- | -------- | ----------- |
| activeFontId    | property | `string \| null`       | yes      |             |
| fontsLoaded     | property | `boolean`              | yes      |             |
| setActiveFontId | property | `(id: string) => void` | yes      |             |

## FontWeight

Kind: `unknown`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:84:1`

## GeneratedColorRole

Kind: `unknown`
Module: `node_modules/@ankhorage/color-theory/dist/harmony.d.ts`
Source: `node_modules/@ankhorage/color-theory/dist/harmony.d.ts:4:1`

## GeneratedThemeModeColors

Kind: `type`
Module: `node_modules/@ankhorage/color-theory/dist/theme-colors.d.ts`
Source: `node_modules/@ankhorage/color-theory/dist/theme-colors.d.ts:20:1`

### Members

| Name              | Kind     | Type                         | Required | Description |
| ----------------- | -------- | ---------------------------- | -------- | ----------- |
| harmonyRoleColors | property | `GeneratedHarmonyRoleColors` | yes      |             |
| neutral           | property | `GeneratedNeutralMetadata`   | yes      |             |
| swatches          | property | `GeneratedThemeSwatches`     | yes      |             |

## GeneratedThemeSwatches

Kind: `type`
Module: `node_modules/@ankhorage/color-theory/dist/theme-colors.d.ts`
Source: `node_modules/@ankhorage/color-theory/dist/theme-colors.d.ts:13:1`

### Members

| Name       | Kind     | Type                       | Required | Description |
| ---------- | -------- | -------------------------- | -------- | ----------- |
| neutral    | property | `ColorSwatch`              | yes      |             |
| primary    | property | `ColorSwatch`              | yes      |             |
| quaternary | property | `ColorSwatch \| undefined` | no       |             |
| secondary  | property | `ColorSwatch \| undefined` | no       |             |
| tertiary   | property | `ColorSwatch \| undefined` | no       |             |

## generatePalette

Kind: `function`
Module: `src/theme/colorEngine.ts`
Source: `src/theme/colorEngine.ts:108:1`

### Signatures

- `(config: ThemeConfig, mode?: "light" | "dark") => { colors: Record<string, string>; swatches: GeneratedThemeSwatches; semantics: ThemeSemantics; }`
  - config: `ThemeConfig`
  - mode: `"light" | "dark"` (optional)
  - returns: `{ colors: Record<string, string>; swatches: GeneratedThemeSwatches; semantics: ThemeSemantics; }`

## getBreakpointFromWidth

Kind: `function`
Module: `src/core/responsive/getBreakpointFromWidth.ts`
Source: `src/core/responsive/getBreakpointFromWidth.ts:4:1`

### Signatures

- `(width: number) => "base" | "sm" | "md" | "lg" | "xl"`
  - width: `number`
  - returns: `"base" | "sm" | "md" | "lg" | "xl"`

## Grid

Kind: `function`
Module: `src/layout/Grid.tsx`
Source: `src/layout/Grid.tsx:18:1`

### Signatures

- `({
  children,
  cols,
  gap = 0,
  rowGap,
  colGap,
  minItemWidth,
  ...props
}: GridProps) => React.JSX.Element`
  - {
    children,
    cols,
    gap = 0,
    rowGap,
    colGap,
    minItemWidth,
    ...props
    }: `GridProps`
  - returns: `React.JSX.Element`

## GridProps

Kind: `type`
Module: `src/layout/Grid.tsx`
Source: `src/layout/Grid.tsx:9:1`

### Members

| Name               | Kind     | Type                                                                                                                                | Required | Description |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                               | no       |             |
| accessibilityRole  | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                              | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>` | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| children           | property | `React.ReactNode`                                                                                                                   | no       |             |
| colGap             | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| cols               | property | `Responsive<number>`                                                                                                                | yes      |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| gap                | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| minItemWidth       | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                        | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                                         | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                     | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                              | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| rowGap             | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                                                                              | no       |             |
| testID             | property | `string \| undefined`                                                                                                               | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |

## Heading

Kind: `value`
Module: `src/primitives/heading/Heading.tsx`
Source: `src/primitives/heading/Heading.tsx:37:14`

### Signatures

- `({
  text,
  children,
  level = 2,
  align,
  color,
  emphasis = 'default',
  numberOfLines,
  i18nKey,
  testID,
}: HeadingProps) => React.JSX.Element`
  - {
    text,
    children,
    level = 2,
    align,
    color,
    emphasis = 'default',
    numberOfLines,
    i18nKey,
    testID,
    }: `HeadingProps`
  - returns: `React.JSX.Element`

## HeadingLevel

Kind: `unknown`
Module: `src/primitives/heading/types.ts`
Source: `src/primitives/heading/types.ts:5:1`

## HeadingProps

Kind: `type`
Module: `src/primitives/heading/types.ts`
Source: `src/primitives/heading/types.ts:7:1`

### Members

| Name          | Kind     | Type                                                                                                                                          | Required | Description |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| align         | property | `"left" \| "right" \| "auto" \| "center" \| "justify" \| undefined`                                                                           | no       |             |
| children      | property | `React.ReactNode`                                                                                                                             | no       |             |
| color         | property | `"primary" \| "secondary" \| "tertiary" \| "quaternary" \| "neutral" \| "success" \| "warning" \| "error" \| "info" \| "danger" \| undefined` | no       |             |
| emphasis      | property | `"default" \| "subtle" \| "muted" \| "inverse" \| undefined`                                                                                  | no       |             |
| i18nKey       | property | `string \| undefined`                                                                                                                         | no       |             |
| level         | property | `HeadingLevel \| undefined`                                                                                                                   | no       |             |
| numberOfLines | property | `number \| undefined`                                                                                                                         | no       |             |
| testID        | property | `string \| undefined`                                                                                                                         | no       |             |
| text          | property | `string \| undefined`                                                                                                                         | no       |             |

## HelperText

Kind: `function`
Module: `src/components/helper-text/HelperText.tsx`
Source: `src/components/helper-text/HelperText.tsx:6:1`

### Signatures

- `({ children, emphasis = 'muted', color, testID }: HelperTextProps) => React.JSX.Element`
  - { children, emphasis = 'muted', color, testID }: `HelperTextProps`
  - returns: `React.JSX.Element`

## HelperTextProps

Kind: `type`
Module: `src/components/helper-text/types.ts`
Source: `src/components/helper-text/types.ts:5:1`

### Members

| Name     | Kind     | Type                                | Required | Description |
| -------- | -------- | ----------------------------------- | -------- | ----------- |
| children | property | `React.ReactNode`                   | no       |             |
| color    | property | `"error" \| undefined`              | no       |             |
| emphasis | property | `"default" \| "muted" \| undefined` | no       |             |
| testID   | property | `string \| undefined`               | no       |             |

## HexColor

Kind: `unknown`
Module: `node_modules/@ankhorage/color-theory/dist/hex.d.ts`
Source: `node_modules/@ankhorage/color-theory/dist/hex.d.ts:1:1`

## I18nInstance

Kind: `type`
Module: `src/context/TranslationContext.tsx`
Source: `src/context/TranslationContext.tsx:7:1`

### Members

| Name           | Kind     | Type                                | Required | Description |
| -------------- | -------- | ----------------------------------- | -------- | ----------- |
| changeLanguage | property | `(lng: string) => Promise<unknown>` | yes      |             |
| language       | property | `string \| undefined`               | no       |             |
| t              | property | `Translator \| undefined`           | no       |             |

## Icon

Kind: `function`
Module: `src/primitives/icon/Icon.tsx`
Source: `src/primitives/icon/Icon.tsx:20:1`

### Signatures

- `({
  name,
  provider = 'Ionicons',
  size = 'm',
  color = 'text',
  style,
  testID,
}: IconProps) => React.ReactElement<{ color?: string; name?: string; size?: number; style?: StyleProp<TextStyle>; testID?: string; }, string | React.JSXElementConstructor<any>>`
  - {
    name,
    provider = 'Ionicons',
    size = 'm',
    color = 'text',
    style,
    testID,
    }: `IconProps`
  - returns: `React.ReactElement<{ color?: string; name?: string; size?: number; style?: StyleProp<TextStyle>; testID?: string; }, string | React.JSXElementConstructor<any>>`

## IconButton

Kind: `function`
Module: `src/components/icon-button/IconButton.tsx`
Source: `src/components/icon-button/IconButton.tsx:10:1`

### Signatures

- `({
  icon,
  accessibilityLabel,
  variant = 'ghost',
  color = 'primary',
  size = 'm',
  disabled = false,
  onPress,
  testID,
  ...props
}: IconButtonProps) => React.JSX.Element`
  - {
    icon,
    accessibilityLabel,
    variant = 'ghost',
    color = 'primary',
    size = 'm',
    disabled = false,
    onPress,
    testID,
    ...props
    }: `IconButtonProps`
  - returns: `React.JSX.Element`

## IconButtonProps

Kind: `type`
Module: `src/components/icon-button/types.ts`
Source: `src/components/icon-button/types.ts:7:1`

### Members

| Name               | Kind     | Type                                                                                                                                          | Required | Description |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string`                                                                                                                                      | yes      |             |
| accessibilityRole  | property | `AccessibilityRole \| undefined`                                                                                                              | no       |             |
| accessibilityState | property | `AccessibilityState \| undefined`                                                                                                             | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                                        | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>`           | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                                                                                         | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                                                                                         | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| color              | property | `"primary" \| "secondary" \| "tertiary" \| "quaternary" \| "neutral" \| "success" \| "warning" \| "error" \| "info" \| "danger" \| undefined` | no       |             |
| disabled           | property | `boolean \| undefined`                                                                                                                        | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| icon               | property | `{ name: IconProps["name"]; provider?: IconProps["provider"]; }`                                                                              | yes      |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| onLongPress        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                       | no       |             |
| onPress            | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                       | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                                  | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                               | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                                        | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| size               | property | `ControlSize \| undefined`                                                                                                                    | no       |             |
| testID             | property | `string \| undefined`                                                                                                                         | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| variant            | property | `ButtonVariant \| undefined`                                                                                                                  | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |

## IconProps

Kind: `type`
Module: `src/primitives/icon/Icon.tsx`
Source: `src/primitives/icon/Icon.tsx:11:1`

### Members

| Name     | Kind     | Type                            | Required | Description |
| -------- | -------- | ------------------------------- | -------- | ----------- |
| color    | property | `string \| number \| undefined` | no       |             |
| name     | property | `string`                        | yes      |             |
| provider | property | `string \| undefined`           | no       |             |
| size     | property | `string \| number \| undefined` | no       |             |
| style    | property | `StyleProp<TextStyle>`          | no       |             |
| testID   | property | `string \| undefined`           | no       |             |

## IconProvider

Kind: `unknown`
Module: `src/primitives/icon/Icon.tsx`
Source: `src/primitives/icon/Icon.tsx:9:1`

## Image

Kind: `function`
Module: `src/primitives/image/Image.tsx`
Source: `src/primitives/image/Image.tsx:16:1`

### Signatures

- `({
  source,
  fallbackSource,
  alt,
  accessibilityLabel,
  width,
  height,
  aspectRatio,
  fit,
  resizeMode,
  radius,
  style,
  testID,
  onError,
}: ImageProps) => React.JSX.Element | null`
  - {
    source,
    fallbackSource,
    alt,
    accessibilityLabel,
    width,
    height,
    aspectRatio,
    fit,
    resizeMode,
    radius,
    style,
    testID,
    onError,
    }: `ImageProps`
  - returns: `React.JSX.Element | null`

## ImageFit

Kind: `unknown`
Module: `src/primitives/image/types.ts`
Source: `src/primitives/image/types.ts:12:1`

## ImageProps

Kind: `type`
Module: `src/primitives/image/types.ts`
Source: `src/primitives/image/types.ts:14:1`

### Members

| Name               | Kind     | Type                                                                                                                               | Required | Description |
| ------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                              | no       |             |
| alt                | property | `string \| undefined`                                                                                                              | no       |             |
| aspectRatio        | property | `number \| undefined`                                                                                                              | no       |             |
| fallbackSource     | property | `SurfaceImageSource \| null \| undefined`                                                                                          | no       |             |
| fit                | property | `ImageResizeMode \| undefined`                                                                                                     | no       |             |
| height             | property | `string \| number \| undefined`                                                                                                    | no       |             |
| onError            | property | `((error: import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").ImageErrorEvent) => void) \| undefined` | no       |             |
| radius             | property | `number \| "s" \| "m" \| "l" \| "none" \| "full" \| undefined`                                                                     | no       |             |
| resizeMode         | property | `ImageResizeMode \| undefined`                                                                                                     | no       |             |
| source             | property | `SurfaceImageSource \| null \| undefined`                                                                                          | no       |             |
| style              | property | `StyleProp<ImageStyle>`                                                                                                            | no       |             |
| testID             | property | `string \| undefined`                                                                                                              | no       |             |
| width              | property | `string \| number \| undefined`                                                                                                    | no       |             |

## Inline

Kind: `function`
Module: `src/layout/Inline.tsx`
Source: `src/layout/Inline.tsx:7:1`

### Signatures

- `({ wrap = 'wrap', align = 'center', ...props }: InlineProps) => React.JSX.Element`
  - { wrap = 'wrap', align = 'center', ...props }: `InlineProps`
  - returns: `React.JSX.Element`

## InlineProps

Kind: `unknown`
Module: `src/layout/Inline.tsx`
Source: `src/layout/Inline.tsx:5:1`

## isDeepEqual

Kind: `value`
Module: `src/utils/deepEqual.ts`
Source: `src/utils/deepEqual.ts:5:14`

### Signatures

- `(a: unknown, b: unknown) => boolean`
  - a: `unknown`
  - b: `unknown`
  - returns: `boolean`

## Label

Kind: `function`
Module: `src/components/label/Label.tsx`
Source: `src/components/label/Label.tsx:6:1`

### Signatures

- `({
  children,
  required = false,
  emphasis = 'default',
  color,
  testID,
}: LabelProps) => React.JSX.Element`
  - {
    children,
    required = false,
    emphasis = 'default',
    color,
    testID,
    }: `LabelProps`
  - returns: `React.JSX.Element`

## LabelProps

Kind: `type`
Module: `src/components/label/types.ts`
Source: `src/components/label/types.ts:5:1`

### Members

| Name     | Kind     | Type                                | Required | Description |
| -------- | -------- | ----------------------------------- | -------- | ----------- |
| children | property | `React.ReactNode`                   | no       |             |
| color    | property | `"error" \| undefined`              | no       |             |
| emphasis | property | `"default" \| "muted" \| undefined` | no       |             |
| required | property | `boolean \| undefined`              | no       |             |
| testID   | property | `string \| undefined`               | no       |             |

## ListItem

Kind: `function`
Module: `src/components/list-item/ListItem.tsx`
Source: `src/components/list-item/ListItem.tsx:47:1`

### Signatures

- `({ onPress, disabled = false, testID, ...content }: ListItemProps) => React.JSX.Element`
  - { onPress, disabled = false, testID, ...content }: `ListItemProps`
  - returns: `React.JSX.Element`

## ListItemProps

Kind: `type`
Module: `src/components/list-item/types.ts`
Source: `src/components/list-item/types.ts:3:1`

### Members

| Name        | Kind     | Type                        | Required | Description |
| ----------- | -------- | --------------------------- | -------- | ----------- |
| description | property | `React.ReactNode`           | no       |             |
| disabled    | property | `boolean \| undefined`      | no       |             |
| leading     | property | `React.ReactNode`           | no       |             |
| onPress     | property | `(() => void) \| undefined` | no       |             |
| testID      | property | `string \| undefined`       | no       |             |
| title       | property | `React.ReactNode`           | no       |             |
| trailing    | property | `React.ReactNode`           | no       |             |

## Menu

Kind: `function`
Module: `src/components/menu/Menu.tsx`
Source: `src/components/menu/Menu.tsx:56:1`

### Signatures

- `({ trigger, actions, dismiss, closeOnSelect = true, testID }: MenuProps) => React.JSX.Element`
  - { trigger, actions, dismiss, closeOnSelect = true, testID }: `MenuProps`
  - returns: `React.JSX.Element`

## MenuAction

Kind: `type`
Module: `src/components/menu/types.ts`
Source: `src/components/menu/types.ts:5:1`

### Members

| Name        | Kind     | Type                            | Required | Description |
| ----------- | -------- | ------------------------------- | -------- | ----------- |
| activate    | property | `(() => void) \| undefined`     | no       |             |
| description | property | `React.ReactNode`               | no       |             |
| disabled    | property | `boolean \| undefined`          | no       |             |
| id          | property | `string`                        | yes      |             |
| intent      | property | `MenuActionIntent \| undefined` | no       |             |
| leading     | property | `React.ReactNode`               | no       |             |
| selected    | property | `boolean \| undefined`          | no       |             |
| title       | property | `React.ReactNode`               | yes      |             |
| trailing    | property | `React.ReactNode`               | no       |             |

## MenuActionIntent

Kind: `unknown`
Module: `src/components/menu/types.ts`
Source: `src/components/menu/types.ts:3:1`

## MenuProps

Kind: `type`
Module: `src/components/menu/types.ts`
Source: `src/components/menu/types.ts:17:1`

### Members

| Name          | Kind     | Type                        | Required | Description |
| ------------- | -------- | --------------------------- | -------- | ----------- |
| actions       | property | `readonly MenuAction[]`     | yes      |             |
| closeOnSelect | property | `boolean \| undefined`      | no       |             |
| dismiss       | property | `(() => void) \| undefined` | no       |             |
| testID        | property | `string \| undefined`       | no       |             |
| trigger       | property | `React.ReactNode`           | no       |             |

## Modal

Kind: `function`
Module: `src/components/modal/Modal.tsx`
Source: `src/components/modal/Modal.tsx:11:1`

### Signatures

- `({
  visible,
  onDismiss,
  children,
  closeOnBackdrop = true,
  testID,
}: ModalProps) => React.JSX.Element | null`
  - {
    visible,
    onDismiss,
    children,
    closeOnBackdrop = true,
    testID,
    }: `ModalProps`
  - returns: `React.JSX.Element | null`

## ModalProps

Kind: `type`
Module: `src/components/modal/types.ts`
Source: `src/components/modal/types.ts:3:1`

### Members

| Name            | Kind     | Type                        | Required | Description |
| --------------- | -------- | --------------------------- | -------- | ----------- |
| children        | property | `React.ReactNode`           | no       |             |
| closeOnBackdrop | property | `boolean \| undefined`      | no       |             |
| onDismiss       | property | `(() => void) \| undefined` | no       |             |
| testID          | property | `string \| undefined`       | no       |             |
| visible         | property | `boolean`                   | yes      |             |

## NavigationItem

Kind: `function`
Module: `src/components/navigation/NavigationItem.tsx`
Source: `src/components/navigation/NavigationItem.tsx:12:1`

### Signatures

- `({ item, compact = false, testID }: NavigationItemProps) => React.JSX.Element`
  - { item, compact = false, testID }: `NavigationItemProps`
  - returns: `React.JSX.Element`

## NavigationItemIcon

Kind: `unknown`
Module: `src/components/navigation/types.ts`
Source: `src/components/navigation/types.ts:6:1`

## NavigationItemProps

Kind: `type`
Module: `src/components/navigation/types.ts`
Source: `src/components/navigation/types.ts:22:1`

### Members

| Name    | Kind     | Type                   | Required | Description |
| ------- | -------- | ---------------------- | -------- | ----------- |
| compact | property | `boolean \| undefined` | no       |             |
| item    | property | `NavigationItemSpec`   | yes      |             |
| testID  | property | `string \| undefined`  | no       |             |

## NavigationItemSpec

Kind: `type`
Module: `src/components/navigation/types.ts`
Source: `src/components/navigation/types.ts:8:1`

### Members

| Name               | Kind     | Type                              | Required | Description |
| ------------------ | -------- | --------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`             | no       |             |
| accessibilityRole  | property | `AccessibilityRole \| undefined`  | no       |             |
| accessibilityState | property | `AccessibilityState \| undefined` | no       |             |
| active             | property | `boolean \| undefined`            | no       |             |
| badge              | property | `React.ReactNode`                 | no       |             |
| disabled           | property | `boolean \| undefined`            | no       |             |
| icon               | property | `NavigationItemIcon \| undefined` | no       |             |
| id                 | property | `string`                          | yes      |             |
| label              | property | `React.ReactNode`                 | yes      |             |
| onPress            | property | `(() => void) \| undefined`       | no       |             |
| testID             | property | `string \| undefined`             | no       |             |

## NavigationList

Kind: `function`
Module: `src/components/navigation/NavigationList.tsx`
Source: `src/components/navigation/NavigationList.tsx:7:1`

### Signatures

- `({
  items,
  orientation = 'vertical',
  compact = false,
  testID,
}: NavigationListProps) => React.JSX.Element`
  - {
    items,
    orientation = 'vertical',
    compact = false,
    testID,
    }: `NavigationListProps`
  - returns: `React.JSX.Element`

## NavigationListProps

Kind: `type`
Module: `src/components/navigation/types.ts`
Source: `src/components/navigation/types.ts:28:1`

### Members

| Name        | Kind     | Type                                      | Required | Description |
| ----------- | -------- | ----------------------------------------- | -------- | ----------- |
| compact     | property | `boolean \| undefined`                    | no       |             |
| items       | property | `readonly NavigationItemSpec[]`           | yes      |             |
| orientation | property | `"vertical" \| "horizontal" \| undefined` | no       |             |
| testID      | property | `string \| undefined`                     | no       |             |

## NeutralSemantics

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:17:1`

### Members

| Name          | Kind     | Type     | Required | Description |
| ------------- | -------- | -------- | -------- | ----------- |
| bg            | property | `string` | yes      |             |
| bgSubtle      | property | `string` | yes      |             |
| border        | property | `string` | yes      |             |
| borderStrong  | property | `string` | yes      |             |
| divider       | property | `string` | yes      |             |
| surface       | property | `string` | yes      |             |
| surfaceActive | property | `string` | yes      |             |
| surfaceHover  | property | `string` | yes      |             |
| text          | property | `string` | yes      |             |
| textMuted     | property | `string` | yes      |             |
| textSubtle    | property | `string` | yes      |             |

## Radio

Kind: `function`
Module: `src/components/radio/Radio.tsx`
Source: `src/components/radio/Radio.tsx:16:1`

### Signatures

- `({
  children,
  checked,
  defaultChecked = false,
  onCheckedChange,
  color = 'primary',
  size = 'm',
  disabled = false,
  invalid = false,
  readOnly = false,
  accessibilityLabel,
  testID,
  ...props
}: RadioProps) => React.JSX.Element`
  - {
    children,
    checked,
    defaultChecked = false,
    onCheckedChange,
    color = 'primary',
    size = 'm',
    disabled = false,
    invalid = false,
    readOnly = false,
    accessibilityLabel,
    testID,
    ...props
    }: `RadioProps`
  - returns: `React.JSX.Element`

## RadioProps

Kind: `type`
Module: `src/components/radio/types.ts`
Source: `src/components/radio/types.ts:7:1`

### Members

| Name               | Kind     | Type                                                                                                                                          | Required | Description |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                                         | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                                        | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>`           | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                                                                                         | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                                                                                         | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| checked            | property | `boolean \| undefined`                                                                                                                        | no       |             |
| children           | property | `React.ReactNode`                                                                                                                             | no       |             |
| color              | property | `"primary" \| "secondary" \| "tertiary" \| "quaternary" \| "neutral" \| "success" \| "warning" \| "error" \| "info" \| "danger" \| undefined` | no       |             |
| defaultChecked     | property | `boolean \| undefined`                                                                                                                        | no       |             |
| disabled           | property | `boolean \| undefined`                                                                                                                        | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| invalid            | property | `boolean \| undefined`                                                                                                                        | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| onCheckedChange    | property | `((checked: boolean) => void) \| undefined`                                                                                                   | no       |             |
| onLongPress        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                       | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                                  | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                               | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                                        | no       |             |
| readOnly           | property | `boolean \| undefined`                                                                                                                        | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| size               | property | `ControlSize \| undefined`                                                                                                                    | no       |             |
| testID             | property | `string \| undefined`                                                                                                                         | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |

## resolveResponsive

Kind: `function`
Module: `src/core/responsive/resolve.ts`
Source: `src/core/responsive/resolve.ts:8:1`

### Signatures

- `(value: Responsive<T> | undefined, breakpoint: "base" | "sm" | "md" | "lg" | "xl") => T | undefined`
  - breakpoint: `"base" | "sm" | "md" | "lg" | "xl"`
  - value: `Responsive<T> | undefined`
  - returns: `T | undefined`

## resolveSemanticColors

Kind: `function`
Module: `src/theme/colorEngine.ts`
Source: `src/theme/colorEngine.ts:33:1`

### Signatures

- `(generated: GeneratedThemeModeColors, references: SemanticColorReferenceMap) => SurfaceSemanticColors`
  - generated: `GeneratedThemeModeColors`
  - references: `SemanticColorReferenceMap`
  - returns: `SurfaceSemanticColors`

## resolveToken

Kind: `function`
Module: `src/theme/resolveToken.ts`
Source: `src/theme/resolveToken.ts:11:1`

### Signatures

- `(map: TMap, value: TValue) => ResolvedToken<TMap, TValue>`
  - map: `TMap`
  - value: `TValue`
  - returns: `ResolvedToken<TMap, TValue>`

## Responsive

Kind: `unknown`
Module: `src/core/responsive/types.ts`
Source: `src/core/responsive/types.ts:5:1`

## ResponsiveProvider

Kind: `function`
Module: `src/core/responsive/ResponsiveProvider.tsx`
Source: `src/core/responsive/ResponsiveProvider.tsx:9:1`

### Signatures

- `({ children }: { children: React.ReactNode; }) => React.JSX.Element`
  - { children }: `{ children: React.ReactNode; }`
  - returns: `React.JSX.Element`

## ResponsiveRuntime

Kind: `type`
Module: `src/core/responsive/types.ts`
Source: `src/core/responsive/types.ts:7:1`

### Members

| Name       | Kind     | Type                                     | Required | Description |
| ---------- | -------- | ---------------------------------------- | -------- | ----------- |
| breakpoint | property | `"base" \| "sm" \| "md" \| "lg" \| "xl"` | yes      |             |
| width      | property | `number`                                 | yes      |             |

## RoleSemantics

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:31:1`

### Members

| Name        | Kind     | Type     | Required | Description |
| ----------- | -------- | -------- | -------- | ----------- |
| base        | property | `string` | yes      |             |
| hover       | property | `string` | yes      |             |
| onSolidText | property | `string` | yes      |             |
| outline     | property | `string` | yes      |             |
| softActive  | property | `string` | yes      |             |
| softBg      | property | `string` | yes      |             |
| softHover   | property | `string` | yes      |             |
| strong      | property | `string` | yes      |             |

## ScrollArea

Kind: `function`
Module: `src/layout/ScrollArea.tsx`
Source: `src/layout/ScrollArea.tsx:21:1`

### Signatures

- `({
  children,
  contentContainerStyle,
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  bg,
  radius,
  borderWidth,
  borderColor,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  alignSelf,
  position,
  top,
  bottom,
  left,
  right,
  overflow,
  zIndex,
  opacity,
  style,
  ...scrollProps
}: ScrollAreaProps) => React.JSX.Element`
  - {
    children,
    contentContainerStyle,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    bg,
    radius,
    borderWidth,
    borderColor,
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    alignSelf,
    position,
    top,
    bottom,
    left,
    right,
    overflow,
    zIndex,
    opacity,
    style,
    ...scrollProps
    }: `ScrollAreaProps`
  - returns: `React.JSX.Element`

## ScrollAreaProps

Kind: `type`
Module: `src/layout/ScrollArea.tsx`
Source: `src/layout/ScrollArea.tsx:13:1`

### Members

| Name                                      | Kind     | Type                                                                                                                                | Required | Description |
| ----------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityActions                      | property | `readonly Readonly<{ name: AccessibilityActionName \| string; label?: string \| undefined; }>[] \| undefined`                       | no       |             |
| accessibilityElementsHidden               | property | `boolean \| undefined`                                                                                                              | no       |             |
| accessibilityHint                         | property | `string \| undefined`                                                                                                               | no       |             |
| accessibilityIgnoresInvertColors          | property | `boolean \| undefined`                                                                                                              | no       |             |
| accessibilityLabel                        | property | `string \| undefined`                                                                                                               | no       |             |
| accessibilityLabelledBy                   | property | `string \| string[] \| undefined`                                                                                                   | no       |             |
| accessibilityLanguage                     | property | `string \| undefined`                                                                                                               | no       |             |
| accessibilityLargeContentTitle            | property | `string \| undefined`                                                                                                               | no       |             |
| accessibilityLiveRegion                   | property | `"none" \| "polite" \| "assertive" \| undefined`                                                                                    | no       |             |
| accessibilityRespondsToUserInteraction    | property | `boolean \| undefined`                                                                                                              | no       |             |
| accessibilityRole                         | property | `AccessibilityRole \| undefined`                                                                                                    | no       |             |
| accessibilityShowsLargeContentViewer      | property | `boolean \| undefined`                                                                                                              | no       |             |
| accessibilityState                        | property | `AccessibilityState \| undefined`                                                                                                   | no       |             |
| accessibilityValue                        | property | `AccessibilityValue \| undefined`                                                                                                   | no       |             |
| accessibilityViewIsModal                  | property | `boolean \| undefined`                                                                                                              | no       |             |
| accessible                                | property | `boolean \| undefined`                                                                                                              | no       |             |
| alignSelf                                 | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>` | no       |             |
| alwaysBounceHorizontal                    | property | `boolean \| undefined`                                                                                                              | no       |             |
| alwaysBounceVertical                      | property | `boolean \| undefined`                                                                                                              | no       |             |
| aria-busy                                 | property | `boolean \| undefined`                                                                                                              | no       |             |
| aria-checked                              | property | `boolean \| "mixed" \| undefined`                                                                                                   | no       |             |
| aria-disabled                             | property | `boolean \| undefined`                                                                                                              | no       |             |
| aria-expanded                             | property | `boolean \| undefined`                                                                                                              | no       |             |
| aria-hidden                               | property | `boolean \| undefined`                                                                                                              | no       |             |
| aria-label                                | property | `string \| undefined`                                                                                                               | no       |             |
| aria-labelledby                           | property | `string \| undefined`                                                                                                               | no       |             |
| aria-live                                 | property | `"off" \| "polite" \| "assertive" \| undefined`                                                                                     | no       |             |
| aria-modal                                | property | `boolean \| undefined`                                                                                                              | no       |             |
| aria-selected                             | property | `boolean \| undefined`                                                                                                              | no       |             |
| aria-valuemax                             | property | `number \| undefined`                                                                                                               | no       |             |
| aria-valuemin                             | property | `number \| undefined`                                                                                                               | no       |             |
| aria-valuenow                             | property | `number \| undefined`                                                                                                               | no       |             |
| aria-valuetext                            | property | `string \| undefined`                                                                                                               | no       |             |
| automaticallyAdjustContentInsets          | property | `boolean \| undefined`                                                                                                              | no       |             |
| automaticallyAdjustKeyboardInsets         | property | `boolean \| undefined`                                                                                                              | no       |             |
| automaticallyAdjustsScrollIndicatorInsets | property | `boolean \| undefined`                                                                                                              | no       |             |
| bg                                        | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderColor                               | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderWidth                               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| bottom                                    | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| bounces                                   | property | `boolean \| undefined`                                                                                                              | no       |             |
| bouncesZoom                               | property | `boolean \| undefined`                                                                                                              | no       |             |
| canCancelContentTouches                   | property | `boolean \| undefined`                                                                                                              | no       |             |
| centerContent                             | property | `boolean \| undefined`                                                                                                              | no       |             |
| children                                  | property | `React.ReactNode`                                                                                                                   | no       |             |
| collapsable                               | property | `boolean \| undefined`                                                                                                              | no       |             |
| collapsableChildren                       | property | `boolean \| undefined`                                                                                                              | no       |             |
| contentContainerStyle                     | property | `StyleProp<ViewStyle>`                                                                                                              | no       |             |
| contentInset                              | property | `Insets \| undefined`                                                                                                               | no       |             |
| contentInsetAdjustmentBehavior            | property | `"never" \| "always" \| "automatic" \| "scrollableAxes" \| undefined`                                                               | no       |             |
| contentOffset                             | property | `PointProp \| undefined`                                                                                                            | no       |             |
| decelerationRate                          | property | `number \| "normal" \| "fast" \| undefined`                                                                                         | no       |             |
| directionalLockEnabled                    | property | `boolean \| undefined`                                                                                                              | no       |             |
| disableIntervalMomentum                   | property | `boolean \| undefined`                                                                                                              | no       |             |
| disableScrollViewPanResponder             | property | `boolean \| undefined`                                                                                                              | no       |             |
| endFillColor                              | property | `ColorValue \| undefined`                                                                                                           | no       |             |
| fadingEdgeLength                          | property | `number \| { start: number; end: number; } \| undefined`                                                                            | no       |             |
| flex                                      | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexBasis                                 | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| flexGrow                                  | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexShrink                                | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| focusable                                 | property | `boolean \| undefined`                                                                                                              | no       |             |
| hasTVPreferredFocus                       | property | `boolean \| undefined`                                                                                                              | no       |             |
| height                                    | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| hitSlop                                   | property | `number \| Insets \| null \| undefined`                                                                                             | no       |             |
| horizontal                                | property | `boolean \| null \| undefined`                                                                                                      | no       |             |
| id                                        | property | `string \| undefined`                                                                                                               | no       |             |
| importantForAccessibility                 | property | `"auto" \| "yes" \| "no" \| "no-hide-descendants" \| undefined`                                                                     | no       |             |
| indicatorStyle                            | property | `"default" \| "black" \| "white" \| undefined`                                                                                      | no       |             |
| innerViewRef                              | property | `React.RefObject<View> \| undefined`                                                                                                | no       |             |
| invertStickyHeaders                       | property | `boolean \| undefined`                                                                                                              | no       |             |
| isTVSelectable                            | property | `boolean \| undefined`                                                                                                              | no       |             |
| keyboardDismissMode                       | property | `"none" \| "interactive" \| "on-drag" \| undefined`                                                                                 | no       |             |
| keyboardShouldPersistTaps                 | property | `boolean \| "never" \| "always" \| "handled" \| undefined`                                                                          | no       |             |
| left                                      | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| m                                         | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| maintainVisibleContentPosition            | property | `{ autoscrollToTopThreshold?: number \| null \| undefined; minIndexForVisible: number; } \| null \| undefined`                      | no       |             |
| maxHeight                                 | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| maximumZoomScale                          | property | `number \| undefined`                                                                                                               | no       |             |
| maxWidth                                  | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| mb                                        | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| minHeight                                 | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| minimumZoomScale                          | property | `number \| undefined`                                                                                                               | no       |             |
| minWidth                                  | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| ml                                        | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mr                                        | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mt                                        | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mx                                        | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| my                                        | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| nativeID                                  | property | `string \| undefined`                                                                                                               | no       |             |
| needsOffscreenAlphaCompositing            | property | `boolean \| undefined`                                                                                                              | no       |             |
| nestedScrollEnabled                       | property | `boolean \| undefined`                                                                                                              | no       |             |
| onAccessibilityAction                     | property | `((event: AccessibilityActionEvent) => void) \| undefined`                                                                          | no       |             |
| onAccessibilityEscape                     | property | `(() => void) \| undefined`                                                                                                         | no       |             |
| onAccessibilityTap                        | property | `(() => void) \| undefined`                                                                                                         | no       |             |
| onBlur                                    | property | `((e: BlurEvent) => void) \| null \| undefined`                                                                                     | no       |             |
| onContentSizeChange                       | property | `((contentWidth: number, contentHeight: number) => void) \| undefined`                                                              | no       |             |
| onFocus                                   | property | `((e: FocusEvent) => void) \| null \| undefined`                                                                                    | no       |             |
| onLayout                                  | property | `((event: LayoutChangeEvent) => void) \| undefined`                                                                                 | no       |             |
| onMagicTap                                | property | `(() => void) \| undefined`                                                                                                         | no       |             |
| onMomentumScrollBegin                     | property | `((event: NativeSyntheticEvent<NativeScrollEvent>) => void) \| undefined`                                                           | no       |             |
| onMomentumScrollEnd                       | property | `((event: NativeSyntheticEvent<NativeScrollEvent>) => void) \| undefined`                                                           | no       |             |
| onMoveShouldSetResponder                  | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                          | no       |             |
| onMoveShouldSetResponderCapture           | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                          | no       |             |
| onPointerCancel                           | property | `((event: PointerEvent) => void) \| undefined`                                                                                      | no       |             |
| onPointerCancelCapture                    | property | `((event: PointerEvent) => void) \| undefined`                                                                                      | no       |             |
| onPointerDown                             | property | `((event: PointerEvent) => void) \| undefined`                                                                                      | no       |             |
| onPointerDownCapture                      | property | `((event: PointerEvent) => void) \| undefined`                                                                                      | no       |             |
| onPointerEnter                            | property | `((event: PointerEvent) => void) \| undefined`                                                                                      | no       |             |
| onPointerEnterCapture                     | property | `((event: PointerEvent) => void) \| undefined`                                                                                      | no       |             |
| onPointerLeave                            | property | `((event: PointerEvent) => void) \| undefined`                                                                                      | no       |             |
| onPointerLeaveCapture                     | property | `((event: PointerEvent) => void) \| undefined`                                                                                      | no       |             |
| onPointerMove                             | property | `((event: PointerEvent) => void) \| undefined`                                                                                      | no       |             |
| onPointerMoveCapture                      | property | `((event: PointerEvent) => void) \| undefined`                                                                                      | no       |             |
| onPointerUp                               | property | `((event: PointerEvent) => void) \| undefined`                                                                                      | no       |             |
| onPointerUpCapture                        | property | `((event: PointerEvent) => void) \| undefined`                                                                                      | no       |             |
| onResponderEnd                            | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                             | no       |             |
| onResponderGrant                          | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                             | no       |             |
| onResponderMove                           | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                             | no       |             |
| onResponderReject                         | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                             | no       |             |
| onResponderRelease                        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                             | no       |             |
| onResponderStart                          | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                             | no       |             |
| onResponderTerminate                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                             | no       |             |
| onResponderTerminationRequest             | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                          | no       |             |
| onScroll                                  | property | `((event: NativeSyntheticEvent<NativeScrollEvent>) => void) \| undefined`                                                           | no       |             |
| onScrollAnimationEnd                      | property | `(() => void) \| undefined`                                                                                                         | no       |             |
| onScrollBeginDrag                         | property | `((event: NativeSyntheticEvent<NativeScrollEvent>) => void) \| undefined`                                                           | no       |             |
| onScrollEndDrag                           | property | `((event: NativeSyntheticEvent<NativeScrollEvent>) => void) \| undefined`                                                           | no       |             |
| onScrollToTop                             | property | `((event: NativeSyntheticEvent<NativeScrollEvent>) => void) \| undefined`                                                           | no       |             |
| onStartShouldSetResponder                 | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                          | no       |             |
| onStartShouldSetResponderCapture          | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                          | no       |             |
| onTouchCancel                             | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                             | no       |             |
| onTouchEnd                                | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                             | no       |             |
| onTouchEndCapture                         | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                             | no       |             |
| onTouchMove                               | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                             | no       |             |
| onTouchStart                              | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                             | no       |             |
| opacity                                   | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| overflow                                  | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                        | no       |             |
| overScrollMode                            | property | `"auto" \| "never" \| "always" \| undefined`                                                                                        | no       |             |
| p                                         | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pagingEnabled                             | property | `boolean \| undefined`                                                                                                              | no       |             |
| pb                                        | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| persistentScrollbar                       | property | `boolean \| undefined`                                                                                                              | no       |             |
| pinchGestureEnabled                       | property | `boolean \| undefined`                                                                                                              | no       |             |
| pl                                        | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pointerEvents                             | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                                         | no       |             |
| position                                  | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                     | no       |             |
| pr                                        | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pt                                        | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| px                                        | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| py                                        | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| radius                                    | property | `Responsive<RadiusValue> \| undefined`                                                                                              | no       |             |
| refreshControl                            | property | `React.ReactElement<RefreshControlProps, string \| React.JSXElementConstructor<any>> \| undefined`                                  | no       |             |
| removeClippedSubviews                     | property | `boolean \| undefined`                                                                                                              | no       |             |
| renderToHardwareTextureAndroid            | property | `boolean \| undefined`                                                                                                              | no       |             |
| right                                     | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| role                                      | property | `Role \| undefined`                                                                                                                 | no       |             |
| screenReaderFocusable                     | property | `boolean \| undefined`                                                                                                              | no       |             |
| scrollEnabled                             | property | `boolean \| undefined`                                                                                                              | no       |             |
| scrollEventThrottle                       | property | `number \| undefined`                                                                                                               | no       |             |
| scrollIndicatorInsets                     | property | `Insets \| undefined`                                                                                                               | no       |             |
| scrollPerfTag                             | property | `string \| undefined`                                                                                                               | no       |             |
| scrollsToTop                              | property | `boolean \| undefined`                                                                                                              | no       |             |
| scrollToOverflowEnabled                   | property | `boolean \| undefined`                                                                                                              | no       |             |
| scrollViewRef                             | property | `React.RefObject<ScrollView> \| undefined`                                                                                          | no       |             |
| shouldRasterizeIOS                        | property | `boolean \| undefined`                                                                                                              | no       |             |
| showsHorizontalScrollIndicator            | property | `boolean \| undefined`                                                                                                              | no       |             |
| showsVerticalScrollIndicator              | property | `boolean \| undefined`                                                                                                              | no       |             |
| snapToAlignment                           | property | `"center" \| "start" \| "end" \| undefined`                                                                                         | no       |             |
| snapToEnd                                 | property | `boolean \| undefined`                                                                                                              | no       |             |
| snapToInterval                            | property | `number \| undefined`                                                                                                               | no       |             |
| snapToOffsets                             | property | `number[] \| undefined`                                                                                                             | no       |             |
| snapToStart                               | property | `boolean \| undefined`                                                                                                              | no       |             |
| StickyHeaderComponent                     | property | `React.ComponentType<any> \| undefined`                                                                                             | no       |             |
| stickyHeaderHiddenOnScroll                | property | `boolean \| undefined`                                                                                                              | no       |             |
| stickyHeaderIndices                       | property | `number[] \| undefined`                                                                                                             | no       |             |
| style                                     | property | `StyleProp<ViewStyle>`                                                                                                              | no       |             |
| tabIndex                                  | property | `0 \| -1 \| undefined`                                                                                                              | no       |             |
| testID                                    | property | `string \| undefined`                                                                                                               | no       |             |
| top                                       | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| tvParallaxMagnification                   | property | `number \| undefined`                                                                                                               | no       |             |
| tvParallaxShiftDistanceX                  | property | `number \| undefined`                                                                                                               | no       |             |
| tvParallaxShiftDistanceY                  | property | `number \| undefined`                                                                                                               | no       |             |
| tvParallaxTiltAngle                       | property | `number \| undefined`                                                                                                               | no       |             |
| width                                     | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| zIndex                                    | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| zoomScale                                 | property | `number \| undefined`                                                                                                               | no       |             |

## SemanticColorReferenceMap

Kind: `unknown`
Module: `node_modules/@ankhorage/color-theory/dist/semantics.d.ts`
Source: `node_modules/@ankhorage/color-theory/dist/semantics.d.ts:10:1`

## SemanticColorToken

Kind: `unknown`
Module: `node_modules/@ankhorage/color-theory/dist/semantics.d.ts`
Source: `node_modules/@ankhorage/color-theory/dist/semantics.d.ts:4:1`

## Show

Kind: `function`
Module: `src/layout/Show.tsx`
Source: `src/layout/Show.tsx:11:1`

### Signatures

- `({ when, children, fallback = null }: ShowProps) => React.JSX.Element`
  - { when, children, fallback = null }: `ShowProps`
  - returns: `React.JSX.Element`

## ShowProps

Kind: `type`
Module: `src/layout/Show.tsx`
Source: `src/layout/Show.tsx:5:1`

### Members

| Name     | Kind     | Type                  | Required | Description |
| -------- | -------- | --------------------- | -------- | ----------- |
| children | property | `React.ReactNode`     | yes      |             |
| fallback | property | `React.ReactNode`     | no       |             |
| when     | property | `Responsive<boolean>` | yes      |             |

## Spacer

Kind: `function`
Module: `src/layout/Spacer.tsx`
Source: `src/layout/Spacer.tsx:12:1`

### Signatures

- `({ size = 'm', axis = 'vertical', testID }: SpacerProps) => React.JSX.Element`
  - { size = 'm', axis = 'vertical', testID }: `SpacerProps`
  - returns: `React.JSX.Element`

## SpacerProps

Kind: `type`
Module: `src/layout/Spacer.tsx`
Source: `src/layout/Spacer.tsx:6:1`

### Members

| Name   | Kind     | Type                                                | Required | Description |
| ------ | -------- | --------------------------------------------------- | -------- | ----------- |
| axis   | property | `"vertical" \| "horizontal" \| "both" \| undefined` | no       |             |
| size   | property | `SpaceValue \| undefined`                           | no       |             |
| testID | property | `string \| undefined`                               | no       |             |

## Stack

Kind: `function`
Module: `src/layout/Stack.tsx`
Source: `src/layout/Stack.tsx:20:1`

### Signatures

- `({
  children,
  direction = 'column',
  gap = 0,
  align,
  justify,
  wrap,
  ...props
}: StackProps) => React.JSX.Element`
  - {
    children,
    direction = 'column',
    gap = 0,
    align,
    justify,
    wrap,
    ...props
    }: `StackProps`
  - returns: `React.JSX.Element`

## StackProps

Kind: `type`
Module: `src/layout/Stack.tsx`
Source: `src/layout/Stack.tsx:9:1`

### Members

| Name               | Kind     | Type                                                                                                                                | Required | Description |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                               | no       |             |
| accessibilityRole  | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                              | no       |             |
| align              | property | `Responsive<"flex-start" \| "flex-end" \| "center" \| "stretch" \| "baseline"> \| undefined`                                        | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>` | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| children           | property | `React.ReactNode`                                                                                                                   | no       |             |
| direction          | property | `Responsive<"row" \| "column"> \| undefined`                                                                                        | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| gap                | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| justify            | property | `Responsive<"flex-start" \| "flex-end" \| "center" \| "space-between" \| "space-around" \| "space-evenly"> \| undefined`            | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                        | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                                         | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                     | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                              | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                                                                              | no       |             |
| testID             | property | `string \| undefined`                                                                                                               | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| wrap               | property | `Responsive<"wrap" \| "nowrap"> \| undefined`                                                                                       | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |

## Surface

Kind: `function`
Module: `src/layout/Surface.tsx`
Source: `src/layout/Surface.tsx:52:1`

### Signatures

- `({ variant = 'default', radius = 'm', style, ...props }: SurfaceProps) => React.JSX.Element`
  - { variant = 'default', radius = 'm', style, ...props }: `SurfaceProps`
  - returns: `React.JSX.Element`

## SURFACE_COLORS

Kind: `value`
Module: `src/surfaceColor.ts`
Source: `src/surfaceColor.ts:11:14`

## SURFACE_EMPHASES

Kind: `value`
Module: `src/surfaceColor.ts`
Source: `src/surfaceColor.ts:17:14`

## SURFACE_PALETTE_COLORS

Kind: `value`
Module: `src/surfaceColor.ts`
Source: `src/surfaceColor.ts:1:14`

## SURFACE_STATUS_COLORS

Kind: `value`
Module: `src/surfaceColor.ts`
Source: `src/surfaceColor.ts:9:14`

## SurfaceColor

Kind: `unknown`
Module: `src/surfaceColor.ts`
Source: `src/surfaceColor.ts:21:1`

## SurfaceEmphasis

Kind: `unknown`
Module: `src/surfaceColor.ts`
Source: `src/surfaceColor.ts:22:1`

## SurfaceImageSource

Kind: `unknown`
Module: `src/primitives/image/types.ts`
Source: `src/primitives/image/types.ts:10:1`

## SurfacePaletteColor

Kind: `unknown`
Module: `src/surfaceColor.ts`
Source: `src/surfaceColor.ts:19:1`

## SurfaceProps

Kind: `type`
Module: `src/layout/Surface.tsx`
Source: `src/layout/Surface.tsx:9:1`

### Members

| Name               | Kind     | Type                                                                                                                                | Required | Description |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                               | no       |             |
| accessibilityRole  | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                              | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>` | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| children           | property | `React.ReactNode`                                                                                                                   | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                        | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                                         | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                     | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                              | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                                                                              | no       |             |
| testID             | property | `string \| undefined`                                                                                                               | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| variant            | property | `SurfaceVariant \| undefined`                                                                                                       | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |

## SurfaceSemanticColors

Kind: `unknown`
Module: `src/theme/colorEngine.ts`
Source: `src/theme/colorEngine.ts:31:1`

## SurfaceSemantics

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:42:1`

### Members

| Name    | Kind     | Type     | Required | Description |
| ------- | -------- | -------- | -------- | ----------- |
| default | property | `string` | yes      |             |
| raised  | property | `string` | yes      |             |
| subtle  | property | `string` | yes      |             |

## SurfaceStatusColor

Kind: `unknown`
Module: `src/surfaceColor.ts`
Source: `src/surfaceColor.ts:20:1`

## SurfaceTheme

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:186:1`

### Members

| Name       | Kind     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Required | Description |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| colors     | property | `{ [key: string]: string; primary: string; secondary: string; accent: string; highlight: string; tertiary: string; quaternary: string; background: string; surface: string; text: string; textSecondary: string; border: string; error: string; success: string; warning: string; info: string; }`                                                                                                                                                                                                                                                                                                                                                                    | yes      |             |
| config     | property | `ContractsThemeConfig`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | yes      |             |
| radii      | property | `{ none: 0; s: number; m: number; l: number; full: number; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | yes      |             |
| semantics  | property | `ThemeSemantics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | yes      |             |
| shadows    | property | `{ [key: string]: number; soft: number; medium: number; hard: number; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | yes      |             |
| spacing    | property | `{ [key: string]: number; none: 0; xs: number; s: number; m: number; l: number; xl: number; xxl: number; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | yes      |             |
| swatches   | property | `GeneratedThemeSwatches`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | yes      |             |
| typography | property | `{ headings: Record<1 \| 2 \| 3 \| 4 \| 5 \| 6, { size: number; lineHeight: number; weight: "regular" \| "medium" \| "semiBold" \| "bold"; }>; sizes: { xs: number; s: number; m: number; l: number; xl: number; xxl: number; "3xl": number; h1: number; h2: number; h3: number; h4: number; h5: number; h6: number; [key: string]: number; }; weights: { thin: FontWeight; extraLight: FontWeight; light: FontWeight; regular: FontWeight; medium: FontWeight; semiBold: FontWeight; bold: FontWeight; extraBold: FontWeight; black: FontWeight; }; fonts: { normal: Record<FontWeight, string \| undefined>; italic: Record<FontWeight, string \| undefined>; }; }` | yes      |             |

## SurfaceVariant

Kind: `unknown`
Module: `src/layout/Surface.tsx`
Source: `src/layout/Surface.tsx:7:1`

## Switch

Kind: `function`
Module: `src/components/switch/Switch.tsx`
Source: `src/components/switch/Switch.tsx:16:1`

### Signatures

- `({
  children,
  checked,
  defaultChecked = false,
  onCheckedChange,
  color = 'primary',
  size = 'm',
  disabled = false,
  invalid = false,
  readOnly = false,
  accessibilityLabel,
  testID,
  ...props
}: SwitchProps) => React.JSX.Element`
  - {
    children,
    checked,
    defaultChecked = false,
    onCheckedChange,
    color = 'primary',
    size = 'm',
    disabled = false,
    invalid = false,
    readOnly = false,
    accessibilityLabel,
    testID,
    ...props
    }: `SwitchProps`
  - returns: `React.JSX.Element`

## SwitchProps

Kind: `type`
Module: `src/components/switch/types.ts`
Source: `src/components/switch/types.ts:7:1`

### Members

| Name               | Kind     | Type                                                                                                                                          | Required | Description |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                                         | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                                        | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>`           | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                                                                                         | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                                                                                         | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| checked            | property | `boolean \| undefined`                                                                                                                        | no       |             |
| children           | property | `React.ReactNode`                                                                                                                             | no       |             |
| color              | property | `"primary" \| "secondary" \| "tertiary" \| "quaternary" \| "neutral" \| "success" \| "warning" \| "error" \| "info" \| "danger" \| undefined` | no       |             |
| defaultChecked     | property | `boolean \| undefined`                                                                                                                        | no       |             |
| disabled           | property | `boolean \| undefined`                                                                                                                        | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| invalid            | property | `boolean \| undefined`                                                                                                                        | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| onCheckedChange    | property | `((checked: boolean) => void) \| undefined`                                                                                                   | no       |             |
| onLongPress        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                       | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                                  | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                               | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                                         | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                                        | no       |             |
| readOnly           | property | `boolean \| undefined`                                                                                                                        | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| size               | property | `ControlSize \| undefined`                                                                                                                    | no       |             |
| testID             | property | `string \| undefined`                                                                                                                         | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |

## Tab

Kind: `function`
Module: `src/components/tabs/Tab.tsx`
Source: `src/components/tabs/Tab.tsx:10:1`

### Signatures

- `({ value, children, disabled = false, testID }: TabProps) => React.JSX.Element`
  - { value, children, disabled = false, testID }: `TabProps`
  - returns: `React.JSX.Element`

## TabBar

Kind: `function`
Module: `src/components/navigation/TabBar.tsx`
Source: `src/components/navigation/TabBar.tsx:8:1`

### Signatures

- `({ items, compact = false, testID }: TabBarProps) => React.JSX.Element`
  - { items, compact = false, testID }: `TabBarProps`
  - returns: `React.JSX.Element`

## TabBarItem

Kind: `function`
Module: `src/components/navigation/TabBarItem.tsx`
Source: `src/components/navigation/TabBarItem.tsx:12:1`

### Signatures

- `({ item, compact = false, testID }: TabBarItemProps) => React.JSX.Element`
  - { item, compact = false, testID }: `TabBarItemProps`
  - returns: `React.JSX.Element`

## TabBarItemProps

Kind: `type`
Module: `src/components/navigation/types.ts`
Source: `src/components/navigation/types.ts:41:1`

### Members

| Name    | Kind     | Type                   | Required | Description |
| ------- | -------- | ---------------------- | -------- | ----------- |
| compact | property | `boolean \| undefined` | no       |             |
| item    | property | `NavigationItemSpec`   | yes      |             |
| testID  | property | `string \| undefined`  | no       |             |

## TabBarProps

Kind: `type`
Module: `src/components/navigation/types.ts`
Source: `src/components/navigation/types.ts:35:1`

### Members

| Name    | Kind     | Type                            | Required | Description |
| ------- | -------- | ------------------------------- | -------- | ----------- |
| compact | property | `boolean \| undefined`          | no       |             |
| items   | property | `readonly NavigationItemSpec[]` | yes      |             |
| testID  | property | `string \| undefined`           | no       |             |

## TabList

Kind: `function`
Module: `src/components/tabs/TabList.tsx`
Source: `src/components/tabs/TabList.tsx:9:1`

### Signatures

- `({ children, testID }: TabListProps) => React.JSX.Element`
  - { children, testID }: `TabListProps`
  - returns: `React.JSX.Element`

## TabListProps

Kind: `type`
Module: `src/components/tabs/types.ts`
Source: `src/components/tabs/types.ts:11:1`

### Members

| Name     | Kind     | Type                  | Required | Description |
| -------- | -------- | --------------------- | -------- | ----------- |
| children | property | `React.ReactNode`     | no       |             |
| testID   | property | `string \| undefined` | no       |             |

## TabPanel

Kind: `function`
Module: `src/components/tabs/TabPanel.tsx`
Source: `src/components/tabs/TabPanel.tsx:9:1`

### Signatures

- `({ value, children, testID }: TabPanelProps) => React.JSX.Element | null`
  - { value, children, testID }: `TabPanelProps`
  - returns: `React.JSX.Element | null`

## TabPanelProps

Kind: `type`
Module: `src/components/tabs/types.ts`
Source: `src/components/tabs/types.ts:23:1`

### Members

| Name     | Kind     | Type                  | Required | Description |
| -------- | -------- | --------------------- | -------- | ----------- |
| children | property | `React.ReactNode`     | no       |             |
| testID   | property | `string \| undefined` | no       |             |
| value    | property | `string`              | yes      |             |

## TabProps

Kind: `type`
Module: `src/components/tabs/types.ts`
Source: `src/components/tabs/types.ts:16:1`

### Members

| Name     | Kind     | Type                   | Required | Description |
| -------- | -------- | ---------------------- | -------- | ----------- |
| children | property | `React.ReactNode`      | no       |             |
| disabled | property | `boolean \| undefined` | no       |             |
| testID   | property | `string \| undefined`  | no       |             |
| value    | property | `string`               | yes      |             |

## Tabs

Kind: `function`
Module: `src/components/tabs/Tabs.tsx`
Source: `src/components/tabs/Tabs.tsx:9:1`

### Signatures

- `({ children, value, defaultValue, onValueChange, testID }: TabsProps) => React.JSX.Element`
  - { children, value, defaultValue, onValueChange, testID }: `TabsProps`
  - returns: `React.JSX.Element`

## TabsProps

Kind: `type`
Module: `src/components/tabs/types.ts`
Source: `src/components/tabs/types.ts:3:1`

### Members

| Name          | Kind     | Type                                     | Required | Description |
| ------------- | -------- | ---------------------------------------- | -------- | ----------- |
| children      | property | `React.ReactNode`                        | no       |             |
| defaultValue  | property | `string \| undefined`                    | no       |             |
| onValueChange | property | `((value: string) => void) \| undefined` | no       |             |
| testID        | property | `string \| undefined`                    | no       |             |
| value         | property | `string \| undefined`                    | no       |             |

## Template

Kind: `function`
Module: `src/layout/Template.tsx`
Source: `src/layout/Template.tsx:34:1`

### Signatures

- `({
  slots,
  templates,
  columns,
  gap = 0,
  rowGap,
  colGap,
  ...props
}: TemplateProps) => React.JSX.Element`
  - {
    slots,
    templates,
    columns,
    gap = 0,
    rowGap,
    colGap,
    ...props
    }: `TemplateProps`
  - returns: `React.JSX.Element`

## TemplateProps

Kind: `type`
Module: `src/layout/Template.tsx`
Source: `src/layout/Template.tsx:18:1`

### Members

| Name               | Kind     | Type                                                                                                                                | Required | Description |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                               | no       |             |
| accessibilityRole  | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                              | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("/Users/a_rtiphishl_e/git/surface/node_modules/react-native/types/index").FlexAlignType \| undefined>` | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                                                                               | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| colGap             | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| columns            | property | `Partial<Record<"base" \| "sm" \| "md" \| "lg" \| "xl", number[]>> \| undefined`                                                    | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| gap                | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                                        | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                                         | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                                     | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                              | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| rowGap             | property | `Responsive<SpaceValue> \| undefined`                                                                                               | no       |             |
| slots              | property | `SlotMap`                                                                                                                           | yes      |             |
| style              | property | `StyleProp<ViewStyle>`                                                                                                              | no       |             |
| templates          | property | `Partial<Record<"base" \| "sm" \| "md" \| "lg" \| "xl", string[][]>>`                                                               | yes      |             |
| testID             | property | `string \| undefined`                                                                                                               | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                         | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                   | no       |             |

## Text

Kind: `function`
Module: `src/primitives/text/Text.tsx`
Source: `src/primitives/text/Text.tsx:31:1`

### Signatures

- `({
  children,
  i18nKey,
  variant = 'body',
  emphasis = 'default',
  color,
  align,
  weight,
  italic = false,
  numberOfLines,
  testID,
}: TextProps) => React.JSX.Element`
  - {
    children,
    i18nKey,
    variant = 'body',
    emphasis = 'default',
    color,
    align,
    weight,
    italic = false,
    numberOfLines,
    testID,
    }: `TextProps`
  - returns: `React.JSX.Element`

## Textarea

Kind: `function`
Module: `src/components/textarea/Textarea.tsx`
Source: `src/components/textarea/Textarea.tsx:6:1`

### Signatures

- `({ rows = 4, numberOfLines, style, ...props }: TextareaProps) => React.JSX.Element`
  - { rows = 4, numberOfLines, style, ...props }: `TextareaProps`
  - returns: `React.JSX.Element`

## TextareaProps

Kind: `type`
Module: `src/components/textarea/types.ts`
Source: `src/components/textarea/types.ts:3:1`

### Members

| Name                                   | Kind     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Required | Description |
| -------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityActions                   | property | `readonly Readonly<{ name: AccessibilityActionName \| string; label?: string \| undefined; }>[] \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| accessibilityElementsHidden            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| accessibilityHint                      | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| accessibilityIgnoresInvertColors       | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| accessibilityLabel                     | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| accessibilityLabelledBy                | property | `string \| string[] \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| accessibilityLanguage                  | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| accessibilityLargeContentTitle         | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| accessibilityLiveRegion                | property | `"none" \| "polite" \| "assertive" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| accessibilityRespondsToUserInteraction | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| accessibilityRole                      | property | `AccessibilityRole \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| accessibilityShowsLargeContentViewer   | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| accessibilityState                     | property | `AccessibilityState \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| accessibilityValue                     | property | `AccessibilityValue \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| accessibilityViewIsModal               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| accessible                             | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| allowFontScaling                       | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| aria-busy                              | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| aria-checked                           | property | `boolean \| "mixed" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| aria-disabled                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| aria-expanded                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| aria-hidden                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| aria-label                             | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| aria-labelledby                        | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| aria-live                              | property | `"off" \| "polite" \| "assertive" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| aria-modal                             | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| aria-selected                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| aria-valuemax                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| aria-valuemin                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| aria-valuenow                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| aria-valuetext                         | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| autoCapitalize                         | property | `"none" \| "sentences" \| "words" \| "characters" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| autoComplete                           | property | `"name" \| "additional-name" \| "address-line1" \| "address-line2" \| "birthdate-day" \| "birthdate-full" \| "birthdate-month" \| "birthdate-year" \| "cc-csc" \| "cc-exp" \| "cc-exp-day" \| "cc-exp-month" \| "cc-exp-year" \| "cc-number" \| "cc-name" \| "cc-given-name" \| "cc-middle-name" \| "cc-family-name" \| "cc-type" \| "country" \| "current-password" \| "email" \| "family-name" \| "gender" \| "given-name" \| "honorific-prefix" \| "honorific-suffix" \| "name-family" \| "name-given" \| "name-middle" \| "name-middle-initial" \| "name-prefix" \| "name-suffix" \| "new-password" \| "nickname" \| "one-time-code" \| "organization" \| "organization-title" \| "password" \| "password-new" \| "postal-address" \| "postal-address-country" \| "postal-address-extended" \| "postal-address-extended-postal-code" \| "postal-address-locality" \| "postal-address-region" \| "postal-code" \| "street-address" \| "sms-otp" \| "tel" \| "tel-country-code" \| "tel-national" \| "tel-device" \| "url" \| "username" \| "username-new" \| "off" \| undefined` | no       |             |
| autoCorrect                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| autoFocus                              | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| blurOnSubmit                           | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| caretHidden                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| children                               | property | `React.ReactNode`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| clearButtonMode                        | property | `"never" \| "while-editing" \| "unless-editing" \| "always" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| clearTextOnFocus                       | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| collapsable                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| collapsableChildren                    | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| contextMenuHidden                      | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| cursorColor                            | property | `ColorValue \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| dataDetectorTypes                      | property | `DataDetectorTypes \| DataDetectorTypes[] \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| defaultValue                           | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| disabled                               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| disableFullscreenUI                    | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| disableKeyboardShortcuts               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| enablesReturnKeyAutomatically          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| enterKeyHint                           | property | `EnterKeyHintTypeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| focusable                              | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| hasTVPreferredFocus                    | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| hitSlop                                | property | `number \| Insets \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| id                                     | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| importantForAccessibility              | property | `"auto" \| "yes" \| "no" \| "no-hide-descendants" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| importantForAutofill                   | property | `"auto" \| "yes" \| "no" \| "noExcludeDescendants" \| "yesExcludeDescendants" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| inlineImageLeft                        | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| inlineImagePadding                     | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| inputAccessoryViewButtonLabel          | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| inputAccessoryViewID                   | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| inputMode                              | property | `InputModeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| invalid                                | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| isTVSelectable                         | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| keyboardAppearance                     | property | `"default" \| "light" \| "dark" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| keyboardType                           | property | `KeyboardTypeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | no       |             |
| leadingAccessory                       | property | `React.ReactNode`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| lineBreakModeIOS                       | property | `"wordWrapping" \| "char" \| "clip" \| "head" \| "middle" \| "tail" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| lineBreakStrategyIOS                   | property | `"none" \| "standard" \| "hangul-word" \| "push-out" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | no       |             |
| maxFontSizeMultiplier                  | property | `number \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| maxLength                              | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| nativeID                               | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| needsOffscreenAlphaCompositing         | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| numberOfLines                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| onAccessibilityAction                  | property | `((event: AccessibilityActionEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| onAccessibilityEscape                  | property | `(() => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| onAccessibilityTap                     | property | `(() => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| onBlur                                 | property | `((e: BlurEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onChange                               | property | `((e: TextInputChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | no       |             |
| onChangeText                           | property | `((text: string) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onContentSizeChange                    | property | `((e: TextInputContentSizeChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| onEndEditing                           | property | `((e: TextInputEndEditingEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| onFocus                                | property | `((e: FocusEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onKeyPress                             | property | `((e: TextInputKeyPressEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onLayout                               | property | `((event: LayoutChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | no       |             |
| onMagicTap                             | property | `(() => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| onMoveShouldSetResponder               | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| onMoveShouldSetResponderCapture        | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| onPointerCancel                        | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerCancelCapture                 | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerDown                          | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerDownCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerEnter                         | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerEnterCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerLeave                         | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerLeaveCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerMove                          | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerMoveCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerUp                            | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerUpCapture                     | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPress                                | property | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onPressIn                              | property | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onPressOut                             | property | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onResponderEnd                         | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onResponderGrant                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onResponderMove                        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onResponderReject                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onResponderRelease                     | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onResponderStart                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onResponderTerminate                   | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onResponderTerminationRequest          | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| onScroll                               | property | `((e: TextInputScrollEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | no       |             |
| onSelectionChange                      | property | `((e: TextInputSelectionChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| onStartShouldSetResponder              | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| onStartShouldSetResponderCapture       | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| onSubmitEditing                        | property | `((e: TextInputSubmitEditingEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| onTouchCancel                          | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onTouchEnd                             | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onTouchEndCapture                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onTouchMove                            | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onTouchStart                           | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| passwordRules                          | property | `string \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| placeholder                            | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| pointerEvents                          | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| readOnly                               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| rejectResponderTermination             | property | `boolean \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| removeClippedSubviews                  | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| renderToHardwareTextureAndroid         | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| returnKeyLabel                         | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| returnKeyType                          | property | `ReturnKeyTypeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | no       |             |
| role                                   | property | `Role \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | no       |             |
| rows                                   | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| screenReaderFocusable                  | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| scrollEnabled                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| secureTextEntry                        | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| selection                              | property | `{ start: number; end?: number \| undefined; } \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | no       |             |
| selectionColor                         | property | `ColorValue \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| selectionHandleColor                   | property | `ColorValue \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| selectionState                         | property | `DocumentSelectionState \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| selectTextOnFocus                      | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| shouldRasterizeIOS                     | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| showSoftInputOnFocus                   | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| size                                   | property | `ControlSize \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| smartInsertDelete                      | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| spellCheck                             | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| style                                  | property | `StyleProp<TextStyle>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| submitBehavior                         | property | `SubmitBehavior \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| tabIndex                               | property | `0 \| -1 \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| testID                                 | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| textAlign                              | property | `"left" \| "right" \| "center" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | no       |             |
| textAlignVertical                      | property | `"top" \| "bottom" \| "auto" \| "center" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| textBreakStrategy                      | property | `"simple" \| "highQuality" \| "balanced" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| textContentType                        | property | `"name" \| "none" \| "nickname" \| "password" \| "username" \| "flightNumber" \| "URL" \| "addressCity" \| "addressCityAndState" \| "addressState" \| "countryName" \| "creditCardNumber" \| "creditCardExpiration" \| "creditCardExpirationMonth" \| "creditCardExpirationYear" \| "creditCardSecurityCode" \| "creditCardType" \| "creditCardName" \| "creditCardGivenName" \| "creditCardMiddleName" \| "creditCardFamilyName" \| "emailAddress" \| "familyName" \| "fullStreetAddress" \| "givenName" \| "jobTitle" \| "location" \| "middleName" \| "namePrefix" \| "nameSuffix" \| "organizationName" \| "postalCode" \| "streetAddressLine1" \| "streetAddressLine2" \| "sublocality" \| "telephoneNumber" \| "newPassword" \| "oneTimeCode" \| "birthdate" \| "birthdateDay" \| "birthdateMonth" \| "birthdateYear" \| "cellularEID" \| "cellularIMEI" \| "dateTime" \| "shipmentTrackingNumber" \| undefined`                                                                                                                                                              | no       |             |
| trailingAccessory                      | property | `React.ReactNode`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| tvParallaxMagnification                | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| tvParallaxShiftDistanceX               | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| tvParallaxShiftDistanceY               | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| tvParallaxTiltAngle                    | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| underlineColorAndroid                  | property | `ColorValue \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| value                                  | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| verticalAlign                          | property | `"top" \| "bottom" \| "auto" \| "middle" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |

## TextInput

Kind: `function`
Module: `src/components/text-input/TextInput.tsx`
Source: `src/components/text-input/TextInput.tsx:14:1`

### Signatures

- `({
  value,
  defaultValue,
  onChangeText,
  placeholder,
  size = 'm',
  disabled = false,
  readOnly = false,
  invalid = false,
  leadingAccessory,
  trailingAccessory,
  style,
  testID,
  onFocus,
  onBlur,
  ...props
}: TextInputProps) => React.JSX.Element`
  - {
    value,
    defaultValue,
    onChangeText,
    placeholder,
    size = 'm',
    disabled = false,
    readOnly = false,
    invalid = false,
    leadingAccessory,
    trailingAccessory,
    style,
    testID,
    onFocus,
    onBlur,
    ...props
    }: `TextInputProps`
  - returns: `React.JSX.Element`

## TextInputProps

Kind: `type`
Module: `src/components/text-input/types.ts`
Source: `src/components/text-input/types.ts:10:1`

### Members

| Name                                   | Kind     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Required | Description |
| -------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityActions                   | property | `readonly Readonly<{ name: AccessibilityActionName \| string; label?: string \| undefined; }>[] \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| accessibilityElementsHidden            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| accessibilityHint                      | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| accessibilityIgnoresInvertColors       | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| accessibilityLabel                     | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| accessibilityLabelledBy                | property | `string \| string[] \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| accessibilityLanguage                  | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| accessibilityLargeContentTitle         | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| accessibilityLiveRegion                | property | `"none" \| "polite" \| "assertive" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| accessibilityRespondsToUserInteraction | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| accessibilityRole                      | property | `AccessibilityRole \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| accessibilityShowsLargeContentViewer   | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| accessibilityState                     | property | `AccessibilityState \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| accessibilityValue                     | property | `AccessibilityValue \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| accessibilityViewIsModal               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| accessible                             | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| allowFontScaling                       | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| aria-busy                              | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| aria-checked                           | property | `boolean \| "mixed" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| aria-disabled                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| aria-expanded                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| aria-hidden                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| aria-label                             | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| aria-labelledby                        | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| aria-live                              | property | `"off" \| "polite" \| "assertive" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| aria-modal                             | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| aria-selected                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| aria-valuemax                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| aria-valuemin                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| aria-valuenow                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| aria-valuetext                         | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| autoCapitalize                         | property | `"none" \| "sentences" \| "words" \| "characters" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| autoComplete                           | property | `"name" \| "additional-name" \| "address-line1" \| "address-line2" \| "birthdate-day" \| "birthdate-full" \| "birthdate-month" \| "birthdate-year" \| "cc-csc" \| "cc-exp" \| "cc-exp-day" \| "cc-exp-month" \| "cc-exp-year" \| "cc-number" \| "cc-name" \| "cc-given-name" \| "cc-middle-name" \| "cc-family-name" \| "cc-type" \| "country" \| "current-password" \| "email" \| "family-name" \| "gender" \| "given-name" \| "honorific-prefix" \| "honorific-suffix" \| "name-family" \| "name-given" \| "name-middle" \| "name-middle-initial" \| "name-prefix" \| "name-suffix" \| "new-password" \| "nickname" \| "one-time-code" \| "organization" \| "organization-title" \| "password" \| "password-new" \| "postal-address" \| "postal-address-country" \| "postal-address-extended" \| "postal-address-extended-postal-code" \| "postal-address-locality" \| "postal-address-region" \| "postal-code" \| "street-address" \| "sms-otp" \| "tel" \| "tel-country-code" \| "tel-national" \| "tel-device" \| "url" \| "username" \| "username-new" \| "off" \| undefined` | no       |             |
| autoCorrect                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| autoFocus                              | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| blurOnSubmit                           | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| caretHidden                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| children                               | property | `React.ReactNode`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| clearButtonMode                        | property | `"never" \| "while-editing" \| "unless-editing" \| "always" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| clearTextOnFocus                       | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| collapsable                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| collapsableChildren                    | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| contextMenuHidden                      | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| cursorColor                            | property | `ColorValue \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| dataDetectorTypes                      | property | `DataDetectorTypes \| DataDetectorTypes[] \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| defaultValue                           | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| disabled                               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| disableFullscreenUI                    | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| disableKeyboardShortcuts               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| enablesReturnKeyAutomatically          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| enterKeyHint                           | property | `EnterKeyHintTypeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| focusable                              | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| hasTVPreferredFocus                    | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| hitSlop                                | property | `number \| Insets \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| id                                     | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| importantForAccessibility              | property | `"auto" \| "yes" \| "no" \| "no-hide-descendants" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| importantForAutofill                   | property | `"auto" \| "yes" \| "no" \| "noExcludeDescendants" \| "yesExcludeDescendants" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| inlineImageLeft                        | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| inlineImagePadding                     | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| inputAccessoryViewButtonLabel          | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| inputAccessoryViewID                   | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| inputMode                              | property | `InputModeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| invalid                                | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| isTVSelectable                         | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| keyboardAppearance                     | property | `"default" \| "light" \| "dark" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| keyboardType                           | property | `KeyboardTypeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | no       |             |
| leadingAccessory                       | property | `React.ReactNode`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| lineBreakModeIOS                       | property | `"wordWrapping" \| "char" \| "clip" \| "head" \| "middle" \| "tail" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| lineBreakStrategyIOS                   | property | `"none" \| "standard" \| "hangul-word" \| "push-out" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | no       |             |
| maxFontSizeMultiplier                  | property | `number \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| maxLength                              | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| multiline                              | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| nativeID                               | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| needsOffscreenAlphaCompositing         | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| numberOfLines                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| onAccessibilityAction                  | property | `((event: AccessibilityActionEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| onAccessibilityEscape                  | property | `(() => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| onAccessibilityTap                     | property | `(() => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| onBlur                                 | property | `((e: BlurEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onChange                               | property | `((e: TextInputChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | no       |             |
| onChangeText                           | property | `((text: string) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onContentSizeChange                    | property | `((e: TextInputContentSizeChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| onEndEditing                           | property | `((e: TextInputEndEditingEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| onFocus                                | property | `((e: FocusEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onKeyPress                             | property | `((e: TextInputKeyPressEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onLayout                               | property | `((event: LayoutChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | no       |             |
| onMagicTap                             | property | `(() => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| onMoveShouldSetResponder               | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| onMoveShouldSetResponderCapture        | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| onPointerCancel                        | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerCancelCapture                 | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerDown                          | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerDownCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerEnter                         | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerEnterCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerLeave                         | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerLeaveCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerMove                          | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerMoveCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerUp                            | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPointerUpCapture                     | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPress                                | property | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onPressIn                              | property | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onPressOut                             | property | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onResponderEnd                         | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onResponderGrant                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onResponderMove                        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onResponderReject                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onResponderRelease                     | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onResponderStart                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onResponderTerminate                   | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onResponderTerminationRequest          | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| onScroll                               | property | `((e: TextInputScrollEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | no       |             |
| onSelectionChange                      | property | `((e: TextInputSelectionChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| onStartShouldSetResponder              | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| onStartShouldSetResponderCapture       | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| onSubmitEditing                        | property | `((e: TextInputSubmitEditingEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| onTouchCancel                          | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onTouchEnd                             | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onTouchEndCapture                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onTouchMove                            | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onTouchStart                           | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| passwordRules                          | property | `string \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| placeholder                            | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| pointerEvents                          | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| readOnly                               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| rejectResponderTermination             | property | `boolean \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| removeClippedSubviews                  | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| renderToHardwareTextureAndroid         | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| returnKeyLabel                         | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| returnKeyType                          | property | `ReturnKeyTypeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | no       |             |
| role                                   | property | `Role \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | no       |             |
| screenReaderFocusable                  | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| scrollEnabled                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| secureTextEntry                        | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| selection                              | property | `{ start: number; end?: number \| undefined; } \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | no       |             |
| selectionColor                         | property | `ColorValue \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| selectionHandleColor                   | property | `ColorValue \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| selectionState                         | property | `DocumentSelectionState \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| selectTextOnFocus                      | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| shouldRasterizeIOS                     | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| showSoftInputOnFocus                   | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| size                                   | property | `ControlSize \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| smartInsertDelete                      | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| spellCheck                             | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| style                                  | property | `StyleProp<TextStyle>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| submitBehavior                         | property | `SubmitBehavior \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| tabIndex                               | property | `0 \| -1 \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| testID                                 | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| textAlign                              | property | `"left" \| "right" \| "center" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | no       |             |
| textAlignVertical                      | property | `"top" \| "bottom" \| "auto" \| "center" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| textBreakStrategy                      | property | `"simple" \| "highQuality" \| "balanced" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| textContentType                        | property | `"name" \| "none" \| "nickname" \| "password" \| "username" \| "flightNumber" \| "URL" \| "addressCity" \| "addressCityAndState" \| "addressState" \| "countryName" \| "creditCardNumber" \| "creditCardExpiration" \| "creditCardExpirationMonth" \| "creditCardExpirationYear" \| "creditCardSecurityCode" \| "creditCardType" \| "creditCardName" \| "creditCardGivenName" \| "creditCardMiddleName" \| "creditCardFamilyName" \| "emailAddress" \| "familyName" \| "fullStreetAddress" \| "givenName" \| "jobTitle" \| "location" \| "middleName" \| "namePrefix" \| "nameSuffix" \| "organizationName" \| "postalCode" \| "streetAddressLine1" \| "streetAddressLine2" \| "sublocality" \| "telephoneNumber" \| "newPassword" \| "oneTimeCode" \| "birthdate" \| "birthdateDay" \| "birthdateMonth" \| "birthdateYear" \| "cellularEID" \| "cellularIMEI" \| "dateTime" \| "shipmentTrackingNumber" \| undefined`                                                                                                                                                              | no       |             |
| trailingAccessory                      | property | `React.ReactNode`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| tvParallaxMagnification                | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| tvParallaxShiftDistanceX               | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| tvParallaxShiftDistanceY               | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| tvParallaxTiltAngle                    | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| underlineColorAndroid                  | property | `ColorValue \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| value                                  | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| verticalAlign                          | property | `"top" \| "bottom" \| "auto" \| "middle" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |

## TextProps

Kind: `type`
Module: `src/primitives/text/types.ts`
Source: `src/primitives/text/types.ts:7:1`

### Members

| Name          | Kind     | Type                                                                                                                                          | Required | Description |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| align         | property | `"left" \| "right" \| "auto" \| "center" \| "justify" \| undefined`                                                                           | no       |             |
| children      | property | `React.ReactNode`                                                                                                                             | no       |             |
| color         | property | `"primary" \| "secondary" \| "tertiary" \| "quaternary" \| "neutral" \| "success" \| "warning" \| "error" \| "info" \| "danger" \| undefined` | no       |             |
| emphasis      | property | `"default" \| "subtle" \| "muted" \| "inverse" \| undefined`                                                                                  | no       |             |
| i18nKey       | property | `string \| undefined`                                                                                                                         | no       |             |
| italic        | property | `boolean \| undefined`                                                                                                                        | no       |             |
| numberOfLines | property | `number \| undefined`                                                                                                                         | no       |             |
| testID        | property | `string \| undefined`                                                                                                                         | no       |             |
| variant       | property | `TextVariant \| undefined`                                                                                                                    | no       |             |
| weight        | property | `TextWeight \| undefined`                                                                                                                     | no       |             |

## ThemeConfig

Kind: `type`
Module: `node_modules/@ankhorage/contracts/dist/types.d.ts`
Source: `node_modules/@ankhorage/contracts/dist/types.d.ts:7:1`

### Members

| Name  | Kind     | Type              | Required | Description |
| ----- | -------- | ----------------- | -------- | ----------- |
| dark  | property | `ThemeModeConfig` | yes      |             |
| id    | property | `string`          | yes      |             |
| light | property | `ThemeModeConfig` | yes      |             |
| name  | property | `string`          | yes      |             |

## ThemeContext

Kind: `value`
Module: `src/theme/ThemeContext.tsx`
Source: `src/theme/ThemeContext.tsx:13:14`

## ThemeModeConfig

Kind: `type`
Module: `node_modules/@ankhorage/contracts/dist/types.d.ts`
Source: `node_modules/@ankhorage/contracts/dist/types.d.ts:3:1`

### Members

| Name         | Kind     | Type                                                                                                   | Required | Description |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------ | -------- | ----------- |
| harmony      | property | `"complementary" \| "monochromatic" \| "analogous" \| "triadic" \| "tetradic" \| "splitComplementary"` | yes      |             |
| primaryColor | property | `string`                                                                                               | yes      |             |

## ThemeProvider

Kind: `value`
Module: `src/theme/ThemeContext.tsx`
Source: `src/theme/ThemeContext.tsx:31:14`

### Signatures

- `({
  children,
  initialConfig,
  initialMode = 'light',
}: { children: React.ReactNode; initialConfig?: Partial<ThemeConfig>; initialMode?: "light" | "dark"; }) => React.JSX.Element`
  - {
    children,
    initialConfig,
    initialMode = 'light',
    }: `{ children: React.ReactNode; initialConfig?: Partial<ThemeConfig>; initialMode?: "light" | "dark"; }`
  - returns: `React.JSX.Element`

## ThemeSemantics

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:67:1`

### Members

| Name      | Kind     | Type               | Required | Description |
| --------- | -------- | ------------------ | -------- | ----------- |
| accent    | property | `RoleSemantics`    | yes      |             |
| action    | property | `ActionSemantics`  | yes      |             |
| border    | property | `BorderSemantics`  | yes      |             |
| brand     | property | `RoleSemantics`    | yes      |             |
| content   | property | `ContentSemantics` | yes      |             |
| danger    | property | `RoleSemantics`    | yes      |             |
| error     | property | `RoleSemantics`    | yes      |             |
| highlight | property | `RoleSemantics`    | yes      |             |
| info      | property | `RoleSemantics`    | yes      |             |
| neutral   | property | `NeutralSemantics` | yes      |             |
| secondary | property | `RoleSemantics`    | yes      |             |
| success   | property | `RoleSemantics`    | yes      |             |
| surface   | property | `SurfaceSemantics` | yes      |             |
| warning   | property | `RoleSemantics`    | yes      |             |

## ThemeTokens

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:97:1`

### Members

| Name       | Kind     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Required | Description |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| colors     | property | `{ [key: string]: string; primary: string; secondary: string; accent: string; highlight: string; tertiary: string; quaternary: string; background: string; surface: string; text: string; textSecondary: string; border: string; error: string; success: string; warning: string; info: string; }`                                                                                                                                                                                                                                                                                                                                                                    | yes      |             |
| radii      | property | `{ none: 0; s: number; m: number; l: number; full: number; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | yes      |             |
| semantics  | property | `ThemeSemantics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | yes      |             |
| shadows    | property | `{ [key: string]: number; soft: number; medium: number; hard: number; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | yes      |             |
| spacing    | property | `{ [key: string]: number; none: 0; xs: number; s: number; m: number; l: number; xl: number; xxl: number; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | yes      |             |
| swatches   | property | `GeneratedThemeSwatches`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | yes      |             |
| typography | property | `{ headings: Record<1 \| 2 \| 3 \| 4 \| 5 \| 6, { size: number; lineHeight: number; weight: "regular" \| "medium" \| "semiBold" \| "bold"; }>; sizes: { xs: number; s: number; m: number; l: number; xl: number; xxl: number; "3xl": number; h1: number; h2: number; h3: number; h4: number; h5: number; h6: number; [key: string]: number; }; weights: { thin: FontWeight; extraLight: FontWeight; light: FontWeight; regular: FontWeight; medium: FontWeight; semiBold: FontWeight; bold: FontWeight; extraBold: FontWeight; black: FontWeight; }; fonts: { normal: Record<FontWeight, string \| undefined>; italic: Record<FontWeight, string \| undefined>; }; }` | yes      |             |

## Toast

Kind: `function`
Module: `src/components/toast/Toast.tsx`
Source: `src/components/toast/Toast.tsx:41:1`

### Signatures

- `({ title, description, status = 'default', onDismiss, testID }: ToastProps) => React.JSX.Element`
  - { title, description, status = 'default', onDismiss, testID }: `ToastProps`
  - returns: `React.JSX.Element`

## ToastOptions

Kind: `type`
Module: `src/components/toast/types.ts`
Source: `src/components/toast/types.ts:15:1`

### Members

| Name        | Kind     | Type                       | Required | Description |
| ----------- | -------- | -------------------------- | -------- | ----------- |
| description | property | `React.ReactNode`          | no       |             |
| duration    | property | `number \| undefined`      | no       |             |
| id          | property | `string \| undefined`      | no       |             |
| status      | property | `ToastStatus \| undefined` | no       |             |
| testID      | property | `string \| undefined`      | no       |             |
| title       | property | `React.ReactNode`          | no       |             |

## ToastProps

Kind: `type`
Module: `src/components/toast/types.ts`
Source: `src/components/toast/types.ts:7:1`

### Members

| Name        | Kind     | Type                        | Required | Description |
| ----------- | -------- | --------------------------- | -------- | ----------- |
| description | property | `React.ReactNode`           | no       |             |
| onDismiss   | property | `(() => void) \| undefined` | no       |             |
| status      | property | `ToastStatus \| undefined`  | no       |             |
| testID      | property | `string \| undefined`       | no       |             |
| title       | property | `React.ReactNode`           | no       |             |

## ToastProvider

Kind: `function`
Module: `src/components/toast/ToastProvider.tsx`
Source: `src/components/toast/ToastProvider.tsx:22:1`

### Signatures

- `({
  children,
  defaultDuration = 4000,
}: { children: React.ReactNode; defaultDuration?: number; }) => React.JSX.Element`
  - {
    children,
    defaultDuration = 4000,
    }: `{ children: React.ReactNode; defaultDuration?: number; }`
  - returns: `React.JSX.Element`

## ToastStatus

Kind: `unknown`
Module: `src/components/toast/types.ts`
Source: `src/components/toast/types.ts:5:1`

## Tooltip

Kind: `function`
Module: `src/components/tooltip/Tooltip.tsx`
Source: `src/components/tooltip/Tooltip.tsx:24:1`

### Signatures

- `({
  children,
  content,
  delay = 150,
  placement = 'top',
  testID,
}: TooltipProps) => React.JSX.Element`
  - {
    children,
    content,
    delay = 150,
    placement = 'top',
    testID,
    }: `TooltipProps`
  - returns: `React.JSX.Element`

## TooltipProps

Kind: `type`
Module: `src/components/tooltip/types.ts`
Source: `src/components/tooltip/types.ts:3:1`

### Members

| Name      | Kind     | Type                             | Required | Description |
| --------- | -------- | -------------------------------- | -------- | ----------- |
| children  | property | `React.ReactNode`                | no       |             |
| content   | property | `React.ReactNode`                | no       |             |
| delay     | property | `number \| undefined`            | no       |             |
| placement | property | `"top" \| "bottom" \| undefined` | no       |             |
| testID    | property | `string \| undefined`            | no       |             |

## TranslationProvider

Kind: `function`
Module: `src/context/TranslationContext.tsx`
Source: `src/context/TranslationContext.tsx:27:1`

### Signatures

- `(props: { t: Translator; i18n?: I18nInstance | null; children: React.ReactNode; }) => React.JSX.Element`
  - props: `{ t: Translator; i18n?: I18nInstance | null; children: React.ReactNode; }`
  - returns: `React.JSX.Element`

## TranslationRuntime

Kind: `type`
Module: `src/context/TranslationContext.tsx`
Source: `src/context/TranslationContext.tsx:15:1`

### Members

| Name | Kind     | Type                   | Required | Description |
| ---- | -------- | ---------------------- | -------- | ----------- |
| i18n | property | `I18nInstance \| null` | yes      |             |
| t    | property | `Translator`           | yes      |             |

## Translator

Kind: `unknown`
Module: `src/context/TranslationContext.tsx`
Source: `src/context/TranslationContext.tsx:13:1`

## useBreakpoint

Kind: `function`
Module: `src/core/responsive/useBreakpoint.ts`
Source: `src/core/responsive/useBreakpoint.ts:6:1`

### Signatures

- `() => "base" | "sm" | "md" | "lg" | "xl"`
  - returns: `"base" | "sm" | "md" | "lg" | "xl"`

## useFontContext

Kind: `function`
Module: `src/context/FontContext.tsx`
Source: `src/context/FontContext.tsx:57:1`

### Signatures

- `() => FontRuntime`
  - returns: `FontRuntime`

## useResponsiveRuntime

Kind: `function`
Module: `src/core/responsive/ResponsiveProvider.tsx`
Source: `src/core/responsive/ResponsiveProvider.tsx:23:1`

### Signatures

- `() => ResponsiveRuntime`
  - returns: `ResponsiveRuntime`

## useTheme

Kind: `value`
Module: `src/theme/ThemeContext.tsx`
Source: `src/theme/ThemeContext.tsx:83:14`

### Signatures

- `() => { theme: SurfaceTheme; mode: "light" | "dark"; setThemeConfig: (config: Partial<ThemeConfig>) => void; setMode: (mode: "light" | "dark") => void; _hasProvider?: boolean; }`
  - returns: `{ theme: SurfaceTheme; mode: "light" | "dark"; setThemeConfig: (config: Partial<ThemeConfig>) => void; setMode: (mode: "light" | "dark") => void; _hasProvider?: boolean; }`

## useThemeConfig

Kind: `value`
Module: `src/theme/ThemeContext.tsx`
Source: `src/theme/ThemeContext.tsx:87:14`

### Signatures

- `() => (config: Partial<ThemeConfig>) => void`
  - returns: `(config: Partial<ThemeConfig>) => void`

## useThemeMode

Kind: `value`
Module: `src/theme/ThemeContext.tsx`
Source: `src/theme/ThemeContext.tsx:92:14`

### Signatures

- `() => { mode: "light" | "dark"; setMode: (mode: "light" | "dark") => void; }`
  - returns: `{ mode: "light" | "dark"; setMode: (mode: "light" | "dark") => void; }`

## useToast

Kind: `function`
Module: `src/components/toast/ToastProvider.tsx`
Source: `src/components/toast/ToastProvider.tsx:106:1`

### Signatures

- `() => ToastContextValue`
  - returns: `ToastContextValue`

## useTranslationContext

Kind: `function`
Module: `src/context/TranslationContext.tsx`
Source: `src/context/TranslationContext.tsx:52:1`

### Signatures

- `() => TranslationRuntime`
  - returns: `TranslationRuntime`
