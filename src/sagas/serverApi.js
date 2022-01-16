export const getStockDetailsFromApi = async () => {
  const endPoint = 'http://localhost:4000/api/loadETFs';
  const fetchStatus = false;
  try {
    const response = await fetch(endPoint, {
      mode: 'cors',
      headers: {
        // limit the origin to company specific domain
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
      },
    });
    console.log(response);
    const data = await response.json();
    if (response.status === 200) {
      console.log(data);
      return data;
    } else {
      console.log('Error: response with invalid status code');
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
  return fetchStatus;
};

export const saveETFDataToApi = async (etfData) => {
  const endPoint = 'http://localhost:4000/api/saveETFs';
  const fetchStatus = false;
  try {
    if (etfData) {
      const response = await fetch(endPoint, {
        method: 'POST',
        body: JSON.stringify(etfData),
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          // limit the origin to company specific domain
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Headers': '*',
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        return data;
      } else {
        console.log('Error: response with invalid status code');
        console.log(response);
      }
    } else {
      console.log('Error: to etfData to save');
    }
  } catch (error) {
    console.log(error);
  }
  return fetchStatus;
};
