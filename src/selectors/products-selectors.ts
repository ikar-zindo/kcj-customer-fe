import {RootState} from "../store/store";

export const selectAllProducts = (state: RootState) => state.products.products;