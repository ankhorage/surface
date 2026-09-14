import type { TextStyle, ViewStyle } from 'react-native';

import {
  resolveControlSize,
  resolveFieldState,
  resolveInputColors,
  resolveTextStyles,
} from '../../../../../internal/resolvers';
import type { SurfaceTheme } from '../../../../../theme/types';
import type { TextInputProps } from '../../../../../types/text-input';

/*** Resolves layout, colors, and editability for one TextInput state. */
export function resolveTextInputPresentation(
  theme: SurfaceTheme,
  props: TextInputProps,
  focused: boolean,
): TextInputPresentation {
  const size = props.size ?? 'm';
  const disabled = props.disabled ?? false;
  const readOnly = props.readOnly ?? false;
  const controlSize = resolveControlSize(theme, size);
  const fieldState = resolveFieldState({
    disabled,
    focused,
    invalid: props.invalid ?? false,
    readOnly,
  });
  const colors = resolveInputColors(theme, fieldState);
  const textStyle = resolveTextStyles(theme, { variant: controlSize.textVariant });
  const resolvedLineHeight =
    typeof textStyle.lineHeight === 'number'
      ? textStyle.lineHeight
      : controlSize.minHeight - controlSize.paddingVertical * 2;
  const lineCount = Math.max(props.numberOfLines ?? 1, 1);
  const inputMinHeight = props.multiline
    ? resolvedLineHeight * lineCount
    : controlSize.minHeight - controlSize.paddingVertical * 2;
  const containerMinHeight = props.multiline
    ? inputMinHeight + controlSize.paddingVertical * 2
    : controlSize.minHeight;

  return {
    accessorySpacing: theme.spacing.s,
    containerStyle: {
      alignItems: props.multiline ? 'flex-start' : 'center',
      backgroundColor: colors.backgroundColor,
      borderColor: colors.borderColor,
      borderRadius: controlSize.borderRadius,
      borderWidth: 1,
      flexDirection: 'row',
      minHeight: containerMinHeight,
      opacity: colors.opacity,
      paddingHorizontal: controlSize.paddingHorizontal,
      paddingVertical: controlSize.paddingVertical,
    },
    editable: props.interactionPolicy === 'passive' ? false : !disabled && !readOnly,
    inputStyle: {
      color: colors.contentColor,
      flex: 1,
      minHeight: inputMinHeight,
      padding: 0,
      textAlignVertical: props.multiline ? 'top' : 'center',
    },
    numberOfLines: props.multiline ? props.numberOfLines : 1,
    placeholderColor: colors.placeholderColor,
  };
}

interface TextInputPresentation {
  accessorySpacing: number;
  containerStyle: ViewStyle;
  editable: boolean;
  inputStyle: TextStyle;
  numberOfLines: number | undefined;
  placeholderColor: string;
}
