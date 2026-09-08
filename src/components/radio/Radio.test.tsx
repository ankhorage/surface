import { expect, mock, test } from 'bun:test';
import React from 'react';
import { renderToString } from 'react-dom/server';
import * as ReactNativeWeb from 'react-native-web';

await mock.module('react-native', () => ReactNativeWeb);

const { Radio } = await import('./Radio');
const { ThemeProvider } = await import('../../theme/ThemeContext');

test('renders primitive labels through text while preserving radio semantics', () => {
  const markup = renderToString(
    <ThemeProvider>
      <Radio checked>Selected option</Radio>
    </ThemeProvider>,
  );

  expect(markup).toContain('role="radio"');
  expect(markup).toContain('aria-checked="true"');
  expect(markup).toContain('Selected option');
});

test('renders structured label content directly without invalid text nesting', () => {
  const renderErrors: string[] = [];
  const originalError = console.error;
  console.error = (...values: unknown[]) => {
    renderErrors.push(values.map(String).join(' '));
  };

  try {
    const markup = renderToString(
      <ThemeProvider>
        <Radio checked>
          <ReactNativeWeb.View testID="rich-radio-content">
            <ReactNativeWeb.Text>Primary label</ReactNativeWeb.Text>
            <ReactNativeWeb.Text>Supporting description</ReactNativeWeb.Text>
          </ReactNativeWeb.View>
        </Radio>
      </ThemeProvider>,
    );

    expect(markup).toContain('role="radio"');
    expect(markup).toContain('aria-checked="true"');
    expect(markup).toContain('data-testid="rich-radio-content"');
    expect(markup).toContain('Supporting description');
    expect(renderErrors).toEqual([]);
  } finally {
    console.error = originalError;
  }
});
