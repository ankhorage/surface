import { access, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

import { expect, test } from 'bun:test';

const extensionlessRelativeDeclarationSpecifier =
  /(?:from|import)\s*\(?\s*['"]\.\.?\/[^'"]*(?<!\.js)['"]/gu;

test('emits Node ESM declaration specifiers with explicit JavaScript extensions', async () => {
  const declarationFiles = await Array.fromAsync(
    new Bun.Glob('{dist,web-dist}/**/*.d.ts').scan('.'),
  );
  const declarationSources = await Promise.all(
    declarationFiles.map(async (file) => ({ file, source: await Bun.file(file).text() })),
  );
  const extensionlessSpecifiers = declarationSources.flatMap(({ file, source }) =>
    Array.from(
      source.matchAll(extensionlessRelativeDeclarationSpecifier),
      (match) => `${file}: ${match[0]}`,
    ),
  );

  expect(declarationFiles.length).toBeGreaterThan(0);
  expect(extensionlessSpecifiers).toEqual([]);
});

test('emits a compiled web facade without source-path declaration leaks', async () => {
  const webDeclaration = await Bun.file('web-dist/web.d.ts').text();
  const webRuntime = await Bun.file('web-dist/web.js').text();

  expect(webDeclaration).toContain("from '../dist/index.js'");
  expect(webDeclaration).not.toContain("from 'react-native'");
  expect(webDeclaration).not.toContain('/src/');
  expect(webRuntime).not.toContain("from 'react-native'");
  expect(webRuntime).not.toMatch(/from\s+['"][^'"]*\/src\//u);

  const webApi = await import('../web-dist/web.js');
  expect(webApi.Button).toBeDefined();
  expect(webApi.ThemeProvider).toBeDefined();
  expect(webApi.ThemeScope).toBeDefined();
  expect(webApi.useTheme).toBeDefined();
});

test('emits web declarations whose relative JavaScript specifiers resolve inside the package', async () => {
  const declarations = ['web-dist/web.d.ts', 'web-dist/bottom-sheet.d.ts'];
  const specifierPattern = /from\s+['"](\.{1,2}\/[^'"]+\.js)['"]/gu;

  for (const declaration of declarations) {
    const source = await readFile(declaration, 'utf8');
    const specifiers = Array.from(source.matchAll(specifierPattern)).flatMap((match) =>
      match[1] === undefined ? [] : [match[1]],
    );

    expect(specifiers.length, declaration).toBeGreaterThan(0);
    await Promise.all(
      specifiers.map((specifier) => access(resolve(dirname(declaration), specifier))),
    );
  }
});

test('publishes only the compiled web facade in the web distribution', async () => {
  const webDistributionFiles = await Array.fromAsync(new Bun.Glob('web-dist/**/*').scan('.'));

  expect(webDistributionFiles).toContain('web-dist/web.d.ts');
  expect(webDistributionFiles).toContain('web-dist/web.d.ts.map');
  expect(webDistributionFiles).toContain('web-dist/web.js');
  expect(webDistributionFiles).toContain('web-dist/web.js.map');
  expect(webDistributionFiles.every((file) => file.startsWith('web-dist/'))).toBe(true);
});

test('resolves the browser bottom-sheet subpath without React Native runtime syntax', async () => {
  const bottomSheet = await import('@ankhorage/surface/bottom-sheet');

  expect(bottomSheet.BottomSheetProvider).toBeDefined();
  expect(bottomSheet.BottomSheetView).toBeDefined();
});
