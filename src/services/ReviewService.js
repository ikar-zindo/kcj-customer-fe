import axios from "axios";
import InstanceAPIWithBearer from "./API.js";

const instance = axios.create(InstanceAPIWithBearer);

export const saveReview = (restaurantId, reviewDto) => {
	try {
		return instance.post(`/restaurant/add-review`, reviewDto,
			{
				params: {
					restaurantId: restaurantId
				}
			});
	} catch (error) {
		throw new Error(error.response ? error.response.data : error.message);
	}
};

export const getReviewsByRestaurantId = (restaurantId) => {
	return instance.get(`/restaurant/${restaurantId}/reviews`);
}

export const navigateToAddReview = (navigate) => {
	navigate('/add-review');
};