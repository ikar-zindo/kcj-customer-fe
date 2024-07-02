import axios from "axios";

const accessToken = localStorage.getItem("accessToken");
const REST_API_RESTAURANT = 'http://localhost:8889/restaurant';

export const saveReview = (restaurantId, reviewDto) => {
	// const accessToken = store.getState().customerData.jwtTokens.accessToken
	try {
		return axios.post(`${REST_API_RESTAURANT}/add-review`,
			reviewDto,
			{
				headers: {
					'Authorization': 'Bearer ' + accessToken,
					'Content-Type': 'application/json'
				},
				params: {
					restaurantId: restaurantId
				}
			});
	} catch (error) {
		throw new Error(error.response ? error.response.data : error.message);
	}
};

export const getReviewsByRestaurantId = (restaurantId) => {
	// const accessToken = store.getState().customerData.jwtTokens.accessToken
	return axios.get(`${REST_API_RESTAURANT}/${restaurantId}/reviews`, {
		headers: {
			'Authorization': 'Bearer ' + accessToken
		}
	});
}

export const navigateToAddReview = (navigate) => {
	navigate('/add-review');
};