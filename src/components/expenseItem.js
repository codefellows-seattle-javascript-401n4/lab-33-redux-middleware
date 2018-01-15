'use strict';


import React from 'react';
import ExpenseForm from './expenseForm.js';
import EditExpense from './editExpense.js';

class ExpenseItem extends React.Component {
  constructor(props){
    super(props);

    this.editToggle = this.editToggle.bind(this);

    this.state = {
      isEditing: false,
    };
  }

  editToggle(event){
    event.preventDefault();
    this.setState({isEditing: !this.state.isEditing});
  }

  render(){
    return(
      <div>
        {
          this.state.isEditing ? (
            <div>
              <EditExpense updateExpense={this.props.updateExpense} expense={this.props.expense} name={this.props.name} price={this.props.price} catId={this.props.catId}/>
              <button onClick={this.editToggle}> Return </button>
            </div>
          ) : (
            <button type="submit" onClick={this.editToggle}>Edit</button>
          )
        }
        <button onClick={() => this.props.deleteExpense(this.props.expense.id)}> Delete</button>
      </div>
    );
  }
}

export default ExpenseItem;
