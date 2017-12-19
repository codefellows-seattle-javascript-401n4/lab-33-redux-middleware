import React from 'react';
import {renderIf} from '../lib/renderIf.js';

import Header from './header.js';
import CatNav from './categories/cat-nav.js';
import CatForm from './categories/cat-form.js';
import CatList from './categories/cat-list.js';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      showCatForm: false
    }

    this.toggleCatForm = this.toggleCatForm.bind(this);

  }

  toggleCatForm(){
    if(!this.state.showCatForm){
      this.setState({showCatForm: true});
    }

    if(this.state.showCatForm){
      this.setState({showCatForm: false});
    }
  }

  render(){
    return(
      <div>
       <Header />
       <button type="button" onClick={this.toggleCatForm}>+Add New Budget</button>
       <CatNav />
       {renderIf(
         this.state.showCatForm,
         <CatForm toggleCatForm={this.toggleCatForm}/>
       )}
       <CatList />
      </div>
    )
  }
}

export default App;
