import { use } from 'react';

import type { ThemeRuntime } from '../../../../types/theme.js';
import { ThemeRuntimeContext } from './ThemeRuntimeContext.js';

/*** Read the active Surface theme runtime. */
export function useTheme(): ThemeRuntime {
  return use(ThemeRuntimeContext);
}
