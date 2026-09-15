import React from 'react';

import {
  Button,
  Card,
  Checkbox,
  Field,
  Menu,
  Modal,
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
  View,
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
      <View gap="m" p="l">
        <Field helperText="Use your work email." label="Email" required>
          <TextInput placeholder="you@example.com" />
        </Field>
        <Checkbox checked>Accept terms</Checkbox>
        <Text emphasis="muted" variant="caption">
          Looks good.
        </Text>
      </View>
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
        <View gap="m" p="l">
          <Tooltip content="Helpful contextual information">
            <Text>Hover for tooltip</Text>
          </Tooltip>
          <ToastButton />
        </View>
      </ToastProvider>
    </ThemeProvider>
  );
}

export function OverlayExample() {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <ThemeProvider initialConfig={docsThemeConfig}>
      <View gap="m" p="l">
        <Button onPress={() => setModalVisible(true)}>Open modal</Button>
        <Modal onDismiss={() => setModalVisible(false)} visible={modalVisible}>
          <Card>
            <View gap="s">
              <Text variant="label" weight="semiBold">
                Modal title
              </Text>
              <Text>Modal content</Text>
            </View>
          </Card>
        </Modal>
      </View>
    </ThemeProvider>
  );
}

export function NavigationExample() {
  return (
    <ThemeProvider initialConfig={docsThemeConfig}>
      <View gap="m" p="l">
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
        <View>
          <Text color="success">Theme overrides can stay semantic.</Text>
        </View>
      </View>
    </ThemeProvider>
  );
}
