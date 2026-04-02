import React, { createContext, useContext, useMemo } from 'react';

/**
 * Minimal translation runtime surface.
 * Do not import i18next types here; keep Surface runtime-agnostic.
 */
export interface I18nInstance {
  changeLanguage: (lng: string) => Promise<unknown>;
  language?: string;
  t?: Translator;
}

export type Translator = (key: string, options?: Record<string, unknown>) => string;

export interface TranslationRuntime {
  t: Translator;
  i18n: I18nInstance | null;
}

const fallbackRuntime: TranslationRuntime = {
  t: (key) => key,
  i18n: null,
};

const TranslationContext = createContext(fallbackRuntime);

export function TranslationProvider(props: {
  t: Translator;
  i18n?: I18nInstance | null;
  children: React.ReactNode;
}) {
  const { t, i18n, children } = props;

  const value = useMemo<TranslationRuntime>(
    () => ({
      t: (key: string, options?: Record<string, unknown>) => {
        if (i18n?.t) {
          const result = i18n.t(key, options);
          // If translation returns the key, it's missing in the current dictionary
          if (result !== key) return result;
        }
        return t(key, options);
      },
      i18n: i18n ?? null,
    }),
    [t, i18n, i18n?.language],
  );

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useTranslationContext(): TranslationRuntime {
  return useContext(TranslationContext);
}
