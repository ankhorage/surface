import React, { createContext, useContext, useMemo, useState } from 'react';

/**
 * Runtime font state consumed by theme and text primitives.
 */
export interface FontRuntime {
  /** true when the active font assets have finished loading */
  fontsLoaded: boolean;

  /** The currently active font family id */
  activeFontId: string | null;

  /** Update the active font family id */
  setActiveFontId: (id: string) => void;
}

const fallbackRuntime: FontRuntime = {
  fontsLoaded: true,
  activeFontId: null,
  setActiveFontId: () => {
    /* fallback */
  },
};

const FontContext = createContext(fallbackRuntime);

export function FontProvider(props: {
  fontsLoaded: boolean;
  activeFontId?: string | null;
  children: React.ReactNode;
  onActiveFontChange?: (id: string) => void;
}) {
  const {
    fontsLoaded,
    activeFontId: initialActiveFontId = null,
    children,
    onActiveFontChange,
  } = props;

  const [activeFontId, setActiveFontIdState] = useState(initialActiveFontId);

  const value = useMemo<FontRuntime>(
    () => ({
      fontsLoaded,
      activeFontId,
      setActiveFontId: (id: string) => {
        setActiveFontIdState(id);
        if (onActiveFontChange) onActiveFontChange(id);
      },
    }),
    [fontsLoaded, activeFontId, onActiveFontChange],
  );

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
}

export function useFontContext(): FontRuntime {
  return useContext(FontContext);
}
