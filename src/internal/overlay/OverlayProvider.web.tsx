import React from 'react';
import { createPortal } from 'react-dom';

import { OverlayStackHost } from './OverlayStackHost';
import { OverlayStackActionsContext, OverlayStackContext } from './useOverlayStack';
import { useOverlayStackRuntime } from './useOverlayStackRuntime';

/*** Installs the shared overlay stack in a document-level browser portal after hydration. */
export function OverlayProvider({ children }: { children: React.ReactNode }) {
  const { actions, value } = useOverlayStackRuntime();
  const portalContainer = React.useSyncExternalStore(
    subscribeToBrowserPortal,
    getBrowserPortalContainer,
    getServerPortalContainer,
  );

  return (
    <OverlayStackActionsContext value={actions}>
      <OverlayStackContext value={value}>
        {children}
        {portalContainer === null
          ? null
          : createPortal(<OverlayStackHost overlays={value.overlays} />, portalContainer)}
      </OverlayStackContext>
    </OverlayStackActionsContext>
  );
}

/*** Subscribes to the stable browser document portal container. */
function subscribeToBrowserPortal() {
  return () => undefined;
}

/*** Resolves the document body only after browser hydration. */
function getBrowserPortalContainer(): HTMLElement {
  return document.body;
}

/*** Preserves server markup by withholding the portal until the browser snapshot is active. */
function getServerPortalContainer(): null {
  return null;
}
