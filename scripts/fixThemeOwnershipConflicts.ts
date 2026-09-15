import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, extname, relative, sep } from 'node:path';

const root = process.cwd();
const srcRoot = `${root}/src`;
const toPosix = (value: string) => value.split(sep).join('/');
const rel = (value: string) => toPosix(relative(root, value));
const read = (path: string) => readFileSync(`${root}/${path}`, 'utf8');
const write = (path: string, content: string) => {
  mkdirSync(dirname(`${root}/${path}`), { recursive: true });
  writeFileSync(`${root}/${path}`, content);
};
const sourceFiles = (directory: string): string[] =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) return sourceFiles(path);
    return ['.ts', '.tsx'].includes(extname(entry.name)) ? [rel(path)] : [];
  });
const withoutExtension = (path: string) => path.replace(/\.(?:tsx?|jsx?)$/u, '');
const relativeSpecifier = (source: string, target: string) => {
  const value = toPosix(relative(dirname(source), withoutExtension(target)));
  return value.startsWith('.') ? value : `./${value}`;
};
const rewriteEnding = (source: string, content: string, ending: string, target: string) =>
  content.replace(/(['"])(\.{1,2}\/[^'"\n]+)\1/gu, (match, quote: string, specifier: string) =>
    specifier.endsWith(ending) ? `${quote}${relativeSpecifier(source, target)}${quote}` : match,
  );

for (const path of sourceFiles(srcRoot)) {
  let content = read(path);
  content = rewriteEnding(
    path,
    content,
    '/theme/createTheme',
    'src/features/theme/application/use-cases/createTheme.ts',
  );
  content = rewriteEnding(
    path,
    content,
    '/theme/colorEngine',
    'src/features/theme/domain/generatePalette.ts',
  );
  content = rewriteEnding(
    path,
    content,
    '/theme/defaultTokens',
    'src/features/theme/constants.ts',
  );
  write(path, content);
}

write(
  'src/features/theme/adapters/inbound/ThemeProvider.tsx',
  `import { deepMerge } from '@ankhorage/utility/object';\nimport { useMemo, useState } from 'react';\n\nimport { ResponsiveProvider } from '../../../../core/responsive/ResponsiveProvider';\nimport { OverlayProvider } from '../../../../internal/overlay/OverlayProvider';\nimport type { ThemeConfig } from '../../../../types/theme';\nimport type { ThemeProviderProps, ThemeRuntime } from '../../../../types/theme-runtime';\nimport { useFontRuntime } from '../../../font/adapters/inbound/useFontRuntime';\nimport { createTheme } from '../../application/use-cases/createTheme';\nimport { ThemeRuntimeContext } from './ThemeRuntimeContext';\n\n/*** Install the app-level Surface theme together with global responsive and overlay runtime. */\nexport function ThemeProvider({ children, initialConfig, initialMode = 'light' }: ThemeProviderProps) {\n  const defaultTheme = useMemo(() => createTheme(), []);\n  const [config, setConfig] = useState<ThemeConfig>(() =>\n    initialConfig ? deepMerge(defaultTheme.config, initialConfig) : defaultTheme.config,\n  );\n  const [mode, setMode] = useState(initialMode);\n  const { activeFontId } = useFontRuntime();\n  const theme = useMemo(() => createTheme(config, mode, activeFontId), [activeFontId, config, mode]);\n  const value = useMemo<ThemeRuntime>(\n    () => ({\n      theme,\n      mode,\n      setThemeConfig: (nextConfig) => setConfig((previous) => deepMerge(previous, nextConfig)),\n      setMode,\n    }),\n    [mode, theme],\n  );\n\n  return (\n    <ResponsiveProvider>\n      <ThemeRuntimeContext value={value}>\n        <OverlayProvider>{children}</OverlayProvider>\n      </ThemeRuntimeContext>\n    </ResponsiveProvider>\n  );\n}\n`,
);

write(
  'src/features/theme/application/use-cases/createTheme.ts',
  `import type { ThemeConfig } from '@ankhorage/contracts';\n\nimport type { FontWeight, SurfaceTheme } from '../../../../types/theme';\nimport { generatePalette } from '../../domain/generatePalette';\nimport { resolveGlobalTokens } from '../../utils/resolveGlobalTokens';\n\nconst DEFAULT_CONFIG: ThemeConfig = {\n  id: 'default',\n  name: 'Default',\n  light: { primaryColor: '#3B82F6', harmony: 'monochromatic' },\n  dark: { primaryColor: '#3B82F6', harmony: 'monochromatic' },\n};\n\n/*** Resolve canonical persisted theme source into the complete Surface runtime theme. */\nexport function createTheme(\n  config: ThemeConfig = DEFAULT_CONFIG,\n  mode: 'light' | 'dark' = 'light',\n  activeFontId?: string | null,\n): SurfaceTheme {\n  const { colors, swatches, semantics, colorDiagnostics } = generatePalette(config, mode);\n  const baseTheme: SurfaceTheme = {\n    ...resolveGlobalTokens(config.tokens),\n    colors,\n    swatches,\n    semantics,\n    colorDiagnostics,\n    config,\n  };\n  return activeFontId ? withActiveFont(baseTheme, activeFontId) : baseTheme;\n}\n\n/*** Return a theme with generated module font-family names without mutating the base theme. */\nfunction withActiveFont(theme: SurfaceTheme, activeFontId: string): SurfaceTheme {\n  const familyName = toPascalCase(activeFontId);\n  return {\n    ...theme,\n    typography: {\n      ...theme.typography,\n      fonts: {\n        normal: createFontMap(theme.typography.fonts.normal, familyName, 'Regular'),\n        italic: createFontMap(theme.typography.fonts.italic, familyName, 'Italic'),\n      },\n    },\n  };\n}\n\nfunction createFontMap(\n  fallback: Record<FontWeight, string | undefined>,\n  familyName: string,\n  style: 'Regular' | 'Italic',\n): Record<FontWeight, string | undefined> {\n  return {\n    ...fallback,\n    '100': \`${'${familyName}'}_100${'${style}'}\`,\n    '200': \`${'${familyName}'}_200${'${style}'}\`,\n    '300': \`${'${familyName}'}_300${'${style}'}\`,\n    '400': \`${'${familyName}'}_400${'${style}'}\`,\n    '500': \`${'${familyName}'}_500${'${style}'}\`,\n    '600': \`${'${familyName}'}_600${'${style}'}\`,\n    '700': \`${'${familyName}'}_700${'${style}'}\`,\n    '800': \`${'${familyName}'}_800${'${style}'}\`,\n    '900': \`${'${familyName}'}_900${'${style}'}\`,\n  };\n}\n\nfunction toPascalCase(value: string): string {\n  return value\n    .split(/[- ]+/)\n    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))\n    .join('');\n}\n`,
);

write(
  'src/features/theme/application/use-cases/createThemeOverrides.test.ts',
  `import type { ThemeConfig } from '@ankhorage/contracts';\nimport { describe, expect, it } from 'bun:test';\n\nimport { DEFAULT_TOKENS } from '../../constants';\nimport { createTheme } from './createTheme';\n\nconst defaultConfig = createTheme().config;\n\ndescribe('createTheme authored global tokens', () => {\n  it('preserves defaults when no authored overrides exist', () => {\n    const theme = createTheme(defaultConfig);\n    expect(theme.spacing).toEqual(DEFAULT_TOKENS.spacing);\n    expect(theme.radii).toEqual(DEFAULT_TOKENS.radii);\n    expect(theme.typography.sizes).toEqual(DEFAULT_TOKENS.typography.sizes);\n    expect(theme.typography.weights).toEqual(DEFAULT_TOKENS.typography.weights);\n    expect(theme.shadows).toEqual(DEFAULT_TOKENS.shadows);\n  });\n\n  it('merges authored global tokens without copying omitted defaults into config', () => {\n    const config: ThemeConfig = {\n      ...defaultConfig,\n      tokens: {\n        spacing: { m: 18, hero: 64 },\n        radii: { l: 20, pill: 999 },\n        typography: {\n          sizes: { m: 17, display: 44 },\n          weights: { medium: '600' },\n          headings: { '1': { size: 36, lineHeight: 44, weight: 'semiBold' } },\n        },\n        shadows: { soft: 3, floating: 12 },\n      },\n    };\n    const theme = createTheme(config);\n    expect(theme.spacing).toMatchObject({ xs: 4, m: 18, hero: 64 });\n    expect(theme.radii).toMatchObject({ m: 8, l: 20, pill: 999 });\n    expect(theme.typography.sizes).toMatchObject({ s: 14, m: 17, display: 44 });\n    expect(theme.typography.weights).toMatchObject({ regular: '400', medium: '600' });\n    expect(theme.typography.headings[1]).toEqual({ size: 36, lineHeight: 44, weight: 'semiBold' });\n    expect(theme.shadows).toMatchObject({ medium: 4, soft: 3, floating: 12 });\n    expect(theme.config.tokens).toEqual(config.tokens);\n  });\n\n  it('keeps module-derived font families isolated per resolved theme', () => {\n    const withFont = createTheme(defaultConfig, 'light', 'source-sans');\n    const withoutFont = createTheme(defaultConfig);\n    expect(withFont.typography.fonts.normal['400']).toBe('SourceSans_400Regular');\n    expect(withoutFont.typography.fonts.normal['400']).toBeUndefined();\n    expect(DEFAULT_TOKENS.typography.fonts.normal['400']).toBeUndefined();\n  });\n});\n`,
);

write(
  'src/features/theme/application/use-cases/createThemeValidation.test.ts',
  `import type { ThemeConfig, ThemeGlobalTokenOverrides } from '@ankhorage/contracts';\nimport { describe, expect, it } from 'bun:test';\n\nimport { createTheme } from './createTheme';\n\nconst defaultConfig = createTheme().config;\n\ndescribe('createTheme token validation', () => {\n  it('rejects negative or non-finite numeric tokens', () => {\n    expect(() => createTheme(withTokens({ spacing: { m: -1 } }))).toThrow(RangeError);\n    expect(() => createTheme(withTokens({ radii: { l: Number.NaN } }))).toThrow(RangeError);\n    expect(() => createTheme(withTokens({ shadows: { soft: Number.POSITIVE_INFINITY } }))).toThrow(\n      RangeError,\n    );\n  });\n\n  it('keeps reserved zero tokens canonical', () => {\n    expect(() => createTheme(withTokens({ spacing: { none: 1 } }))).toThrow('spacing.none');\n    expect(() => createTheme(withTokens({ radii: { none: 1 } }))).toThrow('radii.none');\n  });\n\n  it('requires positive typography dimensions', () => {\n    expect(() => createTheme(withTokens({ typography: { sizes: { m: 0 } } }))).toThrow(\n      'typography.sizes.m',\n    );\n    expect(() =>\n      createTheme(withTokens({ typography: { headings: { '1': { lineHeight: 0 } } } })),\n    ).toThrow('typography.headings.1.lineHeight');\n  });\n\n  it('rejects unknown heading and weight slots', () => {\n    expect(() =>\n      createTheme(withTokens({ typography: { headings: { hero: { size: 40 } } } })),\n    ).toThrow('Unknown typography heading token');\n    expect(() => createTheme(withTokens({ typography: { weights: { hero: '700' } } }))).toThrow(\n      'Unknown typography weight token',\n    );\n  });\n\n  it('rejects unsupported heading and font-weight values', () => {\n    expect(() =>\n      createTheme(withTokens({ typography: { headings: { '1': { weight: '900' } } } })),\n    ).toThrow('Invalid heading weight');\n    expect(() => createTheme(withTokens({ typography: { weights: { medium: '950' } } }))).toThrow(\n      'Invalid font weight',\n    );\n  });\n});\n\nfunction withTokens(tokens: ThemeGlobalTokenOverrides): ThemeConfig {\n  return { ...defaultConfig, tokens };\n}\n`,
);

let weightResolver = read('src/features/theme/utils/resolveWeightTokenOverrides.ts');
weightResolver = weightResolver.replace(
  /  const resolved: Record<string, FontWeight> = \{\};[\s\S]*?  return resolved;\n/u,
  `  return Object.fromEntries(\n    Object.entries(overrides).map(([token, value]) => {\n      if (!WEIGHT_TOKEN_KEYS.has(token)) {\n        throw new RangeError(\`Unknown typography weight token: ${'${token}'}.\`);\n      }\n      if (!isFontWeight(value)) {\n        throw new RangeError(\`Invalid font weight for typography.weights.${'${token}'}: ${'${value}'}.\`);\n      }\n      return [token, value] as const;\n    }),\n  );\n`,
);
write('src/features/theme/utils/resolveWeightTokenOverrides.ts', weightResolver);

let paletteTest = read('src/features/theme/domain/generatePalette.test.ts');
paletteTest = paletteTest
  .replace("import { describe, expect, it } from 'bun:test';", "import { expect, it } from 'bun:test';")
  .replace("describe('colorEngine', () => {\n", '')
  .replace(/\n\}\);\s*$/u, '\n')
  .replace("import type { SemanticColorToken } from '@ankhorage/color-theory';", "import type { SemanticColorToken } from '@ankhorage/color-theory';\nimport { readOwnProperty } from '@ankhorage/utility/object';")
  .replace(/expect\(resolved\[token\]\)\.toBeDefined\(\);/gu, "expect(readOwnProperty(resolved, token)).toBeDefined();")
  .replace(/expect\(typeof resolved\[token\]\)\.toBe\('string'\);/gu, "expect(typeof readOwnProperty(resolved, token)).toBe('string');")
  .replace("      visitSemanticValues(entry as object);", "      if (entry !== null && typeof entry === 'object') visitSemanticValues(entry);");
write('src/features/theme/domain/generatePalette.test.ts', paletteTest);

rmSync(`${root}/scripts/fixThemeOwnershipConflicts.ts`, { force: true });
console.log('Theme ownership gate conflicts resolved.');
