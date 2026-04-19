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

function resolveRuntimeRequire(): ((id: string) => unknown) | null {
  if (typeof require === 'function') {
    return require as (id: string) => unknown;
  }

  const globalCandidate = (
    globalThis as {
      require?: unknown;
    }
  ).require;

  if (typeof globalCandidate === 'function') {
    return globalCandidate as (id: string) => unknown;
  }

  return null;
}

function loadExpoIcons(): ExpoIconsModule {
  if (cachedIcons) {
    return cachedIcons;
  }

  const runtimeRequire = resolveRuntimeRequire();

  try {
    if (!runtimeRequire) {
      throw new Error('runtime require is unavailable');
    }

    // Keep icon loading lazy so non-Expo consumers do not need the package until Icon is used.
    cachedIcons = runtimeRequire('@expo/vector-icons') as ExpoIconsModule;
    return cachedIcons;
  } catch {
    throw new Error(
      'Surface Icon requires `@expo/vector-icons` and `expo-font` in the host app. Install them to use the Icon primitive.',
    );
  }
}

export function resolveExpoIconComponent(provider: string): ExpoIconComponent {
  const Icons = loadExpoIcons();
  const candidate = (Icons as Record<string, unknown>)[provider];
  if (typeof candidate === 'function') {
    return candidate as ExpoIconComponent;
  }

  return Icons.Ionicons as ExpoIconComponent;
}
