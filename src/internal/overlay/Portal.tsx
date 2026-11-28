import React from 'react';

import type { OverlayLayer } from '../resolvers/resolveOverlayZIndex.js';
import { useOverlayStackActions } from './useOverlayStack.js';

let portalCounter = 0;

export interface PortalProps {
  children?: React.ReactNode;
  layer?: OverlayLayer;
  visible?: boolean;
  onDismiss?: () => void;
}

export function Portal({ children, layer = 'modal', onDismiss, visible = true }: PortalProps) {
  const overlayActions = useOverlayStackActions();
  const idRef = React.useRef(`surface-portal-${portalCounter++}`);

  React.useEffect(() => {
    if (!overlayActions || !visible) {
      return undefined;
    }
    const id = idRef.current;

    return () => {
      overlayActions.removeOverlay(id);
    };
  }, [overlayActions, visible]);

  React.useEffect(() => {
    if (!overlayActions || !visible) {
      return;
    }

    if (children === undefined || children === null) {
      overlayActions.removeOverlay(idRef.current);
      return;
    }

    overlayActions.setOverlay(idRef.current, {
      layer,
      node: children,
      onDismiss,
    });
  }, [children, layer, onDismiss, overlayActions, visible]);

  if (!overlayActions) {
    return visible ? <>{children}</> : null;
  }

  return null;
}
