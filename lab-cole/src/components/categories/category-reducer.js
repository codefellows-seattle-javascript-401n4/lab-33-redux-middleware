'use strict';
//class demo below, adjustment needed for lab 26 reuqirements
const initialState = [];

let validateCategory = (category) => {
  if (! category.title ) {
    throw new Error("Need a title");
  }
}

export default (state=initialState, action) => {
  let {type, payload} = action;//class demo, change to fit lab 26 requirements

  switch ( type ) {

    case "CATEGORY_ADD":
      validateCategory(payload);//class demo, change to fit lab 26 requirements
      return [...state, payload];//class demo, change to fit lab 26 requirements

    case "CATEGORY_UPDATE":
      return state.map( (item,i) => item.id === payload.id ? payload : item );//class demo, change to fit lab 26 requirements

    case "CATEGORY_DELETE":
      return state.filter( (item,i) => item.id !== payload );//class demo, change to fit lab 26 requirements

    default:
      return state;
  }
};