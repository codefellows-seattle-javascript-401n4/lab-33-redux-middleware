import initialState from '../lib/initialState';
  
  const categoryReducer = (state = initialState, action) => {
    let {type, category} = action;
    let oldState = {...state};

    switch(action.type) {
        case 'CATEGORY_CREATE':
          oldState[category.id] = category;
          return oldState;

        case 'CATEGORY_UPDATE':
          oldState[category.id].name = category.updatedContent;
          return oldState;

        
        case 'CATEGORY_DELETE':
          delete oldState[category];
          return oldState;

        case 'CATEGORY_TOGGLE':
          oldState[category].updating = !oldState[category].updating;
          return oldState;

        default:
            return oldState;
    }
  }

  export default categoryReducer;