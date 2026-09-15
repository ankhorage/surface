import React from 'react';

import { ButtonBase } from '../../../../primitives/button-base';
import { useTheme } from '../../../../theme/ThemeContext';
import type { ListItemProps } from '../../../../types/list';
import { View } from '../../../layout/public';
import { Text } from '../../../typography/public';

/*** Renders a static or interactive list item with shared row geometry and interaction states. */
export function ListItem({
  children,
  title,
  description,
  leading,
  trailing,
  onPress,
  disabled = false,
  selected = false,
  compact = false,
  interactionPolicy,
  accessibilityLabel,
  testID,
}: ListItemProps) {
  const { theme } = useTheme();

  if (!onPress) {
    return (
      <ListItemContent
        backgroundColor={selected ? theme.semantics.selection.background : 'transparent'}
        compact={compact}
        description={description}
        disabled={disabled}
        leading={leading}
        testID={testID}
        title={title}
        trailing={trailing}
      >
        {children}
      </ListItemContent>
    );
  }

  return (
    <ButtonBase
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      accessibilityState={{ disabled, selected }}
      disabled={disabled}
      interactionPolicy={interactionPolicy}
      onPress={onPress}
      testID={testID}
    >
      {(state) => (
        <ListItemContent
          backgroundColor={
            state.pressed
              ? theme.semantics.neutral.surfaceActive
              : state.hovered
                ? theme.semantics.neutral.surfaceHover
                : selected
                  ? theme.semantics.selection.background
                  : 'transparent'
          }
          compact={compact}
          description={description}
          disabled={state.disabled}
          leading={leading}
          title={title}
          trailing={trailing}
        >
          {children}
        </ListItemContent>
      )}
    </ButtonBase>
  );
}

/*** Renders the shared visual row content for static and interactive list items. */
function ListItemContent({
  backgroundColor,
  children,
  compact,
  description,
  disabled,
  leading,
  testID,
  title,
  trailing,
}: Omit<ListItemProps, 'accessibilityLabel' | 'interactionPolicy' | 'onPress' | 'selected'> & {
  backgroundColor: string;
}) {
  const content =
    children ??
    (title !== undefined || description !== undefined ? (
      <View flex={1} gap="xs">
        {title !== undefined ? (
          <Text numberOfLines={1} variant="body" weight="medium">
            {title}
          </Text>
        ) : null}
        {description !== undefined ? (
          <Text emphasis="muted" numberOfLines={2} variant="bodySmall">
            {description}
          </Text>
        ) : null}
      </View>
    ) : null);

  return (
    <View
      align="center"
      direction="row"
      gap="m"
      px="m"
      py={compact ? 's' : 'm'}
      testID={testID}
      style={{ backgroundColor, opacity: disabled ? 0.72 : 1 }}
    >
      {leading !== undefined ? <View>{leading}</View> : null}
      <View flex={1}>{content}</View>
      {trailing !== undefined ? <View>{trailing}</View> : null}
    </View>
  );
}
