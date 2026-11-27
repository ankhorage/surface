import { readFile, writeFile } from 'node:fs/promises';

/*** Rewrites compiled declaration specifiers to the published Surface package layout. */
function rewriteWebDeclaration(source: string): string {
  return source
    .replaceAll("'./features/bottom-sheet/browser.js'", "'./bottom-sheet.js'")
    .replaceAll("'./index.js'", "'../dist/index.js'");
}

/*** Rewrites browser bottom-sheet declarations to their compiled declaration owners. */
function rewriteBottomSheetDeclaration(source: string): string {
  return source
    .replaceAll("'../../types/", "'../dist/types/")
    .replaceAll("'./", "'../dist/features/bottom-sheet/");
}

const webDeclarationPath = 'web-dist/web.d.ts';
const bottomSheetDeclarationPath = 'web-dist/bottom-sheet.d.ts';

await Promise.all([
  writeFile(
    webDeclarationPath,
    rewriteWebDeclaration(await readFile(webDeclarationPath, 'utf8')),
    'utf8',
  ),
  writeFile(
    bottomSheetDeclarationPath,
    rewriteBottomSheetDeclaration(await readFile(bottomSheetDeclarationPath, 'utf8')),
    'utf8',
  ),
]);
