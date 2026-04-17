import { describe, expect, it } from 'bun:test';

import { getTabId, getTabPanelId } from './a11y';

describe('tabs accessibility ids', () => {
  it('creates stable ids from tab values', () => {
    expect(getTabId(undefined, 'Account Settings')).toBe('tabs-tab-Account-Settings');
    expect(getTabPanelId(undefined, 'Account Settings')).toBe('tabs-panel-Account-Settings');
  });

  it('namespaces ids by tabs testID when provided', () => {
    expect(getTabId('settings', 'billing')).toBe('settings-tabs-tab-billing');
    expect(getTabPanelId('settings', 'billing')).toBe('settings-tabs-panel-billing');
  });
});
