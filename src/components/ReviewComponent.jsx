import React, {useEffect, useState} from 'react'
import * as ReviewService from "../services/ReviewService.js";
import {useNavigate} from "react-router-dom";
import {getRestaurantById} from "../services/RestaurantService.js";
import {getReviewsByRestaurantId} from "../services/ReviewService.js";

const ReviewComponent = () => {
	const restaurantId = localStorage.getItem('restaurantId');
	const [rating, setRating] = useState('');
	const [comment, setComment] = useState('');
	const [error, setError] = useState(null);
	const [reviews, setReviews] = useState([])

	useEffect(() => {
		const fetchRestaurantProducts = async () => {
			try {
				const response = await getRestaurantById(restaurantId);
				setReviews(response.data.reviews);
			} catch (error) {
				console.error('Error fetching reviews products:', error);
				setError(error.message || 'Failed to fetch restaurant reviews.');
			}
		};

		fetchRestaurantProducts()
	}, []);


	const saveReview = async (e) => {
		e.preventDefault();

		const reviewDto = { comment, rating };
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
							{/*<td>*/}
							{/*	<button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button>*/}

							{/*	<button className="btn btn-danger" onClick={() => removeEmployee(employee.id)}*/}
							{/*			  style={{marginLeft: '10px'}}*/}
							{/*	>Delete</button>*/}
							{/*</td>*/}
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