import {
  FontAwesome,
  type FontAwesomeIconName,
} from '@react-native-vector-icons/fontawesome/static';
import {
  FontAwesome5,
  type FontAwesome5BrandIconName,
  type FontAwesome5RegularIconName,
  type FontAwesome5SolidIconName,
} from '@react-native-vector-icons/fontawesome5/static';
import {
  FontAwesome6,
  type FontAwesome6BrandIconName,
  type FontAwesome6RegularIconName,
  type FontAwesome6SolidIconName,
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
export type IconVariant = 'regular' | 'solid' | 'brand';

export type IconSource =
  | { name: IoniconsIconName; provider?: 'Ionicons'; variant?: never }
  | { name: FontAwesomeIconName; provider: 'FontAwesome'; variant?: never }
  | { name: FontAwesome5RegularIconName; provider: 'FontAwesome5'; variant: 'regular' }
  | { name: FontAwesome5SolidIconName; provider: 'FontAwesome5'; variant: 'solid' }
  | { name: FontAwesome5BrandIconName; provider: 'FontAwesome5'; variant: 'brand' }
  | { name: FontAwesome6RegularIconName; provider: 'FontAwesome6'; variant: 'regular' }
  | { name: FontAwesome6SolidIconName; provider: 'FontAwesome6'; variant: 'solid' }
  | { name: FontAwesome6BrandIconName; provider: 'FontAwesome6'; variant: 'brand' };

type PortableIconProps = IconSource & {
  color: string;
  size: number;
  style?: StyleProp<TextStyle>;
  testID?: string;
};

type SharedIconProps = Pick<PortableIconProps, 'color' | 'size' | 'style' | 'testID'>;

function assertNever(value: never, configuration: string): never {
  throw new Error(`Unsupported icon ${configuration}: ${String(value)}`);
}

function renderFontAwesome5(
  props: Extract<IconSource, { provider: 'FontAwesome5' }>,
  sharedProps: SharedIconProps,
) {
  const { variant } = props;

  switch (variant) {
    case 'brand':
      return <FontAwesome5 {...sharedProps} iconStyle="brand" name={props.name} />;
    case 'regular':
      return <FontAwesome5 {...sharedProps} iconStyle="regular" name={props.name} />;
    case 'solid':
      return <FontAwesome5 {...sharedProps} iconStyle="solid" name={props.name} />;
    default:
      return assertNever(variant, 'FontAwesome5 variant');
  }
}

function renderFontAwesome6(
  props: Extract<IconSource, { provider: 'FontAwesome6' }>,
  sharedProps: SharedIconProps,
) {
  const { variant } = props;

  switch (variant) {
    case 'brand':
      return <FontAwesome6 {...sharedProps} iconStyle="brand" name={props.name} />;
    case 'regular':
      return <FontAwesome6 {...sharedProps} iconStyle="regular" name={props.name} />;
    case 'solid':
      return <FontAwesome6 {...sharedProps} iconStyle="solid" name={props.name} />;
    default:
      return assertNever(variant, 'FontAwesome6 variant');
  }
}

export function PortableIcon(props: PortableIconProps) {
  const { provider } = props;
  const sharedProps = {
    color: props.color,
    size: props.size,
    style: props.style,
    testID: props.testID,
  };

  switch (provider) {
    case undefined:
    case 'Ionicons':
      return <Ionicons {...sharedProps} name={props.name} />;
    case 'FontAwesome':
      return <FontAwesome {...sharedProps} name={props.name} />;
    case 'FontAwesome5':
      return renderFontAwesome5(props, sharedProps);
    case 'FontAwesome6':
      return renderFontAwesome6(props, sharedProps);
    default:
      return assertNever(provider, 'provider');
  }
}
