export const getDashboard = (newInput) => {
  console.log('in action');
  return {
    type: 'GET_STOCK',
    newInput,
  };
};

export const saveETFs = (newInput) => {
  console.log('in action saveETF');
  return {
    type: 'SAVE_STOCK',
    newInput,
  };
};
