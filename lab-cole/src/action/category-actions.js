import uuid from 'uuid';

export const create = (categoryID, name, budget) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    ID: uuid(),
    created: new Date(),
    name,
    budget,
  },
})

export const update = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
})

export const destroy = (category) => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
})