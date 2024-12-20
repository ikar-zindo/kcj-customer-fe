export type LoginDataRequest = {
	username: string;
	password: string;
	rememberMe: boolean;
	captcha: string;
}

export type LoginDataResponse = {
	accessToken: string;
	accessTokenExpiry: string;
	refreshToken: string;
	refreshTokenExpire: string;
}

export type ErrorAPI = {
	code: string;
	message: string;
	status: number;
}