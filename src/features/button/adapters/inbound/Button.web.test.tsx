import { expect, mock, test } from 'bun:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as ReactNativeWeb from 'react-native-web';

await mock.module('react-native', () => ReactNativeWeb);

const { Button } = await import('./Button.web');
const { ThemeProvider } = await import('../../../theme/runtime');

/*** Renders a public Button against the browser adapter to inspect its resolved typography. */
function renderButton(labelWeight?: 'semiBold' | 'bold') {
  return renderToStaticMarkup(
    <ThemeProvider>
      <Button labelWeight={labelWeight}>Continue</Button>
    </ThemeProvider>,
  );
}

test('uses the semantic semiBold button label weight by default', () => {
  expect(renderButton()).toContain('font-weight:600');
});

test('uses the semantic bold button label weight when requested', () => {
  expect(renderButton('bold')).toContain('font-weight:700');
});
