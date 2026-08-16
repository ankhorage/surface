import { readFile } from 'node:fs/promises';

import { describe, expect, it } from 'bun:test';

describe('Stack layout contract', () => {
  it('keeps authored children as direct flex items and applies spacing through gap', async () => {
    const source = await readFile(new URL('./Stack.tsx', import.meta.url), 'utf8');

    expect(source).toContain('gap: activeGap');
    expect(source).toContain('{children}');
    expect(source).not.toContain("from 'react-native'");
    expect(source).not.toContain('React.Children');
  });
});
