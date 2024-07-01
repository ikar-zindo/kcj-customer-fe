import {useState} from "react";
import * as CartService from "../services/CartService.js";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_REVIEW = 'ADD-REVIEW';
const UPDATE_NEW_REVIEW_COMMENT = 'UPDATE-NEW-REVIEW-COMMENT';
const UPDATE_NEW_REVIEW_REVIEW = 'UPDATE-NEW-REVIEW-RATING';
const GET_CART_PRODUCTS = 'GET-CART-PRODUCTS';

let store = {
	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer;  // observer
	},

	_state: {
		customerData: {
			info: {
				"id": "d234d99d-170e-42f7-b6ae-435ee56f49a3",
				"firstName": "Ultron",
				"lastName": "",
				"email": "ultron@mail.com",
				"phoneNumber": "+49 123 456 789",
				"address": "Alexanderplatz 3",
				"postalCode": "10178",
				"role": "ROLE_CUSTOMER",
				"isBlocked": false,
				"cart": {
					"id": "d234d99d-170e-42f7-b6ae-435ee56f49b3"
				},
				"order": [],
				"review": [
					{
						"id": 3,
						"rating": 2,
						"comment": "not tasty, I didnt like the food",
						"createdAt": "2024-06-29T16:52:05"
					},
					{
						"id": 4,
						"rating": 3,
						"comment": "fuuuu",
						"createdAt": "2024-06-29T17:36:04"
					}
				]
			},
			jwtTokens: {
				"accessToken": "eyJraWQiOiJhYTBkMzU1MS1iZWIzLTRjZjktYmMyMi0zYTZmYjdiOWVhYTYiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJpYUBtYWlsLmNvbSIsImV4cCI6MTcxOTgzNDU5NiwiaWF0IjoxNzE5NzQ4MTk2LCJqdGkiOiJhYTBkMzU1MS1iZWIzLTRjZjktYmMyMi0zYTZmYjdiOWVhYTYiLCJhdXRob3JpdGllcyI6WyJST0xFX0NVU1RPTUVSIl19.rvM6LfVbTWb_T39FJwkEPDAj_rVlESEN1QyKAbORYHk",
				"accessTokenExpiry": "2024-07-01T11:49:56.831386200Z",
				"refreshToken": "eyJraWQiOiJhYTBkMzU1MS1iZWIzLTRjZjktYmMyMi0zYTZmYjdiOWVhYTYiLCJlbmMiOiJBMTI4R0NNIiwiYWxnIjoiZGlyIn0.._1sYefBqUFCUQR_q.oaClrQKviRTDPQPIlfyiCGnPyCDgscX3Qx-4P_D7x4MFaPEv2kiUbCKtXwnVa4ZbOKLz5O_-8bC7EtdnkFI4oRwBC51avlD3jNUJKasAQ8xOAPgqD1YvXbpqd8bE7mDzsTlIlKK2z8_KPWFf_HzaTIFPNahRxPgtfaNdAi2bv36-21ucUwbW_gPd3osg_z0ofl377vAp8w53snxQqshu7rsMmk0PeyzG.MA400K9yi1um5HpssE98SA",
				"refreshTokenExpire": "2024-07-30T11:49:56.831386200Z"
			},
			restaurantId: '',
			cartProducts: []
		},
		profilePage: {
			posts: [
				{id: 1, message: 'Hi, how are you?', likesCount: 12},
				{id: 2, message: 'It\'s my first post', likesCount: 11},
				{id: 3, message: 'Blabla', likesCount: 11},
				{id: 4, message: 'Dada', likesCount: 11}
			],
			newPostText: 'it-kamasutra.com',
			newReviewComment: 'GOOD!',
			newReviewRating: 5,
			restaurantId: ''
		},
		reviews: [
			{
				"id": 1,
				"rating": 5,
				"comment": "good food",
				"createdAt": "2024-06-29T16:52:05",
				"customer": {
					"firstName": "Maria",
					"lastName": "Skłodowska-Curie"
				}
			},
			{
				"id": 2,
				"rating": 4,
				"comment": "nice",
				"createdAt": "2024-06-29T16:52:05",
				"customer": {
					"firstName": "Super",
					"lastName": "Mario"
				}
			},
			{
				"id": 3,
				"rating": 2,
				"comment": "not tasty, I didnt like the food",
				"createdAt": "2024-06-29T16:52:05",
				"customer": {
					"firstName": "Ultron",
					"lastName": ""
				}
			}
		],
	},
	_callSubscriber() {
		console.log('State changed');
	},

	getAllReviewsByRestaurantId() {

	},

	addReview() {
		let customer = {
			firstName: 'Luke',
			lastName: 'Skywalker'
		}

		let newReview = {
			id: 5,
			comment: this._state.profilePage.newReviewComment,
			rating: this._state.profilePage.newReviewRating,
			createdAt: '2024-06-30T17:32:45.94',
			customer: customer
		};

		this._state.reviews.push(newReview);
		this._state.profilePage.newReviewComment = '';
		this._state.profilePage.newReviewRating = null;
		this._callSubscriber(this._state);
	},
	updateNewReviewComment(newRating) {
		this._state.profilePage.newReviewRating = newRating;
		this._callSubscriber(this._state);
	},
	updateNewReviewRating(newComment) {
		this._state.profilePage.newReviewComment = newComment;
		this._callSubscriber(this._state);
	},

	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},

	dispatch(action) {
		// { type: '' }
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);

		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);

		} else if (action.type === ADD_REVIEW) {
			let customer = this._state.customerData.info;

			let newReview = {
				id: 5,
				comment: this._state.profilePage.newReviewComment,
				rating: this._state.profilePage.newReviewRating,
				createdAt: '2024-06-30T17:32:45.94',
				customer: customer
			};
			this._state.reviews.push(newReview);
			this._state.profilePage.newReviewComment = '';
			this._state.profilePage.newReviewRating = '';
			this._callSubscriber(this._state);

		} else if (action.type === UPDATE_NEW_REVIEW_COMMENT) {
			this._state.profilePage.newReviewComment = action.newComment;
			this._callSubscriber(this._state);

		} else if (action.type === UPDATE_NEW_REVIEW_REVIEW) {
			this._state.profilePage.newReviewRating = action.newRating;
			this._callSubscriber(this._state);

		} else if (action.type === GET_CART_PRODUCTS) {
			const [cartProducts, setCartProducts] = useState([]);
			const [error, setError] = useState(null);

			const getCartProducts = async () => {
				try {
					const response = await CartService.getCartProducts();
					setCartProducts(response.data);
					console.log(cartProducts)
				} catch (error) {
					console.error('Error adding review:', error);
					setError(error.message || 'Failed to fetch cart products.');
				}
			}

			this._state.customerData.cartProducts = getCartProducts();
			this._callSubscriber(this._state);

		}
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
	({type: UPDATE_NEW_POST_TEXT, newText: text})

export const addReview = () => ({type: ADD_REVIEW})

export const updateNewReviewComment = (newComment) =>
	({type: UPDATE_NEW_REVIEW_COMMENT, newComment: newComment})

export const updateNewReviewRating = (newRating) =>
	({type: UPDATE_NEW_REVIEW_REVIEW, newRating: newRating})

export const getCartProductsState = () => ({type: GET_CART_PRODUCTS})

export default store;
window.store = store;