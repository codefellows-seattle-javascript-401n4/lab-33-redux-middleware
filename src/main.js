'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import '../src/style/main.scss';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from '../src/components/app.js';

import createStore from '../lib/store.js';
const store = createStore();


class Main extends React.Component {
  constructor(props){
    super(props);
  }
  didMount(){
    store.subsribe( () => console.log('__STORE__', store.getState()));
  }
  render(){
    return(
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

ReactDom.render(<Main/>, document.getElementById('root'));
