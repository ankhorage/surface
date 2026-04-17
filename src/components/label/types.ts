import type React from 'react';

import type { TextTone } from '../../internal/resolvers/resolveTextColor';

export interface LabelProps {
  children?: React.ReactNode;
  required?: boolean;
  tone?: Extract<TextTone, 'default' | 'muted' | 'danger'>;
  testID?: string;
}
