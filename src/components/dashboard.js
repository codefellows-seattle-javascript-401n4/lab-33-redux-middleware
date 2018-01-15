'use strict';

import React from 'react';

import {connect} from 'react-redux';

import CatForm from './catForm.js';
import CatList from './catList.js';


import {expenseCreate,expenseUpdate,expenseDelete} from '../Actions/expenseActions.js';
import {catCreate,catUpdate,catDelete} from '../Actions/catActions.js';

class Categories extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log('expense props',this.props.expenses);
    return(
      <div>
        <div className="header">
          <h1 className="headerWords"> Rylees Awesome Expense Tracker </h1>
          <div className="siteForm">
            <CatForm handleAdd={this.props.handleAddCategory} expenses={this.props.expenses} handleUp={this.props.handleUpdateCategory}/>
          </div>
        </div>
        <CatList handleAdd={this.props.handleAddCategory} handleUp={this.props.handleUpdateCategory} cats={this.props.categories} handleAddEx={this.props.handleAddExpense} expenses={this.props.expenses} updateExpense={this.props.handleUpdateExpense} handleDelete={this.props.handleDeleteCategory} deleteExpense={this.props.handleDeleteExpense}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories : state.categories || [],
  expenses : state.expenses || [],
});

const mapDispatchToProps = (dispatch, getState ) => ({
  handleAddCategory: category => dispatch(catCreate(category)),
  handleUpdateCategory: category => dispatch(catUpdate(category)),
  handleDeleteCategory: category => dispatch(catDelete(category)),
  handleAddExpense: expense => dispatch(expenseCreate(expense)),
  handleUpdateExpense: expense => dispatch(expenseUpdate(expense)),
  handleDeleteExpense: expense => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Categories);
