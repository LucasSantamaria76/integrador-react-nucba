import { createSlice } from '@reduxjs/toolkit';

export const unitsSlice = createSlice({
  name: 'units',
  initialState: {
    units: {
      Unidades: {
        conv: 'un.',
        unit: 1,
      },
      Gramos: {
        conv: 'kg',
        unit: 1000,
      },
      Kilogramos: {
        conv: 'kg',
        unit: 1,
      },
      Litro: {
        conv: 'Lt',
        unit: 1,
      },
      Mililitro: {
        conv: 'Lt',
        unit: 1000,
      },
      'cm³': {
        conv: 'Lt',
        unit: 1000,
      },
    },
  },
  reducers: {
    addUnits: (state, action) => {
      state.units.push(action.payload);
    },
  },
});

export const { addUnits } = unitsSlice.actions;
