export const catCreate = category => {
  return {
    type: 'CAT_ADD',
    payload: category,
  };
};

export const catUpdate = category => {
  return {
    type: 'CAT_UPDATE',
    payload: category,
  };
};

export const catDelete = categoryId => {
  return {
    type: 'CAT_DELETE',
    payload: categoryId,
  };
};
