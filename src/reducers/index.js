import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import home from '../components/home/home-actions-reducers';
import recipe from '../components/recipe/recipe-actions-reducers';

const rootReducer = combineReducers({
  home,
  recipe,
  routing: routerReducer
});

export default rootReducer;
