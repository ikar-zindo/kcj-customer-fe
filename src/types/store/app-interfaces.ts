export interface GlobalError {
	code: string;
	message: string;
	status: number;
}

export interface AppState {
	initialized: boolean;
	isMobileDevice: boolean | null;
	globalError: GlobalError | null;
	snackbarError: string | null;
}