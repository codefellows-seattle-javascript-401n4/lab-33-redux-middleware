const emptyState = {};

export default(state=emptyState, {type, payload}) => {
  switch (type) {
    case 'CATEGORY_CREATE':
      return {...state, [payload.id]:[]};

    case 'EXPENSE_CREATE':
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
