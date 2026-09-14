import React from 'react';
import type { ViewStyle } from 'react-native';

import {
  type InteractionState,
  resolveFieldState,
  resolveIndicatorSize,
  resolveSelectionControlColors,
  resolveSelectionControlNextChecked,
} from '../../../../../internal/resolvers';
import { useControllableState } from '../../../../../internal/useControllableState';
import { ButtonBase } from '../../../../../primitives/button-base';
import { useTheme } from '../../../../../theme/ThemeContext';
import type { SurfaceTheme } from '../../../../../theme/types';
import type { CheckboxProps } from '../../../../../types/checkbox';
import { Box } from '../../../../layout/public';
import { Text } from '../../../../typography/public';

/*** Renders a controlled or uncontrolled accessible checkbox. */
export function Checkbox({
  accessibilityLabel,
  checked,
  children,
  color = 'primary',
  defaultChecked = false,
  disabled = false,
  invalid = false,
  onCheckedChange,
  readOnly = false,
  size = 'm',
  testID,
  ...props
}: CheckboxProps) {
  const { theme } = useTheme();
  const [isChecked, setChecked] = useControllableState<boolean>({
    value: checked,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });
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
      onPress={nextChecked === null ? undefined : () => setChecked(nextChecked)}
      testID={testID}
    >
      {(interactionState) =>
        renderCheckboxContent({
          children,
          color,
          disabled,
          interactionState,
          invalid,
          isChecked,
          readOnly,
          size,
          theme,
        })
      }
    </ButtonBase>
  );
}

/*** Renders the checkbox indicator and optional label for one interaction state. */
function renderCheckboxContent(input: CheckboxContentInput) {
  const { children, color, disabled, interactionState, invalid, isChecked, readOnly, size, theme } =
    input;
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
  const indicatorSize = resolveIndicatorSize(size);
  const labelEmphasis =
    colors.labelColor === theme.semantics.content.muted ? 'muted' : 'default';
  const indicatorColor = fieldState.invalid ? 'error' : color;

  return (
    <Box style={resolveSelectionRowStyle(colors.opacity)}>
      <Box
        radius="s"
        style={resolveCheckboxIndicatorStyle(
          colors.backgroundColor,
          colors.borderColor,
          indicatorSize.checkbox,
        )}
      >
        {isChecked ? (
          <Text
            color={disabled ? undefined : indicatorColor}
            emphasis={disabled ? 'muted' : 'inverse'}
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
}

/*** Resolves the horizontal selection-control row style. */
function resolveSelectionRowStyle(opacity: number | undefined): ViewStyle {
  return { alignItems: 'center', flexDirection: 'row', opacity };
}

/*** Resolves checkbox indicator dimensions and interaction colors. */
function resolveCheckboxIndicatorStyle(
  backgroundColor: string,
  borderColor: string,
  size: number,
): ViewStyle {
  return {
    alignItems: 'center',
    backgroundColor,
    borderColor,
    borderWidth: 1.5,
    height: size,
    justifyContent: 'center',
    width: size,
  };
}

interface CheckboxContentInput {
  children: CheckboxProps['children'];
  color: NonNullable<CheckboxProps['color']>;
  disabled: boolean;
  interactionState: InteractionState;
  invalid: boolean;
  isChecked: boolean;
  readOnly: boolean;
  size: NonNullable<CheckboxProps['size']>;
  theme: SurfaceTheme;
}
