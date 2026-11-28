import React from 'react';

import { OverlayStackHost } from './OverlayStackHost.js';
import { OverlayStackActionsContext, OverlayStackContext } from './useOverlayStack.js';
import { useOverlayStackRuntime } from './useOverlayStackRuntime.js';

/*** Installs the shared overlay stack used by portal-based Surface features. */
export function OverlayProvider({ children }: { children: React.ReactNode }) {
  const { actions, value } = useOverlayStackRuntime();

  return (
    <OverlayStackActionsContext value={actions}>
      <OverlayStackContext value={value}>
        {children}
        <OverlayStackHost overlays={value.overlays} />
      </OverlayStackContext>
    </OverlayStackActionsContext>
  );
}
