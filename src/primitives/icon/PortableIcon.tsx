import {
  FontAwesome,
  type FontAwesomeIconName,
} from '@react-native-vector-icons/fontawesome/static';
import {
  FontAwesome5,
  type FontAwesome5BrandIconName,
} from '@react-native-vector-icons/fontawesome5/static';
import {
  FontAwesome6,
  type FontAwesome6BrandIconName,
} from '@react-native-vector-icons/fontawesome6/static';
import { Ionicons, type IoniconsIconName } from '@react-native-vector-icons/ionicons/static';
import React from 'react';
import { type StyleProp, type TextStyle } from 'react-native';

export const SUPPORTED_ICON_PROVIDERS = [
  'Ionicons',
  'FontAwesome',
  'FontAwesome5',
  'FontAwesome6',
] as const;

export type IconProvider = (typeof SUPPORTED_ICON_PROVIDERS)[number];

interface PortableIconProps {
  color: string;
  name: string;
  provider: IconProvider;
  size: number;
  style?: StyleProp<TextStyle>;
  testID?: string;
}

export function PortableIcon({ color, name, provider, size, style, testID }: PortableIconProps) {
  const sharedProps = { color, size, style, testID };

  switch (provider) {
    case 'FontAwesome':
      return <FontAwesome {...sharedProps} name={name as FontAwesomeIconName} />;
    case 'FontAwesome5':
      return (
        <FontAwesome5 {...sharedProps} iconStyle="brand" name={name as FontAwesome5BrandIconName} />
      );
    case 'FontAwesome6':
      return (
        <FontAwesome6 {...sharedProps} iconStyle="brand" name={name as FontAwesome6BrandIconName} />
      );
    case 'Ionicons':
      return <Ionicons {...sharedProps} name={name as IoniconsIconName} />;
  }
}
