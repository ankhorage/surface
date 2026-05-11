import React from 'react';
import { type StyleProp, View, type ViewStyle } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

import { useTheme } from '../theme/ThemeContext';
import { Box, type BoxProps } from './Box';

export interface AppBarProps extends Omit<BoxProps, 'children'> {
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  children?: React.ReactNode;
  safeAreaTop?: boolean;
  divider?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
}

export function AppBar({
  leading,
  trailing,
  children,
  safeAreaTop = true,
  divider = false,
  contentStyle,
  style,
  ...props
}: AppBarProps) {
  const { theme } = useTheme();
  const insets = React.useContext(SafeAreaInsetsContext);
  const topInset = safeAreaTop ? (insets?.top ?? 0) : 0;

  return (
    <Box
      {...props}
      style={[
        {
          backgroundColor: theme.semantics.surface.default,
          paddingTop: topInset,
          borderBottomWidth: divider ? 1 : 0,
          borderBottomColor: divider ? theme.semantics.neutral.divider : 'transparent',
        },
        style,
      ]}
    >
      <View
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
          <View style={{ marginRight: theme.spacing.s, flexShrink: 0 }}>{leading}</View>
        ) : null}
        <View style={{ flex: 1, minWidth: 0 }}>{children}</View>
        {trailing ? (
          <View style={{ marginLeft: theme.spacing.s, flexShrink: 0 }}>{trailing}</View>
        ) : null}
      </View>
    </Box>
  );
}
