import React from 'react';
import {connect} from 'react-redux';

import Header from './header.js';
import CatNav from './categories/cat-nav.js';
import CatList from './categories/cat-list.js';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      id: ''
    };

    this.idChange = this.idChange.bind(this);
  }

  idChange(value){
    this.setState({id: value});
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <Header />
        <CatNav idChange={this.idChange}/>
        <CatList catId={this.state.id} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(App);
