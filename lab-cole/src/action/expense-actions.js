import uuid from 'uuid';

export const create = (section) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    id: uuid(),
    categoryID,
    created: new Date(),
    name,
    price,
  },
})

export const update = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
})

export const destroy = (expense) => ({
  type: 'EXPENSE_DELETE',
  payload: expense,
})