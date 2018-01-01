const initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){

  case 'CAT_ADD': return [...state, payload];

  default: return state;

  }
};
