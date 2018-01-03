const initialState = {};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){

  case 'EXP_ADD': return {...state, [payload.catId]: [...state[payload.catId], payload]};

  case 'CAT_ADD': return {...state, [payload.id]: []};

  case 'CAT_DELETE':
    let {[payload]:deleted, ...newState} = state;
    return newState;

  default: return state;

  }
};
