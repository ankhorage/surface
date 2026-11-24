import { mock } from 'bun:test';
import { Window } from 'happy-dom';

const browserWindow = new Window({ url: 'https://surface.test/' });

Object.assign(globalThis, {
  IS_REACT_ACT_ENVIRONMENT: true,
  Node: browserWindow.Node,
  ShadowRoot: browserWindow.ShadowRoot,
  document: browserWindow.document,
  navigator: browserWindow.navigator,
  window: browserWindow,
  __surfaceReactNativeWebWindow: browserWindow,
});

const ReactNativeWeb = await import('react-native-web');

await mock.module('react-native', () => ReactNativeWeb);
