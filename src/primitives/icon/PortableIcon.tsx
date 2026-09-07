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
import {
  MaterialDesignIcons,
  type MaterialDesignIconsIconName,
} from '@react-native-vector-icons/material-design-icons/static';
import React from 'react';
import {
  Image,
  type StyleProp,
  StyleSheet,
  type TextStyle,
  View,
  type ViewStyle,
} from 'react-native';
import { SvgUri } from 'react-native-svg';

import type { SurfaceImageSource } from '../image';

export const SUPPORTED_ICON_PROVIDERS = [
  'Ionicons',
  'FontAwesome',
  'FontAwesome5',
  'FontAwesome6',
  'MaterialDesignIcons',
] as const;

export type IconProvider = (typeof SUPPORTED_ICON_PROVIDERS)[number];
export type IconVariant = 'regular' | 'solid' | 'brand';

export type FontIconSource =
  | { name: IoniconsIconName; provider?: 'Ionicons'; variant?: never }
  | { name: FontAwesomeIconName; provider: 'FontAwesome'; variant?: never }
  | { name: FontAwesome5RegularIconName; provider: 'FontAwesome5'; variant: 'regular' }
  | { name: FontAwesome5SolidIconName; provider: 'FontAwesome5'; variant: 'solid' }
  | { name: FontAwesome5BrandIconName; provider: 'FontAwesome5'; variant: 'brand' }
  | { name: FontAwesome6RegularIconName; provider: 'FontAwesome6'; variant: 'regular' }
  | { name: FontAwesome6SolidIconName; provider: 'FontAwesome6'; variant: 'solid' }
  | { name: FontAwesome6BrandIconName; provider: 'FontAwesome6'; variant: 'brand' }
  | { name: MaterialDesignIconsIconName; provider: 'MaterialDesignIcons'; variant?: never };

export interface SvgIconSource {
  source: SurfaceImageSource;
  name?: never;
  provider?: never;
  variant?: never;
}

export type IconSource = FontIconSource | SvgIconSource;

interface PortableIconPresentationProps {
  color: string;
  size: number;
  testID?: string;
}

type FontPortableIconProps = FontIconSource &
  PortableIconPresentationProps & {
    style?: StyleProp<TextStyle>;
  };

type SvgPortableIconProps = SvgIconSource &
  PortableIconPresentationProps & {
    style?: StyleProp<ViewStyle>;
  };

type PortableIconProps = FontPortableIconProps | SvgPortableIconProps;

type SharedIconProps = PortableIconPresentationProps & {
  style?: StyleProp<TextStyle>;
};

const styles = StyleSheet.create({
  bundledSvgImage: { height: '100%', width: '100%' },
});

/*** Resolve an SVG URI directly or through React Native's native bundled-asset API when available. */
function resolveSvgIconUri(source: SurfaceImageSource): string | null {
  if (typeof source === 'string') return source;
  if (!Array.isArray(source) && typeof source === 'object' && typeof source.uri === 'string') {
    return source.uri;
  }
  if (typeof Image.resolveAssetSource !== 'function') return null;

  return Image.resolveAssetSource(source).uri;
}

/*** Render URI-backed SVGs through SvgUri and let React Native Web resolve bundled numeric assets through Image. */
function renderSvgIcon(props: SvgPortableIconProps) {
  const uri = resolveSvgIconUri(props.source);
  if (uri) {
    return (
      <SvgUri
        color={props.color}
        height={props.size}
        style={props.style}
        testID={props.testID}
        uri={uri}
        width={props.size}
      />
    );
  }

  const imageSource = typeof props.source === 'string' ? { uri: props.source } : props.source;
  return (
    <View style={[{ height: props.size, width: props.size }, props.style]} testID={props.testID}>
      <Image source={imageSource} style={styles.bundledSvgImage} tintColor={props.color} />
    </View>
  );
}

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
  if ('source' in props) {
    return renderSvgIcon(props);
  }

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
    case 'MaterialDesignIcons':
      return <MaterialDesignIcons {...sharedProps} name={props.name} />;
    default:
      return assertNever(provider, 'provider');
  }
}
