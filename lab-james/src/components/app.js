import React from 'react';
import {connect} from 'react-redux';

import Header from './header.js';
import CatNav from './categories/cat-nav.js';
import CatList from './categories/cat-list.js';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      name: 'test'
    };
  }

  render(){
    return(
      <div>
        <Header />
        <CatNav />
        <CatList catList={this.props.categories.filter(category => (
          category.name === this.state.name
        ))} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(App);
