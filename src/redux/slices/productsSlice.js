import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: {},
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    addProductStore: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { getProducts, addProductStore } = productsSlice.actions;
