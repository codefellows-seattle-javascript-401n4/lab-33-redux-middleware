const initialState = [];

let hasName = (payload) => {
  if(payload.name === '') throw new Error('Need Category Name');
};

let hasExpense = (payload) => {
  if(payload.budget === 0) throw new Error('Need to enter in an expense');
};

let validSubmit = (payload) => {
  hasName(payload);
  hasExpense(payload);
};

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
    case "CATEGORY_CREATE":
      validSubmit(payload);
      return [...state, payload];

    case "CATEGORY_UPDATE":
      validSubmit(payload);
      return state.map((item,i) => item.id === payload.id ? payload : item);

    case "CATEGORY_DELETE":
      return state.filter((item,i) => item.id !== payload);

    default:
      return state;
  }
};
