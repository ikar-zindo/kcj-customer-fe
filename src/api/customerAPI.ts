import instanceAPI from "./instanceAPI";
import {CustomerDto, CustomerUpdateDto} from "../types/dtos";
import {CustomerResponseDto} from "../types/api/common-types";

export const customerAPI = {
	me() {
		return instanceAPI.get<CustomerDto>('customer');
	},

	updateCustomerInfo(customerUpdateDto: CustomerUpdateDto) {
		return instanceAPI.put<CustomerResponseDto>('customer', customerUpdateDto);
	}
}