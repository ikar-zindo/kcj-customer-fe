import {CustomerDto} from "../dtos";
import {LoginDataResponse} from "../api/auth-types";

export interface AuthState {
	customer: CustomerDto | null;
	isAuth: boolean;
	tokens: LoginDataResponse | null;
	// TODO: imgUrl
}