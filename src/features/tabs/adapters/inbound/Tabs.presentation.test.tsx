import { expect, mock, test } from 'bun:test';
import { Window } from 'happy-dom';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as ReactNativeWeb from 'react-native-web';

await mock.module('react-native', () => ReactNativeWeb);

const { ThemeProvider, ThemeScope } = await import('../../../theme/runtime');
const { Tab } = await import('./Tab');
const { TabList } = await import('./TabList');
const { TabPanel } = await import('./TabPanel');
const { Tabs } = await import('./Tabs');

test('opens the selected tab into its panel while retaining inactive separators', () => {
  const markup = renderToStaticMarkup(
    <ThemeProvider>
      <Tabs defaultValue="export">
        <TabList>
          <Tab testID="tree-tab" value="tree">
            Tree
          </Tab>
          <Tab testID="export-tab" value="export">
            Export
          </Tab>
        </TabList>
      </Tabs>
    </ThemeProvider>,
  );

  const browserWindow = new Window();
  browserWindow.document.body.innerHTML = markup;
  const inactive = browserWindow.document.querySelector('[data-testid="tree-tab"] > div');
  const active = browserWindow.document.querySelector('[data-testid="export-tab"] > div');
  const inactiveStyle = inactive?.getAttribute('style') ?? '';
  const activeStyle = active?.getAttribute('style') ?? '';

  expect(inactiveStyle).toContain('border-bottom-width:2px');
  expect(inactiveStyle).not.toContain('border-bottom-color:transparent');
  expect(activeStyle).toContain('border-bottom-width:2px');
  expect(activeStyle).toMatch(/border-bottom-color:(?:transparent|rgba\(0,0,0,0(?:\.0+)?\))/u);
  browserWindow.close();
});

test.each([
  ['light', false],
  ['light', true],
  ['dark', false],
  ['dark', true],
] as const)('%s attached tabs own one semantic surface (inverted=%p)', (mode, inverted) => {
  const styles = renderAttachedStyles(mode, inverted);

  expect(styles.active).not.toContain('border-bottom-width');
  expect(styles.inactive).not.toContain('border-bottom-width');
  expect(styles.inactive).toMatch(/background-color:(?:transparent|rgba\(0,0,0,0(?:\.0+)?\))/u);
  expect(styles.activeBackground).toBeTruthy();
  expect(styles.panel).toContain(`background-color:${styles.activeBackground}`);
  expect(styles.panel).not.toContain('rgb(255, 0, 255)');
});

test.each(['light', 'dark'] as const)(
  '%s attached tabs follow inherited surface polarity',
  (mode) => {
    const normal = renderAttachedStyles(mode, false);
    const inverted = renderAttachedStyles(mode, true);

    expect(normal.activeBackground).not.toBe(inverted.activeBackground);
    expect(normal.panel).toContain(`background-color:${normal.activeBackground}`);
    expect(inverted.panel).toContain(`background-color:${inverted.activeBackground}`);
  },
);

/*** Render attached tabs and return their observable web presentation styles. */
function renderAttachedStyles(mode: 'light' | 'dark', inverted: boolean) {
  const markup = renderToStaticMarkup(
    <ThemeProvider initialMode={mode}>
      <ThemeScope inverted={inverted}>
        <Tabs defaultValue="tree" variant="attached">
          <TabList>
            <Tab testID="tree-tab" value="tree">
              Tree
            </Tab>
            <Tab testID="export-tab" value="export">
              Export
            </Tab>
          </TabList>
          <TabPanel
            style={{ backgroundColor: '#ff00ff' }}
            testID="tree-panel"
            value="tree"
          >
            Content
          </TabPanel>
        </Tabs>
      </ThemeScope>
    </ThemeProvider>,
  );

  const browserWindow = new Window();
  browserWindow.document.body.innerHTML = markup;
  const active = browserWindow.document.querySelector('[data-testid="tree-tab"] > div');
  const inactive = browserWindow.document.querySelector('[data-testid="export-tab"] > div');
  const panel = browserWindow.document.querySelector('[data-testid="tree-panel"]');
  const activeStyle = active?.getAttribute('style') ?? '';
  const result = {
    active: activeStyle,
    inactive: inactive?.getAttribute('style') ?? '',
    panel: panel?.getAttribute('style') ?? '',
    activeBackground: /background-color:([^;]+)/u.exec(activeStyle)?.[1],
  };
  browserWindow.close();
  return result;
}
