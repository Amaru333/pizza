import axios from 'axios';
import {
  API_GET_POPULAR_PRODUCTS,
  API_GET_TYPE_PRODUCTS,
} from '../../constants/APIEndpointConstants';

//Get popular products
const getPopularProducts = async data => {
  const response_data = await axios.get(
    `${API_GET_POPULAR_PRODUCTS}?limit=${data.limit}&skip=${data.skip}`,
  );
  return response_data;
};

//Get products by type
const getProductsByType = async data => {
  const response_data = await axios.get(
    `${API_GET_TYPE_PRODUCTS}/${data.type}?limit=${data.limit}&skip=${data.skip}`,
  );
  return response_data;
};

const productService = {
  getPopularProducts,
  getProductsByType,
};

export default productService;
