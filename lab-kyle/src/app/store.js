import {createStore, applyMiddleware} from 'redux';

import reducer from './reducer';
import validForm from '../lib/form-valid';

export default () => createStore(reducer, applyMiddleware(validForm));
