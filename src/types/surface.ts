import type { ViewProps } from './layout.js';

export type SurfaceVariant = 'default' | 'subtle' | 'raised' | 'outline';

export interface SurfaceProps extends Omit<ViewProps, 'bg' | 'borderColor' | 'borderWidth'> {
  variant?: SurfaceVariant;
}
