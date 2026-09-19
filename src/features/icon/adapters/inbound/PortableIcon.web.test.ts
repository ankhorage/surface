import { expect, test } from 'bun:test';

import { PortableIcon } from './PortableIcon.web';

test('web icon adapter remains a native-free platform boundary', async () => {
  expect(typeof PortableIcon).toBe('function');

  const source = await Bun.file(
    'src/features/icon/adapters/inbound/PortableIcon.web.tsx',
  ).text();

  expect(source).not.toContain('react-native-svg');
  expect(source).not.toContain('/static');
  expect(source).toContain('/glyphmaps/');
  expect(source).toContain('/fonts/');
});
