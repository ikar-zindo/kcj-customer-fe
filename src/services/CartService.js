import axios from "axios";
import InstanceAPIWithBearer from "./API.js";

const instance = axios.create(InstanceAPIWithBearer);

export const getCartProducts = () => {
	return instance.get('/cart');
}

export const addProductToCart = (productId) => {
	return instance.put('/cart/addToCart', {},
		{
			params: {
				productId: productId
			}
		});
}

export const payCart = () => {
	return instance.post('/cart/payCart', {});
}

export const clearCart = () => {
	return instance.delete('/cart/clearCart');
}

export const getTotalCartById = () => {
	return instance.get('/cart/getTotal');
}

export const getCartProductsSize = () => {
	return instance.get('/cart/getSize');
}