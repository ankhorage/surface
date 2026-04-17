import React from 'react';
import { Text as ReactNativeText } from 'react-native';

import { useTranslationContext } from '../../context/TranslationContext';
import { resolveTextColor, resolveTextStyles } from '../../internal/resolvers';
import { useTheme } from '../../theme/ThemeContext';
import type { TextProps } from './types';

function resolveTextContent(
  children: TextProps['children'],
  i18nKey: TextProps['i18nKey'],
  translate: (key: string) => string,
) {
  if (children !== undefined) {
    return children;
  }

  if (!i18nKey) {
    return null;
  }

  try {
    const translated = translate(i18nKey);
    return translated && translated !== i18nKey ? translated : i18nKey;
  } catch (error) {
    console.warn('[Text] Translation error:', error);
    return i18nKey;
  }
}

export function Text({
  children,
  i18nKey,
  variant = 'body',
  tone = 'default',
  color,
  align,
  weight,
  italic = false,
  numberOfLines,
  testID,
}: TextProps) {
  const { theme } = useTheme();
  const { t } = useTranslationContext();
  const content = resolveTextContent(children, i18nKey, t);

  return (
    <ReactNativeText
      numberOfLines={numberOfLines}
      testID={testID}
      style={[
        resolveTextStyles(theme, {
          align,
          italic,
          variant,
          weight,
        }),
        {
          color: resolveTextColor(theme, tone, color),
        },
      ]}
    >
      {content}
    </ReactNativeText>
  );
}
