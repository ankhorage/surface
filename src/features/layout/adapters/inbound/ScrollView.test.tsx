import { expect, mock, test } from 'bun:test';
import React from 'react';
import { renderToString } from 'react-dom/server';
import * as ReactNativeWeb from 'react-native-web';

type RecordedScrollViewProps = Readonly<Record<string, unknown>>;

const recordedScrollViewProps: RecordedScrollViewProps[] = [];

await mock.module('react-native', () => ({
  ...ReactNativeWeb,
  RefreshControl: () => null,
  ScrollView: (props: RecordedScrollViewProps) => {
    recordedScrollViewProps.push(props);
    return null;
  },
}));

const { ScrollView } = await import('./ScrollView');
const { ThemeProvider } = await import('../../../theme/runtime');

/*** Renders Surface ScrollView under the production theme boundary and captures native props. */
function renderScrollView(props: React.ComponentProps<typeof ScrollView>) {
  recordedScrollViewProps.splice(0);
  renderToString(
    <ThemeProvider>
      <ScrollView {...props} />
    </ThemeProvider>,
  );

  const renderedProps = recordedScrollViewProps.at(-1);
  if (renderedProps === undefined) throw new Error('ScrollView did not render.');
  return renderedProps;
}

test('creates a controlled native RefreshControl from Surface refresh props', () => {
  const onRefresh = () => undefined;
  const rendered = renderScrollView({ onRefresh, refreshing: true });
  const refreshControl = rendered.refreshControl as React.ReactElement<{
    onRefresh?: () => void;
    refreshing: boolean;
  }>;

  expect(refreshControl.type).toBeDefined();
  expect(refreshControl.props).toEqual({ onRefresh, refreshing: true });
});

test('defaults a requested refresh control to its inactive controlled state', () => {
  const rendered = renderScrollView({ onRefresh: () => undefined });
  const refreshControl = rendered.refreshControl as React.ReactElement<{ refreshing: boolean }>;

  expect(refreshControl.props.refreshing).toBe(false);
});

test('preserves a caller-provided native refresh control when Surface refresh props are absent', () => {
  const nativeRefreshControl = <ReactNativeWeb.View />;
  const rendered = renderScrollView({ refreshControl: nativeRefreshControl });

  expect(rendered.refreshControl).toBe(nativeRefreshControl);
});
