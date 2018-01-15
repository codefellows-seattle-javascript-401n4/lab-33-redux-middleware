'use strict';

import {createStore,applyMiddleware} from 'redux';
import reducer from '../src/reducer/combineReducer.js';
import reporter from '../src/middleware/reporter.js';

export default () => createStore(reducer,applyMiddleware(reporter));
