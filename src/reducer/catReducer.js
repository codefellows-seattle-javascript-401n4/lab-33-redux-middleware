'use strict';

export const initialState = [];

let validateCategory = (category) => {
  if (! category.name ) {
    throw new Error('Need a title');
  }
};

export default (state=initialState,action) => {
  let {type,payload} = action;

  switch (type){
  case 'CATEGORY_CREATE':
    return [...state,payload];

  case 'CATEGORY_UPDATE':
    console.log('UPDATE STATE', payload);
    return state.map( (item,i) => item.id === payload.id ? payload : item);


  case 'CATEGORY_DELETE':
    return state.filter( (item,i) => item.id !== payload);


  default:
    return state;
  }
};
