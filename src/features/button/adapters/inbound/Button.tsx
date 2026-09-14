import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { resolveButtonColors, resolveControlSize, resolveIconSize } from '../../../../internal/resolvers';
import { ButtonBase } from '../../../../primitives/button-base';
import { useTheme } from '../../../../theme/ThemeContext';
import type { ButtonProps } from '../../../../types/button';
import { Icon } from '../../../icon/public';
import { Box } from '../../../layout/public';
import { Text } from '../../../typography/public';

/*** Renders the primary Surface action control with semantic visual states. */
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
      style={{ alignSelf: fullWidth ? 'stretch' : 'flex-start' }}
      testID={testID}
    >
      {(state) => {
        const colors = resolveButtonColors(theme, { variant, color, state });
        const muted = colors.contentColor === theme.semantics.content.muted;
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
                    <Icon {...leadingIcon} color={colors.contentColor} size={iconSize} />
                  </View>
                ) : null}
                <Text
                  color={muted ? undefined : color}
                  emphasis={muted ? 'muted' : variant === 'solid' ? 'inverse' : 'default'}
                  variant={controlSize.textVariant}
                  weight="semiBold"
                >
                  {children}
                </Text>
                {trailingIcon ? (
                  <View style={{ marginLeft: theme.spacing.s }}>
                    <Icon {...trailingIcon} color={colors.contentColor} size={iconSize} />
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
