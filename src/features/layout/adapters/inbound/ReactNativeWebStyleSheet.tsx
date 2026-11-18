import React from 'react';
import { Platform, StyleSheet } from 'react-native';

type ReactNativeWebStyleSheet = Readonly<{
  id: string;
  textContent: string;
}>;

/*** Snapshots and hoists React Native Web's stylesheet after the server-rendered Surface content. */
export function ReactNativeWebStyleSheet() {
  const sheet = getReactNativeWebStyleSheet();
  if (sheet === null) return null;

  return (
    <style id={sheet.id} precedence="react-native-web">
      {sheet.textContent}
    </style>
  );
}

/*** Reads the browser-only public stylesheet without changing native rendering. */
function getReactNativeWebStyleSheet(): ReactNativeWebStyleSheet | null {
  if (Platform.OS !== 'web' || !('getSheet' in StyleSheet)) return null;

  const getSheet = StyleSheet.getSheet as () => ReactNativeWebStyleSheet;
  return getSheet();
}
