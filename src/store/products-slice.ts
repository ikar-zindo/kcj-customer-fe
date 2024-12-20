import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "./store";
import {ProductState} from "../types/store/products-interfaces.ts";
import {productsAPI} from "../api/productsAPI.ts";
import {ProductDto} from "../types/dtos.ts";
import {setSnackbarError} from "./app-slice.ts";
import {errorMessages} from "../utils/error-messages.ts";

const initialState: ProductState = {
	products: []
}

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<ProductDto[]>) => {  // Экшен для установки глобальной ошибки
			return {...state, products: action.payload};
		},
	}
});

// ASYNCHRONOUS ACTIONS
export const requestProductsThunk = () => async (dispatch: AppDispatch) => {
	try {
		const products = await productsAPI.getAllProducts();
		if (products) dispatch(setProducts(products));
	} catch (error) {
		dispatch(setSnackbarError(errorMessages.PRODUCTS_NOT_FOUND))
		console.error("Failed to fetch products:", error);
	}
};

export const {
	setProducts
} = productsSlice.actions;
export default productsSlice.reducer;