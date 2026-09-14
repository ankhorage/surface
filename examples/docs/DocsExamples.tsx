import React from 'react';

import {
  Box,
  Button,
  Card,
  Checkbox,
  Field,
  HelperText,
  Menu,
  Modal,
  Stack,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Text,
  TextInput,
  ThemeProvider,
  ToastProvider,
  Tooltip,
  type ThemeConfig,
  useToast,
} from '@ankhorage/surface';

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

  return (
    <ThemeProvider initialConfig={docsThemeConfig}>
      <Stack gap="m" p="l">
        <Button onPress={() => setModalVisible(true)}>Open modal</Button>
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
