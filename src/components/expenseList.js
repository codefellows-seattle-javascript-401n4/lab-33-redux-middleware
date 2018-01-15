'use strict';

import React from 'react';
import ExpenseItem from './expenseItem.js';


class ExpenseList extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div>
        <ul>
          {
            this.props.expenses.map( (expense,i) =>
              <li className="expenseLi" key={expense.id} expense={expense}>
                {expense.name}
                <br />
                ${expense.price}
                <ExpenseItem
                 catId={this.props.catId}
                 updateExpense={this.props.updateExpense}
                 handleAddEx={this.props.handleAddEx}
                 expenses={this.props.expenses}
                 deleteExpense={this.props.deleteExpense}
                 expense={expense}/>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default ExpenseList;
