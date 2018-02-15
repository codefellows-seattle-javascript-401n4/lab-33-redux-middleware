import './_expense-form.scss';
import React from 'react';
import uuid from 'uuid';

let emptyState  = {
  name: '',
  price: ''
}

class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.expense || emptyState//should I do this.props.category state here, if we are supposed to be using a category item to show the state?

    this.handleExpenseSubmit = this.handleExpenseSubmit.bind(this)
    this.handleExpenseNameChange = this.handleExpenseNameChange.bind(this)
    this.handleExpensePriceChange = this.handleExpensePriceChange.bind(this)
  }

  handleExpenseSubmit(e){
    e.preventDefault()
    this.props.onComplete(this.state)
    this.setState(emptyState)
  }

  handleExpenseNameChange(e){
    let {value} = e.target
    this.setState({name: value})
  }

  handleExpensePriceChange(e){
    let {value} = e.target
    this.setState({price: value})
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.expense)
      this.setState(nextProps.expense)
  }

  render() {
    let buttonText = this.props.expense ? 'Update Expense': 'Create Expense'

    return (
      <form onSubmit={this.handleExpenseSubmit} className='expense-form'>

        <input
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleExpenseNameChange}
          />

        <input
          type='number'
          name='price'
          placeholder='price'
          value={this.state.budget}
          onChange={this.handleExpensePriceChange}
          /> 

        <button type='submit'> {buttonText} </button>

      </form>
    )
  }
}

export default ExpenseForm