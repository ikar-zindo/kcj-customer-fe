import {authAPI} from "../api/authAPI";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authErrors, errorMessages} from "../utils/error-messages";
import {AppDispatch} from "./store";
import {AuthState} from "../types/store/auth-interfaces";
import {LoginDataRequest, LoginDataResponse} from "../types/api/auth-types";
import {setGlobalError, setGlobalMessage, setSnackbarError} from "./app-slice";
import axios from "axios";
import {CustomerCreateDto, CustomerDto, CustomerUpdateDto} from "../types/dtos";
import {customerAPI} from "../api/customerAPI.ts";
import {messages} from "../utils/messages.ts";

const initialState: AuthState = {
	customer: null,
	isAuth: false,
	tokens: null,
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuthDataAction: (state, action: PayloadAction<CustomerDto>) => {
			if (action.payload) {
				return {...state, customer: action.payload, isAuth: true}
			}
		},
		setTokenAction: (state, action: PayloadAction<LoginDataResponse>) => {
			return {...state, tokens: action.payload};
		},
		logoutAction: (state) => {
			return {...state, customer: null, isAuth: false}
		},
	}
});

// ASYNCHRONOUS ACTIONS
export const me = () => async (dispatch: AppDispatch) => {
	const response = await customerAPI.me()

	try {
		if (response.status === 200) {
			dispatch(setAuthDataAction(response.data));
		} else {
			return [errorMessages.UNAUTHORIZED_ACCESS];
		}
	} catch (error) {
		if (axios.isAxiosError(error)) {
			dispatch(setGlobalError({
				code: error.code || 'UNKNOWN_ERROR',
				status: error.response?.status || 500,
				message: error.message
			}));
		}
		dispatch(setSnackbarError(authErrors.LOGIN_ERROR));
	}
};

export const login = (data: LoginDataRequest) =>
	async (dispatch: AppDispatch) => {
		try {
			const response = await authAPI.login(data);
			if (response.status === 200) {
				const {accessToken, accessTokenExpiry, refreshToken, refreshTokenExpire} = response.data;

				localStorage.setItem('accessToken', accessToken);
				localStorage.setItem('accessTokenExpiry', accessTokenExpiry);
				localStorage.setItem('refreshToken', refreshToken);
				localStorage.setItem('refreshTokenExpire', refreshTokenExpire);

				dispatch(setTokenAction(response.data))
				dispatch(me());
				dispatch(setGlobalMessage(messages.LOGIN_SUCCESS));
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				dispatch(setGlobalError({
					code: error.code || 'UNKNOWN_ERROR',
					status: error.response?.status || 500,
					message: error.message
				}));
			}
			dispatch(setSnackbarError(authErrors.LOGIN_ERROR));
		}
	}

export const logout = () => async (dispatch: AppDispatch) => {
	try {
		const response = await authAPI.logout()
		if (response.status === 204) {
			dispatch(logoutAction());

			localStorage.removeItem('accessToken');
			localStorage.removeItem('accessTokenExpiry');
			localStorage.removeItem('refreshToken');
			localStorage.removeItem('refreshTokenExpire');
			dispatch(setGlobalMessage(messages.LOGOUT_SUCCESS));
		}
	} catch (error) {
		if (axios.isAxiosError(error)) {
			dispatch(setGlobalError({
				code: error.code || 'UNKNOWN_ERROR',
				status: error.response?.status || 500,
				message: error.message
			}));
		}
		dispatch(setSnackbarError(authErrors.LOGOUT_ERROR));
	}
};

export const registration = (data: CustomerCreateDto) =>
	async (dispatch: AppDispatch) => {
		try {
			const response = await authAPI.register(data);
			if (response.status === 200) {
				dispatch(setGlobalMessage(messages.REGISTRATION_SUCCESS));
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				dispatch(setGlobalError({
					code: error.code || 'UNKNOWN_ERROR',
					status: error.response?.status || 500,
					message: error.message
				}));
			}
			dispatch(setSnackbarError(authErrors.REGISTRATION_ERROR));
		}
	}

export const updateUser = (data: CustomerUpdateDto) =>
	async (dispatch: AppDispatch) => {

		try {
			const response = await customerAPI.updateCustomerInfo(data);
			if (response.status === 200) {
				dispatch(setGlobalMessage(messages.PROFILE_INFO_UPDATE_SUCCESS));
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				dispatch(setGlobalError({
					code: error.code || 'UNKNOWN_ERROR',
					status: error.response?.status || 500,
					message: error.message
				}));
			}
			dispatch(setSnackbarError(authErrors.PROFILE_INFO_UPDATE_ERROR));
		}
	}

export const {
	setAuthDataAction,
	setTokenAction,
	logoutAction,
} = authSlice.actions;
export default authSlice.reducer;