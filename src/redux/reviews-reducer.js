const ADD_REVIEW = 'ADD-REVIEW';
const UPDATE_NEW_REVIEW_COMMENT = 'UPDATE-NEW-REVIEW-COMMENT';
const UPDATE_NEW_REVIEW_RATING = 'UPDATE-NEW-REVIEW-RATING';

let initialState = {
	reviews: [
		{
			id: 1,
			rating: 5,
			comment: 'good food',
			createdAt: '2024-06-29T16:52:05',
			customer: {
				firstName: 'Maria',
				lastName: 'Skłodowska-Curi'
			}
		}
	],
	newReviewComment: 'OK!',
	newReviewRating: 3,
}

const reviewsReducerReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_REVIEW:
			let customer = {
				"firstName": "Bugs",
				"lastName": "Bunny"
			}

			let newReview = {
				id: 5,
				comment: state.newReviewComment,
				rating: state.newReviewRating,
				createdAt: '2024-06-30T17:32:45.94',
				customer: customer
			};
			state.reviews.push(newReview);
			state.newReviewComment = '';
			state.newReviewRating = '';
			return state;

		case UPDATE_NEW_REVIEW_COMMENT:
			state.newReviewComment = action.newComment;
			return state;

		case UPDATE_NEW_REVIEW_RATING:
			state.newReviewRating = action.newRating;
			return state;


		default:
			return state;
	}
}


export const addReview = () => ({type: ADD_REVIEW})

export const updateNewReviewCommentCreator = (newComment) =>
	({type: UPDATE_NEW_REVIEW_COMMENT, newComment: newComment})

export const updateNewReviewRatingCreator = (newRating) =>
	({type: UPDATE_NEW_REVIEW_RATING, newRating: newRating})

export default reviewsReducerReducer;