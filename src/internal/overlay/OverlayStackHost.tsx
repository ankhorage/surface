import { StyleSheet, View, type ViewStyle } from 'react-native';

import { resolvePointerEvents } from '../resolvePointerEvents';
import type { OverlayEntry } from './useOverlayStack';

const boxNonePointerEvents = resolvePointerEvents('box-none');
const styles = StyleSheet.create({
  fill: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

/*** Renders the ordered shared overlay stack into the active platform host. */
export function OverlayStackHost({ overlays }: { overlays: readonly OverlayEntry[] }) {
  return (
    <View {...boxNonePointerEvents.props} style={[boxNonePointerEvents.style, styles.fill]}>
      {overlays.map((overlay) => (
        <View
          {...boxNonePointerEvents.props}
          key={overlay.id}
          style={[boxNonePointerEvents.style, styles.fill, overlayZIndex(overlay.zIndex)]}
        >
          {overlay.node}
        </View>
      ))}
    </View>
  );
}

/*** Resolves a per-entry z-index style for the shared overlay host. */
function overlayZIndex(zIndex: number): ViewStyle {
  return { zIndex };
}
