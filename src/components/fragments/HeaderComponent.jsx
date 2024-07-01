import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {getRestaurants} from '../../services/RestaurantService';

const HeaderComponent = (props) => {

	const navigate = useNavigate();

	// простая отработака GET запроса для перехода на страницу с ресторанами
	const handleToRestaurantClick = async (e) => {
		e.preventDefault();
		try {
			await getRestaurants();
			navigate('/restaurant');
		} catch (error) {
			console.error('!!!Error fetching rectic:', error);
		}
	};

	return (
		<div className="container">
			<header
				className="text-shojumaru-regular d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
				<div className="col-md-3 mb-2 mb-md-0">
					<a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
						<img alt="logo" id="logoImage" width="40px" height="40px"
							  src="/src/assets/logo/logo-label-light.png"></img>

						<span className="fs-6 mx-2 text-my-light text-shojumaru-regular">K-Curry<br></br><span
							className="text-my-red">Jib</span></span>
					</a>
				</div>

				<ul className="nav nav-pills col-12 col-md-auto mb-2 justify-content-center mb-md-0">
					<li><NavLink to="/" className="nav-link px-2">Home</NavLink></li>
					<li><NavLink to="/product" className="nav-link px-2">Menu</NavLink></li>
					<li><NavLink to="/restaurant" className="nav-link px-2">Restaurants</NavLink></li>
					<li><NavLink to="/cart" className="nav-link px-2">Cart</NavLink></li>
				</ul>

				<div className="text-end">
					<NavLink to="/login" className="btn btn-outline-success me-2">Login</NavLink>
					<NavLink to="/registration" type="button" className="btn btn-outline-success">Registration</NavLink>
				</div>
			</header>
		</div>
	)
}

export default HeaderComponent