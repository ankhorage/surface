import React from 'react';

import { resolveFieldState } from '../../internal/resolvers';
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
  const fieldState = resolveFieldState({
    disabled,
    invalid,
    readOnly,
  });
  const labelTone = fieldState.invalid
    ? 'danger'
    : fieldState.disabled || fieldState.readOnly
      ? 'muted'
      : 'default';

  return (
    <Stack gap="xs" testID={testID}>
      {label ? (
        <Label required={required} tone={labelTone}>
          {label}
        </Label>
      ) : null}
      <Box>{children}</Box>
      {errorText ? (
        <HelperText tone="danger">{errorText}</HelperText>
      ) : helperText ? (
        <HelperText tone={fieldState.disabled ? 'muted' : 'default'}>{helperText}</HelperText>
      ) : null}
    </Stack>
  );
}
