import './style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './component/app';
import reducer from './reducer/index.js';

let store = createStore(reducer);

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  container);

