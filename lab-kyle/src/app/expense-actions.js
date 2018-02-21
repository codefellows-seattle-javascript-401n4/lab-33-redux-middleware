import uuid from 'uuid/v4';

export const expenseCreate = ({categoryId,name,cost}) => {
  return {
    type: "EXPENSE_CREATE",
    payload: {
      id: uuid(),
      created: Date.now(),
      categoryId,
      name,
      cost,
    },
  };
};

export const expenseUpdate = (expense) => {
  return {
    type: "EXPENSE_UPDATE",
    payload: expense,
  };
};

export const expenseDelete = (expense) => {
  return {
    type: "EXPENSE_DELETE",
    payload: expense,
  };
};
