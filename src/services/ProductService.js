import axios from "axios";

const REST_API_PRODUCT = 'http://localhost:8889/product';

export const listProducts = () => axios.get(REST_API_PRODUCT);
export const getProduct = () => axios.get(`${REST_API_PRODUCT}/${id}`);