import React from 'react';
import { View } from 'react-native';

import { Box } from '../../layout';
import { ButtonBase } from '../../primitives/button-base';
import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import type { ListItemProps } from './types';

function ListItemContent({
  title,
  description,
  leading,
  trailing,
  testID,
}: Omit<ListItemProps, 'disabled' | 'onPress'>) {
  const { theme } = useTheme();

  return (
    <Box
      px="m"
      py="m"
      testID={testID}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {leading ? <View style={{ marginRight: theme.spacing.m }}>{leading}</View> : null}
      <Box flex={1}>
        {title ? (
          <Text numberOfLines={1} variant="body" weight="medium">
            {title}
          </Text>
        ) : null}
        {description ? (
          <Text numberOfLines={2} tone="muted" variant="bodySmall">
            {description}
          </Text>
        ) : null}
      </Box>
      {trailing ? <View style={{ marginLeft: theme.spacing.m }}>{trailing}</View> : null}
    </Box>
  );
}

export function ListItem({ onPress, disabled = false, testID, ...content }: ListItemProps) {
  const { theme } = useTheme();

  if (!onPress) {
    return <ListItemContent {...content} testID={testID} />;
  }

  return (
    <ButtonBase accessibilityRole="button" disabled={disabled} onPress={onPress} testID={testID}>
      {(state) => (
        <Box
          style={{
            backgroundColor: state.pressed
              ? theme.semantics.neutral.surfaceActive
              : state.hovered
                ? theme.semantics.neutral.surfaceHover
                : 'transparent',
            opacity: state.disabled ? 0.72 : 1,
          }}
        >
          <ListItemContent {...content} />
        </Box>
      )}
    </ButtonBase>
  );
}
