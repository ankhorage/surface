import type { ThemeConfig } from '@ankhorage/contracts';
import { deepMerge } from '@ankhorage/utility/object';
import { useMemo, useState } from 'react';

import { ResponsiveProvider } from '../../../../core/responsive/ResponsiveProvider.js';
import { OverlayProvider } from '../../../../internal/overlay/OverlayProvider.js';
import type { ThemeProviderProps, ThemeRuntime } from '../../../../types/theme.js';
import { useFontRuntime } from '../../../font/adapters/inbound/useFontRuntime.js';
import { createTheme } from '../../application/use-cases/createTheme.js';
import { ThemeRuntimeContext } from './ThemeRuntimeContext.js';

/*** Install the app-level Surface theme together with global responsive and overlay runtime. */
export function ThemeProvider({
  children,
  initialConfig,
  initialMode = 'light',
}: ThemeProviderProps) {
  const defaultTheme = useMemo(() => createTheme(), []);
  const [config, setConfig] = useState<ThemeConfig>(() =>
    initialConfig ? deepMerge(defaultTheme.config, initialConfig) : defaultTheme.config,
  );
  const [mode, setMode] = useState(initialMode);
  const { activeFontId } = useFontRuntime();

  const theme = useMemo(
    () => createTheme(config, mode, activeFontId),
    [activeFontId, config, mode],
  );
  const value = useMemo<ThemeRuntime>(
    () => ({
      theme,
      mode,
      inverted: false,
      setThemeConfig: (nextConfig) => setConfig((previous) => deepMerge(previous, nextConfig)),
      setMode,
    }),
    [mode, theme],
  );

  return (
    <ResponsiveProvider>
      <ThemeRuntimeContext value={value}>
        <OverlayProvider>{children}</OverlayProvider>
      </ThemeRuntimeContext>
    </ResponsiveProvider>
  );
}
