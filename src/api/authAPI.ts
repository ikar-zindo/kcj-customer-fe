import instanceAPI from "./instanceAPI";
import {LoginDataRequest, LoginDataResponse} from "../types/api/auth-types";
import {APIResponseType, CustomerResponseDto} from "../types/api/common-types";
import axios from "axios";
import {CustomerCreateDto, CustomerDto} from "../types/dtos.ts";


export const authAPI = {
	async login(data: LoginDataRequest) {
		return await axios.post<LoginDataResponse>(
			`${import.meta.env.VITE_BASE_URL}jwt/tokens`, {},
			{
				withCredentials: true,
				headers: {
					'Authorization': 'Basic ' + btoa(data.username + ':' + data.password)
				}
			});
	},

	async logout() {
		const refreshToken = localStorage.getItem('refreshToken');
		return await axios.post<APIResponseType>(`${import.meta.env.VITE_BASE_URL}jwt/logout`,
			{},
			{
				withCredentials: true,
				headers: {
					'Authorization': 'Bearer ' + refreshToken
				}
			});
	},

	me() {
		return instanceAPI.get<CustomerDto>('customer');
	},

	async register(data: CustomerCreateDto) {
		return await axios.post<CustomerResponseDto>(`${import.meta.env.VITE_BASE_URL}register`,
			data,
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				}
			});
	},
}