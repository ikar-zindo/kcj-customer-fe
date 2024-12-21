import {RootState} from "../store/store";

export const selectIsMobileDevice = (state: RootState) => state.app.isMobileDevice;
export const selectIsInitialedApp = (state: RootState) => state.app.initialized;
export const selectGlobalError = (state: RootState) => state.app.globalError;
export const selectSnackbarError = (state: RootState) => state.app.snackbarError;
export const selectSnackbarMessage = (state: RootState) => state.app.snackbarMessage;