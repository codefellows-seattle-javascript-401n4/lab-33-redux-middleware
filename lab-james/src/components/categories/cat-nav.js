import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/renderIf.js';
import Form from '../form.js';

import '../../style/components/cat.scss';

class CatNav extends React.Component {

  constructor(props){
    super(props);

    this.state ={
      renderForm: false,
      budget: 'budget',
      name: 'name'
    }

    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm(){
    if(this.state.renderForm){
      this.setState({renderForm: false});
    }

    if(!this.state.renderForm){
      this.setState({renderForm: true});
    }
  }

  render(){
    return(
      <div className="cat-nav">
        <button type="button" className="button" onClick={this.toggleForm}>+Add New Budget</button>
        <p className="cat-nav-item">Show All</p>
        <p className="cat-nav-item">Test</p>
        <p className="cat-nav-item">Test</p>
        <p className="cat-nav-item">TestTestTestTestTestTest</p>
        {renderIf(
          this.state.renderForm,
          <Form toggleForm={this.toggleForm} type="Budget"/>
        )}
      </div>

    )
  }

}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CatNav);
