import type { ThemeConfig } from '@ankhorage/contracts';
import type { ReactNode } from 'react';

import type { SurfaceTheme, ThemeMode } from './theme';

export interface ThemeRuntime {
  theme: SurfaceTheme;
  mode: ThemeMode;
  setThemeConfig: (config: Partial<ThemeConfig>) => void;
  setMode: (mode: ThemeMode) => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
  initialConfig?: Partial<ThemeConfig>;
  initialMode?: ThemeMode;
}

export interface ThemeScopeProps {
  children: ReactNode;
  themeConfig?: Partial<ThemeConfig>;
  mode?: ThemeMode;
}
