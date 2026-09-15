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
  let result = toPosix(relative(dirname(source), withoutExtension(target)));
  if (!result.startsWith('.')) result = `./${result}`;
  return result;
};

const replaceEndingSpecifier = (source: string, content: string, ending: string, target: string) =>
  content.replace(/(['"])(\.{1,2}\/[^'"\n]+)\1/gu, (match, quote: string, specifier: string) =>
    specifier.endsWith(ending) ? `${quote}${relativeSpecifier(source, target)}${quote}` : match,
  );

for (const path of sourceFiles(srcRoot)) {
  let content = read(path);
  content = replaceEndingSpecifier(path, content, '/theme/types', 'src/types/theme.ts');
  content = replaceEndingSpecifier(
    path,
    content,
    '/theme/resolveToken',
    'src/features/theme/utils/resolveToken.ts',
  );
  content = replaceEndingSpecifier(
    path,
    content,
    '/theme/ThemeContext',
    'src/features/theme/runtime.ts',
  );
  content = replaceEndingSpecifier(
    path,
    content,
    '/interactionPolicy',
    'src/types/interactionPolicy.ts',
  );
  write(path, content);
}

write(
  'src/types/surfaceColor.ts',
  `import type {\n  SURFACE_COLORS,\n  SURFACE_EMPHASES,\n  SURFACE_PALETTE_COLORS,\n  SURFACE_STATUS_COLORS,\n} from '../contracts/surfaceColor';\n\nexport type SurfacePaletteColor = (typeof SURFACE_PALETTE_COLORS)[number];\nexport type SurfaceStatusColor = (typeof SURFACE_STATUS_COLORS)[number];\nexport type SurfaceColor = (typeof SURFACE_COLORS)[number];\nexport type SurfaceEmphasis = (typeof SURFACE_EMPHASES)[number];\n`,
);

let typographyTypes = read('src/types/typography.ts');
typographyTypes = typographyTypes.replace(
  /import type \{ SurfaceColor, SurfaceEmphasis \} from ['"][^'"]+['"];/u,
  "import type { SurfaceColor, SurfaceEmphasis } from './surfaceColor';",
);
write('src/types/typography.ts', typographyTypes);

let constants = read('src/features/theme/constants.ts');
constants = constants.replace(
  /import type \{ FontWeight, ThemeTokens \} from ['"][^'"]+['"];/u,
  "import type { FontWeight, ThemeTokens } from '../../types/theme';",
);
write('src/features/theme/constants.ts', constants);

write(
  'src/features/typography/adapters/inbound/Text.tsx',
  `import React from 'react';\nimport { Text as ReactNativeText } from 'react-native';\n\nimport { resolveTextColor, resolveTextStyles } from '../../../../internal/resolvers';\nimport type { TextProps } from '../../../../types/typography';\nimport { useTheme } from '../../../theme/runtime';\n\n/*** Renders body text using Surface semantic typography. */\nexport function Text({\n  children,\n  i18nKey,\n  variant = 'body',\n  emphasis = 'default',\n  color,\n  align,\n  weight,\n  italic = false,\n  numberOfLines,\n  testID,\n}: TextProps) {\n  const { theme } = useTheme();\n  const content = children ?? i18nKey ?? null;\n\n  return (\n    <ReactNativeText\n      numberOfLines={numberOfLines}\n      testID={testID}\n      style={[\n        resolveTextStyles(theme, { align, italic, variant, weight }),\n        { color: resolveTextColor(theme, emphasis, color) },\n      ]}\n    >\n      {content}\n    </ReactNativeText>\n  );\n}\n`,
);

write(
  'src/features/typography/adapters/inbound/Heading.tsx',
  `import React from 'react';\nimport { Text as ReactNativeText } from 'react-native';\n\nimport type { HeadingProps } from '../../../../types/typography';\nimport { useTheme } from '../../../theme/runtime';\nimport { resolveHeadingTextStyle } from '../../utils/resolveHeadingTextStyle';\n\n/*** Renders a semantic heading using Surface typography tokens. */\nexport function Heading({\n  text,\n  children,\n  level = 2,\n  align,\n  color,\n  emphasis = 'default',\n  numberOfLines,\n  testID,\n}: HeadingProps) {\n  const { theme } = useTheme();\n  const content = text ?? children;\n\n  return (\n    <ReactNativeText\n      accessibilityRole="header"\n      testID={testID}\n      numberOfLines={numberOfLines}\n      style={resolveHeadingTextStyle(theme, level, align, emphasis, color)}\n    >\n      {content}\n    </ReactNativeText>\n  );\n}\n`,
);

let index = read('src/index.ts');
const indexLines = index
  .split('\n')
  .filter(
    (line) =>
      !line.includes("./context/FontContext") &&
      !line.includes("./context/TranslationContext") &&
      !line.includes('useFontContext') &&
      !line.includes('TranslationProvider') &&
      !line.includes('useTranslationContext'),
  );
const fontTypeLine = "export type { FontProviderProps, FontRuntime } from './features/font/public';";
const fontRuntimeLine = "export { FontProvider } from './features/font/public';";
if (!indexLines.includes(fontTypeLine)) indexLines.unshift(fontTypeLine);
if (!indexLines.includes(fontRuntimeLine)) indexLines.splice(1, 0, fontRuntimeLine);
index = indexLines.join('\n');
write('src/index.ts', index);

let interactionTest = read('src/types/interactionPolicy.test.ts');
interactionTest = interactionTest
  .replace("new URL('./index.ts', import.meta.url)", "new URL('../index.ts', import.meta.url)")
  .replace("from './types/interactionPolicy';", "from './types/interactionPolicy';")
  .replace("from './interactionPolicy';", "from './types/interactionPolicy';");
write('src/types/interactionPolicy.test.ts', interactionTest);

rmSync(`${root}/scripts/normalizeThemeOwnership.ts`, { force: true });
console.log('Migrated ownership imports normalized.');
