export const initialExpenseState = [];

let validateExpense = (expense) => {
  if ( ! expense.name ) {
    throw new Error('Missing Title');
  }
};

export default (state=initialExpenseState,action) => {

  let {type,payload={}} = action;
  let {id,categoryId} = payload;


  switch (type){
  case 'EXPENSE_CREATE':{
    return [...state,{...payload}];
  }
  case 'EXPENSE_DELETE':{
    return state.filter( (item,i) => item.id !== payload);
  }

  case 'EXPENSE_UPDATE':{
    return state.map( (item,i) => item.id === payload.id ? payload : item);
  }

  default:
    return state;
  }
};
