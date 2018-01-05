import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/renderIf.js';
import Form from '../form.js';
import ExpList from '../expenses/exp-list.js';
import uuid from 'uuid/v4';

import {catUpdate} from './cat-actions.js';
import {catDelete} from './cat-actions.js';
import {expCreate} from '../expenses/exp-actions.js';


class CatItem extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      renderUpdate: false,
      renderExpForm: false
    }

    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.toggleExpForm = this.toggleExpForm.bind(this);
    this.catUpdate = this.catUpdate.bind(this);
    this.delete = this.delete.bind(this);
    this.expAdd = this.expAdd.bind(this);
  }

  toggleUpdate(){
    if(this.state.renderUpdate){
      this.setState({renderUpdate: false});
    }

    if(!this.state.renderUpdate){
      this.setState({renderUpdate: true});
    }
  }

  toggleExpForm(){
    if(this.state.renderExpForm){
      this.setState({renderExpForm: false});
    }

    if(!this.state.renderExpForm){
      this.setState({renderExpForm: true});
    }
  }

  catUpdate(state){
    state.Budget = parseInt(state.Budget);
    state.remaining = state.Budget - state.expenses;
    this.props.handleCatUpdate(state);
  }

  delete(){
    this.props.handleCatDelete(this.props.category.id);
  }

  expAdd(state){
    state.Amount = parseInt(state.Amount);
    state.catId = this.props.category.id;
    state.id = uuid();
    state.difference = state.Amount;
    this.props.handleExpCreate(state);

    let cat = this.props.categories.filter(category => {
      return category.id === this.props.category.id;
    })[0];

    cat.expenses = cat.expenses + state.Amount;
    cat.remaining = cat.Budget - cat.expenses;
    this.catUpdate(cat);
  }

  render(){
    return (
      <div>
        {renderIf(
          !this.props.catId,
          <div className='cat-item'>
            <div className='cat-details'>
              <h3>{this.props.category.name}</h3>
              <h3>Budget: {this.props.category.Budget}</h3>
              <h3>Total Expenses: {this.props.category.expenses}</h3>
              <h3>Remaining: {this.props.category.remaining}</h3>
              <p>{this.props.category.comments}</p>
              <button onClick={this.toggleUpdate}>Update</button>
              <button onClick={this.delete}>Delete</button>
              <button onClick={this.toggleExpForm}>+ Add Expense</button>
            </div>
            <ExpList catId={this.props.category.id} />
          </div>
        )}
        {renderIf(
          this.props.catId === this.props.category.id,
          <div className='cat-item'>
            <div className='cat-details'>
              <h3>{this.props.category.name}</h3>
              <h3>Budget: {this.props.category.Budget}</h3>
              <h3>Total Expenses: {this.props.category.expenses}</h3>
              <h3>Remaining: {this.props.category.remaining}</h3>
              <p>{this.props.category.comments}</p>
              <button onClick={this.toggleUpdate}>Update</button>
              <button onClick={this.delete}>Delete</button>
              <button onClick={this.toggleExpForm}>+ Add Expense</button>
            </div>
            <ExpList catId={this.props.category.id} />
          </div>
        )}
        {renderIf(
          this.state.renderUpdate,
          <Form toggleForm={this.toggleUpdate} type='Budget' submitAction={this.catUpdate} item={this.props.category} action="Update" defaultNum={this.props.category.Budget}/>
        )}
        {renderIf(
          this.state.renderExpForm,
          <Form toggleForm={this.toggleExpForm} type='Amount' submitAction={this.expAdd} action="Submit" />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleCatUpdate: category => dispatch(catUpdate(category)),
  handleCatDelete: categoryId => dispatch(catDelete(categoryId)),
  handleExpCreate: exp => dispatch(expCreate(exp))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatItem);
