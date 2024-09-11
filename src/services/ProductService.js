import axios from "axios";
import InstanceAPIWithBearer from "./API.js";

const instance = axios.create(InstanceAPIWithBearer);

export const listProducts = () => instance.get('/product');
export const getProduct = () => instance.get(`/product/${id}`);