import React from 'react';

class ExpenseItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="expense-item">
        {this.props.expenses[this.props.categoryId].map((expense,i) =>
          <div key={expense.id}>
            <h5>{(expense.name)}</h5>
            <button onClick={() => this.props.expenseDelete(expense)}>X</button>
          </div>
        )}
      </div>
    )
  }
}
export default ExpenseItem;
