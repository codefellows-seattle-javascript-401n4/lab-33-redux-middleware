'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {say} from 'cowsay';

import './style/main.scss'

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    )
  }
}

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.updateState = this.updateState.bind(this);

    this.state = {
      cowsay: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };
  }

  updateState(cowsay) {
    //let cowsay? add personal code, if I can figure out how to do cowsay stuff...
  };

  render() {
    return (
      <div>
        <Header />
        <div id="cowsayWrapper">
          <div id="cowsay">{this.state.cowsay}</div>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));//shouldn't <App/> aactually be <App />? It's a self closing tag, yeah?