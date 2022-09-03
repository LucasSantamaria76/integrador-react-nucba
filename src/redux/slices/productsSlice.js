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
    reduceStockProduct: (state, action) => {
      const product = state.products.find((item) => item.id === action.payload);
      !!product?.stock && product.stock--;
    },
    restoreStockProduct: (state, action) => {
      const product = state.products.find((item) => item.id === action.payload.id);
      const newStock = +product.stock + action.payload.quantity;
      product.stock = '' + newStock;
    },
  },
});

export const { addProductStore, getProducts, reduceStockProduct, restoreStockProduct } = productsSlice.actions;
