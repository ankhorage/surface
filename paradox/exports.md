# Public API

## Accordion

Kind: `function`
Module: `src/features/accordion/adapters/inbound/Accordion.tsx`
Source: `src/features/accordion/adapters/inbound/Accordion.tsx:14:1`

Coordinates controlled or uncontrolled accordion expansion state.

### Signatures

- `(props: AccordionProps) => React.JSX.Element`
  - props: `AccordionProps`
  - returns: `React.JSX.Element`

## AccordionContent

Kind: `function`
Module: `src/features/accordion/adapters/inbound/AccordionContent.tsx`
Source: `src/features/accordion/adapters/inbound/AccordionContent.tsx:8:1`

Renders an accordion item's content when expanded or force-mounted.

### Signatures

- `({
children,
forceMount = false,
style,
...viewProps
}: AccordionContentProps) => React.JSX.Element | null`
  - {
    children,
    forceMount = false,
    style,
    ...viewProps
    }: `AccordionContentProps`
  - returns: `React.JSX.Element | null`

## AccordionContentProps

Kind: `type`
Module: `src/types/accordion.ts`
Source: `src/types/accordion.ts:48:1`

### Members

| Name                                   | Kind     | Type                                                                                                          | Required | Description |
| -------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityActions                   | property | `readonly Readonly<{ name: AccessibilityActionName \| string; label?: string \| undefined; }>[] \| undefined` | no       |             |
| accessibilityElementsHidden            | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityHint                      | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityIgnoresInvertColors       | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityLabel                     | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityLabelledBy                | property | `string \| string[] \| undefined`                                                                             | no       |             |
| accessibilityLanguage                  | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityLargeContentTitle         | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityLiveRegion                | property | `"none" \| "polite" \| "assertive" \| undefined`                                                              | no       |             |
| accessibilityRespondsToUserInteraction | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityRole                      | property | `AccessibilityRole \| undefined`                                                                              | no       |             |
| accessibilityShowsLargeContentViewer   | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityState                     | property | `AccessibilityState \| undefined`                                                                             | no       |             |
| accessibilityValue                     | property | `AccessibilityValue \| undefined`                                                                             | no       |             |
| accessibilityViewIsModal               | property | `boolean \| undefined`                                                                                        | no       |             |
| accessible                             | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-busy                              | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-checked                           | property | `boolean \| "mixed" \| undefined`                                                                             | no       |             |
| aria-disabled                          | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-expanded                          | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-hidden                            | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-label                             | property | `string \| undefined`                                                                                         | no       |             |
| aria-labelledby                        | property | `string \| undefined`                                                                                         | no       |             |
| aria-live                              | property | `"off" \| "polite" \| "assertive" \| undefined`                                                               | no       |             |
| aria-modal                             | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-selected                          | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-valuemax                          | property | `number \| undefined`                                                                                         | no       |             |
| aria-valuemin                          | property | `number \| undefined`                                                                                         | no       |             |
| aria-valuenow                          | property | `number \| undefined`                                                                                         | no       |             |
| aria-valuetext                         | property | `string \| undefined`                                                                                         | no       |             |
| children                               | property | `React.ReactNode`                                                                                             | no       |             |
| collapsable                            | property | `boolean \| undefined`                                                                                        | no       |             |
| collapsableChildren                    | property | `boolean \| undefined`                                                                                        | no       |             |
| focusable                              | property | `boolean \| undefined`                                                                                        | no       |             |
| forceMount                             | property | `boolean \| undefined`                                                                                        | no       |             |
| hasTVPreferredFocus                    | property | `boolean \| undefined`                                                                                        | no       |             |
| hitSlop                                | property | `number \| Insets \| null \| undefined`                                                                       | no       |             |
| id                                     | property | `string \| undefined`                                                                                         | no       |             |
| importantForAccessibility              | property | `"auto" \| "yes" \| "no" \| "no-hide-descendants" \| undefined`                                               | no       |             |
| isTVSelectable                         | property | `boolean \| undefined`                                                                                        | no       |             |
| nativeID                               | property | `string \| undefined`                                                                                         | no       |             |
| needsOffscreenAlphaCompositing         | property | `boolean \| undefined`                                                                                        | no       |             |
| onAccessibilityAction                  | property | `((event: AccessibilityActionEvent) => void) \| undefined`                                                    | no       |             |
| onAccessibilityEscape                  | property | `(() => void) \| undefined`                                                                                   | no       |             |
| onAccessibilityTap                     | property | `(() => void) \| undefined`                                                                                   | no       |             |
| onBlur                                 | property | `((e: BlurEvent) => void) \| null \| undefined`                                                               | no       |             |
| onFocus                                | property | `((e: FocusEvent) => void) \| null \| undefined`                                                              | no       |             |
| onLayout                               | property | `((event: LayoutChangeEvent) => void) \| undefined`                                                           | no       |             |
| onMagicTap                             | property | `(() => void) \| undefined`                                                                                   | no       |             |
| onMoveShouldSetResponder               | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onMoveShouldSetResponderCapture        | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onPointerCancel                        | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerCancelCapture                 | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerDown                          | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerDownCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerEnter                         | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerEnterCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerLeave                         | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerLeaveCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerMove                          | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerMoveCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerUp                            | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerUpCapture                     | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onResponderEnd                         | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderGrant                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderMove                        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderReject                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderRelease                     | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderStart                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderTerminate                   | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderTerminationRequest          | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onStartShouldSetResponder              | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onStartShouldSetResponderCapture       | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onTouchCancel                          | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchEnd                             | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchEndCapture                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchMove                            | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchStart                           | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| pointerEvents                          | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                   | no       |             |
| removeClippedSubviews                  | property | `boolean \| undefined`                                                                                        | no       |             |
| renderToHardwareTextureAndroid         | property | `boolean \| undefined`                                                                                        | no       |             |
| role                                   | property | `Role \| undefined`                                                                                           | no       |             |
| screenReaderFocusable                  | property | `boolean \| undefined`                                                                                        | no       |             |
| shouldRasterizeIOS                     | property | `boolean \| undefined`                                                                                        | no       |             |
| style                                  | property | `StyleProp<ViewStyle>`                                                                                        | no       |             |
| tabIndex                               | property | `0 \| -1 \| undefined`                                                                                        | no       |             |
| testID                                 | property | `string \| undefined`                                                                                         | no       |             |
| tvParallaxMagnification                | property | `number \| undefined`                                                                                         | no       |             |
| tvParallaxShiftDistanceX               | property | `number \| undefined`                                                                                         | no       |             |
| tvParallaxShiftDistanceY               | property | `number \| undefined`                                                                                         | no       |             |
| tvParallaxTiltAngle                    | property | `number \| undefined`                                                                                         | no       |             |

## AccordionItem

Kind: `function`
Module: `src/features/accordion/adapters/inbound/AccordionItem.tsx`
Source: `src/features/accordion/adapters/inbound/AccordionItem.tsx:9:1`

Provides one accordion item's value, state, and trigger/content identifiers.

### Signatures

- `({
children,
disabled = false,
interactionPolicy,
value,
...viewProps
}: AccordionItemProps) => React.JSX.Element`
  - {
    children,
    disabled = false,
    interactionPolicy,
    value,
    ...viewProps
    }: `AccordionItemProps`
  - returns: `React.JSX.Element`

## AccordionItemProps

Kind: `type`
Module: `src/types/accordion.ts`
Source: `src/types/accordion.ts:31:1`

### Members

| Name                                   | Kind     | Type                                                                                                          | Required | Description |
| -------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityActions                   | property | `readonly Readonly<{ name: AccessibilityActionName \| string; label?: string \| undefined; }>[] \| undefined` | no       |             |
| accessibilityElementsHidden            | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityHint                      | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityIgnoresInvertColors       | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityLabel                     | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityLabelledBy                | property | `string \| string[] \| undefined`                                                                             | no       |             |
| accessibilityLanguage                  | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityLargeContentTitle         | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityLiveRegion                | property | `"none" \| "polite" \| "assertive" \| undefined`                                                              | no       |             |
| accessibilityRespondsToUserInteraction | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityRole                      | property | `AccessibilityRole \| undefined`                                                                              | no       |             |
| accessibilityShowsLargeContentViewer   | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityState                     | property | `AccessibilityState \| undefined`                                                                             | no       |             |
| accessibilityValue                     | property | `AccessibilityValue \| undefined`                                                                             | no       |             |
| accessibilityViewIsModal               | property | `boolean \| undefined`                                                                                        | no       |             |
| accessible                             | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-busy                              | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-checked                           | property | `boolean \| "mixed" \| undefined`                                                                             | no       |             |
| aria-disabled                          | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-expanded                          | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-hidden                            | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-label                             | property | `string \| undefined`                                                                                         | no       |             |
| aria-labelledby                        | property | `string \| undefined`                                                                                         | no       |             |
| aria-live                              | property | `"off" \| "polite" \| "assertive" \| undefined`                                                               | no       |             |
| aria-modal                             | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-selected                          | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-valuemax                          | property | `number \| undefined`                                                                                         | no       |             |
| aria-valuemin                          | property | `number \| undefined`                                                                                         | no       |             |
| aria-valuenow                          | property | `number \| undefined`                                                                                         | no       |             |
| aria-valuetext                         | property | `string \| undefined`                                                                                         | no       |             |
| children                               | property | `React.ReactNode`                                                                                             | no       |             |
| collapsable                            | property | `boolean \| undefined`                                                                                        | no       |             |
| collapsableChildren                    | property | `boolean \| undefined`                                                                                        | no       |             |
| disabled                               | property | `boolean \| undefined`                                                                                        | no       |             |
| focusable                              | property | `boolean \| undefined`                                                                                        | no       |             |
| hasTVPreferredFocus                    | property | `boolean \| undefined`                                                                                        | no       |             |
| hitSlop                                | property | `number \| Insets \| null \| undefined`                                                                       | no       |             |
| id                                     | property | `string \| undefined`                                                                                         | no       |             |
| importantForAccessibility              | property | `"auto" \| "yes" \| "no" \| "no-hide-descendants" \| undefined`                                               | no       |             |
| interactionPolicy                      | property | `InteractionPolicy \| undefined`                                                                              | no       |             |
| isTVSelectable                         | property | `boolean \| undefined`                                                                                        | no       |             |
| nativeID                               | property | `string \| undefined`                                                                                         | no       |             |
| needsOffscreenAlphaCompositing         | property | `boolean \| undefined`                                                                                        | no       |             |
| onAccessibilityAction                  | property | `((event: AccessibilityActionEvent) => void) \| undefined`                                                    | no       |             |
| onAccessibilityEscape                  | property | `(() => void) \| undefined`                                                                                   | no       |             |
| onAccessibilityTap                     | property | `(() => void) \| undefined`                                                                                   | no       |             |
| onBlur                                 | property | `((e: BlurEvent) => void) \| null \| undefined`                                                               | no       |             |
| onFocus                                | property | `((e: FocusEvent) => void) \| null \| undefined`                                                              | no       |             |
| onLayout                               | property | `((event: LayoutChangeEvent) => void) \| undefined`                                                           | no       |             |
| onMagicTap                             | property | `(() => void) \| undefined`                                                                                   | no       |             |
| onMoveShouldSetResponder               | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onMoveShouldSetResponderCapture        | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onPointerCancel                        | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerCancelCapture                 | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerDown                          | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerDownCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerEnter                         | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerEnterCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerLeave                         | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerLeaveCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerMove                          | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerMoveCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerUp                            | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerUpCapture                     | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onResponderEnd                         | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderGrant                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderMove                        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderReject                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderRelease                     | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderStart                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderTerminate                   | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderTerminationRequest          | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onStartShouldSetResponder              | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onStartShouldSetResponderCapture       | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onTouchCancel                          | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchEnd                             | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchEndCapture                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchMove                            | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchStart                           | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| pointerEvents                          | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                   | no       |             |
| removeClippedSubviews                  | property | `boolean \| undefined`                                                                                        | no       |             |
| renderToHardwareTextureAndroid         | property | `boolean \| undefined`                                                                                        | no       |             |
| role                                   | property | `Role \| undefined`                                                                                           | no       |             |
| screenReaderFocusable                  | property | `boolean \| undefined`                                                                                        | no       |             |
| shouldRasterizeIOS                     | property | `boolean \| undefined`                                                                                        | no       |             |
| style                                  | property | `StyleProp<ViewStyle>`                                                                                        | no       |             |
| tabIndex                               | property | `0 \| -1 \| undefined`                                                                                        | no       |             |
| testID                                 | property | `string \| undefined`                                                                                         | no       |             |
| tvParallaxMagnification                | property | `number \| undefined`                                                                                         | no       |             |
| tvParallaxShiftDistanceX               | property | `number \| undefined`                                                                                         | no       |             |
| tvParallaxShiftDistanceY               | property | `number \| undefined`                                                                                         | no       |             |
| tvParallaxTiltAngle                    | property | `number \| undefined`                                                                                         | no       |             |
| value                                  | property | `string`                                                                                                      | yes      |             |

## AccordionMode

Kind: `unknown`
Module: `src/types/accordion.ts`
Source: `src/types/accordion.ts:6:1`

## AccordionMultipleProps

Kind: `type`
Module: `src/types/accordion.ts`
Source: `src/types/accordion.ts:21:1`

### Members

| Name                                   | Kind     | Type                                                                                                          | Required | Description |
| -------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityActions                   | property | `readonly Readonly<{ name: AccessibilityActionName \| string; label?: string \| undefined; }>[] \| undefined` | no       |             |
| accessibilityElementsHidden            | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityHint                      | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityIgnoresInvertColors       | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityLabel                     | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityLabelledBy                | property | `string \| string[] \| undefined`                                                                             | no       |             |
| accessibilityLanguage                  | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityLargeContentTitle         | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityLiveRegion                | property | `"none" \| "polite" \| "assertive" \| undefined`                                                              | no       |             |
| accessibilityRespondsToUserInteraction | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityRole                      | property | `AccessibilityRole \| undefined`                                                                              | no       |             |
| accessibilityShowsLargeContentViewer   | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityState                     | property | `AccessibilityState \| undefined`                                                                             | no       |             |
| accessibilityValue                     | property | `AccessibilityValue \| undefined`                                                                             | no       |             |
| accessibilityViewIsModal               | property | `boolean \| undefined`                                                                                        | no       |             |
| accessible                             | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-busy                              | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-checked                           | property | `boolean \| "mixed" \| undefined`                                                                             | no       |             |
| aria-disabled                          | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-expanded                          | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-hidden                            | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-label                             | property | `string \| undefined`                                                                                         | no       |             |
| aria-labelledby                        | property | `string \| undefined`                                                                                         | no       |             |
| aria-live                              | property | `"off" \| "polite" \| "assertive" \| undefined`                                                               | no       |             |
| aria-modal                             | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-selected                          | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-valuemax                          | property | `number \| undefined`                                                                                         | no       |             |
| aria-valuemin                          | property | `number \| undefined`                                                                                         | no       |             |
| aria-valuenow                          | property | `number \| undefined`                                                                                         | no       |             |
| aria-valuetext                         | property | `string \| undefined`                                                                                         | no       |             |
| children                               | property | `React.ReactNode`                                                                                             | no       |             |
| collapsable                            | property | `boolean \| undefined`                                                                                        | no       |             |
| collapsableChildren                    | property | `boolean \| undefined`                                                                                        | no       |             |
| collapsible                            | property | `undefined`                                                                                                   | no       |             |
| defaultValue                           | property | `readonly string[] \| undefined`                                                                              | no       |             |
| disabled                               | property | `boolean \| undefined`                                                                                        | no       |             |
| focusable                              | property | `boolean \| undefined`                                                                                        | no       |             |
| hasTVPreferredFocus                    | property | `boolean \| undefined`                                                                                        | no       |             |
| hitSlop                                | property | `number \| Insets \| null \| undefined`                                                                       | no       |             |
| id                                     | property | `string \| undefined`                                                                                         | no       |             |
| importantForAccessibility              | property | `"auto" \| "yes" \| "no" \| "no-hide-descendants" \| undefined`                                               | no       |             |
| interactionPolicy                      | property | `InteractionPolicy \| undefined`                                                                              | no       |             |
| isTVSelectable                         | property | `boolean \| undefined`                                                                                        | no       |             |
| nativeID                               | property | `string \| undefined`                                                                                         | no       |             |
| needsOffscreenAlphaCompositing         | property | `boolean \| undefined`                                                                                        | no       |             |
| onAccessibilityAction                  | property | `((event: AccessibilityActionEvent) => void) \| undefined`                                                    | no       |             |
| onAccessibilityEscape                  | property | `(() => void) \| undefined`                                                                                   | no       |             |
| onAccessibilityTap                     | property | `(() => void) \| undefined`                                                                                   | no       |             |
| onBlur                                 | property | `((e: BlurEvent) => void) \| null \| undefined`                                                               | no       |             |
| onFocus                                | property | `((e: FocusEvent) => void) \| null \| undefined`                                                              | no       |             |
| onLayout                               | property | `((event: LayoutChangeEvent) => void) \| undefined`                                                           | no       |             |
| onMagicTap                             | property | `(() => void) \| undefined`                                                                                   | no       |             |
| onMoveShouldSetResponder               | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onMoveShouldSetResponderCapture        | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onPointerCancel                        | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerCancelCapture                 | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerDown                          | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerDownCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerEnter                         | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerEnterCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerLeave                         | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerLeaveCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerMove                          | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerMoveCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerUp                            | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerUpCapture                     | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onResponderEnd                         | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderGrant                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderMove                        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderReject                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderRelease                     | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderStart                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderTerminate                   | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderTerminationRequest          | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onStartShouldSetResponder              | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onStartShouldSetResponderCapture       | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onTouchCancel                          | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchEnd                             | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchEndCapture                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchMove                            | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchStart                           | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onValueChange                          | property | `((value: readonly string[]) => void) \| undefined`                                                           | no       |             |
| pointerEvents                          | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                   | no       |             |
| removeClippedSubviews                  | property | `boolean \| undefined`                                                                                        | no       |             |
| renderToHardwareTextureAndroid         | property | `boolean \| undefined`                                                                                        | no       |             |
| role                                   | property | `Role \| undefined`                                                                                           | no       |             |
| screenReaderFocusable                  | property | `boolean \| undefined`                                                                                        | no       |             |
| shouldRasterizeIOS                     | property | `boolean \| undefined`                                                                                        | no       |             |
| style                                  | property | `StyleProp<ViewStyle>`                                                                                        | no       |             |
| tabIndex                               | property | `0 \| -1 \| undefined`                                                                                        | no       |             |
| testID                                 | property | `string \| undefined`                                                                                         | no       |             |
| tvParallaxMagnification                | property | `number \| undefined`                                                                                         | no       |             |
| tvParallaxShiftDistanceX               | property | `number \| undefined`                                                                                         | no       |             |
| tvParallaxShiftDistanceY               | property | `number \| undefined`                                                                                         | no       |             |
| tvParallaxTiltAngle                    | property | `number \| undefined`                                                                                         | no       |             |
| type                                   | property | `"multiple"`                                                                                                  | yes      |             |
| value                                  | property | `readonly string[] \| undefined`                                                                              | no       |             |

## AccordionProps

Kind: `unknown`
Module: `src/types/accordion.ts`
Source: `src/types/accordion.ts:29:1`

## AccordionSingleProps

Kind: `type`
Module: `src/types/accordion.ts`
Source: `src/types/accordion.ts:13:1`

### Members

| Name                                   | Kind     | Type                                                                                                          | Required | Description |
| -------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityActions                   | property | `readonly Readonly<{ name: AccessibilityActionName \| string; label?: string \| undefined; }>[] \| undefined` | no       |             |
| accessibilityElementsHidden            | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityHint                      | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityIgnoresInvertColors       | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityLabel                     | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityLabelledBy                | property | `string \| string[] \| undefined`                                                                             | no       |             |
| accessibilityLanguage                  | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityLargeContentTitle         | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityLiveRegion                | property | `"none" \| "polite" \| "assertive" \| undefined`                                                              | no       |             |
| accessibilityRespondsToUserInteraction | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityRole                      | property | `AccessibilityRole \| undefined`                                                                              | no       |             |
| accessibilityShowsLargeContentViewer   | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityState                     | property | `AccessibilityState \| undefined`                                                                             | no       |             |
| accessibilityValue                     | property | `AccessibilityValue \| undefined`                                                                             | no       |             |
| accessibilityViewIsModal               | property | `boolean \| undefined`                                                                                        | no       |             |
| accessible                             | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-busy                              | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-checked                           | property | `boolean \| "mixed" \| undefined`                                                                             | no       |             |
| aria-disabled                          | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-expanded                          | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-hidden                            | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-label                             | property | `string \| undefined`                                                                                         | no       |             |
| aria-labelledby                        | property | `string \| undefined`                                                                                         | no       |             |
| aria-live                              | property | `"off" \| "polite" \| "assertive" \| undefined`                                                               | no       |             |
| aria-modal                             | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-selected                          | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-valuemax                          | property | `number \| undefined`                                                                                         | no       |             |
| aria-valuemin                          | property | `number \| undefined`                                                                                         | no       |             |
| aria-valuenow                          | property | `number \| undefined`                                                                                         | no       |             |
| aria-valuetext                         | property | `string \| undefined`                                                                                         | no       |             |
| children                               | property | `React.ReactNode`                                                                                             | no       |             |
| collapsable                            | property | `boolean \| undefined`                                                                                        | no       |             |
| collapsableChildren                    | property | `boolean \| undefined`                                                                                        | no       |             |
| collapsible                            | property | `boolean \| undefined`                                                                                        | no       |             |
| defaultValue                           | property | `string \| undefined`                                                                                         | no       |             |
| disabled                               | property | `boolean \| undefined`                                                                                        | no       |             |
| focusable                              | property | `boolean \| undefined`                                                                                        | no       |             |
| hasTVPreferredFocus                    | property | `boolean \| undefined`                                                                                        | no       |             |
| hitSlop                                | property | `number \| Insets \| null \| undefined`                                                                       | no       |             |
| id                                     | property | `string \| undefined`                                                                                         | no       |             |
| importantForAccessibility              | property | `"auto" \| "yes" \| "no" \| "no-hide-descendants" \| undefined`                                               | no       |             |
| interactionPolicy                      | property | `InteractionPolicy \| undefined`                                                                              | no       |             |
| isTVSelectable                         | property | `boolean \| undefined`                                                                                        | no       |             |
| nativeID                               | property | `string \| undefined`                                                                                         | no       |             |
| needsOffscreenAlphaCompositing         | property | `boolean \| undefined`                                                                                        | no       |             |
| onAccessibilityAction                  | property | `((event: AccessibilityActionEvent) => void) \| undefined`                                                    | no       |             |
| onAccessibilityEscape                  | property | `(() => void) \| undefined`                                                                                   | no       |             |
| onAccessibilityTap                     | property | `(() => void) \| undefined`                                                                                   | no       |             |
| onBlur                                 | property | `((e: BlurEvent) => void) \| null \| undefined`                                                               | no       |             |
| onFocus                                | property | `((e: FocusEvent) => void) \| null \| undefined`                                                              | no       |             |
| onLayout                               | property | `((event: LayoutChangeEvent) => void) \| undefined`                                                           | no       |             |
| onMagicTap                             | property | `(() => void) \| undefined`                                                                                   | no       |             |
| onMoveShouldSetResponder               | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onMoveShouldSetResponderCapture        | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onPointerCancel                        | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerCancelCapture                 | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerDown                          | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerDownCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerEnter                         | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerEnterCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerLeave                         | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerLeaveCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerMove                          | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerMoveCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerUp                            | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerUpCapture                     | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onResponderEnd                         | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderGrant                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderMove                        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderReject                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderRelease                     | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderStart                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderTerminate                   | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderTerminationRequest          | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onStartShouldSetResponder              | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onStartShouldSetResponderCapture       | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onTouchCancel                          | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchEnd                             | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchEndCapture                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchMove                            | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchStart                           | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onValueChange                          | property | `((value: string \| undefined) => void) \| undefined`                                                         | no       |             |
| pointerEvents                          | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                   | no       |             |
| removeClippedSubviews                  | property | `boolean \| undefined`                                                                                        | no       |             |
| renderToHardwareTextureAndroid         | property | `boolean \| undefined`                                                                                        | no       |             |
| role                                   | property | `Role \| undefined`                                                                                           | no       |             |
| screenReaderFocusable                  | property | `boolean \| undefined`                                                                                        | no       |             |
| shouldRasterizeIOS                     | property | `boolean \| undefined`                                                                                        | no       |             |
| style                                  | property | `StyleProp<ViewStyle>`                                                                                        | no       |             |
| tabIndex                               | property | `0 \| -1 \| undefined`                                                                                        | no       |             |
| testID                                 | property | `string \| undefined`                                                                                         | no       |             |
| tvParallaxMagnification                | property | `number \| undefined`                                                                                         | no       |             |
| tvParallaxShiftDistanceX               | property | `number \| undefined`                                                                                         | no       |             |
| tvParallaxShiftDistanceY               | property | `number \| undefined`                                                                                         | no       |             |
| tvParallaxTiltAngle                    | property | `number \| undefined`                                                                                         | no       |             |
| type                                   | property | `"single" \| undefined`                                                                                       | no       |             |
| value                                  | property | `string \| undefined`                                                                                         | no       |             |

## AccordionTrigger

Kind: `function`
Module: `src/features/accordion/adapters/inbound/AccordionTrigger.tsx`
Source: `src/features/accordion/adapters/inbound/AccordionTrigger.tsx:8:1`

Renders the accessible button that toggles its owning accordion item.

### Signatures

- `({
children,
disabled = false,
interactionPolicy,
...pressableProps
}: AccordionTriggerProps) => React.JSX.Element`
  - {
    children,
    disabled = false,
    interactionPolicy,
    ...pressableProps
    }: `AccordionTriggerProps`
  - returns: `React.JSX.Element`

## AccordionTriggerProps

Kind: `type`
Module: `src/types/accordion.ts`
Source: `src/types/accordion.ts:37:1`

### Members

| Name                                   | Kind     | Type                                                                                                          | Required | Description |
| -------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityActions                   | property | `readonly Readonly<{ name: AccessibilityActionName \| string; label?: string \| undefined; }>[] \| undefined` | no       |             |
| accessibilityElementsHidden            | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityHint                      | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityIgnoresInvertColors       | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityLabel                     | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityLabelledBy                | property | `string \| string[] \| undefined`                                                                             | no       |             |
| accessibilityLanguage                  | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityLargeContentTitle         | property | `string \| undefined`                                                                                         | no       |             |
| accessibilityLiveRegion                | property | `"none" \| "polite" \| "assertive" \| undefined`                                                              | no       |             |
| accessibilityRespondsToUserInteraction | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityShowsLargeContentViewer   | property | `boolean \| undefined`                                                                                        | no       |             |
| accessibilityValue                     | property | `AccessibilityValue \| undefined`                                                                             | no       |             |
| accessibilityViewIsModal               | property | `boolean \| undefined`                                                                                        | no       |             |
| accessible                             | property | `boolean \| undefined`                                                                                        | no       |             |
| android_disableSound                   | property | `boolean \| null \| undefined`                                                                                | no       |             |
| android_ripple                         | property | `PressableAndroidRippleConfig \| null \| undefined`                                                           | no       |             |
| aria-busy                              | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-checked                           | property | `boolean \| "mixed" \| undefined`                                                                             | no       |             |
| aria-disabled                          | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-expanded                          | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-hidden                            | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-label                             | property | `string \| undefined`                                                                                         | no       |             |
| aria-labelledby                        | property | `string \| undefined`                                                                                         | no       |             |
| aria-live                              | property | `"off" \| "polite" \| "assertive" \| undefined`                                                               | no       |             |
| aria-modal                             | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-selected                          | property | `boolean \| undefined`                                                                                        | no       |             |
| aria-valuemax                          | property | `number \| undefined`                                                                                         | no       |             |
| aria-valuemin                          | property | `number \| undefined`                                                                                         | no       |             |
| aria-valuenow                          | property | `number \| undefined`                                                                                         | no       |             |
| aria-valuetext                         | property | `string \| undefined`                                                                                         | no       |             |
| cancelable                             | property | `boolean \| null \| undefined`                                                                                | no       |             |
| children                               | property | `React.ReactNode \| ((state: import("react-native").PressableStateCallbackType) => React.ReactNode)`          | no       |             |
| collapsable                            | property | `boolean \| undefined`                                                                                        | no       |             |
| collapsableChildren                    | property | `boolean \| undefined`                                                                                        | no       |             |
| delayHoverIn                           | property | `number \| null \| undefined`                                                                                 | no       |             |
| delayHoverOut                          | property | `number \| null \| undefined`                                                                                 | no       |             |
| delayLongPress                         | property | `number \| null \| undefined`                                                                                 | no       |             |
| disabled                               | property | `boolean \| undefined`                                                                                        | no       |             |
| focusable                              | property | `boolean \| undefined`                                                                                        | no       |             |
| hasTVPreferredFocus                    | property | `boolean \| undefined`                                                                                        | no       |             |
| hitSlop                                | property | `number \| Insets \| null \| undefined`                                                                       | no       |             |
| id                                     | property | `string \| undefined`                                                                                         | no       |             |
| importantForAccessibility              | property | `"auto" \| "yes" \| "no" \| "no-hide-descendants" \| undefined`                                               | no       |             |
| interactionPolicy                      | property | `InteractionPolicy \| undefined`                                                                              | no       |             |
| isTVSelectable                         | property | `boolean \| undefined`                                                                                        | no       |             |
| nativeID                               | property | `string \| undefined`                                                                                         | no       |             |
| needsOffscreenAlphaCompositing         | property | `boolean \| undefined`                                                                                        | no       |             |
| onAccessibilityAction                  | property | `((event: AccessibilityActionEvent) => void) \| undefined`                                                    | no       |             |
| onAccessibilityEscape                  | property | `(() => void) \| undefined`                                                                                   | no       |             |
| onAccessibilityTap                     | property | `(() => void) \| undefined`                                                                                   | no       |             |
| onBlur                                 | property | `((event: NativeSyntheticEvent<TargetedEvent>) => void) \| null \| undefined`                                 | no       |             |
| onFocus                                | property | `((event: NativeSyntheticEvent<TargetedEvent>) => void) \| null \| undefined`                                 | no       |             |
| onHoverIn                              | property | `((event: MouseEvent) => void) \| null \| undefined`                                                          | no       |             |
| onHoverOut                             | property | `((event: MouseEvent) => void) \| null \| undefined`                                                          | no       |             |
| onLayout                               | property | `((event: LayoutChangeEvent) => void) \| undefined`                                                           | no       |             |
| onLongPress                            | property | `((event: GestureResponderEvent) => void) \| null \| undefined`                                               | no       |             |
| onMagicTap                             | property | `(() => void) \| undefined`                                                                                   | no       |             |
| onMoveShouldSetResponder               | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onMoveShouldSetResponderCapture        | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onPointerCancel                        | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerCancelCapture                 | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerDown                          | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerDownCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerEnter                         | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerEnterCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerLeave                         | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerLeaveCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerMove                          | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerMoveCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerUp                            | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPointerUpCapture                     | property | `((event: PointerEvent) => void) \| undefined`                                                                | no       |             |
| onPressIn                              | property | `((event: GestureResponderEvent) => void) \| null \| undefined`                                               | no       |             |
| onPressMove                            | property | `((event: GestureResponderEvent) => void) \| null \| undefined`                                               | no       |             |
| onPressOut                             | property | `((event: GestureResponderEvent) => void) \| null \| undefined`                                               | no       |             |
| onResponderEnd                         | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderGrant                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderMove                        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderReject                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderRelease                     | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderStart                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderTerminate                   | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onResponderTerminationRequest          | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onStartShouldSetResponder              | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onStartShouldSetResponderCapture       | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                    | no       |             |
| onTouchCancel                          | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchEnd                             | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchEndCapture                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchMove                            | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| onTouchStart                           | property | `((event: GestureResponderEvent) => void) \| undefined`                                                       | no       |             |
| pointerEvents                          | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                   | no       |             |
| pressRetentionOffset                   | property | `number \| Insets \| null \| undefined`                                                                       | no       |             |
| removeClippedSubviews                  | property | `boolean \| undefined`                                                                                        | no       |             |
| renderToHardwareTextureAndroid         | property | `boolean \| undefined`                                                                                        | no       |             |
| role                                   | property | `Role \| undefined`                                                                                           | no       |             |
| screenReaderFocusable                  | property | `boolean \| undefined`                                                                                        | no       |             |
| shouldRasterizeIOS                     | property | `boolean \| undefined`                                                                                        | no       |             |
| style                                  | property | `StyleProp<ViewStyle> \| ((state: PressableStateCallbackType) => StyleProp<ViewStyle>)`                       | no       |             |
| tabIndex                               | property | `0 \| -1 \| undefined`                                                                                        | no       |             |
| testID                                 | property | `string \| undefined`                                                                                         | no       |             |
| testOnly_pressed                       | property | `boolean \| null \| undefined`                                                                                | no       |             |
| tvParallaxMagnification                | property | `number \| undefined`                                                                                         | no       |             |
| tvParallaxShiftDistanceX               | property | `number \| undefined`                                                                                         | no       |             |
| tvParallaxShiftDistanceY               | property | `number \| undefined`                                                                                         | no       |             |
| tvParallaxTiltAngle                    | property | `number \| undefined`                                                                                         | no       |             |
| unstable_pressDelay                    | property | `number \| undefined`                                                                                         | no       |             |

## ActionSemantics

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:97:1`

### Members

| Name    | Kind     | Type            | Required | Description |
| ------- | -------- | --------------- | -------- | ----------- |
| danger  | property | `RoleSemantics` | yes      |             |
| neutral | property | `RoleSemantics` | yes      |             |
| primary | property | `RoleSemantics` | yes      |             |

## AppBar

Kind: `function`
Module: `src/layout/AppBar.tsx`
Source: `src/layout/AppBar.tsx:17:1`

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
Source: `src/layout/AppBar.tsx:8:1`

### Members

| Name               | Kind     | Type                                                                      | Required | Description |
| ------------------ | -------- | ------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                     | no       |             |
| accessibilityRole  | property | `import("react-native").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("react-native").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                    | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>` | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                     | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                     | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                         | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                         | no       |             |
| children           | property | `React.ReactNode`                                                         | no       |             |
| contentStyle       | property | `StyleProp<ViewStyle>`                                                    | no       |             |
| divider            | property | `boolean \| undefined`                                                    | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                         | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| leading            | property | `React.ReactNode`                                                         | no       |             |
| left               | property | `Responsive<number> \| undefined`                                         | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                         | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`              | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`               | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`           | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                    | no       |             |
| right              | property | `Responsive<number> \| undefined`                                         | no       |             |
| safeAreaTop        | property | `boolean \| undefined`                                                    | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                    | no       |             |
| testID             | property | `string \| undefined`                                                     | no       |             |
| top                | property | `Responsive<number> \| undefined`                                         | no       |             |
| trailing           | property | `React.ReactNode`                                                         | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                         | no       |             |

## Badge

Kind: `function`
Module: `src/features/badge/adapters/inbound/Badge.tsx`
Source: `src/features/badge/adapters/inbound/Badge.tsx:11:1`

Renders compact semantic status or metadata content.

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
Module: `src/types/badge.ts`
Source: `src/types/badge.ts:7:1`

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
Source: `src/theme/types.ts:83:1`

### Members

| Name    | Kind     | Type     | Required | Description |
| ------- | -------- | -------- | -------- | ----------- |
| default | property | `string` | yes      |             |
| divider | property | `string` | yes      |             |
| focus   | property | `string` | yes      |             |
| strong  | property | `string` | yes      |             |
| subtle  | property | `string` | yes      |             |

## Box

Kind: `function`
Module: `src/features/layout/adapters/inbound/Box.tsx`
Source: `src/features/layout/adapters/inbound/Box.tsx:11:1`

Renders the responsive foundational layout box.

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
Module: `src/types/layout.ts`
Source: `src/types/layout.ts:56:1`

### Members

| Name               | Kind     | Type                                                                      | Required | Description |
| ------------------ | -------- | ------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                     | no       |             |
| accessibilityRole  | property | `import("react-native").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("react-native").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                    | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>` | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                     | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                     | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                         | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                         | no       |             |
| children           | property | `React.ReactNode`                                                         | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                         | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| left               | property | `Responsive<number> \| undefined`                                         | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                         | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`              | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`               | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`           | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                    | no       |             |
| right              | property | `Responsive<number> \| undefined`                                         | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                    | no       |             |
| testID             | property | `string \| undefined`                                                     | no       |             |
| top                | property | `Responsive<number> \| undefined`                                         | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                         | no       |             |

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
Module: `src/features/button/adapters/inbound/Button.tsx`
Source: `src/features/button/adapters/inbound/Button.tsx:19:1`

Renders the primary Surface action control with semantic visual states.

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
interactionPolicy = 'enabled',
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
    interactionPolicy = 'enabled',
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
Source: `src/primitives/button-base/types.ts:8:1`

### Members

| Name               | Kind     | Type                                                                      | Required | Description |
| ------------------ | -------- | ------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                     | no       |             |
| accessibilityRole  | property | `AccessibilityRole \| undefined`                                          | no       |             |
| accessibilityState | property | `AccessibilityState \| undefined`                                         | no       |             |
| accessible         | property | `boolean \| undefined`                                                    | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>` | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                     | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                     | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                         | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                         | no       |             |
| children           | property | `React.ReactNode \| ((state: InteractionState) => React.ReactNode)`       | no       |             |
| disabled           | property | `boolean \| undefined`                                                    | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                         | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| interactionPolicy  | property | `InteractionPolicy \| undefined`                                          | no       |             |
| left               | property | `Responsive<number> \| undefined`                                         | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| onLongPress        | property | `((event: GestureResponderEvent) => void) \| undefined`                   | no       |             |
| onPress            | property | `((event: GestureResponderEvent) => void) \| undefined`                   | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                         | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`              | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`           | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                    | no       |             |
| right              | property | `Responsive<number> \| undefined`                                         | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                    | no       |             |
| testID             | property | `string \| undefined`                                                     | no       |             |
| top                | property | `Responsive<number> \| undefined`                                         | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                         | no       |             |

## ButtonIconSpec

Kind: `unknown`
Module: `src/types/button.ts`
Source: `src/types/button.ts:9:1`

## ButtonProps

Kind: `type`
Module: `src/types/button.ts`
Source: `src/types/button.ts:11:1`

### Members

| Name               | Kind     | Type                                                                                                                                          | Required | Description |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityRole  | property | `AccessibilityRole \| undefined`                                                                                                              | no       |             |
| accessibilityState | property | `AccessibilityState \| undefined`                                                                                                             | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                                        | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>`                                                                     | no       |             |
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
| interactionPolicy  | property | `InteractionPolicy \| undefined`                                                                                                              | no       |             |
| leadingIcon        | property | `IconSource \| undefined`                                                                                                                     | no       |             |
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
| trailingIcon       | property | `IconSource \| undefined`                                                                                                                     | no       |             |
| variant            | property | `ButtonVariant \| undefined`                                                                                                                  | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                                                   | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                                             | no       |             |

## Card

Kind: `function`
Module: `src/features/card/adapters/inbound/Card.tsx`
Source: `src/features/card/adapters/inbound/Card.tsx:11:1`

Renders a themed content card with optional interactive press states.

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
Module: `src/types/card.ts`
Source: `src/types/card.ts:5:1`

### Members

| Name               | Kind     | Type                                                                      | Required | Description |
| ------------------ | -------- | ------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                     | no       |             |
| accessibilityRole  | property | `import("react-native").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("react-native").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                    | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>` | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                         | no       |             |
| children           | property | `React.ReactNode`                                                         | no       |             |
| disabled           | property | `boolean \| undefined`                                                    | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                         | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| left               | property | `Responsive<number> \| undefined`                                         | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| onPress            | property | `(() => void) \| undefined`                                               | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                         | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`              | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`               | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`           | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                    | no       |             |
| right              | property | `Responsive<number> \| undefined`                                         | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                    | no       |             |
| testID             | property | `string \| undefined`                                                     | no       |             |
| top                | property | `Responsive<number> \| undefined`                                         | no       |             |
| variant            | property | `SurfaceVariant \| undefined`                                             | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                         | no       |             |

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

| Name               | Kind     | Type                                                                      | Required | Description |
| ------------------ | -------- | ------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                     | no       |             |
| accessibilityRole  | property | `import("react-native").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("react-native").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                    | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>` | no       |             |
| axis               | property | `"horizontal" \| "vertical" \| "both" \| undefined`                       | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                     | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                     | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                         | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                         | no       |             |
| children           | property | `React.ReactNode`                                                         | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                         | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| left               | property | `Responsive<number> \| undefined`                                         | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                         | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`              | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`               | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`           | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                    | no       |             |
| right              | property | `Responsive<number> \| undefined`                                         | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                    | no       |             |
| testID             | property | `string \| undefined`                                                     | no       |             |
| top                | property | `Responsive<number> \| undefined`                                         | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                         | no       |             |

## Checkbox

Kind: `function`
Module: `src/features/form/checkbox/adapters/inbound/Checkbox.tsx`
Source: `src/features/form/checkbox/adapters/inbound/Checkbox.tsx:21:1`

Renders a controlled or uncontrolled accessible checkbox.

### Signatures

- `({
accessibilityLabel,
checked,
children,
color = 'primary',
defaultChecked = false,
disabled = false,
invalid = false,
onCheckedChange,
readOnly = false,
size = 'm',
testID,
...buttonProps
}: CheckboxProps) => React.JSX.Element`
  - {
    accessibilityLabel,
    checked,
    children,
    color = 'primary',
    defaultChecked = false,
    disabled = false,
    invalid = false,
    onCheckedChange,
    readOnly = false,
    size = 'm',
    testID,
    ...buttonProps
    }: `CheckboxProps`
  - returns: `React.JSX.Element`

## CheckboxProps

Kind: `type`
Module: `src/types/checkbox.ts`
Source: `src/types/checkbox.ts:7:1`

### Members

| Name               | Kind     | Type                                                                                                                                          | Required | Description |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                                         | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                                        | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>`                                                                     | no       |             |
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
| interactionPolicy  | property | `InteractionPolicy \| undefined`                                                                                                              | no       |             |
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
Source: `node_modules/@ankhorage/color-theory/dist/harmony.d.ts:54:1`

## ColorSwatch

Kind: `unknown`
Module: `node_modules/@ankhorage/color-theory/dist/swatches.d.ts`
Source: `node_modules/@ankhorage/color-theory/dist/swatches.d.ts:6:1`

## ColorSwatchStep

Kind: `unknown`
Module: `node_modules/@ankhorage/color-theory/dist/swatches.d.ts`
Source: `node_modules/@ankhorage/color-theory/dist/swatches.d.ts:3:1`

## Container

Kind: `function`
Module: `src/features/layout/adapters/inbound/Container.tsx`
Source: `src/features/layout/adapters/inbound/Container.tsx:11:1`

Centers responsive content inside a configurable maximum width.

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
Module: `src/types/layout.ts`
Source: `src/types/layout.ts:66:1`

### Members

| Name               | Kind     | Type                                                                      | Required | Description |
| ------------------ | -------- | ------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                     | no       |             |
| accessibilityRole  | property | `import("react-native").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("react-native").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                    | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>` | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                     | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                     | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                         | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                         | no       |             |
| children           | property | `React.ReactNode`                                                         | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                         | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| left               | property | `Responsive<number> \| undefined`                                         | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| maxWidth           | property | `Responsive<number> \| undefined`                                         | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                         | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`              | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`               | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`           | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| px                 | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                    | no       |             |
| right              | property | `Responsive<number> \| undefined`                                         | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                    | no       |             |
| testID             | property | `string \| undefined`                                                     | no       |             |
| top                | property | `Responsive<number> \| undefined`                                         | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                         | no       |             |

## ContentSemantics

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:72:1`

### Members

| Name     | Kind     | Type     | Required | Description |
| -------- | -------- | -------- | -------- | ----------- |
| default  | property | `string` | yes      |             |
| disabled | property | `string` | yes      |             |
| icon     | property | `string` | yes      |             |
| inverse  | property | `string` | yes      |             |
| link     | property | `string` | yes      |             |
| muted    | property | `string` | yes      |             |
| subtle   | property | `string` | yes      |             |
| visited  | property | `string` | yes      |             |

## createTheme

Kind: `function`
Module: `src/theme/createTheme.ts`
Source: `src/theme/createTheme.ts:26:1`

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
Source: `src/theme/createTheme.ts:7:14`

## DEFAULT_TOKENS

Kind: `value`
Module: `src/theme/defaultTokens.ts`
Source: `src/theme/defaultTokens.ts:17:14`

## Divider

Kind: `function`
Module: `src/features/layout/adapters/inbound/Divider.tsx`
Source: `src/features/layout/adapters/inbound/Divider.tsx:7:1`

Renders a horizontal or vertical separator using layout tokens.

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
Module: `src/types/layout.ts`
Source: `src/types/layout.ts:72:1`

### Members

| Name               | Kind     | Type                                                                      | Required | Description |
| ------------------ | -------- | ------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                     | no       |             |
| accessibilityRole  | property | `import("react-native").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("react-native").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                    | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>` | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                     | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                         | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                         | no       |             |
| children           | property | `React.ReactNode`                                                         | no       |             |
| color              | property | `ColorValue \| undefined`                                                 | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                         | no       |             |
| left               | property | `Responsive<number> \| undefined`                                         | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                         | no       |             |
| orientation        | property | `"horizontal" \| "vertical" \| undefined`                                 | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`              | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`               | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`           | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                    | no       |             |
| right              | property | `Responsive<number> \| undefined`                                         | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                    | no       |             |
| testID             | property | `string \| undefined`                                                     | no       |             |
| thickness          | property | `number \| undefined`                                                     | no       |             |
| top                | property | `Responsive<number> \| undefined`                                         | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                         | no       |             |

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

## FontIconSource

Kind: `unknown`
Module: `src/types/icon.ts`
Source: `src/types/icon.ts:24:1`

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
Source: `src/theme/types.ts:147:1`

## GeneratedColorRole

Kind: `unknown`
Module: `node_modules/@ankhorage/color-theory/dist/harmony.d.ts`
Source: `node_modules/@ankhorage/color-theory/dist/harmony.d.ts:2:1`

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
Source: `src/theme/colorEngine.ts:41:1`

### Signatures

- `(config: ThemeConfig, mode?: ThemeColorMode) => { colors: ThemeTokens["colors"]; swatches: GeneratedThemeSwatches; semantics: ThemeSemantics; colorDiagnostics: SurfaceColorDiagnostics; }`
  - config: `ThemeConfig`
  - mode: `ThemeColorMode` (optional)
  - returns: `{ colors: ThemeTokens["colors"]; swatches: GeneratedThemeSwatches; semantics: ThemeSemantics; colorDiagnostics: SurfaceColorDiagnostics; }`

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
Module: `src/features/layout/adapters/inbound/Grid.tsx`
Source: `src/features/layout/adapters/inbound/Grid.tsx:11:1`

Lays out children in a responsive wrapping grid.

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
Module: `src/types/layout.ts`
Source: `src/types/layout.ts:78:1`

### Members

| Name               | Kind     | Type                                                                      | Required | Description |
| ------------------ | -------- | ------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                     | no       |             |
| accessibilityRole  | property | `import("react-native").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("react-native").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                    | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>` | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                     | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                     | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                         | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                         | no       |             |
| children           | property | `React.ReactNode`                                                         | no       |             |
| colGap             | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| cols               | property | `Responsive<number>`                                                      | yes      |             |
| flex               | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                         | no       |             |
| gap                | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| left               | property | `Responsive<number> \| undefined`                                         | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| minItemWidth       | property | `Responsive<number> \| undefined`                                         | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                         | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`              | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`               | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`           | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                    | no       |             |
| right              | property | `Responsive<number> \| undefined`                                         | no       |             |
| rowGap             | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                    | no       |             |
| testID             | property | `string \| undefined`                                                     | no       |             |
| top                | property | `Responsive<number> \| undefined`                                         | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                         | no       |             |

## Heading

Kind: `function`
Module: `src/features/typography/adapters/inbound/Heading.tsx`
Source: `src/features/typography/adapters/inbound/Heading.tsx:10:1`

Renders a semantic, translatable heading using Surface typography tokens.

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
Module: `src/types/typography.ts`
Source: `src/types/typography.ts:7:1`

## HeadingProps

Kind: `type`
Module: `src/types/typography.ts`
Source: `src/types/typography.ts:9:1`

### Members

| Name          | Kind     | Type                                                                                                                                          | Required | Description |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| align         | property | `"left" \| "right" \| "auto" \| "center" \| "justify" \| undefined`                                                                           | no       |             |
| children      | property | `React.ReactNode`                                                                                                                             | no       |             |
| color         | property | `"primary" \| "secondary" \| "tertiary" \| "quaternary" \| "neutral" \| "success" \| "warning" \| "error" \| "info" \| "danger" \| undefined` | no       |             |
| emphasis      | property | `"default" \| "muted" \| "subtle" \| "inverse" \| undefined`                                                                                  | no       |             |
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
Module: `src/features/icon/adapters/inbound/Icon.tsx`
Source: `src/features/icon/adapters/inbound/Icon.tsx:7:1`

Renders a theme-aware font or SVG icon through the portable icon adapter.

### Signatures

- `(props: IconProps) => import("react").JSX.Element`
  - props: `IconProps`
  - returns: `import("react").JSX.Element`

## IconButton

Kind: `function`
Module: `src/features/button/adapters/inbound/IconButton.tsx`
Source: `src/features/button/adapters/inbound/IconButton.tsx:16:1`

Renders a compact accessible icon-only action control.

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
Module: `src/types/button.ts`
Source: `src/types/button.ts:25:1`

### Members

| Name               | Kind     | Type                                                                                                                                          | Required | Description |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string`                                                                                                                                      | yes      |             |
| accessibilityRole  | property | `AccessibilityRole \| undefined`                                                                                                              | no       |             |
| accessibilityState | property | `AccessibilityState \| undefined`                                                                                                             | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                                        | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>`                                                                     | no       |             |
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
| icon               | property | `IconSource`                                                                                                                                  | yes      |             |
| interactionPolicy  | property | `InteractionPolicy \| undefined`                                                                                                              | no       |             |
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

Kind: `unknown`
Module: `src/types/icon.ts`
Source: `src/types/icon.ts:50:1`

## IconProvider

Kind: `unknown`
Module: `src/types/icon.ts`
Source: `src/types/icon.ts:19:1`

## IconSource

Kind: `unknown`
Module: `src/types/icon.ts`
Source: `src/types/icon.ts:42:1`

## IconVariant

Kind: `unknown`
Module: `src/types/icon.ts`
Source: `src/types/icon.ts:22:1`

## Image

Kind: `function`
Module: `src/features/image/adapters/inbound/Image.tsx`
Source: `src/features/image/adapters/inbound/Image.tsx:15:1`

Renders a token-aware accessible image with optional fallback source.

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
Module: `src/types/image.ts`
Source: `src/types/image.ts:12:1`

## ImageProps

Kind: `type`
Module: `src/types/image.ts`
Source: `src/types/image.ts:14:1`

### Members

| Name               | Kind     | Type                                                                     | Required | Description |
| ------------------ | -------- | ------------------------------------------------------------------------ | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                    | no       |             |
| alt                | property | `string \| undefined`                                                    | no       |             |
| aspectRatio        | property | `number \| undefined`                                                    | no       |             |
| fallbackSource     | property | `SurfaceImageSource \| null \| undefined`                                | no       |             |
| fit                | property | `ImageResizeMode \| undefined`                                           | no       |             |
| height             | property | `string \| number \| undefined`                                          | no       |             |
| onError            | property | `((error: import("react-native").ImageErrorEvent) => void) \| undefined` | no       |             |
| radius             | property | `string \| number \| undefined`                                          | no       |             |
| resizeMode         | property | `ImageResizeMode \| undefined`                                           | no       |             |
| source             | property | `SurfaceImageSource \| null \| undefined`                                | no       |             |
| style              | property | `StyleProp<ImageStyle>`                                                  | no       |             |
| testID             | property | `string \| undefined`                                                    | no       |             |
| width              | property | `string \| number \| undefined`                                          | no       |             |

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

## InteractionPolicy

Kind: `unknown`
Module: `src/interactionPolicy.ts`
Source: `src/interactionPolicy.ts:1:1`

## InteractionPolicyProps

Kind: `type`
Module: `src/interactionPolicy.ts`
Source: `src/interactionPolicy.ts:3:1`

### Members

| Name              | Kind     | Type                             | Required | Description |
| ----------------- | -------- | -------------------------------- | -------- | ----------- |
| interactionPolicy | property | `InteractionPolicy \| undefined` | no       |             |

## isDeepEqual

Kind: `value`
Module: `src/utils/deepEqual.ts`
Source: `src/utils/deepEqual.ts:5:14`

### Signatures

- `(a: unknown, b: unknown) => boolean`
  - a: `unknown`
  - b: `unknown`
  - returns: `boolean`

## KeyboardAvoidingView

Kind: `function`
Module: `src/features/keyboard-avoiding-view/adapters/inbound/KeyboardAvoidingView.tsx`
Source: `src/features/keyboard-avoiding-view/adapters/inbound/KeyboardAvoidingView.tsx:7:1`

Preserves React Native keyboard avoidance behind the stable Surface feature boundary.

### Signatures

- `(props: import("react-native").KeyboardAvoidingViewProps) => React.JSX.Element`
  - props: `import("react-native").KeyboardAvoidingViewProps`
  - returns: `React.JSX.Element`

## KeyboardAvoidingViewBehavior

Kind: `unknown`
Module: `src/types/keyboard-avoiding-view.ts`
Source: `src/types/keyboard-avoiding-view.ts:3:1`

## KeyboardAvoidingViewProps

Kind: `unknown`
Module: `src/types/keyboard-avoiding-view.ts`
Source: `src/types/keyboard-avoiding-view.ts:6:1`

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

## Modal

Kind: `function`
Module: `src/features/modal/adapters/inbound/Modal.tsx`
Source: `src/features/modal/adapters/inbound/Modal.tsx:16:1`

Renders the generic Surface modal overlay and focus boundary.

### Signatures

- `({
visible,
onDismiss,
children,
closeOnBackdrop = true,
interactionPolicy = 'enabled',
testID,
}: ModalProps) => React.JSX.Element | null`
  - {
    visible,
    onDismiss,
    children,
    closeOnBackdrop = true,
    interactionPolicy = 'enabled',
    testID,
    }: `ModalProps`
  - returns: `React.JSX.Element | null`

## ModalProps

Kind: `type`
Module: `src/types/modal.ts`
Source: `src/types/modal.ts:5:1`

### Members

| Name              | Kind     | Type                             | Required | Description |
| ----------------- | -------- | -------------------------------- | -------- | ----------- |
| children          | property | `React.ReactNode`                | no       |             |
| closeOnBackdrop   | property | `boolean \| undefined`           | no       |             |
| interactionPolicy | property | `InteractionPolicy \| undefined` | no       |             |
| onDismiss         | property | `(() => void) \| undefined`      | no       |             |
| testID            | property | `string \| undefined`            | no       |             |
| visible           | property | `boolean`                        | yes      |             |

## NeutralSemantics

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:26:1`

### Members

| Name          | Kind     | Type     | Required | Description |
| ------------- | -------- | -------- | -------- | ----------- |
| bg            | property | `string` | yes      |             |
| bgSubtle      | property | `string` | yes      |             |
| border        | property | `string` | yes      |             |
| borderStrong  | property | `string` | yes      |             |
| disabledBg    | property | `string` | yes      |             |
| disabledText  | property | `string` | yes      |             |
| divider       | property | `string` | yes      |             |
| surface       | property | `string` | yes      |             |
| surfaceActive | property | `string` | yes      |             |
| surfaceHover  | property | `string` | yes      |             |
| text          | property | `string` | yes      |             |
| textMuted     | property | `string` | yes      |             |
| textSubtle    | property | `string` | yes      |             |

## Popover

Kind: `function`
Module: `src/features/popover/adapters/inbound/Popover.tsx`
Source: `src/features/popover/adapters/inbound/Popover.tsx:9:1`

Renders anchored overlay content through the shared Surface overlay stack.

### Signatures

- `(props: PopoverProps) => React.JSX.Element`
  - props: `PopoverProps`
  - returns: `React.JSX.Element`

## PopoverAnchorRenderProps

Kind: `type`
Module: `src/types/popover.ts`
Source: `src/types/popover.ts:8:1`

### Members

| Name   | Kind     | Type         | Required | Description |
| ------ | -------- | ------------ | -------- | ----------- |
| close  | property | `() => void` | yes      |             |
| open   | property | `boolean`    | yes      |             |
| toggle | property | `() => void` | yes      |             |

## PopoverMenu

Kind: `function`
Module: `src/features/popover-menu/adapters/inbound/PopoverMenu.tsx`
Source: `src/features/popover-menu/adapters/inbound/PopoverMenu.tsx:17:1`

Presents an anchored action menu using the shared Popover capability.

### Signatures

- `({
trigger,
actions,
dismiss,
closeOnSelect = true,
interactionPolicy = 'enabled',
testID,
}: PopoverMenuProps) => React.JSX.Element`
  - {
    trigger,
    actions,
    dismiss,
    closeOnSelect = true,
    interactionPolicy = 'enabled',
    testID,
    }: `PopoverMenuProps`
  - returns: `React.JSX.Element`

## PopoverMenuAction

Kind: `type`
Module: `src/types/popoverMenu.ts`
Source: `src/types/popoverMenu.ts:8:1`

### Members

| Name        | Kind     | Type                                   | Required | Description |
| ----------- | -------- | -------------------------------------- | -------- | ----------- |
| activate    | property | `(() => void) \| undefined`            | no       |             |
| description | property | `React.ReactNode`                      | no       |             |
| disabled    | property | `boolean \| undefined`                 | no       |             |
| id          | property | `string`                               | yes      |             |
| intent      | property | `PopoverMenuActionIntent \| undefined` | no       |             |
| leading     | property | `React.ReactNode`                      | no       |             |
| selected    | property | `boolean \| undefined`                 | no       |             |
| title       | property | `React.ReactNode`                      | yes      |             |
| trailing    | property | `React.ReactNode`                      | no       |             |

## PopoverMenuActionIntent

Kind: `unknown`
Module: `src/types/popoverMenu.ts`
Source: `src/types/popoverMenu.ts:6:1`

## PopoverMenuProps

Kind: `type`
Module: `src/types/popoverMenu.ts`
Source: `src/types/popoverMenu.ts:20:1`

### Members

| Name              | Kind     | Type                                                      | Required | Description |
| ----------------- | -------- | --------------------------------------------------------- | -------- | ----------- |
| actions           | property | `readonly PopoverMenuAction[]`                            | yes      |             |
| closeOnSelect     | property | `boolean \| undefined`                                    | no       |             |
| dismiss           | property | `(() => void) \| undefined`                               | no       |             |
| interactionPolicy | property | `InteractionPolicy \| undefined`                          | no       |             |
| testID            | property | `string \| undefined`                                     | no       |             |
| trigger           | property | `(controls: PopoverAnchorRenderProps) => React.ReactNode` | yes      |             |

## PopoverPlacement

Kind: `unknown`
Module: `src/types/popover.ts`
Source: `src/types/popover.ts:5:1`

## PopoverProps

Kind: `type`
Module: `src/types/popover.ts`
Source: `src/types/popover.ts:14:1`

### Members

| Name                | Kind     | Type                                                      | Required | Description |
| ------------------- | -------- | --------------------------------------------------------- | -------- | ----------- |
| anchor              | property | `(controls: PopoverAnchorRenderProps) => React.ReactNode` | yes      |             |
| children            | property | `React.ReactNode`                                         | no       |             |
| closeOnOutsidePress | property | `boolean \| undefined`                                    | no       |             |
| defaultOpen         | property | `boolean \| undefined`                                    | no       |             |
| interactionPolicy   | property | `InteractionPolicy \| undefined`                          | no       |             |
| offset              | property | `number \| undefined`                                     | no       |             |
| onOpenChange        | property | `((open: boolean) => void) \| undefined`                  | no       |             |
| open                | property | `boolean \| undefined`                                    | no       |             |
| placement           | property | `PopoverPlacement \| undefined`                           | no       |             |
| testID              | property | `string \| undefined`                                     | no       |             |

## Radio

Kind: `function`
Module: `src/features/form/radio/adapters/inbound/Radio.tsx`
Source: `src/features/form/radio/adapters/inbound/Radio.tsx:22:1`

Renders one accessible radio control with text or structured label content.

### Signatures

- `({
accessibilityLabel,
checked,
children,
color = 'primary',
defaultChecked = false,
disabled = false,
invalid = false,
onCheckedChange,
readOnly = false,
size = 'm',
testID,
...buttonProps
}: RadioProps) => React.JSX.Element`
  - {
    accessibilityLabel,
    checked,
    children,
    color = 'primary',
    defaultChecked = false,
    disabled = false,
    invalid = false,
    onCheckedChange,
    readOnly = false,
    size = 'm',
    testID,
    ...buttonProps
    }: `RadioProps`
  - returns: `React.JSX.Element`

## RadioProps

Kind: `type`
Module: `src/types/radio.ts`
Source: `src/types/radio.ts:7:1`

### Members

| Name               | Kind     | Type                                                                                                                                          | Required | Description |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                                         | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                                        | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>`                                                                     | no       |             |
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
| interactionPolicy  | property | `InteractionPolicy \| undefined`                                                                                                              | no       |             |
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
Source: `src/theme/colorEngine.ts:26:1`

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
Source: `src/theme/types.ts:42:1`

### Members

| Name             | Kind     | Type     | Required | Description |
| ---------------- | -------- | -------- | -------- | ----------- |
| base             | property | `string` | yes      |             |
| disabledBg       | property | `string` | yes      |             |
| hover            | property | `string` | yes      |             |
| onDisabledText   | property | `string` | yes      |             |
| onHoverText      | property | `string` | yes      |             |
| onSoftActiveText | property | `string` | yes      |             |
| onSoftHoverText  | property | `string` | yes      |             |
| onSoftText       | property | `string` | yes      |             |
| onSolidText      | property | `string` | yes      |             |
| onStrongText     | property | `string` | yes      |             |
| onSurfaceText    | property | `string` | yes      |             |
| outline          | property | `string` | yes      |             |
| softActive       | property | `string` | yes      |             |
| softBg           | property | `string` | yes      |             |
| softHover        | property | `string` | yes      |             |
| strong           | property | `string` | yes      |             |

## ScrollArea

Kind: `function`
Module: `src/layout/ScrollArea.tsx`
Source: `src/layout/ScrollArea.tsx:22:1`

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
Source: `src/layout/ScrollArea.tsx:14:1`

### Members

| Name                                      | Kind     | Type                                                                                                           | Required | Description |
| ----------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityActions                      | property | `readonly Readonly<{ name: AccessibilityActionName \| string; label?: string \| undefined; }>[] \| undefined`  | no       |             |
| accessibilityElementsHidden               | property | `boolean \| undefined`                                                                                         | no       |             |
| accessibilityHint                         | property | `string \| undefined`                                                                                          | no       |             |
| accessibilityIgnoresInvertColors          | property | `boolean \| undefined`                                                                                         | no       |             |
| accessibilityLabel                        | property | `string \| undefined`                                                                                          | no       |             |
| accessibilityLabelledBy                   | property | `string \| string[] \| undefined`                                                                              | no       |             |
| accessibilityLanguage                     | property | `string \| undefined`                                                                                          | no       |             |
| accessibilityLargeContentTitle            | property | `string \| undefined`                                                                                          | no       |             |
| accessibilityLiveRegion                   | property | `"none" \| "polite" \| "assertive" \| undefined`                                                               | no       |             |
| accessibilityRespondsToUserInteraction    | property | `boolean \| undefined`                                                                                         | no       |             |
| accessibilityRole                         | property | `AccessibilityRole \| undefined`                                                                               | no       |             |
| accessibilityShowsLargeContentViewer      | property | `boolean \| undefined`                                                                                         | no       |             |
| accessibilityState                        | property | `AccessibilityState \| undefined`                                                                              | no       |             |
| accessibilityValue                        | property | `AccessibilityValue \| undefined`                                                                              | no       |             |
| accessibilityViewIsModal                  | property | `boolean \| undefined`                                                                                         | no       |             |
| accessible                                | property | `boolean \| undefined`                                                                                         | no       |             |
| alignSelf                                 | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>`                                      | no       |             |
| alwaysBounceHorizontal                    | property | `boolean \| undefined`                                                                                         | no       |             |
| alwaysBounceVertical                      | property | `boolean \| undefined`                                                                                         | no       |             |
| aria-busy                                 | property | `boolean \| undefined`                                                                                         | no       |             |
| aria-checked                              | property | `boolean \| "mixed" \| undefined`                                                                              | no       |             |
| aria-disabled                             | property | `boolean \| undefined`                                                                                         | no       |             |
| aria-expanded                             | property | `boolean \| undefined`                                                                                         | no       |             |
| aria-hidden                               | property | `boolean \| undefined`                                                                                         | no       |             |
| aria-label                                | property | `string \| undefined`                                                                                          | no       |             |
| aria-labelledby                           | property | `string \| undefined`                                                                                          | no       |             |
| aria-live                                 | property | `"off" \| "polite" \| "assertive" \| undefined`                                                                | no       |             |
| aria-modal                                | property | `boolean \| undefined`                                                                                         | no       |             |
| aria-selected                             | property | `boolean \| undefined`                                                                                         | no       |             |
| aria-valuemax                             | property | `number \| undefined`                                                                                          | no       |             |
| aria-valuemin                             | property | `number \| undefined`                                                                                          | no       |             |
| aria-valuenow                             | property | `number \| undefined`                                                                                          | no       |             |
| aria-valuetext                            | property | `string \| undefined`                                                                                          | no       |             |
| automaticallyAdjustContentInsets          | property | `boolean \| undefined`                                                                                         | no       |             |
| automaticallyAdjustKeyboardInsets         | property | `boolean \| undefined`                                                                                         | no       |             |
| automaticallyAdjustsScrollIndicatorInsets | property | `boolean \| undefined`                                                                                         | no       |             |
| bg                                        | property | `Responsive<ColorValue> \| undefined`                                                                          | no       |             |
| borderColor                               | property | `Responsive<ColorValue> \| undefined`                                                                          | no       |             |
| borderWidth                               | property | `Responsive<number> \| undefined`                                                                              | no       |             |
| bottom                                    | property | `Responsive<number> \| undefined`                                                                              | no       |             |
| bounces                                   | property | `boolean \| undefined`                                                                                         | no       |             |
| bouncesZoom                               | property | `boolean \| undefined`                                                                                         | no       |             |
| canCancelContentTouches                   | property | `boolean \| undefined`                                                                                         | no       |             |
| centerContent                             | property | `boolean \| undefined`                                                                                         | no       |             |
| children                                  | property | `React.ReactNode`                                                                                              | no       |             |
| collapsable                               | property | `boolean \| undefined`                                                                                         | no       |             |
| collapsableChildren                       | property | `boolean \| undefined`                                                                                         | no       |             |
| contentContainerStyle                     | property | `StyleProp<ViewStyle>`                                                                                         | no       |             |
| contentInset                              | property | `Insets \| undefined`                                                                                          | no       |             |
| contentInsetAdjustmentBehavior            | property | `"never" \| "always" \| "automatic" \| "scrollableAxes" \| undefined`                                          | no       |             |
| contentOffset                             | property | `PointProp \| undefined`                                                                                       | no       |             |
| decelerationRate                          | property | `number \| "normal" \| "fast" \| undefined`                                                                    | no       |             |
| directionalLockEnabled                    | property | `boolean \| undefined`                                                                                         | no       |             |
| disableIntervalMomentum                   | property | `boolean \| undefined`                                                                                         | no       |             |
| disableScrollViewPanResponder             | property | `boolean \| undefined`                                                                                         | no       |             |
| endFillColor                              | property | `ColorValue \| undefined`                                                                                      | no       |             |
| fadingEdgeLength                          | property | `number \| { start: number; end: number; } \| undefined`                                                       | no       |             |
| flex                                      | property | `Responsive<number> \| undefined`                                                                              | no       |             |
| flexBasis                                 | property | `Responsive<string \| number> \| undefined`                                                                    | no       |             |
| flexGrow                                  | property | `Responsive<number> \| undefined`                                                                              | no       |             |
| flexShrink                                | property | `Responsive<number> \| undefined`                                                                              | no       |             |
| focusable                                 | property | `boolean \| undefined`                                                                                         | no       |             |
| hasTVPreferredFocus                       | property | `boolean \| undefined`                                                                                         | no       |             |
| height                                    | property | `Responsive<string \| number> \| undefined`                                                                    | no       |             |
| hitSlop                                   | property | `number \| Insets \| null \| undefined`                                                                        | no       |             |
| horizontal                                | property | `boolean \| null \| undefined`                                                                                 | no       |             |
| id                                        | property | `string \| undefined`                                                                                          | no       |             |
| importantForAccessibility                 | property | `"auto" \| "yes" \| "no" \| "no-hide-descendants" \| undefined`                                                | no       |             |
| indicatorStyle                            | property | `"default" \| "black" \| "white" \| undefined`                                                                 | no       |             |
| innerViewRef                              | property | `React.RefObject<View> \| undefined`                                                                           | no       |             |
| invertStickyHeaders                       | property | `boolean \| undefined`                                                                                         | no       |             |
| isTVSelectable                            | property | `boolean \| undefined`                                                                                         | no       |             |
| keyboardDismissMode                       | property | `"none" \| "interactive" \| "on-drag" \| undefined`                                                            | no       |             |
| keyboardShouldPersistTaps                 | property | `boolean \| "never" \| "always" \| "handled" \| undefined`                                                     | no       |             |
| left                                      | property | `Responsive<number> \| undefined`                                                                              | no       |             |
| m                                         | property | `Responsive<SpaceValue> \| undefined`                                                                          | no       |             |
| maintainVisibleContentPosition            | property | `{ autoscrollToTopThreshold?: number \| null \| undefined; minIndexForVisible: number; } \| null \| undefined` | no       |             |
| maxHeight                                 | property | `Responsive<string \| number> \| undefined`                                                                    | no       |             |
| maximumZoomScale                          | property | `number \| undefined`                                                                                          | no       |             |
| maxWidth                                  | property | `Responsive<string \| number> \| undefined`                                                                    | no       |             |
| mb                                        | property | `Responsive<SpaceValue> \| undefined`                                                                          | no       |             |
| minHeight                                 | property | `Responsive<string \| number> \| undefined`                                                                    | no       |             |
| minimumZoomScale                          | property | `number \| undefined`                                                                                          | no       |             |
| minWidth                                  | property | `Responsive<string \| number> \| undefined`                                                                    | no       |             |
| ml                                        | property | `Responsive<SpaceValue> \| undefined`                                                                          | no       |             |
| mr                                        | property | `Responsive<SpaceValue> \| undefined`                                                                          | no       |             |
| mt                                        | property | `Responsive<SpaceValue> \| undefined`                                                                          | no       |             |
| mx                                        | property | `Responsive<SpaceValue> \| undefined`                                                                          | no       |             |
| my                                        | property | `Responsive<SpaceValue> \| undefined`                                                                          | no       |             |
| nativeID                                  | property | `string \| undefined`                                                                                          | no       |             |
| needsOffscreenAlphaCompositing            | property | `boolean \| undefined`                                                                                         | no       |             |
| nestedScrollEnabled                       | property | `boolean \| undefined`                                                                                         | no       |             |
| onAccessibilityAction                     | property | `((event: AccessibilityActionEvent) => void) \| undefined`                                                     | no       |             |
| onAccessibilityEscape                     | property | `(() => void) \| undefined`                                                                                    | no       |             |
| onAccessibilityTap                        | property | `(() => void) \| undefined`                                                                                    | no       |             |
| onBlur                                    | property | `((e: BlurEvent) => void) \| null \| undefined`                                                                | no       |             |
| onContentSizeChange                       | property | `((contentWidth: number, contentHeight: number) => void) \| undefined`                                         | no       |             |
| onFocus                                   | property | `((e: FocusEvent) => void) \| null \| undefined`                                                               | no       |             |
| onLayout                                  | property | `((event: LayoutChangeEvent) => void) \| undefined`                                                            | no       |             |
| onMagicTap                                | property | `(() => void) \| undefined`                                                                                    | no       |             |
| onMomentumScrollBegin                     | property | `((event: NativeSyntheticEvent<NativeScrollEvent>) => void) \| undefined`                                      | no       |             |
| onMomentumScrollEnd                       | property | `((event: NativeSyntheticEvent<NativeScrollEvent>) => void) \| undefined`                                      | no       |             |
| onMoveShouldSetResponder                  | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                     | no       |             |
| onMoveShouldSetResponderCapture           | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                     | no       |             |
| onPointerCancel                           | property | `((event: PointerEvent) => void) \| undefined`                                                                 | no       |             |
| onPointerCancelCapture                    | property | `((event: PointerEvent) => void) \| undefined`                                                                 | no       |             |
| onPointerDown                             | property | `((event: PointerEvent) => void) \| undefined`                                                                 | no       |             |
| onPointerDownCapture                      | property | `((event: PointerEvent) => void) \| undefined`                                                                 | no       |             |
| onPointerEnter                            | property | `((event: PointerEvent) => void) \| undefined`                                                                 | no       |             |
| onPointerEnterCapture                     | property | `((event: PointerEvent) => void) \| undefined`                                                                 | no       |             |
| onPointerLeave                            | property | `((event: PointerEvent) => void) \| undefined`                                                                 | no       |             |
| onPointerLeaveCapture                     | property | `((event: PointerEvent) => void) \| undefined`                                                                 | no       |             |
| onPointerMove                             | property | `((event: PointerEvent) => void) \| undefined`                                                                 | no       |             |
| onPointerMoveCapture                      | property | `((event: PointerEvent) => void) \| undefined`                                                                 | no       |             |
| onPointerUp                               | property | `((event: PointerEvent) => void) \| undefined`                                                                 | no       |             |
| onPointerUpCapture                        | property | `((event: PointerEvent) => void) \| undefined`                                                                 | no       |             |
| onResponderEnd                            | property | `((event: GestureResponderEvent) => void) \| undefined`                                                        | no       |             |
| onResponderGrant                          | property | `((event: GestureResponderEvent) => void) \| undefined`                                                        | no       |             |
| onResponderMove                           | property | `((event: GestureResponderEvent) => void) \| undefined`                                                        | no       |             |
| onResponderReject                         | property | `((event: GestureResponderEvent) => void) \| undefined`                                                        | no       |             |
| onResponderRelease                        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                        | no       |             |
| onResponderStart                          | property | `((event: GestureResponderEvent) => void) \| undefined`                                                        | no       |             |
| onResponderTerminate                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                        | no       |             |
| onResponderTerminationRequest             | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                     | no       |             |
| onScroll                                  | property | `((event: NativeSyntheticEvent<NativeScrollEvent>) => void) \| undefined`                                      | no       |             |
| onScrollAnimationEnd                      | property | `(() => void) \| undefined`                                                                                    | no       |             |
| onScrollBeginDrag                         | property | `((event: NativeSyntheticEvent<NativeScrollEvent>) => void) \| undefined`                                      | no       |             |
| onScrollEndDrag                           | property | `((event: NativeSyntheticEvent<NativeScrollEvent>) => void) \| undefined`                                      | no       |             |
| onScrollToTop                             | property | `((event: NativeSyntheticEvent<NativeScrollEvent>) => void) \| undefined`                                      | no       |             |
| onStartShouldSetResponder                 | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                     | no       |             |
| onStartShouldSetResponderCapture          | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                     | no       |             |
| onTouchCancel                             | property | `((event: GestureResponderEvent) => void) \| undefined`                                                        | no       |             |
| onTouchEnd                                | property | `((event: GestureResponderEvent) => void) \| undefined`                                                        | no       |             |
| onTouchEndCapture                         | property | `((event: GestureResponderEvent) => void) \| undefined`                                                        | no       |             |
| onTouchMove                               | property | `((event: GestureResponderEvent) => void) \| undefined`                                                        | no       |             |
| onTouchStart                              | property | `((event: GestureResponderEvent) => void) \| undefined`                                                        | no       |             |
| opacity                                   | property | `Responsive<number> \| undefined`                                                                              | no       |             |
| overflow                                  | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                   | no       |             |
| overScrollMode                            | property | `"auto" \| "never" \| "always" \| undefined`                                                                   | no       |             |
| p                                         | property | `Responsive<SpaceValue> \| undefined`                                                                          | no       |             |
| pagingEnabled                             | property | `boolean \| undefined`                                                                                         | no       |             |
| pb                                        | property | `Responsive<SpaceValue> \| undefined`                                                                          | no       |             |
| persistentScrollbar                       | property | `boolean \| undefined`                                                                                         | no       |             |
| pinchGestureEnabled                       | property | `boolean \| undefined`                                                                                         | no       |             |
| pl                                        | property | `Responsive<SpaceValue> \| undefined`                                                                          | no       |             |
| pointerEvents                             | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                    | no       |             |
| position                                  | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                | no       |             |
| pr                                        | property | `Responsive<SpaceValue> \| undefined`                                                                          | no       |             |
| pt                                        | property | `Responsive<SpaceValue> \| undefined`                                                                          | no       |             |
| px                                        | property | `Responsive<SpaceValue> \| undefined`                                                                          | no       |             |
| py                                        | property | `Responsive<SpaceValue> \| undefined`                                                                          | no       |             |
| radius                                    | property | `Responsive<RadiusValue> \| undefined`                                                                         | no       |             |
| refreshControl                            | property | `React.ReactElement<RefreshControlProps, string \| React.JSXElementConstructor<any>> \| undefined`             | no       |             |
| removeClippedSubviews                     | property | `boolean \| undefined`                                                                                         | no       |             |
| renderToHardwareTextureAndroid            | property | `boolean \| undefined`                                                                                         | no       |             |
| right                                     | property | `Responsive<number> \| undefined`                                                                              | no       |             |
| role                                      | property | `Role \| undefined`                                                                                            | no       |             |
| screenReaderFocusable                     | property | `boolean \| undefined`                                                                                         | no       |             |
| scrollEnabled                             | property | `boolean \| undefined`                                                                                         | no       |             |
| scrollEventThrottle                       | property | `number \| undefined`                                                                                          | no       |             |
| scrollIndicatorInsets                     | property | `Insets \| undefined`                                                                                          | no       |             |
| scrollPerfTag                             | property | `string \| undefined`                                                                                          | no       |             |
| scrollsChildToFocus                       | property | `boolean \| undefined`                                                                                         | no       |             |
| scrollsToTop                              | property | `boolean \| undefined`                                                                                         | no       |             |
| scrollToOverflowEnabled                   | property | `boolean \| undefined`                                                                                         | no       |             |
| scrollViewRef                             | property | `React.RefObject<ScrollView> \| undefined`                                                                     | no       |             |
| shouldRasterizeIOS                        | property | `boolean \| undefined`                                                                                         | no       |             |
| showsHorizontalScrollIndicator            | property | `boolean \| undefined`                                                                                         | no       |             |
| showsVerticalScrollIndicator              | property | `boolean \| undefined`                                                                                         | no       |             |
| snapToAlignment                           | property | `"center" \| "start" \| "end" \| undefined`                                                                    | no       |             |
| snapToEnd                                 | property | `boolean \| undefined`                                                                                         | no       |             |
| snapToInterval                            | property | `number \| undefined`                                                                                          | no       |             |
| snapToOffsets                             | property | `number[] \| undefined`                                                                                        | no       |             |
| snapToStart                               | property | `boolean \| undefined`                                                                                         | no       |             |
| StickyHeaderComponent                     | property | `React.ComponentType<any> \| undefined`                                                                        | no       |             |
| stickyHeaderHiddenOnScroll                | property | `boolean \| undefined`                                                                                         | no       |             |
| stickyHeaderIndices                       | property | `number[] \| undefined`                                                                                        | no       |             |
| style                                     | property | `StyleProp<ViewStyle>`                                                                                         | no       |             |
| tabIndex                                  | property | `0 \| -1 \| undefined`                                                                                         | no       |             |
| testID                                    | property | `string \| undefined`                                                                                          | no       |             |
| top                                       | property | `Responsive<number> \| undefined`                                                                              | no       |             |
| tvParallaxMagnification                   | property | `number \| undefined`                                                                                          | no       |             |
| tvParallaxShiftDistanceX                  | property | `number \| undefined`                                                                                          | no       |             |
| tvParallaxShiftDistanceY                  | property | `number \| undefined`                                                                                          | no       |             |
| tvParallaxTiltAngle                       | property | `number \| undefined`                                                                                          | no       |             |
| width                                     | property | `Responsive<string \| number> \| undefined`                                                                    | no       |             |
| zIndex                                    | property | `Responsive<number> \| undefined`                                                                              | no       |             |
| zoomScale                                 | property | `number \| undefined`                                                                                          | no       |             |

## SelectionSemantics

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:91:1`

### Members

| Name       | Kind     | Type     | Required | Description |
| ---------- | -------- | -------- | -------- | ----------- |
| background | property | `string` | yes      |             |
| border     | property | `string` | yes      |             |
| content    | property | `string` | yes      |             |

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
| axis   | property | `"horizontal" \| "vertical" \| "both" \| undefined` | no       |             |
| size   | property | `SpaceValue \| undefined`                           | no       |             |
| testID | property | `string \| undefined`                               | no       |             |

## Stack

Kind: `function`
Module: `src/features/layout/adapters/inbound/Stack.tsx`
Source: `src/features/layout/adapters/inbound/Stack.tsx:10:1`

Stacks authored children directly along a responsive flex direction.

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
Module: `src/types/layout.ts`
Source: `src/types/layout.ts:87:1`

### Members

| Name               | Kind     | Type                                                                                                                     | Required | Description |
| ------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------ | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                                                                    | no       |             |
| accessibilityRole  | property | `import("react-native").AccessibilityRole \| undefined`                                                                  | no       |             |
| accessibilityState | property | `import("react-native").AccessibilityState \| undefined`                                                                 | no       |             |
| accessible         | property | `boolean \| undefined`                                                                                                   | no       |             |
| align              | property | `Responsive<"flex-start" \| "flex-end" \| "center" \| "stretch" \| "baseline"> \| undefined`                             | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>`                                                | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                                                                    | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                                                                    | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                                                        | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                                                        | no       |             |
| children           | property | `React.ReactNode`                                                                                                        | no       |             |
| direction          | property | `Responsive<"row" \| "column"> \| undefined`                                                                             | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                                                        | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                                                              | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                                                        | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                                                        | no       |             |
| gap                | property | `Responsive<SpaceValue> \| undefined`                                                                                    | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                                                              | no       |             |
| justify            | property | `Responsive<"flex-start" \| "flex-end" \| "center" \| "space-between" \| "space-around" \| "space-evenly"> \| undefined` | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                                                        | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                                                                    | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                                                              | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                                                              | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                    | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                                                              | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                                                              | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                                                                    | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                    | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                    | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                                                                    | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                                                                    | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                                                        | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                                                             | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                                                                    | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                                                                    | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                                                                    | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                              | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                                                          | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                                                                    | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                                                                    | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                                                                    | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                                                                    | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                                                                   | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                                                        | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                                                                   | no       |             |
| testID             | property | `string \| undefined`                                                                                                    | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                                                        | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                                                              | no       |             |
| wrap               | property | `Responsive<"nowrap" \| "wrap"> \| undefined`                                                                            | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                                                        | no       |             |

## SUPPORTED_ICON_PROVIDERS

Kind: `value`
Module: `src/features/icon/constants.ts`
Source: `src/features/icon/constants.ts:3:14`

## Surface

Kind: `function`
Module: `src/features/surface/adapters/inbound/Surface.tsx`
Source: `src/features/surface/adapters/inbound/Surface.tsx:9:1`

Renders a themed container surface with semantic elevation and border variants.

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

## SurfaceColorDiagnostics

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:137:1`

### Members

| Name               | Kind     | Type                                                                           | Required | Description |
| ------------------ | -------- | ------------------------------------------------------------------------------ | -------- | ----------- |
| contrasts          | property | `readonly SurfaceContrastDiagnostic[]`                                         | yes      |             |
| generated          | property | `GeneratedThemeModeColors`                                                     | yes      |             |
| mode               | property | `ThemeColorMode`                                                               | yes      |             |
| selections         | property | `readonly SurfaceColorSelectionDiagnostic[]`                                   | yes      |             |
| semanticReferences | property | `SemanticColorReferenceMap`                                                    | yes      |             |
| statusSwatches     | property | `Record<"success" \| "warning" \| "info" \| "danger", ColorSwatchDiagnostics>` | yes      |             |
| surfaceSeparation  | property | `readonly SurfaceContrastDiagnostic[]`                                         | yes      |             |

## SurfaceColorSelectionDiagnostic

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:131:1`

### Members

| Name   | Kind     | Type                         | Required | Description |
| ------ | -------- | ---------------------------- | -------- | ----------- |
| id     | property | `string`                     | yes      |             |
| result | property | `ColorSwatchSelectionResult` | yes      |             |

## SurfaceContrastDiagnostic

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:121:1`

### Members

| Name            | Kind     | Type       | Required | Description |
| --------------- | -------- | ---------- | -------- | ----------- |
| background      | property | `HexColor` | yes      |             |
| contrast        | property | `number`   | yes      |             |
| foreground      | property | `HexColor` | yes      |             |
| id              | property | `string`   | yes      |             |
| minimumContrast | property | `number`   | yes      |             |
| passes          | property | `boolean`  | yes      |             |

## SurfaceEmphasis

Kind: `unknown`
Module: `src/surfaceColor.ts`
Source: `src/surfaceColor.ts:22:1`

## SurfaceImageSource

Kind: `unknown`
Module: `src/types/image.ts`
Source: `src/types/image.ts:11:1`

## SurfacePaletteColor

Kind: `unknown`
Module: `src/surfaceColor.ts`
Source: `src/surfaceColor.ts:19:1`

## SurfaceProps

Kind: `type`
Module: `src/types/surface.ts`
Source: `src/types/surface.ts:5:1`

### Members

| Name               | Kind     | Type                                                                      | Required | Description |
| ------------------ | -------- | ------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                     | no       |             |
| accessibilityRole  | property | `import("react-native").AccessibilityRole \| undefined`                   | no       |             |
| accessibilityState | property | `import("react-native").AccessibilityState \| undefined`                  | no       |             |
| accessible         | property | `boolean \| undefined`                                                    | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>` | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                         | no       |             |
| children           | property | `React.ReactNode`                                                         | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                         | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                         | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| left               | property | `Responsive<number> \| undefined`                                         | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                         | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`              | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`               | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`           | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                     | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                    | no       |             |
| right              | property | `Responsive<number> \| undefined`                                         | no       |             |
| style              | property | `StyleProp<ViewStyle>`                                                    | no       |             |
| testID             | property | `string \| undefined`                                                     | no       |             |
| top                | property | `Responsive<number> \| undefined`                                         | no       |             |
| variant            | property | `SurfaceVariant \| undefined`                                             | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                               | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                         | no       |             |

## SurfaceSemanticColors

Kind: `unknown`
Module: `src/theme/colorEngine.ts`
Source: `src/theme/colorEngine.ts:24:1`

## SurfaceSemantics

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:61:1`

### Members

| Name     | Kind     | Type     | Required | Description |
| -------- | -------- | -------- | -------- | ----------- |
| default  | property | `string` | yes      |             |
| disabled | property | `string` | yes      |             |
| inverse  | property | `string` | yes      |             |
| overlay  | property | `string` | yes      |             |
| raised   | property | `string` | yes      |             |
| scrim    | property | `string` | yes      |             |
| subtle   | property | `string` | yes      |             |
| sunken   | property | `string` | yes      |             |

## SurfaceStatusColor

Kind: `unknown`
Module: `src/surfaceColor.ts`
Source: `src/surfaceColor.ts:20:1`

## SurfaceTheme

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:242:1`

### Members

| Name             | Kind     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Required | Description |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| colorDiagnostics | property | `SurfaceColorDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | yes      |             |
| colors           | property | `{ [key: string]: string; primary: string; secondary: string; accent: string; highlight: string; tertiary: string; quaternary: string; background: string; surface: string; text: string; textSecondary: string; border: string; error: string; success: string; warning: string; info: string; }`                                                                                                                                                                                                                                                                                                                                                                    | yes      |             |
| config           | property | `ContractsThemeConfig`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | yes      |             |
| radii            | property | `{ [key: string]: number; none: 0; s: number; m: number; l: number; full: number; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | yes      |             |
| semantics        | property | `ThemeSemantics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | yes      |             |
| shadows          | property | `{ [key: string]: number; soft: number; medium: number; hard: number; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | yes      |             |
| spacing          | property | `{ [key: string]: number; none: 0; xs: number; s: number; m: number; l: number; xl: number; xxl: number; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | yes      |             |
| swatches         | property | `GeneratedThemeSwatches`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | yes      |             |
| typography       | property | `{ headings: Record<1 \| 2 \| 3 \| 4 \| 5 \| 6, { size: number; lineHeight: number; weight: "regular" \| "medium" \| "semiBold" \| "bold"; }>; sizes: { xs: number; s: number; m: number; l: number; xl: number; xxl: number; "3xl": number; h1: number; h2: number; h3: number; h4: number; h5: number; h6: number; [key: string]: number; }; weights: { thin: FontWeight; extraLight: FontWeight; light: FontWeight; regular: FontWeight; medium: FontWeight; semiBold: FontWeight; bold: FontWeight; extraBold: FontWeight; black: FontWeight; }; fonts: { normal: Record<FontWeight, string \| undefined>; italic: Record<FontWeight, string \| undefined>; }; }` | yes      |             |

## SurfaceVariant

Kind: `unknown`
Module: `src/types/surface.ts`
Source: `src/types/surface.ts:3:1`

## SvgIconSource

Kind: `type`
Module: `src/types/icon.ts`
Source: `src/types/icon.ts:35:1`

### Members

| Name     | Kind     | Type                 | Required | Description |
| -------- | -------- | -------------------- | -------- | ----------- |
| name     | property | `undefined`          | no       |             |
| provider | property | `undefined`          | no       |             |
| source   | property | `SurfaceImageSource` | yes      |             |
| variant  | property | `undefined`          | no       |             |

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
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>`                                                                     | no       |             |
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
| interactionPolicy  | property | `InteractionPolicy \| undefined`                                                                                                              | no       |             |
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
Module: `src/features/tabs/adapters/inbound/Tab.tsx`
Source: `src/features/tabs/adapters/inbound/Tab.tsx:12:1`

Renders one accessible selectable tab inside a Tabs context.

### Signatures

- `({
value,
children,
disabled = false,
interactionPolicy = 'enabled',
testID,
}: TabProps) => React.JSX.Element`
  - {
    value,
    children,
    disabled = false,
    interactionPolicy = 'enabled',
    testID,
    }: `TabProps`
  - returns: `React.JSX.Element`

## TabList

Kind: `function`
Module: `src/features/tabs/adapters/inbound/TabList.tsx`
Source: `src/features/tabs/adapters/inbound/TabList.tsx:20:1`

Renders the accessible tab list and owns keyboard focus navigation.

### Signatures

- `({ children, testID }: TabListProps) => React.JSX.Element`
  - { children, testID }: `TabListProps`
  - returns: `React.JSX.Element`

## TabListProps

Kind: `type`
Module: `src/types/tabs.ts`
Source: `src/types/tabs.ts:13:1`

### Members

| Name     | Kind     | Type                  | Required | Description |
| -------- | -------- | --------------------- | -------- | ----------- |
| children | property | `React.ReactNode`     | no       |             |
| testID   | property | `string \| undefined` | no       |             |

## TabPanel

Kind: `function`
Module: `src/features/tabs/adapters/inbound/TabPanel.tsx`
Source: `src/features/tabs/adapters/inbound/TabPanel.tsx:10:1`

Renders the content panel associated with the active tab value.

### Signatures

- `({ value, children, testID }: TabPanelProps) => React.JSX.Element | null`
  - { value, children, testID }: `TabPanelProps`
  - returns: `React.JSX.Element | null`

## TabPanelProps

Kind: `type`
Module: `src/types/tabs.ts`
Source: `src/types/tabs.ts:26:1`

### Members

| Name     | Kind     | Type                  | Required | Description |
| -------- | -------- | --------------------- | -------- | ----------- |
| children | property | `React.ReactNode`     | no       |             |
| testID   | property | `string \| undefined` | no       |             |
| value    | property | `string`              | yes      |             |

## TabProps

Kind: `type`
Module: `src/types/tabs.ts`
Source: `src/types/tabs.ts:18:1`

### Members

| Name              | Kind     | Type                             | Required | Description |
| ----------------- | -------- | -------------------------------- | -------- | ----------- |
| children          | property | `React.ReactNode`                | no       |             |
| disabled          | property | `boolean \| undefined`           | no       |             |
| interactionPolicy | property | `InteractionPolicy \| undefined` | no       |             |
| testID            | property | `string \| undefined`            | no       |             |
| value             | property | `string`                         | yes      |             |

## Tabs

Kind: `function`
Module: `src/features/tabs/adapters/inbound/Tabs.tsx`
Source: `src/features/tabs/adapters/inbound/Tabs.tsx:9:1`

Provides accessible tab selection state to TabList, Tab, and TabPanel children.

### Signatures

- `({ children, ...props }: TabsProps) => React.JSX.Element`
  - { children, ...props }: `TabsProps`
  - returns: `React.JSX.Element`

## TabsProps

Kind: `type`
Module: `src/types/tabs.ts`
Source: `src/types/tabs.ts:5:1`

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
Source: `src/layout/Template.tsx:35:1`

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
Source: `src/layout/Template.tsx:19:1`

### Members

| Name               | Kind     | Type                                                                             | Required | Description |
| ------------------ | -------- | -------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityLabel | property | `string \| undefined`                                                            | no       |             |
| accessibilityRole  | property | `import("react-native").AccessibilityRole \| undefined`                          | no       |             |
| accessibilityState | property | `import("react-native").AccessibilityState \| undefined`                         | no       |             |
| accessible         | property | `boolean \| undefined`                                                           | no       |             |
| alignSelf          | property | `Responsive<"auto" \| import("react-native").FlexAlignType \| undefined>`        | no       |             |
| bg                 | property | `Responsive<ColorValue> \| undefined`                                            | no       |             |
| borderColor        | property | `Responsive<ColorValue> \| undefined`                                            | no       |             |
| borderWidth        | property | `Responsive<number> \| undefined`                                                | no       |             |
| bottom             | property | `Responsive<number> \| undefined`                                                | no       |             |
| colGap             | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| columns            | property | `Partial<Record<"base" \| "sm" \| "md" \| "lg" \| "xl", number[]>> \| undefined` | no       |             |
| flex               | property | `Responsive<number> \| undefined`                                                | no       |             |
| flexBasis          | property | `Responsive<string \| number> \| undefined`                                      | no       |             |
| flexGrow           | property | `Responsive<number> \| undefined`                                                | no       |             |
| flexShrink         | property | `Responsive<number> \| undefined`                                                | no       |             |
| gap                | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| height             | property | `Responsive<string \| number> \| undefined`                                      | no       |             |
| left               | property | `Responsive<number> \| undefined`                                                | no       |             |
| m                  | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| maxHeight          | property | `Responsive<string \| number> \| undefined`                                      | no       |             |
| maxWidth           | property | `Responsive<string \| number> \| undefined`                                      | no       |             |
| mb                 | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| minHeight          | property | `Responsive<string \| number> \| undefined`                                      | no       |             |
| minWidth           | property | `Responsive<string \| number> \| undefined`                                      | no       |             |
| ml                 | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| mr                 | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| mt                 | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| mx                 | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| my                 | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| opacity            | property | `Responsive<number> \| undefined`                                                | no       |             |
| overflow           | property | `Responsive<"visible" \| "hidden" \| "scroll" \| undefined>`                     | no       |             |
| p                  | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| pb                 | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| pl                 | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| pointerEvents      | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                      | no       |             |
| position           | property | `Responsive<"absolute" \| "relative" \| "static" \| undefined>`                  | no       |             |
| pr                 | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| pt                 | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| px                 | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| py                 | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| radius             | property | `Responsive<RadiusValue> \| undefined`                                           | no       |             |
| right              | property | `Responsive<number> \| undefined`                                                | no       |             |
| rowGap             | property | `Responsive<SpaceValue> \| undefined`                                            | no       |             |
| slots              | property | `SlotMap`                                                                        | yes      |             |
| style              | property | `StyleProp<ViewStyle>`                                                           | no       |             |
| templates          | property | `Partial<Record<"base" \| "sm" \| "md" \| "lg" \| "xl", string[][]>>`            | yes      |             |
| testID             | property | `string \| undefined`                                                            | no       |             |
| top                | property | `Responsive<number> \| undefined`                                                | no       |             |
| width              | property | `Responsive<string \| number> \| undefined`                                      | no       |             |
| zIndex             | property | `Responsive<number> \| undefined`                                                | no       |             |

## Text

Kind: `function`
Module: `src/features/typography/adapters/inbound/Text.tsx`
Source: `src/features/typography/adapters/inbound/Text.tsx:10:1`

Renders translatable body text using Surface semantic typography.

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

| Name                                   | Kind     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Required | Description |
| -------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityActions                   | property | `readonly Readonly<{ name: AccessibilityActionName \| string; label?: string \| undefined; }>[] \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| accessibilityElementsHidden            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| accessibilityHint                      | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| accessibilityIgnoresInvertColors       | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| accessibilityLabel                     | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| accessibilityLabelledBy                | property | `string \| string[] \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| accessibilityLanguage                  | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| accessibilityLargeContentTitle         | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| accessibilityLiveRegion                | property | `"none" \| "polite" \| "assertive" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| accessibilityRespondsToUserInteraction | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| accessibilityRole                      | property | `AccessibilityRole \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| accessibilityShowsLargeContentViewer   | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| accessibilityState                     | property | `AccessibilityState \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| accessibilityValue                     | property | `AccessibilityValue \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| accessibilityViewIsModal               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| accessible                             | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| allowFontScaling                       | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| aria-busy                              | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| aria-checked                           | property | `boolean \| "mixed" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| aria-disabled                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| aria-expanded                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| aria-hidden                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| aria-label                             | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| aria-labelledby                        | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| aria-live                              | property | `"off" \| "polite" \| "assertive" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| aria-modal                             | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| aria-selected                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| aria-valuemax                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| aria-valuemin                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| aria-valuenow                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| aria-valuetext                         | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| autoCapitalize                         | property | `"none" \| "sentences" \| "words" \| "characters" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| autoComplete                           | property | `"2fa-app-otp" \| "additional-name" \| "address-line1" \| "address-line2" \| "birthdate-day" \| "birthdate-full" \| "birthdate-month" \| "birthdate-year" \| "cc-csc" \| "cc-exp" \| "cc-exp-day" \| "cc-exp-month" \| "cc-exp-year" \| "cc-number" \| "cc-name" \| "cc-given-name" \| "cc-middle-name" \| "cc-family-name" \| "cc-type" \| "country" \| "current-password" \| "email" \| "email-otp" \| "flight-confirmation-code" \| "flight-number" \| "family-name" \| "gender" \| "gift-card-number" \| "gift-card-pin" \| "given-name" \| "honorific-prefix" \| "honorific-suffix" \| "loyalty-account-number" \| "name" \| "name-family" \| "name-given" \| "name-middle" \| "name-middle-initial" \| "name-prefix" \| "name-suffix" \| "new-password" \| "nickname" \| "one-time-code" \| "organization" \| "organization-title" \| "password" \| "password-new" \| "postal-address" \| "postal-address-country" \| "postal-address-dependent-locality" \| "postal-address-extended" \| "postal-address-extended-postal-code" \| "postal-address-locality" \| "postal-address-region" \| "postal-address-unit" \| "postal-code" \| "promo-code" \| "street-address" \| "sms-otp" \| "tel" \| "tel-country-code" \| "tel-national" \| "tel-device" \| "upi-vpa" \| "url" \| "wifi-password" \| "username" \| "username-new" \| "off" \| undefined` | no       |             |
| autoCorrect                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| autoFocus                              | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| blurOnSubmit                           | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| caretHidden                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| children                               | property | `React.ReactNode`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| clearButtonMode                        | property | `"never" \| "while-editing" \| "unless-editing" \| "always" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | no       |             |
| clearTextOnFocus                       | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| collapsable                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| collapsableChildren                    | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| contextMenuHidden                      | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| cursorColor                            | property | `ColorValue \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| dataDetectorTypes                      | property | `DataDetectorTypes \| DataDetectorTypes[] \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| defaultValue                           | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| disabled                               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| disableFullscreenUI                    | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| disableKeyboardShortcuts               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| enablesReturnKeyAutomatically          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| enterKeyHint                           | property | `EnterKeyHintTypeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| focusable                              | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| hasTVPreferredFocus                    | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| hitSlop                                | property | `number \| Insets \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| id                                     | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| importantForAccessibility              | property | `"auto" \| "yes" \| "no" \| "no-hide-descendants" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| importantForAutofill                   | property | `"auto" \| "yes" \| "no" \| "noExcludeDescendants" \| "yesExcludeDescendants" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| inlineImageLeft                        | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| inlineImagePadding                     | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| inputAccessoryViewButtonLabel          | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| inputAccessoryViewID                   | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| inputMode                              | property | `InputModeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| interactionPolicy                      | property | `InteractionPolicy \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| invalid                                | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| isTVSelectable                         | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| keyboardAppearance                     | property | `"default" \| "light" \| "dark" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| keyboardType                           | property | `KeyboardTypeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | no       |             |
| leadingAccessory                       | property | `React.ReactNode`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| lineBreakModeIOS                       | property | `"wordWrapping" \| "char" \| "clip" \| "head" \| "middle" \| "tail" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| lineBreakStrategyIOS                   | property | `"none" \| "standard" \| "hangul-word" \| "push-out" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | no       |             |
| maxFontSizeMultiplier                  | property | `number \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| maxLength                              | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| nativeID                               | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| needsOffscreenAlphaCompositing         | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| numberOfLines                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| onAccessibilityAction                  | property | `((event: AccessibilityActionEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onAccessibilityEscape                  | property | `(() => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| onAccessibilityTap                     | property | `(() => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| onBlur                                 | property | `((e: BlurEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onChange                               | property | `((e: TextInputChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | no       |             |
| onChangeText                           | property | `((text: string) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onContentSizeChange                    | property | `((e: TextInputContentSizeChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onEndEditing                           | property | `((e: TextInputEndEditingEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| onFocus                                | property | `((e: FocusEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | no       |             |
| onKeyPress                             | property | `((e: TextInputKeyPressEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onLayout                               | property | `((event: LayoutChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| onMagicTap                             | property | `(() => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| onMoveShouldSetResponder               | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onMoveShouldSetResponderCapture        | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onPointerCancel                        | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerCancelCapture                 | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerDown                          | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerDownCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerEnter                         | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerEnterCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerLeave                         | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerLeaveCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerMove                          | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerMoveCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerUp                            | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerUpCapture                     | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPress                                | property | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPressIn                              | property | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPressOut                             | property | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onResponderEnd                         | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onResponderGrant                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onResponderMove                        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onResponderReject                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onResponderRelease                     | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onResponderStart                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onResponderTerminate                   | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onResponderTerminationRequest          | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onScroll                               | property | `((e: TextInputScrollEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | no       |             |
| onSelectionChange                      | property | `((e: TextInputSelectionChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| onStartShouldSetResponder              | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onStartShouldSetResponderCapture       | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onSubmitEditing                        | property | `((e: TextInputSubmitEditingEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | no       |             |
| onTouchCancel                          | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onTouchEnd                             | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onTouchEndCapture                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onTouchMove                            | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onTouchStart                           | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| passwordRules                          | property | `string \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| placeholder                            | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| pointerEvents                          | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| readOnly                               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| rejectResponderTermination             | property | `boolean \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| removeClippedSubviews                  | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| renderToHardwareTextureAndroid         | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| returnKeyLabel                         | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| returnKeyType                          | property | `ReturnKeyTypeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| role                                   | property | `Role \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| rows                                   | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| screenReaderFocusable                  | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| scrollEnabled                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| secureTextEntry                        | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| selection                              | property | `{ start: number; end?: number \| undefined; } \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| selectionColor                         | property | `ColorValue \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | no       |             |
| selectionHandleColor                   | property | `ColorValue \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| selectionState                         | property | `DocumentSelectionState \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| selectTextOnFocus                      | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| shouldRasterizeIOS                     | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| showSoftInputOnFocus                   | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| size                                   | property | `ControlSize \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| smartInsertDelete                      | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| spellCheck                             | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| style                                  | property | `StyleProp<TextStyle>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| submitBehavior                         | property | `SubmitBehavior \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| tabIndex                               | property | `0 \| -1 \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| testID                                 | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| textAlign                              | property | `"left" \| "right" \| "center" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| textAlignVertical                      | property | `"top" \| "bottom" \| "auto" \| "center" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| textBreakStrategy                      | property | `"simple" \| "highQuality" \| "balanced" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| textContentType                        | property | `"none" \| "name" \| "nickname" \| "password" \| "username" \| "flightNumber" \| "URL" \| "addressCity" \| "addressCityAndState" \| "addressState" \| "countryName" \| "creditCardNumber" \| "creditCardExpiration" \| "creditCardExpirationMonth" \| "creditCardExpirationYear" \| "creditCardSecurityCode" \| "creditCardType" \| "creditCardName" \| "creditCardGivenName" \| "creditCardMiddleName" \| "creditCardFamilyName" \| "emailAddress" \| "familyName" \| "fullStreetAddress" \| "givenName" \| "jobTitle" \| "location" \| "middleName" \| "namePrefix" \| "nameSuffix" \| "organizationName" \| "postalCode" \| "streetAddressLine1" \| "streetAddressLine2" \| "sublocality" \| "telephoneNumber" \| "newPassword" \| "oneTimeCode" \| "birthdate" \| "birthdateDay" \| "birthdateMonth" \| "birthdateYear" \| "cellularEID" \| "cellularIMEI" \| "dateTime" \| "shipmentTrackingNumber" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| trailingAccessory                      | property | `React.ReactNode`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| tvParallaxMagnification                | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| tvParallaxShiftDistanceX               | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| tvParallaxShiftDistanceY               | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| tvParallaxTiltAngle                    | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| underlineColorAndroid                  | property | `ColorValue \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | no       |             |
| value                                  | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| verticalAlign                          | property | `"top" \| "bottom" \| "auto" \| "middle" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |

## TextInput

Kind: `function`
Module: `src/features/form/text-input/adapters/inbound/TextInput.tsx`
Source: `src/features/form/text-input/adapters/inbound/TextInput.tsx:10:1`

Renders a token-aware text input with controlled interaction policy.

### Signatures

- `(props: TextInputProps) => React.JSX.Element`
  - props: `TextInputProps`
  - returns: `React.JSX.Element`

## TextInputProps

Kind: `type`
Module: `src/types/text-input.ts`
Source: `src/types/text-input.ts:11:1`

### Members

| Name                                   | Kind     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Required | Description |
| -------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| accessibilityActions                   | property | `readonly Readonly<{ name: AccessibilityActionName \| string; label?: string \| undefined; }>[] \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| accessibilityElementsHidden            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| accessibilityHint                      | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| accessibilityIgnoresInvertColors       | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| accessibilityLabel                     | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| accessibilityLabelledBy                | property | `string \| string[] \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| accessibilityLanguage                  | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| accessibilityLargeContentTitle         | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| accessibilityLiveRegion                | property | `"none" \| "polite" \| "assertive" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| accessibilityRespondsToUserInteraction | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| accessibilityRole                      | property | `AccessibilityRole \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| accessibilityShowsLargeContentViewer   | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| accessibilityState                     | property | `AccessibilityState \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| accessibilityValue                     | property | `AccessibilityValue \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| accessibilityViewIsModal               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| accessible                             | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| allowFontScaling                       | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| aria-busy                              | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| aria-checked                           | property | `boolean \| "mixed" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| aria-disabled                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| aria-expanded                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| aria-hidden                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| aria-label                             | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| aria-labelledby                        | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| aria-live                              | property | `"off" \| "polite" \| "assertive" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| aria-modal                             | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| aria-selected                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| aria-valuemax                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| aria-valuemin                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| aria-valuenow                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| aria-valuetext                         | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| autoCapitalize                         | property | `"none" \| "sentences" \| "words" \| "characters" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| autoComplete                           | property | `"2fa-app-otp" \| "additional-name" \| "address-line1" \| "address-line2" \| "birthdate-day" \| "birthdate-full" \| "birthdate-month" \| "birthdate-year" \| "cc-csc" \| "cc-exp" \| "cc-exp-day" \| "cc-exp-month" \| "cc-exp-year" \| "cc-number" \| "cc-name" \| "cc-given-name" \| "cc-middle-name" \| "cc-family-name" \| "cc-type" \| "country" \| "current-password" \| "email" \| "email-otp" \| "flight-confirmation-code" \| "flight-number" \| "family-name" \| "gender" \| "gift-card-number" \| "gift-card-pin" \| "given-name" \| "honorific-prefix" \| "honorific-suffix" \| "loyalty-account-number" \| "name" \| "name-family" \| "name-given" \| "name-middle" \| "name-middle-initial" \| "name-prefix" \| "name-suffix" \| "new-password" \| "nickname" \| "one-time-code" \| "organization" \| "organization-title" \| "password" \| "password-new" \| "postal-address" \| "postal-address-country" \| "postal-address-dependent-locality" \| "postal-address-extended" \| "postal-address-extended-postal-code" \| "postal-address-locality" \| "postal-address-region" \| "postal-address-unit" \| "postal-code" \| "promo-code" \| "street-address" \| "sms-otp" \| "tel" \| "tel-country-code" \| "tel-national" \| "tel-device" \| "upi-vpa" \| "url" \| "wifi-password" \| "username" \| "username-new" \| "off" \| undefined` | no       |             |
| autoCorrect                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| autoFocus                              | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| blurOnSubmit                           | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| caretHidden                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| children                               | property | `React.ReactNode`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| clearButtonMode                        | property | `"never" \| "while-editing" \| "unless-editing" \| "always" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | no       |             |
| clearTextOnFocus                       | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| collapsable                            | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| collapsableChildren                    | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| contextMenuHidden                      | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| cursorColor                            | property | `ColorValue \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| dataDetectorTypes                      | property | `DataDetectorTypes \| DataDetectorTypes[] \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| defaultValue                           | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| disabled                               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| disableFullscreenUI                    | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| disableKeyboardShortcuts               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| enablesReturnKeyAutomatically          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| enterKeyHint                           | property | `EnterKeyHintTypeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| focusable                              | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| hasTVPreferredFocus                    | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| hitSlop                                | property | `number \| Insets \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| id                                     | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| importantForAccessibility              | property | `"auto" \| "yes" \| "no" \| "no-hide-descendants" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| importantForAutofill                   | property | `"auto" \| "yes" \| "no" \| "noExcludeDescendants" \| "yesExcludeDescendants" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| inlineImageLeft                        | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| inlineImagePadding                     | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| inputAccessoryViewButtonLabel          | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| inputAccessoryViewID                   | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| inputMode                              | property | `InputModeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | no       |             |
| interactionPolicy                      | property | `InteractionPolicy \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |             |
| invalid                                | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| isTVSelectable                         | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| keyboardAppearance                     | property | `"default" \| "light" \| "dark" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| keyboardType                           | property | `KeyboardTypeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | no       |             |
| leadingAccessory                       | property | `React.ReactNode`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| lineBreakModeIOS                       | property | `"wordWrapping" \| "char" \| "clip" \| "head" \| "middle" \| "tail" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| lineBreakStrategyIOS                   | property | `"none" \| "standard" \| "hangul-word" \| "push-out" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | no       |             |
| maxFontSizeMultiplier                  | property | `number \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| maxLength                              | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| multiline                              | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| nativeID                               | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| needsOffscreenAlphaCompositing         | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| numberOfLines                          | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| onAccessibilityAction                  | property | `((event: AccessibilityActionEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onAccessibilityEscape                  | property | `(() => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| onAccessibilityTap                     | property | `(() => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| onBlur                                 | property | `((e: BlurEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onChange                               | property | `((e: TextInputChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | no       |             |
| onChangeText                           | property | `((text: string) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onContentSizeChange                    | property | `((e: TextInputContentSizeChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| onEndEditing                           | property | `((e: TextInputEndEditingEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| onFocus                                | property | `((e: FocusEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | no       |             |
| onKeyPress                             | property | `((e: TextInputKeyPressEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onLayout                               | property | `((event: LayoutChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| onMagicTap                             | property | `(() => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| onMoveShouldSetResponder               | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onMoveShouldSetResponderCapture        | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onPointerCancel                        | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerCancelCapture                 | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerDown                          | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerDownCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerEnter                         | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerEnterCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerLeave                         | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerLeaveCapture                  | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerMove                          | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerMoveCapture                   | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerUp                            | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPointerUpCapture                     | property | `((event: PointerEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| onPress                                | property | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPressIn                              | property | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onPressOut                             | property | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |             |
| onResponderEnd                         | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onResponderGrant                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onResponderMove                        | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onResponderReject                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onResponderRelease                     | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onResponderStart                       | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onResponderTerminate                   | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onResponderTerminationRequest          | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onScroll                               | property | `((e: TextInputScrollEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | no       |             |
| onSelectionChange                      | property | `((e: TextInputSelectionChangeEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| onStartShouldSetResponder              | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onStartShouldSetResponderCapture       | property | `((event: GestureResponderEvent) => boolean) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| onSubmitEditing                        | property | `((e: TextInputSubmitEditingEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | no       |             |
| onTouchCancel                          | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onTouchEnd                             | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onTouchEndCapture                      | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onTouchMove                            | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| onTouchStart                           | property | `((event: GestureResponderEvent) => void) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | no       |             |
| passwordRules                          | property | `string \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| placeholder                            | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| pointerEvents                          | property | `"none" \| "auto" \| "box-none" \| "box-only" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | no       |             |
| readOnly                               | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| rejectResponderTermination             | property | `boolean \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |             |
| removeClippedSubviews                  | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| renderToHardwareTextureAndroid         | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| returnKeyLabel                         | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| returnKeyType                          | property | `ReturnKeyTypeOptions \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| role                                   | property | `Role \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | no       |             |
| screenReaderFocusable                  | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| scrollEnabled                          | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| secureTextEntry                        | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| selection                              | property | `{ start: number; end?: number \| undefined; } \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| selectionColor                         | property | `ColorValue \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | no       |             |
| selectionHandleColor                   | property | `ColorValue \| null \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| selectionState                         | property | `DocumentSelectionState \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| selectTextOnFocus                      | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| shouldRasterizeIOS                     | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| showSoftInputOnFocus                   | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| size                                   | property | `ControlSize \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | no       |             |
| smartInsertDelete                      | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| spellCheck                             | property | `boolean \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| style                                  | property | `StyleProp<TextStyle>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| submitBehavior                         | property | `SubmitBehavior \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | no       |             |
| tabIndex                               | property | `0 \| -1 \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| testID                                 | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| textAlign                              | property | `"left" \| "right" \| "center" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |             |
| textAlignVertical                      | property | `"top" \| "bottom" \| "auto" \| "center" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| textBreakStrategy                      | property | `"simple" \| "highQuality" \| "balanced" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| textContentType                        | property | `"none" \| "name" \| "nickname" \| "password" \| "username" \| "flightNumber" \| "URL" \| "addressCity" \| "addressCityAndState" \| "addressState" \| "countryName" \| "creditCardNumber" \| "creditCardExpiration" \| "creditCardExpirationMonth" \| "creditCardExpirationYear" \| "creditCardSecurityCode" \| "creditCardType" \| "creditCardName" \| "creditCardGivenName" \| "creditCardMiddleName" \| "creditCardFamilyName" \| "emailAddress" \| "familyName" \| "fullStreetAddress" \| "givenName" \| "jobTitle" \| "location" \| "middleName" \| "namePrefix" \| "nameSuffix" \| "organizationName" \| "postalCode" \| "streetAddressLine1" \| "streetAddressLine2" \| "sublocality" \| "telephoneNumber" \| "newPassword" \| "oneTimeCode" \| "birthdate" \| "birthdateDay" \| "birthdateMonth" \| "birthdateYear" \| "cellularEID" \| "cellularIMEI" \| "dateTime" \| "shipmentTrackingNumber" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |
| trailingAccessory                      | property | `React.ReactNode`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | no       |             |
| tvParallaxMagnification                | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| tvParallaxShiftDistanceX               | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| tvParallaxShiftDistanceY               | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| tvParallaxTiltAngle                    | property | `number \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| underlineColorAndroid                  | property | `ColorValue \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | no       |             |
| value                                  | property | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | no       |             |
| verticalAlign                          | property | `"top" \| "bottom" \| "auto" \| "middle" \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | no       |             |

## TextProps

Kind: `type`
Module: `src/types/typography.ts`
Source: `src/types/typography.ts:21:1`

### Members

| Name          | Kind     | Type                                                                                                                                          | Required | Description |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| align         | property | `"left" \| "right" \| "auto" \| "center" \| "justify" \| undefined`                                                                           | no       |             |
| children      | property | `React.ReactNode`                                                                                                                             | no       |             |
| color         | property | `"primary" \| "secondary" \| "tertiary" \| "quaternary" \| "neutral" \| "success" \| "warning" \| "error" \| "info" \| "danger" \| undefined` | no       |             |
| emphasis      | property | `"default" \| "muted" \| "subtle" \| "inverse" \| undefined`                                                                                  | no       |             |
| i18nKey       | property | `string \| undefined`                                                                                                                         | no       |             |
| italic        | property | `boolean \| undefined`                                                                                                                        | no       |             |
| numberOfLines | property | `number \| undefined`                                                                                                                         | no       |             |
| testID        | property | `string \| undefined`                                                                                                                         | no       |             |
| variant       | property | `TextVariant \| undefined`                                                                                                                    | no       |             |
| weight        | property | `TextWeight \| undefined`                                                                                                                     | no       |             |

## ThemeConfig

Kind: `type`
Module: `node_modules/@ankhorage/contracts/dist/types.d.ts`
Source: `node_modules/@ankhorage/contracts/dist/types.d.ts:15:1`

### Members

| Name    | Kind     | Type                                     | Required | Description |
| ------- | -------- | ---------------------------------------- | -------- | ----------- |
| dark    | property | `ThemeModeConfig`                        | yes      |             |
| id      | property | `string`                                 | yes      |             |
| light   | property | `ThemeModeConfig`                        | yes      |             |
| name    | property | `string`                                 | yes      |             |
| recipes | property | `ThemeRecipeOverrides \| undefined`      | no       |             |
| tokens  | property | `ThemeGlobalTokenOverrides \| undefined` | no       |             |

## ThemeContext

Kind: `value`
Module: `src/theme/ThemeContext.tsx`
Source: `src/theme/ThemeContext.tsx:13:14`

## ThemeModeConfig

Kind: `type`
Module: `node_modules/@ankhorage/contracts/dist/types.d.ts`
Source: `node_modules/@ankhorage/contracts/dist/types.d.ts:11:1`

### Members

| Name         | Kind     | Type                                                                                                               | Required | Description |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ----------- |
| harmony      | property | `"complementary" \| "monochromatic" \| "analogous" \| "splitComplementary" \| "triadic" \| "tetradic" \| "square"` | yes      |             |
| primaryColor | property | `string`                                                                                                           | yes      |             |

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
Source: `src/theme/types.ts:103:1`

### Members

| Name      | Kind     | Type                 | Required | Description |
| --------- | -------- | -------------------- | -------- | ----------- |
| accent    | property | `RoleSemantics`      | yes      |             |
| action    | property | `ActionSemantics`    | yes      |             |
| border    | property | `BorderSemantics`    | yes      |             |
| brand     | property | `RoleSemantics`      | yes      |             |
| content   | property | `ContentSemantics`   | yes      |             |
| danger    | property | `RoleSemantics`      | yes      |             |
| error     | property | `RoleSemantics`      | yes      |             |
| highlight | property | `RoleSemantics`      | yes      |             |
| info      | property | `RoleSemantics`      | yes      |             |
| neutral   | property | `NeutralSemantics`   | yes      |             |
| secondary | property | `RoleSemantics`      | yes      |             |
| selection | property | `SelectionSemantics` | yes      |             |
| success   | property | `RoleSemantics`      | yes      |             |
| surface   | property | `SurfaceSemantics`   | yes      |             |
| warning   | property | `RoleSemantics`      | yes      |             |

## ThemeTokens

Kind: `type`
Module: `src/theme/types.ts`
Source: `src/theme/types.ts:150:1`

### Members

| Name             | Kind     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Required | Description |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| colorDiagnostics | property | `SurfaceColorDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | yes      |             |
| colors           | property | `{ [key: string]: string; primary: string; secondary: string; accent: string; highlight: string; tertiary: string; quaternary: string; background: string; surface: string; text: string; textSecondary: string; border: string; error: string; success: string; warning: string; info: string; }`                                                                                                                                                                                                                                                                                                                                                                    | yes      |             |
| radii            | property | `{ [key: string]: number; none: 0; s: number; m: number; l: number; full: number; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | yes      |             |
| semantics        | property | `ThemeSemantics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | yes      |             |
| shadows          | property | `{ [key: string]: number; soft: number; medium: number; hard: number; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | yes      |             |
| spacing          | property | `{ [key: string]: number; none: 0; xs: number; s: number; m: number; l: number; xl: number; xxl: number; }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | yes      |             |
| swatches         | property | `GeneratedThemeSwatches`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | yes      |             |
| typography       | property | `{ headings: Record<1 \| 2 \| 3 \| 4 \| 5 \| 6, { size: number; lineHeight: number; weight: "regular" \| "medium" \| "semiBold" \| "bold"; }>; sizes: { xs: number; s: number; m: number; l: number; xl: number; xxl: number; "3xl": number; h1: number; h2: number; h3: number; h4: number; h5: number; h6: number; [key: string]: number; }; weights: { thin: FontWeight; extraLight: FontWeight; light: FontWeight; regular: FontWeight; medium: FontWeight; semiBold: FontWeight; bold: FontWeight; extraBold: FontWeight; black: FontWeight; }; fonts: { normal: Record<FontWeight, string \| undefined>; italic: Record<FontWeight, string \| undefined>; }; }` | yes      |             |

## Toast

Kind: `function`
Module: `src/features/toast/adapters/inbound/Toast.tsx`
Source: `src/features/toast/adapters/inbound/Toast.tsx:13:1`

Renders one transient toast notification.

### Signatures

- `({
title,
description,
status = 'default',
onDismiss,
interactionPolicy = 'enabled',
testID,
}: ToastProps) => React.JSX.Element`
  - {
    title,
    description,
    status = 'default',
    onDismiss,
    interactionPolicy = 'enabled',
    testID,
    }: `ToastProps`
  - returns: `React.JSX.Element`

## ToastController

Kind: `type`
Module: `src/types/toast.ts`
Source: `src/types/toast.ts:27:1`

### Members

| Name         | Kind     | Type                                | Required | Description |
| ------------ | -------- | ----------------------------------- | -------- | ----------- |
| dismissToast | property | `(id: string) => void`              | yes      |             |
| showToast    | property | `(options: ToastOptions) => string` | yes      |             |

## ToastOptions

Kind: `type`
Module: `src/types/toast.ts`
Source: `src/types/toast.ts:17:1`

### Members

| Name              | Kind     | Type                             | Required | Description |
| ----------------- | -------- | -------------------------------- | -------- | ----------- |
| description       | property | `React.ReactNode`                | no       |             |
| duration          | property | `number \| undefined`            | no       |             |
| id                | property | `string \| undefined`            | no       |             |
| interactionPolicy | property | `InteractionPolicy \| undefined` | no       |             |
| status            | property | `ToastStatus \| undefined`       | no       |             |
| testID            | property | `string \| undefined`            | no       |             |
| title             | property | `React.ReactNode`                | no       |             |

## ToastProps

Kind: `type`
Module: `src/types/toast.ts`
Source: `src/types/toast.ts:8:1`

### Members

| Name              | Kind     | Type                             | Required | Description |
| ----------------- | -------- | -------------------------------- | -------- | ----------- |
| description       | property | `React.ReactNode`                | no       |             |
| interactionPolicy | property | `InteractionPolicy \| undefined` | no       |             |
| onDismiss         | property | `(() => void) \| undefined`      | no       |             |
| status            | property | `ToastStatus \| undefined`       | no       |             |
| testID            | property | `string \| undefined`            | no       |             |
| title             | property | `React.ReactNode`                | no       |             |

## ToastProvider

Kind: `function`
Module: `src/features/toast/adapters/inbound/ToastProvider.tsx`
Source: `src/features/toast/adapters/inbound/ToastProvider.tsx:13:1`

Provides the toast runtime context and renders its shared portal host.

### Signatures

- `({ children, defaultDuration = 4000 }: ToastProviderProps) => React.JSX.Element`
  - { children, defaultDuration = 4000 }: `ToastProviderProps`
  - returns: `React.JSX.Element`

## ToastProviderProps

Kind: `type`
Module: `src/types/toast.ts`
Source: `src/types/toast.ts:22:1`

### Members

| Name            | Kind     | Type                  | Required | Description |
| --------------- | -------- | --------------------- | -------- | ----------- |
| children        | property | `React.ReactNode`     | yes      |             |
| defaultDuration | property | `number \| undefined` | no       |             |

## ToastStatus

Kind: `unknown`
Module: `src/types/toast.ts`
Source: `src/types/toast.ts:6:1`

## Tooltip

Kind: `function`
Module: `src/features/tooltip/adapters/inbound/Tooltip.tsx`
Source: `src/features/tooltip/adapters/inbound/Tooltip.tsx:12:1`

Presents delayed hover/focus help through the shared Popover foundation.

### Signatures

- `({
children,
content,
delay = 150,
interactionPolicy = 'enabled',
placement = 'top',
testID,
}: TooltipProps) => React.JSX.Element`
  - {
    children,
    content,
    delay = 150,
    interactionPolicy = 'enabled',
    placement = 'top',
    testID,
    }: `TooltipProps`
  - returns: `React.JSX.Element`

## TooltipProps

Kind: `type`
Module: `src/types/tooltip.ts`
Source: `src/types/tooltip.ts:5:1`

### Members

| Name              | Kind     | Type                             | Required | Description |
| ----------------- | -------- | -------------------------------- | -------- | ----------- |
| children          | property | `React.ReactNode`                | no       |             |
| content           | property | `React.ReactNode`                | no       |             |
| delay             | property | `number \| undefined`            | no       |             |
| interactionPolicy | property | `InteractionPolicy \| undefined` | no       |             |
| placement         | property | `"top" \| "bottom" \| undefined` | no       |             |
| testID            | property | `string \| undefined`            | no       |             |

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
Source: `src/theme/ThemeContext.tsx:82:14`

### Signatures

- `() => { theme: SurfaceTheme; mode: "light" | "dark"; setThemeConfig: (config: Partial<ThemeConfig>) => void; setMode: (mode: "light" | "dark") => void; _hasProvider?: boolean; }`
  - returns: `{ theme: SurfaceTheme; mode: "light" | "dark"; setThemeConfig: (config: Partial<ThemeConfig>) => void; setMode: (mode: "light" | "dark") => void; _hasProvider?: boolean; }`

## useThemeConfig

Kind: `value`
Module: `src/theme/ThemeContext.tsx`
Source: `src/theme/ThemeContext.tsx:86:14`

### Signatures

- `() => (config: Partial<ThemeConfig>) => void`
  - returns: `(config: Partial<ThemeConfig>) => void`

## useThemeMode

Kind: `value`
Module: `src/theme/ThemeContext.tsx`
Source: `src/theme/ThemeContext.tsx:91:14`

### Signatures

- `() => { mode: "light" | "dark"; setMode: (mode: "light" | "dark") => void; }`
  - returns: `{ mode: "light" | "dark"; setMode: (mode: "light" | "dark") => void; }`

## useToast

Kind: `function`
Module: `src/features/toast/adapters/inbound/useToast.ts`
Source: `src/features/toast/adapters/inbound/useToast.ts:7:1`

Returns the toast controller installed by ToastProvider.

### Signatures

- `() => ToastController`
  - returns: `ToastController`

## useTranslationContext

Kind: `function`
Module: `src/context/TranslationContext.tsx`
Source: `src/context/TranslationContext.tsx:48:1`

### Signatures

- `() => TranslationRuntime`
  - returns: `TranslationRuntime`
