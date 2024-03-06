import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './State';
import clickReducer from './Reducers/ClickSlice';

export const store = configureStore({
  devTools: true,
  reducer: {
    clicks: clickReducer,
  },
  // here we restore the previously persisted state
  preloadedState: loadState(),
});
