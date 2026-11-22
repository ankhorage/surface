import { expect, test } from 'bun:test';

import type { PortableIcon } from './PortableIcon.web';

type WebPortableIcon = typeof PortableIcon;

test('web icon adapter remains a native-free platform boundary', async () => {
  const portableIconType: WebPortableIcon | undefined = undefined;
  expect(portableIconType).toBeUndefined();

  const source = await Bun.file('src/features/icon/adapters/inbound/PortableIcon.web.tsx').text();

  expect(source).not.toContain('react-native-svg');
  expect(source).not.toContain('/static');
  expect(source).toContain('/glyphmaps/');
  expect(source).toContain('/fonts/');
});

test('RN Web leaves an intrinsic-color SVG Image free of a tint style', async () => {
  const { intrinsic, tinted } = await renderWebPortableIcons();

  expect(intrinsic).not.toContain('filter');
  expect(tinted).toContain('filter');
});

/*** Renders the web adapter in a child process to keep RN Web module initialization isolated. */
async function renderWebPortableIcons() {
  const source = `
    import { mkdtemp, rm } from 'node:fs/promises';
    import { join } from 'node:path';
    import { pathToFileURL } from 'node:url';
    import React from 'react';
    import { renderToStaticMarkup } from 'react-dom/server';
    const directory = await mkdtemp(join(process.cwd(), '.surface-portable-icon-web-'));
    const result = await Bun.build({
      entrypoints: [${JSON.stringify(new URL('./PortableIcon.web.tsx', import.meta.url).pathname)}],
      external: ['react'],
      format: 'esm',
      outdir: directory,
      plugins: [{
        name: 'react-native-web',
        setup(builder) {
          builder.onResolve({ filter: /^react-native$/u }, () => ({
            path: join(process.cwd(), 'node_modules/react-native-web/dist/cjs/index.js'),
          }));
        },
      }],
      target: 'bun',
    });
    const output = result.outputs.find(({ path }) => path.endsWith('.js'));
    if (!result.success || output === undefined) throw new Error(result.logs.map((log) => log.message).join('\\n'));
    const { PortableIcon } = await import(pathToFileURL(output.path).href);
    const render = (props) => renderToStaticMarkup(React.createElement(PortableIcon, props));
    try {
      console.log(JSON.stringify({
        intrinsic: render({ color: '#123456', colorMode: 'intrinsic', size: 18, source: { uri: 'https://example.com/completed.svg' } }),
        tinted: render({ color: '#123456', size: 18, source: { uri: 'https://example.com/completed.svg' } }),
      }));
    } finally {
      await rm(directory, { force: true, recursive: true });
    }
  `;
  const subprocess = Bun.spawn([process.execPath, '-e', source], {
    stderr: 'pipe',
    stdout: 'pipe',
  });
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(subprocess.stdout).text(),
    new Response(subprocess.stderr).text(),
    subprocess.exited,
  ]);

  expect(exitCode, stderr).toBe(0);
  return JSON.parse(stdout) as { intrinsic: string; tinted: string };
}
