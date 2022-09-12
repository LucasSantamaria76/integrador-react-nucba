import { createSlice } from '@reduxjs/toolkit';
import { updateBDOrders } from '../../firebase/firebase-utils';

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {},
  reducers: {
    createOrder: (state, action) => {
      const { payload } = action;
      let newState = { ...state };
      if (!newState[payload.date]) {
        newState = { ...newState, [payload.date]: [payload] };
      } else newState[payload.date] = [...newState[payload.date], payload];
      updateBDOrders(newState);
      return newState;
    },
    setOrders: (state, action) => {
      return action.payload;
    },
  },
});

export const { createOrder, setOrders } = ordersSlice.actions;
