import axios from 'axios';
import {
  API_ADD_TO_CART,
  API_GET_USER_CART,
} from '../../constants/APIEndpointConstants';

//Get cart details
const getCartDetails = async data => {
  const response_data = await axios.get(`${API_GET_USER_CART}/${data.id}`, {
    headers: {
      'auth-token': data.token,
    },
  });
  return response_data;
};

//Add to cart
const addToCart = async product_data => {
  const response_data = await axios.post(
    `${API_ADD_TO_CART}${product_data.user.user_id}`,
    {
      data: {
        data: product_data.product.data,
        size: product_data.product.size,
        quantity: product_data.product.quantity,
      },
    },
    {
      headers: {
        'auth-token': product_data.user.user_token,
      },
    },
  );
  return response_data;
};

//Update quantity
const updateQuantity = async data => {
  const response_data = await axios.patch(
    `${API_ADD_TO_CART}${data.user_id}`,
    {
      updatedQuantity: data.updatedQuantity,
      index: data.index,
    },
    {
      headers: {
        'auth-token': data.user_token,
      },
    },
  );
  return response_data;
};

const cartService = {getCartDetails, addToCart, updateQuantity};

export default cartService;
