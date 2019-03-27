import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth/reducer';
import categories from './categories/reducer';
import client from './client/reducer';

export default combineReducers({
  auth,
  categories,
  client,
  routing: routerReducer,
});
