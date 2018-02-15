const emptyState = []

export default (state=emptyState, {type, payload}) => {

  switch(type) {

    case 'EXPENSE_CREATE':
      return [...state, payload]
    case 'EXPENSE_UPDATE':
      return state.map(item => item.id === payload.id ? payload : item)
    case 'EXPENSE_DELETE':
      return state.filter(item => item.id !== payload.id)
    case 'EXPENSE_CLEAR':
      return emptyState
    default:
      return state

  }

}