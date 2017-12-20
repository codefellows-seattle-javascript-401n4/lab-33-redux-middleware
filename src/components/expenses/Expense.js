import React from 'react';
import {connect} from 'react-redux';
import {createExpense, updateExpense, deleteExpense} from './expenseState/expense-actions';

import ExpenseForm from './Expense-form';
import ExpenseList from './Expense-list';


class Expense extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id='ExpenseWrapper'>
       <p> Hello All!!!</p>
        {/* <ExpenseForm/>
        <ExpenseList
          categoryId={this.props.categoryId}
          expenses={this.props.expenses}
          handleAdd={this.props.createExpense}
          handleDelete={this.props.deleteExpense}
          handleUpdate={this.props.updateExpense}
        /> */}
      </div>
    )
  }
}

  const mapStateToProps = (state) => ({
    expenses: state.expenses
  });

  const mapDispatchToProps = (dispatch,getState) => ({
    createExpense: expense => dispatch(createExpense(expense)),
    deleteExpense: expense => dispatch(deleteExpense(expense)),
    updateExpense: expense => dispatch(updateExpense(expense)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Expense);