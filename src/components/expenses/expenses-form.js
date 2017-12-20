import React from 'react';

class ExpenseForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.props.expenses || defaultState;

    let defaultState = {
      title: '',
      categoryId: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(e) {
     this.setState({ [e.target.name]: e.target.value });
   }

   handleSubmit(e) {
     e.preventDefault;
     this.props.handler(Object.assign({}, this.state));
   }

   render() {
     return (
       <form className="expensesForm" onSubmit={ this.handleSubmit }>
          <input
            type='text'
            name='expenses'
            placeholder='Enter Expense'
            onChange={ this.handleChange }
          />

       </form>

     )
   }
}

export default ExpenseForm;

