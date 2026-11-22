import { expect, mock, test } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as ReactNativeWeb from 'react-native-web';

import type { PortableIcon } from './PortableIcon.web';

type WebPortableIcon = typeof PortableIcon;

await mock.module('react-native', () => ReactNativeWeb);

const { PortableIcon: WebPortableIcon } = await import('./PortableIcon.web');

test('web icon adapter remains a native-free platform boundary', async () => {
  const portableIconType: WebPortableIcon | undefined = undefined;
  expect(portableIconType).toBeUndefined();

  const source = await Bun.file('src/features/icon/adapters/inbound/PortableIcon.web.tsx').text();

  expect(source).not.toContain('react-native-svg');
  expect(source).not.toContain('/static');
  expect(source).toContain('/glyphmaps/');
  expect(source).toContain('/fonts/');
});

test('RN Web leaves an intrinsic-color SVG Image free of a tint style', () => {
  const intrinsic = renderToStaticMarkup(
    React.createElement(WebPortableIcon, {
      color: '#123456',
      colorMode: 'intrinsic',
      size: 18,
      source: { uri: 'https://example.com/completed.svg' },
    }),
  );
  const tinted = renderToStaticMarkup(
    React.createElement(WebPortableIcon, {
      color: '#123456',
      size: 18,
      source: { uri: 'https://example.com/completed.svg' },
    }),
  );

  expect(intrinsic).not.toContain('filter');
  expect(tinted).toContain('filter');
});
