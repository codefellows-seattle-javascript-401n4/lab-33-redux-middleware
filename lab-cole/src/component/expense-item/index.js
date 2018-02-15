import React from 'react';
import ExpenseForm from '../expense-form';
import {connect} from 'react-redux';
import * as expense from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {editing: false}

    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(expense){
    this.props.expenseUpdate(expense)
    this.setState({editing: false})
  } 

  render() {
    return (
      <form className='expense-item'>
        <input type="text" onChange={this.handleUpdate} />
        <button onClick={this.handleUpdate}> Update </button>
        <button onClick={this.state}> Cancel Update </button>
      </form>
    )
  }
}