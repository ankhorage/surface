import type * as ExpoIcons from '@expo/vector-icons';
import type React from 'react';
import { type StyleProp, type TextStyle } from 'react-native';

type ExpoIconsModule = typeof ExpoIcons;

export type ExpoIconComponent = React.ElementType<{
  color?: string;
  name?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  testID?: string;
}>;

let cachedIcons: ExpoIconsModule | null = null;

function loadExpoIcons(): ExpoIconsModule {
  if (cachedIcons) {
    return cachedIcons;
  }

  try {
    // Load Expo icons only when Icon is rendered so non-Expo consumers can install Surface cleanly.
    cachedIcons = require('@expo/vector-icons') as ExpoIconsModule;
    return cachedIcons;
  } catch {
    throw new Error(
      'Surface Icon requires `@expo/vector-icons` and `expo-font` in the host app. Install them to use the Icon primitive.',
    );
  }
}

export function resolveExpoIconComponent(provider: string): ExpoIconComponent {
  const Icons = loadExpoIcons();
  const candidate = Reflect.get(Icons, provider);
  if (typeof candidate === 'function') {
    return candidate as ExpoIconComponent;
  }

  return Icons.Ionicons as ExpoIconComponent;
}
