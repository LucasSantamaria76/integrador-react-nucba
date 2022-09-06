import { createSlice } from '@reduxjs/toolkit';
import { auth, updateDBCart, updateDBFav } from '../../firebase/firebase-utils';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogged: false,
    user: null,
    cart: {
      items: [],
      totalCost: 0,
      totalDiscount: 0,
      visible: false,
    },
    favorites: [],
    myShopping: {
      id: '',
      items: [],
      totalCost: 0,
      dateOfPurchase: '',
    },
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
      state.isLogged = !!state.user;
    },
    logout: (state) => {
      state.isLogged = false;
      auth.signOut();
    },
    toggleVisibleCart: (state) => {
      state.cart.visible = !state.cart.visible;
    },
    addRemoveFavorite: (state, action) => {
      const isFavorite = state.favorites.includes(action.payload);
      isFavorite
        ? (state.favorites = state.favorites.filter((item) => item !== action.payload))
        : state.favorites.push(action.payload);
      updateDBFav(state.user.id, state.favorites);
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    addProductToCart: (state, action) => {
      const {
        payload: { discount, id, price },
      } = action;

      const { cart } = state;

      const productInCart = cart.items.find((item) => item.id === id);

      !productInCart ? cart.items.push({ ...action.payload, quantity: 1 }) : (productInCart.quantity += 1);

      cart.totalCost += +price;
      cart.totalDiscount += price * (discount / 100);

      updateDBCart(state.user.id, state.cart);
    },
    removeProductToCart: (state, action) => {
      const {
        payload: { discount, id, price, quantity },
      } = action;
      const { cart } = state;

      const items = state.cart.items.find((item) => item.id === id);
      quantity >= items?.quantity
        ? (state.cart.items = state.cart.items.filter((item) => item.id !== id))
        : (items.quantity -= quantity);

      cart.totalCost -= price * quantity;
      cart.totalDiscount -= price * (discount / 100) * quantity;

      updateDBCart(state.user.id, state.cart);
    },
    emptyCart: (state) => {
      state.cart.items = [];
      state.cart.totalCost = 0;
      state.cart.totalDiscount = 0;
      updateDBCart(state.user.id, state.cart);
    },
  },
});

export const {
  addProductToCart,
  addRemoveFavorite,
  emptyCart,
  removeProductToCart,
  setCurrentUser,
  logout,
  setCart,
  setFavorites,
  toggleVisibleCart,
} = userSlice.actions;
