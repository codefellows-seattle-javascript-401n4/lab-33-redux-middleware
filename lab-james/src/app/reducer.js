const initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){

  case 'CAT_NAV_UPDATE': return state.map(item => item.id === payload.id ? item : item.render = payload.value);

  case 'CATEGORY_ADD': return [...state, payload];

  default: return state;

  }
};
