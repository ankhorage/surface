import { describe, expect, mock, test } from 'bun:test';

const Ionicons = () => null;
const MaterialIcons = () => null;
const MaterialCommunityIcons = () => null;

describe('resolveExpoIconComponent', () => {
  test('returns the requested Expo icon family when it exists', async () => {
    await mock.module('@expo/vector-icons', () => ({
      Ionicons,
      MaterialCommunityIcons,
      MaterialIcons,
    }));

    const { resolveExpoIconComponent } = await import('./resolveExpoIconComponent');

    expect(resolveExpoIconComponent('Ionicons')).toBe(Ionicons);
    expect(resolveExpoIconComponent('MaterialIcons')).toBe(MaterialIcons);
    expect(resolveExpoIconComponent('MaterialCommunityIcons')).toBe(MaterialCommunityIcons);
  });

  test('resolves canonical provider aliases', async () => {
    await mock.module('@expo/vector-icons', () => ({
      Ionicons,
      MaterialCommunityIcons,
      MaterialIcons,
    }));

    const { resolveExpoIconComponent } = await import('./resolveExpoIconComponent');

    expect(resolveExpoIconComponent('ionicons')).toBe(Ionicons);
    expect(resolveExpoIconComponent('material-icons')).toBe(MaterialIcons);
    expect(resolveExpoIconComponent('material-community')).toBe(MaterialCommunityIcons);
    expect(resolveExpoIconComponent('material-community-icons')).toBe(MaterialCommunityIcons);
  });

  test('falls back to Ionicons when the provider is unknown', async () => {
    await mock.module('@expo/vector-icons', () => ({
      Ionicons,
      MaterialCommunityIcons,
      MaterialIcons,
    }));

    const { resolveExpoIconComponent } = await import('./resolveExpoIconComponent');

    expect(resolveExpoIconComponent('MissingIconFamily')).toBe(Ionicons);
  });
});
