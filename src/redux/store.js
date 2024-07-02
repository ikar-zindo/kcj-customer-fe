import {combineReducers, createStore} from "redux";
import jwtTokensReducer from "./jwt-tokens-reducer.js";
import cartReducer from "./cart-reducer.js";
import customerDataInfoReducer from "./customer-info-reducer.js";
import reviewsReducer from "./reviews-reducer.js";
import profileReducer from "./profile-reducer.js";

let reducer = combineReducers({
	jwtTokens: jwtTokensReducer,
	cart: cartReducer,
	customerInfo: customerDataInfoReducer,
	reviewPage: reviewsReducer,
	profilePage: profileReducer
});

let store = createStore(reducer);

export default store;