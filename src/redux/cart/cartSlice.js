import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import cartService from './cartService';

const initialState = {
  items: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//Get cart details
export const loadCartDetails = createAsyncThunk(
  'cart/details',
  async (data, thunkAPI) => {
    try {
      return await cartService.getCartDetails(data);
    } catch (error) {
      const message = error.response.data.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

//Add to cart
export const addToCart = createAsyncThunk(
  'cart/add',
  async (product_data, thunkAPI) => {
    try {
      const add_item = await cartService.addToCart(product_data);
      return product_data;
    } catch (error) {
      const message = error.response.data.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

//Update quantity
export const updateQuantity = createAsyncThunk(
  'cart/update-quantity',
  async (data, thunkAPI) => {
    try {
      const update_quantity = await cartService.updateQuantity(data);
      return data;
    } catch (error) {
      const message = error.response.data.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart: state => {
      state.items = [];
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadCartDetails.pending, state => {
        state.isLoading = true;
      })
      .addCase(loadCartDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items = action.payload.data[0].cart;
      })
      .addCase(loadCartDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addToCart.pending, state => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.items.push(action.payload.product);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateQuantity.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (action.payload.updatedQuantity == 0) {
          state.items.splice(action.payload.index, 1);
        } else {
          state.items[action.payload.index].quantity = parseInt(
            action.payload.updatedQuantity,
          );
        }
      })
      .addCase(updateQuantity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {resetCart} = cartSlice.actions;

export const getCartItems = createSelector(
  state => state.cart,
  cart => cart.items,
);

export const getCartLength = () => state => {
  const cart_items = state.cart.items;
  let cart_length = 0;
  cart_items?.forEach(item => {
    cart_length = cart_length + parseInt(item?.quantity);
  });
  return cart_length;
};

export const getCartPrice = () => state => {
  const cart_items = state.cart.items;
  let cart_price = 0;
  cart_items?.forEach(item => {
    const matched_size = item.price.filter(prices => prices.type == item.size);
    cart_price =
      cart_price + parseInt(matched_size[0].price) * parseInt(item.quantity);
  });
  return cart_price;
};

export default cartSlice.reducer;
