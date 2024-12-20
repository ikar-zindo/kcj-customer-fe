import {authAPI} from "../api/authAPI";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {errorMessages} from "../utils/error-messages.ts";
import {AppDispatch} from "./store";
import {AuthState} from "../types/store/auth-interfaces";
import {LoginDataRequest, LoginDataResponse} from "../types/api/auth-types";
import {setGlobalError} from "./app-slice.ts";
import axios from "axios";
import {CustomerCreateDto, CustomerDto} from "../types/dtos.ts";

const initialState: AuthState = {
	customer: null,
	isAuth: false,
	tokens: null,
	captchaUrl: null
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
		setCaptchaUrl: (state, action: PayloadAction<string | null>) => {
			if (action.payload) {
				return {...state, captchaUrl: action.payload};
			}
		}
	}
});

// ASYNCHRONOUS ACTIONS
export const me = () => async (dispatch: AppDispatch) => {
	const response = await authAPI.me()

	try {
		if (response.status === 200) {
			dispatch(setAuthDataAction(response.data));
		} else {
			return [errorMessages.UNAUTHORIZED_ACCESS];
		}
	} catch (error) {
		console.error("Error during login", error);
		return [errorMessages.SERVER_ERROR_OCCURRED]; // Ошибка на сервере
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

				console.log('Login successful');
				dispatch(setTokenAction(response.data))
				dispatch(me());
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				dispatch(setGlobalError({
					code: error.code || 'UNKNOWN_ERROR',
					status: error.response?.status || 500,
					message: error.message
				}));
				console.error("Error during login:", error);
				return [errorMessages.ERROR_DURING_LOGIN]; // Ошибка на сервере
			}
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
		}
	} catch (error) {
		console.error("Error during login:", error);
		return [errorMessages.ERROR_DURING_LOGOUT]; // Ошибка на сервере
	}
};

export const registration = (data: CustomerCreateDto) =>
	async (dispatch: AppDispatch) => {
		try {
			const response = await authAPI.register(data);
			if (response.status === 200) {
				debugger
				console.log(response)
				// const {accessToken, accessTokenExpiry, refreshToken, refreshTokenExpire} = response.data;

				// localStorage.setItem('accessToken', accessToken);
				// localStorage.setItem('accessTokenExpiry', accessTokenExpiry);
				// localStorage.setItem('refreshToken', refreshToken);
				// localStorage.setItem('refreshTokenExpire', refreshTokenExpire);

				console.log('Registration successful');
				// dispatch(setTokenAction(response.data))
				// dispatch(me());
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				dispatch(setGlobalError({
					code: error.code || 'UNKNOWN_ERROR',
					status: error.response?.status || 500,
					message: error.message
				}));
				console.error("Error during registration:", error);
				return [errorMessages.ERROR_DURING_REGISTRATION]; // Ошибка на сервере
			}
		}
	}

export const {
	setAuthDataAction,
	setTokenAction,
	logoutAction,
	setCaptchaUrl,
} = authSlice.actions;
export default authSlice.reducer;