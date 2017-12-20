const emptyState = [];

let hasTitle = (payload) => {
  if(payload.name === '') throw new Error('no category name given');
};

let hasExpenseValue = (payload) => {
  if(payload.budget === 0) throw new Error('no budget amount given');
};

let validateSubmit = (payload) => {
  hasTitle(payload);
  hasExpenseValue(payload);
};

export default (state=emptyState, {type, payload}) => {
  switch(type){
    case 'CATEGORY_CREATE':
      validateSubmit(payload);
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      validateSubmit(payload);
      return state.map(item => item.id === payload.id ? payload : item);
    case 'CATEGORY_DESTROY':
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
}