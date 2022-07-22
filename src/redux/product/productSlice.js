import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {PAGE_LIMIT} from '../../constants/APIEndpointConstants';
import productService from './productService';

const initialState = {
  popularItems: {
    page: 0,
    count: 99,
    limit: 10,
    items: [],
  },
  veg: {
    page: 0,
    count: 99,
    limit: 10,
    items: [],
  },
  non_veg: {
    page: 0,
    count: 99,
    limit: 10,
    items: [],
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//Get popular products
export const getPopularProducts = createAsyncThunk(
  'product/popular',
  async (data, thunkAPI) => {
    try {
      const response = await productService.getPopularProducts(data);
      return {
        response_data: response,
        query: data,
      };
    } catch (error) {
      const message = error.response.data.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

//Get popular products
export const getProductsByType = createAsyncThunk(
  'product/type',
  async (data, {getState, rejectWithValue}) => {
    const {product} = getState();
    const forwardData = {
      page: product[data.type].page,
      limit: PAGE_LIMIT,
      skip: product[data.type].page * PAGE_LIMIT,
      type: data.type,
    };
    try {
      const response = await productService.getProductsByType(forwardData);
      return {
        response_data: response,
        query: forwardData,
      };
    } catch (error) {
      const message = error.response.data.message || error.toString();
      return rejectWithValue(message);
    }
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetProductSlice: state => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = '';
      state.popularItems = initialState.popularItems;
      state.veg = initialState.veg;
      state.non_veg = initialState.non_veg;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPopularProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPopularProducts.fulfilled, (state, action) => {
        console.log(action.payload, 'ACTIONNNNNNNN');
        state.isLoading = false;
        state.isSuccess = true;
        state.popularItems.items.push(
          ...action.payload.response_data.data[0].results,
        );
        state.popularItems.count = parseInt(
          action.payload.response_data.data[0].count[0].count,
        );
        state.popularItems.page = parseInt(action.payload.query.page) + 1;
      })
      .addCase(getPopularProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getProductsByType.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProductsByType.fulfilled, (state, action) => {
        console.log(action.payload, 'ACTIONNNNNNNN');
        state.isLoading = false;
        state.isSuccess = true;
        if (action.payload.query.type == 'veg') {
          state.veg.items.push(...action.payload.response_data.data[0].results);
          state.veg.count = parseInt(
            action.payload.response_data.data[0].count[0].count,
          );
          state.veg.page = parseInt(action.payload.query.page) + 1;
        } else if (action.payload.query.type == 'non_veg') {
          state.non_veg.items.push(
            ...action.payload.response_data.data[0].results,
          );
          state.non_veg.count = parseInt(
            action.payload.response_data.data[0].count[0].count,
          );
          state.non_veg.page = parseInt(action.payload.query.page) + 1;
        }
      })
      .addCase(getProductsByType.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {resetProductSlice} = productSlice.actions;

export const getPopularCount = createSelector(
  state => state.product,
  product => product.popularItems.count,
);

export const getPopularPage = createSelector(
  state => state.product,
  product => product.popularItems.page,
);

export const getPopularProduct = createSelector(
  state => state.product,
  product => product.popularItems.items,
);

export const getVegCount = createSelector(
  state => state.product,
  product => product.veg.count,
);

export const getVegPage = createSelector(
  state => state.product,
  product => product.veg.page,
);

export const getVegProduct = createSelector(
  state => state.product,
  product => product.veg.items,
);

export const getNonVegCount = createSelector(
  state => state.product,
  product => product.non_veg.count,
);

export const getNonVegPage = createSelector(
  state => state.product,
  product => product.non_veg.page,
);

export const getNonVegProduct = createSelector(
  state => state.product,
  product => product.non_veg.items,
);

export const productLoading = createSelector(
  state => state.product,
  product => product.isLoading,
);

export const paginationType = type => state => {
  if (type == 'popular_choices') {
    const return_items = state.product.popularItems;
    const pagination_data = {
      page: return_items.page,
      count: return_items.count,
      limit: return_items.limit,
    };
    return pagination_data;
  } else {
    const return_items = state.product[type];
    const pagination_data = {
      page: return_items.page,
      count: return_items.count,
      limit: return_items.limit,
    };
    return pagination_data;
  }
};

export const getProductListByType = type => state => {
  if (type == 'popular_choices') {
    const return_items = state.product.popularItems;
    return return_items.items;
  } else {
    const return_items = state.product[type];
    return return_items.items;
  }
};

export default productSlice.reducer;
