import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {},
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { getCategories } = categoriesSlice.actions;
