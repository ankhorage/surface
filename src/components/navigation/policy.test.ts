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

describe('navigation interaction policy', () => {
  it('host component prop types include interactionPolicy', () => {
    const sources = listNavigationSources().map((path) => ({
      path,
      content: readFileSync(path, 'utf8'),
    }));

    const hostComponents = [{ path: 'types.ts', prop: 'interactionPolicy?: InteractionPolicy' }];

    sources.forEach(({ content, path }) => {
      const component = hostComponents.find((host) => path.endsWith(host.path));
      if (component) {
        expect(content, path).toContain(component.prop);
      }
    });
  });

  it('navigation components accept interactionPolicy prop', () => {
    const sources = listNavigationSources().map((path) => ({
      path,
      content: readFileSync(path, 'utf8'),
    }));

    const components = [
      'NavigationItem.tsx',
      'NavigationList.tsx',
      'TabBar.tsx',
      'TabBarItem.tsx',
      'DrawerNavigation.tsx',
      'DrawerNavigationItem.tsx',
    ];

    sources.forEach(({ content, path }) => {
      const component = components.find((c) => path.endsWith(c));
      if (component) {
        expect(content, path).toContain('interactionPolicy');
      }
    });
  });

  it('direct ButtonBase owners forward interactionPolicy unchanged', () => {
    const sources = listNavigationSources().map((path) => ({
      path,
      content: readFileSync(path, 'utf8'),
    }));

    const directButtonBaseOwners = ['NavigationItem.tsx', 'TabBarItem.tsx'];

    sources.forEach(({ content, path }) => {
      const component = directButtonBaseOwners.find((owner) => path.endsWith(owner));
      if (component) {
        expect(content, path).toContain('interactionPolicy={interactionPolicy}');
      }
    });
  });

  it('container components forward interactionPolicy to children', () => {
    const sources = listNavigationSources().map((path) => ({
      path,
      content: readFileSync(path, 'utf8'),
    }));

    const forwardingMap: Record<string, string> = {
      'NavigationList.tsx': 'NavigationItem',
      'TabBar.tsx': 'TabBarItem',
      'DrawerNavigation.tsx': 'DrawerNavigationItem',
      'DrawerNavigationItem.tsx': 'NavigationItem',
    };

    sources.forEach(({ content, path }) => {
      const filename = path.split('/').pop();
      if (filename && forwardingMap[filename]) {
        expect(content, path).toContain(`interactionPolicy={interactionPolicy}`);
      }
    });
  });

  it('does not map passive interactionPolicy to disabled in navigation components', () => {
    const sources = listNavigationSources().map((path) => ({
      path,
      content: readFileSync(path, 'utf8'),
    }));

    const passiveToDisabledPatterns = [
      /disabled=\{interactionPolicy === 'passive'\}/,
      /disabled=\{passive/,
    ];

    sources.forEach(({ content, path }) => {
      passiveToDisabledPatterns.forEach((pattern) => {
        expect(content, path).not.toMatch(pattern);
      });
    });
  });
});
