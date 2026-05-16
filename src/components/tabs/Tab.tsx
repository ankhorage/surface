import React from 'react';
import { Pressable } from 'react-native';

import { Box } from '../../layout';
import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import { useTabsContext } from './context';
import type { TabProps } from './types';

export function Tab({ value, children, disabled = false, testID }: TabProps) {
  const { theme } = useTheme();
  const {
    activeValue,
    getPanelId,
    getTabId,
    registerTab,
    setActiveValue,
    setFocusedValue,
    unregisterTab,
  } = useTabsContext();
  const pressableRef = React.useRef<React.ElementRef<typeof Pressable> | null>(null);
  const selected = activeValue === value;
  const tabId = getTabId(value);
  const panelId = getPanelId(value);

  React.useEffect(() => {
    registerTab({
      disabled,
      focus: () => {
        const focusable = pressableRef.current as unknown as {
          focus?: (() => void) | undefined;
        } | null;
        focusable?.focus?.();
      },
      value,
    });

    return () => {
      unregisterTab(value);
    };
  }, [disabled, registerTab, unregisterTab, value]);

  return (
    <Pressable
      accessibilityLabel={undefined}
      accessibilityRole="tab"
      accessibilityState={{ disabled, selected }}
      nativeID={tabId}
      aria-controls={panelId}
      disabled={disabled}
      onFocus={() => setFocusedValue(value)}
      onBlur={() => setFocusedValue(undefined)}
      onPress={() => {
        if (!disabled) {
          setActiveValue(value);
        }
      }}
      ref={pressableRef}
      testID={testID}
    >
      <Box
        px="m"
        py="s"
        style={{
          borderBottomColor: selected
            ? theme.semantics.action.primary.base
            : theme.semantics.border.default,
          borderBottomWidth: 2,
          opacity: disabled ? 0.64 : 1,
        }}
      >
        <Text color={selected ? 'primary' : undefined} variant="label" weight="medium">
          {children}
        </Text>
      </Box>
    </Pressable>
  );
}
