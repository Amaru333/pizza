import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth/authSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
