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

  expect(webDeclaration).toContain("from 'react-native-web'");
  expect(webDeclaration).not.toContain("from 'react-native'");
  expect(webDeclaration).not.toContain('/src/');
  expect(webRuntime).not.toContain('/src/');
});

test('publishes only the compiled web facade in the web distribution', async () => {
  const webDistributionFiles = await Array.fromAsync(new Bun.Glob('web-dist/**/*').scan('.'));

  expect([...webDistributionFiles].sort()).toEqual([
    'web-dist/web.d.ts',
    'web-dist/web.d.ts.map',
    'web-dist/web.js',
    'web-dist/web.js.map',
  ]);
});
