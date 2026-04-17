import React from 'react';

import { TextInput } from '../text-input';
import type { TextareaProps } from './types';

export function Textarea({ rows = 4, numberOfLines, style, ...props }: TextareaProps) {
  return (
    <TextInput
      {...props}
      multiline
      numberOfLines={numberOfLines ?? rows}
      style={[{ textAlignVertical: 'top' }, style]}
    />
  );
}
