import React from 'react';

import { resolveFieldPresentation, resolveFieldState } from '../../internal/resolvers';
import { Box, Stack } from '../../layout';
import { HelperText } from '../helper-text';
import { Label } from '../label';
import type { FieldProps } from './types';

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
    <Stack gap="xs" testID={testID}>
      {label ? (
        <Label
          color={presentation.labelColor}
          emphasis={presentation.labelEmphasis}
          required={required}
        >
          {label}
        </Label>
      ) : null}
      <Box>{children}</Box>
      {hasErrorText ? (
        <HelperText color={presentation.helperColor} emphasis={presentation.helperEmphasis}>
          {errorText}
        </HelperText>
      ) : helperText ? (
        <HelperText color={presentation.helperColor} emphasis={presentation.helperEmphasis}>
          {helperText}
        </HelperText>
      ) : null}
    </Stack>
  );
}
