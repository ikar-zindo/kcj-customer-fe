const GET_TOKENS = 'GET-TOKENS';
const UPDATE_TOKENS = 'UPDATE-TOKENS';
const UPDATE_REFRESH_TOKEN = 'UPDATE-REFRESH-TOKEN';

let initialState = {
	accessToken: '',
	accessTokenExpiry: '',
	refreshToken: '',
	refreshTokenExpire: ''
};


const jwtTokensReducer = (state = initialState, action) => {
	switch (action.type) {

		case UPDATE_TOKENS:
			const jwtTokensResponse = action.getJwtTokens;
			state.accessToken = jwtTokensResponse.accessToken;
			state.accessTokenExpiry = jwtTokensResponse.accessTokenExpiry;
			state.refreshToken = jwtTokensResponse.refreshToken;
			state.refreshTokenExpire = jwtTokensResponse.refreshTokenExpire;
			return state;

		case UPDATE_REFRESH_TOKEN:
			const refreshTokenResponse = {
				'refreshToken': '',
				'refreshTokenExpire': ''
			}
			state.jwtTokens.push(refreshTokenResponse);
			return state;

		default:
			return state;
	}
}

export const updateJwtTokens = (jwtTokensResponse) =>
	({type: UPDATE_TOKENS, getJwtTokens: jwtTokensResponse})

export default jwtTokensReducer;