import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './State';
import rootReducers from './Reducers';

export const store = configureStore({
  devTools: true,
  reducer: rootReducers,
  // here we restore the previously persisted state
  preloadedState: loadState(),
});
