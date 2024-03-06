import { createSlice } from '@reduxjs/toolkit';
import UpdateCurrency from '../Model/Inventory/UpdateCurrency';

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    transmutation: 0,
    augmentation: 1,
    alteration: 1,
  },
  reducers: {
    updateCurrency: (state, { payload }: { payload: UpdateCurrency }) => {
      switch (payload.type) {
        case 'transmutation':
          state.transmutation += payload.amount;
          break;
        case 'augmentation':
          state.augmentation += payload.amount;
          break;
        case 'alteration':
          state.alteration += payload.amount;
          break;
      }
    },
  },
});

export const { updateCurrency } = inventorySlice.actions;

export default inventorySlice.reducer;
