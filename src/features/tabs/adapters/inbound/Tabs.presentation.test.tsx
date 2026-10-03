import { expect, mock, test } from 'bun:test';
import { Window } from 'happy-dom';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as ReactNativeWeb from 'react-native-web';

await mock.module('react-native', () => ReactNativeWeb);

const { ThemeProvider } = await import('../../../theme/runtime');
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


test('attaches the selected tab to the active panel without borders', () => {
  const markup = renderToStaticMarkup(
    <ThemeProvider>
      <Tabs defaultValue="tree" variant="attached">
        <TabList>
          <Tab testID="tree-tab" value="tree">
            Tree
          </Tab>
          <Tab testID="export-tab" value="export">
            Export
          </Tab>
        </TabList>
        <TabPanel testID="tree-panel" value="tree">
          Content
        </TabPanel>
      </Tabs>
    </ThemeProvider>,
  );

  const browserWindow = new Window();
  browserWindow.document.body.innerHTML = markup;
  const active = browserWindow.document.querySelector('[data-testid="tree-tab"] > div');
  const inactive = browserWindow.document.querySelector('[data-testid="export-tab"] > div');
  const panel = browserWindow.document.querySelector('[data-testid="tree-panel"]');
  const activeStyle = active?.getAttribute('style') ?? '';
  const inactiveStyle = inactive?.getAttribute('style') ?? '';
  const panelStyle = panel?.getAttribute('style') ?? '';
  const activeBackground = activeStyle.match(/background-color:([^;]+)/u)?.[1];

  expect(activeStyle).not.toContain('border-bottom-width');
  expect(inactiveStyle).not.toContain('border-bottom-width');
  expect(activeBackground).toBeTruthy();
  expect(panelStyle).toContain(`background-color:${activeBackground}`);
  browserWindow.close();
});
