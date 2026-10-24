import { useSyncExternalStore } from 'react';
import { Dimensions } from 'react-native';

const serverWidth = 0;

/*** Reads the viewport width without changing the server and hydration render. */
export function useResponsiveWidth(): number {
  return useSyncExternalStore(subscribeToWindowDimensions, getWindowWidth, getServerWidth);
}

/*** Subscribes to viewport changes after hydration. */
function subscribeToWindowDimensions(onStoreChange: () => void): () => void {
  const subscription = Dimensions.addEventListener('change', onStoreChange);
  return () => subscription.remove();
}

/*** Returns the current native or browser viewport width. */
function getWindowWidth(): number {
  return Dimensions.get('window').width;
}

/*** Supplies the deterministic responsive width used by SSR and first hydration. */
function getServerWidth(): number {
  return serverWidth;
}
