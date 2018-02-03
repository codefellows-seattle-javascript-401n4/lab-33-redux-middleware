import {createStore, applyMiddleware} from 'redux';

import reducer from './reducers/combine-reducers';
import reporter from './middleware/reporter.js';

export default () => createStore(reducer, applyMiddleware(reporter));
