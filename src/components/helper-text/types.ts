import type React from 'react';

import type { TextTone } from '../../internal/resolvers/resolveTextColor';

export interface HelperTextProps {
  children?: React.ReactNode;
  tone?: Extract<TextTone, 'default' | 'muted' | 'danger'>;
  testID?: string;
}
