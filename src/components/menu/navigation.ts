export function resolveNextMenuIndex(
  itemCount: number,
  currentIndex: number,
  key: 'ArrowDown' | 'ArrowUp' | 'Home' | 'End',
): number {
  if (itemCount <= 0) {
    return -1;
  }

  if (key === 'Home') {
    return 0;
  }

  if (key === 'End') {
    return itemCount - 1;
  }

  return key === 'ArrowUp'
    ? (currentIndex - 1 + itemCount) % itemCount
    : (currentIndex + 1) % itemCount;
}
