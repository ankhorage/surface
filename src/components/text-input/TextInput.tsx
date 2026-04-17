import React from 'react';
import {
  Platform,
  TextInput as ReactNativeTextInput,
  View,
} from 'react-native';

import {
  resolveControlSize,
  resolveFocusRingStyles,
  resolveInputColors,
} from '../../internal/resolvers';
import { useTheme } from '../../theme/ThemeContext';
import type { TextInputProps } from './types';

export function TextInput({
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
}: TextInputProps) {
  const { theme } = useTheme();
  const controlSize = resolveControlSize(theme, size);
  const [focused, setFocused] = React.useState(false);
  const colors = resolveInputColors(theme, {
    disabled,
    focused,
    invalid,
    readOnly,
  });

  const handleFocus: NonNullable<TextInputProps['onFocus']> = (event) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur: NonNullable<TextInputProps['onBlur']> = (event) => {
    setFocused(false);
    onBlur?.(event);
  };

  return (
    <View
      style={[
        {
          minHeight: controlSize.minHeight,
          paddingHorizontal: controlSize.paddingHorizontal,
          paddingVertical: controlSize.paddingVertical,
          borderRadius: controlSize.borderRadius,
          borderWidth: 1,
          borderColor: colors.borderColor,
          backgroundColor: colors.backgroundColor,
          flexDirection: 'row',
          alignItems: 'center',
          opacity: colors.opacity,
        },
        resolveFocusRingStyles(theme.semantics.border.focus, focused, Platform.OS === 'web'),
      ]}
    >
      {leadingAccessory ? <View style={{ marginRight: theme.spacing.s }}>{leadingAccessory}</View> : null}
      <ReactNativeTextInput
        {...props}
        defaultValue={defaultValue}
        editable={!disabled}
        numberOfLines={props.multiline ? props.numberOfLines : 1}
        onBlur={handleBlur}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholderColor}
        readOnly={readOnly}
        style={[
          {
            flex: 1,
            minHeight: controlSize.minHeight - controlSize.paddingVertical * 2,
            padding: 0,
            color: colors.contentColor,
          },
          style,
        ]}
        testID={testID}
        value={value}
      />
      {trailingAccessory ? <View style={{ marginLeft: theme.spacing.s }}>{trailingAccessory}</View> : null}
    </View>
  );
}
