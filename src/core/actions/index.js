export const getDashboard = (newInput) => {
  return {
    type: 'GET_STOCK',
    newInput,
  };
};

export const saveETFs = (newInput) => {
  return {
    type: 'SAVE_STOCK',
    newInput,
  };
};
