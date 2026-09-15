import React from 'react';
import { View as ReactNativeView } from 'react-native';

import { View } from '../../features/layout/public';
import { Text } from '../../features/typography/public';
import { ButtonBase } from '../../primitives/button-base';
import { useTheme } from '../../theme/ThemeContext';
import type { ListItemProps } from './types';

/*** Renders the content row shared by static and interactive ListItem variants. */
function ListItemContent({
  title,
  description,
  leading,
  trailing,
  testID,
}: Omit<ListItemProps, 'disabled' | 'onPress'>) {
  const { theme } = useTheme();

  return (
    <View
      px="m"
      py="m"
      testID={testID}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {leading ? (
        <ReactNativeView style={{ marginRight: theme.spacing.m }}>{leading}</ReactNativeView>
      ) : null}
      <View flex={1}>
        {title ? (
          <Text numberOfLines={1} variant="body" weight="medium">
            {title}
          </Text>
        ) : null}
        {description ? (
          <Text emphasis="muted" numberOfLines={2} variant="bodySmall">
            {description}
          </Text>
        ) : null}
      </View>
      {trailing ? (
        <ReactNativeView style={{ marginLeft: theme.spacing.m }}>{trailing}</ReactNativeView>
      ) : null}
    </View>
  );
}

/*** Renders a static or pressable list item. */
export function ListItem({ onPress, disabled = false, testID, ...content }: ListItemProps) {
  const { theme } = useTheme();

  if (!onPress) return <ListItemContent {...content} testID={testID} />;

  return (
    <ButtonBase accessibilityRole="button" disabled={disabled} onPress={onPress} testID={testID}>
      {(state) => (
        <View
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
        </View>
      )}
    </ButtonBase>
  );
}
