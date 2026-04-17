import type { TextInputProps } from '../text-input';

export interface TextareaProps extends Omit<TextInputProps, 'multiline'> {
  rows?: number;
}
