import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import appSlice from "./app-slice";
import authSlice from "./auth-slice";
import productsSlice from "./products-slice";
import restaurantsSlice from "./restaurants-slice";

const store = configureStore({
	reducer: {
		app: appSlice,
		auth: authSlice,
		products: productsSlice,
		restaurants: restaurantsSlice,
	}
});

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

// @ts-expect-error: add windows.store
window.store = store;
export default store;