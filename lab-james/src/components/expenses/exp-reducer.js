const initialState = {};

export default (state=initialState, action) => {
  let {type, payload={}} = action;
  let catExpenses = state[payload.catId];

  switch(type){

  case 'EXP_ADD': return {...state, [payload.catId]: [...state[payload.catId], payload]};

  case 'EXP_UPDATE':
    let updateList = catExpenses.map(exp => exp.id === payload.id ? payload : exp);
    return {...state, [payload.catId]: updateList};

  case 'EXP_DELETE':
    let deleteList = catExpenses.filter(exp => exp.id !== payload.id);
    console.log(catExpenses);
    return {...state, [payload.catId]: deleteList};

  case 'CAT_ADD': return {...state, [payload.id]: []};

  case 'CAT_DELETE':
    let {[payload]:deleted, ...newState} = state;
    return newState;

  default: return state;

  }
};
