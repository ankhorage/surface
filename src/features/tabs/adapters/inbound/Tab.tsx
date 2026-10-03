import React from 'react';
import { Pressable, type ViewStyle } from 'react-native';

import type { TabProps } from '../../../../types/tabs';
import { View } from '../../../layout/public';
import { useTheme } from '../../../theme/runtime';
import { Text } from '../../../typography/public';
import { useTabRegistration } from '../../composition/useTabRegistration';
import { useTabsContext } from '../../composition/useTabsContext';

/*** Renders one accessible selectable tab inside a Tabs context. */
export function Tab({
  value,
  children,
  disabled = false,
  interactionPolicy = 'enabled',
  testID,
  trailing,
}: TabProps) {
  const { theme } = useTheme();
  const { activeValue, getPanelId, getTabId, setActiveValue, setFocusedValue, variant } =
    useTabsContext();
  const pressableRef = useTabRegistration({ disabled, value });
  const selected = activeValue === value;
  const passive = interactionPolicy === 'passive';
  const onPress = passive || disabled ? undefined : () => setActiveValue(value);

  return (
    <Pressable
      accessibilityLabel={undefined}
      accessibilityRole="tab"
      accessibilityState={{ disabled, selected }}
      aria-controls={getPanelId(value)}
      disabled={disabled}
      nativeID={getTabId(value)}
      onBlur={() => setFocusedValue(undefined)}
      onFocus={() => setFocusedValue(value)}
      onPress={onPress}
      ref={pressableRef}
      testID={testID}
    >
      <View
        px="m"
        py="s"
        style={resolveTabStyle({
          activeBackground: theme.semantics.surface.subtle,
          borderColor: selected ? 'transparent' : theme.semantics.border.default,
          disabled,
          radius: theme.radii.s,
          selected,
          variant,
        })}
      >
        {renderTabContent(children, trailing, selected)}
      </View>
    </Pressable>
  );
}

/*** Renders the canonical tab label with optional trailing content. */
function renderTabContent(
  children: React.ReactNode,
  trailing: React.ReactNode,
  selected: boolean,
): React.ReactNode {
  const label = (
    <Text color={selected ? 'primary' : undefined} variant="label" weight="medium">
      {children}
    </Text>
  );
  if (trailing === undefined) return label;
  return (
    <View align="center" direction="row" gap="xs">
      {label}
      {trailing}
    </View>
  );
}

/*** Resolves active and disabled visual state without inline JSX styles. */
function resolveTabStyle({
  activeBackground,
  borderColor,
  disabled,
  radius,
  selected,
  variant,
}: {
  activeBackground: string;
  borderColor: string;
  disabled: boolean;
  radius: number;
  selected: boolean;
  variant: 'line' | 'attached';
}): ViewStyle {
  if (variant === 'attached') {
    return {
      backgroundColor: selected ? activeBackground : 'transparent',
      borderTopLeftRadius: selected ? radius : 0,
      borderTopRightRadius: selected ? radius : 0,
      opacity: disabled ? 0.64 : 1,
    };
  }

  return { borderBottomColor: borderColor, borderBottomWidth: 2, opacity: disabled ? 0.64 : 1 };
}
