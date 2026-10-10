import type { Capability } from '@ankhorage/contracts/capability';

export const CAPABILITIES = [
  {
    id: 'theme.setMode',
    owner: '@ankhorage/surface',
    access: ['invoke'],
    binding: {
      kind: 'action',
      bindableAs: ['target'],
    },
    input: {
      schema: {
        type: 'object',
        required: ['mode'],
        properties: {
          mode: {
            type: 'string',
            enum: ['light', 'dark'],
          },
        },
        additionalProperties: false,
      },
    },
  },
] as const satisfies readonly Capability[];
