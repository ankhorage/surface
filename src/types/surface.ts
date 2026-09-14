import type { BoxProps } from './layout';

export type SurfaceVariant = 'default' | 'subtle' | 'raised' | 'outline';

export interface SurfaceProps extends Omit<BoxProps, 'bg' | 'borderColor' | 'borderWidth'> {
  variant?: SurfaceVariant;
}
