import uuid from 'uuid/v4';

export const catNavUpdate = target => {
  return {
    type: 'CAT_NAV_UPDATE',
    payload: target,
  };
};

export const createCategory = category => {
  category.id = uuid();
  category.createDate = new Date();
  category.render = true;

  return {
    type: 'CATEGORY_ADD',
    payload: category,
  };
};

export const updateCategory = category => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  };
};
