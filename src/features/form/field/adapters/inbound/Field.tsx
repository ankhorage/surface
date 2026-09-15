import React from 'react';

import { resolveFieldPresentation, resolveFieldState } from '../../../../../internal/resolvers';
import { View } from '../../../../layout/public';
import { Text } from '../../../../typography/public';
import type { FieldProps } from '../../../../../types/field';

/*** Composes a control with its label and helper or error message. */
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
  const hasErrorText = errorText !== undefined && errorText !== null && errorText !== '';
  const fieldState = resolveFieldState({
    disabled,
    invalid: invalid || hasErrorText,
    readOnly,
  });
  const presentation = resolveFieldPresentation(fieldState);
  const message = hasErrorText ? errorText : helperText;

  return (
    <View gap="xs" testID={testID}>
      {label !== undefined && label !== null ? (
        <View direction="row" align="center" gap="xs">
          <View flex={1}>
            {typeof label === 'string' || typeof label === 'number' ? (
              <Text
                color={presentation.labelColor}
                emphasis={presentation.labelEmphasis}
                variant="label"
                weight="medium"
              >
                {label}
              </Text>
            ) : (
              label
            )}
          </View>
          {required ? (
            <Text color="error" variant="label" weight="medium">
              *
            </Text>
          ) : null}
        </View>
      ) : null}
      <View>{children}</View>
      {message !== undefined && message !== null && message !== '' ? (
        typeof message === 'string' || typeof message === 'number' ? (
          <Text
            color={presentation.helperColor}
            emphasis={presentation.helperEmphasis}
            variant="caption"
          >
            {message}
          </Text>
        ) : (
          message
        )
      ) : null}
    </View>
  );
}
