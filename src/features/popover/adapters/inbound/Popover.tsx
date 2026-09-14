import React from 'react';
import {
  type LayoutRectangle,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

import { Portal } from '../../../../internal/overlay/Portal';
import { useControllableState } from '../../../../internal/useControllableState';
import type { PopoverProps } from '../../../../types/popover';
import { resolvePopoverPosition } from '../../utils/resolvePopoverPosition';

/*** Renders anchored overlay content through the shared Surface overlay stack. */
export function Popover({
  anchor,
  children,
  closeOnOutsidePress = true,
  defaultOpen = false,
  interactionPolicy = 'enabled',
  offset = 8,
  onOpenChange,
  open,
  placement = 'bottom-start',
  testID,
}: PopoverProps) {
  const anchorRef = React.useRef<View | null>(null);
  const [anchorLayout, setAnchorLayout] = React.useState<LayoutRectangle | null>(null);
  const [contentSize, setContentSize] = React.useState({ height: 0, width: 0 });
  const { height: viewportHeight, width: viewportWidth } = useWindowDimensions();
  const [resolvedOpen, setResolvedOpen] = useControllableState<boolean>({
    defaultValue: defaultOpen,
    onChange: onOpenChange,
    value: open,
  });
  const passive = interactionPolicy === 'passive';

  const close = React.useCallback(() => {
    if (!passive) setResolvedOpen(false);
  }, [passive, setResolvedOpen]);
  const toggle = React.useCallback(() => {
    if (!passive) setResolvedOpen(!resolvedOpen);
  }, [passive, resolvedOpen, setResolvedOpen]);
  const measureAnchor = React.useCallback(() => {
    anchorRef.current?.measureInWindow((x, y, width, height) => {
      setAnchorLayout({ height, width, x, y });
    });
  }, []);

  React.useEffect(() => {
    if (!resolvedOpen) {
      setAnchorLayout(null);
      return;
    }

    measureAnchor();
  }, [measureAnchor, resolvedOpen]);

  const position = anchorLayout
    ? resolvePopoverPosition({
        anchor: anchorLayout,
        contentSize,
        offset,
        placement,
        viewport: { height: viewportHeight, width: viewportWidth },
        viewportPadding: 8,
      })
    : undefined;

  return (
    <>
      <View
        collapsable={false}
        ref={anchorRef}
        onLayout={resolvedOpen ? measureAnchor : undefined}
        testID={testID ? `${testID}-anchor` : undefined}
      >
        {anchor({ close, open: resolvedOpen, toggle })}
      </View>
      <Portal layer="popover" visible={resolvedOpen && Boolean(anchorLayout)}>
        <View pointerEvents="box-none" style={styles.overlay}>
          {closeOnOutsidePress ? (
            <Pressable
              accessibilityLabel="Close popover"
              onPress={passive ? undefined : close}
              style={styles.backdrop}
              testID={testID ? `${testID}-backdrop` : undefined}
            />
          ) : null}
          <View
            onLayout={(event) => setContentSize(event.nativeEvent.layout)}
            style={[styles.content, position]}
            testID={testID ? `${testID}-content` : undefined}
          >
            {children}
          </View>
        </View>
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  content: {
    position: 'absolute',
  },
  overlay: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
