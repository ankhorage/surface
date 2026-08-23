import { expect, mock, test } from 'bun:test';
import { Window } from 'happy-dom';
import React, { act } from 'react';
import { renderToString } from 'react-dom/server';
import * as ReactNativeWeb from 'react-native-web';

await mock.module('react-native', () => ReactNativeWeb);

const scrollContentStyle = { padding: 4 };

const { Container } = await import('./layout/Container');
const { Grid } = await import('./layout/Grid');
const { ScrollArea } = await import('./layout/ScrollArea');
const { Show } = await import('./layout/Show');
const { ThemeProvider } = await import('./theme/ThemeContext');

function ResponsiveAcceptanceTree() {
  return (
    <ThemeProvider>
      <Container maxWidth={{ base: 640, md: 960 }} px={{ base: 12, md: 24 }} testID="container">
        <ScrollArea contentContainerStyle={scrollContentStyle} testID="scroll-area">
          <Grid cols={{ base: 1, md: 2 }} gap={{ base: 8, md: 16 }} testID="grid">
            <ReactNativeWeb.View testID="grid-first" />
            <ReactNativeWeb.View testID="grid-second" />
          </Grid>
          <Show
            fallback={<ReactNativeWeb.Text>static-fallback</ReactNativeWeb.Text>}
            when={{ base: false, md: true }}
          >
            <ReactNativeWeb.Text>wide-content</ReactNativeWeb.Text>
          </Show>
        </ScrollArea>
      </Container>
    </ThemeProvider>
  );
}

test('RN Web 0.21 statically renders and hydrates representative responsive primitives', async () => {
  const markup = renderToString(<ResponsiveAcceptanceTree />);

  expect(markup).toContain('data-testid="container"');
  expect(markup).toContain('data-testid="scroll-area"');
  expect(markup).toContain('data-testid="grid"');
  expect(markup).toContain('static-fallback');
  expect(markup).not.toContain('wide-content');

  const browserWindow = new Window({ url: 'https://surface.test/' });
  Object.assign(globalThis, {
    IS_REACT_ACT_ENVIRONMENT: true,
    Node: browserWindow.Node,
    document: browserWindow.document,
    navigator: browserWindow.navigator,
    window: browserWindow,
  });
  const container = browserWindow.document.createElement('div');
  container.innerHTML = markup;
  browserWindow.document.body.append(container);
  const hydrationErrors: string[] = [];
  const originalError = console.error;
  console.error = (...values: unknown[]) => {
    hydrationErrors.push(values.map(String).join(' '));
  };

  try {
    const { hydrateRoot } = await import('react-dom/client');
    const root = hydrateRoot(container as unknown as Element, <ResponsiveAcceptanceTree />);
    await act(async () => Promise.resolve());

    expect(container.querySelector('[data-testid="container"]')).not.toBeNull();
    expect(container.querySelector('[data-testid="scroll-area"]')).not.toBeNull();
    expect(container.querySelectorAll('[data-testid^="grid-"]')).toHaveLength(2);
    expect(hydrationErrors).toEqual([]);

    act(() => root.unmount());
  } finally {
    console.error = originalError;
    browserWindow.close();
    Reflect.deleteProperty(globalThis, 'IS_REACT_ACT_ENVIRONMENT');
    Reflect.deleteProperty(globalThis, 'Node');
    Reflect.deleteProperty(globalThis, 'document');
    Reflect.deleteProperty(globalThis, 'navigator');
    Reflect.deleteProperty(globalThis, 'window');
  }
});
