import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    FilterSearch: '',
    FilterCategory: '',
    FilterSubCategory: '',
  },
  reducers: {
    addFilterSearch: (state, action) => {
      state.FilterSearch = action.payload;
    },
    addFilterCategory: (state, action) => {
      state.FilterCategory === action.payload ? (state.FilterCategory = '') : (state.FilterCategory = action.payload);
      state.FilterSubCategory = '';
    },
    addFilterSubCategory: (state, action) => {
      state.FilterSubCategory === action.payload
        ? (state.FilterSubCategory = '')
        : (state.FilterSubCategory = action.payload);
    },
  },
});

export const { addFilterCategory, addFilterSearch, addFilterSubCategory } = filterSlice.actions;
