import { use } from 'react';

import type { FontRuntime } from '../../../../types/font.js';
import { FontRuntimeContext } from './FontRuntimeContext.js';

/*** Read the internal font runtime used by Surface theme composition. */
export function useFontRuntime(): FontRuntime {
  return use(FontRuntimeContext);
}
