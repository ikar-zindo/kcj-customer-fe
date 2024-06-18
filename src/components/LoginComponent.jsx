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
			<h1>Get Access Token</h1>
			<form onSubmit={handleLogin}>
				<label htmlFor="username">Username:</label>
				<input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}
						 required/><br/><br/>
				<label htmlFor="password">Password:</label>
				<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
						 required/><br/><br/>
				<button type="submit">Get Token</button>
			</form>

			{tokens && (
				<div id="tokenDisplay">
					<p>Access Token:</p>
					<div className='w-50'>
						<p className="mx-5 text-break" style={{fontSize: '10px'}}>{tokens.accessToken}</p>
					</div>
					<p  className='mx-2'>Access Token Expiry: {tokens.accessTokenExpiry}</p>
					<p>Refresh Token:</p>
					<div className='w-50'>
						<p className="mx-5 text-break" style={{fontSize: '9px'}}>{tokens.refreshToken}</p>
					</div>
					<p className='mx-2'>Refresh Token Expiry: {tokens.refreshTokenExpire}</p>
				</div>
			)}

			{error && (
				<div id="tokenDisplay">
					<p>Error: {error}</p>
				</div>
			)}

			<h1>Logout</h1>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);

}

export default LoginComponent;