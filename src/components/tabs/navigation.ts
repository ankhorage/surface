import type { TabRegistration } from './context';

export function resolveNextTabValue(
  tabs: TabRegistration[],
  currentValue: string | undefined,
  key: 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowDown' | 'Home' | 'End',
): string | undefined {
  const enabledTabs = tabs.filter((tab) => !tab.disabled);
  if (enabledTabs.length === 0) {
    return undefined;
  }

  if (key === 'Home') {
    return enabledTabs[0]?.value;
  }

  if (key === 'End') {
    return enabledTabs[enabledTabs.length - 1]?.value;
  }

  const currentIndex = enabledTabs.findIndex((tab) => tab.value === currentValue);
  if (currentIndex === -1) {
    return enabledTabs[0]?.value;
  }

  const nextIndex =
    key === 'ArrowLeft' || key === 'ArrowUp'
      ? (currentIndex - 1 + enabledTabs.length) % enabledTabs.length
      : (currentIndex + 1) % enabledTabs.length;

  return enabledTabs[nextIndex]?.value;
}
