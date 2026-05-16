import React from 'react';

import {
  Badge,
  Box,
  Button,
  Checkbox,
  Drawer,
  Field,
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
} from '../index';

const docsThemeConfig = {
  id: 'docs-example',
  name: 'Docs Example',
  light: {
    harmony: 'monochromatic' as const,
    primaryColor: '#2563eb',
  },
  dark: {
    harmony: 'monochromatic' as const,
    primaryColor: '#2563eb',
  },
};

export function ProviderExample() {
  return (
    <ThemeProvider initialConfig={docsThemeConfig}>
      <Stack gap="m" p="l">
        <Text variant="body">Surface starter</Text>
        <Badge color="success" content="Foundation" />
        <Button color="warning" variant="soft">
          Continue
        </Button>
      </Stack>
    </ThemeProvider>
  );
}

export function FormAndOverlayExample() {
  return (
    <ThemeProvider initialConfig={docsThemeConfig}>
      <Stack gap="m" p="l">
        <Field helperText="We only use this for sign-in." label="Email">
          <TextInput placeholder="name@example.com" />
        </Field>
        <Field errorText="Bio is required." invalid label="Bio">
          <Textarea placeholder="Tell us a little about yourself" />
        </Field>
        <Stack gap="s">
          <Label required>Preferences</Label>
          <Checkbox defaultChecked>Weekly updates</Checkbox>
          <Radio>Product announcements</Radio>
          <Switch readOnly>Read-only setting</Switch>
          <HelperText color="danger">Invalid fields should reuse the same danger color.</HelperText>
        </Stack>
        <Modal visible={false}>
          <Text>Modal content</Text>
        </Modal>
        <Drawer visible={false}>
          <Text>Drawer content</Text>
        </Drawer>
      </Stack>
    </ThemeProvider>
  );
}

export function NavigationExample() {
  return (
    <ThemeProvider initialConfig={docsThemeConfig}>
      <Stack gap="m" p="l">
        <Tabs defaultValue="account">
          <TabList>
            <Tab value="account">Account</Tab>
            <Tab disabled value="security">
              Security
            </Tab>
            <Tab value="billing">Billing</Tab>
          </TabList>
          <TabPanel value="account">
            <Text>Account settings</Text>
          </TabPanel>
          <TabPanel value="billing">
            <Text>Billing settings</Text>
          </TabPanel>
        </Tabs>
        <Menu
          items={[
            { id: 'edit', label: 'Edit' },
            { disabled: true, id: 'archive', label: 'Archive' },
          ]}
          trigger={<Text>Open menu</Text>}
        />
        <Box>
          <Text color="success">Theme overrides can stay semantic.</Text>
        </Box>
      </Stack>
    </ThemeProvider>
  );
}
