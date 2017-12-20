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

    handleUpdate(exense) {
        this.props.handleUpdate(exense);
        this.toggleModal();
    }

    render() {

        let {card, categoryId, handleDelete} = this.props;

        return (

            <div key={expenses.id} className="expenses">


                <div>
                    {expenses.title}
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
                        <CardForm
                            handler={this.handleUpdate}
                            card={card}
                            categoryId={categoryId}
                        />
                    </Modal>
                )}

            </div>

        )
    }

}

export default Expenses;