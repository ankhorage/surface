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
import type { RadioProps } from '../../../../../types/radio';
import { Box } from '../../../../layout/public';
import { Text } from '../../../../typography/public';
import { isRadioTextContent } from '../../utils/isRadioTextContent';

/*** Renders one accessible radio control with text or structured label content. */
export function Radio({
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
}: RadioProps) {
  const { theme } = useTheme();
  const [isChecked, setChecked] = useControllableState<boolean>({
    value: checked,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });
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
      onPress={nextChecked === null ? undefined : () => setChecked(nextChecked)}
      testID={testID}
    >
      {(interactionState) =>
        renderRadioContent({
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

/*** Renders the radio indicator and optional content for one interaction state. */
function renderRadioContent(input: RadioContentInput) {
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
  const hasContent = children !== undefined && children !== null && children !== false;

  return (
    <Box style={resolveSelectionRowStyle(colors.opacity)}>
      <Box
        radius="full"
        style={resolveRadioIndicatorStyle(
          colors.backgroundColor,
          colors.borderColor,
          indicatorSize.radio,
        )}
      >
        {isChecked ? (
          <Box
            radius="full"
            style={resolveRadioDotStyle(colors.indicatorColor, indicatorSize.radioDot)}
          />
        ) : null}
      </Box>
      {hasContent ? (
        <Box flex={1} ml="s">
          {isRadioTextContent(children) ? (
            <Text emphasis={labelEmphasis}>{children}</Text>
          ) : (
            children
          )}
        </Box>
      ) : null}
    </Box>
  );
}

/*** Resolves the horizontal selection-control row style. */
function resolveSelectionRowStyle(opacity: number | undefined): ViewStyle {
  return { alignItems: 'center', flexDirection: 'row', opacity };
}

/*** Resolves radio indicator dimensions and interaction colors. */
function resolveRadioIndicatorStyle(
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

/*** Resolves the checked radio dot style. */
function resolveRadioDotStyle(backgroundColor: string, size: number): ViewStyle {
  return { backgroundColor, height: size, width: size };
}

interface RadioContentInput {
  children: RadioProps['children'];
  color: NonNullable<RadioProps['color']>;
  disabled: boolean;
  interactionState: InteractionState;
  invalid: boolean;
  isChecked: boolean;
  readOnly: boolean;
  size: NonNullable<RadioProps['size']>;
  theme: SurfaceTheme;
}
