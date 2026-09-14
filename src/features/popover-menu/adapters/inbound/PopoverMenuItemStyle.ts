import type { ViewStyle } from 'react-native';

/*** Resolves the visual state of one PopoverMenu action row. */
export function PopoverMenuItemStyle({
  disabled,
  selected,
  selectedBackground,
}: {
  disabled: boolean | undefined;
  selected: boolean;
  selectedBackground: string;
}): ViewStyle {
  return {
    backgroundColor: selected ? selectedBackground : 'transparent',
    opacity: disabled ? 0.56 : 1,
  };
}
