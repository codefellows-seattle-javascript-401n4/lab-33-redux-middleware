const emptyState = {};

let hasTitle = (payload) => {
  if(payload.name === '') throw new Error('no category name given');
};

let hasExpenseValue = (payload) => {
  if(payload.cost === 0) throw new Error('no expense cost given');
};

let validateSubmit = (payload) => {
  hasTitle(payload);
  hasExpenseValue(payload);
};

export default (state=emptyState, {type, payload}) => {
  switch(type){
    case 'CATEGORY_CREATE':
      return {...state, [payload.id]:[]};
    case 'EXPENSE_CREATE':
      validateSubmit(payload);
      let categoryID = payload.categoryID;
      let category = state[categoryID];
      let result = [...category, payload];
      return {...state, [categoryID]: result};
    case 'EXPENSE_UPDATE':
      return state;
    case 'EXPENSE_DESTROY':
      categoryID = payload.categoryID;
      category = state[categoryID];
      let newState = category.filter(section => section.id != payload.id);
      return {...state, [categoryID]:newState};
    default:
      return state;
  }
}