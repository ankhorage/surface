import { readdirSync, readFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'bun:test';

const navigationDir = fileURLToPath(new URL('.', import.meta.url));

const forbiddenPatterns = [
  'expo-router',
  '@react-navigation',
  'AppManifest',
  'NavigatorSpec',
  'generated app',
  'templates',
] as const;

function listNavigationSources() {
  return readdirSync(navigationDir)
    .filter((entry) => {
      const extension = extname(entry);
      if (!(extension === '.ts' || extension === '.tsx')) {
        return false;
      }

      return !entry.includes('.test.');
    })
    .map((entry) => join(navigationDir, entry));
}

describe('navigation module boundaries', () => {
  it('does not import routers, manifests, or generated app code', () => {
    const sources = listNavigationSources().map((path) => ({
      path,
      content: readFileSync(path, 'utf8'),
    }));

    sources.forEach(({ content, path }) => {
      forbiddenPatterns.forEach((pattern) => {
        expect(content, path).not.toContain(pattern);
      });
    });
  });
});
