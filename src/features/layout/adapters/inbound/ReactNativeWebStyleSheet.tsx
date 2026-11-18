import React from 'react';
import { Platform, StyleSheet } from 'react-native';

type ReactNativeWebStyleSheet = Readonly<{
  id: string;
  textContent: string;
}>;

/*** Renders React Native Web's public stylesheet for a server-rendered Surface document. */
export function ReactNativeWebStyleSheet() {
  const sheet = getReactNativeWebStyleSheet();
  if (sheet === null) return null;

  return <style dangerouslySetInnerHTML={{ __html: sheet.textContent }} id={sheet.id} />;
}

/*** Reads the browser-only public stylesheet without changing native rendering. */
function getReactNativeWebStyleSheet(): ReactNativeWebStyleSheet | null {
  if (Platform.OS !== 'web' || !('getSheet' in StyleSheet)) return null;

  const getSheet = StyleSheet.getSheet as () => ReactNativeWebStyleSheet;
  return getSheet();
}
