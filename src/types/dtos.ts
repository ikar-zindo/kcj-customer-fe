export type CustomerDto = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	address: string;
	postalCode: string;
	createdAt: string;
	updatedAt: string;
	isBlocked: boolean;
	cart: CartDto;
	orders?: Array<OrderDto> | null;
	reviews?: Array<ReviewDto> | null;
}

export type CustomerCreateDto = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	phoneNumber: string;
	address: string;
	postalCode: string;
}

export type CustomerUpdateDto = {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	address: string;
	postalCode: string;
}

export interface CartDto {
	id: string;
	customer: CustomerDto;
	cartProducts: Array<CartProductDto>;
}

export interface CartProductDto {
	id: string;
	product: ProductDto;
	quantity: number;
	createdAt: string;
}

export interface OrderDto {
	id: string;
	customer: CustomerDto;
	restaurant: RestaurantDto;
	createdAt: string;
	updateAt: string;
	deliveryAddress: string;
	postalCode: string;
	totalAmount: number;
	orderStatus: OrderStatus;
	orderProducts: Array<OrderProductDto>;
}

export interface OrderProductDto {
	id: string;
	quantity: number;
	order: OrderDto;
	product: ProductDto;
}

export interface ProductDto {
	id: number;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
	createdAt: string;
	isAvailable: boolean;
	restaurant: RestaurantDto;
}

export interface RestaurantDto {
	id: number;
	name: string;
	address: string;
	phoneNumber: string;
	openingHours: string;
	cuisineType: string;
	description: string;
	socialMediaLinks: string;
	isOpen: boolean;
	products?: Array<ProductDto> | null;
	reviews?: Array<ReviewDto> | null;

	imgUrl: string; // TODO: new field
	rating: number
}

export interface ReviewDto {
	id: number;
	restaurant: RestaurantDto;
	customer: CustomerDto;
	rating: number;
	comment: string;
	createdAt: string;
	updatedAt: string;
}

enum OrderStatus {
	CREATED = "CREATED",
	COOKING = "COOKING",
	DELIVERING = "DELIVERING",
	COMPLETED = "COMPLETED",
	CANCELLED = "CANCELLED",
}