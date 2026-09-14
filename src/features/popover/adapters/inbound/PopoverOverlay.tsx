import React from 'react';
import { Pressable, StyleSheet, type ViewStyle, View } from 'react-native';

import { Portal } from '../../../../internal/overlay/Portal';

/*** Renders the anchored popover portal, backdrop, and positioned content. */
export function PopoverOverlay({
  children,
  closeOnOutsidePress,
  onClose,
  onContentLayout,
  passive,
  position,
  ready,
  testID,
}: PopoverOverlayProps) {
  return (
    <Portal layer="popover" visible={ready}>
      <View pointerEvents="box-none" style={styles.overlay}>
        {closeOnOutsidePress ? (
          <Pressable
            accessibilityLabel="Close popover"
            onPress={passive ? undefined : onClose}
            style={styles.backdrop}
            testID={testID ? `${testID}-backdrop` : undefined}
          />
        ) : null}
        <View
          onLayout={onContentLayout}
          style={[styles.content, position]}
          testID={testID ? `${testID}-content` : undefined}
        >
          {children}
        </View>
      </View>
    </Portal>
  );
}

interface PopoverOverlayProps {
  children?: React.ReactNode;
  closeOnOutsidePress: boolean;
  onClose: () => void;
  onContentLayout: React.ComponentProps<typeof View>['onLayout'];
  passive: boolean;
  position: ViewStyle | undefined;
  ready: boolean;
  testID?: string;
}

const absoluteFill: ViewStyle = {
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
};

const styles = StyleSheet.create({
  backdrop: absoluteFill,
  content: {
    position: 'absolute',
  },
  overlay: absoluteFill,
});
