import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';
import cartReducer from './cart/cartSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
