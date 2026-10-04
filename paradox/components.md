# Components

## Accordion

Source: `src/features/accordion/adapters/inbound/Accordion.tsx:14:1`

Coordinates controlled or uncontrolled accordion expansion state.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityActions | `ReadonlyArray<AccessibilityActionInfo> \| undefined` | no | — |  |
| accessibilityElementsHidden | `boolean \| undefined` | no | — |  |
| accessibilityHint | `string \| undefined` | no | — |  |
| accessibilityIgnoresInvertColors | `boolean \| undefined` | no | — |  |
| accessibilityLabel | `string \| undefined` | no | — |  |
| accessibilityLabelledBy | `(string \| undefined) \| (Array<string> \| undefined) \| undefined` | no | — |  |
| accessibilityLanguage | `string \| undefined` | no | — |  |
| accessibilityLargeContentTitle | `string \| undefined` | no | — |  |
| accessibilityLiveRegion | `("none" \| "polite" \| "assertive") \| undefined` | no | — |  |
| accessibilityRespondsToUserInteraction | `boolean \| undefined` | no | — |  |
| accessibilityRole | `AccessibilityRole \| undefined` | no | — |  |
| accessibilityShowsLargeContentViewer | `boolean \| undefined` | no | — |  |
| accessibilityState | `AccessibilityState \| undefined` | no | — |  |
| accessibilityValue | `AccessibilityValue \| undefined` | no | — |  |
| accessibilityViewIsModal | `boolean \| undefined` | no | — |  |
| accessible | `boolean \| undefined` | no | — |  |
| aria-busy | `boolean \| undefined` | no | — |  |
| aria-checked | `(boolean \| undefined) \| "mixed" \| undefined` | no | — |  |
| aria-disabled | `boolean \| undefined` | no | — |  |
| aria-expanded | `boolean \| undefined` | no | — |  |
| aria-hidden | `boolean \| undefined` | no | — |  |
| aria-label | `string \| undefined` | no | — |  |
| aria-labelledby | `string \| undefined` | no | — |  |
| aria-live | `("polite" \| "assertive" \| "off") \| undefined` | no | — |  |
| aria-modal | `boolean \| undefined` | no | — |  |
| aria-selected | `boolean \| undefined` | no | — |  |
| aria-valuemax | `AccessibilityValue["max"] \| undefined` | no | — |  |
| aria-valuemin | `AccessibilityValue["min"] \| undefined` | no | — |  |
| aria-valuenow | `AccessibilityValue["now"] \| undefined` | no | — |  |
| aria-valuetext | `AccessibilityValue["text"] \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| collapsable | `boolean \| undefined` | no | — |  |
| collapsableChildren | `boolean \| undefined` | no | — |  |
| collapsible | `never \| undefined` | no | — |  |
| defaultValue | `readonly string[] \| undefined` | no | — |  |
| disabled | `boolean \| undefined` | no | — |  |
| experimental_accessibilityOrder | `Array<string> \| undefined` | no | — |  |
| focusable | `boolean \| undefined` | no | — |  |
| hasTVPreferredFocus | `boolean \| undefined` | no | — |  |
| hitSlop | `EdgeInsetsOrSizeProp \| undefined` | no | — |  |
| id | `string \| undefined` | no | — |  |
| importantForAccessibility | `("auto" \| "yes" \| "no" \| "no-hide-descendants") \| undefined` | no | — |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | — |  |
| nativeBackgroundAndroid | `AndroidDrawable \| undefined` | no | — |  |
| nativeForegroundAndroid | `AndroidDrawable \| undefined` | no | — |  |
| nativeID | `string \| undefined` | no | — |  |
| needsOffscreenAlphaCompositing | `boolean \| undefined` | no | — |  |
| nextFocusDown | `number \| undefined` | no | — |  |
| nextFocusForward | `number \| undefined` | no | — |  |
| nextFocusLeft | `number \| undefined` | no | — |  |
| nextFocusRight | `number \| undefined` | no | — |  |
| nextFocusUp | `number \| undefined` | no | — |  |
| onAccessibilityAction | `((event: AccessibilityActionEvent) => unknown) \| undefined` | no | — |  |
| onAccessibilityEscape | `(() => unknown) \| undefined` | no | — |  |
| onAccessibilityTap | `(() => unknown) \| undefined` | no | — |  |
| onBlur | `((event: BlurEvent) => void) \| undefined` | no | — |  |
| onBlurCapture | `((event: BlurEvent) => void) \| undefined` | no | — |  |
| onClick | `((event: GestureResponderEvent) => unknown) \| undefined` | no | — |  |
| onClickCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onFocus | `((event: FocusEvent) => void) \| undefined` | no | — |  |
| onFocusCapture | `((event: FocusEvent) => void) \| undefined` | no | — |  |
| onGotPointerCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onGotPointerCaptureCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onKeyDown | `((event: KeyDownEvent) => void) \| undefined` | no | — |  |
| onKeyDownCapture | `((event: KeyDownEvent) => void) \| undefined` | no | — |  |
| onKeyUp | `((event: KeyUpEvent) => void) \| undefined` | no | — |  |
| onKeyUpCapture | `((event: KeyUpEvent) => void) \| undefined` | no | — |  |
| onLayout | `((event: LayoutChangeEvent) => unknown) \| undefined` | no | — |  |
| onLostPointerCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onLostPointerCaptureCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onMagicTap | `(() => unknown) \| undefined` | no | — |  |
| onMouseEnter | `((event: MouseEvent) => void) \| undefined` | no | — |  |
| onMouseLeave | `((event: MouseEvent) => void) \| undefined` | no | — |  |
| onMoveShouldSetResponder | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onMoveShouldSetResponderCapture | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onPointerCancel | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerCancelCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerDown | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerDownCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerEnter | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerEnterCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerLeave | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerLeaveCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerMove | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerMoveCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOut | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOutCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOver | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOverCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerUp | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerUpCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onResponderEnd | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderGrant | `((e: GestureResponderEvent) => void \| boolean) \| undefined` | no | — |  |
| onResponderMove | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderReject | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderRelease | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderStart | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderTerminate | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderTerminationRequest | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onStartShouldSetResponder | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onStartShouldSetResponderCapture | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onTouchCancel | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchCancelCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchEnd | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchEndCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchMove | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchMoveCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchStart | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchStartCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onValueChange | `(value: readonly string[]) => void \| undefined` | no | — |  |
| pointerEvents | `("auto" \| "box-none" \| "box-only" \| "none") \| undefined` | no | — |  |
| removeClippedSubviews | `boolean \| undefined` | no | — |  |
| renderToHardwareTextureAndroid | `boolean \| undefined` | no | — |  |
| role | `Role \| undefined` | no | — |  |
| screenReaderFocusable | `boolean \| undefined` | no | — |  |
| shouldRasterizeIOS | `boolean \| undefined` | no | — |  |
| style | `ViewStyleProp \| undefined` | no | — |  |
| tabIndex | `0 \| -1 \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| type | `'multiple' \| undefined` | no | — |  |
| value | `readonly string[] \| undefined` | no | — |  |

## AccordionContent

Source: `src/features/accordion/adapters/inbound/AccordionContent.tsx:8:1`

Renders an accordion item's content when expanded or force-mounted.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityActions | `ReadonlyArray<AccessibilityActionInfo> \| undefined` | no | — |  |
| accessibilityElementsHidden | `boolean \| undefined` | no | — |  |
| accessibilityHint | `string \| undefined` | no | — |  |
| accessibilityIgnoresInvertColors | `boolean \| undefined` | no | — |  |
| accessibilityLabel | `string \| undefined` | no | — |  |
| accessibilityLabelledBy | `(string \| undefined) \| (Array<string> \| undefined) \| undefined` | no | — |  |
| accessibilityLanguage | `string \| undefined` | no | — |  |
| accessibilityLargeContentTitle | `string \| undefined` | no | — |  |
| accessibilityLiveRegion | `("none" \| "polite" \| "assertive") \| undefined` | no | — |  |
| accessibilityRespondsToUserInteraction | `boolean \| undefined` | no | — |  |
| accessibilityRole | `AccessibilityRole \| undefined` | no | — |  |
| accessibilityShowsLargeContentViewer | `boolean \| undefined` | no | — |  |
| accessibilityState | `AccessibilityState \| undefined` | no | — |  |
| accessibilityValue | `AccessibilityValue \| undefined` | no | — |  |
| accessibilityViewIsModal | `boolean \| undefined` | no | — |  |
| accessible | `boolean \| undefined` | no | — |  |
| aria-busy | `boolean \| undefined` | no | — |  |
| aria-checked | `(boolean \| undefined) \| "mixed" \| undefined` | no | — |  |
| aria-disabled | `boolean \| undefined` | no | — |  |
| aria-expanded | `boolean \| undefined` | no | — |  |
| aria-hidden | `boolean \| undefined` | no | — |  |
| aria-label | `string \| undefined` | no | — |  |
| aria-labelledby | `string \| undefined` | no | — |  |
| aria-live | `("polite" \| "assertive" \| "off") \| undefined` | no | — |  |
| aria-modal | `boolean \| undefined` | no | — |  |
| aria-selected | `boolean \| undefined` | no | — |  |
| aria-valuemax | `AccessibilityValue["max"] \| undefined` | no | — |  |
| aria-valuemin | `AccessibilityValue["min"] \| undefined` | no | — |  |
| aria-valuenow | `AccessibilityValue["now"] \| undefined` | no | — |  |
| aria-valuetext | `AccessibilityValue["text"] \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| collapsable | `boolean \| undefined` | no | — |  |
| collapsableChildren | `boolean \| undefined` | no | — |  |
| experimental_accessibilityOrder | `Array<string> \| undefined` | no | — |  |
| focusable | `boolean \| undefined` | no | — |  |
| forceMount | `boolean \| undefined` | no | `false` |  |
| hasTVPreferredFocus | `boolean \| undefined` | no | — |  |
| hitSlop | `EdgeInsetsOrSizeProp \| undefined` | no | — |  |
| id | `string \| undefined` | no | — |  |
| importantForAccessibility | `("auto" \| "yes" \| "no" \| "no-hide-descendants") \| undefined` | no | — |  |
| nativeBackgroundAndroid | `AndroidDrawable \| undefined` | no | — |  |
| nativeForegroundAndroid | `AndroidDrawable \| undefined` | no | — |  |
| nativeID | `string \| undefined` | no | — |  |
| needsOffscreenAlphaCompositing | `boolean \| undefined` | no | — |  |
| nextFocusDown | `number \| undefined` | no | — |  |
| nextFocusForward | `number \| undefined` | no | — |  |
| nextFocusLeft | `number \| undefined` | no | — |  |
| nextFocusRight | `number \| undefined` | no | — |  |
| nextFocusUp | `number \| undefined` | no | — |  |
| onAccessibilityAction | `((event: AccessibilityActionEvent) => unknown) \| undefined` | no | — |  |
| onAccessibilityEscape | `(() => unknown) \| undefined` | no | — |  |
| onAccessibilityTap | `(() => unknown) \| undefined` | no | — |  |
| onBlur | `((event: BlurEvent) => void) \| undefined` | no | — |  |
| onBlurCapture | `((event: BlurEvent) => void) \| undefined` | no | — |  |
| onClick | `((event: GestureResponderEvent) => unknown) \| undefined` | no | — |  |
| onClickCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onFocus | `((event: FocusEvent) => void) \| undefined` | no | — |  |
| onFocusCapture | `((event: FocusEvent) => void) \| undefined` | no | — |  |
| onGotPointerCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onGotPointerCaptureCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onKeyDown | `((event: KeyDownEvent) => void) \| undefined` | no | — |  |
| onKeyDownCapture | `((event: KeyDownEvent) => void) \| undefined` | no | — |  |
| onKeyUp | `((event: KeyUpEvent) => void) \| undefined` | no | — |  |
| onKeyUpCapture | `((event: KeyUpEvent) => void) \| undefined` | no | — |  |
| onLayout | `((event: LayoutChangeEvent) => unknown) \| undefined` | no | — |  |
| onLostPointerCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onLostPointerCaptureCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onMagicTap | `(() => unknown) \| undefined` | no | — |  |
| onMouseEnter | `((event: MouseEvent) => void) \| undefined` | no | — |  |
| onMouseLeave | `((event: MouseEvent) => void) \| undefined` | no | — |  |
| onMoveShouldSetResponder | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onMoveShouldSetResponderCapture | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onPointerCancel | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerCancelCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerDown | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerDownCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerEnter | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerEnterCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerLeave | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerLeaveCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerMove | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerMoveCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOut | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOutCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOver | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOverCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerUp | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerUpCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onResponderEnd | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderGrant | `((e: GestureResponderEvent) => void \| boolean) \| undefined` | no | — |  |
| onResponderMove | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderReject | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderRelease | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderStart | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderTerminate | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderTerminationRequest | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onStartShouldSetResponder | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onStartShouldSetResponderCapture | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onTouchCancel | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchCancelCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchEnd | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchEndCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchMove | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchMoveCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchStart | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchStartCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| pointerEvents | `("auto" \| "box-none" \| "box-only" \| "none") \| undefined` | no | — |  |
| removeClippedSubviews | `boolean \| undefined` | no | — |  |
| renderToHardwareTextureAndroid | `boolean \| undefined` | no | — |  |
| role | `Role \| undefined` | no | — |  |
| screenReaderFocusable | `boolean \| undefined` | no | — |  |
| shouldRasterizeIOS | `boolean \| undefined` | no | — |  |
| style | `ViewStyleProp \| undefined` | no | — |  |
| tabIndex | `0 \| -1 \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |

## AccordionItem

Source: `src/features/accordion/adapters/inbound/AccordionItem.tsx:9:1`

Provides one accordion item's value, state, and trigger/content identifiers.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityActions | `ReadonlyArray<AccessibilityActionInfo> \| undefined` | no | — |  |
| accessibilityElementsHidden | `boolean \| undefined` | no | — |  |
| accessibilityHint | `string \| undefined` | no | — |  |
| accessibilityIgnoresInvertColors | `boolean \| undefined` | no | — |  |
| accessibilityLabel | `string \| undefined` | no | — |  |
| accessibilityLabelledBy | `(string \| undefined) \| (Array<string> \| undefined) \| undefined` | no | — |  |
| accessibilityLanguage | `string \| undefined` | no | — |  |
| accessibilityLargeContentTitle | `string \| undefined` | no | — |  |
| accessibilityLiveRegion | `("none" \| "polite" \| "assertive") \| undefined` | no | — |  |
| accessibilityRespondsToUserInteraction | `boolean \| undefined` | no | — |  |
| accessibilityRole | `AccessibilityRole \| undefined` | no | — |  |
| accessibilityShowsLargeContentViewer | `boolean \| undefined` | no | — |  |
| accessibilityState | `AccessibilityState \| undefined` | no | — |  |
| accessibilityValue | `AccessibilityValue \| undefined` | no | — |  |
| accessibilityViewIsModal | `boolean \| undefined` | no | — |  |
| accessible | `boolean \| undefined` | no | — |  |
| aria-busy | `boolean \| undefined` | no | — |  |
| aria-checked | `(boolean \| undefined) \| "mixed" \| undefined` | no | — |  |
| aria-disabled | `boolean \| undefined` | no | — |  |
| aria-expanded | `boolean \| undefined` | no | — |  |
| aria-hidden | `boolean \| undefined` | no | — |  |
| aria-label | `string \| undefined` | no | — |  |
| aria-labelledby | `string \| undefined` | no | — |  |
| aria-live | `("polite" \| "assertive" \| "off") \| undefined` | no | — |  |
| aria-modal | `boolean \| undefined` | no | — |  |
| aria-selected | `boolean \| undefined` | no | — |  |
| aria-valuemax | `AccessibilityValue["max"] \| undefined` | no | — |  |
| aria-valuemin | `AccessibilityValue["min"] \| undefined` | no | — |  |
| aria-valuenow | `AccessibilityValue["now"] \| undefined` | no | — |  |
| aria-valuetext | `AccessibilityValue["text"] \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| collapsable | `boolean \| undefined` | no | — |  |
| collapsableChildren | `boolean \| undefined` | no | — |  |
| disabled | `boolean \| undefined` | no | `false` |  |
| experimental_accessibilityOrder | `Array<string> \| undefined` | no | — |  |
| focusable | `boolean \| undefined` | no | — |  |
| hasTVPreferredFocus | `boolean \| undefined` | no | — |  |
| hitSlop | `EdgeInsetsOrSizeProp \| undefined` | no | — |  |
| id | `string \| undefined` | no | — |  |
| importantForAccessibility | `("auto" \| "yes" \| "no" \| "no-hide-descendants") \| undefined` | no | — |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | — |  |
| nativeBackgroundAndroid | `AndroidDrawable \| undefined` | no | — |  |
| nativeForegroundAndroid | `AndroidDrawable \| undefined` | no | — |  |
| nativeID | `string \| undefined` | no | — |  |
| needsOffscreenAlphaCompositing | `boolean \| undefined` | no | — |  |
| nextFocusDown | `number \| undefined` | no | — |  |
| nextFocusForward | `number \| undefined` | no | — |  |
| nextFocusLeft | `number \| undefined` | no | — |  |
| nextFocusRight | `number \| undefined` | no | — |  |
| nextFocusUp | `number \| undefined` | no | — |  |
| onAccessibilityAction | `((event: AccessibilityActionEvent) => unknown) \| undefined` | no | — |  |
| onAccessibilityEscape | `(() => unknown) \| undefined` | no | — |  |
| onAccessibilityTap | `(() => unknown) \| undefined` | no | — |  |
| onBlur | `((event: BlurEvent) => void) \| undefined` | no | — |  |
| onBlurCapture | `((event: BlurEvent) => void) \| undefined` | no | — |  |
| onClick | `((event: GestureResponderEvent) => unknown) \| undefined` | no | — |  |
| onClickCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onFocus | `((event: FocusEvent) => void) \| undefined` | no | — |  |
| onFocusCapture | `((event: FocusEvent) => void) \| undefined` | no | — |  |
| onGotPointerCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onGotPointerCaptureCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onKeyDown | `((event: KeyDownEvent) => void) \| undefined` | no | — |  |
| onKeyDownCapture | `((event: KeyDownEvent) => void) \| undefined` | no | — |  |
| onKeyUp | `((event: KeyUpEvent) => void) \| undefined` | no | — |  |
| onKeyUpCapture | `((event: KeyUpEvent) => void) \| undefined` | no | — |  |
| onLayout | `((event: LayoutChangeEvent) => unknown) \| undefined` | no | — |  |
| onLostPointerCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onLostPointerCaptureCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onMagicTap | `(() => unknown) \| undefined` | no | — |  |
| onMouseEnter | `((event: MouseEvent) => void) \| undefined` | no | — |  |
| onMouseLeave | `((event: MouseEvent) => void) \| undefined` | no | — |  |
| onMoveShouldSetResponder | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onMoveShouldSetResponderCapture | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onPointerCancel | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerCancelCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerDown | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerDownCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerEnter | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerEnterCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerLeave | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerLeaveCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerMove | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerMoveCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOut | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOutCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOver | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOverCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerUp | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerUpCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onResponderEnd | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderGrant | `((e: GestureResponderEvent) => void \| boolean) \| undefined` | no | — |  |
| onResponderMove | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderReject | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderRelease | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderStart | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderTerminate | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderTerminationRequest | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onStartShouldSetResponder | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onStartShouldSetResponderCapture | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onTouchCancel | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchCancelCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchEnd | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchEndCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchMove | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchMoveCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchStart | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchStartCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| pointerEvents | `("auto" \| "box-none" \| "box-only" \| "none") \| undefined` | no | — |  |
| removeClippedSubviews | `boolean \| undefined` | no | — |  |
| renderToHardwareTextureAndroid | `boolean \| undefined` | no | — |  |
| role | `Role \| undefined` | no | — |  |
| screenReaderFocusable | `boolean \| undefined` | no | — |  |
| shouldRasterizeIOS | `boolean \| undefined` | no | — |  |
| style | `ViewStyleProp \| undefined` | no | — |  |
| tabIndex | `0 \| -1 \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| value | `string` | yes | — |  |

## AccordionTrigger

Source: `src/features/accordion/adapters/inbound/AccordionTrigger.tsx:8:1`

Renders the accessible button that toggles its owning accordion item.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityActions | `ReadonlyArray<AccessibilityActionInfo> \| undefined` | no | — |  |
| accessibilityElementsHidden | `boolean \| undefined` | no | — |  |
| accessibilityHint | `string \| undefined` | no | — |  |
| accessibilityIgnoresInvertColors | `boolean \| undefined` | no | — |  |
| accessibilityLabel | `string \| undefined` | no | — |  |
| accessibilityLabelledBy | `(string \| undefined) \| (Array<string> \| undefined) \| undefined` | no | — |  |
| accessibilityLanguage | `string \| undefined` | no | — |  |
| accessibilityLargeContentTitle | `string \| undefined` | no | — |  |
| accessibilityLiveRegion | `("none" \| "polite" \| "assertive") \| undefined` | no | — |  |
| accessibilityRespondsToUserInteraction | `boolean \| undefined` | no | — |  |
| accessibilityShowsLargeContentViewer | `boolean \| undefined` | no | — |  |
| accessibilityValue | `AccessibilityValue \| undefined` | no | — |  |
| accessibilityViewIsModal | `boolean \| undefined` | no | — |  |
| accessible | `boolean \| undefined` | no | — |  |
| android_disableSound | `boolean \| undefined` | no | — |  |
| android_ripple | `PressableAndroidRippleConfig \| undefined` | no | — |  |
| aria-busy | `boolean \| undefined` | no | — |  |
| aria-checked | `(boolean \| undefined) \| "mixed" \| undefined` | no | — |  |
| aria-disabled | `boolean \| undefined` | no | — |  |
| aria-expanded | `boolean \| undefined` | no | — |  |
| aria-hidden | `boolean \| undefined` | no | — |  |
| aria-label | `string \| undefined` | no | — |  |
| aria-labelledby | `string \| undefined` | no | — |  |
| aria-live | `("polite" \| "assertive" \| "off") \| undefined` | no | — |  |
| aria-modal | `boolean \| undefined` | no | — |  |
| aria-selected | `boolean \| undefined` | no | — |  |
| aria-valuemax | `AccessibilityValue["max"] \| undefined` | no | — |  |
| aria-valuemin | `AccessibilityValue["min"] \| undefined` | no | — |  |
| aria-valuenow | `AccessibilityValue["now"] \| undefined` | no | — |  |
| aria-valuetext | `AccessibilityValue["text"] \| undefined` | no | — |  |
| blockNativeResponder | `boolean \| undefined` | no | — |  |
| cancelable | `boolean \| undefined` | no | — |  |
| children | `PressableProps['children'] \| undefined` | no | — |  |
| collapsable | `boolean \| undefined` | no | — |  |
| collapsableChildren | `boolean \| undefined` | no | — |  |
| delayHoverIn | `number \| undefined` | no | — |  |
| delayHoverOut | `number \| undefined` | no | — |  |
| delayLongPress | `number \| undefined` | no | — |  |
| disabled | `boolean \| undefined` | no | `false` |  |
| experimental_accessibilityOrder | `Array<string> \| undefined` | no | — |  |
| focusable | `boolean \| undefined` | no | — |  |
| hasTVPreferredFocus | `boolean \| undefined` | no | — |  |
| hitSlop | `RectOrSize \| undefined` | no | — |  |
| id | `string \| undefined` | no | — |  |
| importantForAccessibility | `("auto" \| "yes" \| "no" \| "no-hide-descendants") \| undefined` | no | — |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | — |  |
| nativeBackgroundAndroid | `AndroidDrawable \| undefined` | no | — |  |
| nativeForegroundAndroid | `AndroidDrawable \| undefined` | no | — |  |
| nativeID | `string \| undefined` | no | — |  |
| needsOffscreenAlphaCompositing | `boolean \| undefined` | no | — |  |
| nextFocusDown | `number \| undefined` | no | — |  |
| nextFocusForward | `number \| undefined` | no | — |  |
| nextFocusLeft | `number \| undefined` | no | — |  |
| nextFocusRight | `number \| undefined` | no | — |  |
| nextFocusUp | `number \| undefined` | no | — |  |
| onAccessibilityAction | `((event: AccessibilityActionEvent) => unknown) \| undefined` | no | — |  |
| onAccessibilityEscape | `(() => unknown) \| undefined` | no | — |  |
| onAccessibilityTap | `(() => unknown) \| undefined` | no | — |  |
| onBlur | `((event: BlurEvent) => void) \| undefined` | no | — |  |
| onBlurCapture | `((event: BlurEvent) => void) \| undefined` | no | — |  |
| onClick | `((event: GestureResponderEvent) => unknown) \| undefined` | no | — |  |
| onClickCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onFocus | `((event: FocusEvent) => void) \| undefined` | no | — |  |
| onFocusCapture | `((event: FocusEvent) => void) \| undefined` | no | — |  |
| onGotPointerCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onGotPointerCaptureCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onHoverIn | `((event: MouseEvent) => unknown) \| undefined` | no | — |  |
| onHoverOut | `((event: MouseEvent) => unknown) \| undefined` | no | — |  |
| onKeyDown | `((event: KeyDownEvent) => void) \| undefined` | no | — |  |
| onKeyDownCapture | `((event: KeyDownEvent) => void) \| undefined` | no | — |  |
| onKeyUp | `((event: KeyUpEvent) => void) \| undefined` | no | — |  |
| onKeyUpCapture | `((event: KeyUpEvent) => void) \| undefined` | no | — |  |
| onLayout | `((event: LayoutChangeEvent) => unknown) \| undefined` | no | — |  |
| onLongPress | `((event: GestureResponderEvent) => unknown) \| undefined` | no | — |  |
| onLostPointerCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onLostPointerCaptureCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onMagicTap | `(() => unknown) \| undefined` | no | — |  |
| onMoveShouldSetResponder | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onMoveShouldSetResponderCapture | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onPointerCancel | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerCancelCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerDown | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerDownCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerEnter | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerEnterCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerLeave | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerLeaveCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerMove | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerMoveCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOut | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOutCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOver | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOverCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerUp | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerUpCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPressIn | `((event: GestureResponderEvent) => unknown) \| undefined` | no | — |  |
| onPressMove | `((event: GestureResponderEvent) => unknown) \| undefined` | no | — |  |
| onPressOut | `((event: GestureResponderEvent) => unknown) \| undefined` | no | — |  |
| onResponderEnd | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderGrant | `((e: GestureResponderEvent) => void \| boolean) \| undefined` | no | — |  |
| onResponderMove | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderReject | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderRelease | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderStart | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderTerminate | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderTerminationRequest | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onStartShouldSetResponder | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onStartShouldSetResponderCapture | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onTouchCancel | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchCancelCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchEnd | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchEndCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchMove | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchMoveCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchStart | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchStartCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| pointerEvents | `("auto" \| "box-none" \| "box-only" \| "none") \| undefined` | no | — |  |
| pressRetentionOffset | `RectOrSize \| undefined` | no | — |  |
| removeClippedSubviews | `boolean \| undefined` | no | — |  |
| renderToHardwareTextureAndroid | `boolean \| undefined` | no | — |  |
| role | `Role \| undefined` | no | — |  |
| screenReaderFocusable | `boolean \| undefined` | no | — |  |
| shouldRasterizeIOS | `boolean \| undefined` | no | — |  |
| style | `ViewStyleProp \| ((state: PressableStateCallbackType) => ViewStyleProp) \| undefined` | no | — |  |
| tabIndex | `0 \| -1 \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| testOnly_pressed | `boolean \| undefined` | no | — |  |
| unstable_pressDelay | `number \| undefined` | no | — |  |

## AppBar

Source: `src/features/app-bar/adapters/inbound/AppBar.tsx:10:1`

Renders application chrome with optional safe-area padding and leading/trailing slots.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined` | no | — |  |
| accessibilityLabelledBy | `ReactNativeViewProps['accessibilityLabelledBy'] \| undefined` | no | — |  |
| accessibilityRole | `ReactNativeViewProps['accessibilityRole'] \| undefined` | no | — |  |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined` | no | — |  |
| accessible | `ReactNativeViewProps['accessible'] \| undefined` | no | — |  |
| align | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no | — |  |
| alignSelf | `Responsive<ViewStyle['alignSelf']> \| undefined` | no | — |  |
| bg | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderColor | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderWidth | `Responsive<number> \| undefined` | no | — |  |
| bottom | `Responsive<number> \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| columnGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| contentStyle | `StyleProp<ViewStyle> \| undefined` | no | — |  |
| direction | `Responsive<'row' \| 'column'> \| undefined` | no | — |  |
| divider | `boolean \| undefined` | no | `false` |  |
| flex | `Responsive<number> \| undefined` | no | — |  |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — |  |
| flexGrow | `Responsive<number> \| undefined` | no | — |  |
| flexShrink | `Responsive<number> \| undefined` | no | — |  |
| gap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| height | `Responsive<number \| string> \| undefined` | no | — |  |
| justify | `Responsive<
    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'
  > \| undefined` | no | — |  |
| leading | `React.ReactNode \| undefined` | no | — |  |
| left | `Responsive<number> \| undefined` | no | — |  |
| m | `Responsive<SpaceValue> \| undefined` | no | — |  |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| mb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| minHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| minWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| ml | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mx | `Responsive<SpaceValue> \| undefined` | no | — |  |
| my | `Responsive<SpaceValue> \| undefined` | no | — |  |
| nativeID | `ReactNativeViewProps['nativeID'] \| undefined` | no | — |  |
| opacity | `Responsive<number> \| undefined` | no | — |  |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — |  |
| p | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pl | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pointerEvents | `ReactNativeViewProps['pointerEvents'] \| undefined` | no | — |  |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — |  |
| pr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| px | `Responsive<SpaceValue> \| undefined` | no | — |  |
| py | `Responsive<SpaceValue> \| undefined` | no | — |  |
| radius | `Responsive<RadiusValue> \| undefined` | no | — |  |
| right | `Responsive<number> \| undefined` | no | — |  |
| rowGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| safeAreaTop | `boolean \| undefined` | no | `true` |  |
| style | `StyleProp<ViewStyle> \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| top | `Responsive<number> \| undefined` | no | — |  |
| trailing | `React.ReactNode \| undefined` | no | — |  |
| width | `Responsive<number \| string> \| undefined` | no | — |  |
| wrap | `Responsive<'nowrap' \| 'wrap'> \| undefined` | no | — |  |
| zIndex | `Responsive<number> \| undefined` | no | — |  |

## Badge

Source: `src/features/badge/adapters/inbound/Badge.tsx:11:1`

Renders compact semantic status or metadata content.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| color | `SurfaceColor \| undefined` | no | `'primary'` |  |
| content | `React.ReactNode \| undefined` | no | — |  |
| size | `ControlSize \| undefined` | no | `'s'` |  |
| testID | `string \| undefined` | no | — |  |
| variant | `Extract<ButtonVariant, 'solid' \| 'soft' \| 'outline'> \| undefined` | no | `'soft'` |  |

## Button

Source: `src/features/button/adapters/inbound/Button.tsx:19:1`

Renders the primary Surface action control with semantic visual states.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityLabelledBy | `ReactNativeViewProps['accessibilityLabelledBy'] \| undefined` | no | — |  |
| accessibilityRole | `AccessibilityRole \| undefined` | no | — |  |
| accessibilityState | `AccessibilityState \| undefined` | no | — |  |
| accessible | `ReactNativeViewProps['accessible'] \| undefined` | no | — |  |
| align | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no | — |  |
| alignSelf | `Responsive<ViewStyle['alignSelf']> \| undefined` | no | — |  |
| bg | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderColor | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderWidth | `Responsive<number> \| undefined` | no | — |  |
| bottom | `Responsive<number> \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| color | `SurfaceColor \| undefined` | no | `'primary'` |  |
| columnGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| direction | `Responsive<'row' \| 'column'> \| undefined` | no | — |  |
| disabled | `boolean \| undefined` | no | `false` |  |
| flex | `Responsive<number> \| undefined` | no | — |  |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — |  |
| flexGrow | `Responsive<number> \| undefined` | no | — |  |
| flexShrink | `Responsive<number> \| undefined` | no | — |  |
| fullWidth | `boolean \| undefined` | no | `false` |  |
| gap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| height | `Responsive<number \| string> \| undefined` | no | — |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | — |  |
| justify | `Responsive<
    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'
  > \| undefined` | no | — |  |
| leadingIcon | `ButtonIconSpec \| undefined` | no | — |  |
| left | `Responsive<number> \| undefined` | no | — |  |
| loading | `boolean \| undefined` | no | `false` |  |
| m | `Responsive<SpaceValue> \| undefined` | no | — |  |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| mb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| minHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| minWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| ml | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mx | `Responsive<SpaceValue> \| undefined` | no | — |  |
| my | `Responsive<SpaceValue> \| undefined` | no | — |  |
| nativeID | `ReactNativeViewProps['nativeID'] \| undefined` | no | — |  |
| onLongPress | `((event: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onPress | `((event: GestureResponderEvent) => void) \| undefined` | no | — |  |
| opacity | `Responsive<number> \| undefined` | no | — |  |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — |  |
| p | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pl | `Responsive<SpaceValue> \| undefined` | no | — |  |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — |  |
| pr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| px | `Responsive<SpaceValue> \| undefined` | no | — |  |
| py | `Responsive<SpaceValue> \| undefined` | no | — |  |
| radius | `Responsive<RadiusValue> \| undefined` | no | — |  |
| right | `Responsive<number> \| undefined` | no | — |  |
| rowGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| size | `ControlSize \| undefined` | no | `'m'` |  |
| testID | `string \| undefined` | no | — |  |
| top | `Responsive<number> \| undefined` | no | — |  |
| trailingIcon | `ButtonIconSpec \| undefined` | no | — |  |
| variant | `ButtonVariant \| undefined` | no | `'solid'` |  |
| width | `Responsive<number \| string> \| undefined` | no | — |  |
| wrap | `Responsive<'nowrap' \| 'wrap'> \| undefined` | no | — |  |
| zIndex | `Responsive<number> \| undefined` | no | — |  |

## Card

Source: `src/features/card/adapters/inbound/Card.tsx:11:1`

Renders a themed content card with optional interactive press states.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined` | no | — |  |
| accessibilityLabelledBy | `ReactNativeViewProps['accessibilityLabelledBy'] \| undefined` | no | — |  |
| accessibilityRole | `ReactNativeViewProps['accessibilityRole'] \| undefined` | no | — |  |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined` | no | — |  |
| accessible | `ReactNativeViewProps['accessible'] \| undefined` | no | — |  |
| align | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no | — |  |
| alignSelf | `Responsive<ViewStyle['alignSelf']> \| undefined` | no | — |  |
| bottom | `Responsive<number> \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| columnGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| direction | `Responsive<'row' \| 'column'> \| undefined` | no | — |  |
| disabled | `boolean \| undefined` | no | `false` |  |
| flex | `Responsive<number> \| undefined` | no | — |  |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — |  |
| flexGrow | `Responsive<number> \| undefined` | no | — |  |
| flexShrink | `Responsive<number> \| undefined` | no | — |  |
| gap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| height | `Responsive<number \| string> \| undefined` | no | — |  |
| justify | `Responsive<
    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'
  > \| undefined` | no | — |  |
| left | `Responsive<number> \| undefined` | no | — |  |
| m | `Responsive<SpaceValue> \| undefined` | no | — |  |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| mb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| minHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| minWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| ml | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mx | `Responsive<SpaceValue> \| undefined` | no | — |  |
| my | `Responsive<SpaceValue> \| undefined` | no | — |  |
| nativeID | `ReactNativeViewProps['nativeID'] \| undefined` | no | — |  |
| onPress | `(() => void) \| undefined` | no | — |  |
| opacity | `Responsive<number> \| undefined` | no | — |  |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — |  |
| p | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pl | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pointerEvents | `ReactNativeViewProps['pointerEvents'] \| undefined` | no | — |  |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — |  |
| pr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| px | `Responsive<SpaceValue> \| undefined` | no | — |  |
| py | `Responsive<SpaceValue> \| undefined` | no | — |  |
| radius | `Responsive<RadiusValue> \| undefined` | no | — |  |
| right | `Responsive<number> \| undefined` | no | — |  |
| rowGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| style | `StyleProp<ViewStyle> \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| top | `Responsive<number> \| undefined` | no | — |  |
| variant | `SurfaceVariant \| undefined` | no | `'default'` |  |
| width | `Responsive<number \| string> \| undefined` | no | — |  |
| wrap | `Responsive<'nowrap' \| 'wrap'> \| undefined` | no | — |  |
| zIndex | `Responsive<number> \| undefined` | no | — |  |

## Checkbox

Source: `src/features/form/checkbox/adapters/inbound/Checkbox.tsx:21:1`

Renders a controlled or uncontrolled accessible checkbox.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityLabel | `string \| undefined` | no | — |  |
| accessibilityLabelledBy | `ReactNativeViewProps['accessibilityLabelledBy'] \| undefined` | no | — |  |
| accessible | `ReactNativeViewProps['accessible'] \| undefined` | no | — |  |
| align | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no | — |  |
| alignSelf | `Responsive<ViewStyle['alignSelf']> \| undefined` | no | — |  |
| bg | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderColor | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderWidth | `Responsive<number> \| undefined` | no | — |  |
| bottom | `Responsive<number> \| undefined` | no | — |  |
| checked | `boolean \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| color | `SurfaceColor \| undefined` | no | `'primary'` |  |
| columnGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| defaultChecked | `boolean \| undefined` | no | `false` |  |
| direction | `Responsive<'row' \| 'column'> \| undefined` | no | — |  |
| disabled | `boolean \| undefined` | no | `false` |  |
| flex | `Responsive<number> \| undefined` | no | — |  |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — |  |
| flexGrow | `Responsive<number> \| undefined` | no | — |  |
| flexShrink | `Responsive<number> \| undefined` | no | — |  |
| gap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| height | `Responsive<number \| string> \| undefined` | no | — |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | — |  |
| invalid | `boolean \| undefined` | no | `false` |  |
| justify | `Responsive<
    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'
  > \| undefined` | no | — |  |
| left | `Responsive<number> \| undefined` | no | — |  |
| m | `Responsive<SpaceValue> \| undefined` | no | — |  |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| mb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| minHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| minWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| ml | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mx | `Responsive<SpaceValue> \| undefined` | no | — |  |
| my | `Responsive<SpaceValue> \| undefined` | no | — |  |
| nativeID | `ReactNativeViewProps['nativeID'] \| undefined` | no | — |  |
| onCheckedChange | `((checked: boolean) => void) \| undefined` | no | — |  |
| onLongPress | `((event: GestureResponderEvent) => void) \| undefined` | no | — |  |
| opacity | `Responsive<number> \| undefined` | no | — |  |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — |  |
| p | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pl | `Responsive<SpaceValue> \| undefined` | no | — |  |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — |  |
| pr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| px | `Responsive<SpaceValue> \| undefined` | no | — |  |
| py | `Responsive<SpaceValue> \| undefined` | no | — |  |
| radius | `Responsive<RadiusValue> \| undefined` | no | — |  |
| readOnly | `boolean \| undefined` | no | `false` |  |
| right | `Responsive<number> \| undefined` | no | — |  |
| rowGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| size | `ControlSize \| undefined` | no | `'m'` |  |
| testID | `string \| undefined` | no | — |  |
| top | `Responsive<number> \| undefined` | no | — |  |
| width | `Responsive<number \| string> \| undefined` | no | — |  |
| wrap | `Responsive<'nowrap' \| 'wrap'> \| undefined` | no | — |  |
| zIndex | `Responsive<number> \| undefined` | no | — |  |

## Divider

Source: `src/features/layout/adapters/inbound/Divider.tsx:7:1`

Renders a horizontal or vertical separator using layout tokens.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined` | no | — |  |
| accessibilityLabelledBy | `ReactNativeViewProps['accessibilityLabelledBy'] \| undefined` | no | — |  |
| accessibilityRole | `ReactNativeViewProps['accessibilityRole'] \| undefined` | no | — |  |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined` | no | — |  |
| accessible | `ReactNativeViewProps['accessible'] \| undefined` | no | — |  |
| align | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no | — |  |
| alignSelf | `Responsive<ViewStyle['alignSelf']> \| undefined` | no | — |  |
| borderColor | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderWidth | `Responsive<number> \| undefined` | no | — |  |
| bottom | `Responsive<number> \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| color | `ColorValue \| undefined` | no | `'border'` |  |
| columnGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| direction | `Responsive<'row' \| 'column'> \| undefined` | no | — |  |
| flex | `Responsive<number> \| undefined` | no | — |  |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — |  |
| flexGrow | `Responsive<number> \| undefined` | no | — |  |
| flexShrink | `Responsive<number> \| undefined` | no | — |  |
| gap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| justify | `Responsive<
    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'
  > \| undefined` | no | — |  |
| left | `Responsive<number> \| undefined` | no | — |  |
| m | `Responsive<SpaceValue> \| undefined` | no | — |  |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| mb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| minHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| minWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| ml | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mx | `Responsive<SpaceValue> \| undefined` | no | — |  |
| my | `Responsive<SpaceValue> \| undefined` | no | — |  |
| nativeID | `ReactNativeViewProps['nativeID'] \| undefined` | no | — |  |
| opacity | `Responsive<number> \| undefined` | no | — |  |
| orientation | `'horizontal' \| 'vertical' \| undefined` | no | `'horizontal'` |  |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — |  |
| p | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pl | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pointerEvents | `ReactNativeViewProps['pointerEvents'] \| undefined` | no | — |  |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — |  |
| pr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| px | `Responsive<SpaceValue> \| undefined` | no | — |  |
| py | `Responsive<SpaceValue> \| undefined` | no | — |  |
| radius | `Responsive<RadiusValue> \| undefined` | no | — |  |
| right | `Responsive<number> \| undefined` | no | — |  |
| rowGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| style | `StyleProp<ViewStyle> \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| thickness | `number \| undefined` | no | `1` |  |
| top | `Responsive<number> \| undefined` | no | — |  |
| wrap | `Responsive<'nowrap' \| 'wrap'> \| undefined` | no | — |  |
| zIndex | `Responsive<number> \| undefined` | no | — |  |

## Field

Source: `src/features/form/field/adapters/inbound/Field.tsx:13:1`

Composes a control with its label and helper or error message.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| children | `React.ReactNode \| undefined` | no | — |  |
| disabled | `boolean \| undefined` | no | `false` |  |
| errorText | `React.ReactNode \| undefined` | no | — |  |
| helperText | `React.ReactNode \| undefined` | no | — |  |
| invalid | `boolean \| undefined` | no | `false` |  |
| label | `React.ReactNode \| undefined` | no | — |  |
| readOnly | `boolean \| undefined` | no | `false` |  |
| required | `boolean \| undefined` | no | `false` |  |
| testID | `string \| undefined` | no | — |  |

## FontProvider

Source: `src/features/font/adapters/inbound/FontProvider.tsx:7:1`

Provide loaded-font state and the active font id to Surface theme composition.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| activeFontId | `string \| null \| undefined` | no | — |  |
| children | `ReactNode \| undefined` | no | — |  |
| fontsLoaded | `boolean` | yes | — |  |
| onActiveFontChange | `(id: string) => void \| undefined` | no | — |  |

## Grid

Source: `src/features/layout/adapters/inbound/Grid.tsx:11:1`

Lays out children in a responsive wrapping grid.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined` | no | — |  |
| accessibilityLabelledBy | `ReactNativeViewProps['accessibilityLabelledBy'] \| undefined` | no | — |  |
| accessibilityRole | `ReactNativeViewProps['accessibilityRole'] \| undefined` | no | — |  |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined` | no | — |  |
| accessible | `ReactNativeViewProps['accessible'] \| undefined` | no | — |  |
| align | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no | — |  |
| alignSelf | `Responsive<ViewStyle['alignSelf']> \| undefined` | no | — |  |
| bg | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderColor | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderWidth | `Responsive<number> \| undefined` | no | — |  |
| bottom | `Responsive<number> \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| colGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| cols | `Responsive<number> \| undefined` | no | — |  |
| columnGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| direction | `Responsive<'row' \| 'column'> \| undefined` | no | — |  |
| flex | `Responsive<number> \| undefined` | no | — |  |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — |  |
| flexGrow | `Responsive<number> \| undefined` | no | — |  |
| flexShrink | `Responsive<number> \| undefined` | no | — |  |
| gap | `Responsive<SpaceValue> \| undefined` | no | `0` |  |
| height | `Responsive<number \| string> \| undefined` | no | — |  |
| justify | `Responsive<
    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'
  > \| undefined` | no | — |  |
| left | `Responsive<number> \| undefined` | no | — |  |
| m | `Responsive<SpaceValue> \| undefined` | no | — |  |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| mb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| minHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| minItemWidth | `Responsive<number> \| undefined` | no | — |  |
| minWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| ml | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mx | `Responsive<SpaceValue> \| undefined` | no | — |  |
| my | `Responsive<SpaceValue> \| undefined` | no | — |  |
| nativeID | `ReactNativeViewProps['nativeID'] \| undefined` | no | — |  |
| opacity | `Responsive<number> \| undefined` | no | — |  |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — |  |
| p | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pl | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pointerEvents | `ReactNativeViewProps['pointerEvents'] \| undefined` | no | — |  |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — |  |
| pr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| px | `Responsive<SpaceValue> \| undefined` | no | — |  |
| py | `Responsive<SpaceValue> \| undefined` | no | — |  |
| radius | `Responsive<RadiusValue> \| undefined` | no | — |  |
| right | `Responsive<number> \| undefined` | no | — |  |
| rowGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| style | `StyleProp<ViewStyle> \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| top | `Responsive<number> \| undefined` | no | — |  |
| width | `Responsive<number \| string> \| undefined` | no | — |  |
| wrap | `Responsive<'nowrap' \| 'wrap'> \| undefined` | no | — |  |
| zIndex | `Responsive<number> \| undefined` | no | — |  |

## Heading

Source: `src/features/typography/adapters/inbound/Heading.tsx:9:1`

Renders a semantic heading using Surface typography tokens.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| align | `'auto' \| 'left' \| 'right' \| 'center' \| 'justify' \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| color | `SurfaceColor \| undefined` | no | — |  |
| emphasis | `SurfaceEmphasis \| undefined` | no | `'default'` |  |
| i18nKey | `string \| undefined` | no | — |  |
| level | `HeadingLevel \| undefined` | no | `2` |  |
| numberOfLines | `number \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| text | `string \| undefined` | no | — |  |

## Icon

Source: `src/features/icon/adapters/inbound/Icon.tsx:10:1`

Renders a theme-aware font or SVG icon through the portable icon adapter.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| color | `keyof SurfaceTheme['colors'] \| string \| undefined` | no | — |  |
| name | `IoniconsIconName \| undefined` | no | — |  |
| provider | `'Ionicons' \| undefined` | no | — |  |
| size | `keyof SurfaceTheme['spacing'] \| number \| undefined` | no | — |  |
| style | `StyleProp<TextStyle> \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| variant | `never \| undefined` | no | — |  |

## IconButton

Source: `src/features/button/adapters/inbound/IconButton.tsx:16:1`

Renders a compact accessible icon-only action control.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityLabel | `string` | yes | — |  |
| accessibilityLabelledBy | `ReactNativeViewProps['accessibilityLabelledBy'] \| undefined` | no | — |  |
| accessibilityRole | `AccessibilityRole \| undefined` | no | — |  |
| accessibilityState | `AccessibilityState \| undefined` | no | — |  |
| accessible | `ReactNativeViewProps['accessible'] \| undefined` | no | — |  |
| align | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no | — |  |
| alignSelf | `Responsive<ViewStyle['alignSelf']> \| undefined` | no | — |  |
| bg | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderColor | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderWidth | `Responsive<number> \| undefined` | no | — |  |
| bottom | `Responsive<number> \| undefined` | no | — |  |
| color | `SurfaceColor \| undefined` | no | `'primary'` |  |
| columnGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| direction | `Responsive<'row' \| 'column'> \| undefined` | no | — |  |
| disabled | `boolean \| undefined` | no | `false` |  |
| flex | `Responsive<number> \| undefined` | no | — |  |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — |  |
| flexGrow | `Responsive<number> \| undefined` | no | — |  |
| flexShrink | `Responsive<number> \| undefined` | no | — |  |
| gap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| height | `Responsive<number \| string> \| undefined` | no | — |  |
| icon | `IconSource` | yes | — |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | — |  |
| justify | `Responsive<
    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'
  > \| undefined` | no | — |  |
| left | `Responsive<number> \| undefined` | no | — |  |
| m | `Responsive<SpaceValue> \| undefined` | no | — |  |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| mb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| minHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| minWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| ml | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mx | `Responsive<SpaceValue> \| undefined` | no | — |  |
| my | `Responsive<SpaceValue> \| undefined` | no | — |  |
| nativeID | `ReactNativeViewProps['nativeID'] \| undefined` | no | — |  |
| onLongPress | `((event: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onPress | `((event: GestureResponderEvent) => void) \| undefined` | no | — |  |
| opacity | `Responsive<number> \| undefined` | no | — |  |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — |  |
| p | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pl | `Responsive<SpaceValue> \| undefined` | no | — |  |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — |  |
| pr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| px | `Responsive<SpaceValue> \| undefined` | no | — |  |
| py | `Responsive<SpaceValue> \| undefined` | no | — |  |
| radius | `Responsive<RadiusValue> \| undefined` | no | — |  |
| right | `Responsive<number> \| undefined` | no | — |  |
| rowGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| size | `ControlSize \| undefined` | no | `'m'` |  |
| testID | `string \| undefined` | no | — |  |
| top | `Responsive<number> \| undefined` | no | — |  |
| variant | `ButtonVariant \| undefined` | no | `'ghost'` |  |
| width | `Responsive<number \| string> \| undefined` | no | — |  |
| wrap | `Responsive<'nowrap' \| 'wrap'> \| undefined` | no | — |  |
| zIndex | `Responsive<number> \| undefined` | no | — |  |

## Image

Source: `src/features/image/adapters/inbound/Image.tsx:15:1`

Renders a token-aware accessible image with optional fallback source.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityLabel | `string \| undefined` | no | — |  |
| alt | `string \| undefined` | no | — |  |
| aspectRatio | `number \| undefined` | no | — |  |
| fallbackSource | `SurfaceImageSource \| null \| undefined` | no | — |  |
| fit | `ImageFit \| undefined` | no | — |  |
| height | `number \| string \| undefined` | no | — |  |
| onError | `ReactNativeImageProps['onError'] \| undefined` | no | — |  |
| radius | `number \| keyof SurfaceTheme['radii'] \| undefined` | no | — |  |
| resizeMode | `ImageResizeMode \| undefined` | no | — |  |
| source | `SurfaceImageSource \| null \| undefined` | no | — |  |
| style | `StyleProp<ImageStyle> \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| width | `number \| string \| undefined` | no | — |  |

## KeyboardAvoidingView

Source: `src/features/keyboard-avoiding-view/adapters/inbound/KeyboardAvoidingView.tsx:7:1`

Preserves React Native keyboard avoidance behind the stable Surface feature boundary.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityActions | `ReadonlyArray<AccessibilityActionInfo> \| undefined` | no | — |  |
| accessibilityElementsHidden | `boolean \| undefined` | no | — |  |
| accessibilityHint | `string \| undefined` | no | — |  |
| accessibilityIgnoresInvertColors | `boolean \| undefined` | no | — |  |
| accessibilityLabel | `string \| undefined` | no | — |  |
| accessibilityLabelledBy | `(string \| undefined) \| (Array<string> \| undefined) \| undefined` | no | — |  |
| accessibilityLanguage | `string \| undefined` | no | — |  |
| accessibilityLargeContentTitle | `string \| undefined` | no | — |  |
| accessibilityLiveRegion | `("none" \| "polite" \| "assertive") \| undefined` | no | — |  |
| accessibilityRespondsToUserInteraction | `boolean \| undefined` | no | — |  |
| accessibilityRole | `AccessibilityRole \| undefined` | no | — |  |
| accessibilityShowsLargeContentViewer | `boolean \| undefined` | no | — |  |
| accessibilityState | `AccessibilityState \| undefined` | no | — |  |
| accessibilityValue | `AccessibilityValue \| undefined` | no | — |  |
| accessibilityViewIsModal | `boolean \| undefined` | no | — |  |
| accessible | `boolean \| undefined` | no | — |  |
| aria-busy | `boolean \| undefined` | no | — |  |
| aria-checked | `(boolean \| undefined) \| "mixed" \| undefined` | no | — |  |
| aria-disabled | `boolean \| undefined` | no | — |  |
| aria-expanded | `boolean \| undefined` | no | — |  |
| aria-hidden | `boolean \| undefined` | no | — |  |
| aria-label | `string \| undefined` | no | — |  |
| aria-labelledby | `string \| undefined` | no | — |  |
| aria-live | `("polite" \| "assertive" \| "off") \| undefined` | no | — |  |
| aria-modal | `boolean \| undefined` | no | — |  |
| aria-selected | `boolean \| undefined` | no | — |  |
| aria-valuemax | `AccessibilityValue["max"] \| undefined` | no | — |  |
| aria-valuemin | `AccessibilityValue["min"] \| undefined` | no | — |  |
| aria-valuenow | `AccessibilityValue["now"] \| undefined` | no | — |  |
| aria-valuetext | `AccessibilityValue["text"] \| undefined` | no | — |  |
| behavior | `("height" \| "position" \| "padding") \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| collapsable | `boolean \| undefined` | no | — |  |
| collapsableChildren | `boolean \| undefined` | no | — |  |
| contentContainerStyle | `ViewStyleProp \| undefined` | no | — |  |
| enabled | `boolean \| undefined` | no | — |  |
| experimental_accessibilityOrder | `Array<string> \| undefined` | no | — |  |
| focusable | `boolean \| undefined` | no | — |  |
| hasTVPreferredFocus | `boolean \| undefined` | no | — |  |
| hitSlop | `EdgeInsetsOrSizeProp \| undefined` | no | — |  |
| id | `string \| undefined` | no | — |  |
| importantForAccessibility | `("auto" \| "yes" \| "no" \| "no-hide-descendants") \| undefined` | no | — |  |
| keyboardVerticalOffset | `number \| undefined` | no | — |  |
| nativeBackgroundAndroid | `AndroidDrawable \| undefined` | no | — |  |
| nativeForegroundAndroid | `AndroidDrawable \| undefined` | no | — |  |
| nativeID | `string \| undefined` | no | — |  |
| needsOffscreenAlphaCompositing | `boolean \| undefined` | no | — |  |
| nextFocusDown | `number \| undefined` | no | — |  |
| nextFocusForward | `number \| undefined` | no | — |  |
| nextFocusLeft | `number \| undefined` | no | — |  |
| nextFocusRight | `number \| undefined` | no | — |  |
| nextFocusUp | `number \| undefined` | no | — |  |
| onAccessibilityAction | `((event: AccessibilityActionEvent) => unknown) \| undefined` | no | — |  |
| onAccessibilityEscape | `(() => unknown) \| undefined` | no | — |  |
| onAccessibilityTap | `(() => unknown) \| undefined` | no | — |  |
| onBlur | `((event: BlurEvent) => void) \| undefined` | no | — |  |
| onBlurCapture | `((event: BlurEvent) => void) \| undefined` | no | — |  |
| onClick | `((event: GestureResponderEvent) => unknown) \| undefined` | no | — |  |
| onClickCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onFocus | `((event: FocusEvent) => void) \| undefined` | no | — |  |
| onFocusCapture | `((event: FocusEvent) => void) \| undefined` | no | — |  |
| onGotPointerCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onGotPointerCaptureCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onKeyDown | `((event: KeyDownEvent) => void) \| undefined` | no | — |  |
| onKeyDownCapture | `((event: KeyDownEvent) => void) \| undefined` | no | — |  |
| onKeyUp | `((event: KeyUpEvent) => void) \| undefined` | no | — |  |
| onKeyUpCapture | `((event: KeyUpEvent) => void) \| undefined` | no | — |  |
| onLayout | `((event: LayoutChangeEvent) => unknown) \| undefined` | no | — |  |
| onLostPointerCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onLostPointerCaptureCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onMagicTap | `(() => unknown) \| undefined` | no | — |  |
| onMouseEnter | `((event: MouseEvent) => void) \| undefined` | no | — |  |
| onMouseLeave | `((event: MouseEvent) => void) \| undefined` | no | — |  |
| onMoveShouldSetResponder | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onMoveShouldSetResponderCapture | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onPointerCancel | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerCancelCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerDown | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerDownCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerEnter | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerEnterCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerLeave | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerLeaveCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerMove | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerMoveCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOut | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOutCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOver | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOverCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerUp | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerUpCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onResponderEnd | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderGrant | `((e: GestureResponderEvent) => void \| boolean) \| undefined` | no | — |  |
| onResponderMove | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderReject | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderRelease | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderStart | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderTerminate | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderTerminationRequest | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onStartShouldSetResponder | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onStartShouldSetResponderCapture | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onTouchCancel | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchCancelCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchEnd | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchEndCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchMove | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchMoveCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchStart | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchStartCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| pointerEvents | `("auto" \| "box-none" \| "box-only" \| "none") \| undefined` | no | — |  |
| removeClippedSubviews | `boolean \| undefined` | no | — |  |
| renderToHardwareTextureAndroid | `boolean \| undefined` | no | — |  |
| role | `Role \| undefined` | no | — |  |
| screenReaderFocusable | `boolean \| undefined` | no | — |  |
| shouldRasterizeIOS | `boolean \| undefined` | no | — |  |
| style | `ViewStyleProp \| undefined` | no | — |  |
| tabIndex | `0 \| -1 \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |

## List

Source: `src/features/list/adapters/inbound/List.tsx:7:1`

Groups list items under one neutral Surface list boundary.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| children | `React.ReactNode \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |

## ListItem

Source: `src/features/list/adapters/inbound/ListItem.tsx:11:1`

Renders a static or interactive list item with shared row geometry and interaction states.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityLabel | `string \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| compact | `boolean \| undefined` | no | — |  |
| description | `React.ReactNode \| undefined` | no | — |  |
| disabled | `boolean \| undefined` | no | — |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | — |  |
| leading | `React.ReactNode \| undefined` | no | — |  |
| onPress | `(() => void) \| undefined` | no | — |  |
| selected | `boolean \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| title | `React.ReactNode \| undefined` | no | — |  |
| trailing | `React.ReactNode \| undefined` | no | — |  |

## Modal

Source: `src/features/modal/adapters/inbound/Modal.tsx:16:1`

Renders the generic Surface modal overlay and focus boundary.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| children | `React.ReactNode \| undefined` | no | — |  |
| closeOnBackdrop | `boolean \| undefined` | no | `true` |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | `'enabled'` |  |
| onDismiss | `(() => void) \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| visible | `boolean` | yes | — |  |

## Popover

Source: `src/features/popover/adapters/inbound/Popover.tsx:9:1`

Renders anchored overlay content through the shared Surface overlay stack.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| anchor | `(controls: PopoverAnchorRenderProps) => React.ReactNode` | yes | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| closeOnOutsidePress | `boolean \| undefined` | no | — |  |
| defaultOpen | `boolean \| undefined` | no | — |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | — |  |
| offset | `number \| undefined` | no | — |  |
| onOpenChange | `((open: boolean) => void) \| undefined` | no | — |  |
| open | `boolean \| undefined` | no | — |  |
| placement | `PopoverPlacement \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |

## PopoverMenu

Source: `src/features/popover-menu/adapters/inbound/PopoverMenu.tsx:16:1`

Presents an anchored action menu using the shared Popover capability.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| actions | `readonly PopoverMenuAction[]` | yes | — |  |
| closeOnSelect | `boolean \| undefined` | no | `true` |  |
| dismiss | `() => void \| undefined` | no | — |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | `'enabled'` |  |
| testID | `string \| undefined` | no | — |  |
| trigger | `(controls: PopoverAnchorRenderProps) => React.ReactNode` | yes | — |  |

## Pressable

Source: `src/features/pressable/adapters/inbound/Pressable.tsx:15:1`

Renders the token-aware Surface adapter for React Native Pressable.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityLabel | `string \| undefined` | no | — |  |
| accessibilityLabelledBy | `ReactNativeViewProps['accessibilityLabelledBy'] \| undefined` | no | — |  |
| accessibilityRole | `AccessibilityRole \| undefined` | no | `'button'` |  |
| accessibilityState | `AccessibilityState \| undefined` | no | — |  |
| accessible | `ReactNativeViewProps['accessible'] \| undefined` | no | — |  |
| align | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no | — |  |
| alignSelf | `Responsive<ViewStyle['alignSelf']> \| undefined` | no | — |  |
| bg | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderColor | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderWidth | `Responsive<number> \| undefined` | no | — |  |
| bottom | `Responsive<number> \| undefined` | no | — |  |
| children | `React.ReactNode \| ((state: InteractionState) => React.ReactNode) \| undefined` | no | — |  |
| columnGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| direction | `Responsive<'row' \| 'column'> \| undefined` | no | — |  |
| disabled | `boolean \| undefined` | no | `false` |  |
| flex | `Responsive<number> \| undefined` | no | — |  |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — |  |
| flexGrow | `Responsive<number> \| undefined` | no | — |  |
| flexShrink | `Responsive<number> \| undefined` | no | — |  |
| gap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| height | `Responsive<number \| string> \| undefined` | no | — |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | `'enabled'` |  |
| justify | `Responsive<
    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'
  > \| undefined` | no | — |  |
| left | `Responsive<number> \| undefined` | no | — |  |
| m | `Responsive<SpaceValue> \| undefined` | no | — |  |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| mb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| minHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| minWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| ml | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mx | `Responsive<SpaceValue> \| undefined` | no | — |  |
| my | `Responsive<SpaceValue> \| undefined` | no | — |  |
| nativeID | `ReactNativeViewProps['nativeID'] \| undefined` | no | — |  |
| onLongPress | `((event: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onPress | `((event: GestureResponderEvent) => void) \| undefined` | no | — |  |
| opacity | `Responsive<number> \| undefined` | no | — |  |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — |  |
| p | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pl | `Responsive<SpaceValue> \| undefined` | no | — |  |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — |  |
| pr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| px | `Responsive<SpaceValue> \| undefined` | no | — |  |
| py | `Responsive<SpaceValue> \| undefined` | no | — |  |
| radius | `Responsive<RadiusValue> \| undefined` | no | — |  |
| right | `Responsive<number> \| undefined` | no | — |  |
| rowGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| style | `StyleProp<ViewStyle> \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| top | `Responsive<number> \| undefined` | no | — |  |
| width | `Responsive<number \| string> \| undefined` | no | — |  |
| wrap | `Responsive<'nowrap' \| 'wrap'> \| undefined` | no | — |  |
| zIndex | `Responsive<number> \| undefined` | no | — |  |

## Radio

Source: `src/features/form/radio/adapters/inbound/Radio.tsx:22:1`

Renders one accessible radio control with text or structured label content.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityLabel | `string \| undefined` | no | — |  |
| accessibilityLabelledBy | `ReactNativeViewProps['accessibilityLabelledBy'] \| undefined` | no | — |  |
| accessible | `ReactNativeViewProps['accessible'] \| undefined` | no | — |  |
| align | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no | — |  |
| alignSelf | `Responsive<ViewStyle['alignSelf']> \| undefined` | no | — |  |
| bg | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderColor | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderWidth | `Responsive<number> \| undefined` | no | — |  |
| bottom | `Responsive<number> \| undefined` | no | — |  |
| checked | `boolean \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| color | `SurfaceColor \| undefined` | no | `'primary'` |  |
| columnGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| defaultChecked | `boolean \| undefined` | no | `false` |  |
| direction | `Responsive<'row' \| 'column'> \| undefined` | no | — |  |
| disabled | `boolean \| undefined` | no | `false` |  |
| flex | `Responsive<number> \| undefined` | no | — |  |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — |  |
| flexGrow | `Responsive<number> \| undefined` | no | — |  |
| flexShrink | `Responsive<number> \| undefined` | no | — |  |
| gap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| height | `Responsive<number \| string> \| undefined` | no | — |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | — |  |
| invalid | `boolean \| undefined` | no | `false` |  |
| justify | `Responsive<
    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'
  > \| undefined` | no | — |  |
| left | `Responsive<number> \| undefined` | no | — |  |
| m | `Responsive<SpaceValue> \| undefined` | no | — |  |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| mb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| minHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| minWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| ml | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mx | `Responsive<SpaceValue> \| undefined` | no | — |  |
| my | `Responsive<SpaceValue> \| undefined` | no | — |  |
| nativeID | `ReactNativeViewProps['nativeID'] \| undefined` | no | — |  |
| onCheckedChange | `((checked: boolean) => void) \| undefined` | no | — |  |
| onLongPress | `((event: GestureResponderEvent) => void) \| undefined` | no | — |  |
| opacity | `Responsive<number> \| undefined` | no | — |  |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — |  |
| p | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pl | `Responsive<SpaceValue> \| undefined` | no | — |  |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — |  |
| pr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| px | `Responsive<SpaceValue> \| undefined` | no | — |  |
| py | `Responsive<SpaceValue> \| undefined` | no | — |  |
| radius | `Responsive<RadiusValue> \| undefined` | no | — |  |
| readOnly | `boolean \| undefined` | no | `false` |  |
| right | `Responsive<number> \| undefined` | no | — |  |
| rowGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| size | `ControlSize \| undefined` | no | `'m'` |  |
| testID | `string \| undefined` | no | — |  |
| top | `Responsive<number> \| undefined` | no | — |  |
| width | `Responsive<number \| string> \| undefined` | no | — |  |
| wrap | `Responsive<'nowrap' \| 'wrap'> \| undefined` | no | — |  |
| zIndex | `Responsive<number> \| undefined` | no | — |  |

## ResponsiveProvider

Source: `src/core/responsive/ResponsiveProvider.tsx:9:1`

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| children | `React.ReactNode \| undefined` | no | — |  |

## ScrollView

Source: `src/features/layout/adapters/inbound/ScrollView.tsx:10:1`

Renders the token-aware responsive Surface adapter for React Native ScrollView.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityActions | `ReadonlyArray<AccessibilityActionInfo> \| undefined` | no | — |  |
| accessibilityElementsHidden | `boolean \| undefined` | no | — |  |
| accessibilityHint | `string \| undefined` | no | — |  |
| accessibilityIgnoresInvertColors | `boolean \| undefined` | no | — |  |
| accessibilityLabel | `string \| undefined` | no | — |  |
| accessibilityLabelledBy | `(string \| undefined) \| (Array<string> \| undefined) \| undefined` | no | — |  |
| accessibilityLanguage | `string \| undefined` | no | — |  |
| accessibilityLargeContentTitle | `string \| undefined` | no | — |  |
| accessibilityLiveRegion | `("none" \| "polite" \| "assertive") \| undefined` | no | — |  |
| accessibilityRespondsToUserInteraction | `boolean \| undefined` | no | — |  |
| accessibilityRole | `AccessibilityRole \| undefined` | no | — |  |
| accessibilityShowsLargeContentViewer | `boolean \| undefined` | no | — |  |
| accessibilityState | `AccessibilityState \| undefined` | no | — |  |
| accessibilityValue | `AccessibilityValue \| undefined` | no | — |  |
| accessibilityViewIsModal | `boolean \| undefined` | no | — |  |
| accessible | `boolean \| undefined` | no | — |  |
| align | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no | — |  |
| alignSelf | `Responsive<ViewStyle['alignSelf']> \| undefined` | no | — |  |
| alwaysBounceHorizontal | `boolean \| undefined` | no | — |  |
| alwaysBounceVertical | `boolean \| undefined` | no | — |  |
| aria-busy | `boolean \| undefined` | no | — |  |
| aria-checked | `(boolean \| undefined) \| "mixed" \| undefined` | no | — |  |
| aria-disabled | `boolean \| undefined` | no | — |  |
| aria-expanded | `boolean \| undefined` | no | — |  |
| aria-hidden | `boolean \| undefined` | no | — |  |
| aria-label | `string \| undefined` | no | — |  |
| aria-labelledby | `string \| undefined` | no | — |  |
| aria-live | `("polite" \| "assertive" \| "off") \| undefined` | no | — |  |
| aria-modal | `boolean \| undefined` | no | — |  |
| aria-selected | `boolean \| undefined` | no | — |  |
| aria-valuemax | `AccessibilityValue["max"] \| undefined` | no | — |  |
| aria-valuemin | `AccessibilityValue["min"] \| undefined` | no | — |  |
| aria-valuenow | `AccessibilityValue["now"] \| undefined` | no | — |  |
| aria-valuetext | `AccessibilityValue["text"] \| undefined` | no | — |  |
| automaticallyAdjustContentInsets | `boolean \| undefined` | no | — |  |
| automaticallyAdjustKeyboardInsets | `boolean \| undefined` | no | — |  |
| automaticallyAdjustsScrollIndicatorInsets | `boolean \| undefined` | no | — |  |
| bg | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderColor | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderWidth | `Responsive<number> \| undefined` | no | — |  |
| bottom | `Responsive<number> \| undefined` | no | — |  |
| bounces | `boolean \| undefined` | no | — |  |
| bouncesZoom | `boolean \| undefined` | no | — |  |
| canCancelContentTouches | `boolean \| undefined` | no | — |  |
| centerContent | `boolean \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| collapsable | `boolean \| undefined` | no | — |  |
| collapsableChildren | `boolean \| undefined` | no | — |  |
| columnGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| contentContainerStyle | `StyleProp<ViewStyle> \| undefined` | no | — |  |
| contentInset | `EdgeInsetsProp \| undefined` | no | — |  |
| contentInsetAdjustmentBehavior | `("automatic" \| "scrollableAxes" \| "never" \| "always") \| undefined` | no | — |  |
| contentOffset | `PointProp \| undefined` | no | — |  |
| decelerationRate | `DecelerationRateType \| undefined` | no | — |  |
| direction | `Responsive<'row' \| 'column'> \| undefined` | no | — |  |
| directionalLockEnabled | `boolean \| undefined` | no | — |  |
| disableIntervalMomentum | `boolean \| undefined` | no | — |  |
| disableScrollViewPanResponder | `boolean \| undefined` | no | — |  |
| endFillColor | `ColorValue \| undefined` | no | — |  |
| experimental_endDraggingSensitivityMultiplier | `number \| undefined` | no | — |  |
| fadingEdgeLength | `(number \| undefined) \| {
    start: number;
    end: number;
  } \| undefined` | no | — |  |
| flex | `Responsive<number> \| undefined` | no | — |  |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — |  |
| flexGrow | `Responsive<number> \| undefined` | no | — |  |
| flexShrink | `Responsive<number> \| undefined` | no | — |  |
| focusable | `boolean \| undefined` | no | — |  |
| gap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| hasTVPreferredFocus | `boolean \| undefined` | no | — |  |
| height | `Responsive<number \| string> \| undefined` | no | — |  |
| hitSlop | `EdgeInsetsOrSizeProp \| undefined` | no | — |  |
| horizontal | `boolean \| undefined` | no | — |  |
| id | `string \| undefined` | no | — |  |
| importantForAccessibility | `("auto" \| "yes" \| "no" \| "no-hide-descendants") \| undefined` | no | — |  |
| indicatorStyle | `("default" \| "black" \| "white") \| undefined` | no | — |  |
| innerViewRef | `React.Ref<InnerViewInstance> \| undefined` | no | — |  |
| invertStickyHeaders | `boolean \| undefined` | no | — |  |
| justify | `Responsive<
    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'
  > \| undefined` | no | — |  |
| keyboardDismissMode | `("none" \| "on-drag" \| "interactive") \| undefined` | no | — |  |
| keyboardShouldPersistTaps | `("always" \| "never" \| "handled") \| undefined` | no | — |  |
| left | `Responsive<number> \| undefined` | no | — |  |
| m | `Responsive<SpaceValue> \| undefined` | no | — |  |
| maintainVisibleContentPosition | `Readonly<{
    minIndexForVisible: number;
    autoscrollToTopThreshold?: number \| undefined;
  }> \| undefined` | no | — |  |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| maximumZoomScale | `number \| undefined` | no | — |  |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| mb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| minHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| minimumZoomScale | `number \| undefined` | no | — |  |
| minWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| ml | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mx | `Responsive<SpaceValue> \| undefined` | no | — |  |
| my | `Responsive<SpaceValue> \| undefined` | no | — |  |
| nativeBackgroundAndroid | `AndroidDrawable \| undefined` | no | — |  |
| nativeForegroundAndroid | `AndroidDrawable \| undefined` | no | — |  |
| nativeID | `string \| undefined` | no | — |  |
| needsOffscreenAlphaCompositing | `boolean \| undefined` | no | — |  |
| nestedScrollEnabled | `boolean \| undefined` | no | — |  |
| nextFocusDown | `number \| undefined` | no | — |  |
| nextFocusForward | `number \| undefined` | no | — |  |
| nextFocusLeft | `number \| undefined` | no | — |  |
| nextFocusRight | `number \| undefined` | no | — |  |
| nextFocusUp | `number \| undefined` | no | — |  |
| onAccessibilityAction | `((event: AccessibilityActionEvent) => unknown) \| undefined` | no | — |  |
| onAccessibilityEscape | `(() => unknown) \| undefined` | no | — |  |
| onAccessibilityTap | `(() => unknown) \| undefined` | no | — |  |
| onBlur | `((event: BlurEvent) => void) \| undefined` | no | — |  |
| onBlurCapture | `((event: BlurEvent) => void) \| undefined` | no | — |  |
| onClick | `((event: GestureResponderEvent) => unknown) \| undefined` | no | — |  |
| onClickCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onContentSizeChange | `((contentWidth: number, contentHeight: number) => void) \| undefined` | no | — |  |
| onFocus | `((event: FocusEvent) => void) \| undefined` | no | — |  |
| onFocusCapture | `((event: FocusEvent) => void) \| undefined` | no | — |  |
| onGotPointerCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onGotPointerCaptureCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onKeyboardDidHide | `((event: KeyboardEvent) => void) \| undefined` | no | — |  |
| onKeyboardDidShow | `((event: KeyboardEvent) => void) \| undefined` | no | — |  |
| onKeyboardWillHide | `((event: KeyboardEvent) => void) \| undefined` | no | — |  |
| onKeyboardWillShow | `((event: KeyboardEvent) => void) \| undefined` | no | — |  |
| onKeyDown | `((event: KeyDownEvent) => void) \| undefined` | no | — |  |
| onKeyDownCapture | `((event: KeyDownEvent) => void) \| undefined` | no | — |  |
| onKeyUp | `((event: KeyUpEvent) => void) \| undefined` | no | — |  |
| onKeyUpCapture | `((event: KeyUpEvent) => void) \| undefined` | no | — |  |
| onLayout | `((event: LayoutChangeEvent) => unknown) \| undefined` | no | — |  |
| onLostPointerCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onLostPointerCaptureCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onMagicTap | `(() => unknown) \| undefined` | no | — |  |
| onMomentumScrollBegin | `((event: ScrollEvent) => void) \| undefined` | no | — |  |
| onMomentumScrollEnd | `((event: ScrollEvent) => void) \| undefined` | no | — |  |
| onMouseEnter | `((event: MouseEvent) => void) \| undefined` | no | — |  |
| onMouseLeave | `((event: MouseEvent) => void) \| undefined` | no | — |  |
| onMoveShouldSetResponder | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onMoveShouldSetResponderCapture | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onPointerCancel | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerCancelCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerDown | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerDownCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerEnter | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerEnterCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerLeave | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerLeaveCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerMove | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerMoveCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOut | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOutCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOver | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOverCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerUp | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerUpCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onResponderEnd | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderGrant | `((e: GestureResponderEvent) => void \| boolean) \| undefined` | no | — |  |
| onResponderMove | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderReject | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderRelease | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderStart | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderTerminate | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderTerminationRequest | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onScroll | `((event: ScrollEvent) => void) \| undefined` | no | — |  |
| onScrollBeginDrag | `((event: ScrollEvent) => void) \| undefined` | no | — |  |
| onScrollEndDrag | `((event: ScrollEvent) => void) \| undefined` | no | — |  |
| onScrollToTop | `((event: ScrollEvent) => void) \| undefined` | no | — |  |
| onStartShouldSetResponder | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onStartShouldSetResponderCapture | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onTouchCancel | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchCancelCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchEnd | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchEndCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchMove | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchMoveCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchStart | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchStartCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| opacity | `Responsive<number> \| undefined` | no | — |  |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — |  |
| overScrollMode | `("auto" \| "always" \| "never") \| undefined` | no | — |  |
| p | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pagingEnabled | `boolean \| undefined` | no | — |  |
| pb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| persistentScrollbar | `boolean \| undefined` | no | — |  |
| pinchGestureEnabled | `boolean \| undefined` | no | — |  |
| pl | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pointerEvents | `("auto" \| "box-none" \| "box-only" \| "none") \| undefined` | no | — |  |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — |  |
| pr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| px | `Responsive<SpaceValue> \| undefined` | no | — |  |
| py | `Responsive<SpaceValue> \| undefined` | no | — |  |
| radius | `Responsive<RadiusValue> \| undefined` | no | — |  |
| refreshControl | `React.JSX.Element \| undefined` | no | — |  |
| removeClippedSubviews | `boolean \| undefined` | no | — |  |
| renderToHardwareTextureAndroid | `boolean \| undefined` | no | — |  |
| right | `Responsive<number> \| undefined` | no | — |  |
| role | `Role \| undefined` | no | — |  |
| rowGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| screenReaderFocusable | `boolean \| undefined` | no | — |  |
| scrollEnabled | `boolean \| undefined` | no | — |  |
| scrollEventThrottle | `number \| undefined` | no | — |  |
| scrollIndicatorInsets | `EdgeInsetsProp \| undefined` | no | — |  |
| scrollPerfTag | `string \| undefined` | no | — |  |
| scrollsChildToFocus | `boolean \| undefined` | no | — |  |
| scrollsToTop | `boolean \| undefined` | no | — |  |
| scrollToOverflowEnabled | `boolean \| undefined` | no | — |  |
| scrollViewRef | `React.Ref<ScrollViewInstance> \| undefined` | no | — |  |
| shouldRasterizeIOS | `boolean \| undefined` | no | — |  |
| showsHorizontalScrollIndicator | `boolean \| undefined` | no | — |  |
| showsVerticalScrollIndicator | `boolean \| undefined` | no | — |  |
| snapToAlignment | `("start" \| "center" \| "end") \| undefined` | no | — |  |
| snapToEnd | `boolean \| undefined` | no | — |  |
| snapToInterval | `number \| undefined` | no | — |  |
| snapToOffsets | `ReadonlyArray<number> \| undefined` | no | — |  |
| snapToStart | `boolean \| undefined` | no | — |  |
| StickyHeaderComponent | `StickyHeaderComponentType \| undefined` | no | — |  |
| stickyHeaderHiddenOnScroll | `boolean \| undefined` | no | — |  |
| stickyHeaderIndices | `ReadonlyArray<number> \| undefined` | no | — |  |
| style | `StyleProp<ViewStyle> \| undefined` | no | — |  |
| tabIndex | `0 \| -1 \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| top | `Responsive<number> \| undefined` | no | — |  |
| width | `Responsive<number \| string> \| undefined` | no | — |  |
| wrap | `Responsive<'nowrap' \| 'wrap'> \| undefined` | no | — |  |
| zIndex | `Responsive<number> \| undefined` | no | — |  |
| zoomScale | `number \| undefined` | no | — |  |

## Show

Source: `src/core/responsive/Show.tsx:14:1`

Conditionally renders one responsive subtree or its fallback.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| children | `React.ReactNode \| undefined` | no | — |  |
| fallback | `React.ReactNode \| undefined` | no | `null` |  |
| when | `Responsive<boolean>` | yes | — |  |

## Surface

Source: `src/features/surface/adapters/inbound/Surface.tsx:9:1`

Renders a themed content surface with semantic elevation and border variants.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined` | no | — |  |
| accessibilityLabelledBy | `ReactNativeViewProps['accessibilityLabelledBy'] \| undefined` | no | — |  |
| accessibilityRole | `ReactNativeViewProps['accessibilityRole'] \| undefined` | no | — |  |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined` | no | — |  |
| accessible | `ReactNativeViewProps['accessible'] \| undefined` | no | — |  |
| align | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no | — |  |
| alignSelf | `Responsive<ViewStyle['alignSelf']> \| undefined` | no | — |  |
| bottom | `Responsive<number> \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| columnGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| direction | `Responsive<'row' \| 'column'> \| undefined` | no | — |  |
| flex | `Responsive<number> \| undefined` | no | — |  |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — |  |
| flexGrow | `Responsive<number> \| undefined` | no | — |  |
| flexShrink | `Responsive<number> \| undefined` | no | — |  |
| gap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| height | `Responsive<number \| string> \| undefined` | no | — |  |
| justify | `Responsive<
    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'
  > \| undefined` | no | — |  |
| left | `Responsive<number> \| undefined` | no | — |  |
| m | `Responsive<SpaceValue> \| undefined` | no | — |  |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| mb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| minHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| minWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| ml | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mx | `Responsive<SpaceValue> \| undefined` | no | — |  |
| my | `Responsive<SpaceValue> \| undefined` | no | — |  |
| nativeID | `ReactNativeViewProps['nativeID'] \| undefined` | no | — |  |
| opacity | `Responsive<number> \| undefined` | no | — |  |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — |  |
| p | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pl | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pointerEvents | `ReactNativeViewProps['pointerEvents'] \| undefined` | no | — |  |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — |  |
| pr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| px | `Responsive<SpaceValue> \| undefined` | no | — |  |
| py | `Responsive<SpaceValue> \| undefined` | no | — |  |
| radius | `Responsive<RadiusValue> \| undefined` | no | `'m'` |  |
| right | `Responsive<number> \| undefined` | no | — |  |
| rowGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| style | `StyleProp<ViewStyle> \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| top | `Responsive<number> \| undefined` | no | — |  |
| variant | `SurfaceVariant \| undefined` | no | `'default'` |  |
| width | `Responsive<number \| string> \| undefined` | no | — |  |
| wrap | `Responsive<'nowrap' \| 'wrap'> \| undefined` | no | — |  |
| zIndex | `Responsive<number> \| undefined` | no | — |  |

## Switch

Source: `src/features/form/switch/adapters/inbound/Switch.tsx:18:1`

Renders a controlled or uncontrolled accessible switch.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityLabel | `string \| undefined` | no | — |  |
| accessibilityLabelledBy | `ReactNativeViewProps['accessibilityLabelledBy'] \| undefined` | no | — |  |
| accessible | `ReactNativeViewProps['accessible'] \| undefined` | no | — |  |
| align | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no | — |  |
| alignSelf | `Responsive<ViewStyle['alignSelf']> \| undefined` | no | — |  |
| bg | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderColor | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderWidth | `Responsive<number> \| undefined` | no | — |  |
| bottom | `Responsive<number> \| undefined` | no | — |  |
| checked | `boolean \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| color | `SurfaceColor \| undefined` | no | `'primary'` |  |
| columnGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| defaultChecked | `boolean \| undefined` | no | `false` |  |
| direction | `Responsive<'row' \| 'column'> \| undefined` | no | — |  |
| disabled | `boolean \| undefined` | no | `false` |  |
| flex | `Responsive<number> \| undefined` | no | — |  |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — |  |
| flexGrow | `Responsive<number> \| undefined` | no | — |  |
| flexShrink | `Responsive<number> \| undefined` | no | — |  |
| gap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| height | `Responsive<number \| string> \| undefined` | no | — |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | — |  |
| invalid | `boolean \| undefined` | no | `false` |  |
| justify | `Responsive<
    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'
  > \| undefined` | no | — |  |
| left | `Responsive<number> \| undefined` | no | — |  |
| m | `Responsive<SpaceValue> \| undefined` | no | — |  |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| mb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| minHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| minWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| ml | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mx | `Responsive<SpaceValue> \| undefined` | no | — |  |
| my | `Responsive<SpaceValue> \| undefined` | no | — |  |
| nativeID | `ReactNativeViewProps['nativeID'] \| undefined` | no | — |  |
| onCheckedChange | `((checked: boolean) => void) \| undefined` | no | — |  |
| onLongPress | `((event: GestureResponderEvent) => void) \| undefined` | no | — |  |
| opacity | `Responsive<number> \| undefined` | no | — |  |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — |  |
| p | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pl | `Responsive<SpaceValue> \| undefined` | no | — |  |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — |  |
| pr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| px | `Responsive<SpaceValue> \| undefined` | no | — |  |
| py | `Responsive<SpaceValue> \| undefined` | no | — |  |
| radius | `Responsive<RadiusValue> \| undefined` | no | — |  |
| readOnly | `boolean \| undefined` | no | `false` |  |
| right | `Responsive<number> \| undefined` | no | — |  |
| rowGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| size | `ControlSize \| undefined` | no | `'m'` |  |
| testID | `string \| undefined` | no | — |  |
| top | `Responsive<number> \| undefined` | no | — |  |
| width | `Responsive<number \| string> \| undefined` | no | — |  |
| wrap | `Responsive<'nowrap' \| 'wrap'> \| undefined` | no | — |  |
| zIndex | `Responsive<number> \| undefined` | no | — |  |

## Tab

Source: `src/features/tabs/adapters/inbound/Tab.tsx:12:1`

Renders one accessible selectable tab inside a Tabs context.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| children | `React.ReactNode \| undefined` | no | — |  |
| disabled | `boolean \| undefined` | no | `false` |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | `'enabled'` |  |
| testID | `string \| undefined` | no | — |  |
| trailing | `React.ReactNode \| undefined` | no | — |  |
| value | `string` | yes | — |  |

## TabList

Source: `src/features/tabs/adapters/inbound/TabList.tsx:20:1`

Renders the accessible tab list and owns keyboard focus navigation.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| children | `React.ReactNode \| undefined` | no | — |  |
| fill | `boolean \| undefined` | no | `false` |  |
| testID | `string \| undefined` | no | — |  |

## TabPanel

Source: `src/features/tabs/adapters/inbound/TabPanel.tsx:10:1`

Renders the active content panel with the supplied View layout and tab accessibility linkage.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| align | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no | — |  |
| alignSelf | `Responsive<ViewStyle['alignSelf']> \| undefined` | no | — |  |
| bg | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderColor | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderWidth | `Responsive<number> \| undefined` | no | — |  |
| bottom | `Responsive<number> \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| columnGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| direction | `Responsive<'row' \| 'column'> \| undefined` | no | — |  |
| flex | `Responsive<number> \| undefined` | no | — |  |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — |  |
| flexGrow | `Responsive<number> \| undefined` | no | — |  |
| flexShrink | `Responsive<number> \| undefined` | no | — |  |
| gap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| height | `Responsive<number \| string> \| undefined` | no | — |  |
| justify | `Responsive<
    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'
  > \| undefined` | no | — |  |
| left | `Responsive<number> \| undefined` | no | — |  |
| m | `Responsive<SpaceValue> \| undefined` | no | — |  |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| mb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| minHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| minWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| ml | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mx | `Responsive<SpaceValue> \| undefined` | no | — |  |
| my | `Responsive<SpaceValue> \| undefined` | no | — |  |
| opacity | `Responsive<number> \| undefined` | no | — |  |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — |  |
| p | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pl | `Responsive<SpaceValue> \| undefined` | no | — |  |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — |  |
| pr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| px | `Responsive<SpaceValue> \| undefined` | no | — |  |
| py | `Responsive<SpaceValue> \| undefined` | no | — |  |
| radius | `Responsive<RadiusValue> \| undefined` | no | — |  |
| right | `Responsive<number> \| undefined` | no | — |  |
| rowGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| style | `StyleProp<ViewStyle> \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| top | `Responsive<number> \| undefined` | no | — |  |
| value | `string` | yes | — |  |
| width | `Responsive<number \| string> \| undefined` | no | — |  |
| wrap | `Responsive<'nowrap' \| 'wrap'> \| undefined` | no | — |  |
| zIndex | `Responsive<number> \| undefined` | no | — |  |

## Tabs

Source: `src/features/tabs/adapters/inbound/Tabs.tsx:9:1`

Provides accessible tab selection and forwards View layout to the tab container.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| align | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no | — |  |
| alignSelf | `Responsive<ViewStyle['alignSelf']> \| undefined` | no | — |  |
| bg | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderColor | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderWidth | `Responsive<number> \| undefined` | no | — |  |
| bottom | `Responsive<number> \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| columnGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| defaultValue | `string \| undefined` | no | — |  |
| direction | `Responsive<'row' \| 'column'> \| undefined` | no | — |  |
| flex | `Responsive<number> \| undefined` | no | — |  |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — |  |
| flexGrow | `Responsive<number> \| undefined` | no | — |  |
| flexShrink | `Responsive<number> \| undefined` | no | — |  |
| gap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| height | `Responsive<number \| string> \| undefined` | no | — |  |
| justify | `Responsive<
    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'
  > \| undefined` | no | — |  |
| left | `Responsive<number> \| undefined` | no | — |  |
| m | `Responsive<SpaceValue> \| undefined` | no | — |  |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| mb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| minHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| minWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| ml | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mx | `Responsive<SpaceValue> \| undefined` | no | — |  |
| my | `Responsive<SpaceValue> \| undefined` | no | — |  |
| onValueChange | `((value: string) => void) \| undefined` | no | — |  |
| opacity | `Responsive<number> \| undefined` | no | — |  |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — |  |
| p | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pl | `Responsive<SpaceValue> \| undefined` | no | — |  |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — |  |
| pr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| px | `Responsive<SpaceValue> \| undefined` | no | — |  |
| py | `Responsive<SpaceValue> \| undefined` | no | — |  |
| radius | `Responsive<RadiusValue> \| undefined` | no | — |  |
| right | `Responsive<number> \| undefined` | no | — |  |
| rowGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| style | `StyleProp<ViewStyle> \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| top | `Responsive<number> \| undefined` | no | — |  |
| value | `string \| undefined` | no | — |  |
| width | `Responsive<number \| string> \| undefined` | no | — |  |
| wrap | `Responsive<'nowrap' \| 'wrap'> \| undefined` | no | — |  |
| zIndex | `Responsive<number> \| undefined` | no | — |  |

## Text

Source: `src/features/typography/adapters/inbound/Text.tsx:9:1`

Renders body text using Surface semantic typography.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| align | `TextStyle['textAlign'] \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| color | `SurfaceColor \| undefined` | no | — |  |
| emphasis | `SurfaceEmphasis \| undefined` | no | `'default'` |  |
| i18nKey | `string \| undefined` | no | — |  |
| italic | `boolean \| undefined` | no | `false` |  |
| numberOfLines | `number \| undefined` | no | — |  |
| style | `TextStyle \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| variant | `TextVariant \| undefined` | no | `'body'` |  |
| weight | `TextWeight \| undefined` | no | — |  |

## TextInput

Source: `src/features/form/text-input/adapters/inbound/TextInput.tsx:17:1`

Renders a token-aware text input with controlled interaction policy.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityActions | `ReadonlyArray<AccessibilityActionInfo> \| undefined` | no | — |  |
| accessibilityElementsHidden | `boolean \| undefined` | no | — |  |
| accessibilityHint | `string \| undefined` | no | — |  |
| accessibilityIgnoresInvertColors | `boolean \| undefined` | no | — |  |
| accessibilityLabel | `string \| undefined` | no | — |  |
| accessibilityLabelledBy | `(string \| undefined) \| (Array<string> \| undefined) \| undefined` | no | — |  |
| accessibilityLanguage | `string \| undefined` | no | — |  |
| accessibilityLargeContentTitle | `string \| undefined` | no | — |  |
| accessibilityLiveRegion | `("none" \| "polite" \| "assertive") \| undefined` | no | — |  |
| accessibilityRespondsToUserInteraction | `boolean \| undefined` | no | — |  |
| accessibilityRole | `AccessibilityRole \| undefined` | no | — |  |
| accessibilityShowsLargeContentViewer | `boolean \| undefined` | no | — |  |
| accessibilityState | `AccessibilityState \| undefined` | no | — |  |
| accessibilityValue | `AccessibilityValue \| undefined` | no | — |  |
| accessibilityViewIsModal | `boolean \| undefined` | no | — |  |
| accessible | `boolean \| undefined` | no | — |  |
| allowFontScaling | `boolean \| undefined` | no | — |  |
| aria-busy | `boolean \| undefined` | no | — |  |
| aria-checked | `(boolean \| undefined) \| "mixed" \| undefined` | no | — |  |
| aria-disabled | `boolean \| undefined` | no | — |  |
| aria-expanded | `boolean \| undefined` | no | — |  |
| aria-hidden | `boolean \| undefined` | no | — |  |
| aria-label | `string \| undefined` | no | — |  |
| aria-labelledby | `string \| undefined` | no | — |  |
| aria-live | `("polite" \| "assertive" \| "off") \| undefined` | no | — |  |
| aria-modal | `boolean \| undefined` | no | — |  |
| aria-selected | `boolean \| undefined` | no | — |  |
| aria-valuemax | `AccessibilityValue["max"] \| undefined` | no | — |  |
| aria-valuemin | `AccessibilityValue["min"] \| undefined` | no | — |  |
| aria-valuenow | `AccessibilityValue["now"] \| undefined` | no | — |  |
| aria-valuetext | `AccessibilityValue["text"] \| undefined` | no | — |  |
| autoCapitalize | `AutoCapitalize \| undefined` | no | — |  |
| autoComplete | `("2fa-app-otp" \| "additional-name" \| "address-line1" \| "address-line2" \| "birthdate-day" \| "birthdate-full" \| "birthdate-month" \| "birthdate-year" \| "cc-csc" \| "cc-exp" \| "cc-exp-day" \| "cc-exp-month" \| "cc-exp-year" \| "cc-number" \| "cc-name" \| "cc-given-name" \| "cc-middle-name" \| "cc-family-name" \| "cc-type" \| "country" \| "current-password" \| "email" \| "email-otp" \| "flight-confirmation-code" \| "flight-number" \| "family-name" \| "gender" \| "gift-card-number" \| "gift-card-pin" \| "given-name" \| "honorific-prefix" \| "honorific-suffix" \| "loyalty-account-number" \| "name" \| "name-family" \| "name-given" \| "name-middle" \| "name-middle-initial" \| "name-prefix" \| "name-suffix" \| "new-password" \| "nickname" \| "one-time-code" \| "organization" \| "organization-title" \| "password" \| "password-new" \| "postal-address" \| "postal-address-country" \| "postal-address-dependent-locality" \| "postal-address-extended" \| "postal-address-extended-postal-code" \| "postal-address-locality" \| "postal-address-region" \| "postal-address-unit" \| "postal-code" \| "promo-code" \| "street-address" \| "sms-otp" \| "tel" \| "tel-country-code" \| "tel-national" \| "tel-device" \| "upi-vpa" \| "url" \| "wifi-password" \| "username" \| "username-new" \| "off") \| undefined` | no | — |  |
| autoCorrect | `boolean \| undefined` | no | — |  |
| autoFocus | `boolean \| undefined` | no | — |  |
| blurOnSubmit | `boolean \| undefined` | no | — |  |
| caretHidden | `boolean \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| clearButtonMode | `("never" \| "while-editing" \| "unless-editing" \| "always") \| undefined` | no | — |  |
| clearTextOnFocus | `boolean \| undefined` | no | — |  |
| collapsable | `boolean \| undefined` | no | — |  |
| collapsableChildren | `boolean \| undefined` | no | — |  |
| contextMenuHidden | `boolean \| undefined` | no | — |  |
| cursorColor | `ColorValue \| undefined` | no | — |  |
| dataDetectorTypes | `(DataDetectorTypesType \| undefined) \| ReadonlyArray<DataDetectorTypesType> \| undefined` | no | — |  |
| defaultValue | `string \| undefined` | no | — |  |
| disabled | `boolean \| undefined` | no | — |  |
| disableFullscreenUI | `boolean \| undefined` | no | — |  |
| disableKeyboardShortcuts | `boolean \| undefined` | no | — |  |
| enablesReturnKeyAutomatically | `boolean \| undefined` | no | — |  |
| enterKeyHint | `EnterKeyHintTypeOptions \| undefined` | no | — |  |
| experimental_acceptDragAndDropTypes | `ReadonlyArray<string> \| undefined` | no | — |  |
| focusable | `boolean \| undefined` | no | — |  |
| forwardedRef | `React.Ref<TextInputInstance> \| undefined` | no | — |  |
| hasTVPreferredFocus | `boolean \| undefined` | no | — |  |
| hitSlop | `EdgeInsetsOrSizeProp \| undefined` | no | — |  |
| id | `string \| undefined` | no | — |  |
| importantForAccessibility | `("auto" \| "yes" \| "no" \| "no-hide-descendants") \| undefined` | no | — |  |
| importantForAutofill | `("auto" \| "no" \| "noExcludeDescendants" \| "yes" \| "yesExcludeDescendants") \| undefined` | no | — |  |
| inlineImageLeft | `string \| undefined` | no | — |  |
| inlineImagePadding | `number \| undefined` | no | — |  |
| inputAccessoryViewButtonLabel | `string \| undefined` | no | — |  |
| inputAccessoryViewID | `string \| undefined` | no | — |  |
| inputMode | `InputModeOptions \| undefined` | no | — |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | — |  |
| invalid | `boolean \| undefined` | no | — |  |
| keyboardAppearance | `("default" \| "light" \| "dark") \| undefined` | no | — |  |
| keyboardType | `KeyboardTypeOptions \| undefined` | no | — |  |
| leadingAccessory | `React.ReactNode \| undefined` | no | — |  |
| lineBreakModeIOS | `("wordWrapping" \| "char" \| "clip" \| "head" \| "middle" \| "tail") \| undefined` | no | — |  |
| lineBreakStrategyIOS | `("none" \| "standard" \| "hangul-word" \| "push-out") \| undefined` | no | — |  |
| maxFontSizeMultiplier | `number \| undefined` | no | — |  |
| maxLength | `number \| undefined` | no | — |  |
| multiline | `boolean \| undefined` | no | — |  |
| nativeBackgroundAndroid | `AndroidDrawable \| undefined` | no | — |  |
| nativeForegroundAndroid | `AndroidDrawable \| undefined` | no | — |  |
| nativeID | `string \| undefined` | no | — |  |
| needsOffscreenAlphaCompositing | `boolean \| undefined` | no | — |  |
| nextFocusDown | `number \| undefined` | no | — |  |
| nextFocusForward | `number \| undefined` | no | — |  |
| nextFocusLeft | `number \| undefined` | no | — |  |
| nextFocusRight | `number \| undefined` | no | — |  |
| nextFocusUp | `number \| undefined` | no | — |  |
| numberOfLines | `number \| undefined` | no | — |  |
| onAccessibilityAction | `((event: AccessibilityActionEvent) => unknown) \| undefined` | no | — |  |
| onAccessibilityEscape | `(() => unknown) \| undefined` | no | — |  |
| onAccessibilityTap | `(() => unknown) \| undefined` | no | — |  |
| onBlur | `((e: TextInputBlurEvent) => unknown) \| undefined` | no | — |  |
| onBlurCapture | `((event: BlurEvent) => void) \| undefined` | no | — |  |
| onChange | `((e: TextInputChangeEvent) => unknown) \| undefined` | no | — |  |
| onChangeText | `((text: string) => void) \| undefined` | no | — |  |
| onClick | `((event: GestureResponderEvent) => unknown) \| undefined` | no | — |  |
| onClickCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onContentSizeChange | `((e: TextInputContentSizeChangeEvent) => unknown) \| undefined` | no | — |  |
| onEndEditing | `((e: TextInputEndEditingEvent) => unknown) \| undefined` | no | — |  |
| onFocus | `((e: TextInputFocusEvent) => unknown) \| undefined` | no | — |  |
| onFocusCapture | `((event: FocusEvent) => void) \| undefined` | no | — |  |
| onGotPointerCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onGotPointerCaptureCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onKeyDown | `((event: KeyDownEvent) => void) \| undefined` | no | — |  |
| onKeyDownCapture | `((event: KeyDownEvent) => void) \| undefined` | no | — |  |
| onKeyPress | `((e: TextInputKeyPressEvent) => unknown) \| undefined` | no | — |  |
| onKeyUp | `((event: KeyUpEvent) => void) \| undefined` | no | — |  |
| onKeyUpCapture | `((event: KeyUpEvent) => void) \| undefined` | no | — |  |
| onLayout | `((event: LayoutChangeEvent) => unknown) \| undefined` | no | — |  |
| onLostPointerCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onLostPointerCaptureCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onMagicTap | `(() => unknown) \| undefined` | no | — |  |
| onMouseEnter | `((event: MouseEvent) => void) \| undefined` | no | — |  |
| onMouseLeave | `((event: MouseEvent) => void) \| undefined` | no | — |  |
| onMoveShouldSetResponder | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onMoveShouldSetResponderCapture | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onPointerCancel | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerCancelCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerDown | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerDownCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerEnter | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerEnterCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerLeave | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerLeaveCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerMove | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerMoveCapture | `((event: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOut | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOutCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOver | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerOverCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerUp | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPointerUpCapture | `((e: PointerEvent) => void) \| undefined` | no | — |  |
| onPress | `((event: GestureResponderEvent) => unknown) \| undefined` | no | — |  |
| onPressIn | `((event: GestureResponderEvent) => unknown) \| undefined` | no | — |  |
| onPressOut | `((event: GestureResponderEvent) => unknown) \| undefined` | no | — |  |
| onResponderEnd | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderGrant | `((e: GestureResponderEvent) => void \| boolean) \| undefined` | no | — |  |
| onResponderMove | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderReject | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderRelease | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderStart | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderTerminate | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onResponderTerminationRequest | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onScroll | `((e: ScrollEvent) => unknown) \| undefined` | no | — |  |
| onSelectionChange | `((e: TextInputSelectionChangeEvent) => unknown) \| undefined` | no | — |  |
| onStartShouldSetResponder | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onStartShouldSetResponderCapture | `((e: GestureResponderEvent) => boolean) \| undefined` | no | — |  |
| onSubmitEditing | `((e: TextInputSubmitEditingEvent) => unknown) \| undefined` | no | — |  |
| onTouchCancel | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchCancelCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchEnd | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchEndCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchMove | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchMoveCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchStart | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| onTouchStartCapture | `((e: GestureResponderEvent) => void) \| undefined` | no | — |  |
| passwordRules | `PasswordRules \| undefined` | no | — |  |
| placeholder | `string \| undefined` | no | — |  |
| pointerEvents | `("auto" \| "box-none" \| "box-only" \| "none") \| undefined` | no | — |  |
| readOnly | `boolean \| undefined` | no | — |  |
| rejectResponderTermination | `boolean \| undefined` | no | — |  |
| removeClippedSubviews | `boolean \| undefined` | no | — |  |
| renderToHardwareTextureAndroid | `boolean \| undefined` | no | — |  |
| returnKeyLabel | `string \| undefined` | no | — |  |
| returnKeyType | `ReturnKeyTypeOptions \| undefined` | no | — |  |
| role | `Role \| undefined` | no | — |  |
| rows | `number \| undefined` | no | — |  |
| screenReaderFocusable | `boolean \| undefined` | no | — |  |
| scrollEnabled | `boolean \| undefined` | no | — |  |
| secureTextEntry | `boolean \| undefined` | no | — |  |
| selection | `Readonly<{
    start: number;
    end?: number \| undefined;
  }> \| undefined` | no | — |  |
| selectionColor | `ColorValue \| undefined` | no | — |  |
| selectionHandleColor | `ColorValue \| undefined` | no | — |  |
| selectTextOnFocus | `boolean \| undefined` | no | — |  |
| shouldRasterizeIOS | `boolean \| undefined` | no | — |  |
| showSoftInputOnFocus | `boolean \| undefined` | no | — |  |
| size | `ControlSize \| undefined` | no | — |  |
| smartInsertDelete | `boolean \| undefined` | no | — |  |
| spellCheck | `boolean \| undefined` | no | — |  |
| style | `StyleProp<TextStyle> \| undefined` | no | — |  |
| submitBehavior | `SubmitBehavior \| undefined` | no | — |  |
| tabIndex | `0 \| -1 \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| textAlign | `("left" \| "center" \| "right" \| "start" \| "end") \| undefined` | no | — |  |
| textAlignVertical | `("auto" \| "top" \| "bottom" \| "center") \| undefined` | no | — |  |
| textBreakStrategy | `("simple" \| "highQuality" \| "balanced") \| undefined` | no | — |  |
| textContentType | `TextContentType \| undefined` | no | — |  |
| trailingAccessory | `React.ReactNode \| undefined` | no | — |  |
| underlineColorAndroid | `ColorValue \| undefined` | no | — |  |
| value | `string \| undefined` | no | — |  |

## ThemeProvider

Source: `src/features/theme/adapters/inbound/ThemeProvider.tsx:13:1`

Install the app-level Surface theme together with global responsive and overlay runtime.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| children | `ReactNode \| undefined` | no | — |  |
| initialConfig | `Partial<ContractsThemeConfig> \| undefined` | no | — |  |
| initialMode | `ThemeMode \| undefined` | no | `'light'` |  |

## ThemeScope

Source: `src/features/theme/adapters/inbound/ThemeScope.tsx:11:1`

Apply nested theme, mode, or inherited surface-polarity overrides without remounting providers.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| children | `ReactNode \| undefined` | no | — |  |
| inverted | `boolean \| undefined` | no | — |  |
| mode | `ThemeMode \| undefined` | no | — |  |
| themeConfig | `Partial<ContractsThemeConfig> \| undefined` | no | — |  |

## Toast

Source: `src/features/toast/adapters/inbound/Toast.tsx:13:1`

Renders one transient toast notification.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| description | `React.ReactNode \| undefined` | no | — |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | `'enabled'` |  |
| onDismiss | `(() => void) \| undefined` | no | — |  |
| status | `ToastStatus \| undefined` | no | `'default'` |  |
| testID | `string \| undefined` | no | — |  |
| title | `React.ReactNode \| undefined` | no | — |  |

## ToastProvider

Source: `src/features/toast/adapters/inbound/ToastProvider.tsx:13:1`

Provides the toast runtime context and renders its shared portal host.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| children | `React.ReactNode \| undefined` | no | — |  |
| defaultDuration | `number \| undefined` | no | `4000` |  |

## Tooltip

Source: `src/features/tooltip/adapters/inbound/Tooltip.tsx:12:1`

Presents delayed hover/focus help through the shared Popover foundation.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| children | `React.ReactNode \| undefined` | no | — |  |
| content | `React.ReactNode \| undefined` | no | — |  |
| delay | `number \| undefined` | no | `150` |  |
| interactionPolicy | `InteractionPolicy \| undefined` | no | `'enabled'` |  |
| placement | `'top' \| 'bottom' \| undefined` | no | `'top'` |  |
| testID | `string \| undefined` | no | — |  |

## View

Source: `src/features/layout/adapters/inbound/View.tsx:11:1`

Renders the token-aware responsive Surface adapter for React Native View.

Export paths: `src/index.ts`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| accessibilityLabel | `ReactNativeViewProps['accessibilityLabel'] \| undefined` | no | — |  |
| accessibilityLabelledBy | `ReactNativeViewProps['accessibilityLabelledBy'] \| undefined` | no | — |  |
| accessibilityRole | `ReactNativeViewProps['accessibilityRole'] \| undefined` | no | — |  |
| accessibilityState | `ReactNativeViewProps['accessibilityState'] \| undefined` | no | — |  |
| accessible | `ReactNativeViewProps['accessible'] \| undefined` | no | — |  |
| align | `Responsive<'flex-start' \| 'center' \| 'flex-end' \| 'stretch' \| 'baseline'> \| undefined` | no | — |  |
| alignSelf | `Responsive<ViewStyle['alignSelf']> \| undefined` | no | — |  |
| bg | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderColor | `Responsive<ColorValue> \| undefined` | no | — |  |
| borderWidth | `Responsive<number> \| undefined` | no | — |  |
| bottom | `Responsive<number> \| undefined` | no | — |  |
| children | `React.ReactNode \| undefined` | no | — |  |
| columnGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| direction | `Responsive<'row' \| 'column'> \| undefined` | no | — |  |
| flex | `Responsive<number> \| undefined` | no | — |  |
| flexBasis | `Responsive<number \| string> \| undefined` | no | — |  |
| flexGrow | `Responsive<number> \| undefined` | no | — |  |
| flexShrink | `Responsive<number> \| undefined` | no | — |  |
| gap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| height | `Responsive<number \| string> \| undefined` | no | — |  |
| justify | `Responsive<
    'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'
  > \| undefined` | no | — |  |
| left | `Responsive<number> \| undefined` | no | — |  |
| m | `Responsive<SpaceValue> \| undefined` | no | — |  |
| maxHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| maxWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| mb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| minHeight | `Responsive<number \| string> \| undefined` | no | — |  |
| minWidth | `Responsive<number \| string> \| undefined` | no | — |  |
| ml | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| mx | `Responsive<SpaceValue> \| undefined` | no | — |  |
| my | `Responsive<SpaceValue> \| undefined` | no | — |  |
| nativeID | `ReactNativeViewProps['nativeID'] \| undefined` | no | — |  |
| opacity | `Responsive<number> \| undefined` | no | — |  |
| overflow | `Responsive<ViewStyle['overflow']> \| undefined` | no | — |  |
| p | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pb | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pl | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pointerEvents | `ReactNativeViewProps['pointerEvents'] \| undefined` | no | — |  |
| position | `Responsive<ViewStyle['position']> \| undefined` | no | — |  |
| pr | `Responsive<SpaceValue> \| undefined` | no | — |  |
| pt | `Responsive<SpaceValue> \| undefined` | no | — |  |
| px | `Responsive<SpaceValue> \| undefined` | no | — |  |
| py | `Responsive<SpaceValue> \| undefined` | no | — |  |
| radius | `Responsive<RadiusValue> \| undefined` | no | — |  |
| right | `Responsive<number> \| undefined` | no | — |  |
| rowGap | `Responsive<SpaceValue> \| undefined` | no | — |  |
| style | `StyleProp<ViewStyle> \| undefined` | no | — |  |
| testID | `string \| undefined` | no | — |  |
| top | `Responsive<number> \| undefined` | no | — |  |
| width | `Responsive<number \| string> \| undefined` | no | — |  |
| wrap | `Responsive<'nowrap' \| 'wrap'> \| undefined` | no | — |  |
| zIndex | `Responsive<number> \| undefined` | no | — |  |
