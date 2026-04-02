import type { TextStyle } from 'react-native';

import type { AnkhTheme } from '../../theme/types';
import type { HeadingLevel, HeadingProps } from './types';

export function resolveHeadingTextStyle(
  theme: AnkhTheme,
  level: HeadingLevel,
  align?: HeadingProps['align'],
): TextStyle {
  const typography = theme.typography.headings[level];
  const resolvedWeight = theme.typography.weights[typography.weight];
  const textStyle: TextStyle = {
    fontSize: typography.size,
    lineHeight: typography.lineHeight,
    fontWeight: resolvedWeight,
    color: theme.colors.text,
    elevation: 0,
  };

  if (align) {
    textStyle.textAlign = align;
  }

  const fontFamily = theme.typography.fonts.normal[resolvedWeight];
  if (fontFamily) {
    textStyle.fontFamily = fontFamily;
  }

  return textStyle;
}
