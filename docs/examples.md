# Surface Examples

These are docs-lite composition references for ZORA and other downstream packages. They show intended usage patterns without introducing a full docs site or product-specific abstractions.

## Provider Shell

```tsx
import React from 'react';
import { Stack, Text, ThemeProvider } from '@ankhorage/surface';

export function AppShell() {
  return (
    <ThemeProvider initialConfig={themeConfig}>
      <Stack gap="m" p="l">
        <Text variant="body">App content</Text>
      </Stack>
    </ThemeProvider>
  );
}
```

## Form Composition

```tsx
import React from 'react';
import { Field, HelperText, Label, Stack, Switch, TextInput, Textarea } from '@ankhorage/surface';

export function ProfileForm() {
  return (
    <Stack gap="m">
      <Field helperText="Used for account notifications." label="Email">
        <TextInput autoCapitalize="none" keyboardType="email-address" />
      </Field>

      <Field errorText="Bio is required." invalid label="Bio">
        <Textarea />
      </Field>

      <Stack gap="xs">
        <Label>Preferences</Label>
        <Switch defaultChecked>Email updates</Switch>
        <HelperText tone="muted">Read-only fields stay focusable but do not mutate.</HelperText>
      </Stack>
    </Stack>
  );
}
```

## Modal Composition

```tsx
import React from 'react';
import { Button, Modal, Stack, Text } from '@ankhorage/surface';

export function ConfirmModal() {
  return (
    <Modal visible={open} onDismiss={() => setOpen(false)}>
      <Stack gap="m">
        <Text variant="body">Delete this item?</Text>
        <Button tone="danger">Delete</Button>
      </Stack>
    </Modal>
  );
}
```

## Drawer Usage

```tsx
import React from 'react';
import { Drawer, Stack, Text } from '@ankhorage/surface';

export function SettingsDrawer() {
  return (
    <Drawer onDismiss={() => setOpen(false)} visible={open}>
      <Stack gap="m">
        <Text variant="body">Drawer content</Text>
      </Stack>
    </Drawer>
  );
}
```

## Tabs Usage

```tsx
import React from 'react';
import { Tab, TabList, TabPanel, Tabs, Text } from '@ankhorage/surface';

export function AccountTabs() {
  return (
    <Tabs defaultValue="profile">
      <TabList>
        <Tab value="profile">Profile</Tab>
        <Tab value="security">Security</Tab>
      </TabList>
      <TabPanel value="profile">
        <Text>Profile content</Text>
      </TabPanel>
      <TabPanel value="security">
        <Text>Security content</Text>
      </TabPanel>
    </Tabs>
  );
}
```

## Image Usage

```tsx
import React from 'react';
import { Image, Stack, Text } from '@ankhorage/surface';

export function ProfileHeader() {
  return (
    <Stack gap="m">
      <Image
        alt="Avatar"
        fallbackSource="https://example.com/avatar-fallback.png"
        fit="cover"
        height={96}
        radius="full"
        source="https://example.com/avatar.png"
        width={96}
      />
      <Text variant="body">Welcome back</Text>
    </Stack>
  );
}
```

## Tab Bar Chrome (Router-Agnostic)

```tsx
import React from 'react';
import { TabBar, type NavigationItemSpec } from '@ankhorage/surface';

const items: NavigationItemSpec[] = [
  { id: 'home', label: 'Home', icon: { name: 'home-outline' }, active: true, onPress: () => {} },
  { id: 'search', label: 'Search', icon: { name: 'search-outline' }, onPress: () => {} },
  { id: 'profile', label: 'Profile', icon: { name: 'person-outline' }, onPress: () => {} },
];

export function BottomTabs() {
  return <TabBar items={items} />;
}
```

## Drawer Navigation Chrome (Router-Agnostic)

```tsx
import React from 'react';
import { DrawerNavigation, type NavigationItemSpec, Stack, Text } from '@ankhorage/surface';

const items: NavigationItemSpec[] = [
  { id: 'settings', label: 'Settings', icon: { name: 'settings-outline' }, onPress: () => {} },
  { id: 'help', label: 'Help', icon: { name: 'help-circle-outline' }, onPress: () => {} },
];

export function SettingsNav() {
  return (
    <DrawerNavigation
      header={
        <Stack gap="xs">
          <Text variant="body" weight="semiBold">
            Menu
          </Text>
        </Stack>
      }
      items={items}
    />
  );
}
```

## Menu Usage

```tsx
import React from 'react';
import { Menu, Text } from '@ankhorage/surface';

export function RowMenu() {
  return (
    <Menu
      items={[
        { id: 'rename', label: 'Rename', onPress: () => {} },
        { id: 'archive', label: 'Archive', onPress: () => {} },
      ]}
      trigger={<Text>Open menu</Text>}
    />
  );
}
```

## Checkbox, Radio, and Switch Usage

```tsx
import React from 'react';
import { Checkbox, Radio, Stack, Switch } from '@ankhorage/surface';

export function SelectionControls() {
  return (
    <Stack gap="s">
      <Checkbox defaultChecked>Email me updates</Checkbox>
      <Radio>Use card ending in 4242</Radio>
      <Switch readOnly>Managed by workspace policy</Switch>
    </Stack>
  );
}
```

## Theme Override

```tsx
import React from 'react';
import { Button, ThemeProvider } from '@ankhorage/surface';

export function BrandedCallToAction() {
  return (
    <ThemeProvider
      initialConfig={{
        id: 'brand',
        name: 'Brand',
        light: {
          primaryColor: '#0f766e',
          harmony: 'monochromatic',
          systemTone: 'neutral',
        },
        dark: {
          primaryColor: '#14b8a6',
          harmony: 'monochromatic',
          systemTone: 'neutral',
        },
      }}
    >
      <Button variant="soft">Continue</Button>
    </ThemeProvider>
  );
}
```
