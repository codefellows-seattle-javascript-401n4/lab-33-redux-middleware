import {combineReducers} from 'redux';

import category from './category-reducer';
import expense from './expense-reducer';

export default combineReducers({
  category,
  expense,
});
