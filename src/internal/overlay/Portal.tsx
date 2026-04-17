import React from 'react';

import { useOverlayStack } from './useOverlayStack';
import type { OverlayLayer } from '../resolvers/resolveOverlayZIndex';

let portalCounter = 0;

export interface PortalProps {
  children?: React.ReactNode;
  layer?: OverlayLayer;
  visible?: boolean;
}

export function Portal({ children, layer = 'modal', visible = true }: PortalProps) {
  const overlayStack = useOverlayStack();
  const idRef = React.useRef(`surface-portal-${portalCounter++}`);

  React.useEffect(() => {
    if (!overlayStack || !visible || children === undefined || children === null) {
      return undefined;
    }

    overlayStack.setOverlay(idRef.current, {
      layer,
      node: children,
    });

    return () => {
      overlayStack.removeOverlay(idRef.current);
    };
  }, [children, layer, overlayStack, visible]);

  if (!overlayStack) {
    return visible ? <>{children}</> : null;
  }

  return null;
}
