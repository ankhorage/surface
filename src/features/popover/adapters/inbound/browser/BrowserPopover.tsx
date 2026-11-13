import React from 'react';

import { useControllableState } from '../../../../../internal/useControllableState';
import type { PopoverProps } from '../../../../../types/popover';

/*** Renders the browser-only Popover without loading React Native implementation modules. */
export function BrowserPopover(props: PopoverProps) {
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
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

  React.useEffect(() => {
    if (!open || !props.closeOnOutsidePress) return;
    const closeOnOutsidePress = (event: PointerEvent) => {
      const { target } = event;
      if (!(target instanceof Node)) return;
      if (anchorRef.current?.contains(target) || contentRef.current?.contains(target)) return;
      close();
    };
    document.addEventListener('pointerdown', closeOnOutsidePress);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePress);
  }, [close, open, props.closeOnOutsidePress]);

  return (
    <div
      ref={anchorRef}
      style={anchorStyle}
      data-testid={props.testID ? `${props.testID}-anchor` : undefined}
    >
      {props.anchor({ close, open, toggle })}
      {open ? (
        <div
          ref={contentRef}
          data-testid={props.testID ? `${props.testID}-content` : undefined}
          role="dialog"
          style={contentStyle(props)}
        >
          {props.children}
        </div>
      ) : null}
    </div>
  );
}

/*** Position browser content relative to its anchor using the shared Popover placement contract. */
function contentStyle(props: PopoverProps): React.CSSProperties {
  const offset = props.offset ?? 8;
  const placement = props.placement ?? 'bottom-start';
  return {
    ...baseContentStyle,
    ...(placement.startsWith('top')
      ? { bottom: `calc(100% + ${offset}px)` }
      : { top: `calc(100% + ${offset}px)` }),
    ...(placement.endsWith('end')
      ? { right: 0 }
      : placement.endsWith('start')
        ? { left: 0 }
        : { left: '50%', transform: 'translateX(-50%)' }),
  };
}

const anchorStyle: React.CSSProperties = { display: 'inline-block', position: 'relative' };

const baseContentStyle: React.CSSProperties = {
  position: 'absolute',
  zIndex: 1,
};
