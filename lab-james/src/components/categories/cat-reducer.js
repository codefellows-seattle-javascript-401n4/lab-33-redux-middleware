const initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){

  case 'CAT_ADD': return [...state, payload];

  case 'CAT_UPDATE': return state.map(item => item.id === payload.id ? payload : item);

  case 'CAT_DELETE': return state.filter(item => item.id !== payload);

  default: return state;

  }
};
