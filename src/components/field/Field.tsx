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
        <Label required={required} tone={presentation.labelTone}>
          {label}
        </Label>
      ) : null}
      <Box>{children}</Box>
      {hasErrorText ? (
        <HelperText tone={presentation.helperTone}>{errorText}</HelperText>
      ) : helperText ? (
        <HelperText tone={presentation.helperTone}>{helperText}</HelperText>
      ) : null}
    </Stack>
  );
}
