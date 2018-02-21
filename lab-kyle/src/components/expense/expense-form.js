import React from 'react';

import ExpenseItem from './expense-item';

let emptyState = {
  name: '',
  cost: 0,
}

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
      cost: 0,
      categoryId: this.props.categoryId,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  handleChange(e){
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  render(){
    return (
      <div className="expense-form">
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder="Enter Expense Name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="cost"
            placeholder="0"
            type="number"
            value={this.state.cost}
            onChange={this.handleChange}
          />

          <button type="submit">Cha-Ching</button>
        </form>

        <ExpenseItem
          expenseDelete={this.props.expenseDelete}
          expenses={this.props.expenses}
          categoryId={this.state.categoryId}
        />

      </div>
    )
  }
}
export default ExpenseForm;
