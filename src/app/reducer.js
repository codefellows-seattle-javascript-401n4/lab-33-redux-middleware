import { combineReducers } from 'redux';

import categoryReducer from '../components/categories/category-reducer';
import expensesReducer from '../components/expenses/expenses-reducer';

export default combineReducers({
  categories: categoryReducer,
  expenses: expensesReducer
});