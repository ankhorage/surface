import type { PopoverPlacement } from '../../../types/popover.js';

/*** Resolves a viewport-clamped anchored position for popover content. */
export function resolvePopoverPosition({
  anchor,
  contentSize,
  offset,
  placement,
  viewport,
  viewportPadding,
}: {
  anchor: { height: number; width: number; x: number; y: number };
  contentSize: { height: number; width: number };
  offset: number;
  placement: PopoverPlacement;
  viewport: { height: number; width: number };
  viewportPadding: number;
}): { left: number; maxHeight: number; top: number } {
  const maxHeight = Math.max(0, viewport.height - viewportPadding * 2);
  const boundedHeight = Math.min(contentSize.height, maxHeight);
  const anchorCenterX = anchor.x + anchor.width / 2;
  const rawLeft = placement.endsWith('-start')
    ? anchor.x
    : placement.endsWith('-end')
      ? anchor.x + anchor.width - contentSize.width
      : anchorCenterX - contentSize.width / 2;
  const belowHeight = viewport.height - viewportPadding - anchor.y - anchor.height - offset;
  const aboveHeight = anchor.y - viewportPadding - offset;
  const prefersTop = placement.startsWith('top');
  const useTop = resolveVerticalPlacement(prefersTop, aboveHeight, belowHeight, boundedHeight);
  const rawTop = useTop ? anchor.y - boundedHeight - offset : anchor.y + anchor.height + offset;
  const maxLeft = Math.max(viewportPadding, viewport.width - contentSize.width - viewportPadding);
  const maxTop = Math.max(viewportPadding, viewport.height - boundedHeight - viewportPadding);

  return {
    left: clamp(rawLeft, viewportPadding, maxLeft),
    maxHeight,
    top: clamp(rawTop, viewportPadding, maxTop),
  };
}

/*** Selects the preferred vertical side when it fits, otherwise the side with more usable space. */
function resolveVerticalPlacement(
  prefersTop: boolean,
  aboveHeight: number,
  belowHeight: number,
  contentHeight: number,
): boolean {
  const preferredHeight = prefersTop ? aboveHeight : belowHeight;
  const alternateHeight = prefersTop ? belowHeight : aboveHeight;
  if (preferredHeight >= contentHeight) return prefersTop;
  if (alternateHeight >= contentHeight) return !prefersTop;
  return aboveHeight > belowHeight;
}

/*** Clamps one numeric position into the available viewport range. */
function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(Math.max(value, minimum), maximum);
}
