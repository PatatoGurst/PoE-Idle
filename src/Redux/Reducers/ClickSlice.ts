import { createSlice } from '@reduxjs/toolkit';

export const clickSlice = createSlice({
  name: 'clicks',
  initialState: {
    totalValue: 0,
    increment: 1,
  },
  reducers: {
    increment: (state) => {
      state.totalValue += state.increment;
    },
    updateIncrement: (state, action) => {
      state.increment += action.payload;
    },
    reset: (state) => {
      state.totalValue = 0;
    },
  },
});

export const { increment, updateIncrement, reset } = clickSlice.actions;

export default clickSlice.reducer;
