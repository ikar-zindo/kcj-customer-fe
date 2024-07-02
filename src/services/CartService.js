import axios from "axios";

const accessToken = localStorage.getItem("accessToken");
const REST_API_CART = 'http://localhost:8889/cart';

export const getCartProducts = () => {
	// const accessToken = store.getState().customerData.jwtTokens.accessToken;
	return axios.get(REST_API_CART, {
		headers: {
			'Authorization': 'Bearer ' + accessToken
		}
	});
}

export const addProductToCart = (productId) => {
	// const accessToken = store.getState().customerData.jwtTokens.accessToken;
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
	// const accessToken = store.getState().customerData.jwtTokens.accessToken;
	return axios.post(`${REST_API_CART}/payCart`,
		{},
		{
			headers: {
				'Authorization': 'Bearer ' + accessToken
			}
		});
}

export const clearCart = () => {
	// const accessToken = store.getState().customerData.jwtTokens.accessToken;
	return axios.delete(`${REST_API_CART}/clearCart`, {
		headers: {
			'Authorization': 'Bearer ' + accessToken
		}
	});
}

export const getTotalCartById = () => {
	// const accessToken = store.getState().customerData.jwtTokens.accessToken;
	return axios.get(`${REST_API_CART}/getTotal`, {
		headers: {
			'Authorization': 'Bearer ' + accessToken
		}
	});
}

export const getCartProductsSize = () => {
	// const accessToken = store.getState().customerData.jwtTokens.accessToken;
	return axios.get(`${REST_API_CART}/getSize`, {
		headers: {
			'Authorization': 'Bearer ' + accessToken
		}
	});
}