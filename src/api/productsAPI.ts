import instanceAPI from "./instanceAPI";
import {ProductDto} from "../types/dtos.ts";

export const productsAPI = {
	async getAllProducts() {
		const response = await instanceAPI.get<Array<ProductDto>>('product');
		if (response.status === 200 && response.data) {
			return response.data;
		}
	},

	async getProductById(productId: number) {
		const response = await instanceAPI.get<ProductDto>(`product/${productId}`);
		if (response.status === 200 && response.data) {
			return response.data;
		}
	},
}