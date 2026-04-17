import type { AnkhTheme, RoleSemantics } from '../../theme/types';

export type ComponentTone = 'primary' | 'neutral' | 'danger' | 'success' | 'warning';

export function resolveTone(theme: AnkhTheme, tone: ComponentTone = 'primary'): RoleSemantics {
  switch (tone) {
    case 'neutral':
      return theme.semantics.action.neutral;
    case 'danger':
      return theme.semantics.action.danger;
    case 'success':
      return theme.semantics.success;
    case 'warning':
      return theme.semantics.warning;
    case 'primary':
    default:
      return theme.semantics.action.primary;
  }
}
