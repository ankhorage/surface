import React, { createContext, useContext, useMemo } from 'react';

import { useFontContext } from '../context/FontContext';
import { ResponsiveProvider } from '../core/responsive/ResponsiveProvider';
import { isDeepEqual } from '../utils/deepEqual';
import { deepMerge } from '../utils/deepMerge';
import { createTheme } from './createTheme';
import type { AnkhTheme, ThemeConfig } from './types';

const defaultTheme = createTheme();

export const ThemeContext = createContext<{
  theme: AnkhTheme;
  mode: 'light' | 'dark';
  setThemeConfig: (config: Partial<ThemeConfig>) => void;
  setMode: (mode: 'light' | 'dark') => void;
  _hasProvider?: boolean;
}>({
  theme: defaultTheme,
  mode: 'light',
  setThemeConfig: () => {},
  setMode: () => {},
  _hasProvider: false,
});

export const ThemeProvider = ({
  children,
  initialConfig,
  initialMode = 'light',
}: {
  children: React.ReactNode;
  initialConfig?: Partial<ThemeConfig>;
  initialMode?: 'light' | 'dark';
}) => {
  const [config, setConfig] = React.useState<ThemeConfig>(() =>
    initialConfig ? deepMerge(defaultTheme.config, initialConfig) : defaultTheme.config,
  );
  const [mode, setMode] = React.useState<'light' | 'dark'>(initialMode);
  const { activeFontId } = useFontContext();

  // Keep state in sync with prop for real-time Studio updates
  React.useEffect(() => {
    if (initialConfig) {
      setConfig((prev) => {
        const merged = deepMerge(prev, initialConfig);
        if (isDeepEqual(prev, merged)) return prev;
        return merged;
      });
    }
  }, [initialConfig]);

  const theme = useMemo(
    () => createTheme(config, mode, activeFontId),
    [config, mode, activeFontId],
  );

  const value = useMemo(
    () => ({
      theme,
      mode,
      setThemeConfig: (newConfig: Partial<ThemeConfig>) =>
        setConfig((prev) => deepMerge(prev, newConfig)),
      setMode,
      _hasProvider: true,
    }),
    [theme, mode],
  );

  return (
    <ResponsiveProvider>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </ResponsiveProvider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeConfig = () => {
  const { setThemeConfig } = useTheme();
  return setThemeConfig;
};

export const useThemeMode = () => {
  const { mode, setMode } = useTheme();
  return { mode, setMode };
};
