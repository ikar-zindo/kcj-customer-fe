import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "./store";
import {RestaurantDto} from "../types/dtos";
import {setSnackbarError} from "./app-slice";
import {errorMessages} from "../utils/error-messages";
import {RestaurantState} from "../types/store/restaurants-interfaces";
import {restaurantsAPI} from "../api/restaurantsAPI";

const initialState: RestaurantState = {
	restaurants: []
}

const restaurantsSlice = createSlice({
	name: "restaurants",
	initialState,
	reducers: {
		setRestaurants: (state, action: PayloadAction<RestaurantDto[]>) => {  // Экшен для установки глобальной ошибки
			return {...state, restaurants: action.payload};
		},
		updateRestaurantRating: (
			state,
			action: PayloadAction<{ restaurantId: number; rating: number }>
		) => {
			const { restaurantId, rating } = action.payload;
			const restaurant = state.restaurants.find((r) => r.id === restaurantId);
			if (restaurant) {
				restaurant.rating = rating ?? 0;
			}
		},
	}
});

// ASYNCHRONOUS ACTIONS
export const requestRestaurantsThunk = () => async (dispatch: AppDispatch) => {
	try {
		const restaurants = await restaurantsAPI.getAllRestaurants();
		if (restaurants) dispatch(setRestaurants(restaurants));
	} catch (error) {
		dispatch(setSnackbarError(errorMessages.RESTAURANTS_NOT_FOUND))
		console.error("Failed to fetch products:", error);
	}
};

export const fetchRestaurantRatingThunk =
	(restaurantId: number) => async (dispatch: AppDispatch) => {
		try {
			const rating = await restaurantsAPI.getAverageRatingByRestaurantId(
				restaurantId
			);
				dispatch(updateRestaurantRating({restaurantId, rating: rating ?? 0}));
		} catch (error) {
			dispatch(
				setSnackbarError(errorMessages.FAILED_TO_FETCH_RATING)
			);
			console.error("Failed to fetch rating:", error);
		}
	};

export const {
	setRestaurants,
	updateRestaurantRating
} = restaurantsSlice.actions;
export default restaurantsSlice.reducer;