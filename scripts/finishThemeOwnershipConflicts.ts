import { readFileSync, rmSync, writeFileSync } from 'node:fs';

const root = process.cwd();
const read = (path: string) => readFileSync(`${root}/${path}`, 'utf8');
const write = (path: string, content: string) => writeFileSync(`${root}/${path}`, content);

let paletteTest = read('src/features/theme/domain/generatePalette.test.ts');
paletteTest = paletteTest
  .replace(
    "import { readOwnProperty } from '@ankhorage/utility/object';",
    "import { isRecord, readOwnProperty } from '@ankhorage/utility/object';",
  )
  .replace(
    /function expectCompleteSemanticValues[\s\S]*?function visitSemanticValues[\s\S]*?\n\}\n\n/u,
    `function expectCompleteSemanticValues(value: unknown): void {\n  if (typeof value === 'string') {\n    expect(value.length).toBeGreaterThan(0);\n    return;\n  }\n  if (!isRecord(value)) return;\n  Object.values(value).forEach(expectCompleteSemanticValues);\n}\n\n`,
  );
write('src/features/theme/domain/generatePalette.test.ts', paletteTest);

let indexTest = read('src/index.test.ts');
indexTest = indexTest.replace(
  "import type { SelectionSemantics, SurfaceColorDiagnostics } from './index';",
  "import type { SelectionSemantics, SurfaceColorDiagnostics } from './features/theme/public';",
);
write('src/index.test.ts', indexTest);

rmSync(`${root}/scripts/finishThemeOwnershipConflicts.ts`, { force: true });
console.log('Final theme ownership conflicts resolved.');
