import { readFileSync, rmSync, writeFileSync } from 'node:fs';

const root = process.cwd();
const read = (path: string) => readFileSync(`${root}/${path}`, 'utf8');
const write = (path: string, content: string) => writeFileSync(`${root}/${path}`, content);

let themeTypes = read('src/types/theme.ts');
themeTypes = themeTypes
  .replace(
    /export type \{\n  ColorHarmony,[\s\S]*?  SemanticColorToken,\n\} from '@ankhorage\/color-theory';\n/u,
    '',
  )
  .replace("export type { ThemeConfig, ThemeModeConfig } from '@ankhorage/contracts';\n", '');
write('src/types/theme.ts', themeTypes);

let provider = read('src/features/theme/adapters/inbound/ThemeProvider.tsx');
provider = provider.replace(
  "import type { ThemeConfig } from '../../../../types/theme';",
  "import type { ThemeConfig } from '@ankhorage/contracts';",
);
write('src/features/theme/adapters/inbound/ThemeProvider.tsx', provider);

rmSync(`${root}/scripts/normalizeThemePublicTypes.ts`, { force: true });
console.log('Theme public type ownership normalized.');
