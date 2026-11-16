import React from 'react';

import type { BottomSheetController } from '../../types/bottomSheet.js';
import { BottomSheetContext } from './BottomSheetContext.js';

/*** Returns the shared bottom-sheet controller installed by BottomSheetProvider. */
export function useBottomSheet(): BottomSheetController {
  const controller = React.use(BottomSheetContext);

  if (!controller) {
    throw new Error('useBottomSheet must be used within BottomSheetProvider.');
  }

  return controller;
}
