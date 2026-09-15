import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, relative, resolve, sep } from 'node:path';

const root = process.cwd();
const srcRoot = join(root, 'src');

const toPosix = (value: string) => value.split(sep).join('/');
const rel = (value: string) => toPosix(relative(root, value));
const abs = (value: string) => join(root, value);
const ensureParent = (path: string) => mkdirSync(dirname(path), { recursive: true });
const read = (path: string) => readFileSync(abs(path), 'utf8');
const write = (path: string, content: string) => {
  ensureParent(abs(path));
  writeFileSync(abs(path), content);
};
const remove = (path: string) => rmSync(abs(path), { force: true, recursive: true });

const sourceFiles = (directory: string): string[] =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return ['.ts', '.tsx'].includes(extname(entry.name)) ? [rel(path)] : [];
  });

const moves = new Map<string, string>([
  ['src/interactionPolicy.ts', 'src/types/interactionPolicy.ts'],
  ['src/interactionPolicy.test.ts', 'src/types/interactionPolicy.test.ts'],
  ['src/theme/types.ts', 'src/types/theme.ts'],
  ['src/theme/createTheme.ts', 'src/features/theme/application/use-cases/createTheme.ts'],
  ['src/theme/createThemeOverrides.test.ts', 'src/features/theme/application/use-cases/createThemeOverrides.test.ts'],
  ['src/theme/createThemeValidation.test.ts', 'src/features/theme/application/use-cases/createThemeValidation.test.ts'],
  ['src/theme/createSurfaceColorDiagnosticCollector.ts', 'src/features/theme/domain/createSurfaceColorDiagnosticCollector.ts'],
  ['src/theme/createSurfaceSemanticPolicy.ts', 'src/features/theme/domain/createSurfaceSemanticPolicy.ts'],
  ['src/theme/resolveRoleSemantics.ts', 'src/features/theme/domain/resolveRoleSemantics.ts'],
  ['src/theme/resolveSurfaceSemanticModel.ts', 'src/features/theme/domain/resolveSurfaceSemanticModel.ts'],
  ['src/theme/inverseSemantics.test.ts', 'src/features/theme/domain/inverseSemantics.test.ts'],
  ['src/theme/colorEngine.test.ts', 'src/features/theme/domain/generatePalette.test.ts'],
  ['src/theme/resolveGlobalTokens.ts', 'src/features/theme/utils/resolveGlobalTokens.ts'],
  ['src/theme/resolveHeadingTokenOverrides.ts', 'src/features/theme/utils/resolveHeadingTokenOverrides.ts'],
  ['src/theme/resolveNumericTokenOverrides.ts', 'src/features/theme/utils/resolveNumericTokenOverrides.ts'],
  ['src/theme/resolveToken.ts', 'src/features/theme/utils/resolveToken.ts'],
  ['src/theme/resolveWeightTokenOverrides.ts', 'src/features/theme/utils/resolveWeightTokenOverrides.ts'],
  ['src/theme/public.test.ts', 'src/features/theme/public.test.ts'],
]);

const specialTargets = new Map<string, string>([
  ['src/theme/index.ts', 'src/features/theme/runtime.ts'],
  ['src/theme/public.ts', 'src/features/theme/public.ts'],
  ['src/theme/defaultTokens.ts', 'src/features/theme/constants.ts'],
  ['src/theme/surfaceColorPolicy.ts', 'src/features/theme/constants.ts'],
  ['src/theme/colorEngine.ts', 'src/features/theme/domain/generatePalette.ts'],
  ['src/theme/ThemeContext.tsx', 'src/features/theme/runtime.ts'],
  ['src/context/FontContext.tsx', 'src/features/font/public.ts'],
]);

const originalFiles = sourceFiles(srcRoot);
const originalContents = new Map(originalFiles.map((path) => [path, read(path)]));

function resolveImportTarget(source: string, specifier: string): string | undefined {
  const base = resolve(root, dirname(source), specifier);
  const candidates = [base, `${base}.ts`, `${base}.tsx`, join(base, 'index.ts'), join(base, 'index.tsx')];
  return candidates.find((candidate) => existsSync(candidate)) ? rel(candidates.find((candidate) => existsSync(candidate))!) : undefined;
}

function withoutExtension(path: string): string {
  return path.replace(/\.(?:tsx?|jsx?)$/u, '').replace(/\/index$/u, '');
}

function relativeSpecifier(source: string, target: string): string {
  let specifier = toPosix(relative(dirname(source), withoutExtension(target)));
  if (!specifier.startsWith('.')) specifier = `./${specifier}`;
  return specifier;
}

function rewriteRelativeSpecifiers(oldSource: string, newSource: string, content: string): string {
  return content.replace(/(['"])(\.{1,2}\/[^'"\n]+)\1/gu, (match, quote: string, specifier: string) => {
    const oldTarget = resolveImportTarget(oldSource, specifier);
    if (!oldTarget) return match;
    if (oldTarget === 'src/surfaceColor.ts') return match;
    if (oldTarget === 'src/context/TranslationContext.tsx') return match;
    if (oldTarget === 'src/utils/deepEqual.ts' || oldTarget === 'src/utils/deepMerge.ts') return match;
    const newTarget = moves.get(oldTarget) ?? specialTargets.get(oldTarget) ?? oldTarget;
    if (newTarget === oldTarget && newSource === oldSource) return match;
    return `${quote}${relativeSpecifier(newSource, newTarget)}${quote}`;
  });
}

for (const [oldPath, newPath] of moves) {
  const content = originalContents.get(oldPath);
  if (content === undefined) throw new Error(`Missing migration source: ${oldPath}`);
  write(newPath, rewriteRelativeSpecifiers(oldPath, newPath, content));
  remove(oldPath);
}

for (const oldPath of originalFiles) {
  if (moves.has(oldPath) || oldPath.startsWith('src/theme/') || oldPath.startsWith('src/context/')) continue;
  const content = originalContents.get(oldPath)!;
  const rewritten = rewriteRelativeSpecifiers(oldPath, oldPath, content);
  if (rewritten !== content) write(oldPath, rewritten);
}

const oldThemeTypes = read('src/types/theme.ts');
write(
  'src/types/theme.ts',
  `${oldThemeTypes.trim()}\n\nexport type ThemeMode = 'light' | 'dark';\n`,
);

write(
  'src/types/theme-runtime.ts',
  `import type { ThemeConfig } from '@ankhorage/contracts';\nimport type { ReactNode } from 'react';\n\nimport type { SurfaceTheme, ThemeMode } from './theme';\n\nexport interface ThemeRuntime {\n  theme: SurfaceTheme;\n  mode: ThemeMode;\n  setThemeConfig: (config: Partial<ThemeConfig>) => void;\n  setMode: (mode: ThemeMode) => void;\n}\n\nexport interface ThemeProviderProps {\n  children: ReactNode;\n  initialConfig?: Partial<ThemeConfig>;\n  initialMode?: ThemeMode;\n}\n\nexport interface ThemeScopeProps {\n  children: ReactNode;\n  themeConfig?: Partial<ThemeConfig>;\n  mode?: ThemeMode;\n}\n`,
);

write(
  'src/types/font.ts',
  `import type { ReactNode } from 'react';\n\nexport interface FontRuntime {\n  fontsLoaded: boolean;\n  activeFontId: string | null;\n  setActiveFontId: (id: string) => void;\n}\n\nexport interface FontProviderProps {\n  fontsLoaded: boolean;\n  activeFontId?: string | null;\n  children: ReactNode;\n  onActiveFontChange?: (id: string) => void;\n}\n`,
);

write(
  'src/contracts/surfaceColor.ts',
  `export const SURFACE_PALETTE_COLORS = [\n  'primary',\n  'secondary',\n  'tertiary',\n  'quaternary',\n  'neutral',\n] as const;\n\nexport const SURFACE_STATUS_COLORS = ['success', 'warning', 'error', 'info'] as const;\n\nexport const SURFACE_COLORS = [\n  ...SURFACE_PALETTE_COLORS,\n  ...SURFACE_STATUS_COLORS,\n  'danger',\n] as const;\n\nexport const SURFACE_EMPHASES = ['default', 'muted', 'subtle', 'inverse'] as const;\n`,
);

write(
  'src/types/surfaceColor.ts',
  `import type {\n  SURFACE_COLORS,\n  SURFACE_EMPHASES,\n  SURFACE_PALETTE_COLORS,\n  SURFACE_STATUS_COLORS,\n} from '../contracts/surfaceColor';\n\nexport type SurfacePaletteColor = (typeof SURFACE_PALETTE_COLORS)[number];\nexport type SurfaceStatusColor = (typeof SURFACE_STATUS_COLORS)[number];\nexport type SurfaceColor = (typeof SURFACE_COLORS)[number];\nexport type SurfaceEmphasis = (typeof SURFACE_EMPHASES)[number];\n`,
);

const oldDefaultTokens = originalContents.get('src/theme/defaultTokens.ts')!;
const defaultTokenBody = rewriteRelativeSpecifiers(
  'src/theme/defaultTokens.ts',
  'src/features/theme/constants.ts',
  oldDefaultTokens,
).replace("import type { FontWeight, ThemeTokens } from '../../../../types/theme';", "import type { FontWeight, ThemeTokens } from '../../types/theme';");
const defaultTokenContent = defaultTokenBody.replace(/\nexport const DEFAULT_TOKENS/u, '\nconst DEFAULT_TOKENS');
write(
  'src/features/theme/constants.ts',
  `${defaultTokenContent.trim()}\n\nexport const SURFACE_COLOR_POLICY = {\n  disabledContrast: 3,\n  surfaceSeparation: 1.05,\n  textContrast: 4.5,\n  uiContrast: 3,\n} as const;\n\nexport { DEFAULT_TOKENS };\n`,
);

const oldColorEngine = originalContents.get('src/theme/colorEngine.ts')!;
const semanticResolverMatch = oldColorEngine.match(/export type SurfaceSemanticColors[\s\S]*?\n}\n\nexport function generatePalette/u);
if (!semanticResolverMatch) throw new Error('Unable to split colorEngine.ts');
const semanticResolverBlock = semanticResolverMatch[0].replace(/\n\nexport function generatePalette$/u, '');
write(
  'src/features/theme/domain/resolveSemanticColors.ts',
  `import type { GeneratedThemeModeColors, HexColor, SemanticColorReferenceMap, SemanticColorToken } from '@ankhorage/color-theory';\n\n${semanticResolverBlock.replace(/export type SurfaceSemanticColors[\s\S]*?\n\n/u, "export type SurfaceSemanticColors = Record<SemanticColorToken, HexColor>;\n\n")}\n`,
);

const paletteFunction = oldColorEngine.slice(oldColorEngine.indexOf('export function generatePalette'));
write(
  'src/features/theme/domain/generatePalette.ts',
  `import type { GeneratedThemeSwatches, ThemeColorMode } from '@ankhorage/color-theory';\nimport {\n  DARK_SEMANTIC_COLOR_REFERENCES,\n  generateThemeModeColors,\n  LIGHT_SEMANTIC_COLOR_REFERENCES,\n  parseHexColorOrThrow,\n} from '@ankhorage/color-theory';\nimport type { ThemeConfig } from '@ankhorage/contracts';\n\nimport type { SurfaceColorDiagnostics, ThemeSemantics, ThemeTokens } from '../../../types/theme';\nimport { resolveSemanticColors } from './resolveSemanticColors';\nimport { resolveSurfaceSemanticModel } from './resolveSurfaceSemanticModel';\n\n${paletteFunction}\n`,
);

remove('src/theme');
remove('src/context');
remove('src/surfaceColor.ts');
remove('src/surfaceColor.test.ts');
remove('src/utils/deepEqual.ts');
remove('src/utils/deepMerge.ts');
remove('src/utils/deepMerge.test.ts');

write(
  'src/features/font/adapters/inbound/FontRuntimeContext.tsx',
  `import { createContext } from 'react';\n\nimport type { FontRuntime } from '../../../../types/font';\n\nconst fallbackRuntime: FontRuntime = {\n  fontsLoaded: true,\n  activeFontId: null,\n  setActiveFontId: () => undefined,\n};\n\n/*** Holds Surface font runtime state for theme resolution. */\nexport const FontRuntimeContext = createContext<FontRuntime>(fallbackRuntime);\n`,
);

write(
  'src/features/font/adapters/inbound/useFontRuntime.ts',
  `import { use } from 'react';\n\nimport type { FontRuntime } from '../../../../types/font';\nimport { FontRuntimeContext } from './FontRuntimeContext';\n\n/*** Read the internal font runtime used by Surface theme composition. */\nexport function useFontRuntime(): FontRuntime {\n  return use(FontRuntimeContext);\n}\n`,
);

write(
  'src/features/font/adapters/inbound/FontProvider.tsx',
  `import { useMemo, useState } from 'react';\n\nimport type { FontProviderProps, FontRuntime } from '../../../../types/font';\nimport { FontRuntimeContext } from './FontRuntimeContext';\n\n/*** Provide loaded-font state and the active font id to Surface theme composition. */\nexport function FontProvider({\n  fontsLoaded,\n  activeFontId: initialActiveFontId = null,\n  children,\n  onActiveFontChange,\n}: FontProviderProps) {\n  const [activeFontId, setActiveFontIdState] = useState(initialActiveFontId);\n  const value = useMemo<FontRuntime>(\n    () => ({\n      fontsLoaded,\n      activeFontId,\n      setActiveFontId: (id: string) => {\n        setActiveFontIdState(id);\n        onActiveFontChange?.(id);\n      },\n    }),\n    [activeFontId, fontsLoaded, onActiveFontChange],\n  );\n\n  return <FontRuntimeContext value={value}>{children}</FontRuntimeContext>;\n}\n`,
);

write(
  'src/features/font/public.ts',
  `export type { FontProviderProps, FontRuntime } from '../../types/font';\nexport { FontProvider } from './adapters/inbound/FontProvider';\n`,
);

write(
  'src/features/theme/adapters/inbound/ThemeRuntimeContext.tsx',
  `import { createContext } from 'react';\n\nimport type { ThemeRuntime } from '../../../../types/theme-runtime';\nimport { createTheme } from '../../application/use-cases/createTheme';\n\nconst defaultTheme = createTheme();\n\n/*** Holds the active Surface theme runtime for component consumption. */\nexport const ThemeRuntimeContext = createContext<ThemeRuntime>({\n  theme: defaultTheme,\n  mode: 'light',\n  setThemeConfig: () => undefined,\n  setMode: () => undefined,\n});\n`,
);

write(
  'src/features/theme/adapters/inbound/useTheme.ts',
  `import { use } from 'react';\n\nimport type { ThemeRuntime } from '../../../../types/theme-runtime';\nimport { ThemeRuntimeContext } from './ThemeRuntimeContext';\n\n/*** Read the active Surface theme runtime. */\nexport function useTheme(): ThemeRuntime {\n  return use(ThemeRuntimeContext);\n}\n`,
);

write(
  'src/features/theme/adapters/inbound/ThemeProvider.tsx',
  `import { deepMerge, isDeepEqual } from '@ankhorage/utility/object';\nimport { useEffect, useMemo, useState } from 'react';\n\nimport { ResponsiveProvider } from '../../../../core/responsive/ResponsiveProvider';\nimport { useFontRuntime } from '../../../font/adapters/inbound/useFontRuntime';\nimport { OverlayProvider } from '../../../../internal/overlay/OverlayProvider';\nimport type { ThemeProviderProps, ThemeRuntime } from '../../../../types/theme-runtime';\nimport type { ThemeConfig } from '../../../../types/theme';\nimport { createTheme } from '../../application/use-cases/createTheme';\nimport { ThemeRuntimeContext } from './ThemeRuntimeContext';\n\n/*** Install the app-level Surface theme together with global responsive and overlay runtime. */\nexport function ThemeProvider({ children, initialConfig, initialMode = 'light' }: ThemeProviderProps) {\n  const defaultTheme = useMemo(() => createTheme(), []);\n  const [config, setConfig] = useState<ThemeConfig>(() =>\n    initialConfig ? deepMerge(defaultTheme.config, initialConfig) : defaultTheme.config,\n  );\n  const [mode, setMode] = useState(initialMode);\n  const { activeFontId } = useFontRuntime();\n\n  useEffect(() => {\n    if (!initialConfig) return;\n    setConfig((previous) => {\n      const merged = deepMerge(previous, initialConfig);\n      return isDeepEqual(previous, merged) ? previous : merged;\n    });\n  }, [initialConfig]);\n\n  const theme = useMemo(() => createTheme(config, mode, activeFontId), [activeFontId, config, mode]);\n  const value = useMemo<ThemeRuntime>(\n    () => ({\n      theme,\n      mode,\n      setThemeConfig: (nextConfig) => setConfig((previous) => deepMerge(previous, nextConfig)),\n      setMode,\n    }),\n    [mode, theme],\n  );\n\n  return (\n    <ResponsiveProvider>\n      <ThemeRuntimeContext value={value}>\n        <OverlayProvider>{children}</OverlayProvider>\n      </ThemeRuntimeContext>\n    </ResponsiveProvider>\n  );\n}\n`,
);

write(
  'src/features/theme/adapters/inbound/ThemeScope.tsx',
  `import { deepMerge } from '@ankhorage/utility/object';\nimport { useMemo } from 'react';\n\nimport { useFontRuntime } from '../../../font/adapters/inbound/useFontRuntime';\nimport type { ThemeRuntime, ThemeScopeProps } from '../../../../types/theme-runtime';\nimport { createTheme } from '../../application/use-cases/createTheme';\nimport { ThemeRuntimeContext } from './ThemeRuntimeContext';\nimport { useTheme } from './useTheme';\n\n/*** Apply a nested Surface theme or mode override without remounting app-level providers. */\nexport function ThemeScope({ children, themeConfig, mode }: ThemeScopeProps) {\n  const parent = useTheme();\n  const { activeFontId } = useFontRuntime();\n  const scopedMode = mode ?? parent.mode;\n  const scopedConfig = useMemo(\n    () => (themeConfig ? deepMerge(parent.theme.config, themeConfig) : parent.theme.config),\n    [parent.theme.config, themeConfig],\n  );\n  const theme = useMemo(\n    () => createTheme(scopedConfig, scopedMode, activeFontId),\n    [activeFontId, scopedConfig, scopedMode],\n  );\n  const value = useMemo<ThemeRuntime>(\n    () => ({ ...parent, theme, mode: scopedMode }),\n    [parent, scopedMode, theme],\n  );\n\n  return <ThemeRuntimeContext value={value}>{children}</ThemeRuntimeContext>;\n}\n`,
);

write(
  'src/features/theme/runtime.ts',
  `export type { ThemeProviderProps, ThemeRuntime, ThemeScopeProps } from '../../types/theme-runtime';\nexport { ThemeProvider } from './adapters/inbound/ThemeProvider';\nexport { ThemeScope } from './adapters/inbound/ThemeScope';\nexport { useTheme } from './adapters/inbound/useTheme';\n`,
);

write(
  'src/features/theme/public.ts',
  `export { createTheme } from './application/use-cases/createTheme';\nexport type {\n  ActionSemantics,\n  BorderSemantics,\n  ContentSemantics,\n  FontWeight,\n  NeutralSemantics,\n  RoleSemantics,\n  SelectionSemantics,\n  SurfaceColorDiagnostics,\n  SurfaceColorSelectionDiagnostic,\n  SurfaceContrastDiagnostic,\n  SurfaceSemantics,\n  SurfaceTheme,\n  ThemeMode,\n  ThemeSemantics,\n  ThemeTokens,\n} from '../../types/theme';\n`,
);

for (const path of sourceFiles(srcRoot)) {
  let content = read(path);
  const oldSurfacePathPattern = /((?:import|export)\s+type\s+\{[\s\S]*?\}\s+from\s+)(['"])(\.{1,2}\/[^'"\n]*surfaceColor)(\2);/gu;
  content = content.replace(oldSurfacePathPattern, (_match, prefix: string, quote: string, specifier: string) => {
    const target = relativeSpecifier(path, 'src/types/surfaceColor.ts');
    return `${prefix}${quote}${target}${quote};`;
  });
  const runtimeSurfacePathPattern = /((?:import|export)\s+\{[\s\S]*?SURFACE_[\s\S]*?\}\s+from\s+)(['"])(\.{1,2}\/[^'"\n]*surfaceColor)(\2);/gu;
  content = content.replace(runtimeSurfacePathPattern, (_match, prefix: string, quote: string) => {
    const target = relativeSpecifier(path, 'src/contracts/surfaceColor.ts');
    return `${prefix}${quote}${target}${quote};`;
  });
  write(path, content);
}

let createThemeSource = read('src/features/theme/application/use-cases/createTheme.ts');
createThemeSource = createThemeSource
  .replace("import { generatePalette } from '../../domain/generatePalette';", "import { generatePalette } from '../../domain/generatePalette';")
  .replace(/import \{ generatePalette \} from ['"][^'"]+['"];/u, "import { generatePalette } from '../../domain/generatePalette';")
  .replace(/import \{ resolveGlobalTokens \} from ['"][^'"]+['"];/u, "import { resolveGlobalTokens } from '../../utils/resolveGlobalTokens';")
  .replace(/import type \{ FontWeight, SurfaceTheme, ThemeConfig \} from ['"][^'"]+['"];/u, "import type { FontWeight, SurfaceTheme, ThemeConfig } from '../../../../types/theme';")
  .replace(/export \{ DEFAULT_TOKENS \} from ['"][^'"]+['"];\n/u, '')
  .replace(/export const DEFAULT_CONFIG/u, 'const DEFAULT_CONFIG');
write('src/features/theme/application/use-cases/createTheme.ts', createThemeSource);

for (const path of [
  'src/features/theme/domain/createSurfaceColorDiagnosticCollector.ts',
  'src/features/theme/domain/createSurfaceSemanticPolicy.ts',
  'src/features/theme/domain/resolveRoleSemantics.ts',
  'src/features/theme/domain/resolveSurfaceSemanticModel.ts',
]) {
  let content = read(path);
  content = content.replace(/from ['"]\.\/types['"]/gu, "from '../../../types/theme'");
  content = content.replace(/from ['"]\.\/surfaceColorPolicy['"]/gu, "from '../constants'");
  content = content.replace(/from ['"]\.\/createSurfaceColorDiagnosticCollector['"]/gu, "from './createSurfaceColorDiagnosticCollector'");
  content = content.replace(/from ['"]\.\/createSurfaceSemanticPolicy['"]/gu, "from './createSurfaceSemanticPolicy'");
  content = content.replace(/from ['"]\.\/resolveRoleSemantics['"]/gu, "from './resolveRoleSemantics'");
  write(path, content);
}

for (const path of [
  'src/features/theme/utils/resolveGlobalTokens.ts',
  'src/features/theme/utils/resolveHeadingTokenOverrides.ts',
  'src/features/theme/utils/resolveWeightTokenOverrides.ts',
]) {
  let content = read(path);
  content = content.replace(/from ['"]\.\/types['"]/gu, "from '../../../types/theme'");
  content = content.replace(/from ['"]\.\/defaultTokens['"]/gu, "from '../constants'");
  content = content.replace(/from ['"]\.\/resolveHeadingTokenOverrides['"]/gu, "from './resolveHeadingTokenOverrides'");
  content = content.replace(/from ['"]\.\/resolveNumericTokenOverrides['"]/gu, "from './resolveNumericTokenOverrides'");
  content = content.replace(/from ['"]\.\/resolveWeightTokenOverrides['"]/gu, "from './resolveWeightTokenOverrides'");
  write(path, content);
}

let paletteTest = read('src/features/theme/domain/generatePalette.test.ts');
paletteTest = paletteTest
  .replace(/from ['"]\.\/colorEngine['"]/gu, "from './generatePalette'")
  .replace(/import \{([^}]*)resolveSemanticColors([^}]*)\} from '\.\/generatePalette';/u, (_match, before: string, after: string) => {
    const names = `${before}${after}`.split(',').map((value) => value.trim()).filter(Boolean);
    const generateImport = names.length > 0 ? `import { ${names.join(', ')} } from './generatePalette';\n` : '';
    return `${generateImport}import { resolveSemanticColors } from './resolveSemanticColors';`;
  });
write('src/features/theme/domain/generatePalette.test.ts', paletteTest);

let index = read('src/index.ts');
index = index
  .replace(/^export type \{ FontRuntime \} from '.\/context\/FontContext';\nexport \{ FontProvider, useFontContext \} from '.\/context\/FontContext';\nexport type \{ I18nInstance, TranslationRuntime, Translator \} from '.\/context\/TranslationContext';\nexport \{ TranslationProvider, useTranslationContext \} from '.\/context\/TranslationContext';\n/mu, "export type { FontProviderProps, FontRuntime } from './features/font/public';\nexport { FontProvider } from './features/font/public';\n")
  .replace("export type { InteractionPolicy, InteractionPolicyProps } from './interactionPolicy';", "export type { InteractionPolicy, InteractionPolicyProps } from './types/interactionPolicy';")
  .replace(/export type \{\n  SurfaceColor,[\s\S]*?\} from '.\/surfaceColor';/u, "export type {\n  SurfaceColor,\n  SurfaceEmphasis,\n  SurfacePaletteColor,\n  SurfaceStatusColor,\n} from './types/surfaceColor';")
  .replace(/export \{\n  SURFACE_COLORS,[\s\S]*?\} from '.\/surfaceColor';/u, "export {\n  SURFACE_COLORS,\n  SURFACE_EMPHASES,\n  SURFACE_PALETTE_COLORS,\n  SURFACE_STATUS_COLORS,\n} from './contracts/surfaceColor';")
  .replace("export * from './theme';", "export type { ThemeProviderProps, ThemeRuntime, ThemeScopeProps } from './features/theme/runtime';\nexport { ThemeProvider, ThemeScope, useTheme } from './features/theme/runtime';")
  .replace("export { isDeepEqual } from './utils/deepEqual';\nexport { deepMerge } from './utils/deepMerge';\n", '');
write('src/index.ts', index);

let packageJson = JSON.parse(read('package.json')) as Record<string, any>;
packageJson.dependencies['@ankhorage/utility'] = '^1.2.0';
packageJson.dependencies = Object.fromEntries(Object.entries(packageJson.dependencies).sort(([a], [b]) => a.localeCompare(b)));
packageJson.exports['./theme'] = {
  bun: './src/features/theme/public.ts',
  'react-native': './src/features/theme/public.ts',
  browser: './src/features/theme/public.ts',
  types: './dist/features/theme/public.d.ts',
  import: './dist/features/theme/public.js',
  default: './dist/features/theme/public.js',
};
write('package.json', `${JSON.stringify(packageJson, null, 2)}\n`);

let indexTest = read('src/index.test.ts');
indexTest = indexTest
  .replace("import { createTheme } from './theme/createTheme';", "import { createTheme } from './features/theme/public';")
  .replace("\"export type { InteractionPolicy, InteractionPolicyProps } from './interactionPolicy';\"", "\"export type { InteractionPolicy, InteractionPolicyProps } from './types/interactionPolicy';\"")
  .replace(/bun: '\.\/src\/theme\/public\.ts',[\s\S]*?types: '\.\/dist\/theme\/public\.d\.ts',/u, "bun: './src/features/theme/public.ts',\n        'react-native': './src/features/theme/public.ts',\n        browser: './src/features/theme/public.ts',\n        default: './dist/features/theme/public.js',\n        import: './dist/features/theme/public.js',\n        types: './dist/features/theme/public.d.ts',")
  .replace("  \"export * from './core/responsive';\",", "  \"export * from './core/responsive';\",\n  \"export { FontProvider } from './features/font/public';\",\n  \"export { ThemeProvider, ThemeScope, useTheme } from './features/theme/runtime';\",");
write('src/index.test.ts', indexTest);

let interactionTest = read('src/types/interactionPolicy.test.ts');
interactionTest = interactionTest
  .replace("new URL('./index.ts', import.meta.url)", "new URL('../index.ts', import.meta.url)")
  .replace("from './interactionPolicy';", "from './types/interactionPolicy';");
write('src/types/interactionPolicy.test.ts', interactionTest);

write(
  'src/contracts/surfaceColor.test.ts',
  `import { describe, expect, it } from 'bun:test';\n\nimport {\n  SURFACE_COLORS,\n  SURFACE_EMPHASES,\n  SURFACE_PALETTE_COLORS,\n  SURFACE_STATUS_COLORS,\n} from './surfaceColor';\n\ndescribe('surface color runtime contracts', () => {\n  it('keeps canonical color and emphasis catalogs unique and aligned', () => {\n    expect(new Set(SURFACE_COLORS).size).toBe(SURFACE_COLORS.length);\n    expect(new Set(SURFACE_EMPHASES).size).toBe(SURFACE_EMPHASES.length);\n    for (const color of [...SURFACE_PALETTE_COLORS, ...SURFACE_STATUS_COLORS]) {\n      expect(SURFACE_COLORS).toContain(color);\n    }\n  });\n});\n`,
);

write(
  'src/types/surfaceColor.test.ts',
  `import { readFileSync } from 'node:fs';\n\nimport { describe, expect, it } from 'bun:test';\n\nimport { SURFACE_COLORS, SURFACE_EMPHASES } from '../contracts/surfaceColor';\nimport type { SurfaceColor, SurfaceEmphasis } from './surfaceColor';\n\ndescribe('surface color type ownership', () => {\n  it('derives public types from runtime contracts and exports both deliberately', () => {\n    const color: SurfaceColor = 'danger';\n    const emphasis: SurfaceEmphasis = 'muted';\n    const indexSource = readFileSync(new URL('../index.ts', import.meta.url), 'utf8');\n    expect(SURFACE_COLORS).toContain(color);\n    expect(SURFACE_EMPHASES).toContain(emphasis);\n    expect(indexSource).toContain("from './contracts/surfaceColor';");\n    expect(indexSource).toContain("from './types/surfaceColor';");\n  });\n});\n`,
);

write(
  'src/features/theme/runtime.test.ts',
  `import { readFileSync } from 'node:fs';\n\nimport { describe, expect, it } from 'bun:test';\n\ndescribe('theme runtime ownership', () => {\n  it('keeps nested scopes on the Surface runtime boundary without exposing raw context', () => {\n    const root = readFileSync(new URL('../../index.ts', import.meta.url), 'utf8');\n    const runtime = readFileSync(new URL('./runtime.ts', import.meta.url), 'utf8');\n    expect(root).toContain('ThemeProvider, ThemeScope, useTheme');\n    expect(root).not.toContain('ThemeContext');\n    expect(runtime).not.toContain('ThemeRuntimeContext');\n  });\n});\n`,
);

write(
  'src/structureOwnership.test.ts',
  `import { existsSync } from 'node:fs';\n\nimport { describe, expect, it } from 'bun:test';\n\ndescribe('canonical Surface ownership', () => {\n  it('does not retain superseded technical roots or local generic deep utilities', () => {\n    const src = new URL('.', import.meta.url);\n    expect(existsSync(new URL('./context', src))).toBe(false);\n    expect(existsSync(new URL('./theme', src))).toBe(false);\n    expect(existsSync(new URL('./interactionPolicy.ts', src))).toBe(false);\n    expect(existsSync(new URL('./surfaceColor.ts', src))).toBe(false);\n    expect(existsSync(new URL('./utils/deepEqual.ts', src))).toBe(false);\n    expect(existsSync(new URL('./utils/deepMerge.ts', src))).toBe(false);\n  });\n});\n`,
);

write(
  '.changeset/theme-runtime-ownership.md',
  `---\n'@ankhorage/surface': major\n---\n\nNormalize theme, font, interaction-policy, and surface-color ownership. Add a nested ThemeScope boundary, remove raw theme/context internals and translation runtime from the public API, and consume deep object operations from @ankhorage/utility.\n`,
);

remove('scripts/migrateThemeOwnership.ts');
remove('.github/workflows/theme-ownership-migration.yml');

console.log('Surface ownership migration applied.');
