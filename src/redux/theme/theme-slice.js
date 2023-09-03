import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = { name: 'light' };
const themeSlice = createSlice({
  name: 'theme',
  initialState,

  reducers: {
    toggleTheme(state) {
      state.name = state.name === 'light' ? 'dark' : 'light';
    },
    resetTheme(state) {
      state = initialState;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const themeReducer = persistReducer(
  {
    key: 'theme',
    storage,
  },
  themeSlice.reducer
);
