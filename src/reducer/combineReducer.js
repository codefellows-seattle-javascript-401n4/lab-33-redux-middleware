'use strict';

import {combineReducers} from 'redux';

import CatReducer from '../reducer/catReducer.js';
import ExpenseReducer from '../reducer/expenseReducer.js';

export default combineReducers({
  categories: CatReducer,
  expenses: ExpenseReducer,
});
