import React from 'react';

import {
  createOverlayEntry,
  type OverlayDescriptor,
  type OverlayEntry,
  type OverlayStackActions,
  type OverlayStackRuntime,
  sortOverlayEntries,
} from './useOverlayStack.js';

interface OverlayStackRuntimeResult {
  readonly actions: OverlayStackActions;
  readonly value: OverlayStackRuntime;
}

/*** Owns overlay ordering and actions independently from the platform-specific host placement. */
export function useOverlayStackRuntime(): OverlayStackRuntimeResult {
  const orderRef = React.useRef(0);
  const [overlays, setOverlays] = React.useState<OverlayEntry[]>([]);
  const overlaysRef = React.useRef<OverlayEntry[]>([]);
  React.useEffect(() => {
    overlaysRef.current = overlays;
  }, [overlays]);

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

  const dismissTopmost = React.useCallback(() => {
    const topmost = overlaysRef.current.at(-1);
    topmost?.onDismiss?.();
  }, []);

  const actions = React.useMemo(
    () => ({ dismissTopmost, removeOverlay, setOverlay }),
    [dismissTopmost, removeOverlay, setOverlay],
  );
  const value = React.useMemo(
    () => ({ dismissTopmost, overlays, removeOverlay, setOverlay }),
    [dismissTopmost, overlays, removeOverlay, setOverlay],
  );

  return { actions, value };
}
