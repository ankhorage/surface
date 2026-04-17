export function resolveNextMenuIndex(
  items: Array<{ disabled?: boolean }>,
  currentIndex: number,
  key: 'ArrowDown' | 'ArrowUp' | 'Home' | 'End',
): number {
  const enabledIndexes = items.reduce<number[]>((indexes, item, index) => {
    if (!item.disabled) {
      indexes.push(index);
    }
    return indexes;
  }, []);

  if (enabledIndexes.length === 0) {
    return -1;
  }

  if (key === 'Home') {
    return enabledIndexes[0] ?? -1;
  }

  if (key === 'End') {
    return enabledIndexes[enabledIndexes.length - 1] ?? -1;
  }

  const activeEnabledIndex = enabledIndexes.indexOf(currentIndex);
  const nextEnabledIndex =
    activeEnabledIndex === -1
      ? 0
      : key === 'ArrowUp'
        ? (activeEnabledIndex - 1 + enabledIndexes.length) % enabledIndexes.length
        : (activeEnabledIndex + 1) % enabledIndexes.length;

  return enabledIndexes[nextEnabledIndex] ?? -1;
}
