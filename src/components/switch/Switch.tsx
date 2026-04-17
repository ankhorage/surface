import React from 'react';

import {
  resolveFieldState,
  resolveIndicatorSize,
  resolveSelectionControlColors,
} from '../../internal/resolvers';
import { useControllableState } from '../../internal/useControllableState';
import { Box } from '../../layout';
import { ButtonBase } from '../../primitives/button-base';
import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import type { SwitchProps } from './types';

export function Switch({
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
}: SwitchProps) {
  const { theme } = useTheme();
  const [isChecked, setChecked] = useControllableState<boolean>({
    value: checked,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });
  const indicatorSize = resolveIndicatorSize(size);

  return (
    <ButtonBase
      {...props}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="switch"
      accessibilityState={{ checked: isChecked }}
      disabled={disabled}
      onPress={
        readOnly
          ? undefined
          : () => {
              setChecked(!isChecked);
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
                backgroundColor: colors.trackColor,
                borderColor: colors.borderColor,
                borderWidth: 1,
                justifyContent: 'center',
                minWidth: indicatorSize.switchWidth,
                paddingHorizontal: 2,
                width: indicatorSize.switchWidth,
                height: indicatorSize.switchHeight,
              }}
            >
              <Box
                radius="full"
                style={{
                  alignSelf: isChecked ? 'flex-end' : 'flex-start',
                  backgroundColor: colors.thumbColor,
                  height: indicatorSize.switchThumb,
                  width: indicatorSize.switchThumb,
                }}
              />
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
