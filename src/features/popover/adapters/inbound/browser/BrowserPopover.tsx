import React from 'react';
import { createPortal } from 'react-dom';

import { useControllableState } from '../../../../../internal/useControllableState';
import type { PopoverProps } from '../../../../../types/popover';

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
  const anchorRect = useBrowserPopoverAnchorRect(anchorRef, open);
  const content = renderBrowserPopoverContent(props, anchorRect, setContentElement, open);
  return (
    <>
      <div
        ref={anchorRef}
        style={anchorStyle}
        data-testid={props.testID ? `${props.testID}-anchor` : undefined}
      >
        {props.anchor({ close, open, toggle })}
      </div>
      {content === null || typeof document === 'undefined'
        ? null
        : createPortal(content, document.body)}
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
  anchorRect: DOMRect | null,
  setContentElement: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>,
  open: boolean,
): React.ReactNode {
  if (!open || anchorRect === null) return null;
  return (
    <div
      ref={setContentElement}
      data-testid={props.testID ? `${props.testID}-content` : undefined}
      role="dialog"
      style={contentStyle(props, anchorRect)}
    >
      {props.children}
    </div>
  );
}

/*** Tracks the anchor in viewport coordinates while the browser overlay is visible. */
function useBrowserPopoverAnchorRect(
  anchorRef: React.RefObject<HTMLDivElement | null>,
  open: boolean,
): DOMRect | null {
  const [anchorRect, setAnchorRect] = React.useState<DOMRect | null>(null);
  React.useLayoutEffect(() => {
    if (!open) return;
    const anchor = anchorRef.current;
    if (anchor === null) return;
    const updateAnchorRect = () => setAnchorRect(anchor.getBoundingClientRect());
    updateAnchorRect();
    window.addEventListener('resize', updateAnchorRect);
    window.addEventListener('scroll', updateAnchorRect, true);
    return () => {
      window.removeEventListener('resize', updateAnchorRect);
      window.removeEventListener('scroll', updateAnchorRect, true);
    };
  }, [anchorRef, open]);
  return anchorRect;
}

/*** Position browser content in the document overlay using the shared Popover placement contract. */
function contentStyle(props: PopoverProps, anchorRect: DOMRect): React.CSSProperties {
  const offset = props.offset ?? 8;
  const placement = props.placement ?? 'bottom-start';
  const verticalPosition = placement.startsWith('top')
    ? { bottom: window.innerHeight - anchorRect.top + offset }
    : { top: anchorRect.bottom + offset };
  const horizontalPosition = placement.endsWith('end')
    ? { left: anchorRect.right, transform: 'translateX(-100%)' }
    : placement.endsWith('start')
      ? { left: anchorRect.left }
      : { left: anchorRect.left + anchorRect.width / 2, transform: 'translateX(-50%)' };
  return { ...baseContentStyle, ...verticalPosition, ...horizontalPosition };
}

const anchorStyle: React.CSSProperties = { display: 'inline-block' };
const baseContentStyle: React.CSSProperties = {
  pointerEvents: 'auto',
  position: 'fixed',
  zIndex: 1000,
};
