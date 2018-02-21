const emptyState = {};

let hasName = (payload) => {
  if(payload.name === '') throw new Error('Need Category Name');
};

let hasExpense = (payload) => {
  if(payload.cost === 0) throw new Error('Need to enter in an expense');
};

let validSubmit = (payload) => {
  hasName(payload);
  hasExpense(payload);
};

export default(state=emptyState, {type, payload}) => {
  switch (type) {
    case 'CATEGORY_CREATE':
      return {...state, [payload.id]:[]};

    case 'EXPENSE_CREATE':
      validSubmit(payload);
      let categoryId = payload.categoryId;
      let category = state[categoryId];
      let result = [...category, payload];

      return {...state, [categoryId]:result}

    case 'EXPENSE_UPDATE':
      return state;

    case 'EXPENSE_DELETE':
      categoryId = payload.categoryId;
      category = state[categoryId];
      
      let newState = category.filter(section => section.id != payload.id);

      return {...state, [categoryId]:newState};

    default:
      return state;

  }
};
