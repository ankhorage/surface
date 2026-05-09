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

  test('resolves the canonical material-community provider id', async () => {
    await mock.module('@expo/vector-icons', () => ({
      Ionicons,
      MaterialCommunityIcons,
      MaterialIcons,
    }));

    const { resolveExpoIconComponent } = await import('./resolveExpoIconComponent');

    expect(resolveExpoIconComponent('material-community')).toBe(MaterialCommunityIcons);
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
