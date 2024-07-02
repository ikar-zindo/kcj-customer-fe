import {useState} from "react";
import * as CartService from "../services/CartService.js";
import profileReducer from "./profile-reducer.js";
import reviewsReducer from "./reviews-reducer.js";
import jwtTokensReducer from "./jwt-tokens-reducer.js";
import cartReducer from "./cart-reducer.js";
import customerDataInfoReducer from "./customer-info-reducer.js";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_REVIEW = 'ADD-REVIEW';
const UPDATE_NEW_REVIEW_COMMENT = 'UPDATE-NEW-REVIEW-COMMENT';
const UPDATE_NEW_REVIEW_RATING = 'UPDATE-NEW-REVIEW-RATING';
const GET_CART_PRODUCTS = 'GET-CART-PRODUCTS';

const UPDATE_TOKENS = 'UPDATE-TOKENS';

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
				'accessToken': '',
				'accessTokenExpiry': '',
				'refreshToken': '',
				'refreshTokenExpire':''
			},
			restaurantId: '',
			cartProducts: [],
			cart: {
				cartProducts: []
			}
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
		reviewPage: {
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
			newReviewComment: 'FUUUUUUUU!',
			newReviewRating: 1,
		}
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

		this._state.customerData.jwtTokens = jwtTokensReducer(this._state.customerData.jwtTokens, action);
		this._state.customerData.cart = cartReducer(this._state.customerData.cart, action);
		this._state.customerData.info = customerDataInfoReducer(this._state.customerData.info, action);
		this._state.reviewPage = reviewsReducer(this._state.reviewPage, action);
		this._state.profilePage = profileReducer(this._state.profilePage, action);

		this._callSubscriber(this._state);
	}
}

export default store;
window.store = store;