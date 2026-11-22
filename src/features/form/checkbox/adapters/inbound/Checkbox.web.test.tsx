import { expect, mock, test } from 'bun:test';
import { Window } from 'happy-dom';
import React, { act, useState } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';

const browserWindow = new Window({ url: 'https://surface.test/' });
installBrowserGlobals(browserWindow);

const ReactNativeWeb = await import('react-native-web');
await mock.module('react-native', () => ReactNativeWeb);

const { Checkbox } = await import('./Checkbox');
const { ThemeProvider } = await import('../../../../theme/runtime');

interface CheckboxElement {
  dispatchEvent: (event: Event) => boolean;
  getAttribute: (name: string) => string | null;
}

/*** Exercises the public checkbox boundary through RN Web's SSR and hydrated DOM adapters. */
function ControlledCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <ThemeProvider>
      <Checkbox
        accessibilityLabel="Packed checkbox"
        checked={checked}
        onCheckedChange={setChecked}
        testID="checkbox"
      >
        Packed checkbox
      </Checkbox>
    </ThemeProvider>
  );
}

test('RN Web exposes the controlled checkbox state through aria-checked before and after hydration', async () => {
  const markup = renderToString(<ControlledCheckbox />);
  expect(markup).toContain('role="checkbox"');
  expect(markup).toContain('aria-checked="false"');

  const container = browserWindow.document.createElement('div');
  container.innerHTML = markup;
  browserWindow.document.body.append(container);

  try {
    const root = hydrateRoot(container as unknown as Element, <ControlledCheckbox />);
    await act(async () => Promise.resolve());
    const checkbox = container.querySelector('[data-testid="checkbox"]') as CheckboxElement | null;
    expect(checkbox?.getAttribute('role')).toBe('checkbox');
    expect(checkbox?.getAttribute('aria-checked')).toBe('false');

    act(() => {
      checkbox?.dispatchEvent(
        new browserWindow.MouseEvent('click', { bubbles: true }) as unknown as Event,
      );
    });
    expect(checkbox?.getAttribute('aria-checked')).toBe('true');
    expect(container.textContent).toContain('✓');

    act(() => {
      checkbox?.dispatchEvent(
        new browserWindow.MouseEvent('click', { bubbles: true }) as unknown as Event,
      );
    });
    expect(checkbox?.getAttribute('aria-checked')).toBe('false');
    act(() => root.unmount());
  } finally {
    browserWindow.close();
    removeBrowserGlobals();
  }
});

/*** Installs the browser globals required by React DOM hydration. */
function installBrowserGlobals(browserWindow: Window) {
  Object.assign(globalThis, {
    IS_REACT_ACT_ENVIRONMENT: true,
    KeyboardEvent: browserWindow.KeyboardEvent,
    MouseEvent: browserWindow.MouseEvent,
    Node: browserWindow.Node,
    ShadowRoot: browserWindow.ShadowRoot,
    document: browserWindow.document,
    navigator: browserWindow.navigator,
    window: browserWindow,
  });
}

/*** Removes the browser globals installed for isolated React DOM hydration. */
function removeBrowserGlobals() {
  for (const property of [
    'IS_REACT_ACT_ENVIRONMENT',
    'KeyboardEvent',
    'MouseEvent',
    'Node',
    'ShadowRoot',
    'document',
    'navigator',
    'window',
  ]) {
    Reflect.deleteProperty(globalThis, property);
  }
}
