import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  },
  reducers: {
    setTheme: (state, actions) => {
      state.theme = actions.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
