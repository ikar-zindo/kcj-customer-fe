import axios from "axios";
import InstanceAPIWithBearer from "./API.js";

const instance = axios.create(InstanceAPIWithBearer);

export const getRestaurants = () => {
	return instance.get('/restaurant');
}

export const getRestaurantById = (restaurantId) => {
	return instance.get(`/restaurant/${restaurantId}`);
}

export const getRestaurantProducts = (restaurantId) => {
	return instance.get(`/restaurant/${restaurantId}/products`);
}