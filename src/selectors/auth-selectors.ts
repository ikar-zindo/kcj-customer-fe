import {RootState} from "../store/store";

export const selectAuth = (state: RootState) => state.auth;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectCustomer = (state: RootState) => state.auth.customer;