import axios from "axios";

const accessToken = localStorage.getItem("accessToken");
const REST_API_CART = 'http://localhost:8889/cart';

export const getCartProducts = () => {
	return axios.get(REST_API_CART, {
		headers: {
			'Authorization': 'Bearer ' + accessToken
		}
	});
}

export const addProductToCart = (productId) => {
	return axios.put(`${REST_API_CART}/addToCart`,
		{},
		{
			headers: {
				'Authorization': 'Bearer ' + accessToken
			},
			params: {
				productId: productId
			}
		});
}

export const payCart = () => {
	return axios.post(`${REST_API_CART}/payCart`,
		{},
		{
		headers: {
			'Authorization': 'Bearer ' + accessToken
		}
	});
}

export const clearCart = () => {
	return axios.delete(`${REST_API_CART}/clearCart`, {
		headers: {
			'Authorization': 'Bearer ' + accessToken
		}
	});
}

export const getTotalCartById = () => {
	return axios.get(`${REST_API_CART}/getTotal`, {
		headers: {
			'Authorization': 'Bearer ' + accessToken
		}
	});
}

export const getCartProductsSize = () => {
	return axios.get(`${REST_API_CART}/getSize`, {
		headers: {
			'Authorization': 'Bearer ' + accessToken
		}
	});
}