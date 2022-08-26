import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../slices';
import { themeSlice } from '../slices';
import { productsSlice } from '../slices';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

const reducers = combineReducers({
  user: userSlice.reducer,
  theme: themeSlice.reducer,
  products: productsSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
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
