import { readFileSync } from 'node:fs';

import { describe, expect, it } from 'bun:test';

import type { SelectionSemantics, SurfaceColorDiagnostics } from './features/theme/public';
import { createTheme } from './features/theme/public';

const indexSource = readFileSync(new URL('./index.ts', import.meta.url), 'utf8');
const authoringControlsSource = readFileSync(
  new URL('./features/authoring/public.ts', import.meta.url),
  'utf8',
);
const browserAuthoringControlsSource = readFileSync(
  new URL('./features/authoring/browser.ts', import.meta.url),
  'utf8',
);
const packageJson = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
) as {
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  exports: Record<string, unknown>;
  files: string[];
  peerDependencies: Record<string, string>;
};

const capabilitiesExport = {
  './capabilities': {
    default: './dist/capabilities/index.js',
    import: './dist/capabilities/index.js',
    types: './dist/capabilities/index.d.ts',
  },
};

const authoringControlsExport = {
  './authoring-controls': {
    'react-native': './dist/features/authoring/public.js',
    browser: './dist/features/authoring/browser.js',
    default: './dist/features/authoring/public.js',
    import: './dist/features/authoring/public.js',
    types: './dist/features/authoring/public.d.ts',
  },
};

const expectedFeatureRootExports = [
  "export { AppBar } from './features/app-bar/public.js';",
  "export { Badge } from './features/badge/public.js';",
  "export { Button, IconButton } from './features/button/public.js';",
  "export { Card } from './features/card/public.js';",
  "export { Checkbox } from './features/form/checkbox/public.js';",
  "export { Field } from './features/form/field/public.js';",
  "export { Radio } from './features/form/radio/public.js';",
  "export { Switch } from './features/form/switch/public.js';",
  "export { TextInput } from './features/form/text-input/public.js';",
  "export { Icon, SUPPORTED_ICON_PROVIDERS } from './features/icon/public.js';",
  "export { Image } from './features/image/public.js';",
  "export { KeyboardAvoidingView } from './features/keyboard-avoiding-view/public.js';",
  "export { Divider, Grid, ScrollView, View } from './features/layout/public.js';",
  "export { List, ListItem } from './features/list/public.js';",
  "export { Modal } from './features/modal/public.js';",
  "export { PopoverMenu } from './features/popover-menu/public.js';",
  "export { Popover } from './features/popover/public.js';",
  "export { Pressable } from './features/pressable/public.js';",
  "export { Surface } from './features/surface/public.js';",
  "export { Tab, TabList, TabPanel, Tabs } from './features/tabs/public.js';",
  "export { Tooltip } from './features/tooltip/public.js';",
  "export { Toast, ToastProvider, useToast } from './features/toast/public.js';",
  "export { Heading, Text } from './features/typography/public.js';",
] as const;

const expectedCrossCuttingRootExports = [
  "export type { InteractionPolicy, InteractionPolicyProps } from './types/interactionPolicy.js';",
  "export * from './core/responsive/index.js';",
  "export { FontProvider } from './features/font/public.js';",
  "export { ThemeProvider, ThemeScope, useTheme } from './features/theme/runtime.js';",
] as const;

describe('feature-owned root barrel contract', () => {
  it('routes UI through feature-owned public facades', () => {
    expectedFeatureRootExports.forEach((line) => expect(indexSource).toContain(line));
  });

  it('does not retain removed component or layout facades and aliases', () => {
    expect(indexSource).not.toContain("'./components/");
    expect(indexSource).not.toContain("'./layout");
    expect(indexSource).not.toContain("'./primitives/");
    expect(indexSource).not.toMatch(/\bBoxProps\b/u);
    expect(indexSource).not.toMatch(/\bContainerProps\b/u);
    expect(indexSource).not.toMatch(/\bStackProps\b/u);
    expect(indexSource).not.toMatch(/\bScrollAreaProps\b/u);
    expect(indexSource).not.toMatch(/\bTextareaProps\b/u);
    expect(indexSource).not.toMatch(/\bHelperTextProps\b/u);
    expect(indexSource).not.toMatch(/\bLabelProps\b/u);
    expect(indexSource).not.toMatch(/export\s*\{[^}]*\bBox\b/u);
    expect(indexSource).not.toMatch(/export\s*\{[^}]*\bContainer\b/u);
    expect(indexSource).not.toMatch(/export\s*\{[^}]*\bStack\b/u);
    expect(indexSource).not.toMatch(/export\s*\{[^}]*\bScrollArea\b/u);
    expect(indexSource).not.toMatch(/export\s*\{[^}]*\bTextarea\b/u);
    expect(indexSource).not.toMatch(/export\s*\{[^}]*\bHelperText\b/u);
    expect(indexSource).not.toMatch(/export\s*\{[^}]*\bLabel\b/u);
  });
});

describe('authoring controls facade contract', () => {
  it('keeps field and pressable on their canonical feature facades for native and browser consumers', () => {
    for (const source of [authoringControlsSource, browserAuthoringControlsSource]) {
      expect(source).toContain("export type { FieldProps } from '../form/field/public.js';");
      expect(source).toContain("export { Field } from '../form/field/public.js';");
      expect(source).toContain("export type { PressableProps } from '../pressable/public.js';");
      expect(source).toContain("export { Pressable } from '../pressable/public.js';");
    }
  });
});

describe('remaining root barrel contract', () => {
  it('keeps deliberate cross-cutting public APIs', () => {
    expectedCrossCuttingRootExports.forEach((line) => expect(indexSource).toContain(line));
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
        'react-native': './dist/index.js',
        browser: './dist/index.js',
        default: './dist/index.js',
        import: './dist/index.js',
        types: './dist/index.d.ts',
      },
      './bottom-sheet': {
        'react-native': './dist/features/bottom-sheet/public.js',
        browser: './dist/features/bottom-sheet/public.js',
        default: './dist/features/bottom-sheet/public.js',
        import: './dist/features/bottom-sheet/public.js',
        types: './dist/features/bottom-sheet/public.d.ts',
      },
      './browser': {
        default: './dist/features/popover/browser.js',
        import: './dist/features/popover/browser.js',
        types: './dist/features/popover/browser.d.ts',
      },
      ...authoringControlsExport,
      './color': {
        bun: './dist/constants/surfaceColor.js',
        'react-native': './dist/constants/surfaceColor.js',
        browser: './dist/constants/surfaceColor.js',
        default: './dist/constants/surfaceColor.js',
        import: './dist/constants/surfaceColor.js',
        types: './dist/constants/surfaceColor.d.ts',
      },
      ...capabilitiesExport,
      './theme': {
        bun: './dist/features/theme/public.js',
        'react-native': './dist/features/theme/public.js',
        browser: './dist/features/theme/public.js',
        default: './dist/features/theme/public.js',
        import: './dist/features/theme/public.js',
        types: './dist/features/theme/public.d.ts',
      },
      './package.json': './package.json',
    });
  });
});

describe('native peer compatibility contract', () => {
  it('preserves the independently tested Expo 57 and Expo 58 native peer tuples', () => {
    expect(packageJson.peerDependencies.react).toBe('19.2.3 || 19.3.0');
    expect(packageJson.peerDependencies['react-dom']).toBe('19.2.3 || 19.3.0');
    expect(packageJson.peerDependencies['react-native']).toBe('0.86.x || 0.87.x || 0.88.x');
    expect(packageJson.peerDependencies['react-native-web']).toBe('~0.21.0');
    expect(packageJson.peerDependencies['react-native-safe-area-context']).toBe(
      '~5.7.0 || ~5.10.0 || ~5.11.0',
    );
    expect(packageJson.peerDependencies['react-native-svg']).toBe('15.15.4 || 15.15.5 || 15.16.0');
    expect(packageJson.peerDependencies['react-native-gesture-handler']).toBe('~2.32.0 || ~3.3.0');
    expect(packageJson.peerDependencies['react-native-reanimated']).toBe('4.5.1 || 4.7.0 || 4.7');
    expect(packageJson.peerDependencies['react-native-worklets']).toBe('0.10.1 || 0.13.0');
    expect(packageJson.peerDependencies['@react-native-vector-icons/fontawesome']).toBe(
      '^13.1.4 || 14.0.0',
    );
    expect(packageJson.peerDependencies).toMatchObject({
      '@react-native-vector-icons/fontawesome5': '^13.1.3 || 14.0.0',
      '@react-native-vector-icons/fontawesome6': '^13.1.3 || 14.0.0',
      '@react-native-vector-icons/ionicons': '^13.1.3 || 14.0.0',
      '@react-native-vector-icons/material-design-icons': '^13.1.3 || 14.0.0',
    });
    expect(packageJson.devDependencies.react).toBe('19.3.0');
    expect(packageJson.devDependencies['react-native']).toBe('0.88.1');
    expect(packageJson.devDependencies['react-native-safe-area-context']).toBe('~5.11.1');
    expect(packageJson.devDependencies['react-native-svg']).toBe('15.16.0');
  });
});

describe('bottom-sheet package contract', () => {
  it('keeps the implementation and native runtime compatibility boundaries explicit', () => {
    expect(packageJson.dependencies['@gorhom/bottom-sheet']).toMatch(/^\^5\./);
    expect(packageJson.peerDependencies['react-native-gesture-handler']).toContain('~2.32.0');
    expect(packageJson.peerDependencies['react-native-gesture-handler']).toContain('~3.3.0');
    expect(packageJson.peerDependencies['react-native-reanimated']).toContain('4.5.1');
    expect(packageJson.peerDependencies['react-native-reanimated']).toContain('4.7.0');
    expect(packageJson.peerDependencies['react-native-worklets']).toContain('0.10.1');
    expect(packageJson.peerDependencies['react-native-worklets']).toContain('0.13.0');
  });
});
