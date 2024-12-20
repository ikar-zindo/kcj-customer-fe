import {RootState} from "../store/store";

export const selectAllRestaurants = (state: RootState) => state.restaurants.restaurants;