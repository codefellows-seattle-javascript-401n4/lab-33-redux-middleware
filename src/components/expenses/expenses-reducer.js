const initialState = {};

export default (state=initialState, action) => {

    let {type, payload={}} = action;
    let {id, categoryId} = payload;
    let categoryExpenses = state[categoryId];

    switch ( type ) {

        case "CATEGORY_ADD":
            return {...state, [payload.id]:[]};

         case "CATEGORY_DELETE":
            let  {[payload]:x, ...newState} = state;
            return newState;

        case "EXPENSES_ADD":
            return {...state, [categoryId]: [...categoryExpenses, payload]};

        case "EXPENSES_DELETE":
            let deleteCategoryExpensesList = categoryExpenses.filter( (expense,i) => expense.id !== id );
            return {...state, [categoryId]: deleteCategoryExpensesList};

        case "EXPENSES_UPDATE":
            let updateCategoryExpensesList = categoryExpenses.map( (expense,i) => expense.id === id ? payload : expense );
            return {...state, [categoryId]: updateCategoryExpensesList};

        default:
            return state;

    }
};
