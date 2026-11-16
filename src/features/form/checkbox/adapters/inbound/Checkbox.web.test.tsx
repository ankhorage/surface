import { expect, mock, test } from 'bun:test';
import { Window } from 'happy-dom';
import React, { act, useState } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import * as ReactNativeWeb from 'react-native-web';

await mock.module('react-native', () => ReactNativeWeb);

const { Checkbox } = await import('./Checkbox');
const { ThemeProvider } = await import('../../../../theme/runtime');

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

  const browserWindow = new Window({ url: 'https://surface.test/' });
  Object.assign(globalThis, {
    IS_REACT_ACT_ENVIRONMENT: true,
    KeyboardEvent: browserWindow.KeyboardEvent,
    MouseEvent: browserWindow.MouseEvent,
    Node: browserWindow.Node,
    document: browserWindow.document,
    navigator: browserWindow.navigator,
    window: browserWindow,
  });
  const container = browserWindow.document.createElement('div');
  container.innerHTML = markup;
  browserWindow.document.body.append(container);

  try {
    const root = hydrateRoot(container as unknown as Element, <ControlledCheckbox />);
    await act(async () => Promise.resolve());
    const checkbox = container.querySelector('[data-testid="checkbox"]') as unknown as {
      dispatchEvent: (event: Event) => boolean;
      getAttribute: (name: string) => string | null;
    } | null;
    expect(checkbox?.getAttribute('role')).toBe('checkbox');
    expect(checkbox?.getAttribute('aria-checked')).toBe('false');

    await act(async () => {
      checkbox?.dispatchEvent(
        new browserWindow.MouseEvent('click', { bubbles: true }) as unknown as Event,
      );
    });
    expect(checkbox?.getAttribute('aria-checked')).toBe('true');
    expect(container.textContent).toContain('✓');

    await act(async () => {
      checkbox?.dispatchEvent(
        new browserWindow.KeyboardEvent('keydown', { bubbles: true, key: ' ' }) as unknown as Event,
      );
      checkbox?.dispatchEvent(
        new browserWindow.KeyboardEvent('keyup', { bubbles: true, key: ' ' }) as unknown as Event,
      );
    });
    expect(checkbox?.getAttribute('aria-checked')).toBe('false');
    await act(async () => {
      checkbox?.dispatchEvent(
        new browserWindow.MouseEvent('click', { bubbles: true }) as unknown as Event,
      );
    });
    expect(checkbox?.getAttribute('aria-checked')).toBe('true');
    act(() => root.unmount());
  } finally {
    browserWindow.close();
    Reflect.deleteProperty(globalThis, 'IS_REACT_ACT_ENVIRONMENT');
    Reflect.deleteProperty(globalThis, 'KeyboardEvent');
    Reflect.deleteProperty(globalThis, 'MouseEvent');
    Reflect.deleteProperty(globalThis, 'Node');
    Reflect.deleteProperty(globalThis, 'document');
    Reflect.deleteProperty(globalThis, 'navigator');
    Reflect.deleteProperty(globalThis, 'window');
  }
});
