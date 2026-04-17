import React from 'react';
import { Platform, TextInput as ReactNativeTextInput, View } from 'react-native';

import {
  resolveControlSize,
  resolveFieldState,
  resolveFocusRingStyles,
  resolveInputColors,
  resolveTextStyles,
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
  const fieldState = resolveFieldState({
    disabled,
    focused,
    invalid,
    readOnly,
  });
  const colors = resolveInputColors(theme, fieldState);
  const resolvedTextStyle = resolveTextStyles(theme, {
    variant: controlSize.textVariant,
  });
  const resolvedLineHeight =
    typeof resolvedTextStyle.lineHeight === 'number'
      ? resolvedTextStyle.lineHeight
      : controlSize.minHeight - controlSize.paddingVertical * 2;
  const lineCount = Math.max(props.numberOfLines ?? 1, 1);
  const inputMinHeight = props.multiline
    ? resolvedLineHeight * lineCount
    : controlSize.minHeight - controlSize.paddingVertical * 2;
  const containerMinHeight = props.multiline
    ? inputMinHeight + controlSize.paddingVertical * 2
    : controlSize.minHeight;

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
          minHeight: containerMinHeight,
          paddingHorizontal: controlSize.paddingHorizontal,
          paddingVertical: controlSize.paddingVertical,
          borderRadius: controlSize.borderRadius,
          borderWidth: 1,
          borderColor: colors.borderColor,
          backgroundColor: colors.backgroundColor,
          flexDirection: 'row',
          alignItems: props.multiline ? 'flex-start' : 'center',
          opacity: colors.opacity,
        },
        resolveFocusRingStyles(theme.semantics.border.focus, focused, Platform.OS === 'web'),
      ]}
    >
      {leadingAccessory ? (
        <View style={{ marginRight: theme.spacing.s }}>{leadingAccessory}</View>
      ) : null}
      <ReactNativeTextInput
        {...props}
        defaultValue={defaultValue}
        editable={!disabled && !readOnly}
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
            minHeight: inputMinHeight,
            padding: 0,
            color: colors.contentColor,
            textAlignVertical: props.multiline ? 'top' : 'center',
          },
          style,
        ]}
        testID={testID}
        value={value}
      />
      {trailingAccessory ? (
        <View style={{ marginLeft: theme.spacing.s }}>{trailingAccessory}</View>
      ) : null}
    </View>
  );
}
