import React from 'react';

import ExpensesQuickForm from './expenses-quick-form';

import Expenses from './expenses';

class ExpensesList extends React.Component {

    render() {

        let categoryId = this.props.categoryId;
        let expenses = this.props.expenses[categoryId];

        return (

            <div className="deck">

                <ExpensesQuickForm handler={this.props.handleAdd} categoryId={categoryId} />

                {
                    expenses && expenses.map( (expense,i) =>
                        <Expenses
                            key={expense.id}
                            handleDelete={this.props.handleDelete}
                            handleUpdate={this.props.handleUpdate}
                            expense={expense}
                            categoryId={categoryId}
                        />
                    )
                }

            </div>

        )
    }

}

export default ExpensesList;