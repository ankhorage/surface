function sanitizeTabValue(value: string): string {
  return value.trim().replace(/[^a-zA-Z0-9_-]+/g, '-');
}

function createTabsIdBase(testID: string | undefined): string {
  return testID ? `${testID}-tabs` : 'tabs';
}

export function getTabId(testID: string | undefined, value: string): string {
  return `${createTabsIdBase(testID)}-tab-${sanitizeTabValue(value)}`;
}

export function getTabPanelId(testID: string | undefined, value: string): string {
  return `${createTabsIdBase(testID)}-panel-${sanitizeTabValue(value)}`;
}
