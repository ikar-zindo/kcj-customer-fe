import axios from "axios";
import InstanceAPIWithBearer from "./API.js";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// TODO: переделать с использованием instance
const instance = axios.create(InstanceAPIWithBearer);

export const jwtService = async (username, password) => {
	const response = await axios.post(
		`${BASE_URL}/jwt/tokens`,
		{},
		{
			headers: {
				'Authorization': 'Basic ' + btoa(username + ':' + password)
			}
		});

	// Проверяем успешность запроса
	if (response.status === 200) {
		const {accessToken, accessTokenExpiry, refreshToken, refreshTokenExpire} = response.data;

		// Сохраняем токены в localStorage
		localStorage.setItem('accessToken', accessToken);
		localStorage.setItem('accessTokenExpiry', accessTokenExpiry);
		localStorage.setItem('refreshToken', refreshToken);
		localStorage.setItem('refreshTokenExpire', refreshTokenExpire);

		console.log('Login successful');
	} else {
		console.log('Login failed:', response.statusText);
	}
	return response;
};

// при logout отправляется запрос с refreshToken в запросе POST -> jwt/logout
export const logoutService = async () => {
	const refreshToken = localStorage.getItem('refreshToken');
	const response = await axios.post(
		`${BASE_URL}/jwt/logout`,
		{},
		{
			headers: {
				'Authorization': 'Bearer ' + refreshToken
			}
		});
	if (response.status === 204) {

		// удаляются переменные из localStorage
		localStorage.removeItem('accessToken');
		localStorage.removeItem('accessTokenExpiry');
		localStorage.removeItem('refreshToken');
		localStorage.removeItem('refreshTokenExpire');
		localStorage.removeItem('restaurantId');

		console.log('Logout successful');
	} else {
		console.error('Logout failed:', response.statusText);
	}
	return response;
};

// при logout отправляется запрос с refreshToken в запросе POST -> jwt/logout
export const refreshTokenService = async () => {
	const refreshToken = localStorage.getItem('refreshToken');
	const response = await axios.post(
		`${BASE_URL}/jwt/refresh`,
		{},
		{
			headers: {
				'Authorization': 'Bearer ' + refreshToken
			}
		});
	if (response.status === 204) {

		const {accessToken, accessTokenExpiry} = response.data;
		localStorage.setItem('accessToken', accessToken);
		localStorage.setItem('accessTokenExpiry', accessTokenExpiry);

		console.log('Refresh token successful');
	} else {
		console.error('Refresh token failed:', response.statusText);
	}
	return response;
};