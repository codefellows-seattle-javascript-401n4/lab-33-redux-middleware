import React from 'react';

import Modal from '../modal';
import ExpensesForm from './expenses-form';
import {renderIf} from '../../lib/__';

class Expenses extends React.Component {

    constructor(props) {

        super(props);

        this.state = {editing:false};

        this.toggleModal = this.toggleModal.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);

    }

    toggleModal() {
        let editing = ! this.state.editing;
        this.setState({editing})
    }

    handleUpdate(expense) {
        this.props.handleUpdate(expense);
        this.toggleModal();
    }

    render() {

        let {expense, categoryId, handleDelete} = this.props;

        return (

            <div key={expense.id} className="expenses">


                <div>
                    {expense.title}
                </div>

                <div className="actions">
                    <a href="#" onClick={() => handleDelete(expense)}>
                        <i className="fa fa-trash-o"></i>
                    </a>
                    <a href="#" onClick={this.toggleModal}>
                        <i className="fa fa-cog"></i>
                    </a>
                </div>

                {renderIf(
                    this.state.editing,
                    <Modal
                        title="Edit Expense"
                        close={this.toggleModal}
                    >
                        <ExpensesForm
                            handler={this.handleUpdate}
                            expense={expense}
                            categoryId={categoryId}
                        />
                    </Modal>
                )}

            </div>

        )
    }

}

export default Expenses;