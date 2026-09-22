import { expect, test } from 'bun:test';

import type { TabProps } from '../../../../types/tabs';

test('accepts trailing tab content without replacing the canonical label', () => {
  const trailing = '2';
  const props: TabProps = {
    value: 'rules',
    children: 'Rules',
    trailing,
  };

  expect(props).toEqual({
    value: 'rules',
    children: 'Rules',
    trailing,
  });
});
