import React, {useState} from 'react'
import * as ReviewService from "../services/ReviewService.js";

const ReviewComponent = () => {
	const restaurantId = localStorage.getItem('restaurantId');
	const [rating, setRating] = useState('');
	const [comment, setComment] = useState('');
	const [error, setError] = useState(null);

	const saveReview = async (e) => {
		e.preventDefault();

		const reviewDto = { comment, rating };
		try {
			await ReviewService.saveReview(restaurantId, reviewDto);
			setComment('');
			setRating('');
		} catch (error) {
			console.error('Error adding review:', error);
			setError(error.message);
		}
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
		</div>
	)
}

export default ReviewComponent