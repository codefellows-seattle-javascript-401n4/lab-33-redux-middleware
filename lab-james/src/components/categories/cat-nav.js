import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/renderIf.js';
import Form from '../form.js';
import uuid from 'uuid/v4';

import {catCreate} from './cat-actions.js';

import '../../style/components/cat.scss';

class CatNav extends React.Component {

  constructor(props){
    super(props);

    this.state ={
      renderForm: false,
    }

    this.toggleForm = this.toggleForm.bind(this);
    this.catAdd = this. catAdd.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.idChange(e.target.id);
  }

  toggleForm(){
    if(this.state.renderForm){
      this.setState({renderForm: false});
    }

    if(!this.state.renderForm){
      this.setState({renderForm: true});
    }
  }

  catAdd(state){
    state.Budget = parseInt(state.Budget);
    state.id = uuid();
    state.createDate = new Date();
    state.expenses = 0;
    state.updated = '';
    state.remaining = state.Budget;
    this.props.handleCatCreate(Object.assign({}, state));
  }

  render(){
    return(
      <div className="cat-nav">
        <button type="button" className="button" onClick={this.toggleForm}>+Add New Budget</button>
        <p className="cat-nav-item" onClick={this.handleClick}>Show All</p>
        {
          this.props.categories.map(category => (
            <p key={category.id} id={category.id} className="cat-nav-item" onClick={this.handleClick}>{category.name}</p>
          ))
        }
        {renderIf(
          this.state.renderForm,
          <Form toggleForm={this.toggleForm} type="Budget" submitAction={this.catAdd}/>
        )}
      </div>

    )
  }

}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleCatCreate: category => dispatch(catCreate(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatNav);
