import {createStore} from 'redux';

import reducer from './reducers/combine-reducers';

export default () => createStore(reducer);
