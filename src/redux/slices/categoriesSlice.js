import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    values: {},
    selectedCategory: '',
    selectedSubCategory: '',
  },
  reducers: {
    getCategories: (state, action) => {
      state.values = action.payload;
    },
    selectCategory: (state, action) => {
      state.selectedCategory === action.payload
        ? (state.selectedCategory = '')
        : (state.selectedCategory = action.payload);
      state.selectedSubCategory = '';
    },
    selectSubCategory: (state, action) => {
      state.selectedSubCategory = action.payload;
    },
  },
});

export const { getCategories, selectCategory, selectSubCategory } = categoriesSlice.actions;
