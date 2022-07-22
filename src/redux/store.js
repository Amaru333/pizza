import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    product: productReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
