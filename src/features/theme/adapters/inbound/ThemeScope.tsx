import { deepMerge } from '@ankhorage/utility/object';
import { useMemo } from 'react';

import type { ThemeRuntime, ThemeScopeProps } from '../../../../types/theme.js';
import { useFontRuntime } from '../../../font/adapters/inbound/useFontRuntime.js';
import { createTheme } from '../../application/use-cases/createTheme.js';
import { ThemeRuntimeContext } from './ThemeRuntimeContext.js';
import { useTheme } from './useTheme.js';

/*** Apply nested theme, mode, or inherited surface-polarity overrides without remounting providers. */
export function ThemeScope({ children, themeConfig, mode, inverted }: ThemeScopeProps) {
  const parent = useTheme();
  const { activeFontId } = useFontRuntime();
  const scopedMode = mode ?? parent.mode;
  const scopedInverted = inverted ?? parent.inverted ?? false;
  const scopedConfig = useMemo(
    () => (themeConfig ? deepMerge(parent.theme.config, themeConfig) : parent.theme.config),
    [parent.theme.config, themeConfig],
  );
  const theme = useMemo(
    () => createTheme(scopedConfig, scopedMode, activeFontId, scopedInverted),
    [activeFontId, scopedConfig, scopedMode, scopedInverted],
  );
  const value = useMemo<ThemeRuntime>(
    () => ({ ...parent, theme, mode: scopedMode, inverted: scopedInverted }),
    [parent, scopedMode, scopedInverted, theme],
  );

  return <ThemeRuntimeContext value={value}>{children}</ThemeRuntimeContext>;
}
