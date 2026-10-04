import { expect, test } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';

import type { ThemeRuntime } from '../../../../types/theme';
import { createTheme } from '../../application/use-cases/createTheme';
import { ThemeRuntimeContext } from './ThemeRuntimeContext';
import { ThemeScope } from './ThemeScope';
import { useTheme } from './useTheme';

function ThemeProbe() {
  const { mode, theme, inverted } = useTheme();
  return (
    <span>{`${theme.config.id}:${mode}:${theme.colorDiagnostics.mode}:${inverted}:${theme.semantics.surface.default}`}</span>
  );
}

const parentRuntime: ThemeRuntime = {
  theme: createTheme(),
  mode: 'light',
  setThemeConfig: () => undefined,
  setMode: () => undefined,
};

test('overrides mode without mutating the parent theme runtime', () => {
  const markup = renderToStaticMarkup(
    <ThemeRuntimeContext value={parentRuntime}>
      <ThemeProbe />
      <ThemeScope mode="dark">
        <ThemeProbe />
      </ThemeScope>
      <ThemeProbe />
    </ThemeRuntimeContext>,
  );

  expect(markup).toContain('default:light:light:undefined');
  expect(markup).toContain('default:dark:dark:false');
  expect(markup.match(/default:light:light:undefined/g)).toHaveLength(2);
});

test('deep-merges a nested config override while preserving the parent config', () => {
  const markup = renderToStaticMarkup(
    <ThemeRuntimeContext value={parentRuntime}>
      <ThemeProbe />
      <ThemeScope themeConfig={{ id: 'scoped' }}>
        <ThemeProbe />
      </ThemeScope>
      <ThemeProbe />
    </ThemeRuntimeContext>,
  );

  expect(markup).toContain('scoped:light:light:false');
  expect(markup.match(/default:light:light:undefined/g)).toHaveLength(2);
  expect(parentRuntime.theme.config.id).toBe('default');
});

test.each(['light', 'dark'] as const)(
  'inherits and resets inverted polarity in %s mode',
  (mode) => {
    const root = { ...parentRuntime, mode, theme: createTheme(undefined, mode) };
    const { default: normal, inverse } = root.theme.semantics.surface;
    const markup = renderToStaticMarkup(
      <ThemeRuntimeContext value={root}>
        <ThemeScope inverted>
          <ThemeProbe />
          <ThemeScope>
            <ThemeProbe />
            <ThemeScope inverted={false}>
              <ThemeProbe />
              <ThemeScope inverted>
                <ThemeProbe />
              </ThemeScope>
            </ThemeScope>
          </ThemeScope>
        </ThemeScope>
      </ThemeRuntimeContext>,
    );

    expect(markup.match(new RegExp(`${mode}:${mode}:true:${inverse}`, 'g'))).toHaveLength(3);
    expect(markup).toContain(`${mode}:${mode}:false:${normal}`);
    expect(root.inverted).toBeUndefined();
    expect(root.theme.semantics.surface.default).toBe(normal);
  },
);
