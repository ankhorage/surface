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

const expectedRootExports = [
  "export { Badge } from './components/badge';",
  "export { Button } from './components/button';",
  "export { Card } from './components/card';",
  "export { Checkbox } from './components/checkbox';",
  "export { Field } from './components/field';",
  "export { HelperText } from './components/helper-text';",
  "export { IconButton } from './components/icon-button';",
  "export { Icon, SUPPORTED_ICON_PROVIDERS } from './primitives/icon';",
  "export type { InteractionPolicy, InteractionPolicyProps } from './interactionPolicy';",
  "export { Label } from './components/label';",
  "export { ListItem } from './components/list-item';",
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
  "export { Image } from './primitives/image';",
  "export {\n  SURFACE_COLORS,\n  SURFACE_EMPHASES,\n  SURFACE_PALETTE_COLORS,\n  SURFACE_STATUS_COLORS,\n} from './surfaceColor';",
  "export * from './theme';",
  "export { useToggle } from './utils/useToggle';",
] as const;

describe('public package contract', () => {
  it('keeps the intended package surface on the root barrel', () => {
    expectedRootExports.forEach((line) => {
      expect(indexSource).toContain(line);
    });
  });

  it('removes obsolete navigation and action-sheet chrome from the root barrel', () => {
    expect(indexSource).not.toContain('ActionSheet');
    expect(indexSource).not.toContain('DrawerNavigation');
    expect(indexSource).not.toContain("'./components/drawer'");
    expect(indexSource).not.toContain("'./components/navigation'");
  });

  it('keeps internal infrastructure off the public barrel', () => {
    expect(indexSource).not.toContain("'./internal/");
    expect(indexSource).not.toContain('resolveSelectionControlNextChecked');
    expect(indexSource).not.toContain('resolveFieldPresentation');
    expect(indexSource).not.toContain('FocusScope');
    expect(indexSource).not.toContain('useFocusManager');
  });

  it('keeps package metadata aligned with explicit public surfaces', () => {
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

  it('owns the Gorhom integration while keeping animation runtimes as host peers', () => {
    expect(packageJson.dependencies['@gorhom/bottom-sheet']).toMatch(/^\^5\./);
    expect(packageJson.peerDependencies['react-native-gesture-handler']).toBe('~2.32.0');
    expect(packageJson.peerDependencies['react-native-reanimated']).toBe('4.5.1');
    expect(packageJson.peerDependencies['react-native-worklets']).toBe('0.10.1');
  });

  it('supports RN 0.86 patches while validating the canonical RN 0.86.3 baseline', () => {
    expect(packageJson.peerDependencies['react-native']).toBe('0.86.x');
    expect(packageJson.devDependencies['react-native']).toBe('0.86.3');
    expect(packageJson.peerDependencies['react-native-svg']).toBe('15.15.4');
    expect(packageJson.devDependencies['react-native-svg']).toBe('15.15.4');
  });

  it('exports the resolved semantic and diagnostic contracts from the public root', () => {
    const theme = createTheme();
    const selection: SelectionSemantics = theme.semantics.selection;
    const diagnostics: SurfaceColorDiagnostics = theme.colorDiagnostics;

    expect(selection.background).toBeDefined();
    expect(diagnostics.generated.swatches).toBe(theme.swatches);
  });
});
