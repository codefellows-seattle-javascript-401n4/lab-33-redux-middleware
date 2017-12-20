const emptyState = {};

export default (state=emptyState, action) => {

  let {type, payload={}} = action;  
  let {id, categoryId} = payload;
  let categoryExpenses = state[categoryId];

  switch ( type ) {

      case "CATEGORY_ADD":        
        return {...state, [payload.id]:[]};

      case "CATEGORY_DESTROY":
        return state.filter(item => item.id !== payload)         

      case "EXPENSE_ADD":
        return {...state, [categoryId]: [...categoryExpenses, payload]};

      case "CARD_DESTROY":
        return state.filter(item => item.id !== payload)

      case "CARD_UPDATE":
        let updateCategoryCardList = categoryCards.map( (card,i) => card.id === id ? payload : card );
        return {...state, [categoryId]: updateCategoryCardList};

      default:
          return state;

  }
};