import { readFileSync } from 'node:fs';

import { describe, expect, it } from 'bun:test';

import type { SelectionSemantics, SurfaceColorDiagnostics } from './index';
import { createTheme } from './theme/createTheme';

const indexSource = readFileSync(new URL('./index.ts', import.meta.url), 'utf8');
const packageJson = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
) as {
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  exports: Record<string, unknown>;
  files: string[];
  peerDependencies: Record<string, string>;
};

const expectedFeatureRootExports = [
  "export { AppBar } from './features/app-bar/public';",
  "export { Badge } from './features/badge/public';",
  "export { Button, IconButton } from './features/button/public';",
  "export { Card } from './features/card/public';",
  "export { Checkbox } from './features/form/checkbox/public';",
  "export { Radio } from './features/form/radio/public';",
  "export { TextInput } from './features/form/text-input/public';",
  "export { Icon, SUPPORTED_ICON_PROVIDERS } from './features/icon/public';",
  "export { Image } from './features/image/public';",
  "export { KeyboardAvoidingView } from './features/keyboard-avoiding-view/public';",
  "export { Divider, Grid, ScrollView, View } from './features/layout/public';",
  "export { Modal } from './features/modal/public';",
  "export { PopoverMenu } from './features/popover-menu/public';",
  "export { Popover } from './features/popover/public';",
  "export { Surface } from './features/surface/public';",
  "export { Tab, TabList, TabPanel, Tabs } from './features/tabs/public';",
  "export { Tooltip } from './features/tooltip/public';",
  "export { Toast, ToastProvider, useToast } from './features/toast/public';",
  "export { Heading, Text } from './features/typography/public';",
] as const;

const expectedLegacyRootExports = [
  "export { Field } from './components/field';",
  "export { HelperText } from './components/helper-text';",
  "export { Label } from './components/label';",
  "export { ListItem } from './components/list-item';",
  "export { Switch } from './components/switch';",
  "export { Textarea } from './components/textarea';",
  "export type { InteractionPolicy, InteractionPolicyProps } from './interactionPolicy';",
  "export * from './core/responsive';",
] as const;

describe('feature-owned root barrel contract', () => {
  it('routes migrated UI through feature-owned public facades', () => {
    expectedFeatureRootExports.forEach((line) => expect(indexSource).toContain(line));
  });

  it('does not retain removed layout aliases or a legacy layout facade', () => {
    expect(indexSource).not.toContain("'./layout");
    expect(indexSource).not.toMatch(/\bBoxProps\b/u);
    expect(indexSource).not.toMatch(/\bContainerProps\b/u);
    expect(indexSource).not.toMatch(/\bStackProps\b/u);
    expect(indexSource).not.toMatch(/\bScrollAreaProps\b/u);
    expect(indexSource).not.toMatch(/export\s*\{[^}]*\bBox\b/u);
    expect(indexSource).not.toMatch(/export\s*\{[^}]*\bContainer\b/u);
    expect(indexSource).not.toMatch(/export\s*\{[^}]*\bStack\b/u);
    expect(indexSource).not.toMatch(/export\s*\{[^}]*\bScrollArea\b/u);
  });
});

describe('remaining root barrel contract', () => {
  it('keeps still-unmigrated UI on its current public API until its feature migration', () => {
    expectedLegacyRootExports.forEach((line) => expect(indexSource).toContain(line));
  });

  it('does not retain obsolete action-sheet, drawer, menu aliases, or navigation chrome', () => {
    expect(indexSource).not.toContain('ActionSheet');
    expect(indexSource).not.toContain("'./components/action-sheet'");
    expect(indexSource).not.toContain("'./components/drawer'");
    expect(indexSource).not.toContain("'./components/navigation'");
    expect(indexSource).not.toContain('DrawerNavigation');
    expect(indexSource).not.toMatch(/\bMenuProps\b/u);
    expect(indexSource).not.toMatch(/\bMenuAction\b/u);
    expect(indexSource).not.toMatch(/export\s*\{\s*Menu\s*\}/u);
    expect(indexSource).not.toContain('NavigationItem');
    expect(indexSource).not.toContain('NavigationList');
    expect(indexSource).not.toContain('TabBar');
  });

  it('keeps internal infrastructure off the public barrel', () => {
    expect(indexSource).not.toContain("'./internal/");
    expect(indexSource).not.toContain('resolveSelectionControlNextChecked');
    expect(indexSource).not.toContain('resolveFieldPresentation');
    expect(indexSource).not.toContain('FocusScope');
    expect(indexSource).not.toContain('useFocusManager');
  });

  it('exports the resolved semantic and diagnostic contracts', () => {
    const theme = createTheme();
    const selection: SelectionSemantics = theme.semantics.selection;
    const diagnostics: SurfaceColorDiagnostics = theme.colorDiagnostics;
    expect(selection.background).toBeDefined();
    expect(diagnostics.generated.swatches).toBe(theme.swatches);
  });
});

describe('public package metadata contract', () => {
  it('keeps package metadata aligned with deliberate public entrypoints', () => {
    expect(packageJson.files).toEqual(['dist', 'src', 'README.md', 'CHANGELOG.md', 'LICENSE']);
    expect(packageJson.exports).toEqual({
      '.': {
        'react-native': './src/index.ts',
        browser: './src/index.ts',
        default: './dist/index.js',
        import: './dist/index.js',
        types: './dist/index.d.ts',
      },
      './bottom-sheet': {
        'react-native': './src/features/bottom-sheet/public.ts',
        browser: './src/features/bottom-sheet/public.ts',
        default: './dist/features/bottom-sheet/public.js',
        import: './dist/features/bottom-sheet/public.js',
        types: './dist/features/bottom-sheet/public.d.ts',
      },
      './theme': {
        bun: './src/theme/public.ts',
        'react-native': './src/theme/public.ts',
        browser: './src/theme/public.ts',
        default: './dist/theme/public.js',
        import: './dist/theme/public.js',
        types: './dist/theme/public.d.ts',
      },
      './package.json': './package.json',
    });
  });

  it('supports RN 0.86 patches while validating the canonical RN 0.86.3 baseline', () => {
    expect(packageJson.peerDependencies['react-native']).toBe('0.86.x');
    expect(packageJson.devDependencies['react-native']).toBe('0.86.3');
    expect(packageJson.peerDependencies['react-native-svg']).toBe('15.15.4');
    expect(packageJson.devDependencies['react-native-svg']).toBe('15.15.4');
  });
});

describe('bottom-sheet package contract', () => {
  it('keeps the implementation and Expo 57 runtime boundary explicit', () => {
    expect(packageJson.dependencies['@gorhom/bottom-sheet']).toMatch(/^\^5\./);
    expect(packageJson.peerDependencies['react-native-gesture-handler']).toMatch(/^~2\.32\./);
    expect(packageJson.peerDependencies['react-native-reanimated']).toBe('4.5.1');
    expect(packageJson.peerDependencies['react-native-worklets']).toBe('0.10.1');
  });
});
