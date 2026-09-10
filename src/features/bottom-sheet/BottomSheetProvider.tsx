import {
  BottomSheetBackdrop,
  type BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React from 'react';

import type { BottomSheetController, BottomSheetPresentOptions } from '../../types/bottomSheet';
import { BottomSheetContext } from './BottomSheetContext';

/*** Installs the shared bottom-sheet modal host and controller for descendant consumers. */
export function BottomSheetProvider({ children }: { children: React.ReactNode }) {
  const modalRef = React.useRef<BottomSheetModal>(null);
  const activeRequestRef = React.useRef<BottomSheetPresentOptions | null>(null);
  const presentedRef = React.useRef(false);
  const [activeRequest, setActiveRequest] = React.useState<BottomSheetPresentOptions | null>(null);

  const present = React.useCallback((options: BottomSheetPresentOptions) => {
    activeRequestRef.current = options;
    setActiveRequest(options);
  }, []);

  const dismiss = React.useCallback(() => {
    if (presentedRef.current) {
      modalRef.current?.dismiss();
      return;
    }

    const request = activeRequestRef.current;
    activeRequestRef.current = null;
    setActiveRequest(null);
    request?.onDismiss?.();
  }, []);

  const controller = React.useMemo<BottomSheetController>(
    () => ({ dismiss, present }),
    [dismiss, present],
  );

  React.useEffect(() => {
    if (!activeRequest || presentedRef.current) {
      return;
    }

    presentedRef.current = true;
    modalRef.current?.present();
  }, [activeRequest]);

  const handleDismiss = React.useCallback(() => {
    const request = activeRequestRef.current;
    presentedRef.current = false;
    activeRequestRef.current = null;
    setActiveRequest(null);
    request?.onDismiss?.();
  }, []);

  const renderBackdrop = React.useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior={activeRequest?.dismissOnBackdropPress === false ? 'none' : 'close'}
      />
    ),
    [activeRequest?.dismissOnBackdropPress],
  );

  const snapPoints = React.useMemo(
    () => (activeRequest?.snapPoints ? [...activeRequest.snapPoints] : undefined),
    [activeRequest?.snapPoints],
  );

  return (
    <BottomSheetContext.Provider value={controller}>
      <BottomSheetModalProvider>
        {children}
        {activeRequest ? (
          <BottomSheetModal
            ref={modalRef}
            backdropComponent={renderBackdrop}
            enableDynamicSizing={activeRequest.enableDynamicSizing ?? true}
            enablePanDownToClose={activeRequest.enablePanDownToClose ?? true}
            index={activeRequest.initialIndex ?? 0}
            keyboardBehavior={activeRequest.keyboardBehavior ?? 'interactive'}
            keyboardBlurBehavior={activeRequest.keyboardBlurBehavior ?? 'restore'}
            onChange={activeRequest.onIndexChange}
            onDismiss={handleDismiss}
            snapPoints={snapPoints}
          >
            <BottomSheetView>{activeRequest.content}</BottomSheetView>
          </BottomSheetModal>
        ) : null}
      </BottomSheetModalProvider>
    </BottomSheetContext.Provider>
  );
}
