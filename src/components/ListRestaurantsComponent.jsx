import React, {useEffect, useState} from 'react'
import {listRestaurants} from '../services/RestaurantService';
import {Link} from 'react-router-dom';

const ListRestaurantsComponent = () => {

	const [restaurants, setRestaurants] = useState([])
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchRestaurants = async () => {
			try {
				const response = await listRestaurants();
				setRestaurants(response.data);
			} catch (error) {
				console.error('Error fetching restaurants:', error);
				setError(error.message || 'Failed to fetch restaurants.');
			}
		};

		fetchRestaurants()
	}, []);

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className="container">
			<main>
				<div className="album py-5">

					<div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3">

						{restaurants.map((restaurant) => (
							<div key={restaurant.id} className="col">
								<div className="card shadow-sm bg-body-secondary">
									<div className="card-body">
										<div className="d-flex gap-2">

											<div className="fixed-size-div">

											</div>
											<div>
												<Link
													className="text-shojumaru-regular"
													to={`/restaurant/${restaurant.id}`}
													onClick={() => localStorage.setItem('restaurantId', restaurant.id)}
												>
													<h3>{restaurant.name}</h3>
												</Link>
												<p>{restaurant.description}</p>
											</div>
										</div>

										<div className="d-flex justify-content-between align-items-center">

											<div className="btn-group">

												<button
													className={`btn rounded-pill px-3 ${restaurant.isOpen ? 'btn-success' : 'btn-danger'}`}
													type="button">
													<p className="m-0 text-shojumaru-regular">{restaurant.isOpen ? 'Open' : 'Closed'}</p>
												</button>

											</div>

											<div className="text-end">
												<p className="m-0 text-my-light text-shojumaru-regular">{restaurant.phoneNumber}</p>

												<p className="text-shojumaru-regular m-0 text-success">{restaurant.cuisineType}</p>

												<p className="m-0 text-secondary">{restaurant.openingHours}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}

					</div>
				</div>
			</main>
		</div>
	)
}

export default ListRestaurantsComponent