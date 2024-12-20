import axios from "axios";

const accessToken = localStorage.getItem("accessToken");

const instanceAPI = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	withCredentials: true,
	headers: {
		'Authorization': 'Bearer ' + accessToken
	}
});

export default instanceAPI;