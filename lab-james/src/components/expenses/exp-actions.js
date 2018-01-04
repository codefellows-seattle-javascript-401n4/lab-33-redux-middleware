export const expCreate = exp => {
  return {
    type: 'EXP_ADD',
    payload: exp,
  };
};

export const expUpdate = exp => {
  return {
    type: 'EXP_UPDATE',
    payload: exp,
  };
};
