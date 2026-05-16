import React from 'react';
import { View } from 'react-native';

import { Box } from '../../layout';
import { ButtonBase } from '../../primitives/button-base';
import { Icon } from '../../primitives/icon';
import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import { resolveNavigationAccessibilityState, resolveNavigationItemPresentation } from './helpers';
import type { NavigationItemProps } from './types';

export function NavigationItem({ item, compact = false, testID }: NavigationItemProps) {
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
      accessibilityRole={item.accessibilityRole ?? 'button'}
      accessibilityState={resolvedAccessibilityState}
      disabled={disabled}
      onPress={item.onPress}
      testID={resolvedTestID}
    >
      {(state) => {
        const presentation = resolveNavigationItemPresentation(theme, {
          active,
          disabled,
          state,
        });

        return (
          <Box
            px="m"
            py={compact ? 's' : 'm'}
            radius="m"
            style={{
              backgroundColor: presentation.backgroundColor,
              flexDirection: 'row',
              alignItems: 'center',
              opacity: presentation.opacity,
            }}
          >
            {item.icon ? (
              <View style={{ marginRight: theme.spacing.s }}>
                <Icon
                  color={presentation.contentColor}
                  name={item.icon.name}
                  provider={item.icon.provider}
                  size={compact ? 's' : 'm'}
                />
              </View>
            ) : null}
            <Box flex={1}>
              <Text
                color={active && !disabled ? 'primary' : undefined}
                emphasis={disabled ? 'muted' : 'default'}
                numberOfLines={1}
                variant={compact ? 'bodySmall' : 'body'}
                weight="medium"
              >
                {item.label}
              </Text>
            </Box>
            {item.badge ? <View style={{ marginLeft: theme.spacing.s }}>{item.badge}</View> : null}
          </Box>
        );
      }}
    </ButtonBase>
  );
}
