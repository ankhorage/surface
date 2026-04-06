import { createConfig } from '@ankhorage/devtools/eslint';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const configDir = dirname(fileURLToPath(import.meta.url));

export default createConfig({
  files: ['src/**/*.{ts,tsx}'],
  project: ['./tsconfig.eslint.json'],
  tsconfigRootDir: configDir,
});
