import { createSlice } from '@reduxjs/toolkit';

export const showSlice = createSlice({
  name: 'show',
  initialState: {
    showMovilMenu: false,
    showUserMenu: false,
    showMenuCategory: false,
  },
  reducers: {
    setShowMovilMenu: (state, { payload }) => {
      state.showMovilMenu = payload;
    },
    setShowUserMenu: (state, { payload }) => {
      state.showUserMenu = payload;
    },
    setShowMenuCategory: (state, { payload }) => {
      state.showMenuCategory = payload;
    },
    hideMenus: (state) => {
      state.showUserMenu = false;
      state.showMenuCategory = false;
    },
  },
});

export const { hideMenus, setShowMenuCategory, setShowMovilMenu, setShowUserMenu } = showSlice.actions;
