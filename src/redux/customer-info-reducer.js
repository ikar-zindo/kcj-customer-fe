
let initialState = {
	info: {
		id: 'd234d99d-170e-42f7-b6ae-435ee56f49a3',
		firstName: 'Ultron',
		lastName: '',
		email: 'ultron@mail.com',
		phoneNumber: '+49 123 456 789',
		address: 'Alexanderplatz 3',
		postalCode: '10178',
		role: 'ROLE_CUSTOMER',
		isBlocked: false
	},
	jwtTokens: {
		accessToken: '000',
		accessTokenExpiry: '000',
		refreshToken: '000',
		refreshTokenExpire: '000'
	}

}

const customerDataInfoReducer = (state = initialState, action) => {


	return state;
}

export default customerDataInfoReducer;
