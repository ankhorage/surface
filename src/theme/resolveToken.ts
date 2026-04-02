/**
 * 1. Define the Conditional Logic
 * If TValue is a key of TMap, return the map's value type.
 * Otherwise, return TValue itself.
 */
type ResolvedToken<TMap, TValue> = TValue extends keyof TMap ? TMap[TValue] : TValue;

/**
 * 2. The Generic Function
 */
export function resolveToken<
  TMap extends Record<string | number, unknown>,
  TValue extends string | number | undefined,
>(map: TMap, value: TValue): ResolvedToken<TMap, TValue> {
  // Undefined check
  if (value === undefined) {
    return undefined as ResolvedToken<TMap, TValue>;
  }

  // Runtime check: Is 'value' a key in 'map'?
  if (
    (typeof value === 'string' || typeof value === 'number') &&
    Object.prototype.hasOwnProperty.call(map, value)
  ) {
    // Return the mapped token
    // We cast to the specific conditional type, strictly safer than 'any'
    return map[value as keyof TMap] as ResolvedToken<TMap, TValue>;
  }

  // Fallback: Return raw value
  return value as ResolvedToken<TMap, TValue>;
}
