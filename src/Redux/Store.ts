import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './State';
import clickReducer from './Reducers/ClickSlice';
import characterReducer from './Reducers/CharacterSlice';
import inventoryReducer from './Reducers/InventorySlice';

export const store = configureStore({
  devTools: true,
  reducer: {
    click: clickReducer,
    character: characterReducer,
    inventory: inventoryReducer,
  },
  // here we restore the previously persisted state
  // preloadedState: loadState(),
});
