import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
  name: 'clicks',
  initialState: {
    name: 'Unamed Exile',
    level: 1,
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeName } = characterSlice.actions;

export default characterSlice.reducer;
