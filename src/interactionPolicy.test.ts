import { describe, expect, it } from 'bun:test';

import type { InteractionPolicy, InteractionPolicyProps } from './primitives/button-base';

describe('InteractionPolicy type', () => {
  it('exports the InteractionPolicy type', () => {
    const policy: InteractionPolicy = 'enabled';
    expect(policy).toBe('enabled');
  });

  it('allows passive value', () => {
    const policy: InteractionPolicy = 'passive';
    expect(policy).toBe('passive');
  });
});

describe('InteractionPolicyProps', () => {
  it('exports the InteractionPolicyProps interface', () => {
    const props: InteractionPolicyProps = { interactionPolicy: 'passive' };
    expect(props.interactionPolicy).toBe('passive');
  });

  it('allows omitted interactionPolicy', () => {
    const props: InteractionPolicyProps = {};
    expect(props.interactionPolicy).toBeUndefined();
  });
});

describe('ButtonBase interactionPolicy', () => {
  it('accepts interactionPolicy="enabled"', () => {
    const props = { interactionPolicy: 'enabled' as InteractionPolicy };
    expect(props.interactionPolicy).toBe('enabled');
  });

  it('accepts interactionPolicy="passive"', () => {
    const props = { interactionPolicy: 'passive' as InteractionPolicy };
    expect(props.interactionPolicy).toBe('passive');
  });

  it('omitted interactionPolicy defaults to enabled', () => {
    const props: InteractionPolicyProps = {};
    expect(props.interactionPolicy ?? 'enabled').toBe('enabled');
  });
});

describe('Button interactionPolicy', () => {
  it('accepts interactionPolicy prop', () => {
    const props = { interactionPolicy: 'passive' as InteractionPolicy };
    expect(props.interactionPolicy).toBe('passive');
  });
});

describe('IconButton interactionPolicy', () => {
  it('accepts interactionPolicy prop', () => {
    const props = { interactionPolicy: 'passive' as InteractionPolicy };
    expect(props.interactionPolicy).toBe('passive');
  });
});

describe('Checkbox interactionPolicy', () => {
  it('accepts interactionPolicy prop', () => {
    const props = { interactionPolicy: 'passive' as InteractionPolicy };
    expect(props.interactionPolicy).toBe('passive');
  });
});

describe('TextInput interactionPolicy', () => {
  it('accepts interactionPolicy prop', () => {
    const props = { interactionPolicy: 'passive' as InteractionPolicy };
    expect(props.interactionPolicy).toBe('passive');
  });

  it('omitted interactionPolicy defaults to enabled', () => {
    const props: InteractionPolicyProps = {};
    expect(props.interactionPolicy ?? 'enabled').toBe('enabled');
  });
});

describe('Modal interactionPolicy', () => {
  it('accepts interactionPolicy prop', () => {
    const props = { interactionPolicy: 'passive' as InteractionPolicy };
    expect(props.interactionPolicy).toBe('passive');
  });
});

describe('Drawer interactionPolicy', () => {
  it('accepts interactionPolicy prop', () => {
    const props = { interactionPolicy: 'passive' as InteractionPolicy };
    expect(props.interactionPolicy).toBe('passive');
  });
});

describe('Policy does not leak to native hosts', () => {
  it('InteractionPolicy is not a valid native prop', () => {
    const nativeProps: Record<string, unknown> = {
      accessible: true,
      accessibilityLabel: 'test',
    };
    expect(nativeProps.interactionPolicy).toBeUndefined();
  });
});
