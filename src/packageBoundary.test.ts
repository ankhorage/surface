import { expect, test } from 'bun:test';

const extensionlessRelativeDeclarationSpecifier =
  /(?:from|import)\s*\(?\s*['"]\.\.?\/[^'"]*(?<!\.js)['"]/gu;

test('emits Node ESM declaration specifiers with explicit JavaScript extensions', async () => {
  const declarationFiles = await Array.fromAsync(new Bun.Glob('dist/**/*.d.ts').scan('.'));
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
