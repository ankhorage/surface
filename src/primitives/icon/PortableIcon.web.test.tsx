import { readFileSync } from 'node:fs';

import { describe, expect, mock, test } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as ReactNativeWeb from 'react-native-web';

await mock.module('react-native', () => ReactNativeWeb);

const { Icon } = await import('./Icon');
const { PortableIcon, SUPPORTED_ICON_PROVIDERS } = await import('./PortableIcon');

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

  test('renders Material Design Icons through the public Icon API', () => {
    const markup = renderToStaticMarkup(
      <Icon color="#123456" name="bookshelf" provider="MaterialDesignIcons" size={18} />,
    );

    expect(markup).toContain('font-family:MaterialDesignIcons');
  });
});

describe('portable icon contract', () => {
  test('publishes the intentional provider inventory', () => {
    expect(SUPPORTED_ICON_PROVIDERS.length).toBeGreaterThan(0);
    expect(new Set(SUPPORTED_ICON_PROVIDERS).size).toBe(SUPPORTED_ICON_PROVIDERS.length);
  });
});

describe('portable icon runtime rejection', () => {
  test('throws for an invalid runtime provider instead of falling back to Ionicons', () => {
    const props = {
      color: '#123456',
      name: 'home-outline',
      size: 18,
    } satisfies Parameters<typeof PortableIcon>[0];
    Object.defineProperty(props, 'provider', { enumerable: true, value: 'UnknownIcons' });

    expect(() => renderToStaticMarkup(<PortableIcon {...props} />)).toThrow(
      'Unsupported icon provider: UnknownIcons',
    );
  });

  test('throws for an invalid runtime FontAwesome5 variant', () => {
    const props = {
      color: '#123456',
      name: 'video',
      provider: 'FontAwesome5',
      size: 18,
      variant: 'solid',
    } satisfies Parameters<typeof PortableIcon>[0];
    Object.defineProperty(props, 'variant', { value: 'duotone' });

    expect(() => renderToStaticMarkup(<PortableIcon {...props} />)).toThrow(
      'Unsupported icon FontAwesome5 variant: duotone',
    );
  });

  test('throws for an invalid runtime FontAwesome6 variant', () => {
    const props = {
      color: '#123456',
      name: 'x-twitter',
      provider: 'FontAwesome6',
      size: 18,
      variant: 'brand',
    } satisfies Parameters<typeof PortableIcon>[0];
    Object.defineProperty(props, 'variant', { value: 'duotone' });

    expect(() => renderToStaticMarkup(<PortableIcon {...props} />)).toThrow(
      'Unsupported icon FontAwesome6 variant: duotone',
    );
  });
});

describe('portable icon dependency boundary', () => {
  test('has no Expo icon dependency or resolver path', () => {
    const packageSource = readFileSync(new URL('../../../package.json', import.meta.url), 'utf8');
    const iconSource = readFileSync(new URL('./PortableIcon.tsx', import.meta.url), 'utf8');

    expect(packageSource).not.toContain('@expo/vector-icons');
    expect(packageSource).not.toContain('expo-font');
    expect(iconSource).not.toContain('resolveExpoIconComponent');
    expect(iconSource).not.toContain("from 'expo");
  });
});
