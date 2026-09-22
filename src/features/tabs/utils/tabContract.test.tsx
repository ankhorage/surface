import { expect, test } from 'bun:test';
import React from 'react';

import type { TabProps } from '../../../../types/tabs';

test('accepts trailing tab content without replacing the canonical label', () => {
  const trailing = React.createElement('span', null, '2');
  const props = {
    value: 'rules',
    children: 'Rules',
    trailing,
  } satisfies TabProps;

  expect(props.children).toBe('Rules');
  expect(props.trailing).toBe(trailing);
});
