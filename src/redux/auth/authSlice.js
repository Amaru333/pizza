import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  addDetailsSuccess: '',
};

//Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message = error.response.data.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

//Set user if already logged in
export const setUserDetails = createAsyncThunk(
  'auth/setUserDetails',
  async (user, thunkAPI) => {
    try {
      return await authService.setUserDetails(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.toString());
    }
  },
);

//Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message = error.response.data.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

//Add user information
export const addUserInfo = createAsyncThunk(
  'auth/addUserInfo',
  async (details, thunkAPI) => {
    try {
      return await authService.addUserInfo(details);
    } catch (error) {
      const message = error.response.data.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

//Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: state => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
      state.addDetailsSuccess = '';
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(setUserDetails.pending, state => {
        state.isLoading = true;
      })
      .addCase(setUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(setUserDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
      })
      .addCase(addUserInfo.pending, state => {
        state.isLoading = true;
        state.addDetailsSuccess = '';
      })
      .addCase(addUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = {...state.user, ...action.payload};
        state.addDetailsSuccess = 'add-details-success';
      })
      .addCase(addUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {reset, setUser} = authSlice.actions;

export default authSlice.reducer;
