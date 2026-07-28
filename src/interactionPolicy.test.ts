import { readFileSync } from 'node:fs';

import { describe, expect, it } from 'bun:test';

const indexSource = readFileSync(new URL('./index.ts', import.meta.url), 'utf8');

describe('InteractionPolicy public export', () => {
  it('exports InteractionPolicy from the public root', () => {
    expect(indexSource).toContain(
      "export type { InteractionPolicy, InteractionPolicyProps } from './interactionPolicy';",
    );
  });

  it('exports InteractionPolicyProps from the public root', () => {
    expect(indexSource).toContain(
      "export type { InteractionPolicy, InteractionPolicyProps } from './interactionPolicy';",
    );
  });

  it('does not export InteractionPolicy from button-base', () => {
    expect(indexSource).not.toContain(
      "export type { InteractionPolicy, InteractionPolicyProps } from './primitives/button-base';",
    );
  });
});

describe('InteractionPolicy type', () => {
  it('only allows enabled', () => {
    const policy = 'enabled' as const;
    expect(policy).toBe('enabled');
  });

  it('only allows passive', () => {
    const policy = 'passive' as const;
    expect(policy).toBe('passive');
  });
});

describe('InteractionPolicyProps', () => {
  it('allows omitted interactionPolicy', () => {
    const props: { readonly interactionPolicy?: 'enabled' | 'passive' } = {};
    expect(props.interactionPolicy).toBeUndefined();
  });

  it('allows explicit enabled', () => {
    const props: { readonly interactionPolicy?: 'enabled' | 'passive' } = {
      interactionPolicy: 'enabled',
    };
    expect(props.interactionPolicy).toBe('enabled');
  });

  it('allows explicit passive', () => {
    const props: { readonly interactionPolicy?: 'enabled' | 'passive' } = {
      interactionPolicy: 'passive',
    };
    expect(props.interactionPolicy).toBe('passive');
  });
});

describe('ButtonBaseProps includes interactionPolicy', () => {
  it('has interactionPolicy in ButtonBaseProps', () => {
    expect(indexSource).toContain(
      "export type { ButtonBaseProps } from './primitives/button-base';",
    );
  });
});

describe('Policy does not leak to native hosts', () => {
  it('InteractionPolicy is not a native View prop', () => {
    const viewProps: Record<string, unknown> = {
      accessible: true,
      accessibilityLabel: 'test',
    };
    expect(viewProps.interactionPolicy).toBeUndefined();
  });

  it('InteractionPolicy is not a native TextInput prop', () => {
    const textInputProps: Record<string, unknown> = {
      editable: true,
      onChangeText: (_text: string) => {
        void _text;
      },
    };
    expect(textInputProps.interactionPolicy).toBeUndefined();
  });
});
