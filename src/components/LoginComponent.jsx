import React, {useState} from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8889';

const LoginComponent = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [tokens, setTokens] = useState(null);
	const [error, setError] = useState(null);

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${API_BASE_URL}/jwt/tokens`, {}, {
				headers: {
					'Authorization': 'Basic ' + btoa(username + ':' + password)
				}
			});
			if (response.status == 200) { // сохранение в localStorage
				console.log('Login successful');

				setTokens(response.data);
				localStorage.setItem('accessToken', response.data.accessToken);
				localStorage.setItem('accessTokenExpiry', response.data.accessTokenExpiry);
				localStorage.setItem('refreshToken', response.data.refreshToken);
				localStorage.setItem('refreshTokenExpire', response.data.refreshTokenExpire);
				setError(null);
			} else {
				console.log('Login field ' + response.statusText + ' status ' + response.status);
			}
		} catch (error) {
			console.error('Error fetching token:', error);
			setError('Error fetching token: ' + error.message);
		}
	};

	const handleLogout = async () => {
		const refreshToken = localStorage.getItem('refreshToken');
		try {
			const response = await axios.post('http://localhost:8889/jwt/logout', {}, {
				headers: {
					'Authorization': 'Bearer ' + refreshToken
				}
			});
			if (response.status === 204) {
				console.log('Logout successful');
				localStorage.removeItem('accessToken');
				localStorage.removeItem('accessTokenExpiry');
				localStorage.removeItem('refreshToken');
				localStorage.removeItem('refreshTokenExpire');
				setTokens(null);
			} else {
				console.error('Logout failed:', response.statusText);
			}
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
						<p className="text-break" style={{fontSize: '10px'}}>{tokens.accessToken}</p>
					</div>
					<p>Access Token Expiry: {tokens.accessTokenExpiry}</p>
					<p>Refresh Token:</p>
					<div className='w-50'>
						<p className="text-break" style={{fontSize: '9px'}}>{tokens.refreshToken}</p>
					</div>
					<p>Refresh Token Expiry: {tokens.refreshTokenExpire}</p>
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