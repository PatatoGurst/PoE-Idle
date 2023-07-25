import { combineReducers } from 'redux';
import clickReducer from './ClickReducer';

const rootReducers = combineReducers({
  clicks: clickReducer,
});

export default rootReducers;
