import uuid from 'uuid/v4';

export const categoryCreate = ({name}) => {
  return {
    type: "CATEGORY_CREATE",
    payload: {
      id: uuid(),
      created: Date.now(),
      name,
      budget,
    },
  };
};

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

export const categoryUpdate = (category) => {
  return {
    type: "CATEGORY_UPDATE",
    payload: category
  };
};

export const expenseUpdate = (expense) => {
  return {
    type: "EXPENSE_UPDATE",
    payload: expense,
  };
};

export const categoryDelete = (categoryId) => {
  return {
    type: "CATEGORY_DELETE",
    payload: categoryId
  };
};

export const expenseDelete = (expense) => {
  return {
    type: "EXPENSE_DELETE",
    payload: expense,
  };
};
