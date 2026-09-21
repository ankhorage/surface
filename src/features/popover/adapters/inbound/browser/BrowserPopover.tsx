import React from 'react';

import { Portal } from '../../../../../internal/overlay/Portal.js';
import { useControllableState } from '../../../../../internal/useControllableState.js';
import type { PopoverProps } from '../../../../../types/popover.js';
import { resolvePopoverPosition } from '../../../utils/resolvePopoverPosition.js';

const VIEWPORT_PADDING = 8;

/*** Renders the browser-only Popover without loading React Native implementation modules. */
export function BrowserPopover(props: PopoverProps) {
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [contentElement, setContentElement] = React.useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useControllableState<boolean>({
    defaultValue: props.defaultOpen ?? false,
    onChange: props.onOpenChange,
    value: props.open,
  });
  const passive = props.interactionPolicy === 'passive';
  const close = React.useCallback(() => {
    if (!passive) setOpen(false);
  }, [passive, setOpen]);
  const toggle = React.useCallback(() => {
    if (!passive) setOpen(!open);
  }, [open, passive, setOpen]);
  useBrowserPopoverDismissal(anchorRef, close, contentElement, open, props.closeOnOutsidePress);
  const layout = useBrowserPopoverLayout(anchorRef, contentElement, open);
  const content = renderBrowserPopoverContent(props, layout, setContentElement, open);
  return (
    <>
      <div
        ref={anchorRef}
        style={anchorStyle}
        data-testid={props.testID ? `${props.testID}-anchor` : undefined}
      >
        {props.anchor({ close, open, toggle })}
      </div>
      <Portal layer="popover" visible={open}>
        {content}
      </Portal>
    </>
  );
}

/*** Closes the open browser overlay for a true outside pointer press or Escape. */
function useBrowserPopoverDismissal(
  anchorRef: React.RefObject<HTMLDivElement | null>,
  close: () => void,
  contentElement: HTMLDivElement | null,
  open: boolean,
  closeOnOutsidePress: boolean | undefined,
): void {
  React.useEffect(() => {
    if (!open) return;
    const closeOnPointerDown = (event: PointerEvent) => {
      const { target } = event;
      if (!(target instanceof Node)) return;
      if (anchorRef.current?.contains(target) || contentElement?.contains(target)) return;
      if (closeOnOutsidePress !== false) close();
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('pointerdown', closeOnPointerDown);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnPointerDown);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [anchorRef, close, closeOnOutsidePress, contentElement, open]);
}

/*** Create portal content only after the browser anchor has viewport coordinates. */
function renderBrowserPopoverContent(
  props: PopoverProps,
  layout: BrowserPopoverLayout | null,
  setContentElement: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>,
  open: boolean,
): React.ReactNode {
  if (!open) return null;
  return (
    <div
      ref={setContentElement}
      data-testid={props.testID ? `${props.testID}-content` : undefined}
      role="dialog"
      style={contentStyle(props, layout)}
    >
      {props.children}
    </div>
  );
}

/*** Tracks the anchor in viewport coordinates while the browser overlay is visible. */
function useBrowserPopoverLayout(
  anchorRef: React.RefObject<HTMLDivElement | null>,
  contentElement: HTMLDivElement | null,
  open: boolean,
): BrowserPopoverLayout | null {
  const [layout, setLayout] = React.useState<BrowserPopoverLayout | null>(null);
  React.useLayoutEffect(() => {
    if (!open) return;
    const anchor = anchorRef.current;
    if (anchor === null) return;
    const updateLayout = () => {
      const anchorRect = anchor.getBoundingClientRect();
      const contentRect = contentElement?.getBoundingClientRect();
      if (contentRect === undefined) return;
      setLayout({
        anchor: {
          height: anchorRect.height,
          width: anchorRect.width,
          x: anchorRect.x,
          y: anchorRect.y,
        },
        contentSize: { height: contentRect.height, width: contentRect.width },
        viewport: { height: window.innerHeight, width: window.innerWidth },
      });
    };
    updateLayout();
    window.addEventListener('resize', updateLayout);
    window.addEventListener('scroll', updateLayout, true);
    const observer =
      typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(updateLayout);
    observer?.observe(anchor);
    if (contentElement) observer?.observe(contentElement);
    return () => {
      window.removeEventListener('resize', updateLayout);
      window.removeEventListener('scroll', updateLayout, true);
      observer?.disconnect();
    };
  }, [anchorRef, contentElement, open]);
  return layout;
}

/*** Position browser content in the document overlay using the shared Popover placement contract. */
function contentStyle(
  props: PopoverProps,
  layout: BrowserPopoverLayout | null,
): React.CSSProperties {
  if (layout === null)
    return {
      ...baseContentStyle,
      left: VIEWPORT_PADDING,
      top: VIEWPORT_PADDING,
      visibility: 'hidden',
    };
  const position = resolvePopoverPosition({
    anchor: layout.anchor,
    contentSize: layout.contentSize,
    offset: props.offset ?? 8,
    placement: props.placement ?? 'bottom-start',
    viewport: layout.viewport,
    viewportPadding: VIEWPORT_PADDING,
  });
  return { ...baseContentStyle, ...position, overflowY: 'auto' };
}

interface BrowserPopoverLayout {
  anchor: { height: number; width: number; x: number; y: number };
  contentSize: { height: number; width: number };
  viewport: { height: number; width: number };
}

const anchorStyle: React.CSSProperties = { display: 'inline-block' };
const baseContentStyle: React.CSSProperties = {
  pointerEvents: 'auto',
  position: 'fixed',
};
