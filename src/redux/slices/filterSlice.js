import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filters: {
      search: '',
      category: '',
      subCategory: '',
    },
  },
  reducers: {
    addFilter: (state, action) => {
      const {
        payload: { key, value },
      } = action;
      state.filters[key] = value;
    },
  },
});

export const { addFilter } = filterSlice.actions;
