import React from 'react';

import { resolveFieldState, resolveIndicatorSize, resolveSelectionControlColors, resolveSelectionControlNextChecked } from '../../../../../internal/resolvers';
import { useControllableState } from '../../../../../internal/useControllableState';
import { ButtonBase } from '../../../../../primitives/button-base';
import { useTheme } from '../../../../../theme/ThemeContext';
import type { SwitchProps } from '../../../../../types/switch';
import { View } from '../../../../layout/public';
import { Text } from '../../../../typography/public';

/*** Renders a controlled or uncontrolled accessible switch. */
export function Switch({
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
}: SwitchProps) {
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
    kind: 'switch',
    readOnly,
  });

  return (
    <ButtonBase
      {...props}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="switch"
      accessibilityState={{ checked: isChecked }}
      disabled={disabled}
      onPress={nextChecked === null ? undefined : () => setChecked(nextChecked)}
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

        return (
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              opacity: colors.opacity,
            }}
          >
            <View
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
              <View
                radius="full"
                style={{
                  alignSelf: isChecked ? 'flex-end' : 'flex-start',
                  backgroundColor: colors.thumbColor,
                  height: indicatorSize.switchThumb,
                  width: indicatorSize.switchThumb,
                }}
              />
            </View>
            {children ? (
              <View ml="s">
                <Text emphasis={labelEmphasis}>{children}</Text>
              </View>
            ) : null}
          </View>
        );
      }}
    </ButtonBase>
  );
}
