import instanceAPI from "./instanceAPI";
import {ProductDto, RestaurantDto, ReviewDto} from "../types/dtos.ts";

export const restaurantsAPI = {
	async getAllRestaurants() {
		const response = await instanceAPI.get<Array<RestaurantDto>>('restaurant');
		if (response.status === 200 && response.data) {
			return response.data;
		}
	},

	async getRestaurantById(restaurantId: number) {
		const response = await instanceAPI.get<RestaurantDto>(`restaurant/${restaurantId}`);
		if (response.status === 200 && response.data) {
			return response.data;
		}
	},

	async getAverageRatingByRestaurantId(restaurantId: number) {
		const response = await instanceAPI.get<number>(`restaurant/${restaurantId}/rating`);
		if (response.status === 200 && response.data) {
			return response.data;
		}
	},

	async getAllProductsByRestaurantId(restaurantId: number) {
		const response = await instanceAPI.get<ProductDto>(`restaurant/${restaurantId}/products`);
		if (response.status === 200 && response.data) {
			return response.data;
		}
	},

	async getAllReviewsByRestaurantId(restaurantId: number) {
		const response = await instanceAPI.get<ReviewDto>(`restaurant/${restaurantId}/reviews`);
		if (response.status === 200 && response.data) {
			return response.data;
		}
	},

	async createReview(review: ReviewDto, restaurantId: number) {
		const response = await instanceAPI.post<ReviewDto>('restaurant/add-review', review,
			{
				params: {
					restaurantId: restaurantId
				}
			});
		if (response.status === 200 && response.data) {
			return response.data;
		}
	},
}