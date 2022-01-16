export const getDashboard = (newInput) => {
  console.log('in action');
  return {
    type: 'GET_STOCK',
    newInput,
  };
};
