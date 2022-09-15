import { createSlice } from '@reduxjs/toolkit';
import { updateDbProduct, updateDbStockProduct } from '../../firebase/firebase-utils';

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
    updateProductStore: (state, action) => {
      const {
        payload: { id, name, price, discount, stock, urlPhoto },
      } = action;
      const product = state.products.find((item) => item.id === id);
      product.name = name;
      product.price = price;
      product.discount = discount;
      product.stock = stock;
      product.urlPhoto = urlPhoto;
      updateDbProduct(id, action.payload);
    },
    reduceStockProduct: (state, action) => {
      const product = state.products.find((item) => item.id === action.payload);
      !!product?.stock && product.stock--;
      updateDbStockProduct(action.payload, product.stock);
    },
    restoreStockProduct: (state, action) => {
      try {
        const product = state.products.find((item) => item.id === action.payload.id);
        const newStock = +product?.stock + action.payload.quantity;
        product.stock = !newStock ? '' : '' + newStock;
        updateDbStockProduct(action.payload.id, product.stock);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const { addProductStore, getProducts, reduceStockProduct, restoreStockProduct, updateProductStore } =
  productsSlice.actions;
