import React, {useEffect, useState} from 'react'
import * as ReviewService from "../../services/ReviewService.js";
import ReviewElement from "./ReviewElement.jsx";
import {addReview, updateNewReviewCommentCreator, updateNewReviewRatingCreator} from "../../redux/reviews-reducer.js";

const ReviewComponent = (props) => {
	const restaurantId = localStorage.getItem('restaurantId');
	const [rating, setRating] = useState('');
	const [comment, setComment] = useState('');
	const [error, setError] = useState(null);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		const fetchRestaurantProducts = async () => {
			try {
				await getReviewsByRestaurantId(restaurantId);
			} catch (error) {
				console.error('Error fetching reviews products:', error);
				setError(error.message || 'Failed to fetch restaurant reviews.');
			}
		};

		fetchRestaurantProducts()
	}, []);

	const saveReview = async (e) => {
		e.preventDefault();

		const reviewDto = {comment, rating};
		try {
			await ReviewService.saveReview(restaurantId, reviewDto);
			setComment('');
			setRating('');
			await getReviewsByRestaurantId(restaurantId); // TODO: реализовать через state
		} catch (error) {
			console.error('Error adding review:', error);
			setError(error.message);
		}
	};

	const getReviewsByRestaurantId = async (restaurantId) => {
		try {
			const response = await ReviewService.getReviewsByRestaurantId(restaurantId);
			setReviews(response.data);
		} catch (error) {
			console.error('Error fetching reviews:', error);
		}
	};

	// useEffect(() => { // TODO: реализовать через state
	// 	getReviewsByRestaurantId(restaurantId);
	// }, [restaurantId]);

	// ===========  state  =====================================================================

	let reviewElements =
		props.reviews.map(review => <ReviewElement review={review}/>)
	;

	let newReviewCommentRef = React.createRef();
	let newReviewRatingRef = React.createRef();

	let makeNewReview = () => {
		let action = addReview();
		props.dispatch(action);
	}

	let onReviewCommentChange = () => {
		let newComment = newReviewCommentRef.current.value;
		let action = updateNewReviewCommentCreator(newComment);
		props.dispatch(action);
	};

	let onReviewRatingChange = () => {
		let newRating = newReviewRatingRef.current.value;
		let action = updateNewReviewRatingCreator(newRating);
		props.dispatch(action);
	};

	return (
		<div className='container'>

			<div className='row'>
				<div className='card col-6 offset-3 offset-3'>
					<h2 className='text-center'>Add review</h2>

					<div className='cart-body'>
						<form>
							<div className='form-group mb-2'>
								<label className='form-label'>Rating:</label>
								<input
									type="text"
									placeholder='Enter Rating'
									name='rating'
									value={rating}
									className='form-control'
									onChange={(e) => setRating(e.target.value)}
								>
								</input>
							</div>

							<div className='form-group mb-2'>
								<label className='form-label'>Comment:</label>
								<input
									type="text"
									placeholder='Enter Comment'
									name='comment'
									value={comment}
									className='form-control'
									onChange={(e) => setComment(e.target.value)}
								>
								</input>
							</div>

							<button className='btn btn-success mb-2' onClick={saveReview}>Add comment</button>
						</form>
					</div>
				</div>
			</div>

			<div>
				<div>
					<textarea
						onChange={onReviewCommentChange}
						ref={newReviewCommentRef}
						value={props.newReviewComment}
						placeholder="Enter your comment"
					/>
				</div>
				<div>
					<input
						type="number"
						onChange={onReviewRatingChange}
						ref={newReviewRatingRef}
						value={props.newReviewRating || ''}
						placeholder="Enter rating"
					/>
				</div>
				<div>
					<button className='btn btn-success mb-2' onClick={makeNewReview}>Add comment</button>
				</div>
			</div>

			<div>
				{reviewElements}
			</div>

			{reviews ? (
				<table className="table table-striped table-bordered">
					<thead>
					<tr>
						<th>review Id</th>
						<th>rating</th>
						<th>comment</th>
						<th>firstName</th>
						<th>lastName</th>
					</tr>
					</thead>
					<tbody>
					{reviews.map((review) => (
						<tr key={review.id}>
							<td>{review.id}</td>
							<td>{review.rating}</td>
							<td>{review.comment}</td>
							<td>{review.customer.firstName}</td>
							<td>{review.customer.lastName}</td>
						</tr>
					))}
					</tbody>
				</table>
			) : (
				<p>Loading...</p>
			)
			}
		</div>
	)
}

export default ReviewComponent