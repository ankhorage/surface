import React from 'react';
import { View } from 'react-native';

import {
  createOverlayEntry,
  OverlayStackContext,
  sortOverlayEntries,
  type OverlayDescriptor,
  type OverlayEntry,
} from './useOverlayStack';

export function OverlayProvider({ children }: { children: React.ReactNode }) {
  const orderRef = React.useRef(0);
  const [overlays, setOverlays] = React.useState<OverlayEntry[]>([]);

  const setOverlay = React.useCallback((id: string, descriptor: OverlayDescriptor) => {
    setOverlays((current) => {
      const existing = current.find((entry) => entry.id === id);
      const nextEntry = createOverlayEntry(
        id,
        existing?.order ?? orderRef.current++,
        descriptor,
      );

      if (!existing) {
        return sortOverlayEntries([...current, nextEntry]);
      }

      return sortOverlayEntries(
        current.map((entry) => (entry.id === id ? nextEntry : entry)),
      );
    });
  }, []);

  const removeOverlay = React.useCallback((id: string) => {
    setOverlays((current) => current.filter((entry) => entry.id !== id));
  }, []);

  const value = React.useMemo(
    () => ({
      overlays,
      removeOverlay,
      setOverlay,
    }),
    [overlays, removeOverlay, setOverlay],
  );

  return (
    <OverlayStackContext.Provider value={value}>
      {children}
      <View
        pointerEvents="box-none"
        style={{
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      >
        {overlays.map((overlay) => (
          <View
            key={overlay.id}
            pointerEvents="box-none"
            style={{
              bottom: 0,
              left: 0,
              position: 'absolute',
              right: 0,
              top: 0,
              zIndex: overlay.zIndex,
            }}
          >
            {overlay.node}
          </View>
        ))}
      </View>
    </OverlayStackContext.Provider>
  );
}
