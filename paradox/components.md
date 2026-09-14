# Components

## Accordion

Source: `src/features/accordion/adapters/inbound/Accordion.tsx:14:1`

Coordinates controlled or uncontrolled accordion expansion state.

Export paths: `src/index.ts`

| Prop                                   | Type                                                   | Required | Default | Description |
| -------------------------------------- | ------------------------------------------------------ | -------- | ------- | ----------- |
| accessibilityActions                   | `ReadonlyArray<AccessibilityActionInfo> \| undefined`  | no       | —       |             |
| accessibilityElementsHidden            | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityHint                      | `string \| undefined`                                  | no       | —       |             |
| accessibilityIgnoresInvertColors       | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityLabel                     | `string \| undefined`                                  | no       | —       |             |
| accessibilityLabelledBy                | `string \| string[] \| undefined`                      | no       | —       |             |
| accessibilityLanguage                  | `string \| undefined`                                  | no       | —       |             |
| accessibilityLargeContentTitle         | `string \| undefined`                                  | no       | —       |             |
| accessibilityLiveRegion                | `'none' \| 'polite' \| 'assertive' \| undefined`       | no       | —       |             |
| accessibilityRespondsToUserInteraction | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityRole                      | `AccessibilityRole \| undefined`                       | no       | —       |             |
| accessibilityShowsLargeContentViewer   | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityState                     | `AccessibilityState \| undefined`                      | no       | —       |             |
| accessibilityValue                     | `AccessibilityValue \| undefined`                      | no       | —       |             |
| accessibilityViewIsModal               | `boolean \| undefined`                                 | no       | —       |             |
| accessible                             | `boolean \| undefined`                                 | no       | —       |             |
| aria-busy                              | `boolean \| undefined`                                 | no       | —       |             |
| aria-checked                           | `boolean \| 'mixed' \| undefined`                      | no       | —       |             |
| aria-disabled                          | `boolean \| undefined`                                 | no       | —       |             |
| aria-expanded                          | `boolean \| undefined`                                 | no       | —       |             |
| aria-hidden                            | `boolean \| undefined`                                 | no       | —       |             |
| aria-label                             | `string \| undefined`                                  | no       | —       |             |
| aria-labelledby                        | `string \| undefined`                                  | no       | —       |             |
| aria-live                              | `('polite' \| 'assertive' \| 'off') \| undefined`      | no       | —       |             |
| aria-modal                             | `boolean \| undefined`                                 | no       | —       |             |
| aria-selected                          | `boolean \| undefined`                                 | no       | —       |             |
| aria-valuemax                          | `AccessibilityValue['max'] \| undefined`               | no       | —       |             |
| aria-valuemin                          | `AccessibilityValue['min'] \| undefined`               | no       | —       |             |
| aria-valuenow                          | `AccessibilityValue['now'] \| undefined`               | no       | —       |             |
| aria-valuetext                         | `AccessibilityValue['text'] \| undefined`              | no       | —       |             |
| children                               | `React.ReactNode \| undefined`                         | no       | —       |             |
| collapsable                            | `boolean \| undefined`                                 | no       | —       |             |
| collapsableChildren                    | `boolean \| undefined`                                 | no       | —       |             |
| collapsible                            | `never \| undefined`                                   | no       | —       |             |
| defaultValue                           | `readonly string[] \| undefined`                       | no       | —       |             |
| disabled                               | `boolean \| undefined`                                 | no       | —       |             |
| focusable                              | `boolean \| undefined`                                 | no       | —       |             |
| hasTVPreferredFocus                    | `boolean \| undefined`                                 | no       | —       |             |
| hitSlop                                | `null \| Insets \| number \| undefined`                | no       | —       |             |
| id                                     | `string \| undefined`                                  | no       | —       |             |
| importantForAccessibility              | `\| ('auto' \| 'yes' \| 'no' \| 'no-hide-descendants') |

    \| undefined` | no | — |  |

| interactionPolicy | `InteractionPolicy \| undefined` | no | — | |
| isTVSelectable | `boolean \| undefined` | no | — | |
| nativeID | `string \| undefined` | no | — | |
| needsOffscreenAlphaCompositing | `boolean \| undefined` | no | — | |
| onAccessibilityAction | `\| ((event: AccessibilityActionEvent) => void)
    \| undefined` | no | — | |
| onAccessibilityEscape | `(() => void) \| undefined` | no | — | |
| onAccessibilityTap | `(() => void) \| undefined` | no | — | |
| onBlur | `((e: BlurEvent) => void) \| null \| undefined` | no | — | |
| onFocus | `((e: FocusEvent) => void) \| null \| undefined` | no | — | |
| onLayout | `((event: LayoutChangeEvent) => void) \| undefined` | no | — | |
| onMagicTap | `(() => void) \| undefined` | no | — | |
| onMoveShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onMoveShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onPointerCancel | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerCancelCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDown | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDownCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnter | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnterCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeave | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeaveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMove | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMoveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUp | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUpCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onResponderEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderGrant | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderReject | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderRelease | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminate | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminationRequest | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onStartShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onStartShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onTouchCancel | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEndCapture | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onValueChange | `(value: readonly string[]) => void \| undefined` | no | — | |
| pointerEvents | `'box-none' \| 'none' \| 'box-only' \| 'auto' \| undefined` | no | — | |
| removeClippedSubviews | `boolean \| undefined` | no | — | |
| renderToHardwareTextureAndroid | `boolean \| undefined` | no | — | |
| role | `Role \| undefined` | no | — | |
| screenReaderFocusable | `boolean \| undefined` | no | — | |
| shouldRasterizeIOS | `boolean \| undefined` | no | — | |
| style | `StyleProp<ViewStyle> \| undefined` | no | — | |
| tabIndex | `0 \| -1 \| undefined` | no | — | |
| testID | `string \| undefined` | no | — | |
| tvParallaxMagnification | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceX | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceY | `number \| undefined` | no | — | |
| tvParallaxTiltAngle | `number \| undefined` | no | — | |
| type | `'multiple' \| undefined` | no | — | |
| value | `readonly string[] \| undefined` | no | — | |

## AccordionContent

Source: `src/features/accordion/adapters/inbound/AccordionContent.tsx:8:1`

Renders an accordion item's content when expanded or force-mounted.

Export paths: `src/index.ts`

| Prop                                   | Type                                                   | Required | Default | Description |
| -------------------------------------- | ------------------------------------------------------ | -------- | ------- | ----------- |
| accessibilityActions                   | `ReadonlyArray<AccessibilityActionInfo> \| undefined`  | no       | —       |             |
| accessibilityElementsHidden            | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityHint                      | `string \| undefined`                                  | no       | —       |             |
| accessibilityIgnoresInvertColors       | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityLabel                     | `string \| undefined`                                  | no       | —       |             |
| accessibilityLabelledBy                | `string \| string[] \| undefined`                      | no       | —       |             |
| accessibilityLanguage                  | `string \| undefined`                                  | no       | —       |             |
| accessibilityLargeContentTitle         | `string \| undefined`                                  | no       | —       |             |
| accessibilityLiveRegion                | `'none' \| 'polite' \| 'assertive' \| undefined`       | no       | —       |             |
| accessibilityRespondsToUserInteraction | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityRole                      | `AccessibilityRole \| undefined`                       | no       | —       |             |
| accessibilityShowsLargeContentViewer   | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityState                     | `AccessibilityState \| undefined`                      | no       | —       |             |
| accessibilityValue                     | `AccessibilityValue \| undefined`                      | no       | —       |             |
| accessibilityViewIsModal               | `boolean \| undefined`                                 | no       | —       |             |
| accessible                             | `boolean \| undefined`                                 | no       | —       |             |
| aria-busy                              | `boolean \| undefined`                                 | no       | —       |             |
| aria-checked                           | `boolean \| 'mixed' \| undefined`                      | no       | —       |             |
| aria-disabled                          | `boolean \| undefined`                                 | no       | —       |             |
| aria-expanded                          | `boolean \| undefined`                                 | no       | —       |             |
| aria-hidden                            | `boolean \| undefined`                                 | no       | —       |             |
| aria-label                             | `string \| undefined`                                  | no       | —       |             |
| aria-labelledby                        | `string \| undefined`                                  | no       | —       |             |
| aria-live                              | `('polite' \| 'assertive' \| 'off') \| undefined`      | no       | —       |             |
| aria-modal                             | `boolean \| undefined`                                 | no       | —       |             |
| aria-selected                          | `boolean \| undefined`                                 | no       | —       |             |
| aria-valuemax                          | `AccessibilityValue['max'] \| undefined`               | no       | —       |             |
| aria-valuemin                          | `AccessibilityValue['min'] \| undefined`               | no       | —       |             |
| aria-valuenow                          | `AccessibilityValue['now'] \| undefined`               | no       | —       |             |
| aria-valuetext                         | `AccessibilityValue['text'] \| undefined`              | no       | —       |             |
| children                               | `React.ReactNode \| undefined`                         | no       | —       |             |
| collapsable                            | `boolean \| undefined`                                 | no       | —       |             |
| collapsableChildren                    | `boolean \| undefined`                                 | no       | —       |             |
| focusable                              | `boolean \| undefined`                                 | no       | —       |             |
| forceMount                             | `boolean \| undefined`                                 | no       | `false` |             |
| hasTVPreferredFocus                    | `boolean \| undefined`                                 | no       | —       |             |
| hitSlop                                | `null \| Insets \| number \| undefined`                | no       | —       |             |
| id                                     | `string \| undefined`                                  | no       | —       |             |
| importantForAccessibility              | `\| ('auto' \| 'yes' \| 'no' \| 'no-hide-descendants') |

    \| undefined` | no | — |  |

| isTVSelectable | `boolean \| undefined` | no | — | |
| nativeID | `string \| undefined` | no | — | |
| needsOffscreenAlphaCompositing | `boolean \| undefined` | no | — | |
| onAccessibilityAction | `\| ((event: AccessibilityActionEvent) => void)
    \| undefined` | no | — | |
| onAccessibilityEscape | `(() => void) \| undefined` | no | — | |
| onAccessibilityTap | `(() => void) \| undefined` | no | — | |
| onBlur | `((e: BlurEvent) => void) \| null \| undefined` | no | — | |
| onFocus | `((e: FocusEvent) => void) \| null \| undefined` | no | — | |
| onLayout | `((event: LayoutChangeEvent) => void) \| undefined` | no | — | |
| onMagicTap | `(() => void) \| undefined` | no | — | |
| onMoveShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onMoveShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onPointerCancel | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerCancelCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDown | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDownCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnter | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnterCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeave | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeaveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMove | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMoveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUp | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUpCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onResponderEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderGrant | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderReject | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderRelease | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminate | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminationRequest | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onStartShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onStartShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onTouchCancel | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEndCapture | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| pointerEvents | `'box-none' \| 'none' \| 'box-only' \| 'auto' \| undefined` | no | — | |
| removeClippedSubviews | `boolean \| undefined` | no | — | |
| renderToHardwareTextureAndroid | `boolean \| undefined` | no | — | |
| role | `Role \| undefined` | no | — | |
| screenReaderFocusable | `boolean \| undefined` | no | — | |
| shouldRasterizeIOS | `boolean \| undefined` | no | — | |
| style | `StyleProp<ViewStyle> \| undefined` | no | — | |
| tabIndex | `0 \| -1 \| undefined` | no | — | |
| testID | `string \| undefined` | no | — | |
| tvParallaxMagnification | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceX | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceY | `number \| undefined` | no | — | |
| tvParallaxTiltAngle | `number \| undefined` | no | — | |

## AccordionItem

Source: `src/features/accordion/adapters/inbound/AccordionItem.tsx:9:1`

Provides one accordion item's value, state, and trigger/content identifiers.

Export paths: `src/index.ts`

| Prop                                   | Type                                                   | Required | Default | Description |
| -------------------------------------- | ------------------------------------------------------ | -------- | ------- | ----------- |
| accessibilityActions                   | `ReadonlyArray<AccessibilityActionInfo> \| undefined`  | no       | —       |             |
| accessibilityElementsHidden            | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityHint                      | `string \| undefined`                                  | no       | —       |             |
| accessibilityIgnoresInvertColors       | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityLabel                     | `string \| undefined`                                  | no       | —       |             |
| accessibilityLabelledBy                | `string \| string[] \| undefined`                      | no       | —       |             |
| accessibilityLanguage                  | `string \| undefined`                                  | no       | —       |             |
| accessibilityLargeContentTitle         | `string \| undefined`                                  | no       | —       |             |
| accessibilityLiveRegion                | `'none' \| 'polite' \| 'assertive' \| undefined`       | no       | —       |             |
| accessibilityRespondsToUserInteraction | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityRole                      | `AccessibilityRole \| undefined`                       | no       | —       |             |
| accessibilityShowsLargeContentViewer   | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityState                     | `AccessibilityState \| undefined`                      | no       | —       |             |
| accessibilityValue                     | `AccessibilityValue \| undefined`                      | no       | —       |             |
| accessibilityViewIsModal               | `boolean \| undefined`                                 | no       | —       |             |
| accessible                             | `boolean \| undefined`                                 | no       | —       |             |
| aria-busy                              | `boolean \| undefined`                                 | no       | —       |             |
| aria-checked                           | `boolean \| 'mixed' \| undefined`                      | no       | —       |             |
| aria-disabled                          | `boolean \| undefined`                                 | no       | —       |             |
| aria-expanded                          | `boolean \| undefined`                                 | no       | —       |             |
| aria-hidden                            | `boolean \| undefined`                                 | no       | —       |             |
| aria-label                             | `string \| undefined`                                  | no       | —       |             |
| aria-labelledby                        | `string \| undefined`                                  | no       | —       |             |
| aria-live                              | `('polite' \| 'assertive' \| 'off') \| undefined`      | no       | —       |             |
| aria-modal                             | `boolean \| undefined`                                 | no       | —       |             |
| aria-selected                          | `boolean \| undefined`                                 | no       | —       |             |
| aria-valuemax                          | `AccessibilityValue['max'] \| undefined`               | no       | —       |             |
| aria-valuemin                          | `AccessibilityValue['min'] \| undefined`               | no       | —       |             |
| aria-valuenow                          | `AccessibilityValue['now'] \| undefined`               | no       | —       |             |
| aria-valuetext                         | `AccessibilityValue['text'] \| undefined`              | no       | —       |             |
| children                               | `React.ReactNode \| undefined`                         | no       | —       |             |
| collapsable                            | `boolean \| undefined`                                 | no       | —       |             |
| collapsableChildren                    | `boolean \| undefined`                                 | no       | —       |             |
| disabled                               | `boolean \| undefined`                                 | no       | `false` |             |
| focusable                              | `boolean \| undefined`                                 | no       | —       |             |
| hasTVPreferredFocus                    | `boolean \| undefined`                                 | no       | —       |             |
| hitSlop                                | `null \| Insets \| number \| undefined`                | no       | —       |             |
| id                                     | `string \| undefined`                                  | no       | —       |             |
| importantForAccessibility              | `\| ('auto' \| 'yes' \| 'no' \| 'no-hide-descendants') |

    \| undefined` | no | — |  |

| interactionPolicy | `InteractionPolicy \| undefined` | no | — | |
| isTVSelectable | `boolean \| undefined` | no | — | |
| nativeID | `string \| undefined` | no | — | |
| needsOffscreenAlphaCompositing | `boolean \| undefined` | no | — | |
| onAccessibilityAction | `\| ((event: AccessibilityActionEvent) => void)
    \| undefined` | no | — | |
| onAccessibilityEscape | `(() => void) \| undefined` | no | — | |
| onAccessibilityTap | `(() => void) \| undefined` | no | — | |
| onBlur | `((e: BlurEvent) => void) \| null \| undefined` | no | — | |
| onFocus | `((e: FocusEvent) => void) \| null \| undefined` | no | — | |
| onLayout | `((event: LayoutChangeEvent) => void) \| undefined` | no | — | |
| onMagicTap | `(() => void) \| undefined` | no | — | |
| onMoveShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onMoveShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onPointerCancel | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerCancelCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDown | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDownCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnter | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnterCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeave | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeaveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMove | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMoveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUp | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUpCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onResponderEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderGrant | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderReject | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderRelease | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminate | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminationRequest | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onStartShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onStartShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onTouchCancel | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEndCapture | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| pointerEvents | `'box-none' \| 'none' \| 'box-only' \| 'auto' \| undefined` | no | — | |
| removeClippedSubviews | `boolean \| undefined` | no | — | |
| renderToHardwareTextureAndroid | `boolean \| undefined` | no | — | |
| role | `Role \| undefined` | no | — | |
| screenReaderFocusable | `boolean \| undefined` | no | — | |
| shouldRasterizeIOS | `boolean \| undefined` | no | — | |
| style | `StyleProp<ViewStyle> \| undefined` | no | — | |
| tabIndex | `0 \| -1 \| undefined` | no | — | |
| testID | `string \| undefined` | no | — | |
| tvParallaxMagnification | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceX | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceY | `number \| undefined` | no | — | |
| tvParallaxTiltAngle | `number \| undefined` | no | — | |
| value | `string` | yes | — | |

## AccordionTrigger

Source: `src/features/accordion/adapters/inbound/AccordionTrigger.tsx:8:1`

Renders the accessible button that toggles its owning accordion item.

Export paths: `src/index.ts`

| Prop                                   | Type                                                   | Required | Default | Description |
| -------------------------------------- | ------------------------------------------------------ | -------- | ------- | ----------- |
| accessibilityActions                   | `ReadonlyArray<AccessibilityActionInfo> \| undefined`  | no       | —       |             |
| accessibilityElementsHidden            | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityHint                      | `string \| undefined`                                  | no       | —       |             |
| accessibilityIgnoresInvertColors       | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityLabel                     | `string \| undefined`                                  | no       | —       |             |
| accessibilityLabelledBy                | `string \| string[] \| undefined`                      | no       | —       |             |
| accessibilityLanguage                  | `string \| undefined`                                  | no       | —       |             |
| accessibilityLargeContentTitle         | `string \| undefined`                                  | no       | —       |             |
| accessibilityLiveRegion                | `'none' \| 'polite' \| 'assertive' \| undefined`       | no       | —       |             |
| accessibilityRespondsToUserInteraction | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityShowsLargeContentViewer   | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityValue                     | `AccessibilityValue \| undefined`                      | no       | —       |             |
| accessibilityViewIsModal               | `boolean \| undefined`                                 | no       | —       |             |
| accessible                             | `boolean \| undefined`                                 | no       | —       |             |
| android_disableSound                   | `null \| boolean \| undefined`                         | no       | —       |             |
| android_ripple                         | `null \| PressableAndroidRippleConfig \| undefined`    | no       | —       |             |
| aria-busy                              | `boolean \| undefined`                                 | no       | —       |             |
| aria-checked                           | `boolean \| 'mixed' \| undefined`                      | no       | —       |             |
| aria-disabled                          | `boolean \| undefined`                                 | no       | —       |             |
| aria-expanded                          | `boolean \| undefined`                                 | no       | —       |             |
| aria-hidden                            | `boolean \| undefined`                                 | no       | —       |             |
| aria-label                             | `string \| undefined`                                  | no       | —       |             |
| aria-labelledby                        | `string \| undefined`                                  | no       | —       |             |
| aria-live                              | `('polite' \| 'assertive' \| 'off') \| undefined`      | no       | —       |             |
| aria-modal                             | `boolean \| undefined`                                 | no       | —       |             |
| aria-selected                          | `boolean \| undefined`                                 | no       | —       |             |
| aria-valuemax                          | `AccessibilityValue['max'] \| undefined`               | no       | —       |             |
| aria-valuemin                          | `AccessibilityValue['min'] \| undefined`               | no       | —       |             |
| aria-valuenow                          | `AccessibilityValue['now'] \| undefined`               | no       | —       |             |
| aria-valuetext                         | `AccessibilityValue['text'] \| undefined`              | no       | —       |             |
| cancelable                             | `null \| boolean \| undefined`                         | no       | —       |             |
| children                               | `PressableProps['children'] \| undefined`              | no       | —       |             |
| collapsable                            | `boolean \| undefined`                                 | no       | —       |             |
| collapsableChildren                    | `boolean \| undefined`                                 | no       | —       |             |
| delayHoverIn                           | `number \| null \| undefined`                          | no       | —       |             |
| delayHoverOut                          | `number \| null \| undefined`                          | no       | —       |             |
| delayLongPress                         | `null \| number \| undefined`                          | no       | —       |             |
| disabled                               | `boolean \| undefined`                                 | no       | `false` |             |
| focusable                              | `boolean \| undefined`                                 | no       | —       |             |
| hasTVPreferredFocus                    | `boolean \| undefined`                                 | no       | —       |             |
| hitSlop                                | `null \| Insets \| number \| undefined`                | no       | —       |             |
| id                                     | `string \| undefined`                                  | no       | —       |             |
| importantForAccessibility              | `\| ('auto' \| 'yes' \| 'no' \| 'no-hide-descendants') |

    \| undefined` | no | — |  |

| interactionPolicy | `InteractionPolicy \| undefined` | no | — | |
| isTVSelectable | `boolean \| undefined` | no | — | |
| nativeID | `string \| undefined` | no | — | |
| needsOffscreenAlphaCompositing | `boolean \| undefined` | no | — | |
| onAccessibilityAction | `\| ((event: AccessibilityActionEvent) => void)
    \| undefined` | no | — | |
| onAccessibilityEscape | `(() => void) \| undefined` | no | — | |
| onAccessibilityTap | `(() => void) \| undefined` | no | — | |
| onBlur | `\| null
    \| ((event: NativeSyntheticEvent<TargetedEvent>) => void)
    \| undefined` | no | — | |
| onFocus | `\| null
    \| ((event: NativeSyntheticEvent<TargetedEvent>) => void)
    \| undefined` | no | — | |
| onHoverIn | `null \| ((event: MouseEvent) => void) \| undefined` | no | — | |
| onHoverOut | `null \| ((event: MouseEvent) => void) \| undefined` | no | — | |
| onLayout | `((event: LayoutChangeEvent) => void) \| undefined` | no | — | |
| onLongPress | `null \| ((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onMagicTap | `(() => void) \| undefined` | no | — | |
| onMoveShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onMoveShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onPointerCancel | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerCancelCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDown | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDownCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnter | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnterCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeave | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeaveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMove | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMoveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUp | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUpCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPressIn | `null \| ((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onPressMove | `null \| ((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onPressOut | `null \| ((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderGrant | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderReject | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderRelease | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminate | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminationRequest | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onStartShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onStartShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onTouchCancel | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEndCapture | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| pointerEvents | `'box-none' \| 'none' \| 'box-only' \| 'auto' \| undefined` | no | — | |
| pressRetentionOffset | `null \| Insets \| number \| undefined` | no | — | |
| removeClippedSubviews | `boolean \| undefined` | no | — | |
| renderToHardwareTextureAndroid | `boolean \| undefined` | no | — | |
| role | `Role \| undefined` | no | — | |
| screenReaderFocusable | `boolean \| undefined` | no | — | |
| shouldRasterizeIOS | `boolean \| undefined` | no | — | |
| style | `\| StyleProp<ViewStyle>
    \| ((state: PressableStateCallbackType) => StyleProp<ViewStyle>)
    \| undefined` | no | — | |
| tabIndex | `0 \| -1 \| undefined` | no | — | |
| testID | `string \| undefined` | no | — | |
| testOnly_pressed | `null \| boolean \| undefined` | no | — | |
| tvParallaxMagnification | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceX | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceY | `number \| undefined` | no | — | |
| tvParallaxTiltAngle | `number \| undefined` | no | — | |
| unstable_pressDelay | `number \| undefined` | no | — | |

## AppBar

Source: `src/layout/AppBar.tsx:17:1`

Export paths: `src/index.ts`

| Prop               | Type                                                      | Required | Default | Description |
| ------------------ | --------------------------------------------------------- | -------- | ------- | ----------- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined` | no       | —       |             |
| accessibilityRole  | `ReactNativeViewProps['accessibilityRole'] \| undefined`  | no       | —       |             |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined` | no       | —       |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`         | no       | —       |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`         | no       | —       |             |
| bg                 | `Responsive<ColorValue> \| undefined`                     | no       | —       |             |
| borderColor        | `Responsive<ColorValue> \| undefined`                     | no       | —       |             |
| borderWidth        | `Responsive<number> \| undefined`                         | no       | —       |             |
| bottom             | `Responsive<number> \| undefined`                         | no       | —       |             |
| children           | `React.ReactNode \| undefined`                            | no       | —       |             |
| contentStyle       | `StyleProp<ViewStyle> \| undefined`                       | no       | —       |             |
| divider            | `boolean \| undefined`                                    | no       | `false` |             |
| flex               | `Responsive<number> \| undefined`                         | no       | —       |             |
| flexBasis          | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| flexGrow           | `Responsive<number> \| undefined`                         | no       | —       |             |
| flexShrink         | `Responsive<number> \| undefined`                         | no       | —       |             |
| height             | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| leading            | `React.ReactNode \| undefined`                            | no       | —       |             |
| left               | `Responsive<number> \| undefined`                         | no       | —       |             |
| m                  | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| maxHeight          | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| maxWidth           | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| mb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| minHeight          | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| minWidth           | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| ml                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| mr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| mt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| mx                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| my                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| opacity            | `Responsive<number> \| undefined`                         | no       | —       |             |
| overflow           | `Responsive<ViewStyle['overflow']> \| undefined`          | no       | —       |             |
| p                  | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pl                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pointerEvents      | `ReactNativeViewProps['pointerEvents'] \| undefined`      | no       | —       |             |
| position           | `Responsive<ViewStyle['position']> \| undefined`          | no       | —       |             |
| pr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| px                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| py                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| radius             | `Responsive<RadiusValue> \| undefined`                    | no       | —       |             |
| right              | `Responsive<number> \| undefined`                         | no       | —       |             |
| safeAreaTop        | `boolean \| undefined`                                    | no       | `true`  |             |
| style              | `StyleProp<ViewStyle> \| undefined`                       | no       | —       |             |
| testID             | `string \| undefined`                                     | no       | —       |             |
| top                | `Responsive<number> \| undefined`                         | no       | —       |             |
| trailing           | `React.ReactNode \| undefined`                            | no       | —       |             |
| width              | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| zIndex             | `Responsive<number> \| undefined`                         | no       | —       |             |

## Badge

Source: `src/features/badge/adapters/inbound/Badge.tsx:11:1`

Renders compact semantic status or metadata content.

Export paths: `src/index.ts`

| Prop    | Type                                                                  | Required | Default     | Description |
| ------- | --------------------------------------------------------------------- | -------- | ----------- | ----------- |
| color   | `SurfaceColor \| undefined`                                           | no       | `'primary'` |             |
| content | `React.ReactNode \| undefined`                                        | no       | —           |             |
| size    | `ControlSize \| undefined`                                            | no       | `'s'`       |             |
| testID  | `string \| undefined`                                                 | no       | —           |             |
| variant | `Extract<ButtonVariant, 'solid' \| 'soft' \| 'outline'> \| undefined` | no       | `'soft'`    |             |

## Box

Source: `src/features/layout/adapters/inbound/Box.tsx:11:1`

Renders the responsive foundational layout box.

Export paths: `src/index.ts`

| Prop               | Type                                                      | Required | Default | Description |
| ------------------ | --------------------------------------------------------- | -------- | ------- | ----------- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined` | no       | —       |             |
| accessibilityRole  | `ReactNativeViewProps['accessibilityRole'] \| undefined`  | no       | —       |             |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined` | no       | —       |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`         | no       | —       |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`         | no       | —       |             |
| bg                 | `Responsive<ColorValue> \| undefined`                     | no       | —       |             |
| borderColor        | `Responsive<ColorValue> \| undefined`                     | no       | —       |             |
| borderWidth        | `Responsive<number> \| undefined`                         | no       | —       |             |
| bottom             | `Responsive<number> \| undefined`                         | no       | —       |             |
| children           | `React.ReactNode \| undefined`                            | no       | —       |             |
| flex               | `Responsive<number> \| undefined`                         | no       | —       |             |
| flexBasis          | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| flexGrow           | `Responsive<number> \| undefined`                         | no       | —       |             |
| flexShrink         | `Responsive<number> \| undefined`                         | no       | —       |             |
| height             | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| left               | `Responsive<number> \| undefined`                         | no       | —       |             |
| m                  | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| maxHeight          | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| maxWidth           | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| mb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| minHeight          | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| minWidth           | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| ml                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| mr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| mt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| mx                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| my                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| opacity            | `Responsive<number> \| undefined`                         | no       | —       |             |
| overflow           | `Responsive<ViewStyle['overflow']> \| undefined`          | no       | —       |             |
| p                  | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pl                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pointerEvents      | `ReactNativeViewProps['pointerEvents'] \| undefined`      | no       | —       |             |
| position           | `Responsive<ViewStyle['position']> \| undefined`          | no       | —       |             |
| pr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| px                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| py                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| radius             | `Responsive<RadiusValue> \| undefined`                    | no       | —       |             |
| right              | `Responsive<number> \| undefined`                         | no       | —       |             |
| style              | `StyleProp<ViewStyle> \| undefined`                       | no       | —       |             |
| testID             | `string \| undefined`                                     | no       | —       |             |
| top                | `Responsive<number> \| undefined`                         | no       | —       |             |
| width              | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| zIndex             | `Responsive<number> \| undefined`                         | no       | —       |             |

## Button

Source: `src/features/button/adapters/inbound/Button.tsx:19:1`

Renders the primary Surface action control with semantic visual states.

Export paths: `src/index.ts`

| Prop               | Type                                                    | Required | Default     | Description |
| ------------------ | ------------------------------------------------------- | -------- | ----------- | ----------- |
| accessibilityRole  | `AccessibilityRole \| undefined`                        | no       | —           |             |
| accessibilityState | `AccessibilityState \| undefined`                       | no       | —           |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`       | no       | —           |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`       | no       | —           |             |
| bg                 | `Responsive<ColorValue> \| undefined`                   | no       | —           |             |
| borderColor        | `Responsive<ColorValue> \| undefined`                   | no       | —           |             |
| borderWidth        | `Responsive<number> \| undefined`                       | no       | —           |             |
| bottom             | `Responsive<number> \| undefined`                       | no       | —           |             |
| children           | `React.ReactNode \| undefined`                          | no       | —           |             |
| color              | `SurfaceColor \| undefined`                             | no       | `'primary'` |             |
| disabled           | `boolean \| undefined`                                  | no       | `false`     |             |
| flex               | `Responsive<number> \| undefined`                       | no       | —           |             |
| flexBasis          | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| flexGrow           | `Responsive<number> \| undefined`                       | no       | —           |             |
| flexShrink         | `Responsive<number> \| undefined`                       | no       | —           |             |
| fullWidth          | `boolean \| undefined`                                  | no       | `false`     |             |
| height             | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| interactionPolicy  | `InteractionPolicy \| undefined`                        | no       | —           |             |
| leadingIcon        | `ButtonIconSpec \| undefined`                           | no       | —           |             |
| left               | `Responsive<number> \| undefined`                       | no       | —           |             |
| loading            | `boolean \| undefined`                                  | no       | `false`     |             |
| m                  | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| maxHeight          | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| maxWidth           | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| mb                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| minHeight          | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| minWidth           | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| ml                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| mr                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| mt                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| mx                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| my                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| onLongPress        | `((event: GestureResponderEvent) => void) \| undefined` | no       | —           |             |
| onPress            | `((event: GestureResponderEvent) => void) \| undefined` | no       | —           |             |
| opacity            | `Responsive<number> \| undefined`                       | no       | —           |             |
| overflow           | `Responsive<ViewStyle['overflow']> \| undefined`        | no       | —           |             |
| p                  | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| pb                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| pl                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| position           | `Responsive<ViewStyle['position']> \| undefined`        | no       | —           |             |
| pr                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| pt                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| px                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| py                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| radius             | `Responsive<RadiusValue> \| undefined`                  | no       | —           |             |
| right              | `Responsive<number> \| undefined`                       | no       | —           |             |
| size               | `ControlSize \| undefined`                              | no       | `'m'`       |             |
| testID             | `string \| undefined`                                   | no       | —           |             |
| top                | `Responsive<number> \| undefined`                       | no       | —           |             |
| trailingIcon       | `ButtonIconSpec \| undefined`                           | no       | —           |             |
| variant            | `ButtonVariant \| undefined`                            | no       | `'solid'`   |             |
| width              | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| zIndex             | `Responsive<number> \| undefined`                       | no       | —           |             |

## ButtonBase

Source: `src/primitives/button-base/ButtonBase.tsx:28:1`

Export paths: `src/index.ts`

| Prop               | Type                                                                             | Required | Default     | Description |
| ------------------ | -------------------------------------------------------------------------------- | -------- | ----------- | ----------- |
| accessibilityLabel | `string \| undefined`                                                            | no       | —           |             |
| accessibilityRole  | `AccessibilityRole \| undefined`                                                 | no       | `'button'`  |             |
| accessibilityState | `AccessibilityState \| undefined`                                                | no       | —           |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`                                | no       | —           |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`                                | no       | —           |             |
| bg                 | `Responsive<ColorValue> \| undefined`                                            | no       | —           |             |
| borderColor        | `Responsive<ColorValue> \| undefined`                                            | no       | —           |             |
| borderWidth        | `Responsive<number> \| undefined`                                                | no       | —           |             |
| bottom             | `Responsive<number> \| undefined`                                                | no       | —           |             |
| children           | `React.ReactNode \| ((state: InteractionState) => React.ReactNode) \| undefined` | no       | —           |             |
| disabled           | `boolean \| undefined`                                                           | no       | `false`     |             |
| flex               | `Responsive<number> \| undefined`                                                | no       | —           |             |
| flexBasis          | `Responsive<number \| string> \| undefined`                                      | no       | —           |             |
| flexGrow           | `Responsive<number> \| undefined`                                                | no       | —           |             |
| flexShrink         | `Responsive<number> \| undefined`                                                | no       | —           |             |
| height             | `Responsive<number \| string> \| undefined`                                      | no       | —           |             |
| interactionPolicy  | `InteractionPolicy \| undefined`                                                 | no       | `'enabled'` |             |
| left               | `Responsive<number> \| undefined`                                                | no       | —           |             |
| m                  | `Responsive<SpaceValue> \| undefined`                                            | no       | —           |             |
| maxHeight          | `Responsive<number \| string> \| undefined`                                      | no       | —           |             |
| maxWidth           | `Responsive<number \| string> \| undefined`                                      | no       | —           |             |
| mb                 | `Responsive<SpaceValue> \| undefined`                                            | no       | —           |             |
| minHeight          | `Responsive<number \| string> \| undefined`                                      | no       | —           |             |
| minWidth           | `Responsive<number \| string> \| undefined`                                      | no       | —           |             |
| ml                 | `Responsive<SpaceValue> \| undefined`                                            | no       | —           |             |
| mr                 | `Responsive<SpaceValue> \| undefined`                                            | no       | —           |             |
| mt                 | `Responsive<SpaceValue> \| undefined`                                            | no       | —           |             |
| mx                 | `Responsive<SpaceValue> \| undefined`                                            | no       | —           |             |
| my                 | `Responsive<SpaceValue> \| undefined`                                            | no       | —           |             |
| onLongPress        | `((event: GestureResponderEvent) => void) \| undefined`                          | no       | —           |             |
| onPress            | `((event: GestureResponderEvent) => void) \| undefined`                          | no       | —           |             |
| opacity            | `Responsive<number> \| undefined`                                                | no       | —           |             |
| overflow           | `Responsive<ViewStyle['overflow']> \| undefined`                                 | no       | —           |             |
| p                  | `Responsive<SpaceValue> \| undefined`                                            | no       | —           |             |
| pb                 | `Responsive<SpaceValue> \| undefined`                                            | no       | —           |             |
| pl                 | `Responsive<SpaceValue> \| undefined`                                            | no       | —           |             |
| position           | `Responsive<ViewStyle['position']> \| undefined`                                 | no       | —           |             |
| pr                 | `Responsive<SpaceValue> \| undefined`                                            | no       | —           |             |
| pt                 | `Responsive<SpaceValue> \| undefined`                                            | no       | —           |             |
| px                 | `Responsive<SpaceValue> \| undefined`                                            | no       | —           |             |
| py                 | `Responsive<SpaceValue> \| undefined`                                            | no       | —           |             |
| radius             | `Responsive<RadiusValue> \| undefined`                                           | no       | —           |             |
| right              | `Responsive<number> \| undefined`                                                | no       | —           |             |
| style              | `StyleProp<ViewStyle> \| undefined`                                              | no       | —           |             |
| testID             | `string \| undefined`                                                            | no       | —           |             |
| top                | `Responsive<number> \| undefined`                                                | no       | —           |             |
| width              | `Responsive<number \| string> \| undefined`                                      | no       | —           |             |
| zIndex             | `Responsive<number> \| undefined`                                                | no       | —           |             |

## Card

Source: `src/features/card/adapters/inbound/Card.tsx:11:1`

Renders a themed content card with optional interactive press states.

Export paths: `src/index.ts`

| Prop               | Type                                                      | Required | Default     | Description |
| ------------------ | --------------------------------------------------------- | -------- | ----------- | ----------- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined` | no       | —           |             |
| accessibilityRole  | `ReactNativeViewProps['accessibilityRole'] \| undefined`  | no       | —           |             |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined` | no       | —           |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`         | no       | —           |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`         | no       | —           |             |
| bottom             | `Responsive<number> \| undefined`                         | no       | —           |             |
| children           | `React.ReactNode \| undefined`                            | no       | —           |             |
| disabled           | `boolean \| undefined`                                    | no       | `false`     |             |
| flex               | `Responsive<number> \| undefined`                         | no       | —           |             |
| flexBasis          | `Responsive<number \| string> \| undefined`               | no       | —           |             |
| flexGrow           | `Responsive<number> \| undefined`                         | no       | —           |             |
| flexShrink         | `Responsive<number> \| undefined`                         | no       | —           |             |
| height             | `Responsive<number \| string> \| undefined`               | no       | —           |             |
| left               | `Responsive<number> \| undefined`                         | no       | —           |             |
| m                  | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| maxHeight          | `Responsive<number \| string> \| undefined`               | no       | —           |             |
| maxWidth           | `Responsive<number \| string> \| undefined`               | no       | —           |             |
| mb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| minHeight          | `Responsive<number \| string> \| undefined`               | no       | —           |             |
| minWidth           | `Responsive<number \| string> \| undefined`               | no       | —           |             |
| ml                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| mr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| mt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| mx                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| my                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| onPress            | `(() => void) \| undefined`                               | no       | —           |             |
| opacity            | `Responsive<number> \| undefined`                         | no       | —           |             |
| overflow           | `Responsive<ViewStyle['overflow']> \| undefined`          | no       | —           |             |
| p                  | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| pb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| pl                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| pointerEvents      | `ReactNativeViewProps['pointerEvents'] \| undefined`      | no       | —           |             |
| position           | `Responsive<ViewStyle['position']> \| undefined`          | no       | —           |             |
| pr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| pt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| px                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| py                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| radius             | `Responsive<RadiusValue> \| undefined`                    | no       | —           |             |
| right              | `Responsive<number> \| undefined`                         | no       | —           |             |
| style              | `StyleProp<ViewStyle> \| undefined`                       | no       | —           |             |
| testID             | `string \| undefined`                                     | no       | —           |             |
| top                | `Responsive<number> \| undefined`                         | no       | —           |             |
| variant            | `SurfaceVariant \| undefined`                             | no       | `'default'` |             |
| width              | `Responsive<number \| string> \| undefined`               | no       | —           |             |
| zIndex             | `Responsive<number> \| undefined`                         | no       | —           |             |

## Center

Source: `src/layout/Center.tsx:9:1`

Export paths: `src/index.ts`

| Prop               | Type                                                      | Required | Default  | Description |
| ------------------ | --------------------------------------------------------- | -------- | -------- | ----------- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined` | no       | —        |             |
| accessibilityRole  | `ReactNativeViewProps['accessibilityRole'] \| undefined`  | no       | —        |             |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined` | no       | —        |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`         | no       | —        |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`         | no       | —        |             |
| axis               | `'horizontal' \| 'vertical' \| 'both' \| undefined`       | no       | `'both'` |             |
| bg                 | `Responsive<ColorValue> \| undefined`                     | no       | —        |             |
| borderColor        | `Responsive<ColorValue> \| undefined`                     | no       | —        |             |
| borderWidth        | `Responsive<number> \| undefined`                         | no       | —        |             |
| bottom             | `Responsive<number> \| undefined`                         | no       | —        |             |
| children           | `React.ReactNode \| undefined`                            | no       | —        |             |
| flex               | `Responsive<number> \| undefined`                         | no       | —        |             |
| flexBasis          | `Responsive<number \| string> \| undefined`               | no       | —        |             |
| flexGrow           | `Responsive<number> \| undefined`                         | no       | —        |             |
| flexShrink         | `Responsive<number> \| undefined`                         | no       | —        |             |
| height             | `Responsive<number \| string> \| undefined`               | no       | —        |             |
| left               | `Responsive<number> \| undefined`                         | no       | —        |             |
| m                  | `Responsive<SpaceValue> \| undefined`                     | no       | —        |             |
| maxHeight          | `Responsive<number \| string> \| undefined`               | no       | —        |             |
| maxWidth           | `Responsive<number \| string> \| undefined`               | no       | —        |             |
| mb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —        |             |
| minHeight          | `Responsive<number \| string> \| undefined`               | no       | —        |             |
| minWidth           | `Responsive<number \| string> \| undefined`               | no       | —        |             |
| ml                 | `Responsive<SpaceValue> \| undefined`                     | no       | —        |             |
| mr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —        |             |
| mt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —        |             |
| mx                 | `Responsive<SpaceValue> \| undefined`                     | no       | —        |             |
| my                 | `Responsive<SpaceValue> \| undefined`                     | no       | —        |             |
| opacity            | `Responsive<number> \| undefined`                         | no       | —        |             |
| overflow           | `Responsive<ViewStyle['overflow']> \| undefined`          | no       | —        |             |
| p                  | `Responsive<SpaceValue> \| undefined`                     | no       | —        |             |
| pb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —        |             |
| pl                 | `Responsive<SpaceValue> \| undefined`                     | no       | —        |             |
| pointerEvents      | `ReactNativeViewProps['pointerEvents'] \| undefined`      | no       | —        |             |
| position           | `Responsive<ViewStyle['position']> \| undefined`          | no       | —        |             |
| pr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —        |             |
| pt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —        |             |
| px                 | `Responsive<SpaceValue> \| undefined`                     | no       | —        |             |
| py                 | `Responsive<SpaceValue> \| undefined`                     | no       | —        |             |
| radius             | `Responsive<RadiusValue> \| undefined`                    | no       | —        |             |
| right              | `Responsive<number> \| undefined`                         | no       | —        |             |
| style              | `StyleProp<ViewStyle> \| undefined`                       | no       | —        |             |
| testID             | `string \| undefined`                                     | no       | —        |             |
| top                | `Responsive<number> \| undefined`                         | no       | —        |             |
| width              | `Responsive<number \| string> \| undefined`               | no       | —        |             |
| zIndex             | `Responsive<number> \| undefined`                         | no       | —        |             |

## Checkbox

Source: `src/features/form/checkbox/adapters/inbound/Checkbox.tsx:21:1`

Renders a controlled or uncontrolled accessible checkbox.

Export paths: `src/index.ts`

| Prop               | Type                                                    | Required | Default     | Description |
| ------------------ | ------------------------------------------------------- | -------- | ----------- | ----------- |
| accessibilityLabel | `string \| undefined`                                   | no       | —           |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`       | no       | —           |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`       | no       | —           |             |
| bg                 | `Responsive<ColorValue> \| undefined`                   | no       | —           |             |
| borderColor        | `Responsive<ColorValue> \| undefined`                   | no       | —           |             |
| borderWidth        | `Responsive<number> \| undefined`                       | no       | —           |             |
| bottom             | `Responsive<number> \| undefined`                       | no       | —           |             |
| checked            | `boolean \| undefined`                                  | no       | —           |             |
| children           | `React.ReactNode \| undefined`                          | no       | —           |             |
| color              | `SurfaceColor \| undefined`                             | no       | `'primary'` |             |
| defaultChecked     | `boolean \| undefined`                                  | no       | `false`     |             |
| disabled           | `boolean \| undefined`                                  | no       | `false`     |             |
| flex               | `Responsive<number> \| undefined`                       | no       | —           |             |
| flexBasis          | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| flexGrow           | `Responsive<number> \| undefined`                       | no       | —           |             |
| flexShrink         | `Responsive<number> \| undefined`                       | no       | —           |             |
| height             | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| interactionPolicy  | `InteractionPolicy \| undefined`                        | no       | —           |             |
| invalid            | `boolean \| undefined`                                  | no       | `false`     |             |
| left               | `Responsive<number> \| undefined`                       | no       | —           |             |
| m                  | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| maxHeight          | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| maxWidth           | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| mb                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| minHeight          | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| minWidth           | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| ml                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| mr                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| mt                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| mx                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| my                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| onCheckedChange    | `((checked: boolean) => void) \| undefined`             | no       | —           |             |
| onLongPress        | `((event: GestureResponderEvent) => void) \| undefined` | no       | —           |             |
| opacity            | `Responsive<number> \| undefined`                       | no       | —           |             |
| overflow           | `Responsive<ViewStyle['overflow']> \| undefined`        | no       | —           |             |
| p                  | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| pb                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| pl                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| position           | `Responsive<ViewStyle['position']> \| undefined`        | no       | —           |             |
| pr                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| pt                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| px                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| py                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| radius             | `Responsive<RadiusValue> \| undefined`                  | no       | —           |             |
| readOnly           | `boolean \| undefined`                                  | no       | `false`     |             |
| right              | `Responsive<number> \| undefined`                       | no       | —           |             |
| size               | `ControlSize \| undefined`                              | no       | `'m'`       |             |
| testID             | `string \| undefined`                                   | no       | —           |             |
| top                | `Responsive<number> \| undefined`                       | no       | —           |             |
| width              | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| zIndex             | `Responsive<number> \| undefined`                       | no       | —           |             |

## Container

Source: `src/features/layout/adapters/inbound/Container.tsx:11:1`

Centers responsive content inside a configurable maximum width.

Export paths: `src/index.ts`

| Prop               | Type                                                               | Required | Default                                       | Description |
| ------------------ | ------------------------------------------------------------------ | -------- | --------------------------------------------- | ----------- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined`          | no       | —                                             |             |
| accessibilityRole  | `ReactNativeViewProps['accessibilityRole'] \| undefined`           | no       | —                                             |             |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined`          | no       | —                                             |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`                  | no       | —                                             |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`                  | no       | —                                             |             |
| bg                 | `Responsive<ColorValue> \| undefined`                              | no       | —                                             |             |
| borderColor        | `Responsive<ColorValue> \| undefined`                              | no       | —                                             |             |
| borderWidth        | `Responsive<number> \| undefined`                                  | no       | —                                             |             |
| bottom             | `Responsive<number> \| undefined`                                  | no       | —                                             |             |
| children           | `React.ReactNode \| undefined`                                     | no       | —                                             |             |
| flex               | `Responsive<number> \| undefined`                                  | no       | —                                             |             |
| flexBasis          | `Responsive<number \| string> \| undefined`                        | no       | —                                             |             |
| flexGrow           | `Responsive<number> \| undefined`                                  | no       | —                                             |             |
| flexShrink         | `Responsive<number> \| undefined`                                  | no       | —                                             |             |
| height             | `Responsive<number \| string> \| undefined`                        | no       | —                                             |             |
| left               | `Responsive<number> \| undefined`                                  | no       | —                                             |             |
| m                  | `Responsive<SpaceValue> \| undefined`                              | no       | —                                             |             |
| maxHeight          | `Responsive<number \| string> \| undefined`                        | no       | —                                             |             |
| maxWidth           | `Responsive<number> \| undefined`                                  | no       | `{ base: Number.MAX_SAFE_INTEGER, lg: 1120 }` |             |
| mb                 | `Responsive<SpaceValue> \| undefined`                              | no       | —                                             |             |
| minHeight          | `Responsive<number \| string> \| undefined`                        | no       | —                                             |             |
| minWidth           | `Responsive<number \| string> \| undefined`                        | no       | —                                             |             |
| ml                 | `Responsive<SpaceValue> \| undefined`                              | no       | —                                             |             |
| mr                 | `Responsive<SpaceValue> \| undefined`                              | no       | —                                             |             |
| mt                 | `Responsive<SpaceValue> \| undefined`                              | no       | —                                             |             |
| mx                 | `Responsive<SpaceValue> \| undefined`                              | no       | —                                             |             |
| my                 | `Responsive<SpaceValue> \| undefined`                              | no       | —                                             |             |
| opacity            | `Responsive<number> \| undefined`                                  | no       | —                                             |             |
| overflow           | `Responsive<ViewStyle['overflow']> \| undefined`                   | no       | —                                             |             |
| p                  | `Responsive<SpaceValue> \| undefined`                              | no       | —                                             |             |
| pb                 | `Responsive<SpaceValue> \| undefined`                              | no       | —                                             |             |
| pl                 | `Responsive<SpaceValue> \| undefined`                              | no       | —                                             |             |
| pointerEvents      | `ReactNativeViewProps['pointerEvents'] \| undefined`               | no       | —                                             |             |
| position           | `Responsive<ViewStyle['position']> \| undefined`                   | no       | —                                             |             |
| pr                 | `Responsive<SpaceValue> \| undefined`                              | no       | —                                             |             |
| pt                 | `Responsive<SpaceValue> \| undefined`                              | no       | —                                             |             |
| px                 | `Responsive<number \| keyof SurfaceTheme['spacing']> \| undefined` | no       | `{ base: 16, md: 24, lg: 32 }`                |             |
| py                 | `Responsive<SpaceValue> \| undefined`                              | no       | —                                             |             |
| radius             | `Responsive<RadiusValue> \| undefined`                             | no       | —                                             |             |
| right              | `Responsive<number> \| undefined`                                  | no       | —                                             |             |
| style              | `StyleProp<ViewStyle> \| undefined`                                | no       | —                                             |             |
| testID             | `string \| undefined`                                              | no       | —                                             |             |
| top                | `Responsive<number> \| undefined`                                  | no       | —                                             |             |
| width              | `Responsive<number \| string> \| undefined`                        | no       | —                                             |             |
| zIndex             | `Responsive<number> \| undefined`                                  | no       | —                                             |             |

## Divider

Source: `src/features/layout/adapters/inbound/Divider.tsx:7:1`

Renders a horizontal or vertical separator using layout tokens.

Export paths: `src/index.ts`

| Prop               | Type                                                      | Required | Default        | Description |
| ------------------ | --------------------------------------------------------- | -------- | -------------- | ----------- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined` | no       | —              |             |
| accessibilityRole  | `ReactNativeViewProps['accessibilityRole'] \| undefined`  | no       | —              |             |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined` | no       | —              |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`         | no       | —              |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`         | no       | —              |             |
| borderColor        | `Responsive<ColorValue> \| undefined`                     | no       | —              |             |
| borderWidth        | `Responsive<number> \| undefined`                         | no       | —              |             |
| bottom             | `Responsive<number> \| undefined`                         | no       | —              |             |
| children           | `React.ReactNode \| undefined`                            | no       | —              |             |
| color              | `ColorValue \| undefined`                                 | no       | `'border'`     |             |
| flex               | `Responsive<number> \| undefined`                         | no       | —              |             |
| flexBasis          | `Responsive<number \| string> \| undefined`               | no       | —              |             |
| flexGrow           | `Responsive<number> \| undefined`                         | no       | —              |             |
| flexShrink         | `Responsive<number> \| undefined`                         | no       | —              |             |
| left               | `Responsive<number> \| undefined`                         | no       | —              |             |
| m                  | `Responsive<SpaceValue> \| undefined`                     | no       | —              |             |
| maxHeight          | `Responsive<number \| string> \| undefined`               | no       | —              |             |
| maxWidth           | `Responsive<number \| string> \| undefined`               | no       | —              |             |
| mb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —              |             |
| minHeight          | `Responsive<number \| string> \| undefined`               | no       | —              |             |
| minWidth           | `Responsive<number \| string> \| undefined`               | no       | —              |             |
| ml                 | `Responsive<SpaceValue> \| undefined`                     | no       | —              |             |
| mr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —              |             |
| mt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —              |             |
| mx                 | `Responsive<SpaceValue> \| undefined`                     | no       | —              |             |
| my                 | `Responsive<SpaceValue> \| undefined`                     | no       | —              |             |
| opacity            | `Responsive<number> \| undefined`                         | no       | —              |             |
| orientation        | `'horizontal' \| 'vertical' \| undefined`                 | no       | `'horizontal'` |             |
| overflow           | `Responsive<ViewStyle['overflow']> \| undefined`          | no       | —              |             |
| p                  | `Responsive<SpaceValue> \| undefined`                     | no       | —              |             |
| pb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —              |             |
| pl                 | `Responsive<SpaceValue> \| undefined`                     | no       | —              |             |
| pointerEvents      | `ReactNativeViewProps['pointerEvents'] \| undefined`      | no       | —              |             |
| position           | `Responsive<ViewStyle['position']> \| undefined`          | no       | —              |             |
| pr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —              |             |
| pt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —              |             |
| px                 | `Responsive<SpaceValue> \| undefined`                     | no       | —              |             |
| py                 | `Responsive<SpaceValue> \| undefined`                     | no       | —              |             |
| radius             | `Responsive<RadiusValue> \| undefined`                    | no       | —              |             |
| right              | `Responsive<number> \| undefined`                         | no       | —              |             |
| style              | `StyleProp<ViewStyle> \| undefined`                       | no       | —              |             |
| testID             | `string \| undefined`                                     | no       | —              |             |
| thickness          | `number \| undefined`                                     | no       | `1`            |             |
| top                | `Responsive<number> \| undefined`                         | no       | —              |             |
| zIndex             | `Responsive<number> \| undefined`                         | no       | —              |             |

## Field

Source: `src/components/field/Field.tsx:9:1`

Export paths: `src/index.ts`

| Prop       | Type                           | Required | Default | Description |
| ---------- | ------------------------------ | -------- | ------- | ----------- |
| children   | `React.ReactNode \| undefined` | no       | —       |             |
| disabled   | `boolean \| undefined`         | no       | `false` |             |
| errorText  | `React.ReactNode \| undefined` | no       | —       |             |
| helperText | `React.ReactNode \| undefined` | no       | —       |             |
| invalid    | `boolean \| undefined`         | no       | `false` |             |
| label      | `React.ReactNode \| undefined` | no       | —       |             |
| readOnly   | `boolean \| undefined`         | no       | `false` |             |
| required   | `boolean \| undefined`         | no       | `false` |             |
| testID     | `string \| undefined`          | no       | —       |             |

## FontProvider

Source: `src/context/FontContext.tsx:27:1`

Export paths: `src/index.ts`

| Prop               | Type                                | Required | Default | Description |
| ------------------ | ----------------------------------- | -------- | ------- | ----------- |
| activeFontId       | `string \| null \| undefined`       | no       | —       |             |
| children           | `React.ReactNode \| undefined`      | no       | —       |             |
| fontsLoaded        | `boolean`                           | yes      | —       |             |
| onActiveFontChange | `(id: string) => void \| undefined` | no       | —       |             |

## Grid

Source: `src/features/layout/adapters/inbound/Grid.tsx:11:1`

Lays out children in a responsive wrapping grid.

Export paths: `src/index.ts`

| Prop               | Type                                                      | Required | Default | Description |
| ------------------ | --------------------------------------------------------- | -------- | ------- | ----------- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined` | no       | —       |             |
| accessibilityRole  | `ReactNativeViewProps['accessibilityRole'] \| undefined`  | no       | —       |             |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined` | no       | —       |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`         | no       | —       |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`         | no       | —       |             |
| bg                 | `Responsive<ColorValue> \| undefined`                     | no       | —       |             |
| borderColor        | `Responsive<ColorValue> \| undefined`                     | no       | —       |             |
| borderWidth        | `Responsive<number> \| undefined`                         | no       | —       |             |
| bottom             | `Responsive<number> \| undefined`                         | no       | —       |             |
| children           | `React.ReactNode \| undefined`                            | no       | —       |             |
| colGap             | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| cols               | `Responsive<number>`                                      | yes      | —       |             |
| flex               | `Responsive<number> \| undefined`                         | no       | —       |             |
| flexBasis          | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| flexGrow           | `Responsive<number> \| undefined`                         | no       | —       |             |
| flexShrink         | `Responsive<number> \| undefined`                         | no       | —       |             |
| gap                | `Responsive<SpaceValue> \| undefined`                     | no       | `0`     |             |
| height             | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| left               | `Responsive<number> \| undefined`                         | no       | —       |             |
| m                  | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| maxHeight          | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| maxWidth           | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| mb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| minHeight          | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| minItemWidth       | `Responsive<number> \| undefined`                         | no       | —       |             |
| minWidth           | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| ml                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| mr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| mt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| mx                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| my                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| opacity            | `Responsive<number> \| undefined`                         | no       | —       |             |
| overflow           | `Responsive<ViewStyle['overflow']> \| undefined`          | no       | —       |             |
| p                  | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pl                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pointerEvents      | `ReactNativeViewProps['pointerEvents'] \| undefined`      | no       | —       |             |
| position           | `Responsive<ViewStyle['position']> \| undefined`          | no       | —       |             |
| pr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| px                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| py                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| radius             | `Responsive<RadiusValue> \| undefined`                    | no       | —       |             |
| right              | `Responsive<number> \| undefined`                         | no       | —       |             |
| rowGap             | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| style              | `StyleProp<ViewStyle> \| undefined`                       | no       | —       |             |
| testID             | `string \| undefined`                                     | no       | —       |             |
| top                | `Responsive<number> \| undefined`                         | no       | —       |             |
| width              | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| zIndex             | `Responsive<number> \| undefined`                         | no       | —       |             |

## Heading

Source: `src/features/typography/adapters/inbound/Heading.tsx:10:1`

Renders a semantic, translatable heading using Surface typography tokens.

Export paths: `src/index.ts`

| Prop          | Type                                                                | Required | Default     | Description |
| ------------- | ------------------------------------------------------------------- | -------- | ----------- | ----------- |
| align         | `'auto' \| 'left' \| 'right' \| 'center' \| 'justify' \| undefined` | no       | —           |             |
| children      | `React.ReactNode \| undefined`                                      | no       | —           |             |
| color         | `SurfaceColor \| undefined`                                         | no       | —           |             |
| emphasis      | `SurfaceEmphasis \| undefined`                                      | no       | `'default'` |             |
| i18nKey       | `string \| undefined`                                               | no       | —           |             |
| level         | `HeadingLevel \| undefined`                                         | no       | `2`         |             |
| numberOfLines | `number \| undefined`                                               | no       | —           |             |
| testID        | `string \| undefined`                                               | no       | —           |             |
| text          | `string \| undefined`                                               | no       | —           |             |

## HelperText

Source: `src/components/helper-text/HelperText.tsx:6:1`

Export paths: `src/index.ts`

| Prop     | Type                                                          | Required | Default   | Description |
| -------- | ------------------------------------------------------------- | -------- | --------- | ----------- |
| children | `React.ReactNode \| undefined`                                | no       | —         |             |
| color    | `Extract<SurfaceColor, 'error'> \| undefined`                 | no       | —         |             |
| emphasis | `Extract<SurfaceEmphasis, 'default' \| 'muted'> \| undefined` | no       | `'muted'` |             |
| testID   | `string \| undefined`                                         | no       | —         |             |

## Icon

Source: `src/features/icon/adapters/inbound/Icon.tsx:7:1`

Renders a theme-aware font or SVG icon through the portable icon adapter.

Export paths: `src/index.ts`

| Prop     | Type                                                   | Required | Default | Description |
| -------- | ------------------------------------------------------ | -------- | ------- | ----------- |
| color    | `keyof SurfaceTheme['colors'] \| string \| undefined`  | no       | —       |             |
| name     | `IoniconsIconName \| undefined`                        | no       | —       |             |
| provider | `'Ionicons' \| undefined`                              | no       | —       |             |
| size     | `keyof SurfaceTheme['spacing'] \| number \| undefined` | no       | —       |             |
| style    | `StyleProp<TextStyle> \| undefined`                    | no       | —       |             |
| testID   | `string \| undefined`                                  | no       | —       |             |
| variant  | `never \| undefined`                                   | no       | —       |             |

## IconButton

Source: `src/features/button/adapters/inbound/IconButton.tsx:16:1`

Renders a compact accessible icon-only action control.

Export paths: `src/index.ts`

| Prop               | Type                                                    | Required | Default     | Description |
| ------------------ | ------------------------------------------------------- | -------- | ----------- | ----------- |
| accessibilityLabel | `string`                                                | yes      | —           |             |
| accessibilityRole  | `AccessibilityRole \| undefined`                        | no       | —           |             |
| accessibilityState | `AccessibilityState \| undefined`                       | no       | —           |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`       | no       | —           |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`       | no       | —           |             |
| bg                 | `Responsive<ColorValue> \| undefined`                   | no       | —           |             |
| borderColor        | `Responsive<ColorValue> \| undefined`                   | no       | —           |             |
| borderWidth        | `Responsive<number> \| undefined`                       | no       | —           |             |
| bottom             | `Responsive<number> \| undefined`                       | no       | —           |             |
| color              | `SurfaceColor \| undefined`                             | no       | `'primary'` |             |
| disabled           | `boolean \| undefined`                                  | no       | `false`     |             |
| flex               | `Responsive<number> \| undefined`                       | no       | —           |             |
| flexBasis          | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| flexGrow           | `Responsive<number> \| undefined`                       | no       | —           |             |
| flexShrink         | `Responsive<number> \| undefined`                       | no       | —           |             |
| height             | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| icon               | `IconSource`                                            | yes      | —           |             |
| interactionPolicy  | `InteractionPolicy \| undefined`                        | no       | —           |             |
| left               | `Responsive<number> \| undefined`                       | no       | —           |             |
| m                  | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| maxHeight          | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| maxWidth           | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| mb                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| minHeight          | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| minWidth           | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| ml                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| mr                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| mt                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| mx                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| my                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| onLongPress        | `((event: GestureResponderEvent) => void) \| undefined` | no       | —           |             |
| onPress            | `((event: GestureResponderEvent) => void) \| undefined` | no       | —           |             |
| opacity            | `Responsive<number> \| undefined`                       | no       | —           |             |
| overflow           | `Responsive<ViewStyle['overflow']> \| undefined`        | no       | —           |             |
| p                  | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| pb                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| pl                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| position           | `Responsive<ViewStyle['position']> \| undefined`        | no       | —           |             |
| pr                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| pt                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| px                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| py                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| radius             | `Responsive<RadiusValue> \| undefined`                  | no       | —           |             |
| right              | `Responsive<number> \| undefined`                       | no       | —           |             |
| size               | `ControlSize \| undefined`                              | no       | `'m'`       |             |
| testID             | `string \| undefined`                                   | no       | —           |             |
| top                | `Responsive<number> \| undefined`                       | no       | —           |             |
| variant            | `ButtonVariant \| undefined`                            | no       | `'ghost'`   |             |
| width              | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| zIndex             | `Responsive<number> \| undefined`                       | no       | —           |             |

## Image

Source: `src/features/image/adapters/inbound/Image.tsx:15:1`

Renders a token-aware accessible image with optional fallback source.

Export paths: `src/index.ts`

| Prop               | Type                                                 | Required | Default | Description |
| ------------------ | ---------------------------------------------------- | -------- | ------- | ----------- |
| accessibilityLabel | `string \| undefined`                                | no       | —       |             |
| alt                | `string \| undefined`                                | no       | —       |             |
| aspectRatio        | `number \| undefined`                                | no       | —       |             |
| fallbackSource     | `SurfaceImageSource \| null \| undefined`            | no       | —       |             |
| fit                | `ImageFit \| undefined`                              | no       | —       |             |
| height             | `number \| string \| undefined`                      | no       | —       |             |
| onError            | `ReactNativeImageProps['onError'] \| undefined`      | no       | —       |             |
| radius             | `number \| keyof SurfaceTheme['radii'] \| undefined` | no       | —       |             |
| resizeMode         | `ImageResizeMode \| undefined`                       | no       | —       |             |
| source             | `SurfaceImageSource \| null \| undefined`            | no       | —       |             |
| style              | `StyleProp<ImageStyle> \| undefined`                 | no       | —       |             |
| testID             | `string \| undefined`                                | no       | —       |             |
| width              | `number \| string \| undefined`                      | no       | —       |             |

## Inline

Source: `src/layout/Inline.tsx:7:1`

Export paths: `src/index.ts`

| Prop               | Type                                                                                         | Required | Default    | Description |
| ------------------ | -------------------------------------------------------------------------------------------- | -------- | ---------- | ----------- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined`                                    | no       | —          |             |
| accessibilityRole  | `ReactNativeViewProps['accessibilityRole'] \| undefined`                                     | no       | —          |             |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined`                                    | no       | —          |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`                                            | no       | —          |             |
| align              | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no       | `'center'` |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`                                            | no       | —          |             |
| bg                 | `Responsive<ColorValue> \| undefined`                                                        | no       | —          |             |
| borderColor        | `Responsive<ColorValue> \| undefined`                                                        | no       | —          |             |
| borderWidth        | `Responsive<number> \| undefined`                                                            | no       | —          |             |
| bottom             | `Responsive<number> \| undefined`                                                            | no       | —          |             |
| children           | `React.ReactNode \| undefined`                                                               | no       | —          |             |
| flex               | `Responsive<number> \| undefined`                                                            | no       | —          |             |
| flexBasis          | `Responsive<number \| string> \| undefined`                                                  | no       | —          |             |
| flexGrow           | `Responsive<number> \| undefined`                                                            | no       | —          |             |
| flexShrink         | `Responsive<number> \| undefined`                                                            | no       | —          |             |
| gap                | `Responsive<SpaceValue> \| undefined`                                                        | no       | —          |             |
| height             | `Responsive<number \| string> \| undefined`                                                  | no       | —          |             |
| justify            | `Responsive<                                                                                 |

    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'

> \| undefined`| no | — |  |
| left |`Responsive<number> \| undefined`| no | — |  |
| m |`Responsive<SpaceValue> \| undefined`| no | — |  |
| maxHeight |`Responsive<number \| string> \| undefined`| no | — |  |
| maxWidth |`Responsive<number \| string> \| undefined`| no | — |  |
| mb |`Responsive<SpaceValue> \| undefined`| no | — |  |
| minHeight |`Responsive<number \| string> \| undefined`| no | — |  |
| minWidth |`Responsive<number \| string> \| undefined`| no | — |  |
| ml |`Responsive<SpaceValue> \| undefined`| no | — |  |
| mr |`Responsive<SpaceValue> \| undefined`| no | — |  |
| mt |`Responsive<SpaceValue> \| undefined`| no | — |  |
| mx |`Responsive<SpaceValue> \| undefined`| no | — |  |
| my |`Responsive<SpaceValue> \| undefined`| no | — |  |
| opacity |`Responsive<number> \| undefined`| no | — |  |
| overflow |`Responsive<ViewStyle['overflow']> \| undefined`| no | — |  |
| p |`Responsive<SpaceValue> \| undefined`| no | — |  |
| pb |`Responsive<SpaceValue> \| undefined`| no | — |  |
| pl |`Responsive<SpaceValue> \| undefined`| no | — |  |
| pointerEvents |`ReactNativeViewProps['pointerEvents'] \| undefined`| no | — |  |
| position |`Responsive<ViewStyle['position']> \| undefined`| no | — |  |
| pr |`Responsive<SpaceValue> \| undefined`| no | — |  |
| pt |`Responsive<SpaceValue> \| undefined`| no | — |  |
| px |`Responsive<SpaceValue> \| undefined`| no | — |  |
| py |`Responsive<SpaceValue> \| undefined`| no | — |  |
| radius |`Responsive<RadiusValue> \| undefined`| no | — |  |
| right |`Responsive<number> \| undefined`| no | — |  |
| style |`StyleProp<ViewStyle> \| undefined`| no | — |  |
| testID |`string \| undefined`| no | — |  |
| top |`Responsive<number> \| undefined`| no | — |  |
| width |`Responsive<number \| string> \| undefined`| no | — |  |
| wrap |`Responsive<'nowrap' \| 'wrap'> \| undefined`| no |`'wrap'`|  |
| zIndex |`Responsive<number> \| undefined` | no | — | |

## KeyboardAvoidingView

Source: `src/features/keyboard-avoiding-view/adapters/inbound/KeyboardAvoidingView.tsx:7:1`

Preserves React Native keyboard avoidance behind the stable Surface feature boundary.

Export paths: `src/index.ts`

| Prop                                   | Type                                                   | Required | Default | Description |
| -------------------------------------- | ------------------------------------------------------ | -------- | ------- | ----------- |
| accessibilityActions                   | `ReadonlyArray<AccessibilityActionInfo> \| undefined`  | no       | —       |             |
| accessibilityElementsHidden            | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityHint                      | `string \| undefined`                                  | no       | —       |             |
| accessibilityIgnoresInvertColors       | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityLabel                     | `string \| undefined`                                  | no       | —       |             |
| accessibilityLabelledBy                | `string \| string[] \| undefined`                      | no       | —       |             |
| accessibilityLanguage                  | `string \| undefined`                                  | no       | —       |             |
| accessibilityLargeContentTitle         | `string \| undefined`                                  | no       | —       |             |
| accessibilityLiveRegion                | `'none' \| 'polite' \| 'assertive' \| undefined`       | no       | —       |             |
| accessibilityRespondsToUserInteraction | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityRole                      | `AccessibilityRole \| undefined`                       | no       | —       |             |
| accessibilityShowsLargeContentViewer   | `boolean \| undefined`                                 | no       | —       |             |
| accessibilityState                     | `AccessibilityState \| undefined`                      | no       | —       |             |
| accessibilityValue                     | `AccessibilityValue \| undefined`                      | no       | —       |             |
| accessibilityViewIsModal               | `boolean \| undefined`                                 | no       | —       |             |
| accessible                             | `boolean \| undefined`                                 | no       | —       |             |
| aria-busy                              | `boolean \| undefined`                                 | no       | —       |             |
| aria-checked                           | `boolean \| 'mixed' \| undefined`                      | no       | —       |             |
| aria-disabled                          | `boolean \| undefined`                                 | no       | —       |             |
| aria-expanded                          | `boolean \| undefined`                                 | no       | —       |             |
| aria-hidden                            | `boolean \| undefined`                                 | no       | —       |             |
| aria-label                             | `string \| undefined`                                  | no       | —       |             |
| aria-labelledby                        | `string \| undefined`                                  | no       | —       |             |
| aria-live                              | `('polite' \| 'assertive' \| 'off') \| undefined`      | no       | —       |             |
| aria-modal                             | `boolean \| undefined`                                 | no       | —       |             |
| aria-selected                          | `boolean \| undefined`                                 | no       | —       |             |
| aria-valuemax                          | `AccessibilityValue['max'] \| undefined`               | no       | —       |             |
| aria-valuemin                          | `AccessibilityValue['min'] \| undefined`               | no       | —       |             |
| aria-valuenow                          | `AccessibilityValue['now'] \| undefined`               | no       | —       |             |
| aria-valuetext                         | `AccessibilityValue['text'] \| undefined`              | no       | —       |             |
| behavior                               | `'height' \| 'position' \| 'padding' \| undefined`     | no       | —       |             |
| children                               | `React.ReactNode \| undefined`                         | no       | —       |             |
| collapsable                            | `boolean \| undefined`                                 | no       | —       |             |
| collapsableChildren                    | `boolean \| undefined`                                 | no       | —       |             |
| contentContainerStyle                  | `StyleProp<ViewStyle> \| undefined`                    | no       | —       |             |
| enabled                                | `boolean \| undefined`                                 | no       | —       |             |
| focusable                              | `boolean \| undefined`                                 | no       | —       |             |
| hasTVPreferredFocus                    | `boolean \| undefined`                                 | no       | —       |             |
| hitSlop                                | `null \| Insets \| number \| undefined`                | no       | —       |             |
| id                                     | `string \| undefined`                                  | no       | —       |             |
| importantForAccessibility              | `\| ('auto' \| 'yes' \| 'no' \| 'no-hide-descendants') |

    \| undefined` | no | — |  |

| isTVSelectable | `boolean \| undefined` | no | — | |
| keyboardVerticalOffset | `number \| undefined` | no | — | |
| nativeID | `string \| undefined` | no | — | |
| needsOffscreenAlphaCompositing | `boolean \| undefined` | no | — | |
| onAccessibilityAction | `\| ((event: AccessibilityActionEvent) => void)
    \| undefined` | no | — | |
| onAccessibilityEscape | `(() => void) \| undefined` | no | — | |
| onAccessibilityTap | `(() => void) \| undefined` | no | — | |
| onBlur | `((e: BlurEvent) => void) \| null \| undefined` | no | — | |
| onFocus | `((e: FocusEvent) => void) \| null \| undefined` | no | — | |
| onLayout | `((event: LayoutChangeEvent) => void) \| undefined` | no | — | |
| onMagicTap | `(() => void) \| undefined` | no | — | |
| onMoveShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onMoveShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onPointerCancel | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerCancelCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDown | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDownCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnter | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnterCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeave | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeaveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMove | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMoveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUp | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUpCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onResponderEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderGrant | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderReject | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderRelease | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminate | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminationRequest | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onStartShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onStartShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onTouchCancel | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEndCapture | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| pointerEvents | `'box-none' \| 'none' \| 'box-only' \| 'auto' \| undefined` | no | — | |
| removeClippedSubviews | `boolean \| undefined` | no | — | |
| renderToHardwareTextureAndroid | `boolean \| undefined` | no | — | |
| role | `Role \| undefined` | no | — | |
| screenReaderFocusable | `boolean \| undefined` | no | — | |
| shouldRasterizeIOS | `boolean \| undefined` | no | — | |
| style | `StyleProp<ViewStyle> \| undefined` | no | — | |
| tabIndex | `0 \| -1 \| undefined` | no | — | |
| testID | `string \| undefined` | no | — | |
| tvParallaxMagnification | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceX | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceY | `number \| undefined` | no | — | |
| tvParallaxTiltAngle | `number \| undefined` | no | — | |

## Label

Source: `src/components/label/Label.tsx:6:1`

Export paths: `src/index.ts`

| Prop     | Type                                                          | Required | Default     | Description |
| -------- | ------------------------------------------------------------- | -------- | ----------- | ----------- |
| children | `React.ReactNode \| undefined`                                | no       | —           |             |
| color    | `Extract<SurfaceColor, 'error'> \| undefined`                 | no       | —           |             |
| emphasis | `Extract<SurfaceEmphasis, 'default' \| 'muted'> \| undefined` | no       | `'default'` |             |
| required | `boolean \| undefined`                                        | no       | `false`     |             |
| testID   | `string \| undefined`                                         | no       | —           |             |

## ListItem

Source: `src/components/list-item/ListItem.tsx:47:1`

Export paths: `src/index.ts`

| Prop        | Type                           | Required | Default | Description |
| ----------- | ------------------------------ | -------- | ------- | ----------- |
| description | `React.ReactNode \| undefined` | no       | —       |             |
| disabled    | `boolean \| undefined`         | no       | `false` |             |
| leading     | `React.ReactNode \| undefined` | no       | —       |             |
| onPress     | `(() => void) \| undefined`    | no       | —       |             |
| testID      | `string \| undefined`          | no       | —       |             |
| title       | `React.ReactNode \| undefined` | no       | —       |             |
| trailing    | `React.ReactNode \| undefined` | no       | —       |             |

## Menu

Source: `src/components/menu/Menu.tsx:61:1`

Export paths: `src/index.ts`

| Prop              | Type                             | Required | Default     | Description |
| ----------------- | -------------------------------- | -------- | ----------- | ----------- |
| actions           | `readonly MenuAction[]`          | yes      | —           |             |
| closeOnSelect     | `boolean \| undefined`           | no       | `true`      |             |
| dismiss           | `() => void \| undefined`        | no       | —           |             |
| interactionPolicy | `InteractionPolicy \| undefined` | no       | `'enabled'` |             |
| testID            | `string \| undefined`            | no       | —           |             |
| trigger           | `React.ReactNode \| undefined`   | no       | —           |             |

## Modal

Source: `src/components/modal/Modal.tsx:15:1`

Export paths: `src/index.ts`

| Prop              | Type                             | Required | Default     | Description |
| ----------------- | -------------------------------- | -------- | ----------- | ----------- |
| children          | `React.ReactNode \| undefined`   | no       | —           |             |
| closeOnBackdrop   | `boolean \| undefined`           | no       | `true`      |             |
| interactionPolicy | `InteractionPolicy \| undefined` | no       | `'enabled'` |             |
| onDismiss         | `(() => void) \| undefined`      | no       | —           |             |
| testID            | `string \| undefined`            | no       | —           |             |
| visible           | `boolean`                        | yes      | —           |             |

## Popover

Source: `src/features/popover/adapters/inbound/Popover.tsx:16:1`

Renders anchored overlay content through the shared Surface overlay stack.

Export paths: `src/index.ts`

| Prop                | Type                                                      | Required | Default          | Description |
| ------------------- | --------------------------------------------------------- | -------- | ---------------- | ----------- |
| anchor              | `(controls: PopoverAnchorRenderProps) => React.ReactNode` | yes      | —                |             |
| children            | `React.ReactNode \| undefined`                            | no       | —                |             |
| closeOnOutsidePress | `boolean \| undefined`                                    | no       | `true`           |             |
| defaultOpen         | `boolean \| undefined`                                    | no       | `false`          |             |
| interactionPolicy   | `InteractionPolicy \| undefined`                          | no       | `'enabled'`      |             |
| offset              | `number \| undefined`                                     | no       | `8`              |             |
| onOpenChange        | `((open: boolean) => void) \| undefined`                  | no       | —                |             |
| open                | `boolean \| undefined`                                    | no       | —                |             |
| placement           | `PopoverPlacement \| undefined`                           | no       | `'bottom-start'` |             |
| testID              | `string \| undefined`                                     | no       | —                |             |

## Radio

Source: `src/features/form/radio/adapters/inbound/Radio.tsx:22:1`

Renders one accessible radio control with text or structured label content.

Export paths: `src/index.ts`

| Prop               | Type                                                    | Required | Default     | Description |
| ------------------ | ------------------------------------------------------- | -------- | ----------- | ----------- |
| accessibilityLabel | `string \| undefined`                                   | no       | —           |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`       | no       | —           |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`       | no       | —           |             |
| bg                 | `Responsive<ColorValue> \| undefined`                   | no       | —           |             |
| borderColor        | `Responsive<ColorValue> \| undefined`                   | no       | —           |             |
| borderWidth        | `Responsive<number> \| undefined`                       | no       | —           |             |
| bottom             | `Responsive<number> \| undefined`                       | no       | —           |             |
| checked            | `boolean \| undefined`                                  | no       | —           |             |
| children           | `React.ReactNode \| undefined`                          | no       | —           |             |
| color              | `SurfaceColor \| undefined`                             | no       | `'primary'` |             |
| defaultChecked     | `boolean \| undefined`                                  | no       | `false`     |             |
| disabled           | `boolean \| undefined`                                  | no       | `false`     |             |
| flex               | `Responsive<number> \| undefined`                       | no       | —           |             |
| flexBasis          | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| flexGrow           | `Responsive<number> \| undefined`                       | no       | —           |             |
| flexShrink         | `Responsive<number> \| undefined`                       | no       | —           |             |
| height             | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| interactionPolicy  | `InteractionPolicy \| undefined`                        | no       | —           |             |
| invalid            | `boolean \| undefined`                                  | no       | `false`     |             |
| left               | `Responsive<number> \| undefined`                       | no       | —           |             |
| m                  | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| maxHeight          | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| maxWidth           | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| mb                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| minHeight          | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| minWidth           | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| ml                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| mr                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| mt                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| mx                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| my                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| onCheckedChange    | `((checked: boolean) => void) \| undefined`             | no       | —           |             |
| onLongPress        | `((event: GestureResponderEvent) => void) \| undefined` | no       | —           |             |
| opacity            | `Responsive<number> \| undefined`                       | no       | —           |             |
| overflow           | `Responsive<ViewStyle['overflow']> \| undefined`        | no       | —           |             |
| p                  | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| pb                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| pl                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| position           | `Responsive<ViewStyle['position']> \| undefined`        | no       | —           |             |
| pr                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| pt                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| px                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| py                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| radius             | `Responsive<RadiusValue> \| undefined`                  | no       | —           |             |
| readOnly           | `boolean \| undefined`                                  | no       | `false`     |             |
| right              | `Responsive<number> \| undefined`                       | no       | —           |             |
| size               | `ControlSize \| undefined`                              | no       | `'m'`       |             |
| testID             | `string \| undefined`                                   | no       | —           |             |
| top                | `Responsive<number> \| undefined`                       | no       | —           |             |
| width              | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| zIndex             | `Responsive<number> \| undefined`                       | no       | —           |             |

## ResponsiveProvider

Source: `src/core/responsive/ResponsiveProvider.tsx:9:1`

Export paths: `src/index.ts`

| Prop     | Type                           | Required | Default | Description |
| -------- | ------------------------------ | -------- | ------- | ----------- |
| children | `React.ReactNode \| undefined` | no       | —       |             |

## ScrollArea

Source: `src/layout/ScrollArea.tsx:22:1`

Export paths: `src/index.ts`

| Prop                                      | Type                                                  | Required | Default | Description |
| ----------------------------------------- | ----------------------------------------------------- | -------- | ------- | ----------- |
| accessibilityActions                      | `ReadonlyArray<AccessibilityActionInfo> \| undefined` | no       | —       |             |
| accessibilityElementsHidden               | `boolean \| undefined`                                | no       | —       |             |
| accessibilityHint                         | `string \| undefined`                                 | no       | —       |             |
| accessibilityIgnoresInvertColors          | `boolean \| undefined`                                | no       | —       |             |
| accessibilityLabel                        | `string \| undefined`                                 | no       | —       |             |
| accessibilityLabelledBy                   | `string \| string[] \| undefined`                     | no       | —       |             |
| accessibilityLanguage                     | `string \| undefined`                                 | no       | —       |             |
| accessibilityLargeContentTitle            | `string \| undefined`                                 | no       | —       |             |
| accessibilityLiveRegion                   | `'none' \| 'polite' \| 'assertive' \| undefined`      | no       | —       |             |
| accessibilityRespondsToUserInteraction    | `boolean \| undefined`                                | no       | —       |             |
| accessibilityRole                         | `AccessibilityRole \| undefined`                      | no       | —       |             |
| accessibilityShowsLargeContentViewer      | `boolean \| undefined`                                | no       | —       |             |
| accessibilityState                        | `AccessibilityState \| undefined`                     | no       | —       |             |
| accessibilityValue                        | `AccessibilityValue \| undefined`                     | no       | —       |             |
| accessibilityViewIsModal                  | `boolean \| undefined`                                | no       | —       |             |
| accessible                                | `boolean \| undefined`                                | no       | —       |             |
| alignSelf                                 | `Responsive<ViewStyle['alignSelf']> \| undefined`     | no       | —       |             |
| alwaysBounceHorizontal                    | `boolean \| undefined`                                | no       | —       |             |
| alwaysBounceVertical                      | `boolean \| undefined`                                | no       | —       |             |
| aria-busy                                 | `boolean \| undefined`                                | no       | —       |             |
| aria-checked                              | `boolean \| 'mixed' \| undefined`                     | no       | —       |             |
| aria-disabled                             | `boolean \| undefined`                                | no       | —       |             |
| aria-expanded                             | `boolean \| undefined`                                | no       | —       |             |
| aria-hidden                               | `boolean \| undefined`                                | no       | —       |             |
| aria-label                                | `string \| undefined`                                 | no       | —       |             |
| aria-labelledby                           | `string \| undefined`                                 | no       | —       |             |
| aria-live                                 | `('polite' \| 'assertive' \| 'off') \| undefined`     | no       | —       |             |
| aria-modal                                | `boolean \| undefined`                                | no       | —       |             |
| aria-selected                             | `boolean \| undefined`                                | no       | —       |             |
| aria-valuemax                             | `AccessibilityValue['max'] \| undefined`              | no       | —       |             |
| aria-valuemin                             | `AccessibilityValue['min'] \| undefined`              | no       | —       |             |
| aria-valuenow                             | `AccessibilityValue['now'] \| undefined`              | no       | —       |             |
| aria-valuetext                            | `AccessibilityValue['text'] \| undefined`             | no       | —       |             |
| automaticallyAdjustContentInsets          | `boolean \| undefined`                                | no       | —       |             |
| automaticallyAdjustKeyboardInsets         | `boolean \| undefined`                                | no       | —       |             |
| automaticallyAdjustsScrollIndicatorInsets | `boolean \| undefined`                                | no       | —       |             |
| bg                                        | `Responsive<ColorValue> \| undefined`                 | no       | —       |             |
| borderColor                               | `Responsive<ColorValue> \| undefined`                 | no       | —       |             |
| borderWidth                               | `Responsive<number> \| undefined`                     | no       | —       |             |
| bottom                                    | `Responsive<number> \| undefined`                     | no       | —       |             |
| bounces                                   | `boolean \| undefined`                                | no       | —       |             |
| bouncesZoom                               | `boolean \| undefined`                                | no       | —       |             |
| canCancelContentTouches                   | `boolean \| undefined`                                | no       | —       |             |
| centerContent                             | `boolean \| undefined`                                | no       | —       |             |
| children                                  | `React.ReactNode \| undefined`                        | no       | —       |             |
| collapsable                               | `boolean \| undefined`                                | no       | —       |             |
| collapsableChildren                       | `boolean \| undefined`                                | no       | —       |             |
| contentContainerStyle                     | `StyleProp<ViewStyle> \| undefined`                   | no       | —       |             |
| contentInset                              | `Insets \| undefined`                                 | no       | —       |             |
| contentInsetAdjustmentBehavior            | `\| 'automatic'                                       |

    \| 'scrollableAxes'
    \| 'never'
    \| 'always'
    \| undefined` | no | — |  |

| contentOffset | `PointProp \| undefined` | no | — | |
| decelerationRate | `'fast' \| 'normal' \| number \| undefined` | no | — | |
| directionalLockEnabled | `boolean \| undefined` | no | — | |
| disableIntervalMomentum | `boolean \| undefined` | no | — | |
| disableScrollViewPanResponder | `boolean \| undefined` | no | — | |
| endFillColor | `ColorValue \| undefined` | no | — | |
| fadingEdgeLength | `number \| {start: number; end: number} \| undefined` | no | — | |
| flex | `Responsive<number> \| undefined` | no | — | |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — | |
| flexGrow | `Responsive<number> \| undefined` | no | — | |
| flexShrink | `Responsive<number> \| undefined` | no | — | |
| focusable | `boolean \| undefined` | no | — | |
| hasTVPreferredFocus | `boolean \| undefined` | no | — | |
| height | `Responsive<number \| string> \| undefined` | no | — | |
| hitSlop | `null \| Insets \| number \| undefined` | no | — | |
| horizontal | `boolean \| null \| undefined` | no | — | |
| id | `string \| undefined` | no | — | |
| importantForAccessibility | `\| ('auto' \| 'yes' \| 'no' \| 'no-hide-descendants')
    \| undefined` | no | — | |
| indicatorStyle | `'default' \| 'black' \| 'white' \| undefined` | no | — | |
| innerViewRef | `React.RefObject<View> \| undefined` | no | — | |
| invertStickyHeaders | `boolean \| undefined` | no | — | |
| isTVSelectable | `boolean \| undefined` | no | — | |
| keyboardDismissMode | `'none' \| 'interactive' \| 'on-drag' \| undefined` | no | — | |
| keyboardShouldPersistTaps | `\| boolean
    \| 'always'
    \| 'never'
    \| 'handled'
    \| undefined` | no | — | |
| left | `Responsive<number> \| undefined` | no | — | |
| m | `Responsive<SpaceValue> \| undefined` | no | — | |
| maintainVisibleContentPosition | `\| null
    \| {
        autoscrollToTopThreshold?: number \| null \| undefined;
        minIndexForVisible: number;
      }
    \| undefined` | no | — | |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — | |
| maximumZoomScale | `number \| undefined` | no | — | |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — | |
| mb | `Responsive<SpaceValue> \| undefined` | no | — | |
| minHeight | `Responsive<number \| string> \| undefined` | no | — | |
| minimumZoomScale | `number \| undefined` | no | — | |
| minWidth | `Responsive<number \| string> \| undefined` | no | — | |
| ml | `Responsive<SpaceValue> \| undefined` | no | — | |
| mr | `Responsive<SpaceValue> \| undefined` | no | — | |
| mt | `Responsive<SpaceValue> \| undefined` | no | — | |
| mx | `Responsive<SpaceValue> \| undefined` | no | — | |
| my | `Responsive<SpaceValue> \| undefined` | no | — | |
| nativeID | `string \| undefined` | no | — | |
| needsOffscreenAlphaCompositing | `boolean \| undefined` | no | — | |
| nestedScrollEnabled | `boolean \| undefined` | no | — | |
| onAccessibilityAction | `\| ((event: AccessibilityActionEvent) => void)
    \| undefined` | no | — | |
| onAccessibilityEscape | `(() => void) \| undefined` | no | — | |
| onAccessibilityTap | `(() => void) \| undefined` | no | — | |
| onBlur | `((e: BlurEvent) => void) \| null \| undefined` | no | — | |
| onContentSizeChange | `\| ((contentWidth: number, contentHeight: number) => void)
    \| undefined` | no | — | |
| onFocus | `((e: FocusEvent) => void) \| null \| undefined` | no | — | |
| onLayout | `((event: LayoutChangeEvent) => void) \| undefined` | no | — | |
| onMagicTap | `(() => void) \| undefined` | no | — | |
| onMomentumScrollBegin | `\| ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    \| undefined` | no | — | |
| onMomentumScrollEnd | `\| ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    \| undefined` | no | — | |
| onMoveShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onMoveShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onPointerCancel | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerCancelCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDown | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDownCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnter | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnterCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeave | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeaveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMove | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMoveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUp | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUpCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onResponderEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderGrant | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderReject | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderRelease | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminate | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminationRequest | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onScroll | `\| ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    \| undefined` | no | — | |
| onScrollAnimationEnd | `(() => void) \| undefined` | no | — | |
| onScrollBeginDrag | `\| ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    \| undefined` | no | — | |
| onScrollEndDrag | `\| ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    \| undefined` | no | — | |
| onScrollToTop | `\| ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    \| undefined` | no | — | |
| onStartShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onStartShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onTouchCancel | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEndCapture | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| opacity | `Responsive<number> \| undefined` | no | — | |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — | |
| overScrollMode | `'auto' \| 'always' \| 'never' \| undefined` | no | — | |
| p | `Responsive<SpaceValue> \| undefined` | no | — | |
| pagingEnabled | `boolean \| undefined` | no | — | |
| pb | `Responsive<SpaceValue> \| undefined` | no | — | |
| persistentScrollbar | `boolean \| undefined` | no | — | |
| pinchGestureEnabled | `boolean \| undefined` | no | — | |
| pl | `Responsive<SpaceValue> \| undefined` | no | — | |
| pointerEvents | `'box-none' \| 'none' \| 'box-only' \| 'auto' \| undefined` | no | — | |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — | |
| pr | `Responsive<SpaceValue> \| undefined` | no | — | |
| pt | `Responsive<SpaceValue> \| undefined` | no | — | |
| px | `Responsive<SpaceValue> \| undefined` | no | — | |
| py | `Responsive<SpaceValue> \| undefined` | no | — | |
| radius | `Responsive<RadiusValue> \| undefined` | no | — | |
| refreshControl | `React.ReactElement<RefreshControlProps> \| undefined` | no | — | |
| removeClippedSubviews | `boolean \| undefined` | no | — | |
| renderToHardwareTextureAndroid | `boolean \| undefined` | no | — | |
| right | `Responsive<number> \| undefined` | no | — | |
| role | `Role \| undefined` | no | — | |
| screenReaderFocusable | `boolean \| undefined` | no | — | |
| scrollEnabled | `boolean \| undefined` | no | — | |
| scrollEventThrottle | `number \| undefined` | no | — | |
| scrollIndicatorInsets | `Insets \| undefined` | no | — | |
| scrollPerfTag | `string \| undefined` | no | — | |
| scrollsChildToFocus | `boolean \| undefined` | no | — | |
| scrollsToTop | `boolean \| undefined` | no | — | |
| scrollToOverflowEnabled | `boolean \| undefined` | no | — | |
| scrollViewRef | `React.RefObject<ScrollView> \| undefined` | no | — | |
| shouldRasterizeIOS | `boolean \| undefined` | no | — | |
| showsHorizontalScrollIndicator | `boolean \| undefined` | no | — | |
| showsVerticalScrollIndicator | `boolean \| undefined` | no | — | |
| snapToAlignment | `'start' \| 'center' \| 'end' \| undefined` | no | — | |
| snapToEnd | `boolean \| undefined` | no | — | |
| snapToInterval | `number \| undefined` | no | — | |
| snapToOffsets | `number[] \| undefined` | no | — | |
| snapToStart | `boolean \| undefined` | no | — | |
| StickyHeaderComponent | `React.ComponentType<any> \| undefined` | no | — | |
| stickyHeaderHiddenOnScroll | `boolean \| undefined` | no | — | |
| stickyHeaderIndices | `number[] \| undefined` | no | — | |
| style | `StyleProp<ViewStyle> \| undefined` | no | — | |
| tabIndex | `0 \| -1 \| undefined` | no | — | |
| testID | `string \| undefined` | no | — | |
| top | `Responsive<number> \| undefined` | no | — | |
| tvParallaxMagnification | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceX | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceY | `number \| undefined` | no | — | |
| tvParallaxTiltAngle | `number \| undefined` | no | — | |
| width | `Responsive<number \| string> \| undefined` | no | — | |
| zIndex | `Responsive<number> \| undefined` | no | — | |
| zoomScale | `number \| undefined` | no | — | |

## Show

Source: `src/layout/Show.tsx:11:1`

Export paths: `src/index.ts`

| Prop     | Type                           | Required | Default | Description |
| -------- | ------------------------------ | -------- | ------- | ----------- |
| children | `React.ReactNode \| undefined` | no       | —       |             |
| fallback | `React.ReactNode \| undefined` | no       | `null`  |             |
| when     | `Responsive<boolean>`          | yes      | —       |             |

## Spacer

Source: `src/layout/Spacer.tsx:12:1`

Export paths: `src/index.ts`

| Prop   | Type                                                | Required | Default      | Description |
| ------ | --------------------------------------------------- | -------- | ------------ | ----------- |
| axis   | `'horizontal' \| 'vertical' \| 'both' \| undefined` | no       | `'vertical'` |             |
| size   | `SpaceValue \| undefined`                           | no       | `'m'`        |             |
| testID | `string \| undefined`                               | no       | —            |             |

## Stack

Source: `src/features/layout/adapters/inbound/Stack.tsx:10:1`

Stacks authored children directly along a responsive flex direction.

Export paths: `src/index.ts`

| Prop               | Type                                                                                         | Required | Default    | Description |
| ------------------ | -------------------------------------------------------------------------------------------- | -------- | ---------- | ----------- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined`                                    | no       | —          |             |
| accessibilityRole  | `ReactNativeViewProps['accessibilityRole'] \| undefined`                                     | no       | —          |             |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined`                                    | no       | —          |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`                                            | no       | —          |             |
| align              | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no       | —          |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`                                            | no       | —          |             |
| bg                 | `Responsive<ColorValue> \| undefined`                                                        | no       | —          |             |
| borderColor        | `Responsive<ColorValue> \| undefined`                                                        | no       | —          |             |
| borderWidth        | `Responsive<number> \| undefined`                                                            | no       | —          |             |
| bottom             | `Responsive<number> \| undefined`                                                            | no       | —          |             |
| children           | `React.ReactNode \| undefined`                                                               | no       | —          |             |
| direction          | `Responsive<'row' \| 'column'> \| undefined`                                                 | no       | `'column'` |             |
| flex               | `Responsive<number> \| undefined`                                                            | no       | —          |             |
| flexBasis          | `Responsive<number \| string> \| undefined`                                                  | no       | —          |             |
| flexGrow           | `Responsive<number> \| undefined`                                                            | no       | —          |             |
| flexShrink         | `Responsive<number> \| undefined`                                                            | no       | —          |             |
| gap                | `Responsive<SpaceValue> \| undefined`                                                        | no       | `0`        |             |
| height             | `Responsive<number \| string> \| undefined`                                                  | no       | —          |             |
| justify            | `Responsive<                                                                                 |

    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'

> \| undefined`| no | — |  |
| left |`Responsive<number> \| undefined`| no | — |  |
| m |`Responsive<SpaceValue> \| undefined`| no | — |  |
| maxHeight |`Responsive<number \| string> \| undefined`| no | — |  |
| maxWidth |`Responsive<number \| string> \| undefined`| no | — |  |
| mb |`Responsive<SpaceValue> \| undefined`| no | — |  |
| minHeight |`Responsive<number \| string> \| undefined`| no | — |  |
| minWidth |`Responsive<number \| string> \| undefined`| no | — |  |
| ml |`Responsive<SpaceValue> \| undefined`| no | — |  |
| mr |`Responsive<SpaceValue> \| undefined`| no | — |  |
| mt |`Responsive<SpaceValue> \| undefined`| no | — |  |
| mx |`Responsive<SpaceValue> \| undefined`| no | — |  |
| my |`Responsive<SpaceValue> \| undefined`| no | — |  |
| opacity |`Responsive<number> \| undefined`| no | — |  |
| overflow |`Responsive<ViewStyle['overflow']> \| undefined`| no | — |  |
| p |`Responsive<SpaceValue> \| undefined`| no | — |  |
| pb |`Responsive<SpaceValue> \| undefined`| no | — |  |
| pl |`Responsive<SpaceValue> \| undefined`| no | — |  |
| pointerEvents |`ReactNativeViewProps['pointerEvents'] \| undefined`| no | — |  |
| position |`Responsive<ViewStyle['position']> \| undefined`| no | — |  |
| pr |`Responsive<SpaceValue> \| undefined`| no | — |  |
| pt |`Responsive<SpaceValue> \| undefined`| no | — |  |
| px |`Responsive<SpaceValue> \| undefined`| no | — |  |
| py |`Responsive<SpaceValue> \| undefined`| no | — |  |
| radius |`Responsive<RadiusValue> \| undefined`| no | — |  |
| right |`Responsive<number> \| undefined`| no | — |  |
| style |`StyleProp<ViewStyle> \| undefined`| no | — |  |
| testID |`string \| undefined`| no | — |  |
| top |`Responsive<number> \| undefined`| no | — |  |
| width |`Responsive<number \| string> \| undefined`| no | — |  |
| wrap |`Responsive<'nowrap' \| 'wrap'> \| undefined`| no | — |  |
| zIndex |`Responsive<number> \| undefined` | no | — | |

## Surface

Source: `src/features/surface/adapters/inbound/Surface.tsx:9:1`

Renders a themed container surface with semantic elevation and border variants.

Export paths: `src/index.ts`

| Prop               | Type                                                      | Required | Default     | Description |
| ------------------ | --------------------------------------------------------- | -------- | ----------- | ----------- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined` | no       | —           |             |
| accessibilityRole  | `ReactNativeViewProps['accessibilityRole'] \| undefined`  | no       | —           |             |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined` | no       | —           |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`         | no       | —           |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`         | no       | —           |             |
| bottom             | `Responsive<number> \| undefined`                         | no       | —           |             |
| children           | `React.ReactNode \| undefined`                            | no       | —           |             |
| flex               | `Responsive<number> \| undefined`                         | no       | —           |             |
| flexBasis          | `Responsive<number \| string> \| undefined`               | no       | —           |             |
| flexGrow           | `Responsive<number> \| undefined`                         | no       | —           |             |
| flexShrink         | `Responsive<number> \| undefined`                         | no       | —           |             |
| height             | `Responsive<number \| string> \| undefined`               | no       | —           |             |
| left               | `Responsive<number> \| undefined`                         | no       | —           |             |
| m                  | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| maxHeight          | `Responsive<number \| string> \| undefined`               | no       | —           |             |
| maxWidth           | `Responsive<number \| string> \| undefined`               | no       | —           |             |
| mb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| minHeight          | `Responsive<number \| string> \| undefined`               | no       | —           |             |
| minWidth           | `Responsive<number \| string> \| undefined`               | no       | —           |             |
| ml                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| mr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| mt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| mx                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| my                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| opacity            | `Responsive<number> \| undefined`                         | no       | —           |             |
| overflow           | `Responsive<ViewStyle['overflow']> \| undefined`          | no       | —           |             |
| p                  | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| pb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| pl                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| pointerEvents      | `ReactNativeViewProps['pointerEvents'] \| undefined`      | no       | —           |             |
| position           | `Responsive<ViewStyle['position']> \| undefined`          | no       | —           |             |
| pr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| pt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| px                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| py                 | `Responsive<SpaceValue> \| undefined`                     | no       | —           |             |
| radius             | `Responsive<RadiusValue> \| undefined`                    | no       | `'m'`       |             |
| right              | `Responsive<number> \| undefined`                         | no       | —           |             |
| style              | `StyleProp<ViewStyle> \| undefined`                       | no       | —           |             |
| testID             | `string \| undefined`                                     | no       | —           |             |
| top                | `Responsive<number> \| undefined`                         | no       | —           |             |
| variant            | `SurfaceVariant \| undefined`                             | no       | `'default'` |             |
| width              | `Responsive<number \| string> \| undefined`               | no       | —           |             |
| zIndex             | `Responsive<number> \| undefined`                         | no       | —           |             |

## Switch

Source: `src/components/switch/Switch.tsx:16:1`

Export paths: `src/index.ts`

| Prop               | Type                                                    | Required | Default     | Description |
| ------------------ | ------------------------------------------------------- | -------- | ----------- | ----------- |
| accessibilityLabel | `string \| undefined`                                   | no       | —           |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`       | no       | —           |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`       | no       | —           |             |
| bg                 | `Responsive<ColorValue> \| undefined`                   | no       | —           |             |
| borderColor        | `Responsive<ColorValue> \| undefined`                   | no       | —           |             |
| borderWidth        | `Responsive<number> \| undefined`                       | no       | —           |             |
| bottom             | `Responsive<number> \| undefined`                       | no       | —           |             |
| checked            | `boolean \| undefined`                                  | no       | —           |             |
| children           | `React.ReactNode \| undefined`                          | no       | —           |             |
| color              | `SurfaceColor \| undefined`                             | no       | `'primary'` |             |
| defaultChecked     | `boolean \| undefined`                                  | no       | `false`     |             |
| disabled           | `boolean \| undefined`                                  | no       | `false`     |             |
| flex               | `Responsive<number> \| undefined`                       | no       | —           |             |
| flexBasis          | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| flexGrow           | `Responsive<number> \| undefined`                       | no       | —           |             |
| flexShrink         | `Responsive<number> \| undefined`                       | no       | —           |             |
| height             | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| interactionPolicy  | `InteractionPolicy \| undefined`                        | no       | —           |             |
| invalid            | `boolean \| undefined`                                  | no       | `false`     |             |
| left               | `Responsive<number> \| undefined`                       | no       | —           |             |
| m                  | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| maxHeight          | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| maxWidth           | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| mb                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| minHeight          | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| minWidth           | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| ml                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| mr                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| mt                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| mx                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| my                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| onCheckedChange    | `((checked: boolean) => void) \| undefined`             | no       | —           |             |
| onLongPress        | `((event: GestureResponderEvent) => void) \| undefined` | no       | —           |             |
| opacity            | `Responsive<number> \| undefined`                       | no       | —           |             |
| overflow           | `Responsive<ViewStyle['overflow']> \| undefined`        | no       | —           |             |
| p                  | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| pb                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| pl                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| position           | `Responsive<ViewStyle['position']> \| undefined`        | no       | —           |             |
| pr                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| pt                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| px                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| py                 | `Responsive<SpaceValue> \| undefined`                   | no       | —           |             |
| radius             | `Responsive<RadiusValue> \| undefined`                  | no       | —           |             |
| readOnly           | `boolean \| undefined`                                  | no       | `false`     |             |
| right              | `Responsive<number> \| undefined`                       | no       | —           |             |
| size               | `ControlSize \| undefined`                              | no       | `'m'`       |             |
| testID             | `string \| undefined`                                   | no       | —           |             |
| top                | `Responsive<number> \| undefined`                       | no       | —           |             |
| width              | `Responsive<number \| string> \| undefined`             | no       | —           |             |
| zIndex             | `Responsive<number> \| undefined`                       | no       | —           |             |

## Tab

Source: `src/components/tabs/Tab.tsx:10:1`

Export paths: `src/index.ts`

| Prop              | Type                             | Required | Default     | Description |
| ----------------- | -------------------------------- | -------- | ----------- | ----------- |
| children          | `React.ReactNode \| undefined`   | no       | —           |             |
| disabled          | `boolean \| undefined`           | no       | `false`     |             |
| interactionPolicy | `InteractionPolicy \| undefined` | no       | `'enabled'` |             |
| testID            | `string \| undefined`            | no       | —           |             |
| value             | `string`                         | yes      | —           |             |

## TabList

Source: `src/components/tabs/TabList.tsx:9:1`

Export paths: `src/index.ts`

| Prop     | Type                           | Required | Default | Description |
| -------- | ------------------------------ | -------- | ------- | ----------- |
| children | `React.ReactNode \| undefined` | no       | —       |             |
| testID   | `string \| undefined`          | no       | —       |             |

## TabPanel

Source: `src/components/tabs/TabPanel.tsx:9:1`

Export paths: `src/index.ts`

| Prop     | Type                           | Required | Default | Description |
| -------- | ------------------------------ | -------- | ------- | ----------- |
| children | `React.ReactNode \| undefined` | no       | —       |             |
| testID   | `string \| undefined`          | no       | —       |             |
| value    | `string`                       | yes      | —       |             |

## Tabs

Source: `src/components/tabs/Tabs.tsx:9:1`

Export paths: `src/index.ts`

| Prop          | Type                                     | Required | Default | Description |
| ------------- | ---------------------------------------- | -------- | ------- | ----------- |
| children      | `React.ReactNode \| undefined`           | no       | —       |             |
| defaultValue  | `string \| undefined`                    | no       | —       |             |
| onValueChange | `((value: string) => void) \| undefined` | no       | —       |             |
| testID        | `string \| undefined`                    | no       | —       |             |
| value         | `string \| undefined`                    | no       | —       |             |

## Template

Source: `src/layout/Template.tsx:35:1`

Export paths: `src/index.ts`

| Prop               | Type                                                      | Required | Default | Description |
| ------------------ | --------------------------------------------------------- | -------- | ------- | ----------- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined` | no       | —       |             |
| accessibilityRole  | `ReactNativeViewProps['accessibilityRole'] \| undefined`  | no       | —       |             |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined` | no       | —       |             |
| accessible         | `ReactNativeViewProps['accessible'] \| undefined`         | no       | —       |             |
| alignSelf          | `Responsive<ViewStyle['alignSelf']> \| undefined`         | no       | —       |             |
| bg                 | `Responsive<ColorValue> \| undefined`                     | no       | —       |             |
| borderColor        | `Responsive<ColorValue> \| undefined`                     | no       | —       |             |
| borderWidth        | `Responsive<number> \| undefined`                         | no       | —       |             |
| bottom             | `Responsive<number> \| undefined`                         | no       | —       |             |
| colGap             | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| columns            | `ColumnsMap \| undefined`                                 | no       | —       |             |
| flex               | `Responsive<number> \| undefined`                         | no       | —       |             |
| flexBasis          | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| flexGrow           | `Responsive<number> \| undefined`                         | no       | —       |             |
| flexShrink         | `Responsive<number> \| undefined`                         | no       | —       |             |
| gap                | `Responsive<SpaceValue> \| undefined`                     | no       | `0`     |             |
| height             | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| left               | `Responsive<number> \| undefined`                         | no       | —       |             |
| m                  | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| maxHeight          | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| maxWidth           | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| mb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| minHeight          | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| minWidth           | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| ml                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| mr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| mt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| mx                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| my                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| opacity            | `Responsive<number> \| undefined`                         | no       | —       |             |
| overflow           | `Responsive<ViewStyle['overflow']> \| undefined`          | no       | —       |             |
| p                  | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pb                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pl                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pointerEvents      | `ReactNativeViewProps['pointerEvents'] \| undefined`      | no       | —       |             |
| position           | `Responsive<ViewStyle['position']> \| undefined`          | no       | —       |             |
| pr                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| pt                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| px                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| py                 | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| radius             | `Responsive<RadiusValue> \| undefined`                    | no       | —       |             |
| right              | `Responsive<number> \| undefined`                         | no       | —       |             |
| rowGap             | `Responsive<SpaceValue> \| undefined`                     | no       | —       |             |
| slots              | `SlotMap`                                                 | yes      | —       |             |
| style              | `StyleProp<ViewStyle> \| undefined`                       | no       | —       |             |
| templates          | `TemplateMap`                                             | yes      | —       |             |
| testID             | `string \| undefined`                                     | no       | —       |             |
| top                | `Responsive<number> \| undefined`                         | no       | —       |             |
| width              | `Responsive<number \| string> \| undefined`               | no       | —       |             |
| zIndex             | `Responsive<number> \| undefined`                         | no       | —       |             |

## Text

Source: `src/features/typography/adapters/inbound/Text.tsx:10:1`

Renders translatable body text using Surface semantic typography.

Export paths: `src/index.ts`

| Prop          | Type                                  | Required | Default     | Description |
| ------------- | ------------------------------------- | -------- | ----------- | ----------- |
| align         | `TextStyle['textAlign'] \| undefined` | no       | —           |             |
| children      | `React.ReactNode \| undefined`        | no       | —           |             |
| color         | `SurfaceColor \| undefined`           | no       | —           |             |
| emphasis      | `SurfaceEmphasis \| undefined`        | no       | `'default'` |             |
| i18nKey       | `string \| undefined`                 | no       | —           |             |
| italic        | `boolean \| undefined`                | no       | `false`     |             |
| numberOfLines | `number \| undefined`                 | no       | —           |             |
| testID        | `string \| undefined`                 | no       | —           |             |
| variant       | `TextVariant \| undefined`            | no       | `'body'`    |             |
| weight        | `TextWeight \| undefined`             | no       | —           |             |

## Textarea

Source: `src/components/textarea/Textarea.tsx:6:1`

Export paths: `src/index.ts`

| Prop                                   | Type                                                            | Required | Default | Description |
| -------------------------------------- | --------------------------------------------------------------- | -------- | ------- | ----------- |
| accessibilityActions                   | `ReadonlyArray<AccessibilityActionInfo> \| undefined`           | no       | —       |             |
| accessibilityElementsHidden            | `boolean \| undefined`                                          | no       | —       |             |
| accessibilityHint                      | `string \| undefined`                                           | no       | —       |             |
| accessibilityIgnoresInvertColors       | `boolean \| undefined`                                          | no       | —       |             |
| accessibilityLabel                     | `string \| undefined`                                           | no       | —       |             |
| accessibilityLabelledBy                | `string \| string[] \| undefined`                               | no       | —       |             |
| accessibilityLanguage                  | `string \| undefined`                                           | no       | —       |             |
| accessibilityLargeContentTitle         | `string \| undefined`                                           | no       | —       |             |
| accessibilityLiveRegion                | `'none' \| 'polite' \| 'assertive' \| undefined`                | no       | —       |             |
| accessibilityRespondsToUserInteraction | `boolean \| undefined`                                          | no       | —       |             |
| accessibilityRole                      | `AccessibilityRole \| undefined`                                | no       | —       |             |
| accessibilityShowsLargeContentViewer   | `boolean \| undefined`                                          | no       | —       |             |
| accessibilityState                     | `AccessibilityState \| undefined`                               | no       | —       |             |
| accessibilityValue                     | `AccessibilityValue \| undefined`                               | no       | —       |             |
| accessibilityViewIsModal               | `boolean \| undefined`                                          | no       | —       |             |
| accessible                             | `boolean \| undefined`                                          | no       | —       |             |
| allowFontScaling                       | `boolean \| undefined`                                          | no       | —       |             |
| aria-busy                              | `boolean \| undefined`                                          | no       | —       |             |
| aria-checked                           | `boolean \| 'mixed' \| undefined`                               | no       | —       |             |
| aria-disabled                          | `boolean \| undefined`                                          | no       | —       |             |
| aria-expanded                          | `boolean \| undefined`                                          | no       | —       |             |
| aria-hidden                            | `boolean \| undefined`                                          | no       | —       |             |
| aria-label                             | `string \| undefined`                                           | no       | —       |             |
| aria-labelledby                        | `string \| undefined`                                           | no       | —       |             |
| aria-live                              | `('polite' \| 'assertive' \| 'off') \| undefined`               | no       | —       |             |
| aria-modal                             | `boolean \| undefined`                                          | no       | —       |             |
| aria-selected                          | `boolean \| undefined`                                          | no       | —       |             |
| aria-valuemax                          | `AccessibilityValue['max'] \| undefined`                        | no       | —       |             |
| aria-valuemin                          | `AccessibilityValue['min'] \| undefined`                        | no       | —       |             |
| aria-valuenow                          | `AccessibilityValue['now'] \| undefined`                        | no       | —       |             |
| aria-valuetext                         | `AccessibilityValue['text'] \| undefined`                       | no       | —       |             |
| autoCapitalize                         | `'none' \| 'sentences' \| 'words' \| 'characters' \| undefined` | no       | —       |             |
| autoComplete                           | `\| '2fa-app-otp'                                               |

    \| 'additional-name'
    \| 'address-line1'
    \| 'address-line2'
    \| 'birthdate-day'
    \| 'birthdate-full'
    \| 'birthdate-month'
    \| 'birthdate-year'
    \| 'cc-csc'
    \| 'cc-exp'
    \| 'cc-exp-day'
    \| 'cc-exp-month'
    \| 'cc-exp-year'
    \| 'cc-number'
    \| 'cc-name'
    \| 'cc-given-name'
    \| 'cc-middle-name'
    \| 'cc-family-name'
    \| 'cc-type'
    \| 'country'
    \| 'current-password'
    \| 'email'
    \| 'email-otp'
    \| 'flight-confirmation-code'
    \| 'flight-number'
    \| 'family-name'
    \| 'gender'
    \| 'gift-card-number'
    \| 'gift-card-pin'
    \| 'given-name'
    \| 'honorific-prefix'
    \| 'honorific-suffix'
    \| 'loyalty-account-number'
    \| 'name'
    \| 'name-family'
    \| 'name-given'
    \| 'name-middle'
    \| 'name-middle-initial'
    \| 'name-prefix'
    \| 'name-suffix'
    \| 'new-password'
    \| 'nickname'
    \| 'one-time-code'
    \| 'organization'
    \| 'organization-title'
    \| 'password'
    \| 'password-new'
    \| 'postal-address'
    \| 'postal-address-country'
    \| 'postal-address-dependent-locality'
    \| 'postal-address-extended'
    \| 'postal-address-extended-postal-code'
    \| 'postal-address-locality'
    \| 'postal-address-region'
    \| 'postal-address-unit'
    \| 'postal-code'
    \| 'promo-code'
    \| 'street-address'
    \| 'sms-otp'
    \| 'tel'
    \| 'tel-country-code'
    \| 'tel-national'
    \| 'tel-device'
    \| 'upi-vpa'
    \| 'url'
    \| 'wifi-password'
    \| 'username'
    \| 'username-new'
    \| 'off'
    \| undefined` | no | — |  |

| autoCorrect | `boolean \| undefined` | no | — | |
| autoFocus | `boolean \| undefined` | no | — | |
| blurOnSubmit | `boolean \| undefined` | no | — | |
| caretHidden | `boolean \| undefined` | no | — | |
| children | `React.ReactNode \| undefined` | no | — | |
| clearButtonMode | `\| 'never'
    \| 'while-editing'
    \| 'unless-editing'
    \| 'always'
    \| undefined` | no | — | |
| clearTextOnFocus | `boolean \| undefined` | no | — | |
| collapsable | `boolean \| undefined` | no | — | |
| collapsableChildren | `boolean \| undefined` | no | — | |
| contextMenuHidden | `boolean \| undefined` | no | — | |
| cursorColor | `ColorValue \| null \| undefined` | no | — | |
| dataDetectorTypes | `DataDetectorTypes \| DataDetectorTypes[] \| undefined` | no | — | |
| defaultValue | `string \| undefined` | no | — | |
| disabled | `boolean \| undefined` | no | — | |
| disableFullscreenUI | `boolean \| undefined` | no | — | |
| disableKeyboardShortcuts | `boolean \| undefined` | no | — | |
| enablesReturnKeyAutomatically | `boolean \| undefined` | no | — | |
| enterKeyHint | `EnterKeyHintTypeOptions \| undefined` | no | — | |
| focusable | `boolean \| undefined` | no | — | |
| hasTVPreferredFocus | `boolean \| undefined` | no | — | |
| hitSlop | `null \| Insets \| number \| undefined` | no | — | |
| id | `string \| undefined` | no | — | |
| importantForAccessibility | `\| ('auto' \| 'yes' \| 'no' \| 'no-hide-descendants')
    \| undefined` | no | — | |
| importantForAutofill | `\| 'auto'
    \| 'no'
    \| 'noExcludeDescendants'
    \| 'yes'
    \| 'yesExcludeDescendants'
    \| undefined` | no | — | |
| inlineImageLeft | `string \| undefined` | no | — | |
| inlineImagePadding | `number \| undefined` | no | — | |
| inputAccessoryViewButtonLabel | `string \| undefined` | no | — | |
| inputAccessoryViewID | `string \| undefined` | no | — | |
| inputMode | `InputModeOptions \| undefined` | no | — | |
| interactionPolicy | `InteractionPolicy \| undefined` | no | — | |
| invalid | `boolean \| undefined` | no | — | |
| isTVSelectable | `boolean \| undefined` | no | — | |
| keyboardAppearance | `'default' \| 'light' \| 'dark' \| undefined` | no | — | |
| keyboardType | `KeyboardTypeOptions \| undefined` | no | — | |
| leadingAccessory | `React.ReactNode \| undefined` | no | — | |
| lineBreakModeIOS | `\| 'wordWrapping'
    \| 'char'
    \| 'clip'
    \| 'head'
    \| 'middle'
    \| 'tail'
    \| undefined` | no | — | |
| lineBreakStrategyIOS | `\| 'none'
    \| 'standard'
    \| 'hangul-word'
    \| 'push-out'
    \| undefined` | no | — | |
| maxFontSizeMultiplier | `number \| null \| undefined` | no | — | |
| maxLength | `number \| undefined` | no | — | |
| nativeID | `string \| undefined` | no | — | |
| needsOffscreenAlphaCompositing | `boolean \| undefined` | no | — | |
| numberOfLines | `number \| undefined` | no | — | |
| onAccessibilityAction | `\| ((event: AccessibilityActionEvent) => void)
    \| undefined` | no | — | |
| onAccessibilityEscape | `(() => void) \| undefined` | no | — | |
| onAccessibilityTap | `(() => void) \| undefined` | no | — | |
| onBlur | `((e: BlurEvent) => void) \| undefined` | no | — | |
| onChange | `((e: TextInputChangeEvent) => void) \| undefined` | no | — | |
| onChangeText | `((text: string) => void) \| undefined` | no | — | |
| onContentSizeChange | `\| ((e: TextInputContentSizeChangeEvent) => void)
    \| undefined` | no | — | |
| onEndEditing | `((e: TextInputEndEditingEvent) => void) \| undefined` | no | — | |
| onFocus | `((e: FocusEvent) => void) \| undefined` | no | — | |
| onKeyPress | `((e: TextInputKeyPressEvent) => void) \| undefined` | no | — | |
| onLayout | `((event: LayoutChangeEvent) => void) \| undefined` | no | — | |
| onMagicTap | `(() => void) \| undefined` | no | — | |
| onMoveShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onMoveShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onPointerCancel | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerCancelCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDown | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDownCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnter | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnterCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeave | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeaveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMove | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMoveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUp | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUpCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPress | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined` | no | — | |
| onPressIn | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined` | no | — | |
| onPressOut | `\| ((e: NativeSyntheticEvent<NativeTouchEvent>) => void)
    \| undefined` | no | — | |
| onResponderEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderGrant | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderReject | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderRelease | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminate | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminationRequest | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onScroll | `((e: TextInputScrollEvent) => void) \| undefined` | no | — | |
| onSelectionChange | `((e: TextInputSelectionChangeEvent) => void) \| undefined` | no | — | |
| onStartShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onStartShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onSubmitEditing | `((e: TextInputSubmitEditingEvent) => void) \| undefined` | no | — | |
| onTouchCancel | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEndCapture | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| passwordRules | `string \| null \| undefined` | no | — | |
| placeholder | `string \| undefined` | no | — | |
| pointerEvents | `'box-none' \| 'none' \| 'box-only' \| 'auto' \| undefined` | no | — | |
| readOnly | `boolean \| undefined` | no | — | |
| rejectResponderTermination | `boolean \| null \| undefined` | no | — | |
| removeClippedSubviews | `boolean \| undefined` | no | — | |
| renderToHardwareTextureAndroid | `boolean \| undefined` | no | — | |
| returnKeyLabel | `string \| undefined` | no | — | |
| returnKeyType | `ReturnKeyTypeOptions \| undefined` | no | — | |
| role | `Role \| undefined` | no | — | |
| rows | `number \| undefined` | no | `4` | |
| screenReaderFocusable | `boolean \| undefined` | no | — | |
| scrollEnabled | `boolean \| undefined` | no | — | |
| secureTextEntry | `boolean \| undefined` | no | — | |
| selection | `{start: number; end?: number \| undefined} \| undefined` | no | — | |
| selectionColor | `ColorValue \| undefined` | no | — | |
| selectionHandleColor | `ColorValue \| null \| undefined` | no | — | |
| selectionState | `DocumentSelectionState \| undefined` | no | — | |
| selectTextOnFocus | `boolean \| undefined` | no | — | |
| shouldRasterizeIOS | `boolean \| undefined` | no | — | |
| showSoftInputOnFocus | `boolean \| undefined` | no | — | |
| size | `ControlSize \| undefined` | no | — | |
| smartInsertDelete | `boolean \| undefined` | no | — | |
| spellCheck | `boolean \| undefined` | no | — | |
| style | `StyleProp<TextStyle> \| undefined` | no | — | |
| submitBehavior | `SubmitBehavior \| undefined` | no | — | |
| tabIndex | `0 \| -1 \| undefined` | no | — | |
| testID | `string \| undefined` | no | — | |
| textAlign | `'left' \| 'center' \| 'right' \| undefined` | no | — | |
| textAlignVertical | `'auto' \| 'top' \| 'bottom' \| 'center' \| undefined` | no | — | |
| textBreakStrategy | `'simple' \| 'highQuality' \| 'balanced' \| undefined` | no | — | |
| textContentType | `\| 'none'
    \| 'URL'
    \| 'addressCity'
    \| 'addressCityAndState'
    \| 'addressState'
    \| 'countryName'
    \| 'creditCardNumber'
    \| 'creditCardExpiration'
    \| 'creditCardExpirationMonth'
    \| 'creditCardExpirationYear'
    \| 'creditCardSecurityCode'
    \| 'creditCardType'
    \| 'creditCardName'
    \| 'creditCardGivenName'
    \| 'creditCardMiddleName'
    \| 'creditCardFamilyName'
    \| 'emailAddress'
    \| 'familyName'
    \| 'fullStreetAddress'
    \| 'givenName'
    \| 'jobTitle'
    \| 'location'
    \| 'middleName'
    \| 'name'
    \| 'namePrefix'
    \| 'nameSuffix'
    \| 'nickname'
    \| 'organizationName'
    \| 'postalCode'
    \| 'streetAddressLine1'
    \| 'streetAddressLine2'
    \| 'sublocality'
    \| 'telephoneNumber'
    \| 'username'
    \| 'password'
    \| 'newPassword'
    \| 'oneTimeCode'
    \| 'birthdate'
    \| 'birthdateDay'
    \| 'birthdateMonth'
    \| 'birthdateYear'
    \| 'cellularEID'
    \| 'cellularIMEI'
    \| 'dateTime'
    \| 'flightNumber'
    \| 'shipmentTrackingNumber'
    \| undefined` | no | — | |
| trailingAccessory | `React.ReactNode \| undefined` | no | — | |
| tvParallaxMagnification | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceX | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceY | `number \| undefined` | no | — | |
| tvParallaxTiltAngle | `number \| undefined` | no | — | |
| underlineColorAndroid | `ColorValue \| undefined` | no | — | |
| value | `string \| undefined` | no | — | |
| verticalAlign | `'auto' \| 'top' \| 'bottom' \| 'middle' \| undefined` | no | — | |

## TextInput

Source: `src/features/form/text-input/adapters/inbound/TextInput.tsx:10:1`

Renders a token-aware text input with controlled interaction policy.

Export paths: `src/index.ts`

| Prop                                   | Type                                                            | Required | Default | Description |
| -------------------------------------- | --------------------------------------------------------------- | -------- | ------- | ----------- |
| accessibilityActions                   | `ReadonlyArray<AccessibilityActionInfo> \| undefined`           | no       | —       |             |
| accessibilityElementsHidden            | `boolean \| undefined`                                          | no       | —       |             |
| accessibilityHint                      | `string \| undefined`                                           | no       | —       |             |
| accessibilityIgnoresInvertColors       | `boolean \| undefined`                                          | no       | —       |             |
| accessibilityLabel                     | `string \| undefined`                                           | no       | —       |             |
| accessibilityLabelledBy                | `string \| string[] \| undefined`                               | no       | —       |             |
| accessibilityLanguage                  | `string \| undefined`                                           | no       | —       |             |
| accessibilityLargeContentTitle         | `string \| undefined`                                           | no       | —       |             |
| accessibilityLiveRegion                | `'none' \| 'polite' \| 'assertive' \| undefined`                | no       | —       |             |
| accessibilityRespondsToUserInteraction | `boolean \| undefined`                                          | no       | —       |             |
| accessibilityRole                      | `AccessibilityRole \| undefined`                                | no       | —       |             |
| accessibilityShowsLargeContentViewer   | `boolean \| undefined`                                          | no       | —       |             |
| accessibilityState                     | `AccessibilityState \| undefined`                               | no       | —       |             |
| accessibilityValue                     | `AccessibilityValue \| undefined`                               | no       | —       |             |
| accessibilityViewIsModal               | `boolean \| undefined`                                          | no       | —       |             |
| accessible                             | `boolean \| undefined`                                          | no       | —       |             |
| allowFontScaling                       | `boolean \| undefined`                                          | no       | —       |             |
| aria-busy                              | `boolean \| undefined`                                          | no       | —       |             |
| aria-checked                           | `boolean \| 'mixed' \| undefined`                               | no       | —       |             |
| aria-disabled                          | `boolean \| undefined`                                          | no       | —       |             |
| aria-expanded                          | `boolean \| undefined`                                          | no       | —       |             |
| aria-hidden                            | `boolean \| undefined`                                          | no       | —       |             |
| aria-label                             | `string \| undefined`                                           | no       | —       |             |
| aria-labelledby                        | `string \| undefined`                                           | no       | —       |             |
| aria-live                              | `('polite' \| 'assertive' \| 'off') \| undefined`               | no       | —       |             |
| aria-modal                             | `boolean \| undefined`                                          | no       | —       |             |
| aria-selected                          | `boolean \| undefined`                                          | no       | —       |             |
| aria-valuemax                          | `AccessibilityValue['max'] \| undefined`                        | no       | —       |             |
| aria-valuemin                          | `AccessibilityValue['min'] \| undefined`                        | no       | —       |             |
| aria-valuenow                          | `AccessibilityValue['now'] \| undefined`                        | no       | —       |             |
| aria-valuetext                         | `AccessibilityValue['text'] \| undefined`                       | no       | —       |             |
| autoCapitalize                         | `'none' \| 'sentences' \| 'words' \| 'characters' \| undefined` | no       | —       |             |
| autoComplete                           | `\| '2fa-app-otp'                                               |

    \| 'additional-name'
    \| 'address-line1'
    \| 'address-line2'
    \| 'birthdate-day'
    \| 'birthdate-full'
    \| 'birthdate-month'
    \| 'birthdate-year'
    \| 'cc-csc'
    \| 'cc-exp'
    \| 'cc-exp-day'
    \| 'cc-exp-month'
    \| 'cc-exp-year'
    \| 'cc-number'
    \| 'cc-name'
    \| 'cc-given-name'
    \| 'cc-middle-name'
    \| 'cc-family-name'
    \| 'cc-type'
    \| 'country'
    \| 'current-password'
    \| 'email'
    \| 'email-otp'
    \| 'flight-confirmation-code'
    \| 'flight-number'
    \| 'family-name'
    \| 'gender'
    \| 'gift-card-number'
    \| 'gift-card-pin'
    \| 'given-name'
    \| 'honorific-prefix'
    \| 'honorific-suffix'
    \| 'loyalty-account-number'
    \| 'name'
    \| 'name-family'
    \| 'name-given'
    \| 'name-middle'
    \| 'name-middle-initial'
    \| 'name-prefix'
    \| 'name-suffix'
    \| 'new-password'
    \| 'nickname'
    \| 'one-time-code'
    \| 'organization'
    \| 'organization-title'
    \| 'password'
    \| 'password-new'
    \| 'postal-address'
    \| 'postal-address-country'
    \| 'postal-address-dependent-locality'
    \| 'postal-address-extended'
    \| 'postal-address-extended-postal-code'
    \| 'postal-address-locality'
    \| 'postal-address-region'
    \| 'postal-address-unit'
    \| 'postal-code'
    \| 'promo-code'
    \| 'street-address'
    \| 'sms-otp'
    \| 'tel'
    \| 'tel-country-code'
    \| 'tel-national'
    \| 'tel-device'
    \| 'upi-vpa'
    \| 'url'
    \| 'wifi-password'
    \| 'username'
    \| 'username-new'
    \| 'off'
    \| undefined` | no | — |  |

| autoCorrect | `boolean \| undefined` | no | — | |
| autoFocus | `boolean \| undefined` | no | — | |
| blurOnSubmit | `boolean \| undefined` | no | — | |
| caretHidden | `boolean \| undefined` | no | — | |
| children | `React.ReactNode \| undefined` | no | — | |
| clearButtonMode | `\| 'never'
    \| 'while-editing'
    \| 'unless-editing'
    \| 'always'
    \| undefined` | no | — | |
| clearTextOnFocus | `boolean \| undefined` | no | — | |
| collapsable | `boolean \| undefined` | no | — | |
| collapsableChildren | `boolean \| undefined` | no | — | |
| contextMenuHidden | `boolean \| undefined` | no | — | |
| cursorColor | `ColorValue \| null \| undefined` | no | — | |
| dataDetectorTypes | `DataDetectorTypes \| DataDetectorTypes[] \| undefined` | no | — | |
| defaultValue | `string \| undefined` | no | — | |
| disabled | `boolean \| undefined` | no | — | |
| disableFullscreenUI | `boolean \| undefined` | no | — | |
| disableKeyboardShortcuts | `boolean \| undefined` | no | — | |
| enablesReturnKeyAutomatically | `boolean \| undefined` | no | — | |
| enterKeyHint | `EnterKeyHintTypeOptions \| undefined` | no | — | |
| focusable | `boolean \| undefined` | no | — | |
| hasTVPreferredFocus | `boolean \| undefined` | no | — | |
| hitSlop | `null \| Insets \| number \| undefined` | no | — | |
| id | `string \| undefined` | no | — | |
| importantForAccessibility | `\| ('auto' \| 'yes' \| 'no' \| 'no-hide-descendants')
    \| undefined` | no | — | |
| importantForAutofill | `\| 'auto'
    \| 'no'
    \| 'noExcludeDescendants'
    \| 'yes'
    \| 'yesExcludeDescendants'
    \| undefined` | no | — | |
| inlineImageLeft | `string \| undefined` | no | — | |
| inlineImagePadding | `number \| undefined` | no | — | |
| inputAccessoryViewButtonLabel | `string \| undefined` | no | — | |
| inputAccessoryViewID | `string \| undefined` | no | — | |
| inputMode | `InputModeOptions \| undefined` | no | — | |
| interactionPolicy | `InteractionPolicy \| undefined` | no | — | |
| invalid | `boolean \| undefined` | no | — | |
| isTVSelectable | `boolean \| undefined` | no | — | |
| keyboardAppearance | `'default' \| 'light' \| 'dark' \| undefined` | no | — | |
| keyboardType | `KeyboardTypeOptions \| undefined` | no | — | |
| leadingAccessory | `React.ReactNode \| undefined` | no | — | |
| lineBreakModeIOS | `\| 'wordWrapping'
    \| 'char'
    \| 'clip'
    \| 'head'
    \| 'middle'
    \| 'tail'
    \| undefined` | no | — | |
| lineBreakStrategyIOS | `\| 'none'
    \| 'standard'
    \| 'hangul-word'
    \| 'push-out'
    \| undefined` | no | — | |
| maxFontSizeMultiplier | `number \| null \| undefined` | no | — | |
| maxLength | `number \| undefined` | no | — | |
| multiline | `boolean \| undefined` | no | — | |
| nativeID | `string \| undefined` | no | — | |
| needsOffscreenAlphaCompositing | `boolean \| undefined` | no | — | |
| numberOfLines | `number \| undefined` | no | — | |
| onAccessibilityAction | `\| ((event: AccessibilityActionEvent) => void)
    \| undefined` | no | — | |
| onAccessibilityEscape | `(() => void) \| undefined` | no | — | |
| onAccessibilityTap | `(() => void) \| undefined` | no | — | |
| onBlur | `((e: BlurEvent) => void) \| undefined` | no | — | |
| onChange | `((e: TextInputChangeEvent) => void) \| undefined` | no | — | |
| onChangeText | `((text: string) => void) \| undefined` | no | — | |
| onContentSizeChange | `\| ((e: TextInputContentSizeChangeEvent) => void)
    \| undefined` | no | — | |
| onEndEditing | `((e: TextInputEndEditingEvent) => void) \| undefined` | no | — | |
| onFocus | `((e: FocusEvent) => void) \| undefined` | no | — | |
| onKeyPress | `((e: TextInputKeyPressEvent) => void) \| undefined` | no | — | |
| onLayout | `((event: LayoutChangeEvent) => void) \| undefined` | no | — | |
| onMagicTap | `(() => void) \| undefined` | no | — | |
| onMoveShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onMoveShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onPointerCancel | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerCancelCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDown | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerDownCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnter | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerEnterCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeave | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerLeaveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMove | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerMoveCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUp | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPointerUpCapture | `((event: PointerEvent) => void) \| undefined` | no | — | |
| onPress | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined` | no | — | |
| onPressIn | `((e: NativeSyntheticEvent<NativeTouchEvent>) => void) \| undefined` | no | — | |
| onPressOut | `\| ((e: NativeSyntheticEvent<NativeTouchEvent>) => void)
    \| undefined` | no | — | |
| onResponderEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderGrant | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderReject | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderRelease | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminate | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onResponderTerminationRequest | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onScroll | `((e: TextInputScrollEvent) => void) \| undefined` | no | — | |
| onSelectionChange | `((e: TextInputSelectionChangeEvent) => void) \| undefined` | no | — | |
| onStartShouldSetResponder | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onStartShouldSetResponderCapture | `\| ((event: GestureResponderEvent) => boolean)
    \| undefined` | no | — | |
| onSubmitEditing | `((e: TextInputSubmitEditingEvent) => void) \| undefined` | no | — | |
| onTouchCancel | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEnd | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchEndCapture | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchMove | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| onTouchStart | `((event: GestureResponderEvent) => void) \| undefined` | no | — | |
| passwordRules | `string \| null \| undefined` | no | — | |
| placeholder | `string \| undefined` | no | — | |
| pointerEvents | `'box-none' \| 'none' \| 'box-only' \| 'auto' \| undefined` | no | — | |
| readOnly | `boolean \| undefined` | no | — | |
| rejectResponderTermination | `boolean \| null \| undefined` | no | — | |
| removeClippedSubviews | `boolean \| undefined` | no | — | |
| renderToHardwareTextureAndroid | `boolean \| undefined` | no | — | |
| returnKeyLabel | `string \| undefined` | no | — | |
| returnKeyType | `ReturnKeyTypeOptions \| undefined` | no | — | |
| role | `Role \| undefined` | no | — | |
| screenReaderFocusable | `boolean \| undefined` | no | — | |
| scrollEnabled | `boolean \| undefined` | no | — | |
| secureTextEntry | `boolean \| undefined` | no | — | |
| selection | `{start: number; end?: number \| undefined} \| undefined` | no | — | |
| selectionColor | `ColorValue \| undefined` | no | — | |
| selectionHandleColor | `ColorValue \| null \| undefined` | no | — | |
| selectionState | `DocumentSelectionState \| undefined` | no | — | |
| selectTextOnFocus | `boolean \| undefined` | no | — | |
| shouldRasterizeIOS | `boolean \| undefined` | no | — | |
| showSoftInputOnFocus | `boolean \| undefined` | no | — | |
| size | `ControlSize \| undefined` | no | — | |
| smartInsertDelete | `boolean \| undefined` | no | — | |
| spellCheck | `boolean \| undefined` | no | — | |
| style | `StyleProp<TextStyle> \| undefined` | no | — | |
| submitBehavior | `SubmitBehavior \| undefined` | no | — | |
| tabIndex | `0 \| -1 \| undefined` | no | — | |
| testID | `string \| undefined` | no | — | |
| textAlign | `'left' \| 'center' \| 'right' \| undefined` | no | — | |
| textAlignVertical | `'auto' \| 'top' \| 'bottom' \| 'center' \| undefined` | no | — | |
| textBreakStrategy | `'simple' \| 'highQuality' \| 'balanced' \| undefined` | no | — | |
| textContentType | `\| 'none'
    \| 'URL'
    \| 'addressCity'
    \| 'addressCityAndState'
    \| 'addressState'
    \| 'countryName'
    \| 'creditCardNumber'
    \| 'creditCardExpiration'
    \| 'creditCardExpirationMonth'
    \| 'creditCardExpirationYear'
    \| 'creditCardSecurityCode'
    \| 'creditCardType'
    \| 'creditCardName'
    \| 'creditCardGivenName'
    \| 'creditCardMiddleName'
    \| 'creditCardFamilyName'
    \| 'emailAddress'
    \| 'familyName'
    \| 'fullStreetAddress'
    \| 'givenName'
    \| 'jobTitle'
    \| 'location'
    \| 'middleName'
    \| 'name'
    \| 'namePrefix'
    \| 'nameSuffix'
    \| 'nickname'
    \| 'organizationName'
    \| 'postalCode'
    \| 'streetAddressLine1'
    \| 'streetAddressLine2'
    \| 'sublocality'
    \| 'telephoneNumber'
    \| 'username'
    \| 'password'
    \| 'newPassword'
    \| 'oneTimeCode'
    \| 'birthdate'
    \| 'birthdateDay'
    \| 'birthdateMonth'
    \| 'birthdateYear'
    \| 'cellularEID'
    \| 'cellularIMEI'
    \| 'dateTime'
    \| 'flightNumber'
    \| 'shipmentTrackingNumber'
    \| undefined` | no | — | |
| trailingAccessory | `React.ReactNode \| undefined` | no | — | |
| tvParallaxMagnification | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceX | `number \| undefined` | no | — | |
| tvParallaxShiftDistanceY | `number \| undefined` | no | — | |
| tvParallaxTiltAngle | `number \| undefined` | no | — | |
| underlineColorAndroid | `ColorValue \| undefined` | no | — | |
| value | `string \| undefined` | no | — | |
| verticalAlign | `'auto' \| 'top' \| 'bottom' \| 'middle' \| undefined` | no | — | |

## ThemeContext

Source: `src/theme/ThemeContext.tsx:13:14`

Export paths: `src/index.ts`

| Prop     | Type                                                                                                                                                                                                                                  | Required | Default | Description |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- | ----------- |
| children | `ReactNode`                                                                                                                                                                                                                           | no       | —       |             |
| value    | `{ theme: import("../../../src").SurfaceTheme; mode: "light" \| "dark"; setThemeConfig: (config: Partial<import("@ankhorage/contracts").ThemeConfig>) => void; setMode: (mode: "light" \| "dark") => void; _hasProvider?: boolean; }` | yes      | —       |             |

## ThemeProvider

Source: `src/theme/ThemeContext.tsx:31:14`

Export paths: `src/index.ts`

| Prop          | Type                                | Required | Default   | Description |
| ------------- | ----------------------------------- | -------- | --------- | ----------- |
| children      | `React.ReactNode \| undefined`      | no       | —         |             |
| initialConfig | `Partial<ThemeConfig> \| undefined` | no       | —         |             |
| initialMode   | `'light' \| 'dark' \| undefined`    | no       | `'light'` |             |

## Toast

Source: `src/features/toast/adapters/inbound/Toast.tsx:13:1`

Renders one transient toast notification.

Export paths: `src/index.ts`

| Prop              | Type                             | Required | Default     | Description |
| ----------------- | -------------------------------- | -------- | ----------- | ----------- |
| description       | `React.ReactNode \| undefined`   | no       | —           |             |
| interactionPolicy | `InteractionPolicy \| undefined` | no       | `'enabled'` |             |
| onDismiss         | `(() => void) \| undefined`      | no       | —           |             |
| status            | `ToastStatus \| undefined`       | no       | `'default'` |             |
| testID            | `string \| undefined`            | no       | —           |             |
| title             | `React.ReactNode \| undefined`   | no       | —           |             |

## ToastProvider

Source: `src/features/toast/adapters/inbound/ToastProvider.tsx:14:1`

Provides toast state, timers, and the shared toast portal host.

Export paths: `src/index.ts`

| Prop            | Type                           | Required | Default | Description |
| --------------- | ------------------------------ | -------- | ------- | ----------- |
| children        | `React.ReactNode \| undefined` | no       | —       |             |
| defaultDuration | `number \| undefined`          | no       | `4000`  |             |

## Tooltip

Source: `src/components/tooltip/Tooltip.tsx:27:1`

Export paths: `src/index.ts`

| Prop              | Type                             | Required | Default     | Description |
| ----------------- | -------------------------------- | -------- | ----------- | ----------- |
| children          | `React.ReactNode \| undefined`   | no       | —           |             |
| content           | `React.ReactNode \| undefined`   | no       | —           |             |
| delay             | `number \| undefined`            | no       | `150`       |             |
| interactionPolicy | `InteractionPolicy \| undefined` | no       | `'enabled'` |             |
| placement         | `'top' \| 'bottom' \| undefined` | no       | `'top'`     |             |
| testID            | `string \| undefined`            | no       | —           |             |

## TranslationProvider

Source: `src/context/TranslationContext.tsx:27:1`

Export paths: `src/index.ts`

| Prop     | Type                                | Required | Default | Description |
| -------- | ----------------------------------- | -------- | ------- | ----------- |
| children | `React.ReactNode \| undefined`      | no       | —       |             |
| i18n     | `I18nInstance \| null \| undefined` | no       | —       |             |
| t        | `Translator`                        | yes      | —       |             |
