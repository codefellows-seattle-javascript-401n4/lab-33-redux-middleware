const emptyState = [];

let validateData = (category) => {

  if(category.name.length < 1) { throw new Error('No category name')};
  if(category.budget.length < 1) {throw new Error('No budget given')};
  if(category.id.length < 1) {throw new Error('No ID given')};
  
}

export default (state=emptyState, {type, payload}) => {
  
  switch ( type ) {

    case "CATEGORY_ADD":
     validateData(payload);    
     return [...state, payload];

    case "CATEGORY_UPDATE":
     return state.map(item => item.id === payload.id ? payload : item );
      
    case "CATEGORY_DESTROY":
     return state.filter(item => item.id !== payload)
      
    default:
        return state;

  }
};