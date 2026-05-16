import React from 'react';

import {
  resolveFieldState,
  resolveIndicatorSize,
  resolveSelectionControlColors,
  resolveSelectionControlNextChecked,
} from '../../internal/resolvers';
import { useControllableState } from '../../internal/useControllableState';
import { Box } from '../../layout';
import { ButtonBase } from '../../primitives/button-base';
import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import type { CheckboxProps } from './types';

export function Checkbox({
  children,
  checked,
  defaultChecked = false,
  onCheckedChange,
  color = 'primary',
  size = 'm',
  disabled = false,
  invalid = false,
  readOnly = false,
  accessibilityLabel,
  testID,
  ...props
}: CheckboxProps) {
  const { theme } = useTheme();
  const [isChecked, setChecked] = useControllableState<boolean>({
    value: checked,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });
  const indicatorSize = resolveIndicatorSize(size);
  const nextChecked = resolveSelectionControlNextChecked({
    checked: isChecked,
    disabled,
    kind: 'checkbox',
    readOnly,
  });

  return (
    <ButtonBase
      {...props}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: isChecked }}
      disabled={disabled}
      onPress={
        nextChecked === null
          ? undefined
          : () => {
              setChecked(nextChecked);
            }
      }
      testID={testID}
    >
      {(interactionState) => {
        const fieldState = resolveFieldState({
          disabled,
          focused: interactionState.focused,
          invalid,
          readOnly,
        });
        const colors = resolveSelectionControlColors(theme, {
          checked: isChecked,
          fieldState,
          hovered: interactionState.hovered,
          pressed: interactionState.pressed,
          color,
        });
        const labelEmphasis =
          colors.labelColor === theme.semantics.content.muted ? 'muted' : 'default';
        const indicatorColor = fieldState.invalid ? 'error' : color;
        const indicatorEmphasis = disabled ? 'muted' : 'inverse';

        return (
          <Box
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              opacity: colors.opacity,
            }}
          >
            <Box
              radius="s"
              style={{
                alignItems: 'center',
                backgroundColor: colors.backgroundColor,
                borderColor: colors.borderColor,
                borderWidth: 1.5,
                height: indicatorSize.checkbox,
                justifyContent: 'center',
                width: indicatorSize.checkbox,
              }}
            >
              {isChecked ? (
                <Text
                  color={disabled ? undefined : indicatorColor}
                  emphasis={indicatorEmphasis}
                  variant="caption"
                  weight="bold"
                >
                  ✓
                </Text>
              ) : null}
            </Box>
            {children ? (
              <Box ml="s">
                <Text emphasis={labelEmphasis}>{children}</Text>
              </Box>
            ) : null}
          </Box>
        );
      }}
    </ButtonBase>
  );
}
