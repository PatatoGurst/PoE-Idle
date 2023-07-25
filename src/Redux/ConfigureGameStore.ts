import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './Reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default function ConfigureGameStore(initialState: any) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducers,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())),
  );
}
