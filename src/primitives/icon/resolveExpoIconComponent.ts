import * as Icons from '@expo/vector-icons';
import type React from 'react';
import { type StyleProp, type TextStyle } from 'react-native';

export type ExpoIconComponent = React.ElementType<{
  color?: string;
  name?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  testID?: string;
}>;

export function resolveExpoIconComponent(provider: string): ExpoIconComponent {
  const candidate = Reflect.get(Icons, provider);
  if (typeof candidate === 'function') {
    return candidate as ExpoIconComponent;
  }

  return Icons.Ionicons as ExpoIconComponent;
}
