import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { resolveButtonColors, resolveControlSize, resolveIconSize } from '../../internal/resolvers';
import { Box } from '../../layout';
import { ButtonBase } from '../../primitives/button-base';
import { Icon } from '../../primitives/icon';
import { Text } from '../../primitives/text';
import { useTheme } from '../../theme/ThemeContext';
import type { ButtonProps } from './types';

export function Button({
  children,
  variant = 'solid',
  color = 'primary',
  size = 'm',
  disabled = false,
  loading = false,
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  onPress,
  testID,
  ...props
}: ButtonProps) {
  const { theme } = useTheme();
  const controlSize = resolveControlSize(theme, size);

  return (
    <ButtonBase
      {...props}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        {
          alignSelf: fullWidth ? 'stretch' : 'flex-start',
        },
      ]}
      testID={testID}
    >
      {(state) => {
        const colors = resolveButtonColors(theme, {
          variant,
          color,
          state,
        });
        const textEmphasis =
          colors.contentColor === theme.semantics.content.muted ? 'muted' : 'default';
        const iconSize = resolveIconSize(theme, size);

        return (
          <Box
            px={controlSize.paddingHorizontal}
            py={controlSize.paddingVertical}
            radius={controlSize.borderRadius}
            style={{
              minHeight: controlSize.minHeight,
              width: fullWidth ? '100%' : undefined,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.backgroundColor,
              borderColor: colors.borderColor,
              borderWidth: variant === 'solid' ? 0 : 1,
              opacity: colors.opacity,
            }}
          >
            {loading ? (
              <ActivityIndicator color={colors.contentColor} size="small" />
            ) : (
              <>
                {leadingIcon ? (
                  <View style={{ marginRight: theme.spacing.s }}>
                    <Icon
                      color={colors.contentColor}
                      name={leadingIcon.name}
                      provider={leadingIcon.provider}
                      size={iconSize}
                    />
                  </View>
                ) : null}
                <Text
                  color={variant === 'solid' || textEmphasis === 'muted' ? undefined : color}
                  emphasis={
                    textEmphasis === 'muted' ? 'muted' : variant === 'solid' ? 'inverse' : 'default'
                  }
                  variant={controlSize.textVariant}
                  weight="semiBold"
                >
                  {children}
                </Text>
                {trailingIcon ? (
                  <View style={{ marginLeft: theme.spacing.s }}>
                    <Icon
                      color={colors.contentColor}
                      name={trailingIcon.name}
                      provider={trailingIcon.provider}
                      size={iconSize}
                    />
                  </View>
                ) : null}
              </>
            )}
          </Box>
        );
      }}
    </ButtonBase>
  );
}
