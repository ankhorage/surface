import type { TextInputProps } from '../../types/text-input';

export interface TextareaProps extends Omit<TextInputProps, 'multiline'> {
  rows?: number;
}
