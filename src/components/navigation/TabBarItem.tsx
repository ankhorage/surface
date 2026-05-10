import React from 'react';
import { View } from 'react-native';

import { Box } from '../../layout';
import { ButtonBase } from '../../primitives/button-base';
import { Icon } from '../../primitives/icon';
import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import { resolveNavigationAccessibilityState, resolveNavigationItemPresentation } from './helpers';
import type { TabBarItemProps } from './types';

export function TabBarItem({ item, compact = false, testID }: TabBarItemProps) {
  const { theme } = useTheme();
  const active = Boolean(item.active);
  const disabled = Boolean(item.disabled);
  const resolvedTestID = item.testID ?? (testID ? `${testID}-item-${item.id}` : undefined);
  const resolvedAccessibilityState = resolveNavigationAccessibilityState(
    active,
    disabled,
    item.accessibilityState,
  );

  return (
    <ButtonBase
      accessibilityLabel={item.accessibilityLabel}
      accessibilityRole={item.accessibilityRole ?? 'tab'}
      accessibilityState={resolvedAccessibilityState}
      disabled={disabled}
      onPress={item.onPress}
      style={{ flex: 1 }}
      testID={resolvedTestID}
    >
      {(state) => {
        const presentation = resolveNavigationItemPresentation(theme, {
          active,
          disabled,
          state,
        });
        const contentColor = disabled
          ? theme.semantics.content.muted
          : active
            ? theme.semantics.action.primary.base
            : theme.semantics.content.muted;

        return (
          <Box
            px="m"
            py={compact ? 's' : 'm'}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: presentation.backgroundColor,
              opacity: presentation.opacity,
            }}
          >
            {item.icon ? (
              <View style={{ marginBottom: item.label ? theme.spacing.xs : 0 }}>
                <Icon
                  color={contentColor}
                  name={item.icon.name}
                  provider={item.icon.provider}
                  size={compact ? 's' : 'm'}
                />
              </View>
            ) : null}
            {item.label ? (
              <Text
                color={contentColor}
                numberOfLines={1}
                variant={compact ? 'bodySmall' : 'label'}
                weight="medium"
              >
                {item.label}
              </Text>
            ) : null}
          </Box>
        );
      }}
    </ButtonBase>
  );
}
