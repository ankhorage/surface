/**
 * Performs a deep merge of `source` into `target`.
 * Specifically handles the nested structure of ThemeConfig (light/dark objects).
 */
export function deepMerge<T extends object>(target: T, source: Partial<T>): T {
  const result = { ...target };

  (Object.keys(source) as (keyof T)[]).forEach((key) => {
    const sourceValue = source[key];
    const targetValue = target[key];

    if (
      sourceValue &&
      typeof sourceValue === 'object' &&
      !Array.isArray(sourceValue) &&
      targetValue &&
      typeof targetValue === 'object' &&
      !Array.isArray(targetValue)
    ) {
      // Recursively merge nested objects
      result[key] = deepMerge(targetValue as object, sourceValue as object) as T[keyof T];
    } else if (sourceValue !== undefined) {
      // Direct assignment for non-object values or if target doesn't have an object to merge with
      result[key] = sourceValue as T[keyof T];
    }
  });

  return result;
}
