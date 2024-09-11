// TODO: переделать с использованием storage или redux
const accessToken = localStorage.getItem("accessToken");

const InstanceAPIWithBearer = {
	baseURL: import.meta.env.VITE_BASE_URL,
	withCredentials: true,
	headers: {
		// 'Authorization': 'Bearer ' + import.meta.env.VITE_AUTH_TOKEN
		'Authorization': 'Bearer ' + accessToken
	}
};

export default InstanceAPIWithBearer;