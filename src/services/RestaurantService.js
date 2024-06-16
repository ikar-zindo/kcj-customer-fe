import axios from "axios";

const REST_API_RESTAURANT = 'http://localhost:8889/restaurant';

export const listRestaurants = () => axios.get(REST_API_RESTAURANT);
export const getRestaurantProducts = (id) => axios.get(`${REST_API_RESTAURANT}/${id}`);