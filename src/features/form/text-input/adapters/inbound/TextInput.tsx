import React from 'react';
import {
  Platform,
  TextInput as ReactNativeTextInput,
  type ViewStyle,
  View,
} from 'react-native';

import { resolveFocusRingStyles } from '../../../../../internal/resolvers';
import { useTheme } from '../../../../../theme/ThemeContext';
import type { TextInputProps } from '../../../../../types/text-input';
import { resolveTextInputPresentation } from '../../utils/resolveTextInputPresentation';

/*** Renders a token-aware text input with controlled interaction policy. */
export function TextInput(props: TextInputProps) {
  const { theme } = useTheme();
  const [focused, setFocused] = React.useState(false);
  const {
    disabled: _disabled,
    interactionPolicy = 'enabled',
    invalid: _invalid,
    leadingAccessory,
    readOnly = false,
    size: _size,
    trailingAccessory,
    ...nativeProps
  } = props;
  const presentation = resolveTextInputPresentation(theme, props, focused);

  return (
    <View
      style={[
        presentation.containerStyle,
        resolveFocusRingStyles(theme.semantics.border.focus, focused, Platform.OS === 'web'),
      ]}
    >
      {leadingAccessory ? (
        <View style={resolveAccessoryStyle(presentation.accessorySpacing, 'leading')}>
          {leadingAccessory}
        </View>
      ) : null}
      <ReactNativeTextInput
        {...nativeProps}
        editable={presentation.editable}
        numberOfLines={presentation.numberOfLines}
        onBlur={(event) => {
          setFocused(false);
          nativeProps.onBlur?.(event);
        }}
        onChangeText={(nextValue) => {
          if (interactionPolicy !== 'passive') {
            nativeProps.onChangeText?.(nextValue);
          }
        }}
        onFocus={(event) => {
          setFocused(true);
          nativeProps.onFocus?.(event);
        }}
        placeholderTextColor={presentation.placeholderColor}
        readOnly={readOnly}
        style={[presentation.inputStyle, nativeProps.style]}
      />
      {trailingAccessory ? (
        <View style={resolveAccessoryStyle(presentation.accessorySpacing, 'trailing')}>
          {trailingAccessory}
        </View>
      ) : null}
    </View>
  );
}

/*** Resolves spacing around a leading or trailing TextInput accessory. */
function resolveAccessoryStyle(spacing: number, position: 'leading' | 'trailing'): ViewStyle {
  return position === 'leading' ? { marginRight: spacing } : { marginLeft: spacing };
}
