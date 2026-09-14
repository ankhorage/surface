import React from 'react';
import { Pressable } from 'react-native';

import { Box, Stack } from '../../../layout/public';
import { Popover } from '../../../popover/public';
import { Surface } from '../../../surface/public';
import { Text } from '../../../typography/public';
import { FocusScope } from '../../../../internal/focus/FocusScope';
import { useFocusManager } from '../../../../internal/focus/useFocusManager';
import { Inline } from '../../../../layout';
import { ButtonBase } from '../../../../primitives/button-base';
import { useTheme } from '../../../../theme/ThemeContext';
import type { PopoverMenuAction, PopoverMenuProps } from '../../../../types/popoverMenu';
import { resolveNextMenuIndex } from '../../utils/resolveNextMenuIndex';

/*** Presents an anchored action menu using the shared Popover foundation. */
export function PopoverMenu({
  trigger,
  actions,
  dismiss,
  closeOnSelect = true,
  interactionPolicy = 'enabled',
  testID,
}: PopoverMenuProps) {
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const passive = interactionPolicy === 'passive';
  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      if (nextOpen) setActiveIndex(resolveInitialIndex(actions));
      setOpen(nextOpen);
      if (!nextOpen) dismiss?.();
    },
    [actions, dismiss],
  );
  const activateAction = React.useCallback(
    (action: PopoverMenuAction) => {
      if (action.disabled || passive) return;
      action.activate?.();
      if (closeOnSelect) handleOpenChange(false);
    },
    [closeOnSelect, handleOpenChange, passive],
  );

  return (
    <Popover
      closeOnOutsidePress
      interactionPolicy={interactionPolicy}
      onOpenChange={handleOpenChange}
      open={open}
      placement="bottom-start"
      testID={testID}
      anchor={({ toggle }) => (
        <ButtonBase onPress={passive ? undefined : toggle} testID={testID ? `${testID}-trigger` : undefined}>
          {trigger}
        </ButtonBase>
      )}
    >
      <PopoverMenuContent
        actions={actions}
        activeIndex={activeIndex}
        activateAction={activateAction}
        close={() => handleOpenChange(false)}
        open={open}
        passive={passive}
        setActiveIndex={setActiveIndex}
        testID={testID}
      />
    </Popover>
  );
}

interface PopoverMenuContentProps {
  actions: readonly PopoverMenuAction[];
  activeIndex: number;
  activateAction: (action: PopoverMenuAction) => void;
  close: () => void;
  open: boolean;
  passive: boolean;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  testID?: string;
}

/*** Renders menu semantics and keyboard navigation inside an open Popover. */
function PopoverMenuContent({
  actions,
  activeIndex,
  activateAction,
  close,
  open,
  passive,
  setActiveIndex,
  testID,
}: PopoverMenuContentProps) {
  usePopoverMenuKeyboard({ actions, activeIndex, activateAction, close, open, passive, setActiveIndex });

  return (
    <FocusScope active={open} onEscape={passive ? undefined : close}>
      <Surface accessibilityRole="menu" p="xs" testID={testID} variant="raised">
        {actions.map((action, index) => (
          <PopoverMenuItem
            action={action}
            active={index === activeIndex}
            activateAction={activateAction}
            key={action.id}
            passive={passive}
            testID={testID}
          />
        ))}
      </Surface>
    </FocusScope>
  );
}

/*** Subscribes an open PopoverMenu to standard menu keyboard controls. */
function usePopoverMenuKeyboard({
  actions,
  activeIndex,
  activateAction,
  close,
  open,
  passive,
  setActiveIndex,
}: Omit<PopoverMenuContentProps, 'testID'>) {
  const { bindKeydown } = useFocusManager();

  React.useEffect(() => {
    if (!open) return undefined;
    return bindKeydown((event) => {
      if (passive) return;
      if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
        event.preventDefault();
        setActiveIndex((current) => resolveNextMenuIndex(actions, current, event.key));
      } else if (event.key === 'Enter') {
        event.preventDefault();
        const action = actions[activeIndex];
        if (action) activateAction(action);
      } else if (event.key === 'Escape') {
        event.preventDefault();
        close();
      }
    });
  }, [actions, activeIndex, activateAction, bindKeydown, close, open, passive, setActiveIndex]);
}

/*** Renders one accessible PopoverMenu action row. */
function PopoverMenuItem({
  action,
  active,
  activateAction,
  passive,
  testID,
}: {
  action: PopoverMenuAction;
  active: boolean;
  activateAction: (action: PopoverMenuAction) => void;
  passive: boolean;
  testID?: string;
}) {
  const { theme } = useTheme();
  const selected = action.selected ?? active;

  return (
    <Pressable
      accessibilityRole="menuitem"
      accessibilityState={{ disabled: action.disabled, selected }}
      disabled={action.disabled}
      onPress={passive ? undefined : () => activateAction(action)}
      testID={testID ? `${testID}-item-${action.id}` : undefined}
    >
      <Box
        px="m"
        py="s"
        radius="s"
        style={{
          backgroundColor: selected ? theme.semantics.action.neutral.softBg : 'transparent',
          opacity: action.disabled ? 0.56 : 1,
        }}
      >
        <PopoverMenuItemContent action={action} active={active} />
      </Box>
    </Pressable>
  );
}

/*** Renders the leading, textual and trailing content of one menu action. */
function PopoverMenuItemContent({ action, active }: { action: PopoverMenuAction; active: boolean }) {
  const titleColor =
    action.intent === 'danger' ? 'danger' : active || action.selected ? 'neutral' : undefined;

  return (
    <Inline align="center" gap="s" justify="space-between" wrap="nowrap">
      {action.leading ? <Box>{action.leading}</Box> : null}
      <Box flex={1}>
        <Stack gap="xxs">
          <Text color={titleColor} variant="bodySmall" weight={action.selected ? 'semiBold' : 'medium'}>
            {action.title}
          </Text>
          {action.description ? <Text emphasis="muted" variant="caption">{action.description}</Text> : null}
        </Stack>
      </Box>
      {action.trailing ? <Box>{action.trailing}</Box> : null}
    </Inline>
  );
}

/*** Returns the first enabled action index for a newly opened menu. */
function resolveInitialIndex(actions: readonly PopoverMenuAction[]): number {
  const index = actions.findIndex((action) => !action.disabled);
  return index === -1 ? 0 : index;
}
