import React, {useEffect, useState} from 'react'
import * as CartService from "../../services/CartService.js";
import {getCartProductsState} from "../../redux/state.js";


const CartComponent = (props) => {

	// let customerProps = props.customerData.info
	const [cartProducts, setCartProducts] = useState([]);
	const [totalCart, setTotalCart] = useState(0);
	const [cartSize, setCartSize] = useState(0);
	const [error, setError] = useState(null);

	// const [customer, setCustomer] = useState(null);
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [address, setAddress] = useState('')
	const [postalCode, setPostalCode] = useState('')


	useEffect(() => {
		const fetchData = async () => {
			try {
				await Promise.all([

					getCartProducts(),
					// setCustomer(customerProps)
					getTotalCartById(),
					getCartProductsSize(),
				]);
			} catch (error) {
				setError(error.message || 'Failed to fetch cart products.');
			}
		};

		fetchData()
	}, []);

	useEffect(() => {

	}, []);

	const getCartProducts = async () => {
		try {
			const response = await CartService.getCartProducts();
			setCartProducts(response.data);


			// console.log(cartProductsState)
		} catch (error) {
			setError(error.message || 'Failed to fetch cart products.');
		}
	}

	const addProductToCart = async (productId) => {
		try {
			const response = await CartService.addProductToCart(productId);
		} catch (error) {
			setError(error.message || 'Failed to fetch cart products.');
		}
	}

	const payCart = async (e) => {
		e.preventDefault();

		try {
			await CartService.payCart();
			await CartService.clearCart();
		} catch (error) {
			setError(error.message || 'Failed to fetch cart products.');
		}
	}


	const handleClearCart = async (e) => {
		e.preventDefault();
		try {
			await CartService.clearCart();
		} catch (error) {
			setError(error.message || 'Failed to fetch cart products.');
		}
	}

	const getTotalCartById = async () => {
		try {
			const response = await CartService.getTotalCartById();
			setTotalCart(response.data);
		} catch (error) {
			setError(error.message || 'Failed to fetch cart products.');
		}
	}

	const getCartProductsSize = async () => {
		try {
			const response = await CartService.getCartProductsSize();
			setCartSize(response.data);
		} catch (error) {
			setError(error.message || 'Failed to fetch cart products.');
		}
	}

	// window.onerror = function(message, source, lineno, colno, error) {
	// 	// Обработка ошибки здесь
	// 	console.error('Глобальная ошибка:', error);
	// 	// Возвращение true предотвращает вывод ошибки в консоль браузера
	// 	return false;
	// };

	return (
		<main className="container">

			<div className="row g-5">
				<div className="col-md-5 col-lg-4 order-md-last">
					<h4 className="text-shojumaru-regular d-flex justify-content-between align-items-center mb-3">
						<span className="text-primary">Your cart</span>
						<span className="badge bg-primary rounded-pill">{cartSize}</span>
					</h4>

					<ul className="list-group mb-3">
						{cartProducts ? (cartProducts.map((cartProduct) => (
							<div>
								<li className="list-group-item d-flex justify-content-between lh-sm">
									<div>
										<h6 className="text-shojumaru-regular text-success my-0">{cartProduct.product.name}</h6>
										<small
											className="text-shojumaru-regular text-my-light">{cartProduct.product.price.toFixed(2)} €</small>
									</div>
									<span className="text-shojumaru-regular text-my-red">{cartProduct.quantity}</span>
								</li>
							</div>


						))) : (
							<p>Loading...</p>
						)}

						<li className="list-group-item d-flex justify-content-between">
							<span className="text-shojumaru-regular text-my-light">Total: {totalCart.toFixed(2)} €</span>

							<form>
								<button onClick={handleClearCart} type="submit"
										  className="btn btn-sm btn-outline-danger">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
										  className="bi bi-trash3" viewBox="0 0 16 16">
										<path
											d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5zM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47zm-1.642 0a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/>
									</svg>
								</button>
							</form>

						</li>

					</ul>
				</div>

				<div className="col-md-7 col-lg-8">

					<h4 className="mb-3">Delivery information</h4>

					<form>
						{/*{customer ? (customer => (*/}
						{/*	*/}
						{/*	*/}
						{/*)) : (*/}
						{/*	<p>Loading...</p>*/}
						{/*)}*/}
						<div className="row g-3">

							<div className="col-sm-6">
								<label htmlFor="firstName" className="form-label">First name*</label>
								<input type="text"
										 className="form-control"
										 name="firstName"
										 placeholder="First name"
										 onChange={(e) => setFirstName(e.target.value)}
										 value={firstName}></input>
							</div>

							<div className="col-sm-6">
								<label htmlFor="lastName" className="form-label">Last name*</label>
								<input type="text"
										 className="form-control"
										 name="lastName"
										 placeholder="Last name"
										 onChange={(e) => setLastName(e.target.value)}
										 value={lastName}></input>
							</div>

							<div className="col-12">
								<label htmlFor="email" className="form-label">Email*<span
									className="text-body-secondary"></span></label>
								<input type="email"
										 className="form-control"
										 placeholder="you@example.com"
										 name="email"
										 onChange={(e) => setEmail(e.target.value)}
										 value={email}></input>
							</div>

							<div className="col-8">
								<label htmlFor="address" className="form-label">Address*</label>
								<input type="text" className="form-control"
										 field="${customer.address}"
										 placeholder="Main St. 1"
										 name="address"
										 onChange={(e) => setAddress(e.target.value)}
										 value={address}></input>

							</div>

							<div className="col-4">
								<label htmlFor="zip" className="form-label">Zip*</label>
								<input type="text" className="form-control"
										 field="${customer.postalCode}"
										 placeholder="12345"
										 name="postalCode"
										 onChange={(e) => setPostalCode(e.target.value)}
										 value={postalCode}></input>
							</div>
						</div>

						<hr className="my-4"></hr>

						<h4 className="mb-3">Payment</h4>

						<div className="row gy-3">
							<div className="col-md-6">
								<label htmlFor="cc-name" className="form-label">Name on card</label>
								<input type="text" className="form-control" id="cc-name" placeholder=""></input>
							</div>

							<div className="col-md-6">
								<label htmlFor="cc-number" className="form-label">Credit card number</label>
								<input type="text" className="form-control" id="cc-number" placeholder=""></input>
							</div>

							<div className="col-md-3">
								<label htmlFor="cc-expiration" className="form-label">Expiration</label>
								<input type="text" className="form-control" id="cc-expiration" placeholder=""></input>
							</div>

							<div className="col-md-3">
								<label htmlFor="cc-cvv" className="form-label">CVV</label>
								<input type="text" className="form-control" id="cc-cvv" placeholder=""></input>
							</div>
						</div>

						<hr className="my-4"></hr>

						<button onClick={payCart} className="w-100 btn btn-primary btn-lg">
							Pay
						</button>
					</form>
				</div>
			</div>
		</main>

	)
}

export default CartComponent;