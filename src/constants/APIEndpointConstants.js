const DOMAIN_URL = 'http://10.0.2.2:3000';

const USER_ROUTE = DOMAIN_URL + '/api/user/';
const PRODUCT_ROUTE = DOMAIN_URL + '/api/product/';
const CART_ROUTE = DOMAIN_URL + '/api/cart/';
const ORDERS_ROUTE = DOMAIN_URL + '/api/orders/';

export const API_REGISTER_USER = USER_ROUTE + 'register';
export const API_LOGIN_USER = USER_ROUTE + 'login';
export const API_UDPATE_USER_DETAILS = USER_ROUTE + 'update-details';
export const API_GET_USER_DETAILS = USER_ROUTE + 'get-user-details';

export const API_GET_POPULAR_PRODUCTS = PRODUCT_ROUTE + 'sort/popular';
export const API_GET_TYPE_PRODUCTS = PRODUCT_ROUTE + 'type';

export const API_GET_USER_CART = CART_ROUTE + 'details';
export const API_ADD_TO_CART = CART_ROUTE;

export const API_ORDERS_RAZORPAY = ORDERS_ROUTE + 'razorpay';

export const PAGE_LIMIT = 5;
