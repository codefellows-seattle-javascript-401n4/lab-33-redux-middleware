import {combineReducers} from 'redux';

import catReducer from '../components/categories/cat-reducer.js';
import expReducer from '../components/expenses/exp-reducer.js';

export default combineReducers({
  categories: catReducer,
  expenses: expReducer,
});
