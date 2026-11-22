import { mkdtemp, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { expect, test } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import type { PortableIcon } from './PortableIcon.web';

type WebPortableIcon = typeof PortableIcon;

const { PortableIcon: WebPortableIcon } = await importWebPortableIcon();

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

/*** Bundles the web adapter against RN Web without changing Bun's shared module registry. */
async function importWebPortableIcon(): Promise<{ PortableIcon: WebPortableIcon }> {
  const directory = await mkdtemp(join(process.cwd(), '.surface-portable-icon-web-'));
  const reactNativeWeb = fileURLToPath(
    new URL('../../../../../node_modules/react-native-web/dist/cjs/index.js', import.meta.url),
  );
  const result = await Bun.build({
    entrypoints: [fileURLToPath(new URL('./PortableIcon.web.tsx', import.meta.url))],
    external: ['react'],
    format: 'esm',
    outdir: directory,
    plugins: [
      {
        name: 'react-native-web',
        setup(builder) {
          builder.onResolve({ filter: /^react-native$/u }, () => ({ path: reactNativeWeb }));
        },
      },
    ],
    target: 'bun',
  });

  const output = result.outputs.find(({ path }) => path.endsWith('.js'));
  if (!result.success || output === undefined) {
    throw new Error(result.logs.map((log) => log.message).join('\n'));
  }

  try {
    return (await import(pathToFileURL(output.path).href)) as {
      PortableIcon: WebPortableIcon;
    };
  } finally {
    await rm(directory, { force: true, recursive: true });
  }
}
