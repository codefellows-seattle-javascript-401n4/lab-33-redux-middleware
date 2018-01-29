import { filter } from 'lodash';

export default (state = [], { type, payload }) => {
  switch (type) {
    case 'INIT':
      return payload || [];
    case 'CREATE':
      return [...state, payload];
    case 'UPDATE':
      return state.map(item => (item._id === payload._id ? payload : item));
    case 'DELETE':
      return filter(state, { _id: payload });
    default:
      return state;
  }
};
