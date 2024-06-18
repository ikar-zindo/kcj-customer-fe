import axios from "axios";

const accessToken = localStorage.getItem("accessToken");
const REST_API_RESTAURANT = 'http://localhost:8889/restaurant';

export const getRestaurants = () => {
	// const accessToken = localStorage.getItem("accessToken");
	return axios.get(`${REST_API_RESTAURANT}`, {
		headers: {
			'Authorization': 'Bearer ' + accessToken
		}
	});
}

export const getRestaurantById = (restaurantId) => {
	// const accessToken = localStorage.getItem("accessToken");
	return axios.get(`${REST_API_RESTAURANT}/${restaurantId}`, {
		headers: {
			'Authorization': 'Bearer ' + accessToken
		}
	});
}

export const getRestaurantProducts = (restaurantId) => {
	// const accessToken = localStorage.getItem("accessToken");
	return axios.get(`${REST_API_RESTAURANT}/${restaurantId}/products`, {
		headers: {
			'Authorization': 'Bearer ' + accessToken
		}
	});
}