import React from 'react';
import { type LayoutRectangle, Pressable, View } from 'react-native';

import { FocusScope } from '../../internal/focus/FocusScope';
import { useFocusManager } from '../../internal/focus/useFocusManager';
import { Portal } from '../../internal/overlay/Portal';
import { resolveOverlayAnimation } from '../../internal/resolvers';
import { Box, Inline, Stack, Surface } from '../../layout';
import { ButtonBase } from '../../primitives/button-base';
import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import { resolveNextMenuIndex } from './navigation';
import type { MenuAction, MenuProps } from './types';

interface MeasurableNode {
  measureInWindow?: (
    callback: (x: number, y: number, width: number, height: number) => void,
  ) => void;
}

function measureNode(node: unknown, callback: (layout: LayoutRectangle) => void) {
  const measurableNode = node as MeasurableNode | null;
  measurableNode?.measureInWindow?.((x, y, width, height) => {
    callback({ height, width, x, y });
  });
}

function renderActionContent(action: MenuAction, active: boolean) {
  const titleColor =
    action.intent === 'danger' ? 'danger' : active || action.selected ? 'neutral' : undefined;

  return (
    <Inline align="center" gap="s" justify="space-between" wrap="nowrap">
      {action.leading ? <Box>{action.leading}</Box> : null}
      <Box flex={1}>
        <Stack gap="xxs">
          <Text
            color={titleColor}
            variant="bodySmall"
            weight={action.selected ? 'semiBold' : 'medium'}
          >
            {action.title}
          </Text>
          {action.description ? (
            <Text emphasis="muted" variant="caption">
              {action.description}
            </Text>
          ) : null}
        </Stack>
      </Box>
      {action.trailing ? <Box>{action.trailing}</Box> : null}
    </Inline>
  );
}

export function Menu({ trigger, actions, dismiss, closeOnSelect = true, testID }: MenuProps) {
  const { theme } = useTheme();
  const { bindKeydown } = useFocusManager();
  const animation = resolveOverlayAnimation('menu');
  const anchorRef = React.useRef<View | null>(null);
  const [open, setOpen] = React.useState(false);
  const [layout, setLayout] = React.useState<LayoutRectangle | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const closeMenu = React.useCallback(() => {
    setOpen(false);
    dismiss?.();
  }, [dismiss]);

  const activateAction = React.useCallback(
    (action: MenuAction) => {
      if (action.disabled) {
        return;
      }

      action.activate?.();
      if (closeOnSelect) {
        closeMenu();
      }
    },
    [closeMenu, closeOnSelect],
  );

  const openMenu = React.useCallback(() => {
    measureNode(anchorRef.current, setLayout);
    const firstEnabledIndex = actions.findIndex((action) => !action.disabled);
    setActiveIndex(firstEnabledIndex === -1 ? 0 : firstEnabledIndex);
    setOpen(true);
  }, [actions]);

  React.useEffect(() => {
    if (!open) {
      return undefined;
    }

    return bindKeydown((event) => {
      const { key } = event;
      if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'Home' || key === 'End') {
        event.preventDefault();
        setActiveIndex((current) => resolveNextMenuIndex(actions, current, key));
      }

      if (event.key === 'Enter') {
        event.preventDefault();
        const activeAction = actions[activeIndex];
        if (activeAction) {
          activateAction(activeAction);
        }
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
      }
    });
  }, [activateAction, actions, activeIndex, bindKeydown, closeMenu, open]);

  return (
    <View collapsable={false} ref={anchorRef}>
      <ButtonBase
        onPress={open ? closeMenu : openMenu}
        testID={testID ? `${testID}-trigger` : undefined}
      >
        {trigger}
      </ButtonBase>
      <Portal layer="menu" visible={open && Boolean(layout)}>
        <View
          pointerEvents="box-none"
          style={{
            bottom: 0,
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        >
          <Pressable
            onPress={closeMenu}
            style={{
              bottom: 0,
              left: 0,
              position: 'absolute',
              right: 0,
              top: 0,
            }}
          />
          <FocusScope active={open} onEscape={closeMenu}>
            <View
              style={{
                left: layout?.x ?? 0,
                position: 'absolute',
                top: (layout?.y ?? 0) + (layout?.height ?? 0) + animation.offset,
              }}
            >
              <Surface
                accessibilityRole="menu"
                p="xs"
                style={{
                  minWidth: Math.max(layout?.width ?? 0, 220),
                  shadowOpacity: 0.12,
                  shadowRadius: 12,
                  shadowOffset: { width: 0, height: 6 },
                }}
                testID={testID}
                variant="raised"
              >
                {actions.map((action, index) => {
                  const active = index === activeIndex;
                  const selected = action.selected || active;

                  return (
                    <Pressable
                      accessibilityRole="menuitem"
                      accessibilityState={{ disabled: action.disabled, selected }}
                      disabled={action.disabled}
                      key={action.id}
                      onPress={() => activateAction(action)}
                    >
                      <Box
                        px="m"
                        py="s"
                        radius="s"
                        style={{
                          backgroundColor: selected
                            ? theme.semantics.action.neutral.softBg
                            : 'transparent',
                          opacity: action.disabled ? 0.56 : 1,
                        }}
                        testID={testID ? `${testID}-item-${action.id}` : undefined}
                      >
                        {renderActionContent(action, active)}
                      </Box>
                    </Pressable>
                  );
                })}
              </Surface>
            </View>
          </FocusScope>
        </View>
      </Portal>
    </View>
  );
}
