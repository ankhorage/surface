import { readFileSync } from 'node:fs';

import { describe, expect, it } from 'bun:test';

const indexSource = readFileSync(new URL('./index.ts', import.meta.url), 'utf8');
const packageJson = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
) as {
  exports: Record<string, unknown>;
  files: string[];
};

const expectedRootExports = [
  "export { Badge } from './components/badge';",
  "export { Button } from './components/button';",
  "export { Card } from './components/card';",
  "export { Checkbox } from './components/checkbox';",
  "export { Drawer } from './components/drawer';",
  "export { Field } from './components/field';",
  "export { HelperText } from './components/helper-text';",
  "export { IconButton } from './components/icon-button';",
  "export { Label } from './components/label';",
  "export { ListItem } from './components/list-item';",
  "export { DrawerNavigation, DrawerNavigationItem, NavigationItem, NavigationList, TabBar, TabBarItem } from './components/navigation';",
  "export { Menu } from './components/menu';",
  "export { Modal } from './components/modal';",
  "export { Radio } from './components/radio';",
  "export { Switch } from './components/switch';",
  "export { Tab, TabList, TabPanel, Tabs } from './components/tabs';",
  "export { TextInput } from './components/text-input';",
  "export { Textarea } from './components/textarea';",
  "export { Toast, ToastProvider, useToast } from './components/toast';",
  "export { Tooltip } from './components/tooltip';",
  "export * from './core/responsive';",
  "export * from './layout';",
  "export * from './theme';",
] as const;

describe('public package contract', () => {
  it('keeps the intended package surface on the root barrel', () => {
    expectedRootExports.forEach((line) => {
      expect(indexSource).toContain(line);
    });
  });

  it('keeps internal infrastructure off the public barrel', () => {
    expect(indexSource).not.toContain("'./internal/");
    expect(indexSource).not.toContain('resolveSelectionControlNextChecked');
    expect(indexSource).not.toContain('resolveFieldPresentation');
    expect(indexSource).not.toContain('FocusScope');
    expect(indexSource).not.toContain('useFocusManager');
  });

  it('keeps package metadata aligned with the single-entry public surface', () => {
    expect(packageJson.files).toEqual(['dist', 'src', 'README.md', 'CHANGELOG.md', 'LICENSE']);
    expect(packageJson.exports).toEqual({
      '.': {
        'react-native': './src/index.ts',
        browser: './src/index.ts',
        default: './dist/index.js',
        import: './dist/index.js',
        types: './dist/index.d.ts',
      },
      './package.json': './package.json',
    });
  });
});
