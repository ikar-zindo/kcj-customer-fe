import {getReviewsByRestaurantId} from "../services/ReviewService.js";

let store = {
	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer;  // observer
	},

	_state: {
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
		// { type: 'ADD-POST' }
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);

		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);

		} else if (action.type === 'ADD-REVIEW') {
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
			this._state.profilePage.newReviewRating = '';
			this._callSubscriber(this._state);

		} else if (action.type === 'UPDATE-NEW-REVIEW-COMMENT') {
			this._state.profilePage.newReviewComment = action.newComment;
			this._callSubscriber(this._state);

		} else if (action.type === 'UPDATE-NEW-REVIEW-RATING') {
			this._state.profilePage.newReviewRating = action.newRating;
			this._callSubscriber(this._state);

		}
	}
}

export default store;
window.store = store;