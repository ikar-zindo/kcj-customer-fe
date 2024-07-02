import {useState} from "react";
import * as CartService from "../services/CartService.js";

const GET_CART_PRODUCTS = 'GET-CART-PRODUCTS';

let initialState = {
	'cartProducts': []
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CART_PRODUCTS:
			const [cartProducts, setCartProducts] = useState([]);
			const [error, setError] = useState(null);

			const getCartProducts = async () => {
				debugger
				try {
					const response = await CartService.getCartProducts();
					setCartProducts(response.data);
					console.log(cartProducts)
					return cartProducts
				} catch (error) {
					console.error('Error adding review:', error);
					setError(error.message || 'Failed to fetch cart products.');
				}
			}

			state.cart.push(getCartProducts());
			return state;

		default:
			return state;
	}
}

export const getCartProductsState = () => ({type: GET_CART_PRODUCTS})

export default cartReducer;