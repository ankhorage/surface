import { readFileSync } from 'node:fs';

import { describe, expect, mock, test } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as ReactNativeWeb from 'react-native-web';

await mock.module('react-native', () => ReactNativeWeb);

const { PortableIcon, SUPPORTED_ICON_PROVIDERS } = await import('./PortableIcon');

describe('portable icon rendering', () => {
  test('real scoped RNVI static packages render portable RN Web markup', () => {
    const markup = renderToStaticMarkup(
      <>
        <PortableIcon color="#123456" name="home-outline" provider="Ionicons" size={18} />
        <PortableIcon color="#123456" name="github" provider="FontAwesome" size={18} />
        <PortableIcon color="#123456" name="microsoft" provider="FontAwesome5" size={18} />
        <PortableIcon color="#123456" name="x-twitter" provider="FontAwesome6" size={18} />
      </>,
    );

    expect(SUPPORTED_ICON_PROVIDERS).toEqual([
      'Ionicons',
      'FontAwesome',
      'FontAwesome5',
      'FontAwesome6',
    ]);
    expect(markup).toContain('font-family:Ionicons');
    expect(markup).toContain('font-family:FontAwesome');
    expect(markup).toContain('font-family:FontAwesome5Brands-Regular');
    expect(markup).toContain('font-family:FontAwesome6Brands-Regular');
  });

  test('has no Expo icon dependency or resolver path', () => {
    const packageSource = readFileSync(new URL('../../../package.json', import.meta.url), 'utf8');
    const iconSource = readFileSync(new URL('./PortableIcon.tsx', import.meta.url), 'utf8');

    expect(packageSource).not.toContain('@expo/vector-icons');
    expect(packageSource).not.toContain('expo-font');
    expect(iconSource).not.toContain('resolveExpoIconComponent');
    expect(iconSource).not.toContain("from 'expo");
  });
});
