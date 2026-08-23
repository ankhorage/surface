import { type StyleProp, type TextStyle } from 'react-native';

import { resolveToken } from '../../theme/resolveToken';
import { useTheme } from '../../theme/ThemeContext';
import type { SurfaceTheme } from '../../theme/types';
import { type IconProvider, PortableIcon } from './PortableIcon';

export type { IconProvider } from './PortableIcon';

export interface IconProps {
  name: string;
  provider?: IconProvider;
  size?: keyof SurfaceTheme['spacing'] | number;
  color?: keyof SurfaceTheme['colors'] | string;
  style?: StyleProp<TextStyle>;
  testID?: string;
}

export function Icon({
  name,
  provider = 'Ionicons',
  size = 'm',
  color = 'text',
  style,
  testID,
}: IconProps) {
  const { theme } = useTheme();
  const resolvedSize = typeof size === 'number' ? size : resolveToken(theme.spacing, size);
  const resolvedColor = resolveToken(theme.colors, color);

  return (
    <PortableIcon
      color={resolvedColor}
      name={name}
      provider={provider}
      size={resolvedSize}
      style={style}
      testID={testID}
    />
  );
}
