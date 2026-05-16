import React from 'react';
import { Text } from 'react-native';

import { useTranslationContext } from '../../context/TranslationContext';
import { useTheme } from '../../theme/ThemeContext';
import { resolveHeadingTextStyle } from './resolveHeadingStyle';
import type { HeadingProps } from './types';

function resolveHeadingContent({
  text,
  children,
  i18nKey,
  translate,
}: {
  text: HeadingProps['text'];
  children: HeadingProps['children'];
  i18nKey: HeadingProps['i18nKey'];
  translate: (key: string) => string;
}) {
  let content = text ?? children;
  if (!i18nKey) {
    return content;
  }

  try {
    const translated = translate(i18nKey);
    if (translated && translated !== i18nKey) {
      content = translated;
    }
  } catch (error) {
    console.warn('[Heading] Translation error:', error);
  }

  return content;
}

export const Heading: React.FC<HeadingProps> = ({
  text,
  children,
  level = 2,
  align,
  color,
  emphasis = 'default',
  numberOfLines,
  i18nKey,
  testID,
}) => {
  const { theme } = useTheme();
  const { t } = useTranslationContext();
  const content = resolveHeadingContent({ text, children, i18nKey, translate: t });

  return (
    <Text
      accessibilityRole="header"
      testID={testID}
      numberOfLines={numberOfLines}
      style={resolveHeadingTextStyle(theme, level, align, emphasis, color)}
    >
      {content}
    </Text>
  );
};
