import React from 'react';

import { View } from '../../features/layout/public';
import { resolveFieldPresentation, resolveFieldState } from '../../internal/resolvers';
import { HelperText } from '../helper-text';
import { Label } from '../label';
import type { FieldProps } from './types';

/*** Composes a label, control, and helper or error message into one field. */
export function Field({
  children,
  label,
  helperText,
  errorText,
  required = false,
  disabled = false,
  invalid = false,
  readOnly = false,
  testID,
}: FieldProps) {
  const hasErrorText = Boolean(errorText);
  const fieldState = resolveFieldState({
    disabled,
    invalid: invalid || hasErrorText,
    readOnly,
  });
  const presentation = resolveFieldPresentation(fieldState);

  return (
    <View gap="xs" testID={testID}>
      {label ? (
        <Label
          color={presentation.labelColor}
          emphasis={presentation.labelEmphasis}
          required={required}
        >
          {label}
        </Label>
      ) : null}
      <View>{children}</View>
      {hasErrorText ? (
        <HelperText color={presentation.helperColor} emphasis={presentation.helperEmphasis}>
          {errorText}
        </HelperText>
      ) : helperText ? (
        <HelperText color={presentation.helperColor} emphasis={presentation.helperEmphasis}>
          {helperText}
        </HelperText>
      ) : null}
    </View>
  );
}
