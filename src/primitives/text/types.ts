import type React from 'react';
import type { TextStyle } from 'react-native';

import type {
  TextColorValue,
  TextTone,
} from '../../internal/resolvers/resolveTextColor';
import type {
  TextVariant,
  TextWeight,
} from '../../internal/resolvers/resolveTextStyles';

export interface TextProps {
  children?: React.ReactNode;
  i18nKey?: string;
  variant?: TextVariant;
  tone?: TextTone;
  color?: TextColorValue;
  align?: TextStyle['textAlign'];
  weight?: TextWeight;
  italic?: boolean;
  numberOfLines?: number;
  testID?: string;
}
