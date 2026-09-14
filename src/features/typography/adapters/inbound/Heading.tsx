import React from 'react';
import { Text as ReactNativeText } from 'react-native';

import { useTranslationContext } from '../../../../context/TranslationContext';
import { useTheme } from '../../../../theme/ThemeContext';
import type { HeadingProps } from '../../../../types/typography';
import { resolveHeadingTextStyle } from '../../utils/resolveHeadingTextStyle';

/*** Renders a semantic, translatable heading using Surface typography tokens. */
export function Heading({
  text,
  children,
  level = 2,
  align,
  color,
  emphasis = 'default',
  numberOfLines,
  i18nKey,
  testID,
}: HeadingProps) {
  const { theme } = useTheme();
  const { t } = useTranslationContext();
  const content = resolveHeadingContent({ text, children, i18nKey, translate: t });

  return (
    <ReactNativeText
      accessibilityRole="header"
      testID={testID}
      numberOfLines={numberOfLines}
      style={resolveHeadingTextStyle(theme, level, align, emphasis, color)}
    >
      {content}
    </ReactNativeText>
  );
}

/*** Resolves authored or translated heading content without mutating source input. */
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
  const content = text ?? children;
  if (!i18nKey) return content;

  try {
    const translated = translate(i18nKey);
    return translated && translated !== i18nKey ? translated : content;
  } catch (error) {
    console.warn('[Heading] Translation error:', error);
    return content;
  }
}
