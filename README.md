# @ankhorage/surface

`@ankhorage/surface` is the render-foundation package extracted from Ankhorage.
It owns layout primitives, responsive helpers, theming, typography, generic font and
translation bridges, built-in Expo-backed icon rendering, and a reusable component layer for
common application UI, form composition, overlays, and lightweight navigation patterns.

It does not own manifest rendering, action execution, Studio authoring, plugin orchestration,
or CLI generation. Those concerns stay in the Ankhorage monorepo.

## Installation

Install Surface with its required shared contract package and React Native peers:

```bash
bun add @ankhorage/surface @ankhorage/contracts
bun add react react-native
```

If you use the built-in `Icon` primitive, install the Expo icon peers in the host app too:

```bash
bun add @expo/vector-icons expo-font
```

## Basic Usage

```tsx
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Drawer,
  Field,
  Heading,
  HelperText,
  Label,
  Menu,
  Modal,
  Radio,
  Stack,
  Switch,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Text,
  Textarea,
  TextInput,
  ThemeProvider,
  ToastProvider,
  Tooltip,
} from '@ankhorage/surface';

const theme = {
  id: 'app',
  name: 'App',
  light: {
    primaryColor: '#2563eb',
    harmony: 'monochromatic',
    systemTone: 'neutral',
  },
  dark: {
    primaryColor: '#2563eb',
    harmony: 'monochromatic',
    systemTone: 'neutral',
  },
};

export function Example() {
  return (
    <ThemeProvider initialConfig={theme}>
      <ToastProvider>
        <Stack gap="m" p="m">
          <Heading level={1}>Surface</Heading>
          <Text tone="muted">
            Render foundations plus form controls, overlays, and lightweight navigation.
          </Text>
          <Card p="m">
            <Stack gap="s">
              <Badge content="Phase 3" />
              <Field helperText="We only use this to sign you in." label="Email" required>
                <TextInput placeholder="you@example.com" />
              </Field>
              <Field errorText="Tell us a bit more." invalid label="Bio">
                <Textarea placeholder="A short introduction" rows={4} />
              </Field>
              <Label required>Preferences</Label>
              <Checkbox defaultChecked>Email updates</Checkbox>
              <Radio defaultChecked>Starter plan</Radio>
              <Switch>Enable notifications</Switch>
              <HelperText tone="muted">No form engine required.</HelperText>
              <Tabs defaultValue="account">
                <TabList>
                  <Tab value="account">Account</Tab>
                  <Tab value="billing">Billing</Tab>
                </TabList>
                <TabPanel value="account">
                  <Text>Account settings</Text>
                </TabPanel>
                <TabPanel value="billing">
                  <Text>Billing settings</Text>
                </TabPanel>
              </Tabs>
              <Tooltip content="Open quick actions">
                <Button leadingIcon={{ name: 'sparkles', provider: 'Ionicons' }}>
                  Ship UI
                </Button>
              </Tooltip>
            </Stack>
          </Card>
          <Menu
            items={[{ id: 'duplicate', label: 'Duplicate' }, { id: 'archive', label: 'Archive' }]}
            trigger={<Button variant="ghost">Open Menu</Button>}
          />
          <Modal visible={false}>
            <Text>Dialog content</Text>
          </Modal>
          <Drawer visible={false}>
            <Text>Drawer content</Text>
          </Drawer>
        </Stack>
      </ToastProvider>
    </ThemeProvider>
  );
}
```

## Included APIs

Surface currently includes:

- layout primitives: `Box`, `Center`, `Container`, `Divider`, `Grid`, `Inline`, `Show`, `Spacer`, `Stack`, `Surface`, `Template`
- text and icon primitives: `Text`, `Heading`, `Icon`
- interaction primitive: `ButtonBase`
- display and action components: `Badge`, `Button`, `Card`, `IconButton`, `ListItem`
- form composition components: `Field`, `HelperText`, `Label`
- form controls: `TextInput`, `Textarea`, `Checkbox`, `Radio`, `Switch`
- overlay and navigation components: `Modal`, `Drawer`, `Menu`, `Tabs`, `TabList`, `Tab`, `TabPanel`, `Toast`, `ToastProvider`, `Tooltip`
- theme creation and theme context
- responsive utilities
- generic font and translation bridges

All public APIs are exported from the package root.

## Theming

Serialized theme configuration types are imported from `@ankhorage/contracts`.
Surface owns theme creation, resolved runtime theme objects, token lookup, and component
consumption of those tokens. Theme generation exposes neutral and role semantics plus component-
facing aliases for surfaces, content, borders, and primary interaction tones.

## Scope

`@ankhorage/surface` includes:

- layout primitives
- text, heading, icon, and interaction primitives
- reusable display, form, overlay, and lightweight navigation components
- theme creation and theme context
- responsive utilities
- generic font and translation bridges
- render-only utilities

`@ankhorage/surface` does not include:

- manifest rendering
- runtime action execution
- Studio panels or authoring metadata
- CLI or project scaffolding logic
- low-code configuration workflows
