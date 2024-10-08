import React, {useEffect, useState} from 'react'
import {getRestaurantById} from '../../services/RestaurantService';
import {NavLink} from 'react-router-dom'
import * as CartService from "../../services/CartService.js";
import * as RestaurantService from "../../services/RestaurantService.js";

const ListRestaurantProductsComponent = (props) => {

	const restaurantId = localStorage.getItem('restaurantId')
	const [error, setError] = useState(null);
	const [products, setProducts] = useState([])
	const [restaurant, setRestaurant] = useState(null)


	useEffect(() => {
		const fetchRestaurantProducts = async () => {
			try {
				await Promise.all([
					getRestaurantById(restaurantId),

				]);
			} catch (error) {
				console.error('Error fetching restaurant products:', error);
				setError(error.message || 'Failed to fetch restaurant products.');
			}
		};

		fetchRestaurantProducts()
	}, []);

	if (error) {
		return <p className="text-shojumaru-regular m-2 text-danger">Error: {error}</p>;
	}

	const getRestaurantById = async () => {
		try {
			const response = await RestaurantService.getRestaurantById(restaurantId);
			setRestaurant(response.data);
			setProducts(response.data.products);
		} catch (error) {
			console.error('Error fetching restaurant products:', error);
			setError(error.message || 'Failed to fetch restaurant products.');
		}
	}



	const handleAddProductToCart  = async (productId) => {
		try {
			const response = await CartService.addProductToCart(productId);
			console.log(response)
			console.log(response.data)
			console.log(response.statusText)
		} catch (error) {
			setError(error.message || 'Failed to fetch cart products.');
		}
	}


	return (
		<main>

			<div className='container'>

				<div className='row align-items-center'>
					<div className='col-md-6'>
						{restaurant ? (
							<h2 className="mx-5 text-shojumaru-regular text-my-light">{restaurant.name}</h2>
						) : (
							<p>Loading...</p>
						)}
					</div>
					<div className='col-md-6'>
						<NavLink to="/add-review" className='btn btn-primary mb-2 mx-5'>Add review</NavLink>
					</div>
				</div>
			</div>

			<div className="album py-5">

				<div className="container">
					<div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4">

						{products ? (products.map((product) => (
							<div key={product.id} className="col">
								<div className="card shadow-sm bg-body-secondary">
									<div className="card-body">
										<div className="d-flex gap-2">
											<div className="fixed-size-div">
												<img
													width="100px"
													height="100px"
													className="fixed-size-div"
													src={`src/assets/products/${product.imageUrl}`}
													alt={product.name}
												/>
											</div>
											<div>
												<h3 className="text-shojumaru-regular text-primary">{product.name}</h3>

												<p>{product.description}</p>
											</div>
										</div>
										<div className="d-flex justify-content-between align-items-center">
											<div className="btn-group">
													<button
														onClick={() => handleAddProductToCart(product.id)}
														type="submit"
														className="mt-2 btn btn-success text-shojumaru-regular btn-add-to-cart">
														<svg xmlns="http://www.w3.org/2000/svg"
															  width="16"
															  height="16"
															  fill="currentColor"
															  className="bi bi-cart-plus"
															  viewBox="0 0 16 16">
															<path
																d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"></path>
															<path
																d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
														</svg>
														Add to cart
													</button>
											</div>

											<div className="text-end">
												<p className="m-0 text-my-light text-shojumaru-regular">Price: {product.price.toFixed(2)} €</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						))) : (
							<p>Loading...</p>
						)}

					</div>
				</div>
			</div>
		</main>
	)
}

export default ListRestaurantProductsComponent