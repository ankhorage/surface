import { expect, test } from 'bun:test';
import { mkdir, mkdtemp, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { chromium, type Browser, type Locator, type Page } from 'playwright-core';

const packageRoot = new URL('../..', import.meta.url).pathname;

interface AccessibilityNode {
  name?: { value?: string };
  properties?: readonly { name: string; value?: { value?: string | boolean } }[];
  role?: { value?: string };
}

interface PackedConsumerFixture {
  close: () => Promise<void>;
  url: string;
}

test('packed Surface checkbox synchronizes controlled state with Chromium accessibility', async () => {
  const fixture = await createPackedConsumerFixture();
  const browser = await chromium.launch();

  try {
    await assertServerRenderedCheckboxes(fixture.url, browser);
    const page = await browser.newPage({ colorScheme: 'light' });
    await assertHydratedCheckboxes(page, fixture.url, 'light');
    await assertHydratedCheckboxes(page, fixture.url, 'dark');
  } finally {
    await browser.close();
    await fixture.close();
  }
}, 300_000);

/*** Creates a temporary consumer which can resolve Surface only from its packed public artifact. */
async function createPackedConsumerFixture(): Promise<PackedConsumerFixture> {
  const directory = await mkdtemp(join(tmpdir(), 'surface-checkbox-consumer-'));
  const tarballDirectory = join(directory, 'tarball');
  const consumerDirectory = join(directory, 'consumer');

  try {
    await packSurface(tarballDirectory);
    await writeConsumer(consumerDirectory, await resolveTarballPath(tarballDirectory));
    await runBun(consumerDirectory, ['install']);
    const markup = await renderServerMarkup(consumerDirectory);
    await buildConsumer(consumerDirectory);
    const server = Bun.serve({
      fetch: (request) => {
        const url = new URL(request.url);
        return url.pathname === '/fixture.js'
          ? new Response(Bun.file(join(consumerDirectory, 'dist', 'client.js')))
          : new Response(createDocument(markup, url.searchParams));
      },
      port: 0,
    });
    return {
      close: async () => {
        server.stop();
        await rm(directory, { force: true, recursive: true });
      },
      url: server.url.toString(),
    };
  } catch (error) {
    await rm(directory, { force: true, recursive: true });
    throw error;
  }
}

/*** Asserts that server markup serializes the checked state before hydration executes. */
async function assertServerRenderedCheckboxes(url: string, browser: Browser) {
  const page = await browser.newPage({ javaScriptEnabled: false });
  try {
    for (const mode of ['light', 'dark'] as const) {
      await page.goto(`${url}?mode=${mode}`);
      const checkbox = page.getByRole('checkbox', { name: 'Packed checkbox' });
      await expectAttribute(checkbox, 'aria-checked', 'false');
      await expectAttribute(page.locator('body'), 'data-mode', mode);
    }
  } finally {
    await page.close();
  }
}

/*** Exercises native pointer and keyboard input against the hydrated controlled checkbox. */
async function assertHydratedCheckboxes(page: Page, url: string, mode: 'light' | 'dark') {
  await page.goto(`${url}?mode=${mode}`);
  const checkbox = page.getByRole('checkbox', { name: 'Packed checkbox' });
  await expectAttribute(checkbox, 'aria-checked', 'false');
  await assertAccessibilityChecked(page, false);

  await checkbox.click();
  await assertCheckedState(page, checkbox, true, 1, 'true');
  await checkbox.press('Space');
  await assertCheckedState(page, checkbox, false, 2, 'true,false');
  await checkbox.click();
  await assertCheckedState(page, checkbox, true, 3, 'true,false,true');

  await page.getByRole('button', { name: 'Force unchecked' }).click();
  await assertCheckedState(page, checkbox, false, 3, 'true,false,true');
  await assertGuardedCheckboxes(page);
}

/*** Verifies the DOM state, controlled callback values, and Chromium accessibility state together. */
async function assertCheckedState(
  page: Page,
  checkbox: Locator,
  checked: boolean,
  callCount: number,
  values: string,
) {
  await expectAttribute(checkbox, 'aria-checked', String(checked));
  await expectText(page.getByTestId('call-count'), String(callCount));
  await expectText(page.getByTestId('call-values'), values);
  await assertAccessibilityChecked(page, checked);
}

/*** Ensures disabled and read-only controls ignore native click and Space input. */
async function assertGuardedCheckboxes(page: Page) {
  for (const name of ['Disabled checkbox', 'Read-only checkbox']) {
    const checkbox = page.getByRole('checkbox', { name });
    await checkbox.click({ force: true });
    await checkbox.press('Space');
    await expectAttribute(checkbox, 'aria-checked', 'false');
  }
  await expectText(page.getByTestId('guarded-call-count'), '0');
}

/*** Reads a locator attribute through Playwright before asserting the browser-visible value. */
async function expectAttribute(locator: Locator, name: string, value: string) {
  expect(await locator.getAttribute(name)).toBe(value);
}

/*** Reads a locator's rendered text through Playwright before asserting its value. */
async function expectText(locator: Locator, value: string) {
  expect(await locator.textContent()).toBe(value);
}

/*** Reads Chromium's accessibility tree so DOM attributes alone cannot satisfy this acceptance. */
async function assertAccessibilityChecked(page: Page, checked: boolean) {
  const session = await page.context().newCDPSession(page);
  const tree = (await session.send('Accessibility.getFullAXTree')) as {
    nodes: AccessibilityNode[];
  };
  const node = tree.nodes.find(
    (candidate) =>
      candidate.role?.value === 'checkbox' && candidate.name?.value === 'Packed checkbox',
  );
  const state = node?.properties?.find((property) => property.name === 'checked')?.value?.value;
  expect(state).toBe(String(checked));
  await session.detach();
}

/*** Packs the current checkout so the consumer cannot import Surface source files. */
async function packSurface(destination: string) {
  await runBun(packageRoot, [
    'pm',
    'pack',
    '--ignore-scripts',
    '--quiet',
    '--destination',
    destination,
  ]);
}

/*** Resolves the single package archive produced by Bun pack. */
async function resolveTarballPath(directory: string) {
  const tarballs = (await readdir(directory)).filter((entry) => entry.endsWith('.tgz'));
  if (tarballs.length !== 1)
    throw new Error(`Expected one Surface tarball, received ${tarballs.length}.`);
  return join(directory, tarballs[0]);
}

/*** Writes an isolated React Native Web consumer and SSR/hydration fixture. */
async function writeConsumer(directory: string, tarballPath: string) {
  await mkdir(directory, { recursive: true });
  await writeFile(
    join(directory, 'package.json'),
    JSON.stringify(
      {
        dependencies: {
          '@ankhorage/surface': tarballPath,
          '@types/react': '19.3.0',
          '@types/react-dom': '19.3.0',
          react: '19.3.0',
          'react-dom': '19.3.0',
          'react-native': '0.87.1',
          'react-native-web': '0.21.4',
        },
        private: true,
        scripts: { build: 'bun build.ts', ssr: 'bun ssr.build.ts && bun dist/ssr.js' },
      },
      null,
      2,
    ),
  );
  await writeFile(join(directory, 'fixture.tsx'), checkboxFixtureSource);
  await writeFile(
    join(directory, 'ssr.tsx'),
    "import React from 'react';\nimport { renderToString } from 'react-dom/server';\nimport { CheckboxFixture } from './fixture';\nconst mode = process.argv[2] === 'dark' ? 'dark' : 'light';\nprocess.stdout.write(renderToString(<CheckboxFixture mode={mode} />));\n",
  );
  await writeFile(
    join(directory, 'client.tsx'),
    "import React from 'react';\nimport { hydrateRoot } from 'react-dom/client';\nimport { CheckboxFixture } from './fixture';\nconst mode = document.body.dataset.mode === 'dark' ? 'dark' : 'light';\nhydrateRoot(document.querySelector('#root')!, <CheckboxFixture mode={mode} />);\n",
  );
  await writeFile(
    join(directory, 'ssr.build.ts'),
    "import { join } from 'node:path';\nconst result = await Bun.build({ entrypoints: ['ssr.tsx'], format: 'esm', outdir: 'dist', plugins: [{ name: 'react-native-web', setup(builder) { builder.onResolve({ filter: /^react-native$/u }, () => ({ path: join(process.cwd(), 'node_modules/react-native-web/dist/cjs/index.js') })); } }], target: 'bun' });\nif (!result.success) throw new Error(result.logs.map((log) => log.message).join('\\n'));\n",
  );
  await writeFile(
    join(directory, 'build.ts'),
    "import { join } from 'node:path';\nconst result = await Bun.build({ entrypoints: ['client.tsx'], outdir: 'dist', plugins: [{ name: 'react-native-web', setup(builder) { builder.onResolve({ filter: /^react-native$/u }, () => ({ path: join(process.cwd(), 'node_modules/react-native-web/dist/cjs/index.js') })); } }], target: 'browser' });\nif (!result.success) throw new Error(result.logs.map((log) => log.message).join('\\n'));\n",
  );
}

const checkboxFixtureSource = `import React, { useState } from 'react';
import { Checkbox, ThemeProvider } from '@ankhorage/surface';

export function CheckboxFixture({ mode }: { mode: 'light' | 'dark' }) {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState<boolean[]>([]);
  const [guardedCallCount, setGuardedCallCount] = useState(0);
  const onCheckedChange = (value: boolean) => { setValues((previous) => [...previous, value]); setChecked(value); };
  return <ThemeProvider initialMode={mode}>
    <Checkbox accessibilityLabel="Packed checkbox" checked={checked} onCheckedChange={onCheckedChange} testID="checkbox">Packed checkbox</Checkbox>
    <button onClick={() => setChecked(false)}>Force unchecked</button>
    <output data-testid="call-count">{values.length}</output>
    <output data-testid="call-values">{values.join(',')}</output>
    <Checkbox accessibilityLabel="Disabled checkbox" checked={false} disabled onCheckedChange={() => setGuardedCallCount((count) => count + 1)}>Disabled checkbox</Checkbox>
    <Checkbox accessibilityLabel="Read-only checkbox" checked={false} readOnly onCheckedChange={() => setGuardedCallCount((count) => count + 1)}>Read-only checkbox</Checkbox>
    <output data-testid="guarded-call-count">{guardedCallCount}</output>
  </ThemeProvider>;
}
`;

/*** Renders the consumer's real server component before browser hydration. */
async function renderServerMarkup(directory: string) {
  await mkdir(join(directory, 'dist'), { recursive: true });
  await runBun(directory, ['ssr.build.ts']);
  return Object.fromEntries(
    await Promise.all(
      ['light', 'dark'].map(async (mode) => [mode, await runBun(directory, ['dist/ssr.js', mode])]),
    ),
  ) as Record<string, string>;
}

/*** Bundles the client through React Native Web in the isolated consumer. */
async function buildConsumer(directory: string) {
  await runBun(directory, ['run', 'build']);
}

/*** Produces an SSR document whose client entrypoint hydrates the packed consumer. */
function createDocument(markup: Record<string, string>, parameters: URLSearchParams) {
  const mode = parameters.get('mode') === 'dark' ? 'dark' : 'light';
  return `<!doctype html><html><body data-mode="${mode}"><div id="root">${markup[mode]}</div><script type="module" src="/fixture.js"></script></body></html>`;
}

/*** Runs Bun in a temporary consumer and returns standard output for SSR markup. */
async function runBun(directory: string, arguments_: string[]) {
  const temporaryDirectory = join(directory, '.tmp');
  await mkdir(temporaryDirectory, { recursive: true });
  const childProcess = Bun.spawn(['bun', ...arguments_], {
    cwd: directory,
    env: {
      ...process.env,
      BUN_INSTALL_CACHE_DIR: join(directory, '.cache'),
      TMPDIR: temporaryDirectory,
    },
    stderr: 'pipe',
    stdout: 'pipe',
  });
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(childProcess.stdout).text(),
    new Response(childProcess.stderr).text(),
    childProcess.exited,
  ]);
  if (exitCode !== 0) throw new Error(`bun ${arguments_.join(' ')} failed:\n${stdout}${stderr}`);
  return stdout;
}
