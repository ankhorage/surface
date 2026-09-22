import { expect, test } from 'bun:test';
import React from 'react';

import { wrapTabListChildren } from './wrapTabListChildren';

test('preserves direct children when fill is disabled', () => {
  const child = React.createElement('span', { id: 'one' });
  expect(wrapTabListChildren(child, false)).toBe(child);
});

test('wraps every direct child in an equal flex container when fill is enabled', () => {
  const children = [
    React.createElement('span', { id: 'one', key: 'one' }),
    React.createElement('span', { id: 'two', key: 'two' }),
  ];
  const wrapped = React.Children.toArray(wrapTabListChildren(children, true));

  expect(wrapped).toHaveLength(2);
  for (const item of wrapped) {
    expect(React.isValidElement(item)).toBe(true);
    if (!React.isValidElement(item)) continue;
    expect(item.props).toMatchObject({ flex: 1 });
  }
});
