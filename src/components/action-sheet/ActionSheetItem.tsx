import React from 'react';

import { Box, Inline, Stack } from '../../layout';
import { ButtonBase } from '../../primitives/button-base';
import { Text } from '../../primitives/text';
import type { ActionSheetItemProps } from './types';

export function ActionSheetItem({
  label,
  description,
  leading,
  trailing,
  color,
  disabled = false,
  selected = false,
  onPress,
  testID,
}: ActionSheetItemProps) {
  return (
    <ButtonBase
      accessibilityRole="button"
      accessibilityState={{ disabled, selected }}
      disabled={disabled}
      onPress={onPress}
      radius="m"
      testID={testID}
    >
      {(state) => (
        <Box
          px="m"
          py="m"
          radius="m"
          style={{
            opacity: state.disabled ? 0.56 : 1,
          }}
        >
          <Inline align="center" gap="m" justify="space-between" wrap="nowrap">
            {leading ? <Box>{leading}</Box> : null}
            <Box flex={1}>
              <Stack gap="xxs">
                <Text color={color} variant="body" weight={selected ? 'semiBold' : 'medium'}>
                  {label}
                </Text>
                {description ? (
                  <Text emphasis="muted" variant="bodySmall">
                    {description}
                  </Text>
                ) : null}
              </Stack>
            </Box>
            {trailing ? <Box>{trailing}</Box> : null}
          </Inline>
        </Box>
      )}
    </ButtonBase>
  );
}
