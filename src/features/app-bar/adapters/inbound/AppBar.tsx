import React from 'react';
import { View as ReactNativeView, type ViewStyle } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

import { useTheme } from '../../../../theme/ThemeContext';
import type { AppBarProps } from '../../../../types/app-bar';
import { Divider, View } from '../../../layout/public';

/*** Renders application chrome with optional safe-area padding and leading/trailing slots. */
export function AppBar({
  leading,
  trailing,
  children,
  safeAreaTop = true,
  divider = false,
  contentStyle,
  bg,
  style,
  ...props
}: AppBarProps) {
  const { theme } = useTheme();
  const insets = React.use(SafeAreaInsetsContext);
  const topInset = safeAreaTop ? (insets?.top ?? 0) : 0;
  const safeAreaStyle: ViewStyle | undefined =
    topInset === 0 ? undefined : { paddingTop: topInset };

  return (
    <View {...props} bg={bg ?? theme.semantics.surface.default} style={style}>
      <ReactNativeView style={safeAreaStyle}>
        <ReactNativeView
          style={[
            {
              minHeight: 56,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: theme.spacing.m,
            },
            contentStyle,
          ]}
        >
          {leading ? (
            <ReactNativeView style={{ marginRight: theme.spacing.s, flexShrink: 0 }}>
              {leading}
            </ReactNativeView>
          ) : null}
          <ReactNativeView style={{ flex: 1, minWidth: 0 }}>{children}</ReactNativeView>
          {trailing ? (
            <ReactNativeView style={{ marginLeft: theme.spacing.s, flexShrink: 0 }}>
              {trailing}
            </ReactNativeView>
          ) : null}
        </ReactNativeView>
        {divider ? <Divider color={theme.semantics.neutral.divider} thickness={1} /> : null}
      </ReactNativeView>
    </View>
  );
}
