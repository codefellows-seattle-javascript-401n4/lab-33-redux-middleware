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
     validateData(payload);        
     return state.map(item => item.id === payload.id ? payload : item );
      
    case "CATEGORY_DESTROY":
     return state.filter(item => item.id !== payload)
      
    case "EXPENSE_ADD": 
     return state.map(category => {
       if(category.id === payload.categoryId) { 
         category.budget -= payload.cost;
         return category;
        } 
       return category;
     });

    case "EXPENSE_UPDATE":
    return state.map(category => {
      if(category.id === payload.categoryId) { 
        category.budget -= payload.cost;
        return category;
       } 
      return category;
    });

    case "EXPENSE_DELETE":
    return state.map(category => {
      if(category.id === payload.categoryId) { 
        category.budget += payload.cost;
        return category;
       } 
      return category;
    });

    default:
        return state;

  }
};