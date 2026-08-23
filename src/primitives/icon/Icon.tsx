import { type StyleProp, type TextStyle } from 'react-native';

import { resolveToken } from '../../theme/resolveToken';
import { useTheme } from '../../theme/ThemeContext';
import type { SurfaceTheme } from '../../theme/types';
import { type IconSource, PortableIcon } from './PortableIcon';

export type { IconProvider, IconSource, IconVariant } from './PortableIcon';

interface IconPresentationProps {
  size?: keyof SurfaceTheme['spacing'] | number;
  color?: keyof SurfaceTheme['colors'] | string;
  style?: StyleProp<TextStyle>;
  testID?: string;
}

export type IconProps = IconSource & IconPresentationProps;

export function Icon(props: IconProps) {
  const { theme } = useTheme();
  const size = props.size ?? 'm';
  const color = props.color ?? 'text';
  const resolvedSize = typeof size === 'number' ? size : resolveToken(theme.spacing, size);
  const resolvedColor = resolveToken(theme.colors, color);

  return <PortableIcon {...props} color={resolvedColor} size={resolvedSize} />;
}
