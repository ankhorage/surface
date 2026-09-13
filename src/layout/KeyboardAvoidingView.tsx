import React from 'react';
import {
  KeyboardAvoidingView as ReactNativeKeyboardAvoidingView,
  type KeyboardAvoidingViewProps as ReactNativeKeyboardAvoidingViewProps,
} from 'react-native';

/*** Preserve React Native keyboard avoidance behind the stable Surface layout boundary. */
export function KeyboardAvoidingView(props: KeyboardAvoidingViewProps) {
  return <ReactNativeKeyboardAvoidingView {...props} />;
}

export type KeyboardAvoidingViewBehavior = NonNullable<
  ReactNativeKeyboardAvoidingViewProps['behavior']
>;

export type KeyboardAvoidingViewProps = ReactNativeKeyboardAvoidingViewProps;
