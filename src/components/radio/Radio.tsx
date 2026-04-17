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
import type { RadioProps } from './types';

export function Radio({
  children,
  checked,
  defaultChecked = false,
  onCheckedChange,
  tone = 'primary',
  size = 'm',
  disabled = false,
  invalid = false,
  readOnly = false,
  accessibilityLabel,
  testID,
  ...props
}: RadioProps) {
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
    kind: 'radio',
    readOnly,
  });

  return (
    <ButtonBase
      {...props}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="radio"
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
          tone,
        });

        return (
          <Box
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              opacity: colors.opacity,
            }}
          >
            <Box
              radius="full"
              style={{
                alignItems: 'center',
                backgroundColor: colors.backgroundColor,
                borderColor: colors.borderColor,
                borderWidth: 1.5,
                height: indicatorSize.radio,
                justifyContent: 'center',
                width: indicatorSize.radio,
              }}
            >
              {isChecked ? (
                <Box
                  radius="full"
                  style={{
                    backgroundColor: colors.indicatorColor,
                    height: indicatorSize.radioDot,
                    width: indicatorSize.radioDot,
                  }}
                />
              ) : null}
            </Box>
            {children ? (
              <Box ml="s">
                <Text color={colors.labelColor}>{children}</Text>
              </Box>
            ) : null}
          </Box>
        );
      }}
    </ButtonBase>
  );
}
