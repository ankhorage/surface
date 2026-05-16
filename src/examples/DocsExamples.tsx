import React from 'react';

import { Button } from '../components/button';
import { Card } from '../components/card';
import { Checkbox } from '../components/checkbox';
import { Drawer } from '../components/drawer';
import { Field } from '../components/field';
import { HelperText } from '../components/helper-text';
import { Menu } from '../components/menu';
import { Modal } from '../components/modal';
import { Tab, TabList, TabPanel, Tabs } from '../components/tabs';
import { TextInput } from '../components/text-input';
import { ToastProvider, useToast } from '../components/toast';
import { Tooltip } from '../components/tooltip';
import { Box, Stack } from '../layout';
import { Text } from '../primitives/text';
import { ThemeProvider } from '../theme';
import type { ThemeConfig } from '../theme/types';

const docsThemeConfig: ThemeConfig = {
  id: 'docs',
  name: 'Docs',
  light: { primaryColor: '#2563EB', harmony: 'analogous' },
  dark: { primaryColor: '#60A5FA', harmony: 'analogous' },
};

export function FormExample() {
  return (
    <ThemeProvider initialConfig={docsThemeConfig}>
      <Stack gap="m" p="l">
        <Field helperText="Use your work email." label="Email" required>
          <TextInput placeholder="you@example.com" />
        </Field>
        <Checkbox checked>Accept terms</Checkbox>
        <HelperText emphasis="muted">Looks good.</HelperText>
      </Stack>
    </ThemeProvider>
  );
}

function ToastButton() {
  const { showToast } = useToast();
  return (
    <Button
      onPress={() =>
        showToast({ description: 'Your changes were saved.', status: 'success', title: 'Saved' })
      }
    >
      Show toast
    </Button>
  );
}

export function FeedbackExample() {
  return (
    <ThemeProvider initialConfig={docsThemeConfig}>
      <ToastProvider>
        <Stack gap="m" p="l">
          <Tooltip content="Helpful contextual information">
            <Text>Hover for tooltip</Text>
          </Tooltip>
          <ToastButton />
        </Stack>
      </ToastProvider>
    </ThemeProvider>
  );
}

export function OverlayExample() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [drawerVisible, setDrawerVisible] = React.useState(false);

  return (
    <ThemeProvider initialConfig={docsThemeConfig}>
      <Stack gap="m" p="l">
        <Button onPress={() => setModalVisible(true)}>Open modal</Button>
        <Button onPress={() => setDrawerVisible(true)}>Open drawer</Button>
        <Modal onDismiss={() => setModalVisible(false)} visible={modalVisible}>
          <Card>
            <Stack gap="s">
              <Text variant="label" weight="semiBold">
                Modal title
              </Text>
              <Text>Modal content</Text>
            </Stack>
          </Card>
        </Modal>
        <Drawer onDismiss={() => setDrawerVisible(false)} visible={drawerVisible}>
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
          actions={[
            { id: 'edit', title: 'Edit' },
            { disabled: true, id: 'archive', title: 'Archive' },
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
