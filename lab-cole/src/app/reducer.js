'use strict';
//class demo below, may not need to change anything to merge with lab 26, still scaffolding
import {combineReducers} from 'redux';

import categoryReducer from '../components/categories/category-reducer.js';
import cardReducer from '../components/cards/card-reducer.js';


export default combineReducers({
  categories: categoryReducer,
  cards: cardReducer
});