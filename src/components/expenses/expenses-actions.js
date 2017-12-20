import uuid from 'uuid/v4';

export const expensesCreate = (expense) => {

    expense.id = uuid();
    expense.createDate = new Date();

    return {
        type:"EXPENSES_ADD",
        payload: card
    };

};

export const expensesDelete = (expense) => {
    return {
        type:"EXPENSES_DELETE",
        payload: card
    }
}

export const expensesUpdate = (expense) => {
    return {
        type:"EXPENSES_UPDATE",
        payload: card
    }
}