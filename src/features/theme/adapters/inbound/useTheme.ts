import { use } from 'react';

import type { ThemeRuntime } from '../../../../types/theme-runtime';
import { ThemeRuntimeContext } from './ThemeRuntimeContext';

/*** Read the active Surface theme runtime. */
export function useTheme(): ThemeRuntime {
  return use(ThemeRuntimeContext);
}
