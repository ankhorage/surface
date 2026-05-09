import * as ExpoIcons from '@expo/vector-icons';
import type React from 'react';
import { type StyleProp, type TextStyle } from 'react-native';

export type ExpoIconComponent = React.ElementType<{
  color?: string;
  name?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  testID?: string;
}>;

const EXPO_ICON_PROVIDER_ALIASES = {
  'material-community': 'MaterialCommunityIcons',
} as const;

export function resolveExpoIconComponent(provider: string): ExpoIconComponent {
  const normalizedProvider = resolveExpoIconProviderName(provider);
  const candidate = (ExpoIcons as Record<string, unknown>)[normalizedProvider];
  if (typeof candidate === 'function') {
    return candidate as ExpoIconComponent;
  }

  return ExpoIcons.Ionicons as ExpoIconComponent;
}

function resolveExpoIconProviderName(provider: string): string {
  const normalizedProvider = provider.trim().toLowerCase();

  return normalizedProvider in EXPO_ICON_PROVIDER_ALIASES
    ? EXPO_ICON_PROVIDER_ALIASES[
        normalizedProvider as keyof typeof EXPO_ICON_PROVIDER_ALIASES
      ]
    : provider;
}
