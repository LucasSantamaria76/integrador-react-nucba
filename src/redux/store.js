import { configureStore } from '@reduxjs/toolkit';
import {
  categoriesSlice,
  filterSlice,
  ordersSlice,
  productsSlice,
  showSlice,
  sliderSlice,
  themeSlice,
  unitsSlice,
  userSlice,
} from './slices';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

const reducers = combineReducers({
  show: showSlice.reducer,
  user: userSlice.reducer,
  theme: themeSlice.reducer,
  products: productsSlice.reducer,
  categories: categoriesSlice.reducer,
  units: unitsSlice.reducer,
  filter: filterSlice.reducer,
  orders: ordersSlice.reducer,
  slider: sliderSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['show', 'slider', 'units'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
