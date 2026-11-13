import { expect, test } from 'bun:test';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { chromium } from 'playwright-core';

test('browser Popover portals over a clipped Cytoscape canvas and closes with a native pointer click', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'surface-browser-popover-'));
  const bundlePath = join(directory, 'fixture.js');
  const server = Bun.serve({
    fetch: (request) =>
      new URL(request.url).pathname === '/fixture.js'
        ? new Response(Bun.file(bundlePath), { headers: { 'content-type': 'text/javascript' } })
        : new Response(
            '<!doctype html><html><body><div id="root"></div><script type="module" src="/fixture.js"></script></body></html>',
            { headers: { 'content-type': 'text/html' } },
          ),
    port: 0,
  });
  try {
    await buildBrowserPopoverFixture(bundlePath);
    const browser = await chromium.launch();
    try {
      const page = await browser.newPage({ viewport: { height: 720, width: 1024 } });
      await page.goto(server.url.toString());
      await page.locator('[data-testid="popover-content"]').waitFor();

      const clippingBounds = await page.locator('[data-testid="clipping-container"]').boundingBox();
      const popoverBounds = await page.locator('[data-testid="popover-content"]').boundingBox();
      if (clippingBounds === null || popoverBounds === null) {
        throw new Error('Browser Popover fixture did not render measurable elements.');
      }
      expect(popoverBounds.y).toBeLessThan(clippingBounds.y);
      expect(
        await page
          .locator('[data-testid="canvas"]')
          .evaluate((canvas) => canvas instanceof HTMLCanvasElement),
      ).toBe(true);

      await page.mouse.click(900, 600);
      await page.locator('[data-testid="popover-content"]').waitFor({ state: 'detached' });
    } finally {
      await browser.close();
    }
  } finally {
    server.stop();
    await rm(directory, { force: true, recursive: true });
  }
});

/*** Builds the browser fixture exclusively through the public browser entrypoint. */
async function buildBrowserPopoverFixture(bundlePath: string): Promise<void> {
  const sourcePath = join(join(bundlePath, '..'), 'fixture.tsx');
  await writeFile(
    sourcePath,
    `import React from ${JSON.stringify(join(process.cwd(), 'node_modules/react/index.js'))};
import { createRoot } from ${JSON.stringify(join(process.cwd(), 'node_modules/react-dom/client.js'))};
import { Popover } from ${JSON.stringify(join(process.cwd(), 'src/features/popover/browser.ts'))};

const root = createRoot(document.querySelector('#root'));
root.render(React.createElement('main', null, React.createElement('header', null, 'Atlas workspace'), React.createElement('section', { 'data-testid': 'clipping-container', style: { height: 80, marginTop: 80, overflow: 'hidden', position: 'relative' } }, React.createElement(Popover, { defaultOpen: true, placement: 'top-start', testID: 'popover', anchor: () => React.createElement('button', null, 'Open') }, React.createElement('div', { style: { height: 80, width: 180 } }, 'Popover'))), React.createElement('canvas', { 'data-testid': 'canvas', height: '400', style: { display: 'block', height: 400, marginTop: 20, width: 800 }, width: '800' })));`,
  );
  const result = await Bun.build({
    entrypoints: [sourcePath],
    minify: true,
    outdir: join(bundlePath, '..'),
    target: 'browser',
  });
  if (!result.success) throw new Error(result.logs.map((log) => log.message).join('\n'));
}
