import React from 'react';
import { Pressable, View, type LayoutRectangle } from 'react-native';

import { FocusScope } from '../../internal/focus/FocusScope';
import { useFocusManager } from '../../internal/focus/useFocusManager';
import { Portal } from '../../internal/overlay/Portal';
import { resolveOverlayAnimation } from '../../internal/resolvers';
import { Box, Surface } from '../../layout';
import { ButtonBase } from '../../primitives/button-base';
import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import { resolveNextMenuIndex } from './navigation';
import type { MenuProps } from './types';

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

export function Menu({
  trigger,
  items,
  onDismiss,
  closeOnSelect = true,
  testID,
}: MenuProps) {
  const { theme } = useTheme();
  const { bindKeydown } = useFocusManager();
  const animation = resolveOverlayAnimation('menu');
  const anchorRef = React.useRef<View | null>(null);
  const [open, setOpen] = React.useState(false);
  const [layout, setLayout] = React.useState<LayoutRectangle | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const enabledItems = React.useMemo(
    () => items.filter((item) => !item.disabled),
    [items],
  );

  const closeMenu = React.useCallback(() => {
    setOpen(false);
    onDismiss?.();
  }, [onDismiss]);

  const openMenu = React.useCallback(() => {
    measureNode(anchorRef.current, setLayout);
    const firstEnabledIndex = items.findIndex((item) => !item.disabled);
    setActiveIndex(firstEnabledIndex === -1 ? 0 : firstEnabledIndex);
    setOpen(true);
  }, [items]);

  React.useEffect(() => {
    if (!open) {
      return undefined;
    }

    return bindKeydown((event) => {
      const key = event.key;
      if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'Home' || key === 'End') {
        event.preventDefault();
        setActiveIndex((current) => resolveNextMenuIndex(items.length, current, key));
      }

      if (event.key === 'Enter') {
        event.preventDefault();
        const activeItem = items[activeIndex];
        if (activeItem && !activeItem.disabled) {
          activeItem.onPress?.();
          if (closeOnSelect) {
            closeMenu();
          }
        }
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
      }
    });
  }, [activeIndex, bindKeydown, closeMenu, closeOnSelect, items, open]);

  return (
    <View collapsable={false} ref={anchorRef}>
      <ButtonBase onPress={open ? closeMenu : openMenu} testID={testID ? `${testID}-trigger` : undefined}>
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
                p="xs"
                style={{
                  minWidth: Math.max(layout?.width ?? 0, 180),
                  shadowOpacity: 0.12,
                  shadowRadius: 12,
                  shadowOffset: { width: 0, height: 6 },
                }}
                testID={testID}
                variant="raised"
              >
                {items.map((item, index) => {
                  const selected = index === activeIndex;

                  return (
                    <Pressable
                      accessibilityRole="menuitem"
                      disabled={item.disabled}
                      key={item.id}
                      onPress={() => {
                        if (item.disabled) {
                          return;
                        }

                        item.onPress?.();
                        if (closeOnSelect) {
                          closeMenu();
                        }
                      }}
                    >
                      <Box
                        px="m"
                        py="s"
                        style={{
                          backgroundColor: selected
                            ? theme.semantics.action.primary.softBg
                            : 'transparent',
                          opacity: item.disabled ? 0.56 : 1,
                        }}
                      >
                        <Text
                          color={
                            selected
                              ? theme.semantics.action.primary.base
                              : theme.semantics.content.default
                          }
                          variant="bodySmall"
                        >
                          {item.label}
                        </Text>
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
