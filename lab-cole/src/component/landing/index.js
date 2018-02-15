import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import * as category from '../../action/category-actions.js';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import * as expense from '../../action/expense-actions.js';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='landing'>
        <CategoryForm onComplete={CategoryForm} />
        {categories.map((category, i) => 
          <div>
            <h2> {category.title} </h2>
            <button onClick={() => categoryRemove(category)}> Delete Category </button>
            <CategoryForm category={category} onComplete={categoryUpdate} />
          </div>
        )}
        <ExpenseForm onComplete={ExpenseForm} />
        {expenses.map((expense, i) => 
          <div>
            <h2> {expense.title} </h2>
            <button onClick={() => expenseRemove(expense)}> Delete Expense </button>
            <ExpenseForm expense={expense} onComplete={expenseUpdate} />
          </div>
        )}
      </div>
    )
  }
}

export default connect()(Landing)