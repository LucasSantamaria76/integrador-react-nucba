import { createSlice } from '@reduxjs/toolkit';

export const menusSlice = createSlice({
  name: 'menus',
  initialState: {
    showMenuCategory: false,
    showMenuUser: false,
    showMenuMobile: false,
  },
  reducers: {
    setShowMenuCategory: (state, { payload }) => {
      state.showMenuCategory = payload;
      state.showMenuUser = false;
      state.showMenuMobile = false;
    },
    setShowMenuUser: (state, { payload }) => {
      state.showMenuUser = payload;
      state.showMenuCategory = false;
      state.showMenuMobile = false;
    },
    setShowMenuMobile: (state, { payload }) => {
      state.showMenuMobile = payload;
      state.showMenuCategory = false;
      state.showMenuUser = false;
    },
    hideMenus: (state) => {
      state.showMenuMobile = false;
      state.showMenuCategory = false;
      state.showMenuUser = false;
    },
  },
});

export const { hideMenus, setShowMenuCategory, setShowMenuUser, setShowMenuMobile } = menusSlice.actions;
