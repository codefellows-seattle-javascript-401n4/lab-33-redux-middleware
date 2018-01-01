export const catCreate = category => {
  return {
    type: 'CAT_ADD',
    payload: category,
  };
};
