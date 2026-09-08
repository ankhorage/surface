import { expect, test } from 'bun:test';
import React from 'react';

import { isRadioTextContent } from './isRadioTextContent';

test('classifies only primitive labels for the built-in text presentation', () => {
  expect(isRadioTextContent('Option')).toBe(true);
  expect(isRadioTextContent(7)).toBe(true);
  expect(isRadioTextContent(React.createElement('span', null, 'Structured'))).toBe(false);
  expect(isRadioTextContent(null)).toBe(false);
});

test('Radio preserves one radio interaction boundary and renders structured content directly', async () => {
  const source = await Bun.file('src/components/radio/Radio.tsx').text();

  expect(source).toContain('accessibilityRole="radio"');
  expect(source).toContain('accessibilityState={{ checked: isChecked }}');
  expect(source).toContain('const isTextContent = isRadioTextContent(children);');
  expect(source).toMatch(/isTextContent \? <Text[^>]*>\{children\}<\/Text> : children/);
});
