import React from 'react';
import { type LayoutRectangle, Platform, Pressable, View } from 'react-native';

import { Portal } from '../../internal/overlay/Portal';
import { resolveOverlayAnimation } from '../../internal/resolvers';
import { Surface } from '../../layout';
import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import type { TooltipProps } from './types';

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

export function Tooltip({
  children,
  content,
  delay = 150,
  placement = 'top',
  testID,
}: TooltipProps) {
  const { theme } = useTheme();
  const animation = resolveOverlayAnimation('tooltip');
  const anchorRef = React.useRef<View | null>(null);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const [visible, setVisible] = React.useState(false);
  const [layout, setLayout] = React.useState<LayoutRectangle | null>(null);

  const show = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      measureNode(anchorRef.current, setLayout);
      setVisible(true);
    }, delay);
  }, [delay]);

  const hide = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setVisible(false);
  }, []);

  React.useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    [],
  );

  const tooltipLeft = layout ? layout.x : 0;
  const tooltipTop =
    layout && placement === 'top'
      ? layout.y - animation.offset
      : layout
        ? layout.y + layout.height + animation.offset
        : 0;

  return (
    <View collapsable={false} ref={anchorRef} testID={testID ? `${testID}-anchor` : undefined}>
      <Pressable
        onBlur={hide}
        onFocus={show}
        onHoverIn={Platform.OS === 'web' ? show : undefined}
        onHoverOut={Platform.OS === 'web' ? hide : undefined}
      >
        {children}
      </Pressable>
      <Portal layer="tooltip" visible={visible && Boolean(layout)}>
        <View
          pointerEvents="none"
          style={{
            left: tooltipLeft,
            position: 'absolute',
            top: tooltipTop,
          }}
        >
          <Surface
            p="s"
            style={{
              backgroundColor: theme.semantics.neutral.text,
            }}
            testID={testID}
            variant="raised"
          >
            <Text color={theme.semantics.content.inverse} variant="caption">
              {content}
            </Text>
          </Surface>
        </View>
      </Portal>
    </View>
  );
}
