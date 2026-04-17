import React from 'react';

import { resolveOverlayZIndex, type OverlayLayer } from '../resolvers/resolveOverlayZIndex';

export interface OverlayEntry {
  id: string;
  layer: OverlayLayer;
  node: React.ReactNode;
  order: number;
  zIndex: number;
}

export interface OverlayDescriptor {
  layer: OverlayLayer;
  node: React.ReactNode;
}

export interface OverlayStackRuntime {
  overlays: OverlayEntry[];
  setOverlay: (id: string, overlay: OverlayDescriptor) => void;
  removeOverlay: (id: string) => void;
}

export function sortOverlayEntries(entries: OverlayEntry[]): OverlayEntry[] {
  return [...entries].sort((left, right) =>
    left.zIndex === right.zIndex ? left.order - right.order : left.zIndex - right.zIndex,
  );
}

export const OverlayStackContext = React.createContext<OverlayStackRuntime | null>(null);

export function useOverlayStack(): OverlayStackRuntime | null {
  return React.useContext(OverlayStackContext);
}

export function createOverlayEntry(
  id: string,
  order: number,
  descriptor: OverlayDescriptor,
  stackIndex: number,
): OverlayEntry {
  return {
    id,
    layer: descriptor.layer,
    node: descriptor.node,
    order,
    zIndex: resolveOverlayZIndex(descriptor.layer, stackIndex),
  };
}
