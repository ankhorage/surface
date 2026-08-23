import { Platform, type StyleProp, type ViewProps, type ViewStyle } from 'react-native';

interface ResolvedPointerEvents {
  props: Pick<ViewProps, 'pointerEvents'>;
  style: StyleProp<ViewStyle>;
}

export function resolvePointerEvents(
  pointerEvents: NonNullable<ViewProps['pointerEvents']>,
): ResolvedPointerEvents {
  return resolvePointerEventsForPlatform(pointerEvents, Platform.OS);
}

export function resolvePointerEventsForPlatform(
  pointerEvents: NonNullable<ViewProps['pointerEvents']>,
  platform: typeof Platform.OS,
): ResolvedPointerEvents {
  if (platform === 'web') {
    return {
      props: {},
      style: { pointerEvents },
    };
  }

  return {
    props: { pointerEvents },
    style: null,
  };
}
