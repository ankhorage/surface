import { type StyleProp, type TextStyle, type ViewStyle } from 'react-native';

import { resolveToken } from '../../theme/resolveToken';
import { useTheme } from '../../theme/ThemeContext';
import type { SurfaceTheme } from '../../theme/types';
import { type FontIconSource, PortableIcon, type SvgIconSource } from './PortableIcon';

export type {
  FontIconSource,
  IconProvider,
  IconSource,
  IconVariant,
  SvgIconSource,
} from './PortableIcon';

interface IconPresentationProps {
  size?: keyof SurfaceTheme['spacing'] | number;
  color?: keyof SurfaceTheme['colors'] | string;
  testID?: string;
}

export type IconProps =
  | (FontIconSource & IconPresentationProps & { style?: StyleProp<TextStyle> })
  | (SvgIconSource & IconPresentationProps & { style?: StyleProp<ViewStyle> });

export function Icon(props: IconProps) {
  const { theme } = useTheme();
  const size = props.size ?? 'm';
  const color = props.color ?? 'text';
  const resolvedSize = typeof size === 'number' ? size : resolveToken(theme.spacing, size);
  const resolvedColor = resolveToken(theme.colors, color);

  return <PortableIcon {...props} color={resolvedColor} size={resolvedSize} />;
}
