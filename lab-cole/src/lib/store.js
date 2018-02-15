import {createStore} from 'redux';
import reducer from '../reducer';
import middleware from '../middleware/middleware.js'

export default () => createStore(reducer);