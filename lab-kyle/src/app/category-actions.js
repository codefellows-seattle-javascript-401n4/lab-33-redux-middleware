import uuid from 'uuid/v4';

export const categoryCreate = ({name}) => {
  return {
    type: "CATEGORY_CREATE",
    payload: {
      id: uuid(),
      created: Date.now(),
      name,
    },
  };
};

export const categoryUpdate = (category) => {
  return {
    type: "CATEGORY_UPDATE",
    payload: category
  };
};

export const categoryDelete = (categoryId) => {
  return {
    type: "CATEGORY_DELETE",
    payload: categoryId
  };
};
