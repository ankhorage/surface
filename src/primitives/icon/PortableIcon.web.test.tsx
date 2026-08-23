import { readFileSync } from 'node:fs';

import { describe, expect, mock, test } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as ReactNativeWeb from 'react-native-web';

await mock.module('react-native', () => ReactNativeWeb);

const { Icon } = await import('./Icon');
const { SUPPORTED_ICON_PROVIDERS } = await import('./PortableIcon');

describe('portable icon rendering', () => {
  test('renders Ionicons through the public Icon API', () => {
    const markup = renderToStaticMarkup(<Icon color="#123456" name="home-outline" size={18} />);

    expect(markup).toContain('font-family:Ionicons');
  });

  test('renders FontAwesome through the public Icon API', () => {
    const markup = renderToStaticMarkup(
      <Icon color="#123456" name="github" provider="FontAwesome" size={18} />,
    );

    expect(markup).toContain('font-family:FontAwesome');
  });

  test('renders a FontAwesome5 brand icon through its brand font', () => {
    const markup = renderToStaticMarkup(
      <Icon color="#123456" name="microsoft" provider="FontAwesome5" size={18} variant="brand" />,
    );

    expect(markup).toContain('font-family:FontAwesome5Brands-Regular');
  });

  test('renders a FontAwesome5 solid icon through its solid font', () => {
    const markup = renderToStaticMarkup(
      <Icon color="#123456" name="video" provider="FontAwesome5" size={18} variant="solid" />,
    );

    expect(markup).toContain('font-family:FontAwesome5Free-Solid');
  });

  test('renders a FontAwesome6 brand icon through its brand font', () => {
    const markup = renderToStaticMarkup(
      <Icon color="#123456" name="x-twitter" provider="FontAwesome6" size={18} variant="brand" />,
    );

    expect(markup).toContain('font-family:FontAwesome6Brands-Regular');
  });

  test('publishes the intentional provider inventory', () => {
    expect(SUPPORTED_ICON_PROVIDERS).toEqual([
      'Ionicons',
      'FontAwesome',
      'FontAwesome5',
      'FontAwesome6',
    ]);
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
