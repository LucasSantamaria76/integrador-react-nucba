import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogged: false,
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    toggleLogged: (state) => {
      state.isLogged = !state.isLogged;
    },
  },
});

export const { setUser } = userSlice.actions;
