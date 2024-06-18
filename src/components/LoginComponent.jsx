import React, {useState} from 'react';
import {jwtService, logoutService} from "../services/JwtService.js";

const LoginComponent = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [tokens, setTokens] = useState(null);
	const [error, setError] = useState(null);

	// jwtService
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await jwtService(username, password)
			setTokens(response.data);
			setError(null);
		} catch (error) {
			console.error('Error fetching token:', error);
			setError('Error fetching token: ' + error.message);
		}
	};

	// logoutService
	const handleLogout = async () => {
		try {
			await logoutService();
			setTokens(null);
		} catch (error) {
			console.error('Error during logout:', error);
		}
	};

	return (
		<div className="App">


			<div className="modal modal-sheet position-static d-block bg-body-tertiary p-4 py-md-5"
				  tabIndex="-1"
				  role="dialog"
				  id="modalSignin">
				<div className="modal-dialog" role="document">
					<div className="modal-content rounded-4 shadow">
						<div className="modal-header p-5 pb-4 border-bottom-0">
							<h1 className="fw-bold mb-0 fs-2">Get Access Token</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>

						<div className="modal-body p-5 pt-0">
							<form className="" onSubmit={handleLogin}>
								<div className="form-floating mb-3">

									<input className="form-control rounded-3"
											 type="text"
											 placeholder="name@example.com"
											 id="username"
											 value={username} onChange={(e) => setUsername(e.target.value)}/>

									<label htmlFor="username">Email address</label>
								</div>
								<div className="form-floating mb-3">
									<input type="password"
											 className="form-control rounded-3"
											 id="password"
											 onChange={(e) => setPassword(e.target.value)}
											 placeholder="Password"/>
									<label htmlFor="password">Password</label>
								</div>

								<button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary text-shojumaru-regular"
										  type="submit">Sign up
								</button>
							</form>

							<button onClick={handleLogout}
									  className="w-100 mb-2 btn btn-lg rounded-3 btn-dark text-shojumaru-regular"
									  type="submit">Logout</button>

							{tokens && (
								<div id="tokenDisplay">
									<p>Access Token:</p>
									<div className='w-100'>
										<p className="text-break" style={{fontSize: '10px'}}>{tokens.accessToken}</p>
									</div>
									<p className='mx-2'>Access Token Expiry: {tokens.accessTokenExpiry}</p>
									<p>Refresh Token:</p>
									<div className='w-100'>
										<p className="text-break" style={{fontSize: '9px'}}>{tokens.refreshToken}</p>
									</div>
									<p className='mx-2'>Refresh Token Expiry: {tokens.refreshTokenExpire}</p>
								</div>
							)}

							{error && (
								<div id="tokenDisplay">
									<p>Error: {error}</p>
								</div>
							)}

						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginComponent;