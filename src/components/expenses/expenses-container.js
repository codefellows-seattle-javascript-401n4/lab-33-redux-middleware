import React from 'react';
import {connect} from 'react-redux';
import {expensesCreate, expensesUpdate, expensesDelete} from './expenses-actions';

import ExpensesList from './expenses-list';

class Expenses extends React.Component {

    render() {
        return (
            <ExpensesList
                categoryId={this.props.categoryId}
                expenses={this.props.expenses}
                handleAdd={this.props.expensesCreate}
                handleDelete={this.props.expensesDelete}
                handleUpdate={this.props.expensesUpdate}
            />
        )
    }

}

const mapStateToProps = (state) => ({
    expenses: state.expenses
});

const mapDispatchToProps = (dispatch,getState) => ({
    expensesCreate: expense => dispatch( expensesCreate(expense) ),
    expensesDelete: expense => dispatch( expensesDelete(expense) ),
    expensesUpdate: expense => dispatch( expensesUpdate(expense) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);