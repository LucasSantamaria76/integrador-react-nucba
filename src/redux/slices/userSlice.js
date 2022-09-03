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
    addRemoveFavorite: (state, action) => {
      const isFavorite = state.favorites.includes(action.payload);
      isFavorite
        ? (state.favorites = state.favorites.filter((item) => item !== action.payload))
        : state.favorites.push(action.payload);
      updateDBFav(state.user.id, state.favorites);
    },
    addProductToCart: (state, action) => {
      const productInCart = state.cart.items.find((item) => item.id === action.payload.id);
      !productInCart ? state.cart.items.push({ ...action.payload, quantity: 1 }) : (productInCart.quantity += 1);
      updateDBCart(state.user.id, state.cart);
    },
    removeProductToCart: (state, action) => {
      const items = state.cart.items.find((item) => item.id === action.payload.id);
      items?.quantity > 1
        ? (items.quantity -= action.payload.quantity)
        : !!items
        ? (state.cart.items = state.cart.items.filter((item) => item.id !== action.payload.id))
        : null;
      updateDBCart(state.user.id, state.cart);
    },
  },
});

export const { addProductToCart, addRemoveFavorite, removeProductToCart, setCurrentUser, logout } = userSlice.actions;
