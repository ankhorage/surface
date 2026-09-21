import React from 'react';

import {
  createOverlayEntry,
  type OverlayDescriptor,
  type OverlayEntry,
  type OverlayStackActions,
  type OverlayStackRuntime,
  sortOverlayEntries,
} from './useOverlayStack';

interface OverlayStackRuntimeResult {
  readonly actions: OverlayStackActions;
  readonly value: OverlayStackRuntime;
}

/*** Owns overlay ordering and actions independently from the platform-specific host placement. */
export function useOverlayStackRuntime(): OverlayStackRuntimeResult {
  const orderRef = React.useRef(0);
  const [overlays, setOverlays] = React.useState<OverlayEntry[]>([]);

  const setOverlay = React.useCallback((id: string, descriptor: OverlayDescriptor) => {
    setOverlays((current) => {
      const existing = current.find((entry) => entry.id === id);
      const nextEntry = createOverlayEntry(id, existing?.order ?? orderRef.current++, descriptor);

      if (!existing) return sortOverlayEntries([...current, nextEntry]);

      return sortOverlayEntries(current.map((entry) => (entry.id === id ? nextEntry : entry)));
    });
  }, []);

  const removeOverlay = React.useCallback((id: string) => {
    setOverlays((current) => current.filter((entry) => entry.id !== id));
  }, []);

  const actions = React.useMemo(() => ({ removeOverlay, setOverlay }), [removeOverlay, setOverlay]);
  const value = React.useMemo(
    () => ({ overlays, removeOverlay, setOverlay }),
    [overlays, removeOverlay, setOverlay],
  );

  return { actions, value };
}
