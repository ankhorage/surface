import { expect, test } from 'bun:test';
import { Window } from 'happy-dom';
import React, { act } from 'react';

import { BrowserPopover } from './BrowserPopover';

test('BrowserPopover opens, uses browser placement, and closes on outside press', async () => {
  const { browserWindow, container, root } = await renderBrowserPopover();
  try {
    const button = container.querySelector('button');
    if (button === null) throw new Error('BrowserPopover anchor did not render.');
    await act(async () => {
      button.click();
      await Promise.resolve();
    });

    const content = browserWindow.document.querySelector(
      '[data-testid="popover-content"]',
    ) as HTMLElement | null;
    expect(content?.textContent).toBe('Content');
    expect(content?.style.position).toBe('fixed');
    expect(Number.parseInt(content?.style.bottom ?? '', 10)).toBeGreaterThan(0);
    expect(content?.style.left).toBe('0px');
    expect(content?.style.transform).toBe('translateX(-100%)');

    await act(async () => {
      browserWindow.document.body.dispatchEvent(
        new browserWindow.PointerEvent('pointerdown', { bubbles: true }),
      );
      await Promise.resolve();
    });
    expect(browserWindow.document.querySelector('[data-testid="popover-content"]')).toBeNull();
    act(() => root.unmount());
  } finally {
    resetBrowserGlobals(browserWindow);
  }
});

test('BrowserPopover closes on Escape and removes browser listeners after unmount', async () => {
  const { browserWindow, container, root } = await renderBrowserPopover();
  try {
    const button = container.querySelector('button');
    if (button === null) throw new Error('BrowserPopover anchor did not render.');
    await act(async () => {
      button.click();
      await Promise.resolve();
    });

    await act(async () => {
      browserWindow.document.dispatchEvent(
        new browserWindow.KeyboardEvent('keydown', { bubbles: true, key: 'Escape' }),
      );
      await Promise.resolve();
    });
    expect(browserWindow.document.querySelector('[data-testid="popover-content"]')).toBeNull();

    act(() => root.unmount());
    browserWindow.dispatchEvent(new browserWindow.Event('resize'));
    browserWindow.document.body.dispatchEvent(
      new browserWindow.PointerEvent('pointerdown', { bubbles: true }),
    );
    expect(browserWindow.document.querySelector('[data-testid="popover-content"]')).toBeNull();
  } finally {
    resetBrowserGlobals(browserWindow);
  }
});

/*** Mount the browser-only Popover in a DOM isolated from the Bun test process. */
async function renderBrowserPopover() {
  const browserWindow = new Window();
  Object.assign(globalThis, {
    IS_REACT_ACT_ENVIRONMENT: true,
    document: browserWindow.document,
    Node: browserWindow.Node,
    PointerEvent: browserWindow.PointerEvent,
    window: browserWindow,
  });
  try {
    const container = browserWindow.document.createElement('div');
    browserWindow.document.body.append(container);
    const { createRoot } = await import('react-dom/client');
    const root = createRoot(container as unknown as Element);

    act(() => {
      root.render(
        <BrowserPopover
          closeOnOutsidePress
          placement="top-end"
          testID="popover"
          anchor={({ toggle }) => <button onClick={toggle}>Open</button>}
        >
          <span>Content</span>
        </BrowserPopover>,
      );
    });
    return { browserWindow, container, root };
  } catch (error) {
    resetBrowserGlobals(browserWindow);
    throw error;
  }
}

/*** Remove the temporary DOM globals so other tests retain their own environment. */
function resetBrowserGlobals(browserWindow: Window): void {
  browserWindow.close();
  Reflect.deleteProperty(globalThis, 'IS_REACT_ACT_ENVIRONMENT');
  Reflect.deleteProperty(globalThis, 'Node');
  Reflect.deleteProperty(globalThis, 'PointerEvent');
  Reflect.deleteProperty(globalThis, 'document');
  Reflect.deleteProperty(globalThis, 'window');
}
