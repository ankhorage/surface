import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';

const root = process.cwd();
const srcRoot = join(root, 'src');
const featureRoot = join(srcRoot, 'features', 'pressable');
const featurePublic = join(featureRoot, 'public');
const pressableType = join(srcRoot, 'types', 'pressable');

/*** Collects TypeScript production and test modules below one directory. */
async function collectTypeScriptFiles(directory: string): Promise<readonly string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return collectTypeScriptFiles(path);
      return entry.name.endsWith('.ts') || entry.name.endsWith('.tsx') ? [path] : [];
    }),
  );
  return nested.flat();
}

/*** Resolves a repository-local extensionless import path. */
function resolveImportPath(fromFile: string, target: string): string {
  const path = relative(dirname(fromFile), target).replaceAll('\\', '/');
  return path.startsWith('.') ? path : `./${path}`;
}

/*** Chooses the canonical Pressable import boundary for one source module. */
function resolvePressableImportTarget(file: string): string {
  return dirname(file) === join(srcRoot, 'types') ? pressableType : featurePublic;
}

/*** Migrates one TypeScript module from ButtonBase to the Pressable feature. */
async function migrateSourceFile(file: string): Promise<void> {
  const current = await readFile(file, 'utf8');
  const target = resolvePressableImportTarget(file);
  const targetImport = resolveImportPath(file, target);
  const migrated = current
    .replaceAll('ButtonBaseProps', 'PressableProps')
    .replaceAll('ButtonBase', 'Pressable')
    .replace(
      /from\s+(['"])([^'"]*primitives\/button-base(?:\/types)?)\1/gu,
      (_match, quote: string) => `from ${quote}${targetImport}${quote}`,
    )
    .replaceAll("'./primitives/button-base'", "'./features/pressable/public'")
    .replaceAll('"./primitives/button-base"', '"./features/pressable/public"');

  if (migrated !== current) await writeFile(file, migrated);
}

/*** Updates architecture assertions for the canonical Pressable feature. */
async function updateArchitectureTests(): Promise<void> {
  const file = join(srcRoot, 'index.test.ts');
  const current = await readFile(file, 'utf8');
  const marker = `  "export { Popover } from './features/popover/public';",`;
  const pressableExport = `  "export { Pressable } from './features/pressable/public';",`;
  const withExport = current.includes(pressableExport)
    ? current
    : current.replace(marker, `${marker}\n${pressableExport}`);
  const facadeMarker = `    expect(indexSource).not.toContain("'./layout");`;
  const primitiveAssertion = `    expect(indexSource).not.toContain("'./primitives/");`;
  const migrated = withExport.includes(primitiveAssertion)
    ? withExport
    : withExport.replace(facadeMarker, `${facadeMarker}\n${primitiveAssertion}`);
  await writeFile(file, migrated);
}

/*** Creates the canonical Surface Pressable feature and its public type contract. */
async function createPressableFeature(): Promise<void> {
  await mkdir(join(featureRoot, 'adapters', 'inbound'), { recursive: true });

  await writeFile(
    join(featureRoot, 'adapters', 'inbound', 'Pressable.tsx'),
    `import React from 'react';
import {
  Platform,
  Pressable as ReactNativePressable,
  type PressableStateCallbackType,
} from 'react-native';

import { useResponsiveRuntime } from '../../../../core/responsive';
import {
  type InteractionState,
  resolveFocusRingStyles,
  resolveInteractiveState,
} from '../../../../internal/resolvers';
import { useTheme } from '../../../../theme/ThemeContext';
import type { PressableProps } from '../../../../types/pressable';
import { resolveViewStyles } from '../../../../utils/resolveViewStyles';

/*** Renders the token-aware Surface adapter for React Native Pressable. */
export function Pressable({
  children,
  disabled = false,
  interactionPolicy = 'enabled',
  onPress,
  onLongPress,
  accessibilityLabel,
  accessibilityRole = 'button',
  accessibilityState,
  style,
  testID,
  ...props
}: PressableProps) {
  const { theme } = useTheme();
  const { breakpoint } = useResponsiveRuntime();
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const isWeb = Platform.OS === 'web';
  const resolvedViewStyles = resolveViewStyles(theme, breakpoint, props);
  const passive = interactionPolicy === 'passive';

  return (
    <ReactNativePressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityState={{ ...accessibilityState, disabled }}
      disabled={disabled}
      onBlur={() => setFocused(false)}
      onFocus={() => {
        if (isWeb) setFocused(true);
      }}
      onHoverIn={isWeb ? () => setHovered(true) : undefined}
      onHoverOut={isWeb ? () => setHovered(false) : undefined}
      onLongPress={passive ? undefined : onLongPress}
      onPress={passive ? undefined : onPress}
      style={(pressableState) => {
        const state = resolveInteractionState(pressableState, hovered, focused, disabled);
        return [
          resolvedViewStyles,
          resolveFocusRingStyles(theme.semantics.border.focus, state.focused, isWeb),
          style,
        ];
      }}
      testID={testID}
    >
      {(pressableState) => {
        const state = resolveInteractionState(pressableState, hovered, focused, disabled);
        return typeof children === 'function' ? children(state) : children;
      }}
    </ReactNativePressable>
  );
}

/*** Resolves one native Pressable state into the canonical Surface interaction state. */
function resolveInteractionState(
  pressableState: PressableStateCallbackType,
  hovered: boolean,
  focused: boolean,
  disabled: boolean,
): InteractionState {
  return resolveInteractiveState({
    pressed: pressableState.pressed,
    hovered,
    focused,
    disabled,
  });
}
`,
  );

  await writeFile(
    join(featureRoot, 'public.ts'),
    `export type { PressableProps } from '../../types/pressable';
export { Pressable } from './adapters/inbound/Pressable';
`,
  );

  await writeFile(
    join(srcRoot, 'types', 'pressable.ts'),
    `import type React from 'react';
import type { AccessibilityRole, AccessibilityState, GestureResponderEvent } from 'react-native';

import type { InteractionPolicyProps } from '../interactionPolicy';
import type { InteractionState } from '../internal/resolvers/resolveInteractiveState';
import type { ViewProps } from './layout';

export interface PressableProps
  extends Omit<ViewProps, 'children' | 'pointerEvents'>, InteractionPolicyProps {
  children?: React.ReactNode | ((state: InteractionState) => React.ReactNode);
  disabled?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  accessibilityState?: AccessibilityState;
  testID?: string;
}
`,
  );
}

/*** Applies the complete current-only Pressable feature migration. */
async function migrate(): Promise<void> {
  await createPressableFeature();
  const files = await collectTypeScriptFiles(srcRoot);
  await Promise.all(files.map(migrateSourceFile));
  await updateArchitectureTests();
  await rm(join(srcRoot, 'primitives'), { recursive: true, force: true });

  await writeFile(
    join(root, '.changeset', 'pressable-feature.md'),
    `---
'@ankhorage/surface': major
---

Replace the public \`ButtonBase\` foundation primitive with the native-aligned \`Pressable\` feature. Import \`Pressable\` and \`PressableProps\` from \`@ankhorage/surface\`; the legacy \`src/primitives\` path and \`ButtonBase\` API are removed.
`,
  );
}

await migrate();
